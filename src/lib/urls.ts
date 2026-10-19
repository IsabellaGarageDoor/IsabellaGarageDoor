// URL helpers. The site is built with build.format 'file', so during the build
// Astro.url.pathname looks like "/about/our-story.html". Public URLs never
// include ".html" (Netlify serves about/our-story.html at /about/our-story).

/** Public path for a page URL: strips ".html" and "/index". */
export function publicPath(url: URL): string {
  const path = url.pathname.replace(/\.html$/, '').replace(/\/index$/, '/');
  return path === '' ? '/' : path;
}

/** Absolute public URL for a page, using the configured site. */
export function absoluteUrl(path: string, site: URL | undefined): string {
  return new URL(path, site ?? 'https://isabellagaragedoor.com').href;
}
