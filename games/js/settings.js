function toggleSettings() { 
  const settingsBtn = document.getElementById("settings-nav-item")
  const modal = document.getElementById('settings-modal');
  const closeBtn = document.getElementById('close-settings');

  settingsBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
      modal.classList.add('hidden');
    }
  });
}

// TOGGLE DESCRIPTIONS

function toggleDescriptions() {
  const toggle = document.getElementById('toggle-descriptions');
  if (!toggle) return;

  // Apply stored preference on load
  const saved = localStorage.getItem('hideGameDescriptions');
  if (saved !== null) {
    applyDescriptionPreference(saved === 'true');
  }

  // Listen for toggle changes
  toggle.addEventListener('change', function () {
    const shouldHide = this.checked;
    localStorage.setItem('hideGameDescriptions', shouldHide);
    applyDescriptionPreference(shouldHide);
  });
}

function applyDescriptionPreference(shouldHide) {
  document.querySelectorAll('.game-card p').forEach(p => {
    p.style.display = shouldHide ? 'none' : '';
  });

  const toggle = document.getElementById('toggle-descriptions');
  if (toggle) {
    toggle.checked = shouldHide;
  }
}


function toggleTitles() {
  const toggle = document.getElementById('toggle-titles');
  if (!toggle) return;

  // Apply stored preference on load
  const saved = localStorage.getItem('hideGameTitles');
  if (saved !== null) {
    applyTitlePreference(saved === 'true');
  }

  // Listen for toggle changes
  toggle.addEventListener('change', function () {
    const shouldHide = this.checked;
    localStorage.setItem('hideGameTitles', shouldHide);
    applyTitlePreference(shouldHide);
  });
}

function applyTitlePreference(shouldHide) {
  document.querySelectorAll('.game-card h3').forEach(h3 => {
    h3.style.display = shouldHide ? 'none' : '';
  });
  

  const toggle = document.getElementById('toggle-titles');
  if (toggle) {
    toggle.checked = shouldHide;
  }
}

// THEMES

function setThemePreference(themeName) {
  localStorage.setItem('siteTheme', themeName);
  applyTheme(themeName);
}
function selectThemeListener() {
  const savedTheme = localStorage.getItem('siteTheme');
  if (savedTheme) {
      applyTheme(savedTheme);
  } else {
      removeCanvas();
  }


  const select = document.getElementById('background-select');
  const currentTheme = localStorage.getItem('siteTheme') || 'default';

  select.value = currentTheme;

  select.addEventListener('change', function () {
    setThemePreference(this.value);
  });
}
function removeCanvas() {
  const canvas = document.getElementById('canvas-bg');
  if (canvas) {
    canvas.remove();
  }
}


export let animationFrameIds = [];
export let intervalIds = [];
export let eventListeners = [];
function cleanUpCanvasEnvironment() {
  // Cancel all animation frames
  animationFrameIds.forEach(id => cancelAnimationFrame(id));
  animationFrameIds = [];

  // Clear all intervals
  intervalIds.forEach(id => clearInterval(id));
  intervalIds = [];

  // Remove event listeners
  eventListeners.forEach(({ element, type, handler }) => {
    element.removeEventListener(type, handler);
  });
  eventListeners = [];

  // Remove canvas
  removeCanvas();
}

export function registerAnimationFrame(id) {
  animationFrameIds.push(id);
}

export function registerInterval(id) {
  intervalIds.push(id);
}

export function registerEventListener(element, type, handler) {
  eventListeners.push({ element, type, handler });
  element.addEventListener(type, handler);
}



import { kanaTheme } from './themes/kana.js';
import { binaryTheme } from './themes/binary.js';
import { waveTheme } from './themes/wave.js';
import { constellationTheme } from './themes/constellation.js';
import { tritravellersTheme } from './themes/tritravellers.js';
import { spipaTheme } from './themes/spipa.js';
import { colourdropsTheme } from './themes/colourdrops.js';
import { cometmouseTheme } from './themes/cometmouse.js';
import { shootingstarTheme } from './themes/shootingstar.js';

function applyTheme(themeName) {
  //removeCanvas();
  cleanUpCanvasEnvironment();
  switch (themeName) {
    case 'kana':
        kanaTheme();
        break;
    case 'binary':
        binaryTheme();
        break;
    case 'wave':
        waveTheme();
        break;
    case 'constellation':
        constellationTheme();
        break;
    case 'tritravellers':
        tritravellersTheme();
        break;
    case 'spipa':
        spipaTheme();
        break;
    case 'colourdrops':
        colourdropsTheme();
        break;
    case 'cometmouse':
        cometmouseTheme();
        break;
    case 'shootingstar':
        shootingstarTheme();
        break;
    default:
        //removeCanvas();
        break;
}
}

document.addEventListener('DOMContentLoaded', toggleSettings);

document.addEventListener('DOMContentLoaded', selectThemeListener);
document.addEventListener('DOMContentLoaded', toggleDescriptions);
document.addEventListener('DOMContentLoaded', toggleTitles);

