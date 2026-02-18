/* empty css                                                                   */
import { c as createAstro, a as createComponent, g as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_xoD-kxEp.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BTkoY-F8.mjs';
/* empty css                                           */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("http://localhost:4321");
const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Testimonials;
  const title = "Testimonials | Isabella Garage Door";
  const description = "Hear from our satisfied customers across Central Michigan and discover why Isabella Garage Door is the trusted choice for garage door service.";
  const reviews = [
    {
      quote: "Our garage door opener stopped working out of nowhere and we were stuck parking outside. Isabella Garage Door came out and diagnosed the issue and had a new opener installed that same day. Super friendly and professional. Everything works perfectly now. Couldn't be happier with the service!",
      author: "Taylor W.",
      date: "2025-05-26",
      rating: 5
    },
    {
      quote: "The tech explained the problem clearly and fixed it same day.",
      author: "Paul R.",
      date: "2024-06-30",
      rating: 5
    },
    {
      quote: "Our experience with Isabella Garage Door was exceptional. They provided high quality service and made us feel valued as customers. If you're in Mount Pleasant and need garage door services, I wholeheartedly recommend giving them a call. You won't be disappointed!",
      author: "Micheal S.",
      date: "2024-06-15",
      rating: 5
    },
    {
      quote: "After months of dealing with a noisy, jerky garage door, we finally decided to call Isabella Garage Door. The tech replaced the old worn out rollers. What a difference! The door is so quiet now. We really appreciate them fixing our door. Highly recommend!",
      author: "Elizabeth A.",
      date: "2024-06-30",
      rating: 5
    },
    {
      quote: "We were having issues with our garage door not closing all the way, and it started getting worse. We called Isabella Garage Door and they showed up the next day, right on time. They inspected everything, explained the problem and made the repairs. The door works great now and it\u2019s so much quieter. Very impressed!",
      author: "Tracey S.",
      date: "2024-06-30",
      rating: 5
    }
    //  {
    //    quote: 
    //    author: 
    //    date: 
    //    rating:
    //   },
    // Add more reviews here...
  ];
  reviews.sort((a, b) => new Date(b.date) - new Date(a.date));
  Number(Astro2.url.searchParams.get("page") || 1);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "data-astro-cid-ir7u2wkk": true }, { "default": ($$result2) => renderTemplate` <link rel="stylesheet" href="/styles/global.css"> ${maybeRenderHead()}<img src="/src/photos/happy-family-garage-door.webp" alt="The-best-garage-door-installation-Mount-Pleasant-Michigan" loading="eager" fetchpriority="high" class="header-photo-interior" data-astro-cid-ir7u2wkk> <h1 class="page-title" data-astro-cid-ir7u2wkk>What Our Customers Are Saying</h1> <p class="left-content" data-astro-cid-ir7u2wkk>We don’t just fix garage doors — we build trust. Homeowners in Mt. Pleasant, Alma, Clare, Isabella County, and across Central Michigan say it best:
</p> <h2 class="sub-heading" data-astro-cid-ir7u2wkk>Reviews Will Be Shown As We Recieve Them</h2>  <section class="testimonial-form-section" data-astro-cid-ir7u2wkk> <h2 class="testimonial-form-heading" data-astro-cid-ir7u2wkk>Want to share your experience?</h2> <p class="testimonial-form-subtext" data-astro-cid-ir7u2wkk>We'd love to hear how we did. Your feedback helps others know what to expect from our service.</p> <form action="https://formsubmit.co/isabellagaragedoor@gmail.com" method="POST" class="testimonial-form" data-astro-cid-ir7u2wkk> <input type="hidden" name="_subject" value="New Testimonial Submission" data-astro-cid-ir7u2wkk> <input type="hidden" name="_template" value="table" data-astro-cid-ir7u2wkk> <label for="name" data-astro-cid-ir7u2wkk>Your Name</label> <input type="text" id="name" name="name" placeholder="John D." required data-astro-cid-ir7u2wkk> <label for="rating" data-astro-cid-ir7u2wkk>Star Rating</label> <select id="rating" name="rating" required data-astro-cid-ir7u2wkk> <option value="" data-astro-cid-ir7u2wkk>Select</option> <option value="5" data-astro-cid-ir7u2wkk>★★★★★ (5 - Excellent)</option> <option value="4" data-astro-cid-ir7u2wkk>★★★★☆ (4 - Very good)</option> <option value="3" data-astro-cid-ir7u2wkk>★★★☆☆ (3 - Average)</option> <option value="2" data-astro-cid-ir7u2wkk>★★☆☆☆ (2 - Needs work)</option> <option value="1" data-astro-cid-ir7u2wkk>★☆☆☆☆ (1 - Poor)</option> </select> <label for="quote" data-astro-cid-ir7u2wkk>Your Review</label> <textarea id="quote" name="quote" rows="4" required placeholder="Tell us about your experience..." data-astro-cid-ir7u2wkk></textarea> <input type="hidden" name="_next" value="http://isabellagaragedoor.com/thank-you-estimate" data-astro-cid-ir7u2wkk> <div class="form-button-wrapper" data-astro-cid-ir7u2wkk> <button type="submit" class="cta-button" data-astro-cid-ir7u2wkk>Send Review</button> </div> </form> </section> <p class="google-review-link" data-astro-cid-ir7u2wkk>
Prefer to leave a review on Google?
<a href="https://www.google.com/search?q=Isabella+Garage+Door" target="_blank" rel="noopener" data-astro-cid-ir7u2wkk>Click here</a>.
</p> <a href="/contact" class="testimonials-cta-button" style="margin: 2rem auto 2rem;" ;" data-astro-cid-ir7u2wkk><i class="fa-regular fa-calendar-check fa-fw" data-astro-cid-ir7u2wkk></i> Schedule Service</a> <section data-astro-cid-ir7u2wkk> <h2 class="sub-heading" data-astro-cid-ir7u2wkk>Isabella Garage Door</h2> <p style="font-size: .9rem; text-align: center;" data-astro-cid-ir7u2wkk>
Real feedback from real customers—we're proud to serve Central Michigan with service people remember.
</p> <p style="font-size: .9rem; text-align: center; margin: 0.5rem;" data-astro-cid-ir7u2wkk> <em data-astro-cid-ir7u2wkk>Raising Performance. Elevating Standards</em> </p> </section>  ` })}`;
}, "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/about/testimonials.astro", void 0);

const $$file = "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/about/testimonials.astro";
const $$url = "/about/testimonials";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Testimonials,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
