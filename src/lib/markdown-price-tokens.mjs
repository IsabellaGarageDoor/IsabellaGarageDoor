// Markdown plugin: lets blog posts use prices from src/data/pricing.ts.
// Write {{price:springSingle}} in a post and it is replaced with the current
// price when the site is built (default style: "$325 – $395"). Add a style to
// change how it reads: {{price:springSingle:range}} → "$325–$395",
// {{price:springSingle:low}} → "$325". An unknown name stops the build with a
// clear error instead of publishing "{{price:…}}" text.
import { replacePriceTokens } from '../data/pricing.ts';

export function priceTokensPlugin() {
  return {
    name: 'price-tokens',
    text(node) {
      if (typeof node.value !== 'string' || !node.value.includes('{{price:')) return;
      return { ...node, value: replacePriceTokens(node.value) };
    },
  };
}
