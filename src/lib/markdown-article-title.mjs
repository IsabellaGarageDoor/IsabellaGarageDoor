// Markdown (Sätteri hast) plugin for blog posts: moves each article's first
// "# Heading" out of the body and into frontmatter (`heading`), so BlogLayout can
// render it in the article header next to the date and photo. The heading text
// is unchanged. Only applies to files in src/content/blog.

export function articleTitlePlugin() {
  let done = false;
  return {
    name: 'article-title',
    element: {
      filter: ['h1'],
      visit(node, ctx) {
        if (done) return;
        const path = ctx.fileURL ? decodeURIComponent(ctx.fileURL.pathname) : '';
        if (!path.includes('/src/content/blog/')) return;
        done = true;
        const astro = ctx.data.astro;
        if (astro) {
          astro.frontmatter ??= {};
          astro.frontmatter.heading = ctx.textContent(node).trim();
        }
        ctx.removeNode(node);
      },
    },
  };
}
