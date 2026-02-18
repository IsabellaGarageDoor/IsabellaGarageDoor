/* empty css                                                                   */
import { a as createComponent, g as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_xoD-kxEp.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_B24roKEI.mjs';
/* empty css                                                     */
export { renderers } from '../../renderers.mjs';

const $$ResourcesLandingPage = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-52xk33lr": true }, { "default": ($$result2) => renderTemplate` <link rel="stylesheet" href="/styles/global.css"> ${maybeRenderHead()}<section class="container" data-astro-cid-52xk33lr> <h1 class="page-title" data-astro-cid-52xk33lr>Resources</h1> <p class="intro-paragraph" data-astro-cid-52xk33lr>
Explore expert insight, seasonal advice, and practical tips from our team — plus answers to the most common questions homeowners ask us every week.
</p> <div class="resources-grid" data-astro-cid-52xk33lr> <a href="/blog" class="resource-card fade-in-up" data-astro-cid-52xk33lr> <h2 class="sub-heading" data-astro-cid-52xk33lr>Learning Center</h2> <p data-astro-cid-52xk33lr>
Articles to help you understand, maintain, and make smart decisions about your garage door system — from seasonal maintenance to long-term upgrades.
</p> <div class="cta-orange" style="display:inline-block; margin-top:1rem;" data-astro-cid-52xk33lr>Explore Articles →</div> </a> <a href="/faq" class="resource-card fade-in-up" data-astro-cid-52xk33lr> <h2 class="sub-heading" data-astro-cid-52xk33lr>Frequently Asked Questions</h2> <p data-astro-cid-52xk33lr>
Quick, clear answers to our most asked questions — from repair expectations to safety advice and service details.
</p> <div class="cta-orange" style="display:inline-block; margin-top:1rem;" data-astro-cid-52xk33lr>View FAQs →</div> </a> </div> </section>  ` })}`;
}, "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/resources/resources-landing-page.astro", void 0);

const $$file = "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/resources/resources-landing-page.astro";
const $$url = "/resources/resources-landing-page";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ResourcesLandingPage,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
