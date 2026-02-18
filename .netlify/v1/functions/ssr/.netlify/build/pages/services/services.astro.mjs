/* empty css                                                                   */
import { a as createComponent, g as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_xoD-kxEp.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BTkoY-F8.mjs';
export { renderers } from '../../renderers.mjs';

const $$Services = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` <link rel="stylesheet" href="/styles/global.css"> ${maybeRenderHead()}<h1 class="page-title">Our Services</h1> <section> <h3 class="sub-sub-heading">Broken Garage Door Springs</h3> <img src="/src/photos/springnew.webp" alt="Broken Garage door spring repaired by Isabella Garage Door" class="service-image" loading="lazy&quot;" decoding="async"> <p>Broken springs are one of the most common-and dangerous-garage door problems. These tightly wound coils bear the full weight of your door, and when they snap, your door may become heavy, uneven, or completely immobile. Attempting to fix a spring yourself can lead to serious injury, so it's best to call a professional. At Isabella Garage Door, we safely replace broken torsion and extension springs using high-quality parts to restore smooth, reliable operation.
</p> </section> <section> <h3 class="sub-sub-heading">Garage Door Opener Repair and Installation</h3> <img src="/src/photos/opener.webp" alt="New garage door opener repaired by Isabella Garage Door" class="service-image" loading="lazy&quot;" decoding="async"> <p>A faulty garage door opener can leave you stuck inside or outside your garage, or dealing with unreliable, noisy operation. Whether your opener is unresponsive, making grinding noises, or has lost its remote connection, we can help. At Isabella Garage Door, we repair and install all types of openers-including chain drive, belt drive, and smart Wi-Fi systems-so you can enjoy smooth, quiet, and secure access to your garage every time.</p> </section> <section> <h3 class="sub-sub-heading">Garage Door Repair</h3> <img src="/src/photos/doorofftrack.webp" alt="Broken Garage door spring repaired by Isabella Garage Door" class="service-image" loading="lazy&quot;" decoding="async"> <p>From off-track doors and damaged panels to malfunctioning sensors and worn-out rollers, garage door issues can disrupt your day and compromise your home's safety. Isabella Garage Door offers expert repair services for all makes and models, diagnosing problems quickly and fixing them with precision. We use quality parts and proven techniques to restore reliable performance-so your door opens and closes smoothly, safely, and quietly.</p> </section>   <section> <h3 class="sub-sub-heading">Routine Preventive Maintenance</h3> <img src="/src/photos/maintenancetwo.webp" alt="Garage door maintenance by Isabella Garage Door" class="service-image" loading="lazy&quot;" decoding="async"> <p>Regular maintenance is the key to keeping your garage door system running smoothly and avoiding costly breakdowns. Our preventive maintenance service includes a thorough inspection, lubrication of moving parts, tightening of hardware, and testing of safety features. By identifying minor issues early-like fraying cables, worn rollers, or misaligned tracks-we help you extend the life of your door and opener while ensuring safe, reliable operation year-round.</p> </section>   <section class="cta-section"> <div class="cta-container"> <a href="/contact" class="cta-button">Request Service</a> </div> </section> ` })}`;
}, "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/services/services.astro", void 0);

const $$file = "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/services/services.astro";
const $$url = "/services/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
