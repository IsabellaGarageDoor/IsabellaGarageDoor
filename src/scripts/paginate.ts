// Client-side pagination for static pages.
// Keeps the existing ?page=N URLs working: every item is rendered at build time,
// and this script shows the slice for the requested page and builds the page links.
//
// Markup: <div data-paginate data-per-page="8" data-anchor="reviews">…items…</div>
//         <nav data-paginate-nav hidden></nav>   (immediately after the container)

function pageHref(page: number, anchor: string) {
  const url = new URL(window.location.href);
  url.searchParams.set('page', String(page));
  url.hash = anchor ? `#${anchor}` : '';
  return url.pathname + url.search + url.hash;
}

function link(page: number, label: string, anchor: string, className: string, current = false) {
  const a = document.createElement('a');
  a.href = pageHref(page, anchor);
  a.className = className;
  a.innerHTML = label;
  if (current) a.setAttribute('aria-current', 'page');
  return a;
}

function ellipsis() {
  const span = document.createElement('span');
  span.className = 'pagination-ellipsis';
  span.textContent = '…';
  span.setAttribute('aria-hidden', 'true');
  return span;
}

function paginate(container: HTMLElement) {
  const items = Array.from(container.children) as HTMLElement[];
  const perPage = Number(container.dataset.perPage) || 10;
  const anchor = container.dataset.anchor || '';
  const totalPages = Math.max(1, Math.ceil(items.length / perPage));
  const requested = parseInt(new URLSearchParams(window.location.search).get('page') || '1', 10);
  const page = Math.min(Math.max(1, Number.isFinite(requested) ? requested : 1), totalPages);

  items.forEach((item, i) => {
    item.hidden = i < (page - 1) * perPage || i >= page * perPage;
  });

  const nav = container.nextElementSibling as HTMLElement | null;
  if (!nav || !nav.hasAttribute('data-paginate-nav') || totalPages < 2) return;

  nav.replaceChildren();
  if (page > 1) nav.append(link(page - 1, '<span aria-hidden="true">&larr;</span><span class="visually-hidden">Previous page</span>', anchor, 'pagination-button arrow'));
  if (page > 3) nav.append(link(1, '1', anchor, 'pagination-button'), ellipsis());
  for (let p = Math.max(1, page - 2); p <= Math.min(totalPages, page + 2); p++) {
    nav.append(link(p, String(p), anchor, `pagination-button${p === page ? ' active' : ''}`, p === page));
  }
  if (page < totalPages - 2) nav.append(ellipsis(), link(totalPages, String(totalPages), anchor, 'pagination-button'));
  if (page < totalPages) nav.append(link(page + 1, '<span aria-hidden="true">&rarr;</span><span class="visually-hidden">Next page</span>', anchor, 'pagination-button arrow'));
  nav.hidden = false;
}

document.querySelectorAll<HTMLElement>('[data-paginate]').forEach(paginate);
