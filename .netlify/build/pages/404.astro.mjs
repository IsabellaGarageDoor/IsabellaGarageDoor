/* empty css                                                                */
import { a as createComponent, g as renderComponent, r as renderTemplate, m as maybeRenderHead, b as renderScript } from '../chunks/astro/server_xoD-kxEp.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BTkoY-F8.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const title = "Page Not Found | Isabella Garage Door";
  const description = "Oops! The page you\u2019re looking for doesn\u2019t exist. Play a quick garage game or head back home.";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="page-title" style="color: #e74c3c;">404 - Page Not Found</h1> <p style="margin-bottom: 2rem; text-align: center;">
We couldn’t find the page you were looking for.<br>
But hey, while you're here… want to fix some virtual garage doors?
</p>  <iframe src="/404-game.html" title="Garage Door Fix Game" loading="lazy" style="
        width: 100%;
        max-width: 800px;
        height: 1000px;
        border: none;
        border-radius: 1rem;
        box-shadow: 0 0 2rem rgba(0,0,0,0.2);
        background: white;
        margin: 0 auto;
        display: block;
      "></iframe> ${renderScript($$result2, "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/404.astro?astro&type=script&index=0&lang.ts")} <a href="/" class="cta-button" style="margin: 2rem auto 3rem;"> <i class="fas fa-arrow-left"></i>
Back to Homepage
</a> <section> <h2 class="sub-heading">Isabella Garage Door</h2> <p style="font-size: .9rem; text-align: center;">
Oops! We couldn’t find that page — but we’re here to help with all your garage door needs across Central Michigan.
</p> <p style="font-size: .9rem; text-align: center; margin: 0.5rem;"> <em>Raising Performance. Elevating Standards</em> </p> </section> ` })}`;
}, "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/404.astro", void 0);

const $$file = "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
