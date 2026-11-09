// Shows a random selection of items on each visit (static-site replacement for
// shuffling on the server). The build renders every item and shows the first N;
// this script picks N at random instead.
//
// Markup: <div data-random-pick="3">…items, all but the first N with `hidden`…</div>

document.querySelectorAll<HTMLElement>('[data-random-pick]').forEach((container) => {
  const count = Number(container.dataset.randomPick) || 3;
  const items = Array.from(container.children) as HTMLElement[];
  const order = items.map((_, i) => i);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  const chosen = new Set(order.slice(0, count));
  items.forEach((item, i) => {
    item.hidden = !chosen.has(i);
  });
});
