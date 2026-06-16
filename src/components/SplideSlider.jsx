import { useEffect } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

export default function SplideSlider() {
  const reviews = [
    // ... (Your existing combined review data goes here) ...
   

    {
      quote: `Got our garage door working again! They got us on the schedule quick and made everything easy. I can't thank them enough. Highly recommend!!`,
      author: 'Elizabeth S.'
    },
    {
      quote: `I highly recommend Isabella Garage Door for any repairs you need. They were fast, efficient and reasonably priced. He had our spring fixed and door working again in no time. Will definitely use again.`,
      author: 'Autumn S.'
    },
    {
      quote: `Very reputable and great prices compared to other places 10/10 would recommend!`,
      author: 'Colton B.'
    },
    {
      quote: `Very efficient! Arrived and fixed my garage door in a timely manor. Will use this service if I have any future issues!`,
      author: 'Suzanna B.'
    },
    {
      quote: `I am very happy with how fast, friendly and how smooth everything went using Isabella Garage Door. We dealt with a broken door a long time and had it fixed in no time with this company. I would recommend this guy All Day. Thank you for your help. 🙂`,
      author: 'Elizabeth M.'
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
