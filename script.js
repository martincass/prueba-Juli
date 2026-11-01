const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() { navigation.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
toggle.addEventListener('click', () => { const open = navigation.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); });
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelectorAll('[data-dialog]').forEach(button => button.addEventListener('click', () => document.getElementById(button.dataset.dialog).showModal()));
document.querySelectorAll('dialog').forEach(dialog => { dialog.querySelector('.close-dialog').addEventListener('click', () => dialog.close()); dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } }); });
