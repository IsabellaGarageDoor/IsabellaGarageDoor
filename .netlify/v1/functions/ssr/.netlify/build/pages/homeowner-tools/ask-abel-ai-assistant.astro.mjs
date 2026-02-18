/* empty css                                                                   */
import { a as createComponent, g as renderComponent, r as renderTemplate, F as Fragment, u as unescapeHTML, m as maybeRenderHead } from '../../chunks/astro/server_xoD-kxEp.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_B24roKEI.mjs';
/* empty css                                                    */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$AskAbelAiAssistant = createComponent(($$result, $$props, $$slots) => {
  const title = "AskAbel\u2122 Assistant | Isabella Garage Door";
  const description = "Use our interactive Garage Door Assistant to quickly diagnose common garage door problems and get trusted repair advice.";
  const askAbelSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "AskAbel\u2122 Assistant",
        "applicationCategory": "UtilityApplication",
        "operatingSystem": "Web",
        "description": "An AI-powered virtual assistant providing 24/7 troubleshooting, repair advice, and support for residential garage door systems.",
        "author": {
          "@id": "https://isabellagaragedoor.com/#business"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "description": "Free 24/7 virtual troubleshooting support"
        }
      },
      {
        "@type": "Service",
        "name": "24/7 Virtual Garage Door Support",
        "serviceType": "Customer Support & Diagnostics",
        "provider": {
          "@id": "https://isabellagaragedoor.com/#business"
        },
        "description": "On-demand, interactive troubleshooting and diagnostic support for common garage door and opener problems."
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "data-astro-cid-tuedgiuu": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["   ", `<div class="container" data-astro-cid-tuedgiuu> <h1 class="coming-script" data-astro-cid-tuedgiuu>Coming Soon</h1> <p class="description" data-astro-cid-tuedgiuu>
This premium service is currently in development and will be available once our systems are fully in place
      to deliver the level of service our customers expect.
</p> </div>  <script>
document.querySelectorAll('.faq-item').forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');

  question.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');

    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-answer').style.maxHeight = null;
    });

    if (!isOpen) {
      item.classList.add('open');
       answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});
<\/script> `])), maybeRenderHead()), "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_b || (_b = __template([' <script type="application/ld+json">', "<\/script> "])), unescapeHTML(JSON.stringify(askAbelSchema))) })}` })}`;
}, "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/homeowner-tools/ask-abel-ai-assistant.astro", void 0);

const $$file = "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/homeowner-tools/ask-abel-ai-assistant.astro";
const $$url = "/homeowner-tools/ask-abel-ai-assistant";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AskAbelAiAssistant,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
