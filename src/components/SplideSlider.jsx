import { useEffect } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

export default function SplideSlider() {
  const reviews = [
    // ... (Your existing combined review data goes here) ...
   
    {
      quote: `We were having issues with our garage door not closing all the way, and it started getting worse. We called Isabella Garage Door and they showed up the next day, right on time. They inspected everything, explained the problem and made the repairs. The door works great now and it’s so much quieter. Very impressed!`,
      author: 'Tracey S.'
    },
    {
      quote: `Our garage door opener stopped working out of nowhere and we were stuck parking outside. Isabella Garage Door came out and diagnosed the issue and had a new opener installed that same day. Super friendly and professional. Everything works perfectly now. Couldn't be happier with the service!`,
      author: 'Taylor W.'
    },
    {
      quote: `Our experience with Isabella Garage Door was exceptional. They provided high quality service and made us feel valued as customers. If you're in Mount Pleasant and need garage door services, I wholeheartedly recommend giving them a call. You won't be disappointed!`,
      author: 'Micheal S.'
    },
    {
      quote: `After months of dealing with a noisy, jerky garage door, we finally decided to call Isabella Garage Door. The tech replaced the old worn out rollers. What a difference! The door is so quiet now. We really appreciate them fixing our door. Highly recommend!`,
      author: 'Elizabeth A.'
    },
    
  ];

  useEffect(() => {
    // Initialize Splide carousel
    const splide = new Splide('#splide', {
      type: 'loop',
      perPage: 1,
      autoplay: true,
      interval: 8500,
      arrows: false,
      pagination: true,
      gap: '2rem',
      padding: { left: '1rem', right: '1rem' },
      breakpoints: {
        768: { perPage: 1, gap: '1.5rem' },
        1024: { perPage: 1 },
      }
    });

    // Function to reset and play animations for a given slide element
    const resetAndPlayAnimation = (slideElement) => {
      if (!slideElement) return;

      const stars = slideElement.querySelector('.testimonial-stars');
      const name = slideElement.querySelector('.testimonial-name');

      // 1. Remove the animation class immediately
      if (stars) stars.classList.remove('animate-in');
      if (name) name.classList.remove('animate-in');

      // 2. Use a short setTimeout to re-add the class.
      // This allows the browser a tiny moment to register the class removal
      // and reset the animation state before the class is re-added, forcing a replay.
      setTimeout(() => {
        if (stars) stars.classList.add('animate-in');
        if (name) name.classList.add('animate-in');
      }, 50); // A small delay like 50ms is usually very effective. You can try 0ms as well.
    };

    // Listen for Splide's 'mounted' event (when the carousel is first initialized)
    splide.on('mounted', () => {
      // Get the initial active slide and play its animations
      const initialActiveSlide = splide.Components.Slides.get(splide.index).slide;
      resetAndPlayAnimation(initialActiveSlide);
    });

    // Listen for Splide's 'moved' event (when the carousel finishes a slide transition)
    splide.on('moved', () => {
      // Get the newly active slide and play its animations
      const currentActiveSlide = splide.Components.Slides.get(splide.index).slide;
      resetAndPlayAnimation(currentActiveSlide);
    });

    // Mount the Splide instance
    splide.mount();

    // Cleanup: Destroy Splide instance when component unmounts
    return () => {
      splide.destroy();
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div id="splide" className="splide">
      <div className="splide__track">
        <ul className="splide__list">
          {reviews.map((review, index) => (
            <li className="splide__slide" key={index}>
              {/* This is the HTML structure of your TestimonialCardWhite, adapted for JSX */}
              <div className="testimonial-card-white">
                <div className="testimonial-gradient-overlay"></div>
                <div className="testimonial-stars">
                  <svg viewBox="0 0 20 20" fill="#b27d57" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="10,1.5 12.6,7.4 18.9,7.4 13.9,11.4 15.7,17.5 10,13.8 4.3,17.5 6.1,11.4 1.1,7.4 7.4,7.4"/>
                  </svg>
                  <svg viewBox="0 0 20 20" fill="#b27d57" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="10,1.5 12.6,7.4 18.9,7.4 13.9,11.4 15.7,17.5 10,13.8 4.3,17.5 6.1,11.4 1.1,7.4 7.4,7.4"/>
                  </svg>
                  <svg viewBox="0 0 20 20" fill="#b27d57" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="10,1.5 12.6,7.4 18.9,7.4 13.9,11.4 15.7,17.5 10,13.8 4.3,17.5 6.1,11.4 1.1,7.4 7.4,7.4"/>
                  </svg>
                  <svg viewBox="0 0 20 20" fill="#b27d57" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="10,1.5 12.6,7.4 18.9,7.4 13.9,11.4 15.7,17.5 10,13.8 4.3,17.5 6.1,11.4 1.1,7.4 7.4,7.4"/>
                  </svg>
                  <svg viewBox="0 0 20 20" fill="#b27d57" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="10,1.5 12.6,7.4 18.9,7.4 13.9,11.4 15.7,17.5 10,13.8 4.3,17.5 6.1,11.4 1.1,7.4 7.4,7.4"/>
                  </svg>
                </div>
                <p className="testimonial-text" dangerouslySetInnerHTML={{ __html: review.quote }}></p>
                <div className="testimonial-name">— {review.author}</div>
                <div className="testimonial-tail"></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
