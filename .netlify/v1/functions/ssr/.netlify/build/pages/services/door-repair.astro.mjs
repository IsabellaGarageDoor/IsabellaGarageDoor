/* empty css                                                                   */
import { a as createComponent, g as renderComponent, r as renderTemplate, F as Fragment, u as unescapeHTML, m as maybeRenderHead } from '../../chunks/astro/server_xoD-kxEp.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BTkoY-F8.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$DoorRepair = createComponent(($$result, $$props, $$slots) => {
  const title = "Garage Door Repair | Isabella Garage Door";
  const description = "Fast, reliable garage door repair in Mt. Pleasant, Clare, and Alma. From broken springs to noisy doors, we fix it all with honest service and expert care.";
  const repairSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "General Garage Door Repair",
    "provider": {
      "@id": "https://isabellagaragedoor.com/#business"
    },
    "description": "Comprehensive repair services for residential garage doors, including hardware replacement and structural adjustments.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "General Repair Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Off-Track Door Realignment",
            "description": "Safely resetting garage doors that have slipped from their tracks."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Garage Door Cable Replacement",
            "description": "Replacing frayed or snapped lift cables to ensure safe door operation."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Roller & Hinge Replacement",
            "description": "Upgrading worn-out rollers and hinges to quiet noisy doors and reduce motor strain."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bent Track Repair",
            "description": "Straightening or replacing damaged vertical and horizontal tracks."
          }
        }
      ]
    }
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<img src="/src/photos/damaged-door-panel.webp" alt="Garage Door Repair in Mt. Pleasant Michigan" loading="eager" fetchpriority="high" class="header-photo-interior"> <section> <h1 class="page-title">Fast, Reliable Garage Door Repairs</h1> <p>
Whether it’s stuck halfway, hanging crooked, or making awful noises — we’ll get it fixed right, without the runaround.
</p> <div class="hero-buttons"> <a href="sms:9895720303?&body=Hi%2C%20I%20need%20some%20help%20with%20a%20garage%20door%20problem." class="hero-contact-button"> <i class="fas fa-comment-dots"></i> Text Us Now
</a> </div> </section> <section class="no-card"> <h2 class="sub-heading">We Fix What Others Miss</h2> <p class="p-home">
From broken springs and off-track doors to worn rollers, frayed cables, or general weirdness — we’ve seen it all. Our repairs are clean, precise, and backed by premium parts and professional experience.
</p> <img src="/src/photos/photo-eye-replacement.webp" alt="Garage Door Photo Eye Replacement Clare Michigan" class="homepg-about-photo"> </section> <section class="no-card"> <h2 class="sub-heading">Common Issues We Handle</h2> <ul class="p-home" style="list-style: disc; padding-left: 1.5rem;"> <li>Broken or stretched springs</li> <li>Door won’t open or close fully</li> <li>Off-track or misaligned doors</li> <li>Frayed or snapped cables</li> <li>Damaged rollers or hinges</li> <li>Door slams down or jerks during movement</li> </ul> </section> <section class="no-card"> <h2 class="sub-heading">Why Homeowners Trust Isabella</h2> <p class="p-home">
We're not here to upsell or waste your time. Just straightforward repairs, clear pricing, and genuine respect for your home and schedule.
      We’ll show up when we say we will, explain what’s going on, and get your door working again the right way.
</p> <a href="/homeowner-tools/easy-estimate#estimate-form" class="cta-button" style="margin: 3rem auto"><i class="fa-solid fa-screwdriver-wrench fa-fw"></i> Fix My Door</a> </section>  <section> <h2 class="sub-heading">Not Sure What’s Wrong?</h2> <p class="estimate-intro-paragraph">
Use our free online tool to figure it out — no pressure, no phone call required. Just simple questions and helpful answers.
</p> <a href="/homeowner-tools/door-diagnosis#troubleshooting" class="cta-button"><i class="fa-solid fa-magnifying-glass fa-fw"></i> Start Troubleshooting</a> </section> <section style="margin-top: 2rem;"> <h2 class="sub-heading">Isabella Garage Door</h2> <p style="font-size: .9rem; text-align: center;">
Fast, reliable garage door repair across Central Michigan.
</p> <p style="font-size: .9rem; text-align: center; margin: 0.5rem;"> <em>Raising Performance. Elevating Standards</em> </p> </section> `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script> "])), unescapeHTML(JSON.stringify(repairSchema))) })}` })}`;
}, "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/services/door-repair.astro", void 0);

const $$file = "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/services/door-repair.astro";
const $$url = "/services/door-repair";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$DoorRepair,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
