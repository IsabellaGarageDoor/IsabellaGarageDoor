import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_CyV1w4m-.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about/gallery-archive-isabella-garage-door.astro.mjs');
const _page3 = () => import('./pages/about/gallery-isabella-garage-door.astro.mjs');
const _page4 = () => import('./pages/about/our-story.astro.mjs');
const _page5 = () => import('./pages/about/testimonials.astro.mjs');
const _page6 = () => import('./pages/about/why-choose-isabella-garage-door.astro.mjs');
const _page7 = () => import('./pages/blog/_slug_.astro.mjs');
const _page8 = () => import('./pages/contact.astro.mjs');
const _page9 = () => import('./pages/homeowner-tools/ask-abel-ai-assistant.astro.mjs');
const _page10 = () => import('./pages/homeowner-tools/door-diagnosis.astro.mjs');
const _page11 = () => import('./pages/homeowner-tools/easy-estimate.astro.mjs');
const _page12 = () => import('./pages/homeowner-tools/spring-status.astro.mjs');
const _page13 = () => import('./pages/legal/privacy-policy.astro.mjs');
const _page14 = () => import('./pages/legal/service-agreement.astro.mjs');
const _page15 = () => import('./pages/legal/terms-of-service.astro.mjs');
const _page16 = () => import('./pages/locations/alma.astro.mjs');
const _page17 = () => import('./pages/locations/central-michigan.astro.mjs');
const _page18 = () => import('./pages/locations/clare.astro.mjs');
const _page19 = () => import('./pages/locations/isabella-county.astro.mjs');
const _page20 = () => import('./pages/locations/lake-isabella.astro.mjs');
const _page21 = () => import('./pages/locations/mt-pleasant.astro.mjs');
const _page22 = () => import('./pages/resources/faq.astro.mjs');
const _page23 = () => import('./pages/resources/learning-center.astro.mjs');
const _page24 = () => import('./pages/resources/pricing.astro.mjs');
const _page25 = () => import('./pages/resources/resources-landing-page.astro.mjs');
const _page26 = () => import('./pages/resources/warranty.astro.mjs');
const _page27 = () => import('./pages/search.astro.mjs');
const _page28 = () => import('./pages/search.json.astro.mjs');
const _page29 = () => import('./pages/services/broken-springs.astro.mjs');
const _page30 = () => import('./pages/services/door-repair.astro.mjs');
const _page31 = () => import('./pages/services/maintenance.astro.mjs');
const _page32 = () => import('./pages/services/new-door-installation.astro.mjs');
const _page33 = () => import('./pages/services/new-opener-installation.astro.mjs');
const _page34 = () => import('./pages/services/opener-repair.astro.mjs');
const _page35 = () => import('./pages/services/performance-membership.astro.mjs');
const _page36 = () => import('./pages/services/services.astro.mjs');
const _page37 = () => import('./pages/thank-you.astro.mjs');
const _page38 = () => import('./pages/thank-you-estimate.astro.mjs');
const _page39 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about/gallery-archive-isabella-garage-door.astro", _page2],
    ["src/pages/about/gallery-isabella-garage-door.astro", _page3],
    ["src/pages/about/our-story.astro", _page4],
    ["src/pages/about/testimonials.astro", _page5],
    ["src/pages/about/why-choose-isabella-garage-door.astro", _page6],
    ["src/pages/blog/[slug].astro", _page7],
    ["src/pages/contact.astro", _page8],
    ["src/pages/homeowner-tools/ask-abel-ai-assistant.astro", _page9],
    ["src/pages/homeowner-tools/door-diagnosis.astro", _page10],
    ["src/pages/homeowner-tools/easy-estimate.astro", _page11],
    ["src/pages/homeowner-tools/spring-status.astro", _page12],
    ["src/pages/legal/privacy-policy.md", _page13],
    ["src/pages/legal/service-agreement.astro", _page14],
    ["src/pages/legal/terms-of-service.md", _page15],
    ["src/pages/locations/alma.astro", _page16],
    ["src/pages/locations/central-michigan.astro", _page17],
    ["src/pages/locations/clare.astro", _page18],
    ["src/pages/locations/isabella-county.astro", _page19],
    ["src/pages/locations/lake-isabella.astro", _page20],
    ["src/pages/locations/mt-pleasant.astro", _page21],
    ["src/pages/resources/faq.astro", _page22],
    ["src/pages/resources/learning-center.astro", _page23],
    ["src/pages/resources/pricing.astro", _page24],
    ["src/pages/resources/resources-landing-page.astro", _page25],
    ["src/pages/resources/warranty.astro", _page26],
    ["src/pages/search.astro", _page27],
    ["src/pages/search.json.ts", _page28],
    ["src/pages/services/broken-springs.astro", _page29],
    ["src/pages/services/door-repair.astro", _page30],
    ["src/pages/services/maintenance.astro", _page31],
    ["src/pages/services/new-door-installation.astro", _page32],
    ["src/pages/services/new-opener-installation.astro", _page33],
    ["src/pages/services/opener-repair.astro", _page34],
    ["src/pages/services/performance-membership.astro", _page35],
    ["src/pages/services/services.astro", _page36],
    ["src/pages/thank-you.astro", _page37],
    ["src/pages/thank-you-estimate.astro", _page38],
    ["src/pages/index.astro", _page39]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "36d5bf64-f123-4433-b906-f74609c0175e"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
