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





import { kanaTheme } from './themes/kana.js';
import { binaryTheme } from './themes/binary.js';
import { waveTheme } from './themes/wave.js';
import { constellationTheme } from './themes/constellation.js';
import { tritravellersTheme } from './themes/tritravellers.js';

function applyTheme(themeName) {
  removeCanvas();
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
    default:
        //removeCanvas();
        break;
}
}

document.addEventListener('DOMContentLoaded', toggleSettings);
document.addEventListener('DOMContentLoaded', selectThemeListener);

