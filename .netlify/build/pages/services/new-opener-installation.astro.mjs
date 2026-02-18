/* empty css                                                                   */
import { a as createComponent, g as renderComponent, r as renderTemplate, F as Fragment, u as unescapeHTML, m as maybeRenderHead } from '../../chunks/astro/server_xoD-kxEp.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BTkoY-F8.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$NewOpenerInstallation = createComponent(($$result, $$props, $$slots) => {
  const title = "New Garage Door Opener Installation | Isabella Garage Door";
  const description = "Professional installation of new garage door openers in Mt. Pleasant and Central Michigan. Choose from top brands and enjoy reliable, quiet operation backed by expert service.";
  const openerInstallSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Garage Door Opener Installation",
    "provider": {
      "@id": "https://isabellagaragedoor.com/#business"
    },
    "description": "Professional installation of residential garage door openers. We specialize in belt-drive, chain-drive, and wall-mount smart motors.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Opener Installation Options",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Belt-Drive Opener Installation",
            "description": "Ultra-quiet operation perfect for garages attached to living spaces or bedrooms."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Chain-Drive Opener Installation",
            "description": "Durable and reliable performance for heavy doors or detached garages."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Belt-Drive Opener Installation",
            "description": "Quiet belt drive reduces noise."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Smart Opener Installation",
            "description": "Installation of smart garage door openers you can control from an app on your phone."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wall-Mount (Jackshaft) Installation",
            "description": "Space-saving installation that clears up ceiling space and handles high-lift doors."
          }
        }
      ]
    }
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<img src="/src/photos/opener-installation-central-michigan.webp" alt="A newly installed garage door opener in Central Michigan" loading="eager" fetchpriority="high" class="header-photo-interior"> <section> <h1 class="page-title">Upgrade Your Opener with Confidence</h1> <p class="hero-description">
Whether your opener finally gave out — or it’s just time for something quieter, smarter, and more reliable — we make upgrading easy.
</p> <div class="hero-buttons"> <a href="sms:9895720303?&body=Hi%2C%20I'm%20looking%20to%20replace%20my%20garage%20door%20opener." class="hero-contact-button"> <i class="fas fa-comment-dots"></i> Text About an Upgrade
</a> </div> </section> <section class="no-card"> <h2 class="sub-heading">Smart, Quiet, and Built to Last</h2> <p class="p-home">
We install top-rated openers from LiftMaster, Chamberlain, and Genie — including belt drive models for ultra-quiet performance and MyQ-enabled units for smart home control. All installed with precision, care, and no mess left behind.
</p> <img src="/src/photos/Opener-install.webp" alt="New garage door opener installation in Mount Pleasant Michigan" class="homepg-about-photo"> </section> <section class="no-card"> <h2 class="sub-heading">Our Installation Includes</h2> <ul class="p-home" style="list-style: disc; padding-left: 1.5rem;"> <li>New opener with safety sensors and wall button</li> <li>Remote programming and smartphone setup</li> <li>Removal of old unit</li> <li>Full safety check and system test</li> <li>Lifetime support from a local expert</li> </ul> </section> <section class="no-card"> <h2 class="sub-heading">Not Sure What You Need?</h2> <p class="p-home">
Chain drive, belt drive, wall mount, or Wi-Fi enabled — we’ll walk you through the options that make sense for your budget, home, and goals. No pressure. Just honest recommendations.
</p> <a href="/contact" class="cta-button" style="margin: 2rem auto 3rem;"><i class="fa-solid fa-magnifying-glass fa-fw"></i> Ask Us Now</a> </section>  <section> <h2 class="sub-heading">Fast, Friendly Quotes Available</h2> <p class="estimate-intro-paragraph">
Our free online estimate tool can help you price out your upgrade in under a minute. It’s quick, simple, and 100% pressure-free.
</p> <a href="/homeowner-tools/easy-estimate#estimate-form" class="cta-button"><i class="fa-solid fa-bolt fa-fw"></i> Get My Installation Estimate</a> </section> <section> <h2 class="sub-heading">Isabella Garage Door</h2> <p style="font-size: .9rem; text-align: center;">
Upgrade to a smoother, smarter garage door experience—expert opener installs throughout Central Michigan.
</p> <p style="font-size: .9rem; text-align: center; margin: 0.5rem;"> <em>Raising Performance. Elevating Standards</em> </p> </section> `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script> "])), unescapeHTML(JSON.stringify(openerInstallSchema))) })}` })}`;
}, "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/services/new-opener-installation.astro", void 0);

const $$file = "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/services/new-opener-installation.astro";
const $$url = "/services/new-opener-installation";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$NewOpenerInstallation,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
