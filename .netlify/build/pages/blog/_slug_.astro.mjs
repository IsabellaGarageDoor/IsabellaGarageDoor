/* empty css                                                                   */
import { c as createAstro, a as createComponent, r as renderTemplate, u as unescapeHTML, f as addAttribute, m as maybeRenderHead, b as renderScript, g as renderComponent, d as renderSlot } from '../../chunks/astro/server_xoD-kxEp.mjs';
import 'kleur/colors';
import { g as getCollection, a as getEntry } from '../../chunks/_astro_content_Bvnd_znt.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BTkoY-F8.mjs';
import 'clsx';
import * as icons from 'lucide-static';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$3 = createAstro("http://localhost:4321");
const $$ShareButtons = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ShareButtons;
  const { url } = Astro2.props;
  const fullUrl = `https://isabellagaragedoor.com${url}`;
  return renderTemplate(_a || (_a = __template(["", '<div class="share-buttons" data-astro-cid-zllr3mxm> <a class="facebook"', ' target="_blank" rel="noopener" aria-label="Share on Facebook" data-astro-cid-zllr3mxm> <span style="stroke:#1877F2;" data-astro-cid-zllr3mxm>', '</span> </a> <a class="twitter"', ' target="_blank" rel="noopener" aria-label="Share on Twitter" data-astro-cid-zllr3mxm> <span style="stroke:#1DA1F2;" data-astro-cid-zllr3mxm>', '</span> </a> <a class="linkedin"', ' target="_blank" rel="noopener" aria-label="Share on LinkedIn" data-astro-cid-zllr3mxm> <span style="stroke:#0A66C2;" data-astro-cid-zllr3mxm>', '</span> </a> <button id="copyLinkBtn" class="copy" aria-label="Copy link" data-astro-cid-zllr3mxm> <span style="stroke:#FF6600;" data-astro-cid-zllr3mxm>', '</span> </button> </div> <script>\n  document.addEventListener("DOMContentLoaded", () => {\n    const btn = document.getElementById("copyLinkBtn");\n    if (!btn) return;\n\n    btn.addEventListener("click", () => {\n      const url = "https://isabellagaragedoor.com" + window.location.pathname;\n\n      if (navigator.clipboard && window.isSecureContext) {\n        navigator.clipboard.writeText(url)\n          .then(() => showCopiedMessage())\n          .catch(err => fallbackCopy(url));\n      } else {\n        fallbackCopy(url);\n      }\n\n      function fallbackCopy(text) {\n        const textarea = document.createElement("textarea");\n        textarea.value = text;\n        textarea.setAttribute("readonly", "");\n        textarea.style.position = "absolute";\n        textarea.style.left = "-9999px";\n        document.body.appendChild(textarea);\n        textarea.select();\n\n        try {\n          document.execCommand("copy");\n          showCopiedMessage();\n        } catch (err) {\n          console.error("Fallback copy failed", err);\n        }\n\n        document.body.removeChild(textarea);\n      }\n\n      function showCopiedMessage() {\n        // Toast-like feedback instead of alert\n        const toast = document.createElement("div");\n        toast.textContent = "Link copied!";\n        toast.style.position = "fixed";\n        toast.style.bottom = "2rem";\n        toast.style.left = "50%";\n        toast.style.transform = "translateX(-50%)";\n        toast.style.backgroundColor = "#1A334F";\n        toast.style.color = "#fff";\n        toast.style.padding = "0.75rem 1.25rem";\n        toast.style.borderRadius = "6px";\n        toast.style.fontSize = "0.9rem";\n        toast.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";\n        toast.style.zIndex = "9999";\n        document.body.appendChild(toast);\n\n        setTimeout(() => {\n          toast.style.transition = "opacity 0.5s ease";\n          toast.style.opacity = "0";\n          setTimeout(() => toast.remove(), 500);\n        }, 2000);\n      }\n    });\n  });\n<\/script>'])), maybeRenderHead(), addAttribute(`https://www.facebook.com/sharer/sharer.php?u=${fullUrl}`, "href"), unescapeHTML(icons.Facebook), addAttribute(`https://twitter.com/intent/tweet?url=${fullUrl}`, "href"), unescapeHTML(icons.Twitter), addAttribute(`https://www.linkedin.com/shareArticle?mini=true&url=${fullUrl}`, "href"), unescapeHTML(icons.Linkedin), unescapeHTML(icons.Link));
}, "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/components/ShareButtons.astro", void 0);

const $$ConvertKitForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderScript($$result, "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/components/ConvertKitForm.astro?astro&type=script&index=0&lang.ts")} ${maybeRenderHead()}<form action="https://app.kit.com/forms/8137460/subscriptions" class="seva-form formkit-form" method="post" data-sv-form="8137460" data-uid="07539656c8" data-format="inline" data-version="5" data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:&quot;Success! Now check your email to confirm your subscription.&quot;,&quot;redirect_url&quot;:&quot;&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;fathom&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null,&quot;sparkloop&quot;:null,&quot;googletagmanager&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:true,&quot;url&quot;:&quot;https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;show&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;version&quot;:&quot;5&quot;}" min-width="400 500 600 700 800" data-astro-cid-fd4qha4l><div data-style="clean" data-astro-cid-fd4qha4l><ul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert" data-astro-cid-fd4qha4l></ul><div data-element="fields" data-stacked="false" class="seva-fields formkit-fields" data-astro-cid-fd4qha4l><div class="formkit-field" data-astro-cid-fd4qha4l><input class="formkit-input" aria-label="First Name" name="fields[first_name]" required="" placeholder="First Name" type="text" style="color: rgb(26, 51, 79); border-color: rgb(26, 51, 79); font-weight: 400; border-radius: 4px;" data-astro-cid-fd4qha4l></div><div class="formkit-field" data-astro-cid-fd4qha4l><input class="formkit-input" name="email_address" aria-label="Email Address" placeholder="Email Address" required="" type="email" style="color: rgb(26, 51, 79); border-color: rgb(26, 51, 79); font-weight: 400; border-radius: 4px;" data-astro-cid-fd4qha4l></div><button data-element="submit" class="formkit-submit formkit-submit" style="color: rgb(255, 255, 255); background-color: rgb(255, 102, 0); border-radius: 5px; font-weight: 700;" data-astro-cid-fd4qha4l><div class="formkit-spinner" data-astro-cid-fd4qha4l><div data-astro-cid-fd4qha4l></div><div data-astro-cid-fd4qha4l></div><div data-astro-cid-fd4qha4l></div></div><span class="" data-astro-cid-fd4qha4l>Get the Free Guide</span></button></div><div class="formkit-powered-by-convertkit-container" data-astro-cid-fd4qha4l><a href="https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic" data-element="powered-by" class="formkit-powered-by-convertkit" data-variant="dark" target="_blank" rel="nofollow" data-astro-cid-fd4qha4l>Built with Kit</a></div></div></form>`;
}, "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/components/ConvertKitForm.astro", void 0);

const $$Astro$2 = createAstro("http://localhost:4321");
const $$BlogLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BlogLayout;
  const { title, description, pubDate, thumbnail, post, url } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="main-content fade-in" style="padding: 0rem; max-width: 1000px; margin: 0 auto;"> <article> ${thumbnail && renderTemplate`<img${addAttribute(thumbnail, "src")}${addAttribute(title, "alt")} style="width: 100%; max-height: auto; object-fit: cover; border-radius: 0.75rem; margin-bottom: 1rem;
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.4);">`} <p><em>${pubDate}</em></p> ${renderSlot($$result2, $$slots["default"])} </article> <section> <div> <h3 style="text-align:center; font-weight:600; margin-top:2rem;">Share this page</h3> <div class="share-buttons"> ${renderComponent($$result2, "ShareButtons", $$ShareButtons, { "url": url.pathname })} </div> </div> </section> <section> <h3 class="sub-sub-heading">Get Our Free Guide</h3> <div class="form-wrapper-ebook"> <div class="form-image"> <img src="/src/photos/EbookCover3.webp" alt="Garage Door Tips From a Professional"> </div> <div class="form-text"> <p>
Keep your garage door running smoothly, avoid costly repairs, and extend its lifespan with these must-know tips—straight from a local pro.
</p> </div> </div> ${renderComponent($$result2, "ConvertKitForm", $$ConvertKitForm, {})} <p class="form-note">We’ll send your Free Garage Door Guide instantly and only email you with helpful tips and reminders —no spam, ever.
</p> </section> </main> ` })}`;
}, "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/layouts/BlogLayout.astro", void 0);

const $$Astro$1 = createAstro("http://localhost:4321");
const $$YouMayAlsoLike = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$YouMayAlsoLike;
  const { currentSlug } = Astro2.props;
  const allPosts = await getCollection("blog");
  const filteredPosts = allPosts.filter(
    (post) => post.data.slug !== currentSlug
  );
  const randomPosts = [...filteredPosts].sort(() => 0.5 - Math.random()).slice(0, 3);
  return renderTemplate`${randomPosts.length > 0 && renderTemplate`${maybeRenderHead()}<section class="you-may-also-like" data-astro-cid-ybsx6bja><h3 data-astro-cid-ybsx6bja>You May Also Like</h3><div class="post-grid" data-astro-cid-ybsx6bja>${randomPosts.map((post) => renderTemplate`<a${addAttribute(`/blog/${post.slug}`, "href")} class="post-card" data-astro-cid-ybsx6bja>${post.data.thumbnail && renderTemplate`<img${addAttribute(post.data.thumbnail, "src")}${addAttribute(post.data.title || "Garage door article", "alt")} loading="lazy" data-astro-cid-ybsx6bja>`}<div class="post-content" data-astro-cid-ybsx6bja><strong data-astro-cid-ybsx6bja>${post.data.title || "Untitled Article"}</strong>${post.data.description && renderTemplate`<p data-astro-cid-ybsx6bja>${post.data.description}</p>`}</div></a>`)}</div></section>`}`;
}, "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/components/YouMayAlsoLike.astro", void 0);

const $$Astro = createAstro("http://localhost:4321");
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const post = await getEntry("blog", slug);
  const url = Astro2.url;
  if (!post) throw new Error(`Post not found: ${slug}`);
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "BlogLayout", $$BlogLayout, { "title": post.data.title, "description": post.data.description, "pubDate": post.data.pubDate, "thumbnail": post.data.thumbnail, "post": post, "url": url }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ${renderComponent($$result2, "YouMayAlsoLike", $$YouMayAlsoLike, { "currentSlug": slug })} ` })}`;
}, "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/blog/[slug].astro", void 0);

const $$file = "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
