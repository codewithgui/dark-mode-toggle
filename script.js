const toggle = document.getElementById('darkToggle');
const body = document.getElementById('body');
const label = document.getElementById('toggle-label');

toggle.addEventListener('change', () => {
  body.classList.toggle('dark', toggle.checked);
  label.textContent = toggle.checked ? 'Dark' : 'Light';
});
