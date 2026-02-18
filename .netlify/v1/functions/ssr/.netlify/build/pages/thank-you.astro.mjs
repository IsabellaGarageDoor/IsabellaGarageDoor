/* empty css                                                                */
import { a as createComponent, g as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_xoD-kxEp.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BTkoY-F8.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$ThankYou = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-reykoxrt": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="thank-you-container" data-astro-cid-reykoxrt> <div class="thank-you-box" data-astro-cid-reykoxrt> <h1 data-astro-cid-reykoxrt>Thank You!</h1> <p class="message" data-astro-cid-reykoxrt>Your free copy of <strong data-astro-cid-reykoxrt>“7 Expert Garage Door Tips Every Michigan Homeowner Should Know”</strong> is on its way to your inbox.</p> <p class="subtext" data-astro-cid-reykoxrt>Be sure to check your spam or promotions folder just in case. If you have any questions, don’t hesitate to <a href="/contact" data-astro-cid-reykoxrt>reach out</a>.</p> <a href="/" class="home-button" data-astro-cid-reykoxrt>Back to Homepage</a> </div> </section>  ` })}`;
}, "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/thank-you.astro", void 0);

const $$file = "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/thank-you.astro";
const $$url = "/thank-you";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ThankYou,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
