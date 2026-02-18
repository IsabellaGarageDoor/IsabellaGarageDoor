/* empty css                                                                   */
import { a as createComponent, g as renderComponent, r as renderTemplate, F as Fragment, u as unescapeHTML, m as maybeRenderHead } from '../../chunks/astro/server_xoD-kxEp.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_B24roKEI.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$OpenerRepair = createComponent(($$result, $$props, $$slots) => {
  const title = "Garage Door Opener Repair | Isabella Garage Door";
  const description = "Fast, reliable garage door opener repair services in Mt. Pleasant and Central Michigan. We fix all major brands to get your door working smoothly and safely again.";
  const openerSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Garage Door Opener Service",
    "provider": {
      "@id": "https://isabellagaragedoor.com/#business"
    },
    "description": "Professional diagnostics, motor repair, and new installation of residential garage door openers and smart entry systems.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Opener Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Opener Troubleshooting & Repair",
            "description": "Fixing common opener issues like sensor misalignment, stripped gears, and motor failure."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Smart Opener Installation",
            "description": "Installing modern Wi-Fi enabled openers with smartphone control and battery backup."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Remote & Keypad Programming",
            "description": "Syncing new remotes, wireless keypads, and HomeLink vehicle systems."
          }
        }
      ]
    }
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<img src="/photos/opener-repair-central-michigan.webp" alt="A garage door opener being repaired by Isabella Garage Door" loading="eager" fetchpriority="high" class="header-photo-interior"> <section> <h1 class="page-title">Opener Acting Up? We Can Help</h1> <p class="hero-description">
From unresponsive remotes to motors that just hum — we fix opener issues fast and get your garage back to working like it should.
</p> <div class="hero-buttons"> <a href="sms:9895720303?&body=Hi%2C%20I%20need%20some%20help%20with%20my%20garage%20door%20opener." class="hero-contact-button"> <i class="fas fa-comment-dots"></i> Text Us Now
</a> </div> </section> <section class="no-card"> <h2 class="sub-heading">Reliable Garage Door Opener Repair in Central Michigan</h2> <p class="p-home">
Your opener should open and close your door quietly, consistently, and safely. If it’s stuttering, grinding, or simply not responding — we’ll diagnose the issue and get it resolved.
      We service all major brands and opener types, including chain, belt, screw-drive, and wall-mount systems.
</p> <img src="/photos/unique-garage-door-opener.webp" alt="Garage Door Opener Repair in Mt. Pleasant Michigan" class="homepg-about-photo"> </section> <section class="no-card"> <h2 class="sub-heading">Common Opener Problems We Fix</h2> <ul class="p-home" style="list-style: disc; padding-left: 1.5rem;"> <li>Remotes, keypads, or MyQ apps not working</li> <li>Opener hums but doesn’t move the door</li> <li>Opener light blinks but won’t close the door</li> <li>Grinding, popping, or squealing sounds</li> <li>Intermittent or delayed response</li> </ul> </section> <section class="no-card"> <h2 class="sub-heading">Smart Upgrades Available</h2> <p class="p-home">
Ready for quieter operation or smartphone control? We also offer modern opener upgrades from trusted brands like LiftMaster and Chamberlain, including MyQ smart openers that let you monitor and control your door from anywhere.
</p> <a href="/homeowner-tools/easy-estimate#estimate-form" class="cta-button" style="margin: 2rem auto 3rem;"><i class="fas fa-tools"></i> Request Opener Estimate</a> </section>  <section> <h2 class="sub-heading">Not Sure If It’s the Opener?</h2> <p class="estimate-intro-paragraph">
Our free DoorDiagnosis™ troubleshooting tool can help you narrow it down — fast. You’ll know whether it’s the opener, the spring, or something else, in under a minute.
</p> <a href="/homeowner-tools/door-diagnosis#troubleshooting" class="cta-button" style="display: inline-flex; align-items: center; justify-content: center;"><i class="fa-solid fa-magnifying-glass fa-fw"></i> Use the DoorDiagnosis™ Tool</a> </section> <section> <h2 class="sub-heading">Isabella Garage Door</h2> <p style="font-size: .9rem; text-align: center;">
Reliable opener repairs to keep your garage door running smoothly—serving homes across Central Michigan.
</p> <p style="font-size: .9rem; text-align: center; margin: 0.5rem;"> <em>Raising Performance. Elevating Standards</em> </p> </section> `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script> "])), unescapeHTML(JSON.stringify(openerSchema))) })}` })}`;
}, "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/services/opener-repair.astro", void 0);

const $$file = "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/services/opener-repair.astro";
const $$url = "/services/opener-repair";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$OpenerRepair,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
