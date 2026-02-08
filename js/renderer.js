// DOM rendering engine — one question at a time

const app = document.getElementById('app');
const backBtn = document.getElementById('back-btn');
const progressBar = document.getElementById('progress-bar');
const progressFill = document.getElementById('progress-fill');

export function render(html) {
  app.innerHTML = '';
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  wrapper.classList.add('fade-enter');
  app.appendChild(wrapper);
  app.scrollTo?.({ top: 0 });
  window.scrollTo({ top: 0, behavior: 'auto' });
}

export function showBackButton(onClick) {
  backBtn.classList.remove('hidden');
  backBtn.onclick = onClick;
}

export function hideBackButton() {
  backBtn.classList.add('hidden');
  backBtn.onclick = null;
}

export function showProgress(percent) {
  progressBar.classList.remove('hidden');
  progressFill.style.width = `${Math.min(100, Math.max(0, percent))}%`;
}

export function hideProgress() {
  progressBar.classList.add('hidden');
}

export function renderLanding(onStart) {
  hideBackButton();
  hideProgress();
  render(`
    <div class="landing">
      <h1>Your Mirror</h1>
      <p class="subtitle">
        This is a mirror. It will ask you questions about five areas of your life
        &mdash; about what truly matters to you &mdash;
        and reflect back what it sees: what's working, what's not, and what's
        in your control. It takes 10&ndash;20 minutes.
      </p>
      <button class="btn-primary" id="start-btn">Begin</button>
      <div class="privacy-note">
        <strong>Your privacy is absolute.</strong><br>
        No login. No accounts. No data stored. No cookies. No tracking.<br>
        Nothing leaves your browser. When you close this tab, everything is gone.
      </div>
      <p class="disclaimer-note" style="margin-top: 16px; font-size: 0.85rem; color: var(--text-muted);">
        This tool is not a replacement for professional help. If you are in crisis
        or need clinical support, please reach out to a qualified professional.
      </p>
    </div>
  `);
  document.getElementById('start-btn').addEventListener('click', onStart);
}

export function renderQuestion({ text, context, options, onSelect }) {
  let html = `<div class="question-screen">`;
  if (context) {
    html += `<p class="question-context">${context}</p>`;
  }
  html += `<p class="question-text">${text}</p>`;
  html += `<div class="options">`;
  options.forEach((opt, i) => {
    html += `<button class="option-btn" data-index="${i}">${opt.label}</button>`;
  });
  html += `</div></div>`;
  render(html);

  document.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.index);
      onSelect(options[idx], idx);
    });
  });
}

export function renderMultiSelect({ text, context, options, onContinue, buttonLabel = 'Continue' }) {
  let html = `<div class="question-screen">`;
  if (context) {
    html += `<p class="question-context">${context}</p>`;
  }
  html += `<p class="question-text">${text}</p>`;
  html += `<div class="checkbox-options">`;
  options.forEach((opt, i) => {
    html += `
      <div class="checkbox-option" data-index="${i}">
        <input type="checkbox" id="cb-${i}" value="${i}">
        <label for="cb-${i}">${opt}</label>
      </div>`;
  });
  html += `</div>`;
  html += `<button class="btn-primary" id="multi-continue">${buttonLabel}</button>`;
  html += `</div>`;
  render(html);

  document.querySelectorAll('.checkbox-option').forEach(el => {
    el.addEventListener('click', (e) => {
      if (e.target.tagName === 'INPUT') return;
      const cb = el.querySelector('input');
      cb.checked = !cb.checked;
      el.classList.toggle('checked', cb.checked);
    });
    const cb = el.querySelector('input');
    cb.addEventListener('change', () => {
      el.classList.toggle('checked', cb.checked);
    });
  });

  document.getElementById('multi-continue').addEventListener('click', () => {
    const selected = [];
    document.querySelectorAll('.checkbox-option input:checked').forEach(cb => {
      selected.push(options[parseInt(cb.value)]);
    });
    onContinue(selected);
  });
}

export function renderCrisisResponse({ type, onContinue, onStop }) {
  let resources = '';
  if (type === 'self-harm') {
    resources = `
      <div class="crisis-response">
        <h2>Your safety matters more than any assessment.</h2>
        <p>If you're in immediate danger:</p>
        <ul>
          <li><strong>Call or text <a href="tel:988">988</a></strong> (Suicide &amp; Crisis Lifeline) &mdash; available 24/7</li>
          <li><strong>Text HOME to <a href="sms:741741">741741</a></strong> (Crisis Text Line)</li>
          <li><strong>Call <a href="tel:911">911</a></strong> or go to your nearest emergency room</li>
        </ul>
        <p>These services are free and available right now.</p>
      </div>`;
  } else {
    resources = `
      <div class="crisis-response">
        <h2>Your safety matters.</h2>
        <p>If you're experiencing abuse:</p>
        <ul>
          <li><strong>National Domestic Violence Hotline:</strong> <a href="tel:18007997233">1-800-799-7233</a> (24/7)</li>
          <li><strong>Text START to <a href="sms:88788">88788</a></strong></li>
          <li><strong>Online chat:</strong> TheHotline.org</li>
        </ul>
        <p>These services are free and confidential.</p>
      </div>`;
  }

  render(`
    <div class="question-screen">
      ${resources}
      <p class="question-text">Would you like to continue with the assessment, or would you prefer to stop here?</p>
      <div class="options">
        <button class="option-btn" id="crisis-continue">I'm safe and want to continue</button>
        <button class="option-btn" id="crisis-stop">I'd like to stop</button>
      </div>
    </div>
  `);

  document.getElementById('crisis-continue').addEventListener('click', onContinue);
  document.getElementById('crisis-stop').addEventListener('click', onStop);
}

export function renderStopScreen() {
  hideBackButton();
  hideProgress();
  render(`
    <div class="landing">
      <h2>Take care of yourself.</h2>
      <p class="subtitle">The resources below are available anytime you need them.</p>
      <div class="crisis-response">
        <ul>
          <li><strong>Suicide &amp; Crisis:</strong> Call/text <a href="tel:988">988</a> | Text HOME to <a href="sms:741741">741741</a></li>
          <li><strong>Domestic Violence:</strong> <a href="tel:18007997233">1-800-799-7233</a> | Text START to <a href="sms:88788">88788</a></li>
          <li><strong>Emergency:</strong> <a href="tel:911">911</a></li>
        </ul>
      </div>
    </div>
  `);
}

export function renderTransition({ concerns, strengths, neutrals, onSelect, onAllGood }) {
  const concernCount = concerns.length;
  let intro = '';

  if (concernCount === 0) {
    intro = `<p class="question-text">It looks like things are generally going well or are manageable across all five areas. That's worth noticing and appreciating.</p>`;
  } else if (concernCount === 1) {
    intro = `<p class="question-text">Let's look more closely at what's challenging you.</p>`;
  } else if (concernCount <= 3) {
    intro = `<p class="question-text">You mentioned that a few areas are challenging right now. Which one feels most pressing?</p>`;
  } else {
    intro = `<p class="question-text">It sounds like a lot is weighing on you right now. That's a lot to carry. Let's start with the one that feels heaviest.</p>`;
  }

  const dimensionLabels = {
    physical: 'Physical Well-Being',
    emotional: 'Emotional Well-Being',
    financial: 'Financial Well-Being',
    connections: 'Connections',
    identity: 'Identity'
  };

  let badges = '<div class="dimension-summary">';
  strengths.forEach(d => {
    badges += `<span class="dimension-badge badge-strength">${dimensionLabels[d]}</span>`;
  });
  neutrals.forEach(d => {
    badges += `<span class="dimension-badge badge-neutral">${dimensionLabels[d]}</span>`;
  });
  concerns.forEach(d => {
    badges += `<span class="dimension-badge badge-concern">${dimensionLabels[d]}</span>`;
  });
  badges += '</div>';

  let buttons = '';
  if (concernCount === 0) {
    buttons = `
      <div class="options mt-24">
        <button class="option-btn" id="explore-anyway">I'd like to explore something beneath the surface</button>
        <button class="option-btn" id="all-good">I'm good — show me my mirror</button>
      </div>`;
  } else {
    buttons = `<div class="options mt-24">`;
    concerns.forEach(d => {
      buttons += `<button class="option-btn" data-dimension="${d}">${dimensionLabels[d]}</button>`;
    });
    buttons += '</div>';
  }

  render(`
    <div class="transition-screen">
      ${badges}
      ${intro}
      ${buttons}
    </div>
  `);

  if (concernCount === 0) {
    document.getElementById('all-good')?.addEventListener('click', onAllGood);
    document.getElementById('explore-anyway')?.addEventListener('click', () => {
      // Show all dimensions to explore
      render(`
        <div class="transition-screen">
          <p class="question-text">Which area would you like to explore?</p>
          <div class="options">
            ${Object.entries(dimensionLabels).map(([key, label]) =>
              `<button class="option-btn" data-dimension="${key}">${label}</button>`
            ).join('')}
          </div>
        </div>
      `);
      document.querySelectorAll('[data-dimension]').forEach(btn => {
        btn.addEventListener('click', () => onSelect(btn.dataset.dimension));
      });
    });
  } else {
    document.querySelectorAll('[data-dimension]').forEach(btn => {
      btn.addEventListener('click', () => onSelect(btn.dataset.dimension));
    });
  }
}

export function renderRootCauseFound({ rootCause, dimension, onExploreMore, onShowMirror }) {
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

  render(`
    <div class="question-screen">
      <p class="question-context">Here's what the mirror sees:</p>
      <div class="root-cause-card">
        <div class="dimension-badge badge-concern" style="margin-bottom:12px">${dimensionLabels[dimension]}</div>
        <h3>${rootCause.label}</h3>
        <span class="agency-badge ${agencyClass[rootCause.agency] || 'agency-uncertain'}">Agency: ${rootCause.agency}</span>
        <div class="control-section">
          ${rootCause.inControl ? `<strong>What's in your control</strong><p>${rootCause.inControl}</p>` : ''}
          ${rootCause.notInControl ? `<strong>What may not be</strong><p>${rootCause.notInControl}</p>` : ''}
        </div>
      </div>
      <p class="question-text">Would you like to explore another area that's concerning you?</p>
      <div class="options">
        ${onExploreMore ? `<button class="option-btn" id="explore-more">Yes, explore another area</button>` : ''}
        <button class="option-btn" id="show-mirror">No, show me my mirror</button>
      </div>
    </div>
  `);

  document.getElementById('explore-more')?.addEventListener('click', onExploreMore);
  document.getElementById('show-mirror').addEventListener('click', onShowMirror);
}

export function renderAbuseDefinition(onYes, onNo, onStillUnsure) {
  render(`
    <div class="question-screen">
      <p class="question-text">Abuse can include:</p>
      <ul style="margin: 0 0 24px 20px; line-height: 1.8; color: var(--text-secondary);">
        <li>Physical violence</li>
        <li>Sexual coercion</li>
        <li>Threats</li>
        <li>Controlling your money or movements</li>
        <li>Constant criticism that makes you feel worthless</li>
        <li>Isolating you from people</li>
        <li>Making you afraid of your partner or family member</li>
      </ul>
      <p class="question-text">Does this describe your situation?</p>
      <div class="options">
        <button class="option-btn" id="abuse-yes">Yes</button>
        <button class="option-btn" id="abuse-no">No</button>
        <button class="option-btn" id="abuse-unsure">Still not sure</button>
      </div>
    </div>
  `);

  document.getElementById('abuse-yes').addEventListener('click', onYes);
  document.getElementById('abuse-no').addEventListener('click', onNo);
  document.getElementById('abuse-unsure').addEventListener('click', onStillUnsure);
}

export function renderExploreMoreSelection({ unexplored, onSelect, onShowMirror }) {
  const dimensionLabels = {
    physical: 'Physical Well-Being',
    emotional: 'Emotional Well-Being',
    financial: 'Financial Well-Being',
    connections: 'Connections',
    identity: 'Identity'
  };

  render(`
    <div class="transition-screen">
      <p class="question-text">Which area would you like to explore next?</p>
      <div class="options">
        ${unexplored.map(d =>
          `<button class="option-btn" data-dimension="${d}">${dimensionLabels[d]}</button>`
        ).join('')}
        <button class="option-btn" id="done-exploring" style="border-style: dashed; color: var(--text-muted);">I'm done — show me my mirror</button>
      </div>
    </div>
  `);

  document.querySelectorAll('[data-dimension]').forEach(btn => {
    btn.addEventListener('click', () => onSelect(btn.dataset.dimension));
  });
  document.getElementById('done-exploring').addEventListener('click', onShowMirror);
}
