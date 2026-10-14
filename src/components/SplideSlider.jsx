import { useEffect } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/css';
import './SplideSlider.css';
import { reviews } from '../data/reviews';

const Star = () => (
  <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <polygon fill="currentColor" points="10,1.5 12.6,7.4 18.9,7.4 13.9,11.4 15.7,17.5 10,13.8 4.3,17.5 6.1,11.4 1.1,7.4 7.4,7.4" />
  </svg>
);

export default function SplideSlider() {
  useEffect(() => {
    const splide = new Splide('#splide', {
      type: 'loop',
      perPage: 3,
      autoplay: true,
      interval: 8500,
      pauseOnHover: true,
      arrows: false,
      pagination: true,
      gap: '1.5rem',
      padding: { left: '0.25rem', right: '0.25rem' },
      breakpoints: {
        1024: { perPage: 2 },
        768: { perPage: 1, gap: '1rem' },
      },
      i18n: { carousel: 'Customer reviews', slideLabel: 'Review %s of %s' },
    });

    // Replay the star/name animation on the slide that becomes active
    const resetAndPlayAnimation = (slideElement) => {
      if (!slideElement) return;
      const stars = slideElement.querySelector('.testimonial-stars');
      const name = slideElement.querySelector('.testimonial-name');
      if (stars) stars.classList.remove('animate-in');
      if (name) name.classList.remove('animate-in');
      setTimeout(() => {
        if (stars) stars.classList.add('animate-in');
        if (name) name.classList.add('animate-in');
      }, 50);
    };

    splide.on('mounted', () => {
      resetAndPlayAnimation(splide.Components.Slides.get(splide.index).slide);
    });
    splide.on('moved', () => {
      resetAndPlayAnimation(splide.Components.Slides.get(splide.index).slide);
    });

    splide.mount();
    return () => splide.destroy();
  }, []);

  return (
    <div id="splide" className="splide review-slider" aria-label="Customer reviews">
      <div className="splide__track">
        <ul className="splide__list">
          {reviews.map((review, index) => (
            <li className="splide__slide" key={index}>
              <figure className="review-slide">
                <div className="testimonial-stars" aria-label={`${review.rating} out of 5 stars`}>
                  {Array.from({ length: review.rating }, (_, i) => <Star key={i} />)}
                </div>
                <blockquote className="testimonial-text" dangerouslySetInnerHTML={{ __html: review.quote }}></blockquote>
                <figcaption className="testimonial-name">— {review.author}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
