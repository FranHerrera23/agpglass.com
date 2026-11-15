(() => {
  const en = document.documentElement.lang === 'en';
  const bar = document.createElement('div');
  bar.className = 'prototype-bar';
  const label = document.createElement('span');
  label.textContent = en ? 'Positioning prototype · CRUDA for AGP' : 'Prototipo de posicionamiento · CRUDA para AGP';
  const route = document.createElement('a');
  route.href = 'respaldo.html';
  route.textContent = en ? 'Explore RESPALDO AGP ↗' : 'Explorar RESPALDO AGP ↗';
  bar.append(label, route); document.body.prepend(bar);
  document.querySelectorAll('[data-cat]').forEach(button => button.addEventListener('click', () => {
    document.querySelectorAll('[data-cat]').forEach(item => {
      item.classList.toggle('active', item === button);
      item.setAttribute('aria-pressed', String(item === button));
    });
    document.querySelectorAll('[data-product]').forEach(card => {
      card.hidden = button.dataset.cat !== 'all' && card.dataset.product !== button.dataset.cat;
    });
  }));
  const source = document.getElementById('layer-data');
  if (source) {
    const layers = JSON.parse(source.textContent);
    document.querySelectorAll('[data-layer]').forEach(button => button.addEventListener('click', () => {
      const key = button.dataset.layer;
      const copy = layers[key];
      document.querySelector('.vehicle-visual').dataset.active = key;
      document.getElementById('layer-title').innerHTML = copy[0];
      document.getElementById('layer-copy').textContent = copy[1];
      document.getElementById('layer-benefit').textContent = copy[2];
      document.querySelectorAll('[data-layer]').forEach(item => {
        const active = item.dataset.layer === key;
        item.classList.toggle('active', active);
        item.setAttribute('aria-pressed', String(active));
      });
    }));
  }
  document.querySelectorAll('[data-print]').forEach(button => button.addEventListener('click', () => window.print()));
  // Preserve an article section when switching language; both versions share IDs.
  document.querySelectorAll('.language-switch a').forEach(a => a.addEventListener('click', () => {
    if (location.hash) a.hash = location.hash;
  }));
})();
