/* empty css                                                                */
import { a as createComponent, g as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_xoD-kxEp.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_B24roKEI.mjs';
/* empty css                                              */
export { renderers } from '../renderers.mjs';

const $$ThankYouEstimate = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-7pzfgx32": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="thank-you-container" data-astro-cid-7pzfgx32> <div class="thank-you-box" data-astro-cid-7pzfgx32> <h1 data-astro-cid-7pzfgx32>Thank You!</h1> <p class="message" data-astro-cid-7pzfgx32>We’ve received your request and will be in touch within 24 hours or on the next business day.</p> <p class="subtext" data-astro-cid-7pzfgx32>If you have any questions in the meantime, feel free to <a href="/contact" data-astro-cid-7pzfgx32>contact us</a>.</p> <a href="/" class="home-button" data-astro-cid-7pzfgx32>Return to Homepage</a> </div> </section>  ` })}`;
}, "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/thank-you-estimate.astro", void 0);

const $$file = "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/thank-you-estimate.astro";
const $$url = "/thank-you-estimate";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ThankYouEstimate,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
