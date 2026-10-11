document.querySelectorAll('.rec-print').forEach((button) => {
  button.hidden = false;
  button.addEventListener('click', () => window.print());
});
