// Layer 7: The Mirror — Final Output Generator

import { getState } from './state.js';

const dimensionLabels = {
  physical: 'Physical Well-Being',
  emotional: 'Emotional Well-Being',
  financial: 'Financial Well-Being',
  connections: 'Connections',
  identity: 'Identity'
};

const agencyClass = {
  'HIGH': 'agency-high',
  'PARTIAL': 'agency-partial',
  'LOW': 'agency-low',
  'UNCERTAIN': 'agency-uncertain',
  'N/A': 'agency-uncertain'
};

export function generateMirror() {
  const state = getState();
  let html = '<div class="mirror-output">';

  // Title
  html += '<h1>Your Mirror</h1>';
  html += '<hr class="mirror-divider">';

  // Section 1: What's Going Well
  html += renderStrengths(state);

  // Section 2: What Needs Attention
  html += renderConcerns(state);

  // Section 3: Cross-Dimensional Pattern
  html += renderPatterns(state);

  // Section 4: What Matters and What May Not
  html += renderMatters(state);

  // Section 5: Where You Have Agency
  html += renderAgency(state);

  // Section 6: Where Acceptance May Be the Path
  html += renderAcceptance(state);

  // Section 7: The Gray Zone
  html += renderGrayZone(state);

  // End Note
  html += renderEndNote();

  // Actions
  html += `
    <div class="mirror-actions">
      <button class="btn-primary" onclick="window.print()">Print My Mirror</button>
      <button class="btn-secondary" id="restart-btn">Start Over</button>
    </div>`;

  html += '</div>';
  return html;
}

function renderStrengths(state) {
  const strengthDims = Object.entries(state.dimensions)
    .filter(([, d]) => d.status === 'strength');

  if (strengthDims.length === 0) return '';

  let html = '<div class="mirror-section">';
  html += '<h2>What\'s Going Well</h2>';
  html += '<ul class="strength-list">';

  for (const [dimKey, dim] of strengthDims) {
    if (dim.strengths && dim.strengths.length > 0) {
      for (const s of dim.strengths) {
        html += `<li><strong>${dimensionLabels[dimKey]}:</strong> ${s}</li>`;
      }
    } else {
      html += `<li><strong>${dimensionLabels[dimKey]}</strong> — going well</li>`;
    }
  }

  html += '</ul>';
  html += '<p class="section-note">These are real. They are resources you can draw on. Don\'t let the areas that need attention eclipse what\'s already working.</p>';
  html += '</div>';
  html += '<hr class="mirror-divider">';
  return html;
}

function renderConcerns(state) {
  if (state.deepDives.length === 0) return '';

  let html = '<div class="mirror-section">';
  html += '<h2>What Needs Attention</h2>';

  for (const dive of state.deepDives) {
    if (dive.id === 'crisis_redirect') continue;

    html += `<div class="mirror-root-cause">`;
    html += `<div class="dimension-label">${dimensionLabels[dive.dimension] || dive.dimension}</div>`;
    html += `<h3>${dive.label}</h3>`;
    html += `<span class="agency-badge ${agencyClass[dive.agency] || 'agency-uncertain'}">Agency: ${dive.agency}</span>`;

    if (dive.inControl) {
      html += `<div class="control-section">
        <strong>What's in your control</strong>
        <p>${dive.inControl}</p>
      </div>`;
    }
    if (dive.notInControl) {
      html += `<div class="control-section">
        <strong>What may not be</strong>
        <p>${dive.notInControl}</p>
      </div>`;
    }

    html += '</div>';
  }

  html += '</div>';
  html += '<hr class="mirror-divider">';
  return html;
}

function renderPatterns(state) {
  if (state.crossPatterns.length === 0) return '';

  let html = '<div class="mirror-section">';
  html += '<h2>Cross-Dimensional Pattern</h2>';

  for (const p of state.crossPatterns) {
    html += `<div class="mirror-pattern">`;
    html += `<h3>Pattern: ${p.pattern.name}</h3>`;
    html += `<p class="pattern-description">${p.pattern.description}</p>`;
    html += '</div>';
  }

  html += '</div>';
  html += '<hr class="mirror-divider">';
  return html;
}

function renderMatters(state) {
  const matters = state.deepDives.filter(d =>
    d.id !== 'crisis_redirect' && d.agency !== 'N/A'
  );
  const mayNotMatter = state.deepDives.filter(d => d.agency === 'N/A');

  if (matters.length === 0 && mayNotMatter.length === 0) return '';

  let html = '<div class="mirror-section">';
  html += '<h2>What Matters and What May Not</h2>';

  if (matters.length > 0) {
    html += '<h3>Things that matter</h3>';
    html += '<ul class="concern-list">';
    for (const d of matters) {
      html += `<li style="padding:6px 0;">&#8226; <strong>${d.label}</strong>`;
      if (d.inControl) html += ` — ${d.inControl}`;
      html += '</li>';
    }
    html += '</ul>';
  }

  if (mayNotMatter.length > 0) {
    html += '<h3 style="margin-top:20px;">Things that may not matter as much as they feel like they do</h3>';
    html += '<ul class="concern-list">';
    for (const d of mayNotMatter) {
      html += `<li style="padding:6px 0;">&#8226; <strong>${d.label}</strong>`;
      if (d.inControl) html += ` — ${d.inControl}`;
      html += '</li>';
    }
    html += '</ul>';
  }

  html += '<p class="section-note">You get to decide what matters. The mirror only shows the distinction — you make the call.</p>';
  html += '</div>';
  html += '<hr class="mirror-divider">';
  return html;
}

function renderAgency(state) {
  const highAgency = state.deepDives.filter(d =>
    d.agency === 'HIGH' && d.id !== 'crisis_redirect'
  );

  if (highAgency.length === 0) return '';

  let html = '<div class="mirror-section">';
  html += '<h2>Where You Have Agency</h2>';
  html += '<ul class="agency-list">';

  for (const d of highAgency) {
    html += `<li style="padding:8px 0;">
      <strong>${d.label}</strong><br>
      <span style="color: var(--text-secondary); font-size: 0.9rem;">${d.inControl || ''}</span>
    </li>`;
  }

  html += '</ul>';
  html += '<p class="section-note">These are areas where action is available to you. Not required. Available.</p>';
  html += '</div>';
  html += '<hr class="mirror-divider">';
  return html;
}

function renderAcceptance(state) {
  const lowAgency = state.deepDives.filter(d =>
    d.agency === 'LOW' && d.id !== 'crisis_redirect'
  );

  if (lowAgency.length === 0) return '';

  let html = '<div class="mirror-section">';
  html += '<h2>Where Acceptance May Be the Path</h2>';
  html += '<ul class="agency-list">';

  for (const d of lowAgency) {
    html += `<li style="padding:8px 0;">
      <strong>${d.label}</strong><br>
      <span style="color: var(--text-secondary); font-size: 0.9rem;">${d.notInControl || ''}</span>
    </li>`;
  }

  html += '</ul>';
  html += '<p class="section-note">These are areas where the situation may not be changeable. Acceptance here is not giving up. It\'s choosing not to spend energy fighting what can\'t be won — so that energy can go where it counts.</p>';
  html += '</div>';
  html += '<hr class="mirror-divider">';
  return html;
}

function renderGrayZone(state) {
  const partial = state.deepDives.filter(d =>
    (d.agency === 'PARTIAL' || d.agency === 'UNCERTAIN') && d.id !== 'crisis_redirect'
  );

  if (partial.length === 0) return '';

  let html = '<div class="mirror-section">';
  html += '<h2>The Gray Zone</h2>';
  html += '<ul class="agency-list">';

  for (const d of partial) {
    html += `<li style="padding:8px 0;">
      <strong>${d.label}</strong><br>
      <span style="color: var(--text-secondary); font-size: 0.9rem;">
        ${d.inControl ? `In your control: ${d.inControl}` : ''}
        ${d.inControl && d.notInControl ? '<br>' : ''}
        ${d.notInControl ? `May not be: ${d.notInControl}` : ''}
      </span>
    </li>`;
  }

  html += '</ul>';
  html += `<p class="section-note">These are the areas where it's not clear what can be changed and what can't. This is where most of life actually lives.<br><br>
  For each of these, the honest question is: <em>Have I genuinely tested whether this can be changed? Or have I assumed it can't because it's hard, because I'm tired, or because I tried once and it didn't work?</em><br><br>
  If you haven't tested it — it belongs in the agency column until proven otherwise.<br>
  If you've genuinely tested it and found the boundary of what's possible — then what remains is acceptance.</p>`;
  html += '</div>';
  html += '<hr class="mirror-divider">';
  return html;
}

function renderEndNote() {
  return `
    <div class="mirror-end-note">
      <p>This is a snapshot, not a verdict. It shows where you are right now. Life shifts. What's in the gray zone today may become clear tomorrow.</p>
      <p>If anything here feels persistently heavy or difficult to address on your own, that's worth paying attention to. Professional support exists for a reason.</p>
      <p>The mirror doesn't tell you what to do. It shows you where you are. What you do next is yours.</p>
    </div>`;
}
