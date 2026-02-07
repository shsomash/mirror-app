// State management — all data lives in memory, nothing persisted

const state = {
  currentScreen: 'landing',

  crisis: {
    selfHarm: null,
    abuse: null,
    gentleTone: false
  },

  dimensions: {
    physical:    { status: null, strengths: [] },
    emotional:   { status: null, strengths: [] },
    financial:   { status: null, strengths: [] },
    connections: { status: null, strengths: [] },
    identity:    { status: null, strengths: [] }
  },

  // Which dimensions have been deep-dived
  exploredDimensions: new Set(),

  // Root causes found during deep dives
  deepDives: [],

  // Cross-dimensional patterns detected
  crossPatterns: [],

  // Navigation history for back button
  history: [],

  // Current deep dive tracking
  currentDeepDive: {
    dimension: null,
    currentNodeId: null
  }
};

export function getState() {
  return state;
}

export function setCrisis(field, value) {
  state.crisis[field] = value;
  if (field === 'selfHarm' && (value === 'yes' || value === 'rather_not')) {
    state.crisis.gentleTone = true;
  }
}

export function setDimension(name, status) {
  state.dimensions[name].status = status;
}

export function setDimensionStrengths(name, strengths) {
  state.dimensions[name].strengths = strengths;
}

export function getConcernedDimensions() {
  return Object.entries(state.dimensions)
    .filter(([, d]) => d.status === 'concern')
    .map(([name]) => name);
}

export function getStrengthDimensions() {
  return Object.entries(state.dimensions)
    .filter(([, d]) => d.status === 'strength')
    .map(([name]) => name);
}

export function getUnexploredConcerns() {
  return getConcernedDimensions()
    .filter(name => !state.exploredDimensions.has(name));
}

export function startDeepDive(dimension, startNodeId) {
  state.currentDeepDive.dimension = dimension;
  state.currentDeepDive.currentNodeId = startNodeId;
}

export function setCurrentNode(nodeId) {
  state.currentDeepDive.currentNodeId = nodeId;
}

export function addRootCause(dimension, rootCause) {
  state.deepDives.push({ dimension, ...rootCause });
  state.exploredDimensions.add(dimension);
}

export function addCrossPattern(pattern) {
  state.crossPatterns.push(pattern);
}

export function pushHistory(entry) {
  state.history.push(entry);
}

export function popHistory() {
  return state.history.pop();
}

export function setScreen(screen) {
  state.currentScreen = screen;
}

export function getRootCauseIds() {
  return state.deepDives.map(d => d.id);
}
