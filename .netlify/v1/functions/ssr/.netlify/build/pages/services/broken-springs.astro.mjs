/* empty css                                                                   */
import { a as createComponent, g as renderComponent, r as renderTemplate, F as Fragment, u as unescapeHTML, m as maybeRenderHead } from '../../chunks/astro/server_xoD-kxEp.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_B24roKEI.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$BrokenSprings = createComponent(($$result, $$props, $$slots) => {
  const title = "Broken Spring | Isabella Garage Door";
  const description = "Learn the signs of a broken garage door spring and how Isabella Garage Door provides fast, safe, and professional spring repairs throughout Central Michigan.";
  const springSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Garage Door Spring Replacement",
    "provider": {
      "@id": "https://isabellagaragedoor.com/#business"
    },
    "areaServed": [
      { "@type": "City", "name": "Mount Pleasant, MI" },
      { "@type": "City", "name": "Alma, MI" },
      { "@type": "City", "name": "Clare, MI" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Spring Repair Options",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Torsion Spring Replacement",
            "description": "Professional replacement of high-tension torsion springs for residential garage doors."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Extension Spring Repair",
            "description": "Safety-focused replacement of garage door extension springs and safety cables."
          }
        }
      ]
    }
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<img src="/photos/garage-door-spring-repair.webp" alt="A broken spring job in Shepherd" loading="eager" fetchpriority="high" class="header-photo-interior"> <section> <h1 class="page-title">Broken Spring? We’ve Got You Covered</h1> <p>
Garage door springs wear out — but our repairs restore long-lasting performance you can count on. 
        We replace broken springs safely, efficiently, and with the kind of workmanship that keeps your door 
        running smoothly for years.
</p> <a href="sms:9895720303?&body=Hi%2C%20I%20need%20some%20help%20with%20a%20broken%20garage%20door%20spring." class="hero-contact-button" style="margin: 3rem auto -1rem;"> <i class="fas fa-comment-dots"></i> Text Us Now
</a> </section> <section class="no-card"> <h2 class="sub-heading">Fast, Safe Spring Repair in Central Michigan</h2> <p class="p-home">
If your garage door won’t open — or slams shut — a broken spring may be the culprit. Our expert spring repairs 
      restore your door’s balance and reliability, often same-day.
</p> <p class="p-home" style="margin-top: -1rem;">
Every spring we install is carefully matched to your door for performance and longevity — and every repair 
      includes full system testing and balancing.
</p> <img src="/photos/Broken-spring.webp" alt="Garage Door Spring Repair in Mt. Pleasant Michigan" loading="lazy" class="header-photo-interior"> </section> <section class="no-card"> <h2 class="sub-heading">Signs Your Spring May Be Broken</h2> <ul class="p-home" style="list-style: disc; padding-left: 1.5rem;"> <li>Loud bang from the garage — but nothing visible</li> <li>Garage door only lifts a few inches, or not at all</li> <li>Visible gap in the torsion spring above the door</li> <li>Door feels extremely heavy to lift manually</li> </ul> </section> <section class="no-card"> <h2 class="sub-heading">Why It’s Important to Act Quickly</h2> <p class="p-home">
Operating your door with a broken spring can strain your opener, damage your door, or cause injury. We recommend avoiding further use until a technician can safely make repairs.
      Our spring replacements include expert installation, full system tuning, and peace of mind that your door is safe to use again.
</p> <a href="/homeowner-tools/easy-estimate#estimate-form" class="cta-button" style="margin: 3rem auto;"><i class="fas fa-wrench"></i> Estimate My Spring Repair</a> </section>  <section> <h2 class="sub-heading">Not Sure If It’s the Spring?</h2> <p class="estimate-intro-paragraph">
Use our free online DoorDiagnosis™ Tool to get a quick answer. Just answer a few simple questions and we’ll help you figure out what’s going on.
</p> <a href="/homeowner-tools/door-diagnosis#troubleshooting" class="cta-button" style="align-items: center; justify-content: center;"><i class="fa-solid fa-magnifying-glass fa-fw"></i> Use DoorDiagnosis™</a> </section> <section> <h2 class="sub-heading">Curious how much life your garage door springs have left?</h2> <p class="estimate-intro-paragraph">
Our free SpringStatus™ Tool helps you estimate the remaining lifespan of your springs based on your answers to a few quick questions.
</p> <a href="/homeowner-tools/spring-status#springstatus" class="cta-button" style="align-items: center; justify-content: center;"><i class="fas fa-hourglass-half"></i> Try SpringStatus™</a> </section> <section> <h2 class="sub-heading">Isabella Garage Door</h2> <p style="font-size: .9rem; text-align: center;">
Broken spring repair done right.<br>
Serving Central Michigan with expert, dependable service that gets your door moving again.</p> <p style="font-size: .9rem; text-align: center; margin: 0.5rem;"><em>Raising Performance. Elevating Standards</em> </p> </section> `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script> "])), unescapeHTML(JSON.stringify(springSchema))) })}` })}`;
}, "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/services/broken-springs.astro", void 0);

const $$file = "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/services/broken-springs.astro";
const $$url = "/services/broken-springs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BrokenSprings,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
