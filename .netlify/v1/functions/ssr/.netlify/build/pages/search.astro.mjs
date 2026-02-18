/* empty css                                                                */
import { a as createComponent, m as maybeRenderHead, b as renderScript, r as renderTemplate, g as renderComponent } from '../chunks/astro/server_xoD-kxEp.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BTkoY-F8.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$ArticleSearch = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="search"> <input type="search" placeholder="Search articles (springs, rollers, openers...)" aria-label="Search articles"> <ul class="results"></ul> </div> ${renderScript($$result, "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/components/ArticleSearch.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/components/ArticleSearch.astro", void 0);

const $$Search = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` <link rel="stylesheet" href="/styles/global.css"> ${maybeRenderHead()}<h2 class="sub-heading">Search Garage Door Articles</h2> ${renderComponent($$result2, "ArticleSearch", $$ArticleSearch, {})}  <div style="min-height: calc(100vh - 400px);"></div> ` })}`;
}, "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/search.astro", void 0);

const $$file = "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/search.astro";
const $$url = "/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Search,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
