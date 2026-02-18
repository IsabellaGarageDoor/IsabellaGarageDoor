/* empty css                                                                   */
import { a as createComponent, g as renderComponent, r as renderTemplate, F as Fragment, u as unescapeHTML, m as maybeRenderHead } from '../../chunks/astro/server_xoD-kxEp.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BTkoY-F8.mjs';
/* empty css                                                     */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$PerformanceMembership = createComponent(($$result, $$props, $$slots) => {
  const title = "Performance Membership | Isabella Garage Door";
  const description = 'The "Never Worry Again" Plan. Proactive care, priority service, and lifetime coverage for your garage door parts in Mid-Michigan.';
  const membershipSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Garage Door Performance Membership",
    "provider": {
      "@id": "https://isabellagaragedoor.com/#business"
    },
    "description": "A proactive residential garage door maintenance and protection program featuring annual inspections, priority response, and lifetime parts coverage.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Performance Membership Benefits",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Annual Proactive Maintenance",
            "description": "Yearly 20-point safety inspections and system tune-ups to ensure long-term reliability."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Priority Service Access",
            "description": "Members jump to the front of the line with guaranteed priority scheduling for all service calls."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lifetime Parts Coverage",
            "description": "Comprehensive protection and discounts on high-wear garage door components."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Multi-Door Protection",
            "description": "Customized protection rates for homes with multiple garage door systems."
          }
        }
      ]
    }
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "data-astro-cid-nzablbf4": true }, { "default": ($$result2) => renderTemplate`  <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"> ${maybeRenderHead()}<div class="container" data-astro-cid-nzablbf4> <h1 class="coming-script" data-astro-cid-nzablbf4>Coming Soon</h1> <img src="/src/photos/protection-garage-door-plans.webp" alt="Performance Membership garage door maintenance" loading="eager" fetchpriority="high" class="header-photo-interior" data-astro-cid-nzablbf4> <h2 class="sub-heading" data-astro-cid-nzablbf4>Performance Membership</h2> <p class="description" data-astro-cid-nzablbf4>
We’re building something designed to completely change how homeowners care for their garage doors.
      A smarter, proactive approach to reliability, safety, and long-term performance.
</p> <p class="description" data-astro-cid-nzablbf4>
This premium service is currently in development and will be available once our systems are fully in place
      to deliver the level of service our customers expect.
</p> </div> <section data-astro-cid-nzablbf4> <h2 class="sub-heading" data-astro-cid-nzablbf4>Isabella Garage Door</h2> <p style="font-size: .9rem; text-align: center;" data-astro-cid-nzablbf4>
Proactive care. Performance Membership - the smarter way to own a garage door in Central Michigan.
</p> <p style="font-size: .9rem; text-align: center; margin: 0.5rem;" data-astro-cid-nzablbf4> <em data-astro-cid-nzablbf4>Raising Performance. Elevating Standards</em> </p> </section>   `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script> "])), unescapeHTML(JSON.stringify(membershipSchema))) })}` })}`;
}, "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/services/performance-membership.astro", void 0);

const $$file = "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/services/performance-membership.astro";
const $$url = "/services/performance-membership";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PerformanceMembership,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
