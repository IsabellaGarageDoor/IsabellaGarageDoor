/* empty css                                                                   */
import { c as createAstro, a as createComponent, m as maybeRenderHead, u as unescapeHTML, b as renderScript, f as addAttribute, r as renderTemplate, g as renderComponent, F as Fragment } from '../../chunks/astro/server_xoD-kxEp.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BTkoY-F8.mjs';
import 'clsx';
/* empty css                                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("http://localhost:4321");
const $$TestimonialCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TestimonialCard;
  const { quote, author, rating = 5 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="testimonial-card-white" data-astro-cid-3ba2o4vp> <div class="testimonial-gradient-overlay" data-astro-cid-3ba2o4vp></div> <div class="testimonial-stars" data-astro-cid-3ba2o4vp> ${Array.from({ length: 5 }).map((_, i) => renderTemplate`<svg viewBox="0 0 20 20"${addAttribute(`star ${i < rating ? "filled" : "empty"}`, "class")}${addAttribute(`transition-delay: ${i * 120}ms`, "style")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" data-astro-cid-3ba2o4vp> <polygon points="10,1.5 12.6,7.4 18.9,7.4 13.9,11.4 15.7,17.5 10,13.8 4.3,17.5 6.1,11.4 1.1,7.4 7.4,7.4" data-astro-cid-3ba2o4vp></polygon> </svg>`)} </div> <p class="testimonial-text" data-astro-cid-3ba2o4vp>${unescapeHTML(quote)}</p> <div class="testimonial-name" data-astro-cid-3ba2o4vp>— ${author}</div> <div class="testimonial-tail" data-astro-cid-3ba2o4vp></div> </div>  ${renderScript($$result, "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/components/TestimonialCard.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/components/TestimonialCard.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$NewDoorInstallation = createComponent(($$result, $$props, $$slots) => {
  const title = "New Garage Door Installation | Isabella Garage Door";
  const description = "Upgrade your home with professional new garage door installation in Mt. Pleasant and Central Michigan. Quality products and expert craftsmanship guaranteed.";
  const installationSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Garage Door Installation",
    "provider": {
      "@id": "https://isabellagaragedoor.com/#business"
    },
    "description": "Full-service residential garage door replacement and new construction installation. Includes track setup, spring calibration, and opener integration.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Installation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Garage Door Replacement",
            "description": "Removing old doors and installing modern, energy-efficient sectional garage doors."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Door Consultations",
            "description": "Professional measuring and style matching to find the perfect door for your home's architecture."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Insulated Door Upgrades",
            "description": "Installation of R-value rated doors to improve home energy efficiency and garage climate control."
          }
        }
      ]
    }
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<img src="/src/photos/newly-installed-garage-door.webp" alt="A Newly Installed Garage Door in Alma Michigan" loading="eager" fetchpriority="high" class="header-photo-interior"> <section> <h1 class="page-title">Beautiful, Reliable New Garage Doors</h1> <p class="hero-description">
Whether you’re upgrading curb appeal or replacing a failing door, we make the process simple — with expert guidance, professional installation, and zero mess left behind.
</p> <div class="hero-buttons"> <a href="sms:9895720303?&body=Hi%2C%20I'm%20looking%20to%20replace%20my%20garage%20door." class="hero-contact-button"> <i class="fas fa-comment-dots"></i> Text About an Install
</a> </div> </section> <section class="no-card"> <h2 class="sub-heading">A Door That Works — and Looks Great</h2> <p class="p-home">
We install quality doors from brands you can trust — with a range of styles, colors, and insulation options to fit your home and budget. Every install includes removal of the old door, proper balancing, and clean, precise workmanship.
</p> <img src="/src/photos/fresh-garage-door-installation.webp" alt="New garage door installation in Mt. Pleasant Michigan" class="homepg-about-photo"> </section> <section class="no-card"> <h2 class="sub-heading">Our Installation Process</h2> <ul class="p-home" style="list-style: disc; padding-left: 1.5rem;"> <li>Personalized help choosing your new door</li> <li>On-site measurement and consultation</li> <li>Old door removal and haul-away included</li> <li>Expert installation and spring balancing</li> <li>Full system test and safety inspection</li> </ul> </section> <section class="no-card"> <h2 class="sub-heading">Upgrade with Confidence</h2> <p class="p-home">
We’ll walk you through options that suit your needs — whether you want a classic look, better insulation, windows for light, or a dramatic curb appeal upgrade. No sales pressure. Just honest advice from someone who cares.
</p> <a href="/contact" class="cta-button" style="margin: 2rem auto 3rem;"><i class="fa-solid fa-door-open fa-fw"></i> Start My Door Quote</a> </section>  <section> <a href="/about/testimonials" style="text-decoration: none; color: inherit; display: block;"> ${renderComponent($$result2, "TestimonialCard", $$TestimonialCard, { "quote": "Our experience with Isabella Garage Door was exceptional. They provided high quality service and made us feel valued as customers. If you're in Mount Pleasant and need garage door services, I wholeheartedly recommend giving them a call. You won't be disappointed!", "author": "Michael S." })} </a> </section> <section> <h2 class="sub-heading">Start Your New Door Quote</h2> <p class="estimate-intro-paragraph">
Once you’ve got a style in mind, we’ll take care of the rest — measurements, haul-away, expert install, and a system that runs smoothly from day one. We’re always happy to walk you through your options without any pressure.
</p> <a href="/contact" class="cta-button"> <i class="fa-solid fa-clipboard-list fa-fw"></i> Request a New Door Quote
</a> </section> <section> <h2 class="sub-heading">Isabella Garage Door</h2> <p style="font-size: .9rem; text-align: center;">
Stylish, durable, professionally installed garage doors for homes across Central Michigan.
</p> <p style="font-size: .9rem; text-align: center; margin: 0.5rem;"> <em>Raising Performance. Elevating Standards</em> </p> </section> `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script> "])), unescapeHTML(JSON.stringify(installationSchema))) })}` })}`;
}, "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/services/new-door-installation.astro", void 0);

const $$file = "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/services/new-door-installation.astro";
const $$url = "/services/new-door-installation";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$NewDoorInstallation,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
