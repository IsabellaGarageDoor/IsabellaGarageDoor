/* empty css                                                                */
import { a as createComponent, m as maybeRenderHead, r as renderTemplate, f as addAttribute, b as renderScript, c as createAstro, g as renderComponent, F as Fragment, u as unescapeHTML } from '../chunks/astro/server_xoD-kxEp.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_B24roKEI.mjs';
import 'clsx';
/* empty css                                 */
import { g as getCollection } from '../chunks/_astro_content_Bvnd_znt.mjs';
export { renderers } from '../renderers.mjs';

const $$AvailabilityBanner = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="availability-banner reveal-on-scroll" data-astro-cid-wd7ebvzt> <div class="availability-content" data-astro-cid-wd7ebvzt> <p class="availability-text" data-astro-cid-wd7ebvzt> <!-- Edit This Section -->
📅 <strong data-astro-cid-wd7ebvzt>Now Scheduling:</strong> for <span class="highlighted" data-astro-cid-wd7ebvzt>Spring 2026</span>.
Raising Performance. Elevating Standards. Secure your service date early.
</p> <a href="/contact" class="availability-btn" data-astro-cid-wd7ebvzt>Request Service</a> </div> </section> <!-- COPY OF BANNER 
      📅 <strong>Now Booking:</strong> Limited appointments available for <span class="highlighted">early May</span>.
Don’t wait — secure your spot today.
    </p>

    <a href="/contact" class="availability-btn">Request Service</a>
  </div>
</section>
--> `;
}, "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/components/editable-sections/AvailabilityBanner.astro", void 0);

const $$BlogCards = createComponent(async ($$result, $$props, $$slots) => {
  const COUNT = 3;
  const posts = await getCollection("blog");
  const featuredPosts = [...posts].sort(() => 0.5 - Math.random()).slice(0, COUNT);
  return renderTemplate`${maybeRenderHead()}<section class="blog-background"> <h2 class="sub-heading">Garage Door Tips & Learning Center</h2> <div class="blog-cards"> ${featuredPosts.map((post) => renderTemplate`<article class="blog-card reveal-on-scroll"> ${post.data.thumbnail && renderTemplate`<img${addAttribute(post.data.thumbnail, "src")}${addAttribute(post.data.title || "Garage door article", "alt")} loading="lazy">`} <div class="blog-content"> <h3> <a${addAttribute(`/blog/${post.slug}`, "href")}> ${post.data.title} </a> </h3> ${post.data.description && renderTemplate`<p>${post.data.description}</p>`} <a class="read-more"${addAttribute(`/blog/${post.slug}`, "href")}>
Read More →
</a> </div> </article>`)} </div> </section>`;
}, "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/components/BlogCards.astro", void 0);

const $$Coupons = createComponent(($$result, $$props, $$slots) => {
  const showSecondCoupon = false;
  const showThirdCoupon = false;
  const showFourthCoupon = false;
  const showFifthCoupon = false;
  const showSixthCoupon = false;
  return renderTemplate`${maybeRenderHead()}<div class="coupons-container" data-astro-cid-zjdshpj7> ${renderTemplate`<a href="/contact" class="coupon-bleed" aria-label="Go to contact page" data-astro-cid-zjdshpj7> <div class="coupon" data-astro-cid-zjdshpj7> <h2 data-astro-cid-zjdshpj7>Spring Special</h2> <p class="offer" data-astro-cid-zjdshpj7>Receive a full garage door tune-up for just <span data-astro-cid-zjdshpj7>$79</span></p> <p class="details" data-astro-cid-zjdshpj7>Simply mention this coupon when booking</p> <p class="expiration" data-astro-cid-zjdshpj7>Offer expires May 30th.</p> <button type="button" class="print-coupon-btn" data-astro-cid-zjdshpj7>Print Coupon</button> </div> </a>`} ${showSecondCoupon} ${showThirdCoupon} ${showFourthCoupon} ${showFifthCoupon} ${showSixthCoupon} </div>  ${renderScript($$result, "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/components/editable-sections/Coupons.astro?astro&type=script&index=0&lang.ts")} ${renderScript($$result, "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/components/editable-sections/Coupons.astro?astro&type=script&index=1&lang.ts")}`;
}, "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/components/editable-sections/Coupons.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$Astro = createAstro("http://localhost:4321");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const title = "Home | Isabella Garage Door";
  const description = "Professional garage door repair and replacement in Central Michigan. Honest service, fast response, and precision you can trust.";
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "GarageDoorService",
    "@id": "https://isabellagaragedoor.com/#business",
    "name": "Isabella Garage Door",
    "url": "https://isabellagaragedoor.com",
    "logo": "https://isabellagaragedoor.com/logo.png",
    "image": "https://isabellagaragedoor.com/images/hero-image.jpg",
    "description": "Professional garage door repair, broken spring replacement, opener installation, and door maintenance serving Mt. Pleasant, Rosebush, and Central Michigan.",
    "telephone": "+1-989-572-0303",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2088 North Lincoln Road",
      "addressLocality": "Rosebush",
      "addressRegion": "MI",
      "postalCode": "48878",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.7001,
      "longitude": -84.7674
    },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Central Michigan" },
      { "@type": "AdministrativeArea", "name": "Isabella County" },
      { "@type": "City", "name": "Mount Pleasant, MI" },
      { "@type": "City", "name": "Alma, MI" },
      { "@type": "City", "name": "Clare, MI" },
      { "@type": "City", "name": "Rosebush, MI" },
      { "@type": "City", "name": "Coleman, MI" },
      { "@type": "City", "name": "Lake Isabella, MI" },
      { "@type": "City", "name": "Beal City, MI" },
      { "@type": "City", "name": "Farwell, MI" },
      { "@type": "City", "name": "Remus, MI" },
      { "@type": "City", "name": "St. Louis, MI" },
      { "@type": "City", "name": "Shepherd, MI" }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "16:00"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Isabella Garage Door Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Broken Spring Replacement",
            "serviceType": "Torsion Spring Repair",
            "description": "Safe and professional replacement of high-tension garage door springs."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Garage Door Opener Repair & Replacement",
            "serviceType": "Opener Service",
            "description": "Diagnostics and repair for all major brands, plus new smart opener installations."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Garage Door Cable Off",
            "serviceType": "Cable Repair & Replacement Service",
            "description": "Broken garage door cable fix and replacement."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "General Garage Door Repair",
            "serviceType": "Hardware Repair",
            "description": "Fixing off-track doors, snapped cables, worn rollers, and bent tracks."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Garage Door Maintenance & Tune-Up",
            "serviceType": "Preventative Maintenance",
            "description": "Complete 20-point safety inspection, lubrication, and door balancing."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "New Garage Door Installation",
            "serviceType": "Door Installation",
            "description": "Professional installation of high-quality, insulated residential garage doors."
          }
        }
      ]
    },
    "sameAs": [
      "https://www.facebook.com/isabellagaragedoor"
    ]
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(['  <link rel="stylesheet" href="/styles/global.css"> ', `<section class="hero" data-astro-cid-j7pv25f6> <div class="hero-content reveal-on-scroll" data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>Don't Let a Broken Door Ruin Your Day</h1> <p class="hero-description" data-astro-cid-j7pv25f6>We make it easy \u2014 with dependable service, quality craftsmanship, and clear communication to get your day back on track, with less stress and more peace of mind.
</p> <div class="hero-buttons reveal-on-scroll" data-astro-cid-j7pv25f6> <a href="/homeowner-tools/easy-estimate#estimate-form" button class="hero-estimate-button" data-astro-cid-j7pv25f6><i class="fa-solid fa-calculator fa-fw " data-astro-cid-j7pv25f6></i> Get a Free Estimate</a> <a href="sms:9895720303?&body=Hi%2C%20I%20need%20some%20help%20with%20my%20garage%20door." button class="hero-contact-button" data-astro-cid-j7pv25f6><i class="fas fa-comment-dots " data-astro-cid-j7pv25f6></i> Text Us</a> </div> </div> </section> `, `  <section style="margin-bottom: 1rem;" data-astro-cid-j7pv25f6> <img src="/photos/elevating-garage-door-section.webp" alt="The-best-garage-door-installation-Mount-Pleasant-Michigan" class="homepg-about-photo reveal-on-scroll" data-astro-cid-j7pv25f6> <h2 class="sub-heading" style="margin-top: 2rem;" data-astro-cid-j7pv25f6>Elevating the Standard</h2> <p class="p-home" data-astro-cid-j7pv25f6>At Isabella Garage Door, we know your time, your home, and your peace of mind matter.
When something breaks, you shouldn\u2019t have to deal with delays, confusion, or half-done repairs.
That\u2019s why we focus on doing things the right way \u2014 with clear communication, quality craftsmanship, and a personal touch you can count on.
We take pride in showing up when we say we will, respecting your space, and making sure every job is done right.
It\u2019s not just about fixing the door \u2014 it\u2019s about making your day a little easier and your home feel taken care of.
</p> <div class="trust-badges" data-astro-cid-j7pv25f6> <div class="trust-badge reveal-on-scroll" data-astro-cid-j7pv25f6> <img src="/photos/trust-badge-shield.png" alt="Fully Insured" data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>Fully<br data-astro-cid-j7pv25f6>Insured</p> </div> <div class="trust-badge reveal-on-scroll" data-astro-cid-j7pv25f6> <img src="/photos/trust-badge-tools.png" alt="Expert Technicians" data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>Expert<br data-astro-cid-j7pv25f6>Technicians</p> </div> <div class="trust-badge reveal-on-scroll" data-astro-cid-j7pv25f6> <img src="/photos/trust-badge-gears.png" alt="Premium Parts" data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>Premium<br data-astro-cid-j7pv25f6>Parts</p> </div> <div class="trust-badge reveal-on-scroll" data-astro-cid-j7pv25f6> <img src="/photos/trust-badge-michigan.png" alt="Local-Family Owned" data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>Local-Family<br data-astro-cid-j7pv25f6>Owned</p> </div> <div class="trust-badge reveal-on-scroll" data-astro-cid-j7pv25f6> <img src="/photos/trust-badge-banner.png" alt="Warranty Guarantee" data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>Warranty<br data-astro-cid-j7pv25f6>Guarantee</p> </div> <div class="trust-badge reveal-on-scroll" data-astro-cid-j7pv25f6> <img src="/photos/trust-badge-stars.png" alt="5 Star Rated" data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>5 Star<br data-astro-cid-j7pv25f6>Rated</p> </div> </div> </section> <section class="core-services-section" data-astro-cid-j7pv25f6> <h2 class="sub-heading" data-astro-cid-j7pv25f6>How We Can Help</h2> <p class="core-services-intro" data-astro-cid-j7pv25f6> <!-- From simple repairs to full installations, --> We're here to keep your garage door working reliably and looking great.
    Explore our core services below.
</p> <div class="core-services-grid" data-astro-cid-j7pv25f6> <a href="/services/door-repair" class="core-services-card repair" data-astro-cid-j7pv25f6> <div class="core-services-icon-circle" data-astro-cid-j7pv25f6> <img src="/photos/garage-door-repair-icon.png" alt="Garage Door Repair Icon" class="service-icon" data-astro-cid-j7pv25f6> </div> <h3 data-astro-cid-j7pv25f6>Door Repair</h3> <p data-astro-cid-j7pv25f6>Fixing broken springs, misaligned tracks, worn-out rollers, and more \u2014 fast, clean, and dependable</p> </a> <a href="/services/opener-repair" class="core-services-card opener" data-astro-cid-j7pv25f6> <div class="core-services-icon-circle" data-astro-cid-j7pv25f6> <img src="/photos/garage-door-opener-icon.png" alt="Garage Door Opener Icon" class="opener-icon" data-astro-cid-j7pv25f6> </div> <h3 data-astro-cid-j7pv25f6>Opener Services</h3> <p data-astro-cid-j7pv25f6>Need a new opener? Troubleshooting a glitchy remote? We work with all major brands and smart systems.</p> </a> <!-- UN-HIDE THIS WHEN LICENSED
    <a href="/services/new-door-installation" class="core-services-card installation">
      <div class="core-services-icon-circle">
        <img src="/photos/garage-door-installation-icon.png" alt="Garage Door Installation Icon" class="service-icon" />
      </div>
      <h3>New Installations</h3>
      <p>We help you choose the right door and install it with craftsmanship and care \u2014 no mess left behind.</p>
    </a>
--> <a href="/services/maintenance" class="core-services-card maintenance" data-astro-cid-j7pv25f6> <div class="core-services-icon-circle" data-astro-cid-j7pv25f6> <img src="/photos/garage-door-maintenance-icon.png" alt="Garage Door Maintenance Icon" class="service-icon" data-astro-cid-j7pv25f6> </div> <h3 data-astro-cid-j7pv25f6>Maintenance</h3> <p data-astro-cid-j7pv25f6>Our Protection Plans help to catch problems early and extend the life of your door and your opener.</p> </a> </div> <a href="/services/services" class="cta-button margin-top-3rem" data-astro-cid-j7pv25f6><i class="fas fa-compass" data-astro-cid-j7pv25f6></i> Explore Our Services</a> </section> <section class="no-card" data-astro-cid-j7pv25f6> <div class="why-choose-us-section" data-astro-cid-j7pv25f6> <div class="why-choose-us-container" data-astro-cid-j7pv25f6> <h2 class="sub-heading" data-astro-cid-j7pv25f6>Why Choose Isabella Garage Door?</h2> <p class="testimonial-intro-paragraph" data-astro-cid-j7pv25f6>We believe great service starts with trust. That\u2019s why we do things the right way \u2014 with pride, care, and real respect for your home.
</p> <div class="accordion-group reveal-on-scroll" data-astro-cid-j7pv25f6> <div class="accordion-item" data-astro-cid-j7pv25f6> <button class="accordion-button" onclick="toggleAccordion(this)" data-astro-cid-j7pv25f6>
Personal Service from a Local Family Business
<svg class="accordion-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-j7pv25f6></path> </svg> </button> <div class="accordion-content" data-astro-cid-j7pv25f6> <div class="accordion-text" data-astro-cid-j7pv25f6>
We\u2019re a family-run company that lives and works right here in Central Michigan.
No call centers. No subcontractors. Just real people who care about doing the job right and treating you with respect.
</div> </div> </div> <div class="accordion-item" data-astro-cid-j7pv25f6> <button class="accordion-button" onclick="toggleAccordion(this)" data-astro-cid-j7pv25f6>
Workmanship That Lasts
<svg class="accordion-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-j7pv25f6></path> </svg> </button> <div class="accordion-content" data-astro-cid-j7pv25f6> <div class="accordion-text" data-astro-cid-j7pv25f6>
Our <!-- repairs and installations --> are built to stand the test of time.
With premium parts and attention to detail, we don\u2019t just get it done \u2014 we get it done right the first time.
</div> </div> </div> <div class="accordion-item" data-astro-cid-j7pv25f6> <button class="accordion-button" onclick="toggleAccordion(this)" data-astro-cid-j7pv25f6>
Trusted by Homeowners Across Central Michigan
<svg class="accordion-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-j7pv25f6></path> </svg> </button> <div class="accordion-content" data-astro-cid-j7pv25f6> <div class="accordion-text" data-astro-cid-j7pv25f6>
We\u2019ve earned the trust of your neighbors by showing up on time, communicating clearly, and standing behind our work.
You can count on us to be honest, respectful, and reliable.
</div> </div> </div> <div class="accordion-item" data-astro-cid-j7pv25f6> <button class="accordion-button" onclick="toggleAccordion(this)" data-astro-cid-j7pv25f6>
Lasting Peace of Mind
<svg class="accordion-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-j7pv25f6></path> </svg> </button> <div class="accordion-content" data-astro-cid-j7pv25f6> <div class="accordion-text" data-astro-cid-j7pv25f6>
We focus on providing lasting solutions <!-- and expert installations --> that save you time, money, and headaches down the road.
Our commitment to quality materials and meticulous workmanship ensures your garage door operates reliably for years to come, giving you genuine peace of mind.
</div> </div> </div> </div> </div> </div> <a href="/about/why-choose-isabella-garage-door" class="cta-button margin-bottom-2rem" data-astro-cid-j7pv25f6><i class="fas fa-magnifying-glass" data-astro-cid-j7pv25f6></i> Learn More About Us</a> </section>   <a href="/about/testimonials" class="cta-button" data-astro-cid-j7pv25f6><i class="fa-solid fa-star fa-fw" data-astro-cid-j7pv25f6></i> Read Customer Reviews</a> <section data-astro-cid-j7pv25f6> <div class="reveal-on-scroll" data-astro-cid-j7pv25f6> <p class="testimonial-feature-heading" style="margin-top: 3rem;" data-astro-cid-j7pv25f6><i class="fas fa-check icon-bronze" data-astro-cid-j7pv25f6></i> <strong data-astro-cid-j7pv25f6>Locally Owned & Family Operated</strong></p> <p class="p-testimonials" data-astro-cid-j7pv25f6>Personal service from people who live and work in your community.</p> <p class="testimonial-feature-heading" data-astro-cid-j7pv25f6><i class="fas fa-check icon-bronze" data-astro-cid-j7pv25f6></i> <strong data-astro-cid-j7pv25f6>Satisfaction Backed by Craftsmanship</strong></p> <p class="p-testimonials" data-astro-cid-j7pv25f6>We do it right \u2014 or we make it right. Every time.</p> <p class="testimonial-feature-heading" data-astro-cid-j7pv25f6><i class="fas fa-check icon-bronze" data-astro-cid-j7pv25f6></i> <strong data-astro-cid-j7pv25f6>Trusted by Michigan Homeowners</strong></p> <p class="p-testimonials" data-astro-cid-j7pv25f6>Known for honest recommendations and dependable work throughout Central Michigan.</p> </div> </section>  <section class="core-services-section" data-astro-cid-j7pv25f6> <div class="homeowner-toolbox-section" data-astro-cid-j7pv25f6> <h2 class="sub-heading" data-astro-cid-j7pv25f6>Homeowner Toolbox</h2> <p style="text-align: left;" data-astro-cid-j7pv25f6>Fast answers. Instant estimates. Easy diagnostics. Built for you.</p> <div class="homeowner-toolbox-wrapper" data-astro-cid-j7pv25f6> <div class="homeowner-toolbox-grid" data-astro-cid-j7pv25f6> <a href="/homeowner-tools/easy-estimate#estimate-form" aria-label="Receive a Free Estimate from Isabella Garage Door" class="homeowner-toolbox-card" data-astro-cid-j7pv25f6> <img src="/photos/easyestimate-logo.webp" alt="EasyEstimate" class="homeowner-toolbox-img" data-astro-cid-j7pv25f6> <div class="homeowner-toolbox-body" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>EasyEstimate\u2122</h3> <p data-astro-cid-j7pv25f6>Curious about costs? EasyEstimate\u2122 gives fast estimates in seconds.</p> <p class="read-more" style="color: #b27d57;" data-astro-cid-j7pv25f6>Get Estimate \u2192</p> </div> </a> <a href="/homeowner-tools/door-diagnosis#troubleshooting" aria-label="Diagnose Your Garage Door with DoorDiagnosis Tool" class="homeowner-toolbox-card" data-astro-cid-j7pv25f6> <img src="/photos/doordiagnosis-logo.webp" alt="DoorDiagnosis" class="homeowner-toolbox-img" data-astro-cid-j7pv25f6> <div class="homeowner-toolbox-body" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>DoorDiagnosis\u2122</h3> <p data-astro-cid-j7pv25f6>Door problems? DoorDiagnosis\u2122 pinpoints the problem in less than a minute.</p> <p class="read-more" style="color: #b27d57;" data-astro-cid-j7pv25f6>Find Problem \u2192</p> </div> </a> <a href="/homeowner-tools/spring-status#springstatus" aria-label="Check Your Garage Door Springs with SpringStatus Tool" class="homeowner-toolbox-card" data-astro-cid-j7pv25f6> <img src="/photos/springstatus-logo.webp" alt="SpringStatus" class="homeowner-toolbox-img" data-astro-cid-j7pv25f6> <div class="homeowner-toolbox-body" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>SpringStatus\u2122</h3> <p data-astro-cid-j7pv25f6>Worried your springs might fail? SpringStatus\u2122 calculates their lifespan instantly\u2014so you know when to replace them.</p> <p class="read-more" style="color: #b27d57;" data-astro-cid-j7pv25f6>Check Springs \u2192</p> </div> </a> <!--     <a href="/homeowner-tools/ask-abel-ai-assistant#askabel" aria-label="AI Garage Door Chat Bot" class="homeowner-toolbox-card">
          <img src="/photos/askabel-logo.webp" alt="AI Garage Door Assistant" class="homeowner-toolbox-img">
          <div class="homeowner-toolbox-body">
            <h3>AskAbel\u2122</h3>
            <p>Got a garage door question? AskAbel\u2122 gives you instant answers\u2014anytime, day or night</p>
        <p class="read-more" style="color: #b27d57;">Ask Abel \u2192</p>
          </div>
        </a>
   --> </div> </div> <!--
    <a href="/homeowner-tools/toolbox" class="cta-button margin-bottom-2rem" style="display: block; margin: 2rem auto 0;">
      <i class="fa-solid fa-toolbox"></i> Use Homeowner Tools
    </a>
--> </div> </section> <section class="faq-area" data-astro-cid-j7pv25f6> <section id="faq" data-astro-cid-j7pv25f6> <div class="faq-head" data-astro-cid-j7pv25f6> <a href="/resources/faq" style="text-decoration: none; color: inherit; display: block;" data-astro-cid-j7pv25f6> <h2 class="sub-heading" style="margin-bottom: -.5rem;" data-astro-cid-j7pv25f6>Frequently Asked Questions</h2> </a> </div> <div class=" reveal-on-scroll" data-astro-cid-j7pv25f6> <div class="faq-item" data-astro-cid-j7pv25f6><div class="faq-question" data-astro-cid-j7pv25f6><span data-astro-cid-j7pv25f6>Can you work on older garage doors?</span><span class="faq-arrow" data-astro-cid-j7pv25f6>&#9654;</span></div><div class="faq-answer" data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>Definitely. We repair and maintain a wide range of door types\u2014even older models.
If something isn\u2019t available, we\u2019ll help find a good solution.</p></div></div> <div class="faq-item" data-astro-cid-j7pv25f6><div class="faq-question" data-astro-cid-j7pv25f6><span data-astro-cid-j7pv25f6>Will you explain what's wrong before starting work?</span><span class="faq-arrow" data-astro-cid-j7pv25f6>&#9654;</span></div><div class="faq-answer" data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>Yes. Every visit starts with a thorough inspection and diagnostic test. We\u2019ll explain the issue, go over your options, and get your approval before any repairs begin.
</p></div></div> <div class="faq-item" data-astro-cid-j7pv25f6><div class="faq-question" data-astro-cid-j7pv25f6><span data-astro-cid-j7pv25f6>Are your repairs guaranteed?</span><span class="faq-arrow" data-astro-cid-j7pv25f6>&#9654;</span></div><div class="faq-answer" data-astro-cid-j7pv25f6><p data-astro-cid-j7pv25f6>Absolutely.
We stand behind our work with an outstanding 1 year warranty and a commitment to getting it done right the first time.</p></div></div> <div class="faq-item" data-astro-cid-j7pv25f6><div class="faq-question" data-astro-cid-j7pv25f6><span data-astro-cid-j7pv25f6>Can I book online?</span><span class="faq-arrow" data-astro-cid-j7pv25f6>&#9654;</span></div><div class="faq-answer" data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>Yes. You can fill out our online form to request service, and we\u2019ll contact you promptly by email, text, or phone to schedule your repair at a convenient time.</p></div></div> <div class="faq-item" data-astro-cid-j7pv25f6> <div class="faq-question" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>Still have questions?</span> <span class="faq-arrow" data-astro-cid-j7pv25f6>&#9654;</span> </div> <div class="faq-answer" data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>We\u2019ve got a full FAQ page covering everything from opener issues to smart garage setups.</p> <a href="/resources/faq" class="faq-button" style="margin-bottom: 0.5rem;" data-astro-cid-j7pv25f6><i class="fa-solid fa-book-open fa-fw" data-astro-cid-j7pv25f6></i> Browse All FAQs</a> </div> </div> </div> </section> </section> <img src="/photos/Brand-new-garage-door-installation-Mt-Pleasant-Michigan.webp" alt="New garage door installed in Mt. Pleasant Michigan by Isabella Garage Door" class="about-image" data-astro-cid-j7pv25f6> <section class="no-card" data-astro-cid-j7pv25f6> <h2 class="sub-heading" data-astro-cid-j7pv25f6>About Isabella Garage Door</h2> <div class="reveal-on-scroll" data-astro-cid-j7pv25f6> <p class="about-main-paragraph" data-astro-cid-j7pv25f6> <span class="about-highlight-span" data-astro-cid-j7pv25f6>At Isabella Garage Door</span>, we bring premium craftsmanship, honest service, and personal attention to every project.
We proudly serve Central Michigan communities with expert garage door repair <!--, installation, --> and maintenance.
</p> <p class="about-paragraph-with-padding" data-astro-cid-j7pv25f6> <span class="about-highlight-span" data-astro-cid-j7pv25f6>Our commitment is simple:</span> <em data-astro-cid-j7pv25f6>Raising Performance.
Elevating Standards.</em>
From the first phone call to the final inspection, we prioritize clear communication, dependable workmanship, and a respectful experience.
We don't just work in the community - we're proud to serve our neighbors with integrity and care.
</p> <p class="about-last-paragraph" data-astro-cid-j7pv25f6> <span class="about-highlight-span" data-astro-cid-j7pv25f6>Thank You!</span>
for considering Isabella Garage Door.
We look forward to serving you.</p> </div> <a href="/about/our-story" class="cta-button" style="margin-bottom: 2rem" data-astro-cid-j7pv25f6><i class="fa-solid fa-users fa-fw" data-astro-cid-j7pv25f6></i> Learn More About Us</a> </section> `, '  <section class="service-area-section" data-astro-cid-j7pv25f6> <div id="service-area" style="position: relative; top: -80px;" data-astro-cid-j7pv25f6></div> <h2 class="sub-heading" data-astro-cid-j7pv25f6>Service Area</h2> <img src="/photos/Isabella-Garage-Door-map-of-central-Michigan-service-area.webp" alt="Isabella Garage Door Service Area Map covering Central Michigan to include Mt. Pleasant, Clare, Alma, Coleman and more" class="homepg-service-photo" data-astro-cid-j7pv25f6> <section class="area-description" data-astro-cid-j7pv25f6> <div class="centered-content" data-astro-cid-j7pv25f6> <p class="p-home area-description-intro" data-astro-cid-j7pv25f6>\nLooking for garage door\nservices near you? Isabella Garage Door proudly serves homeowners in:</p> <p class="area-description-list" data-astro-cid-j7pv25f6>\nMount Pleasant \u2022 Lake Isabella \u2022 Clare \u2022 Farwell \u2022 Coleman \u2022 Shepherd \u2022 Alma \u2022 Remus \u2022 Rosebush \u2022 Beal City \u2022 St. Louis\nand surrounding Central Michigan communities.</p> <a href="/contact" class="cta-button" style="margin-top: 2rem;" data-astro-cid-j7pv25f6><i class="fa-solid fa-location-dot fa-fw" data-astro-cid-j7pv25f6></i> Need Local Help?</a> </div> </section> </section> <section class="core-services-section reveal-on-scroll" data-astro-cid-j7pv25f6> ', ' </section> <section data-astro-cid-j7pv25f6> <a href="/" aria-label="Go to homepage" data-astro-cid-j7pv25f6> <img src="/photos/blue-tag-isabella-garage-door-logo.svg" alt="Isabella Garage Door" class="responsive-image reveal-on-scroll" data-astro-cid-j7pv25f6> </a> <p style="font-size: .9rem; text-align: center;" data-astro-cid-j7pv25f6>\nServing Central Michigan with honest, high-quality garage door service.\n</p> <p style="font-size: .9rem; text-align: center; margin: 0.5rem;" data-astro-cid-j7pv25f6> <em data-astro-cid-j7pv25f6>Raising Performance. Elevating Standards</em> </p> </section>  ', " <script>\ndocument.querySelectorAll('.faq-item').forEach(item => {\n  const question = item.querySelector('.faq-question');\n  const answer = item.querySelector('.faq-answer');\n\n  question.addEventListener('click', () => {\n    const isOpen = item.classList.contains('open');\n\n    document.querySelectorAll('.faq-item').forEach(i => {\n      i.classList.remove('open');\n      i.querySelector('.faq-answer').style.maxHeight = null;\n    });\n\n    if (!isOpen) {\n      item.classList.add('open');\n       answer.style.maxHeight = answer.scrollHeight + 'px';\n    }\n  });\n});\n<\/script> <script is:script>\n  const icons = document.querySelectorAll('.core-services-icon-circle');\n\n  const observer = new IntersectionObserver(\n    entries => {\n      entries.forEach(entry => {\n        if (entry.isIntersecting) {\n          entry.target.classList.add('visible');\n          observer.unobserve(entry.target);\n        }\n      });\n    },\n    { threshold: 0.5 }\n  );\nicons.forEach(icon => observer.observe(icon));\n<\/script> ", " ", " "])), maybeRenderHead(), renderComponent($$result2, "AvailabilityBanner", $$AvailabilityBanner, { "data-astro-cid-j7pv25f6": true }), renderComponent($$result2, "BlogCards", $$BlogCards, { "data-astro-cid-j7pv25f6": true }), renderComponent($$result2, "Coupons", $$Coupons, { "data-astro-cid-j7pv25f6": true }), renderScript($$result2, "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/index.astro?astro&type=script&index=0&lang.ts"), renderScript($$result2, "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/index.astro?astro&type=script&index=1&lang.ts"), renderScript($$result2, "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/index.astro?astro&type=script&index=2&lang.ts")), "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_b || (_b = __template([' <script type="application/ld+json">', "<\/script> "])), unescapeHTML(JSON.stringify(homeSchema))) })}` })}`;
}, "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/index.astro", void 0);

const $$file = "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
