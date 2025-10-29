const container = document.getElementById('grille');
for (let i = 1; i <= 25; i++) {
  const d = document.createElement('div');
  d.className = 'Day';
  d.textContent = `${i}`;
  d.dataset.index = i; // useful metadata
  container.appendChild(d);
}