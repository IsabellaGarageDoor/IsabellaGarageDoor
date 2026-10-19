# Isabella Garage Door website

A fully static [Astro](https://astro.build) site (plain CSS, React only for the review slider and the
service-agreement form), deployed on Netlify. Brand: navy `#1a334f`, bronze `#b27d57`, white —
"Raising Performance. Elevating Standards."

```sh
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
npm run preview  # preview the build
```

## Where things live

| To change…                                         | Edit                                                          |
| -------------------------------------------------- | ------------------------------------------------------------- |
| Phone, email, address, IDs, tagline, brand colors  | `src/config/site.ts`                                          |
| Main menu, footer links                            | `src/data/navigation.ts`                                      |
| Customer reviews (slider, testimonials, schema)    | `src/data/reviews.ts`                                         |
| Prices shown on the pricing page                   | `src/data/pricing.ts`                                         |
| Service-area list                                  | `src/data/locations.ts`                                       |
| Blog posts                                         | add a Markdown file in `src/content/blog/` (see below)        |
| Colors, fonts, spacing, buttons, cards             | `src/styles/tokens.css`, `components.css`, `layout.css`       |
| Coupons on/off                                     | the `show…Coupon` switches at the top of `src/components/editable-sections/Coupons.astro` |
| Site-wide announcement banner                      | switches at the top of `src/components/editable-sections/AnnouncementBanner.astro` |
| Holiday / birthday banners                         | dates are in the script in `src/components/HolidaysBirthdaysBanner.astro` |
| Business hours shown by the availability banner    | the schedule in `src/components/AvailabilityBanner.astro`     |

### Publishing a blog post

Create `src/content/blog/your-post.md` with this front matter, then write the article. The first
`# Heading` becomes the article title. A file whose name starts with `_` is a draft and is not published.

```md
---
title: "Page title"
description: "One or two sentences for search results."
pubDate: "2026-10-19"
slug: "url-of-the-post"          # the post is published at /blog/url-of-the-post
author: "Isabella Garage Door"
thumbnail: "/photos/thumbnails/your-image.webp"
---

# Article title

Text…
```

## How it is organized

- `src/pages/` — one file per URL. **File names are the public URLs; don't rename them.**
- `src/layouts/` — `BaseLayout` (head, header, footer), plus `LocationPage`, `ServicePage`, `ToolPage`, `BlogLayout`, `LegalLayout`.
- `src/components/` — shared sections; `ui/` has small building blocks (`Icon`, `Faq`, `Accordion`, `PageHero`…).
- Location pages (`src/pages/locations/*`) hold their own local text and use `LocationPage`.
- The three homeowner tools (EasyEstimate, DoorDiagnosis, SpringStatus) keep their logic in the inline script of each
  tool page. They run in the browser and call functions by name, so leave those scripts as they are.
- Because the site is static, anything that changes by visit happens in the browser: the seasonal home-page photo,
  the random blog cards, and `?page=N` pagination (`src/scripts/`).
- Netlify settings (build command, cache headers) are in `netlify.toml`.
