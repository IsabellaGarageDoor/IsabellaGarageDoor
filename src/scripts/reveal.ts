// Fade elements in as they scroll into view.
// Add class="reveal" to any element. Styles live in styles/components.css and
// only apply when <html> has the "js" class, so content is never hidden without JS.
// The legacy class names (.reveal-on-scroll → .visible) are supported too, for
// components like the coupons and holiday banners that still use them.

const selector = '.reveal, .reveal-on-scroll';

function show(el: Element) {
  el.classList.add('is-visible', 'visible');
}

if (!('IntersectionObserver' in window)) {
  document.querySelectorAll(selector).forEach(show);
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          show(entry.target);
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  document.querySelectorAll(selector).forEach((el) => observer.observe(el));
}
