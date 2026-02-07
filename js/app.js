// Main App Controller — ties everything together

import {
  getState, setCrisis, setDimension, setDimensionStrengths,
  getConcernedDimensions, getStrengthDimensions, getUnexploredConcerns,
  startDeepDive, setCurrentNode, addRootCause, addCrossPattern,
  pushHistory, popHistory, setScreen, getRootCauseIds
} from './state.js';

import {
  render, renderLanding, renderQuestion, renderMultiSelect,
  renderCrisisResponse, renderStopScreen, renderTransition,
  renderRootCauseFound, renderAbuseDefinition, renderExploreMoreSelection,
  showBackButton, hideBackButton, showProgress, hideProgress
} from './renderer.js';

import { crisisQuestions } from './data/crisis.js';
import { dimensionScan, scanOptions } from './data/scan.js';
import { physicalTree, physicalStart } from './data/physical.js';
import { emotionalTree, emotionalStart } from './data/emotional.js';
import { financialTree, financialStart } from './data/financial.js';
import { connectionsTree, connectionsStart } from './data/connections.js';
import { identityTree, identityStart } from './data/identity.js';
import { findTriggeredPatterns, evaluatePattern } from './patterns.js';
import { generateMirror } from './mirror.js';

// Map dimension names to their trees and start nodes
const dimensionTrees = {
  physical:    { tree: physicalTree, start: physicalStart },
  emotional:   { tree: emotionalTree, start: emotionalStart },
  financial:   { tree: financialTree, start: financialStart },
  connections: { tree: connectionsTree, start: connectionsStart },
  identity:    { tree: identityTree, start: identityStart }
};

// Progress tracking
let totalSteps = 0;
let currentStep = 0;

function updateProgress() {
  if (totalSteps > 0) {
    showProgress((currentStep / totalSteps) * 100);
  }
}

function stepForward() {
  currentStep++;
  updateProgress();
}

// ========================
// SCREEN: Landing
// ========================
function showLanding() {
  setScreen('landing');
  renderLanding(() => {
    totalSteps = 12; // rough estimate
    currentStep = 0;
    showCrisisQ1();
  });
}

// ========================
// SCREEN: Crisis Screening
// ========================
function showCrisisQ1() {
  setScreen('crisis1');
  stepForward();
  updateProgress();

  const q = crisisQuestions[0];
  renderQuestion({
    text: q.text,
    context: null,
    options: q.options,
    onSelect: (opt) => {
      setCrisis('selfHarm', opt.value);
      if (opt.value === 'yes' || opt.value === 'rather_not') {
        showCrisisResponse('self-harm');
      } else {
        showCrisisQ2();
      }
    }
  });

  showBackButton(() => showLanding());
}

function showCrisisQ2() {
  setScreen('crisis2');
  stepForward();

  const q = crisisQuestions[1];
  renderQuestion({
    text: q.text,
    context: null,
    options: q.options,
    onSelect: (opt) => {
      setCrisis('abuse', opt.value);
      if (opt.value === 'yes') {
        showCrisisResponse('abuse');
      } else if (opt.value === 'not_sure') {
        showAbuseDefinition();
      } else {
        showDimensionScan(0);
      }
    }
  });

  showBackButton(() => showCrisisQ1());
}

function showCrisisResponse(type) {
  setScreen('crisis-response');
  renderCrisisResponse({
    type,
    onContinue: () => {
      if (type === 'self-harm') {
        showCrisisQ2();
      } else {
        showDimensionScan(0);
      }
    },
    onStop: () => {
      renderStopScreen();
    }
  });
}

function showAbuseDefinition() {
  setScreen('abuse-definition');
  renderAbuseDefinition(
    () => { // Yes
      setCrisis('abuse', 'yes');
      showCrisisResponse('abuse');
    },
    () => { // No
      setCrisis('abuse', 'no');
      showDimensionScan(0);
    },
    () => { // Still not sure
      setCrisis('abuse', 'not_sure_continued');
      render(`
        <div class="question-screen">
          <p class="question-text">That's okay. As you go through the assessment, things may become clearer. Safety resources are available at the bottom of every screen.</p>
          <div class="options">
            <button class="option-btn" id="continue-assessment">Continue</button>
          </div>
        </div>
      `);
      document.getElementById('continue-assessment').addEventListener('click', () => {
        showDimensionScan(0);
      });
    }
  );
}

// ========================
// SCREEN: Dimension Scan (Layer 1)
// ========================
function showDimensionScan(index) {
  if (index >= dimensionScan.length) {
    showDimensionTransition();
    return;
  }

  setScreen(`scan-${index}`);
  stepForward();

  const dim = dimensionScan[index];

  renderQuestion({
    text: dim.text,
    context: `${dim.label}`,
    options: scanOptions.map(o => ({ label: o.label, value: o.value })),
    onSelect: (opt) => {
      setDimension(dim.id, opt.value);
      if (opt.value === 'strength') {
        showStrengthFollowUp(dim, index);
      } else {
        showDimensionScan(index + 1);
      }
    }
  });

  showBackButton(() => {
    if (index === 0) showCrisisQ2();
    else showDimensionScan(index - 1);
  });
}

function showStrengthFollowUp(dim, scanIndex) {
  setScreen(`strengths-${dim.id}`);

  renderMultiSelect({
    text: "What's working? (select all that apply)",
    context: dim.label,
    options: dim.strengths,
    onContinue: (selected) => {
      setDimensionStrengths(dim.id, selected);
      showDimensionScan(scanIndex + 1);
    },
    buttonLabel: 'Continue'
  });

  showBackButton(() => showDimensionScan(scanIndex));
}

// ========================
// SCREEN: Dimension Transition
// ========================
function showDimensionTransition() {
  setScreen('transition');
  stepForward();

  const state = getState();
  const concerns = getConcernedDimensions();
  const strengths = getStrengthDimensions();
  const neutrals = Object.entries(state.dimensions)
    .filter(([, d]) => d.status === 'neutral')
    .map(([name]) => name);

  totalSteps = 7 + (concerns.length * 5); // update estimate
  updateProgress();

  renderTransition({
    concerns,
    strengths,
    neutrals,
    onSelect: (dimension) => {
      beginDeepDive(dimension);
    },
    onAllGood: () => {
      showMirror();
    }
  });

  showBackButton(() => showDimensionScan(dimensionScan.length - 1));
}

// ========================
// SCREEN: Deep Dive
// ========================
function beginDeepDive(dimension) {
  const { tree, start } = dimensionTrees[dimension];
  startDeepDive(dimension, start);
  showDeepDiveNode(dimension, start, tree);
}

function showDeepDiveNode(dimension, nodeId, tree) {
  const node = tree[nodeId];
  if (!node) {
    console.error(`Node not found: ${nodeId}`);
    showMirror();
    return;
  }

  setScreen(`deepdive-${nodeId}`);
  setCurrentNode(nodeId);
  stepForward();

  renderQuestion({
    text: node.question,
    context: null,
    options: node.options.map(o => ({ label: o.label, next: o.next, rootCause: o.rootCause })),
    onSelect: (opt) => {
      if (opt.rootCause) {
        // Terminal node — root cause found
        addRootCause(dimension, opt.rootCause);
        showRootCauseFound(dimension, opt.rootCause);
      } else if (opt.next) {
        // Go to next question
        pushHistory({ type: 'deepdive', dimension, nodeId });
        showDeepDiveNode(dimension, opt.next, tree);
      }
    }
  });

  showBackButton(() => {
    const prev = popHistory();
    if (prev && prev.type === 'deepdive') {
      showDeepDiveNode(prev.dimension, prev.nodeId, dimensionTrees[prev.dimension].tree);
    } else {
      showDimensionTransition();
    }
  });
}

// ========================
// SCREEN: Root Cause Found
// ========================
function showRootCauseFound(dimension, rootCause) {
  setScreen('root-found');
  stepForward();

  const unexplored = getUnexploredConcerns();
  const hasMoreToExplore = unexplored.length > 0;

  renderRootCauseFound({
    rootCause,
    dimension,
    onExploreMore: hasMoreToExplore ? () => {
      showExploreMoreSelection();
    } : null,
    onShowMirror: () => {
      checkCrossDimensionalPatterns();
    }
  });

  hideBackButton();
}

// ========================
// SCREEN: Explore More Selection
// ========================
function showExploreMoreSelection() {
  setScreen('explore-more');
  const unexplored = getUnexploredConcerns();

  renderExploreMoreSelection({
    unexplored,
    onSelect: (dimension) => {
      beginDeepDive(dimension);
    },
    onShowMirror: () => {
      checkCrossDimensionalPatterns();
    }
  });

  hideBackButton();
}

// ========================
// SCREEN: Cross-Dimensional Pattern Detection (Layer 6)
// ========================
function checkCrossDimensionalPatterns() {
  const rootCauseIds = getRootCauseIds();
  const triggered = findTriggeredPatterns(rootCauseIds);

  if (triggered.length === 0) {
    showMirror();
    return;
  }

  // Take the most relevant pattern (first match)
  // Ask its cross-dimensional check questions
  runPatternCheck(triggered, 0, {});
}

function runPatternCheck(patterns, patternIndex, allAnswers) {
  if (patternIndex >= patterns.length) {
    // Evaluate all patterns and add confirmed ones
    for (const pattern of patterns) {
      const result = evaluatePattern(pattern, allAnswers);
      if (result.confirmed) {
        addCrossPattern(result);
      }
    }
    showMirror();
    return;
  }

  const pattern = patterns[patternIndex];
  const questions = pattern.checkQuestions;
  askPatternQuestion(patterns, patternIndex, questions, 0, allAnswers);
}

function askPatternQuestion(patterns, patternIndex, questions, qIndex, answers) {
  if (qIndex >= questions.length) {
    // Move to next pattern
    runPatternCheck(patterns, patternIndex + 1, answers);
    return;
  }

  const q = questions[qIndex];
  setScreen(`pattern-${q.id}`);
  stepForward();

  renderQuestion({
    text: q.question,
    context: 'A few more questions to complete the picture...',
    options: q.options.map(o => ({ label: o.label, score: o.score })),
    onSelect: (opt) => {
      answers[q.id] = opt.score;
      askPatternQuestion(patterns, patternIndex, questions, qIndex + 1, answers);
    }
  });

  hideBackButton();
}

// ========================
// SCREEN: The Mirror (Layer 7)
// ========================
function showMirror() {
  setScreen('mirror');
  hideBackButton();
  hideProgress();

  const html = generateMirror();
  render(html);

  // Bind restart button
  setTimeout(() => {
    document.getElementById('restart-btn')?.addEventListener('click', () => {
      if (confirm('This will clear everything. Are you sure?')) {
        window.location.reload();
      }
    });
  }, 100);
}

// ========================
// Initialize
// ========================
showLanding();
