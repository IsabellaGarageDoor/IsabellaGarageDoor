/* empty css                                                                   */
import { c as createAstro, a as createComponent, g as renderComponent, r as renderTemplate, m as maybeRenderHead, b as renderScript, f as addAttribute, F as Fragment } from '../../chunks/astro/server_xoD-kxEp.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BTkoY-F8.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("http://localhost:4321");
const $$GalleryIsabellaGarageDoor = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GalleryIsabellaGarageDoor;
  const title = "Garage Door Log | Isabella Garage Door";
  const description = "Browse our portfolio of completed garage door projects showcasing quality craftsmanship and reliable service throughout Central Michigan.";
  const posts = [
    // Add more posts as needed
    // 1200 by 900 pixels - 4x3
    // upload as webp
    // remove coment tages around link to archive when started
    {
      image: "/src/photos/unique-garage-door-opener.webp",
      alt: "Repaired garage door opener in Isabella Township",
      caption: "Worked on a very unique opener today in Rosebush. Never seen one like this before. Glad to get it running again for the customer.",
      date: "2025-07-05"
    },
    {
      image: "/src/photos/double-torsion-spring-change.webp",
      alt: "Double garage door torsion spring change",
      caption: "Completed a double torsion spring change today. Balanced, tuned, and running smooth!",
      date: "2025-06-30"
    },
    {
      image: "/src/photos/spring.jpg",
      alt: "Spring replacement in Mt. Pleasant",
      caption: "Quick spring replacement in Mt. Pleasant this morning. Same-day fix before lunch.",
      date: "2025-06-25"
    },
    {
      image: "/src/photos/photo-eye-replacement.webp",
      alt: "Sensor replacement in Clare",
      caption: "This door wouldnt close unless you held the wall button. turned out to be a bad safety sensor. New photo eyes got their door working again.",
      date: "2025-06-20"
    }
    // Add more posts as needed
    // 1200 by 900 pixels - 4x3
    // upload as webp
  ];
  const sorted = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  const page = Number(Astro2.url.searchParams.get("page") || 1);
  const perPage = 4;
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const totalPages = Math.ceil(sorted.length / perPage);
  const paginated = sorted.slice(start, end);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<img src="/src/photos/gallery-garage-door-repair.webp" alt="A garage door technician repairing a broken door." loading="eager" fetchpriority="high" class="header-photo-interior"> <h1 class="page-title">Garage Door Job Log</h1> <p class="left-content">A look at real repairs<!--, installs,--> and maintenance calls across Mt. Pleasant, Clare, Rosebush, and beyond. Posted straight from the field — just clean, honest work.</p> <div id="gallery"></div> <section class="max-width: 300px; margin: 0 auto; padding: 2rem 1rem;"> <div class="gallery-grid"> ${paginated.map((post) => renderTemplate`<div class="gallery-card"> <img${addAttribute(post.image, "src")}${addAttribute(post.alt, "alt")} loading="lazy" decoding="async"> <p>${post.caption}</p> </div>`)} </div> <div class="pagination-wrapper"> ${page > 1 && renderTemplate`<a${addAttribute(`?page=${page - 1}#gallery`, "href")} class="pagination-button arrow">&larr;</a>`} ${page > 3 && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <a href="?page=1" class="pagination-button">1</a> <span class="pagination-ellipsis">...</span> ` })}`} ${Array.from({ length: totalPages }, (_, i) => i + 1).filter((p) => p >= page - 2 && p <= page + 2).map((p) => renderTemplate`<a${addAttribute(`?page=${p}#gallery`, "href")}${addAttribute(`pagination-button ${p === page ? "active" : ""}`, "class")}> ${p} </a>`)} ${page < totalPages - 2 && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <span class="pagination-ellipsis">...</span> <a${addAttribute(`?page=${totalPages}`, "href")} class="pagination-button">${totalPages}</a> ` })}`} ${page < totalPages && renderTemplate`<a${addAttribute(`?page=${page + 1}#gallery`, "href")} class="pagination-button arrow">&rarr;</a>`} </div> </section> <p class="left-content" style="margin-top: 1rem;">
These snapshots are just a glimpse of the work we do every week across Central Michigan. Whether it’s a noisy opener or a full door replacement, we show up ready to fix it right — with the same attention to detail you see here.
</p>  <a href="/contact" class="cta-button" style="margin: 3rem auto 2rem;"><i class="fa-regular fa-calendar-check fa-fw"></i> Book a Service Visit</a> <section> <h2 class="sub-heading">Isabella Garage Door</h2> <p style="font-size: .9rem; text-align: center;">
Quality you can see. Work you can trust. Proudly serving homeowners across Central Michigan.
</p> <p style="font-size: .9rem; text-align: center; margin: 0.5rem;"> <em>Raising Performance. Elevating Standards</em> </p> </section> ${renderScript($$result2, "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/about/gallery-isabella-garage-door.astro?astro&type=script&index=0&lang.ts")} ${renderScript($$result2, "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/about/gallery-isabella-garage-door.astro?astro&type=script&index=1&lang.ts")} ` })}`;
}, "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/about/gallery-isabella-garage-door.astro", void 0);

const $$file = "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/about/gallery-isabella-garage-door.astro";
const $$url = "/about/gallery-isabella-garage-door";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$GalleryIsabellaGarageDoor,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
