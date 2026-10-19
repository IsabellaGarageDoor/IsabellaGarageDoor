// Customer reviews — the single source for the review slider, the testimonials
// page, and review structured data. Add new reviews to the top of the list
// shape below (newest dates show first on the testimonials page).

export interface Review {
  author: string;
  quote: string;
  /** YYYY-MM-DD */
  date: string;
  rating: number;
}

export const reviews: Review[] = [
  {
    author: 'Elizabeth S.',
    quote: "Got our garage door working again! They got us on the schedule quick and made everything easy. I can't thank them enough. Highly recommend!!",
    date: '2026-05-14',
    rating: 5,
  },
  {
    author: 'Autumn S.',
    quote: 'I highly recommend Isabella Garage Door for any repairs you need. They were fast, efficient and reasonably priced. He had our spring fixed and door working again in no time. Will definitely use again.',
    date: '2026-05-19',
    rating: 5,
  },
  {
    author: 'Colton B.',
    quote: 'Very reputable and great prices compared to other places 10/10 would recommend!',
    date: '2026-05-31',
    rating: 5,
  },
  {
    author: 'Suzanna B.',
    quote: 'Very efficient! Arrived and fixed my garage door in a timely manor. Will use this service if I have any future issues!',
    date: '2026-05-31',
    rating: 5,
  },
  {
    author: 'Elizabeth M.',
    quote: 'I am very happy with how fast, friendly and how smooth everything went using Isabella Garage Door. We dealt with a broken door a long time and had it fixed in no time with this company. I would recommend this guy All Day. Thank you for your help. 🙂',
    date: '2026-06-11',
    rating: 5,
  },
  {
    author: 'Tracey S.',
    quote: 'So glad we contacted Isabella Garage Door. They were prompt, polite, hard working. Highly recommend',
    date: '2026-06-27',
    rating: 5,
  },
  {
    author: 'Ken Y.',
    quote: "This guy was very knowledgeable and pleasant to work with. I'd call him back.",
    date: '2026-07-28',
    rating: 5,
  },
  {
    author: 'Cole S.',
    quote: 'Extremely prompt. Great price and service.',
    date: '2026-07-28',
    rating: 5,
  },
  {
    author: 'Kyle B.',
    quote: 'Good communication. Was able to fix my issues without needing an entire door replacement!',
    date: '2026-08-18',
    rating: 5,
  },
  {
    author: 'Thomas H.',
    quote: 'Peter did a great job but what really impressed me was how honest he was!! He had a basic Service charge that I was aware of. He had some extra necessary work that he completed and deducted the service charge without me asking. A very impressive young man that will go far in whatever he takes on in his future!!!',
    date: '2026-09-29',
    rating: 5,
  },
  {
    author: 'Randy L.',
    quote: 'Excellent Pete did a great job. Very professional. Highly recommend.',
    date: '2026-10-10',
    rating: 5,
  },
];

/** Newest first */
export const reviewsNewestFirst = [...reviews].sort((a, b) => b.date.localeCompare(a.date));

export const findReview = (author: string) => {
  const r = reviews.find((r) => r.author === author);
  if (!r) throw new Error(`Review by ${author} not found`);
  return r;
};

/** Review structured data, referencing the site-wide business entity */
export function reviewsSchema(list: Review[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': list.map((r) => ({
      '@type': 'Review',
      '@id': `https://isabellagaragedoor.com/#review-${reviews.indexOf(r) + 1}`,
      itemReviewed: { '@id': 'https://isabellagaragedoor.com/#business' },
      reviewRating: { '@type': 'Rating', ratingValue: String(r.rating), bestRating: '5' },
      author: { '@type': 'Person', name: r.author },
      reviewBody: r.quote,
      datePublished: r.date,
    })),
  };
}
