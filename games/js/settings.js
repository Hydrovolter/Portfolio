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





import { mainKanaTheme } from './themes/kana.js';

function applyTheme(themeName) {
  removeCanvas();
  switch (themeName) {

    case 'kana':
        mainKanaTheme();
        break;
    default:
        //removeCanvas();
        break;
}
}

document.addEventListener('DOMContentLoaded', toggleSettings);
document.addEventListener('DOMContentLoaded', selectThemeListener);

