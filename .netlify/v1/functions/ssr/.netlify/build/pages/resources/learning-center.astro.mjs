/* empty css                                                                   */
import { c as createAstro, a as createComponent, g as renderComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, F as Fragment } from '../../chunks/astro/server_xoD-kxEp.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_Bvnd_znt.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BTkoY-F8.mjs';
/* empty css                                              */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("http://localhost:4321");
const $$LearningCenter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LearningCenter;
  const title = "Learning Center | Isabella Garage Door";
  const description = "Explore expert tips, how-tos, and helpful guides to keep your garage door running smoothly and safely.";
  const allPosts = await getCollection("blog");
  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime();
  });
  const postsPerPage = 5;
  const currentPage = +Astro2.url.searchParams.get("page") || 1;
  const totalPages = Math.ceil(sortedPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const paginatedPosts = sortedPosts.slice(startIndex, endIndex);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "data-astro-cid-llrvbvmf": true }, { "default": async ($$result2) => renderTemplate` <title>Resources | Isabella Garage Door</title> <meta name="description" content="Insights, updates, and tips from Isabella Garage Door."> <link rel="stylesheet" href="/styles/global.css"> ${maybeRenderHead()}<img src="/src/photos/learning-center-garage-door.webp" alt="Beautiful garage door fixed and working again" loading="eager" fetchpriority="high" class="header-photo-interior" data-astro-cid-llrvbvmf> <h1 class="page-title" data-astro-cid-llrvbvmf>Learning Center</h1> <p class="intro-paragraph" data-astro-cid-llrvbvmf>
Welcome to the Learning Center — your go-to garage door resource for expert tips, how-to guides, and helpful insights in Central Michigan. Whether you're troubleshooting a strange noise, planning a replacement, or just staying ahead on maintenance, you're in the right place.
</p> <div class="blog-search-wrap" data-astro-cid-llrvbvmf> <a href="/search" class="blog-search-button" data-astro-cid-llrvbvmf>
🔍 Search Articles
</a> <span class="blog-search-hint" data-astro-cid-llrvbvmf>
Find answers about springs, rollers, openers, and more
</span> </div> <div style="width: 100%; text-align: center;" data-astro-cid-llrvbvmf> <ul class="blog-list" data-astro-cid-llrvbvmf> ${paginatedPosts.map((post) => renderTemplate`<li class="blog-item" data-astro-cid-llrvbvmf> <a${addAttribute(`/blog/${post.slug}`, "href")} data-astro-cid-llrvbvmf> ${post.data.thumbnail && renderTemplate`<img${addAttribute(post.data.thumbnail, "src")}${addAttribute(post.data.title, "alt")} class="blog-thumbnail" loading="lazy" data-astro-cid-llrvbvmf>`} <h2 data-astro-cid-llrvbvmf>${post.data.title}</h2> </a> <p style="margin-top: 1rem;" data-astro-cid-llrvbvmf>${post.data.description}</p> <p style="margin-bottom: 0;" data-astro-cid-llrvbvmf> <em data-astro-cid-llrvbvmf> ${new Date(post.data.pubDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </em> </p> </li>`)} </ul> <!-- Pagination controls --> <div class="pagination-wrapper" data-astro-cid-llrvbvmf> ${currentPage > 1 && renderTemplate`<a${addAttribute(`?page=${currentPage - 1}`, "href")} class="pagination-button arrow" data-astro-cid-llrvbvmf>&larr;</a>`} ${currentPage > 3 && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-llrvbvmf": true }, { "default": async ($$result3) => renderTemplate` <a${addAttribute(`?page=1`, "href")} class="pagination-button" data-astro-cid-llrvbvmf>1</a> <span class="pagination-ellipsis" data-astro-cid-llrvbvmf>...</span> ` })}`} ${Array.from({ length: totalPages }, (_, i) => i + 1).filter((p) => p >= currentPage - 2 && p <= currentPage + 2).map((p) => renderTemplate`<a${addAttribute(`?page=${p}`, "href")}${addAttribute(`pagination-button ${p === currentPage ? "active" : ""}`, "class")} data-astro-cid-llrvbvmf> ${p} </a>`)} ${currentPage < totalPages - 2 && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-llrvbvmf": true }, { "default": async ($$result3) => renderTemplate` <span class="pagination-ellipsis" data-astro-cid-llrvbvmf>...</span> <a${addAttribute(`?page=${totalPages}`, "href")} class="pagination-button" data-astro-cid-llrvbvmf>${totalPages}</a> ` })}`} ${currentPage < totalPages && renderTemplate`<a${addAttribute(`?page=${currentPage + 1}`, "href")} class="pagination-button arrow" data-astro-cid-llrvbvmf>&rarr;</a>`} </div> <section data-astro-cid-llrvbvmf> <h2 class="sub-heading" data-astro-cid-llrvbvmf>Isabella Garage Door</h2> <p style="font-size: .9rem; text-align: center;" data-astro-cid-llrvbvmf>
Helpful tips, honest answers, and smart guidance — all from your local garage door experts.
</p> <p style="font-size: .9rem; text-align: center; margin: 0.5rem;" data-astro-cid-llrvbvmf> <em data-astro-cid-llrvbvmf>Raising Performance. Elevating Standards</em> </p> </section>  </div>` })}`;
}, "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/resources/learning-center.astro", void 0);

const $$file = "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/resources/learning-center.astro";
const $$url = "/resources/learning-center";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LearningCenter,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
