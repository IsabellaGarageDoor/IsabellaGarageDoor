/* empty css                                                                   */
import { a as createComponent, g as renderComponent, r as renderTemplate, F as Fragment, u as unescapeHTML, b as renderScript, m as maybeRenderHead } from '../../chunks/astro/server_xoD-kxEp.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BTkoY-F8.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a, _b;
const $$SpringStatus = createComponent(($$result, $$props, $$slots) => {
  const title = "SpringStatus\u2122 Estimator | Isabella Garage Door";
  const description = "If you\u2019re wondering how much life your garage door spring has left in it, give our free SpringStatus\u2122 Estimator a try!";
  const springStatusSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "SpringStatus\u2122 Estimator",
        "applicationCategory": "EducationalApplication",
        "operatingSystem": "Web",
        "description": "An interactive calculator that estimates the remaining life expectancy of garage door torsion springs based on usage, age, and door material.",
        "author": {
          "@id": "https://isabellagaragedoor.com/#business"
        }
      },
      {
        "@type": "Service",
        "name": "Garage Door Spring Life Assessment",
        "serviceType": "Diagnostic Tool",
        "provider": {
          "@id": "https://isabellagaragedoor.com/#business"
        },
        "description": "Free online estimation of garage door spring cycles and longevity to help homeowners plan for preventative maintenance."
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(['  <link rel="stylesheet" href="/styles/tools.css">  ', `<section> <img src="/src/photos/Broken-spring.webp" alt="A clearly worn spring with an unknown amount of life left" loading="eager" fetchpriority="high" class="header-photo-interior"> </section>  <section> <h1 class="page-title">SpringStatus\u2122</h1> <h2 class="sub-heading">How long will your garage door springs last? Let\u2019s find out.</h2> <p>Your torsion springs do the heavy lifting every day \u2014 and when they break, everything stops. SpringStatus\u2122 helps you estimate how much life they\u2019ve got left, so you\u2019re not caught off guard.
</p> <div style="margin: 1rem;"> <ul class="bullet-list"> <li><i class="fas fa-check icon-bronze"></i><strong> Fast, free online tool</strong></li> <li><i class="fas fa-check icon-bronze"></i><strong> No tech required</strong></li> <li><i class="fas fa-check icon-bronze"></i><strong> Know before they snap</strong></li> </ul> </div> </section>  <div class="highlight-section"> <p>
A broken spring doesn\u2019t give you a heads-up \u2014 until now.
</p> </div> <section> <p>Take a minute to answer a few quick questions and get an accurate estimate of how much life is left in your springs:</p> </section> <section id="springstatus" style="position: relative; top: -80px;"></section>  <div id="estimate-app-container"> <!-- Splash Screen (initially visible) --> <div id="estimate-splash" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 250px; gap: 1rem;"> <img src="/src/photos/blue-isabella-garage-door-logo.png" alt="Isabella Garage Door Logo" style="max-width: 280px; opacity: 0.8;"> <div class="lds-ring"><div></div><div></div><div></div><div></div></div> </div> <!-- Your Actual App --> <div id="app" style="display: none;"></div> </div>  <section> <div class="footer-text">
Need immediate help? Call us at
<a href="tel:9895720303" style="color: #b27d57; font-weight: bold; text-decoration: none;">
(989) 572-0303
</a> </div> </section> <section style="margin-top: 3rem;"> <h2 class="sub-heading">How SpringStatus\u2122 works</h2> <p>Springs don\u2019t last forever. Most break between 10,000\u201315,000 cycles \u2014 and they don\u2019t always give clear warning signs. SpringStatus\u2122 asks a few quick questions about your door, usage, and wear signs to estimate:
</p> <div style="margin: 1rem;"> <ul class="bullet-list"> <li><i class="fas fa-check icon-bronze"></i><strong> How much life is likely left</strong></li> <li><i class="fas fa-check icon-bronze"></i><strong> Whether you\u2019re at risk of a sudden failure</strong></li> <li><i class="fas fa-check icon-bronze"></i><strong> If it\u2019s worth replacing now \u2014 or waiting a little longer</strong></li> </ul> </div> </section>  <section style="margin-top: 3rem;"> <h2 class="sub-heading">Why spring failure matters</h2> <p>When a torsion spring breaks:</p> <div style="margin: 1rem;"> <ul class="bullet-list"> <li><i class="fas fa-check icon-bronze"></i><strong> Your door becomes heavy and inoperable</strong></li> <li><i class="fas fa-check icon-bronze"></i><strong> Openers can burn out trying to lift it</strong></li> <li><i class="fas fa-check icon-bronze"></i><strong> It can cause injury or damage if you're nearby</strong></li> <li><i class="fas fa-check icon-bronze"></i><strong> You\u2019ll be stuck until a tech arrives \u2014 often at higher emergency rates</strong></li> </ul> </div> <p>With SpringStatus\u2122, you can plan ahead, avoid urgent repairs, and replace springs on your terms.</p> </section>  <section id="faq"> <div class="faq-head"> <a href="/resources/faq" style="text-decoration: none; color: inherit; display: block;"> <h2 class="sub-heading" style="margin-bottom: -.5rem;">Frequently Asked Questions</h2> </a> </div> <div class="faq-item"> <div class="faq-question"> <span>How accurate is the estimate?</span> <span class="faq-arrow">&#9654;</span> </div> <div class="faq-answer"> <p>It\u2019s an educated prediction based on your door size, usage, and any visible signs of wear. It\u2019s not exact, but it\u2019s surprisingly useful for planning ahead \u2014 especially if your springs are 5+ years old.</p> </div> </div> <div class="faq-item"> <div class="faq-question"> <span>Can I replace springs myself?</span> <span class="faq-arrow">&#9654;</span> </div> <div class="faq-answer"> <p>We strongly advise against it. Torsion springs are under extreme tension and can cause serious injury. Always hire a trained professional for spring replacement.</p> </div> </div> <div class="faq-item"> <div class="faq-question"> <span>My springs "feel fine" \u2014 should I still check?</span> <span class="faq-arrow">&#9654;</span> </div> <div class="faq-answer"> <p>Yes. Springs can fail suddenly with no obvious symptoms. If it\u2019s been a few years since installation (or you\u2019re not sure), SpringStatus\u2122 is a smart step.</p> </div> </div> <div class="faq-item"> <div class="faq-question"> <span>How often should springs be checked?</span> <span class="faq-arrow">&#9654;</span> </div> <div class="faq-answer"> <p>We recommend checking once a year \u2014 or any time you notice the door getting heavier, uneven, or noisy.</p> </div> </div> </section> <section style="margin-top: 3rem;"> <h2 class="sub-heading">Smart maintenance = fewer surprises</h2> <p style="text-align:center;">You wouldn\u2019t wait for a tire to explode before replacing it.
Your springs deserve the same care \u2014 especially when they support a 200+ lb door over your head.</p> <a href="/contact" class="cta-button margin-bottom-2rem"> \u{1F4C5} Book an Inspection</a> </section> <section> <h2 class="sub-heading">Isabella Garage Door</h2> <p style="font-size: .9rem; text-align: center;">Torsion spring experts.
Proudly serving Central Michigan with professional garage door care.</p> <p style="font-size: .9rem; text-align: center; margin: 0.5rem;"><em>Raising Performance. Elevating Standards</em></p> </section>  <script>
document.querySelectorAll('.faq-item').forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');

  question.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');

    // Close all
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-answer').style.maxHeight = null;
    });
    if (!isOpen) {
      item.classList.add('open');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});
<\/script> `, " ", ` <script>
        const questions = {
            start: {
                question: "How old is your garage door system?",
                options: [
                    { id: 'new', text: "Less than 2 years old", value: 0.5, next: 'usage' },
                    { id: 'fairly-new', text: "2-5 years old", value: 2, next: 'usage' },
                    { id: 'middle-aged', text: "5-10 years old", value: 7, next: 'usage' },
                    { id: 'older', text: "10-15 years old", value: 12, next: 'usage' },
                    { id: 'very-old', text: "Over 15 years old", value: 18, next: 'usage' }
                ]
            },
            usage: {
                question: "How many times per day do you use your garage door?",
                type: 'slider',
                min: 1,
                max: 20,
                default: 4,
                note: "Move the slider to continue.",
                next: 'door-type'
            },
            'door-type': {
                question: "What type of garage door do you have?",
                options: [
                    { id: 'single', text: "Single car door", value: 1.1, next: 'material' },
                    { id: 'double', text: "Double car door", value: 1.0, next: 'material' },
                    { id: 'oversized', text: "Oversized/Commercial door", value: 0.9, next: 'material' }
                ]
            },
            material: {
                question: "What material is your garage door?",
                options: [
                    { id: 'steel', text: "Steel (most common)", value: 1.0, next: 'performance' },
                    { id: 'aluminum', text: "Aluminum", value: 1.1, next: 'performance' },
                    { id: 'wood', text: "Wood", value: 0.9, next: 'performance' },
                    { id: 'composite', text: "Composite/Fiberglass", value: 1.05, next: 'performance' }
                ]
            },
            performance: {
                question: "How has your door been performing lately?",
                options: [
                    { id: 'perfect', text: "Smooth and quiet operation", value: 1.2, next: 'result' },
                    { id: 'minor', text: "Minor squeaks or slow movement", value: 1.0, next: 'result' },
                    { id: 'noticeable', text: "Noticeable strain or loud noises", value: 0.8, next: 'result' },
                    { id: 'struggling', text: "Door struggles to open/close", value: 0.6, next: 'result' }
                ]
            }
        };

        let currentStep = 'start';
        let answers = {};

        function getSvgIcon(type, className = '') {
            const icons = {
                'alert-triangle': \`<svg class="solution-icon \${className}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.232 15.5c-.77.833.192 2.5 1.732 2.5z"></path></svg>\`,
                'clock': \`<svg class="solution-icon \${className}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>\`,
                'check-circle': \`<svg class="solution-icon \${className}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>\`,
                'chevron-right': \`<svg class="chevron" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>\`,
                'phone': \`<svg class="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>\`,
                'calendar': \`<svg class="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>\`
            };
            return icons[type] || '';
        }

        function calculateLifespan() {
            // Base lifespan for torsion springs (in months)
            const baseLifespan = 84; // 7 years average
            
            // Calculate cycles per year
            const cyclesPerYear = answers.usage * 365;
            // Typical spring rating (10,000 cycles)
            const springRating = 10000;
            // Calculate base remaining cycles
            const usedCycles = answers.age * cyclesPerYear;
            const remainingCycles = springRating - usedCycles;
            
            // Calculate remaining months based on current usage
            let remainingMonths = (remainingCycles / cyclesPerYear) * 12;
            
            // Apply multipliers for door characteristics
            remainingMonths *= answers.doorType;
            remainingMonths *= answers.material;
            remainingMonths *= answers.performance;
            
            // Round to nearest month
            remainingMonths = Math.round(remainingMonths);
            return Math.max(0, remainingMonths);
        }

        function formatTimeRemaining(months) {
            if (months <= 0) {
                return "Time's Up!";
            } else if (months < 12) {
                return \`\${months} month\${months !== 1 ? 's' : ''}\`;
            } else {
                const years = Math.floor(months / 12);
                const remainingMonths = months % 12;
                
                if (remainingMonths === 0) {
                    return \`\${years} year\${years !== 1 ? 's' : ''}\`;
                } else {
                    return \`\${years} year\${years !== 1 ? 's' : ''}, \${remainingMonths} month\${remainingMonths !== 1 ? 's' : ''}\`;
                }
            }
        }

        function renderResult() {
            const months = calculateLifespan();
            
            let severity, iconHtml, explanation, ctaTitle, ctaBtn1Text, ctaBtn2Text;
            
            if (months <= 0) {
                severity = 'warning';
                iconHtml = getSvgIcon('alert-triangle', 'warning');
                explanation = 'Your springs are likely beyond their expected lifespan and may fail at any time. We strongly recommend immediate professional inspection to prevent unexpected failure and potential safety hazards.';
                ctaTitle = 'Immediate Action Required';
                ctaBtn1Text = 'Emergency Inspection';
                ctaBtn2Text = 'Replace Now';
            } else if (months <= 6) {
                severity = 'warning';
                iconHtml = getSvgIcon('alert-triangle', 'warning');
                explanation = 'Your springs are approaching the end of their expected lifespan. We recommend scheduling a proactive replacement soon to avoid unexpected failure and inconvenience.';
                ctaTitle = 'Schedule Replacement Soon';
                ctaBtn1Text = 'Schedule Service';
                ctaBtn2Text = 'Get Quote';
            } else if (months <= 12) {
                severity = 'caution';
                iconHtml = getSvgIcon('clock', 'caution');
                explanation = 'Your springs are in their final year of expected service. Consider planning for replacement to avoid unexpected failure during extreme weather or busy periods.';
                ctaTitle = 'Plan for Replacement';
                ctaBtn1Text = 'Schedule Inspection';
                ctaBtn2Text = 'Get Quote';
            } else if (months <= 24) {
                severity = 'caution';
                iconHtml = getSvgIcon('clock', 'caution');
                explanation = 'Your springs are in good condition but entering their mature service period. Regular maintenance and monitoring will help maximize their remaining lifespan.';
                ctaTitle = 'Maintain Peak Performance';
                ctaBtn1Text = 'Schedule Maintenance';
                ctaBtn2Text = 'Learn More';
            } else {
                severity = 'good';
                iconHtml = getSvgIcon('check-circle', 'good');
                explanation = 'Your springs appear to be in excellent condition with substantial remaining lifespan. Regular maintenance will help ensure they reach their full potential.';
                ctaTitle = 'Keep Your System Healthy';
                ctaBtn1Text = 'Schedule Maintenance';
                ctaBtn2Text = 'Learn More';
            }

            const buttonsHtml = \`
                <a href="tel:9895720303" class="btn btn-primary" style="display: inline-flex; align-items: center; gap: 8px;">
                    \${getSvgIcon('phone')}
                    <span>Call Now: (989) 572-0303</span>
                </a>
                <a href="/contact" class="btn btn-secondary" style="display: inline-flex; align-items: center; gap: 8px;">
                    \${getSvgIcon('calendar')}
                    <span>Schedule Service</span>
                </a>
 
<button class="btn btn-outline" onclick="resetAndScroll()">Try Again</button>
            \`;

            document.getElementById('app').innerHTML = \`
                <div class="solution-card \${severity}">
<img src="/src/photos/springstatus-logo.webp" alt="Check the estimated life expectancy of your garage door springs" loading="lazy" class="badge-img" />
                    <div class="solution-header">
                        \${iconHtml}
                        <h2 class="solution-title">Spring Status Report</h2>
                    </div>

                    <div class="result-time \${severity}">
                        Estimated Remaining Life: \${formatTimeRemaining(months)}
                    </div>

                    <div class="steps-section">
                        <h3 class="steps-title">\${ctaTitle}</h3>
                        <p class="step-text">\${explanation}</p>
                    </div>

                    <div class="callout \${severity}">
                        <p class="callout-text">
                            <strong>Note:</strong> This estimate is based on typical usage patterns and spring ratings. Actual lifespan may vary based on environmental conditions, maintenance, and manufacturing quality.
                        </p>
                    </div>

                    <div class="button-group">
                        \${buttonsHtml}
                    </div>
<div style="text-align: center; color: #888; font-family: 'Lora', serif; opacity: 0.7; margin-top: 1rem;">
  <p style="font-size: 1.75rem; font-weight: 700; margin: 0;">SpringStatus\u2122</p>
  <p style="font-size: 0.75rem; font-weight: 400; margin: 0;">by Isabella Garage Door</p>
</div>
                </div>

                <div class="center-text" style="margin-top: 32px;">
                    <p style="font-size: 0.875rem; color: #1a334f;">
                        Isabella Garage Door - Serving Central Michigan with expert garage door repair and installation
                    </p>
                </div>
            \`;
        }

        function renderQuestion() {
            const currentQuestion = questions[currentStep];
            if (!currentQuestion) return;

            let questionContent = '';

            if (currentQuestion.type === 'slider') {
                // Initialize slider value if not set
                if (!answers.usage) {
                    answers.usage = currentQuestion.default;
                }

                questionContent = \`
                    <div class="slider-container">
                        <label class="slider-label">Times per day: <span id="usageValue">\${answers.usage}</span></label>
                        <input type="range" id="usageSlider" class="slider" 
                               min="\${currentQuestion.min}" 
                               max="\${currentQuestion.max}" 
                               value="\${answers.usage}">
                               <p class="note-text">\${currentQuestion.note || ''}</p>
                    </div>
                \`;
            } else {
                const optionsHtml = currentQuestion.options.map(option => \`
                    <button class="option-button" onclick="handleAnswer('\${option.id}', '\${option.next}', \${option.value})">
                        <span>\${option.text}</span>
                        \${getSvgIcon('chevron-right')}
                    </button>
                \`).join('');

                questionContent = \`
                    <div class="options-container">
                        \${optionsHtml}
                    </div>
                \`;
            }

            document.getElementById('app').innerHTML = \`
                <div class="card">
<img src="/src/photos/springstatus-logo.webp" alt="Check the estimated life expectancy of your garage door springs" loading="lazy" class="badge-img" />
                    <div style="margin-bottom: 24px;">
                        <h2 class="question-title">\${currentQuestion.question}</h2>
                        \${questionContent}
                    </div>

                    <div class="center-text">
                        <span class="reset-link" onclick="resetAndScroll()">Start Over</span>
<div style="text-align: center; color: #888; font-family: 'Lora', serif; opacity: 0.7;">
  <p style="font-size: 1.75rem; font-weight: 700; margin: 0;">SpringStatus\u2122</p>
  <p style="font-size: 0.75rem; font-weight: 400; margin: 0;">by Isabella Garage Door</p>
</div>
                    </div>
                </div>
            \`;

            // If this is a slider question, set up the event listener
            if (currentQuestion.type === 'slider') {
                const slider = document.getElementById('usageSlider');
                const valueDisplay = document.getElementById('usageValue');
                
                slider.addEventListener('input', function() {
                    valueDisplay.textContent = this.value;
                    answers.usage = parseInt(this.value);
                    
                    // Auto-advance after a brief delay
                    clearTimeout(window.sliderTimeout);
                    window.sliderTimeout = setTimeout(() => {
                        currentStep = currentQuestion.next;
                        if (currentStep === 'result') {
                            renderResult();
                        } else {
                            renderQuestion();
                        }
                    }, 1500);
                });
            }
        }

        function handleAnswer(optionId, nextStep, value) {
            // Store the answer based on current step
            switch(currentStep) {
                case 'start':
                    answers.age = value;
                    break;
                case 'door-type':
                    answers.doorType = value;
                    break;
                case 'material':
                    answers.material = value;
                    break;
                case 'performance':
                    answers.performance = value;
                    break;
            }
            
            currentStep = nextStep;
            
            if (currentStep === 'result') {
                renderResult();
            } else {
                renderQuestion();
            }
        }

        function resetTool() {
            currentStep = 'start';
            answers = {};
            renderQuestion();
        }

function resetAndScroll() {
    resetTool(); // reset logic
    document.getElementById('springstatus').scrollIntoView({ behavior: 'smooth' });
}


        // Initialize the app
        renderQuestion();
    <\/script> `], ['  <link rel="stylesheet" href="/styles/tools.css">  ', `<section> <img src="/src/photos/Broken-spring.webp" alt="A clearly worn spring with an unknown amount of life left" loading="eager" fetchpriority="high" class="header-photo-interior"> </section>  <section> <h1 class="page-title">SpringStatus\u2122</h1> <h2 class="sub-heading">How long will your garage door springs last? Let\u2019s find out.</h2> <p>Your torsion springs do the heavy lifting every day \u2014 and when they break, everything stops. SpringStatus\u2122 helps you estimate how much life they\u2019ve got left, so you\u2019re not caught off guard.
</p> <div style="margin: 1rem;"> <ul class="bullet-list"> <li><i class="fas fa-check icon-bronze"></i><strong> Fast, free online tool</strong></li> <li><i class="fas fa-check icon-bronze"></i><strong> No tech required</strong></li> <li><i class="fas fa-check icon-bronze"></i><strong> Know before they snap</strong></li> </ul> </div> </section>  <div class="highlight-section"> <p>
A broken spring doesn\u2019t give you a heads-up \u2014 until now.
</p> </div> <section> <p>Take a minute to answer a few quick questions and get an accurate estimate of how much life is left in your springs:</p> </section> <section id="springstatus" style="position: relative; top: -80px;"></section>  <div id="estimate-app-container"> <!-- Splash Screen (initially visible) --> <div id="estimate-splash" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 250px; gap: 1rem;"> <img src="/src/photos/blue-isabella-garage-door-logo.png" alt="Isabella Garage Door Logo" style="max-width: 280px; opacity: 0.8;"> <div class="lds-ring"><div></div><div></div><div></div><div></div></div> </div> <!-- Your Actual App --> <div id="app" style="display: none;"></div> </div>  <section> <div class="footer-text">
Need immediate help? Call us at
<a href="tel:9895720303" style="color: #b27d57; font-weight: bold; text-decoration: none;">
(989) 572-0303
</a> </div> </section> <section style="margin-top: 3rem;"> <h2 class="sub-heading">How SpringStatus\u2122 works</h2> <p>Springs don\u2019t last forever. Most break between 10,000\u201315,000 cycles \u2014 and they don\u2019t always give clear warning signs. SpringStatus\u2122 asks a few quick questions about your door, usage, and wear signs to estimate:
</p> <div style="margin: 1rem;"> <ul class="bullet-list"> <li><i class="fas fa-check icon-bronze"></i><strong> How much life is likely left</strong></li> <li><i class="fas fa-check icon-bronze"></i><strong> Whether you\u2019re at risk of a sudden failure</strong></li> <li><i class="fas fa-check icon-bronze"></i><strong> If it\u2019s worth replacing now \u2014 or waiting a little longer</strong></li> </ul> </div> </section>  <section style="margin-top: 3rem;"> <h2 class="sub-heading">Why spring failure matters</h2> <p>When a torsion spring breaks:</p> <div style="margin: 1rem;"> <ul class="bullet-list"> <li><i class="fas fa-check icon-bronze"></i><strong> Your door becomes heavy and inoperable</strong></li> <li><i class="fas fa-check icon-bronze"></i><strong> Openers can burn out trying to lift it</strong></li> <li><i class="fas fa-check icon-bronze"></i><strong> It can cause injury or damage if you're nearby</strong></li> <li><i class="fas fa-check icon-bronze"></i><strong> You\u2019ll be stuck until a tech arrives \u2014 often at higher emergency rates</strong></li> </ul> </div> <p>With SpringStatus\u2122, you can plan ahead, avoid urgent repairs, and replace springs on your terms.</p> </section>  <section id="faq"> <div class="faq-head"> <a href="/resources/faq" style="text-decoration: none; color: inherit; display: block;"> <h2 class="sub-heading" style="margin-bottom: -.5rem;">Frequently Asked Questions</h2> </a> </div> <div class="faq-item"> <div class="faq-question"> <span>How accurate is the estimate?</span> <span class="faq-arrow">&#9654;</span> </div> <div class="faq-answer"> <p>It\u2019s an educated prediction based on your door size, usage, and any visible signs of wear. It\u2019s not exact, but it\u2019s surprisingly useful for planning ahead \u2014 especially if your springs are 5+ years old.</p> </div> </div> <div class="faq-item"> <div class="faq-question"> <span>Can I replace springs myself?</span> <span class="faq-arrow">&#9654;</span> </div> <div class="faq-answer"> <p>We strongly advise against it. Torsion springs are under extreme tension and can cause serious injury. Always hire a trained professional for spring replacement.</p> </div> </div> <div class="faq-item"> <div class="faq-question"> <span>My springs "feel fine" \u2014 should I still check?</span> <span class="faq-arrow">&#9654;</span> </div> <div class="faq-answer"> <p>Yes. Springs can fail suddenly with no obvious symptoms. If it\u2019s been a few years since installation (or you\u2019re not sure), SpringStatus\u2122 is a smart step.</p> </div> </div> <div class="faq-item"> <div class="faq-question"> <span>How often should springs be checked?</span> <span class="faq-arrow">&#9654;</span> </div> <div class="faq-answer"> <p>We recommend checking once a year \u2014 or any time you notice the door getting heavier, uneven, or noisy.</p> </div> </div> </section> <section style="margin-top: 3rem;"> <h2 class="sub-heading">Smart maintenance = fewer surprises</h2> <p style="text-align:center;">You wouldn\u2019t wait for a tire to explode before replacing it.
Your springs deserve the same care \u2014 especially when they support a 200+ lb door over your head.</p> <a href="/contact" class="cta-button margin-bottom-2rem"> \u{1F4C5} Book an Inspection</a> </section> <section> <h2 class="sub-heading">Isabella Garage Door</h2> <p style="font-size: .9rem; text-align: center;">Torsion spring experts.
Proudly serving Central Michigan with professional garage door care.</p> <p style="font-size: .9rem; text-align: center; margin: 0.5rem;"><em>Raising Performance. Elevating Standards</em></p> </section>  <script>
document.querySelectorAll('.faq-item').forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');

  question.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');

    // Close all
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-answer').style.maxHeight = null;
    });
    if (!isOpen) {
      item.classList.add('open');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});
<\/script> `, " ", ` <script>
        const questions = {
            start: {
                question: "How old is your garage door system?",
                options: [
                    { id: 'new', text: "Less than 2 years old", value: 0.5, next: 'usage' },
                    { id: 'fairly-new', text: "2-5 years old", value: 2, next: 'usage' },
                    { id: 'middle-aged', text: "5-10 years old", value: 7, next: 'usage' },
                    { id: 'older', text: "10-15 years old", value: 12, next: 'usage' },
                    { id: 'very-old', text: "Over 15 years old", value: 18, next: 'usage' }
                ]
            },
            usage: {
                question: "How many times per day do you use your garage door?",
                type: 'slider',
                min: 1,
                max: 20,
                default: 4,
                note: "Move the slider to continue.",
                next: 'door-type'
            },
            'door-type': {
                question: "What type of garage door do you have?",
                options: [
                    { id: 'single', text: "Single car door", value: 1.1, next: 'material' },
                    { id: 'double', text: "Double car door", value: 1.0, next: 'material' },
                    { id: 'oversized', text: "Oversized/Commercial door", value: 0.9, next: 'material' }
                ]
            },
            material: {
                question: "What material is your garage door?",
                options: [
                    { id: 'steel', text: "Steel (most common)", value: 1.0, next: 'performance' },
                    { id: 'aluminum', text: "Aluminum", value: 1.1, next: 'performance' },
                    { id: 'wood', text: "Wood", value: 0.9, next: 'performance' },
                    { id: 'composite', text: "Composite/Fiberglass", value: 1.05, next: 'performance' }
                ]
            },
            performance: {
                question: "How has your door been performing lately?",
                options: [
                    { id: 'perfect', text: "Smooth and quiet operation", value: 1.2, next: 'result' },
                    { id: 'minor', text: "Minor squeaks or slow movement", value: 1.0, next: 'result' },
                    { id: 'noticeable', text: "Noticeable strain or loud noises", value: 0.8, next: 'result' },
                    { id: 'struggling', text: "Door struggles to open/close", value: 0.6, next: 'result' }
                ]
            }
        };

        let currentStep = 'start';
        let answers = {};

        function getSvgIcon(type, className = '') {
            const icons = {
                'alert-triangle': \\\`<svg class="solution-icon \\\${className}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.232 15.5c-.77.833.192 2.5 1.732 2.5z"></path></svg>\\\`,
                'clock': \\\`<svg class="solution-icon \\\${className}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>\\\`,
                'check-circle': \\\`<svg class="solution-icon \\\${className}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>\\\`,
                'chevron-right': \\\`<svg class="chevron" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>\\\`,
                'phone': \\\`<svg class="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>\\\`,
                'calendar': \\\`<svg class="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>\\\`
            };
            return icons[type] || '';
        }

        function calculateLifespan() {
            // Base lifespan for torsion springs (in months)
            const baseLifespan = 84; // 7 years average
            
            // Calculate cycles per year
            const cyclesPerYear = answers.usage * 365;
            // Typical spring rating (10,000 cycles)
            const springRating = 10000;
            // Calculate base remaining cycles
            const usedCycles = answers.age * cyclesPerYear;
            const remainingCycles = springRating - usedCycles;
            
            // Calculate remaining months based on current usage
            let remainingMonths = (remainingCycles / cyclesPerYear) * 12;
            
            // Apply multipliers for door characteristics
            remainingMonths *= answers.doorType;
            remainingMonths *= answers.material;
            remainingMonths *= answers.performance;
            
            // Round to nearest month
            remainingMonths = Math.round(remainingMonths);
            return Math.max(0, remainingMonths);
        }

        function formatTimeRemaining(months) {
            if (months <= 0) {
                return "Time's Up!";
            } else if (months < 12) {
                return \\\`\\\${months} month\\\${months !== 1 ? 's' : ''}\\\`;
            } else {
                const years = Math.floor(months / 12);
                const remainingMonths = months % 12;
                
                if (remainingMonths === 0) {
                    return \\\`\\\${years} year\\\${years !== 1 ? 's' : ''}\\\`;
                } else {
                    return \\\`\\\${years} year\\\${years !== 1 ? 's' : ''}, \\\${remainingMonths} month\\\${remainingMonths !== 1 ? 's' : ''}\\\`;
                }
            }
        }

        function renderResult() {
            const months = calculateLifespan();
            
            let severity, iconHtml, explanation, ctaTitle, ctaBtn1Text, ctaBtn2Text;
            
            if (months <= 0) {
                severity = 'warning';
                iconHtml = getSvgIcon('alert-triangle', 'warning');
                explanation = 'Your springs are likely beyond their expected lifespan and may fail at any time. We strongly recommend immediate professional inspection to prevent unexpected failure and potential safety hazards.';
                ctaTitle = 'Immediate Action Required';
                ctaBtn1Text = 'Emergency Inspection';
                ctaBtn2Text = 'Replace Now';
            } else if (months <= 6) {
                severity = 'warning';
                iconHtml = getSvgIcon('alert-triangle', 'warning');
                explanation = 'Your springs are approaching the end of their expected lifespan. We recommend scheduling a proactive replacement soon to avoid unexpected failure and inconvenience.';
                ctaTitle = 'Schedule Replacement Soon';
                ctaBtn1Text = 'Schedule Service';
                ctaBtn2Text = 'Get Quote';
            } else if (months <= 12) {
                severity = 'caution';
                iconHtml = getSvgIcon('clock', 'caution');
                explanation = 'Your springs are in their final year of expected service. Consider planning for replacement to avoid unexpected failure during extreme weather or busy periods.';
                ctaTitle = 'Plan for Replacement';
                ctaBtn1Text = 'Schedule Inspection';
                ctaBtn2Text = 'Get Quote';
            } else if (months <= 24) {
                severity = 'caution';
                iconHtml = getSvgIcon('clock', 'caution');
                explanation = 'Your springs are in good condition but entering their mature service period. Regular maintenance and monitoring will help maximize their remaining lifespan.';
                ctaTitle = 'Maintain Peak Performance';
                ctaBtn1Text = 'Schedule Maintenance';
                ctaBtn2Text = 'Learn More';
            } else {
                severity = 'good';
                iconHtml = getSvgIcon('check-circle', 'good');
                explanation = 'Your springs appear to be in excellent condition with substantial remaining lifespan. Regular maintenance will help ensure they reach their full potential.';
                ctaTitle = 'Keep Your System Healthy';
                ctaBtn1Text = 'Schedule Maintenance';
                ctaBtn2Text = 'Learn More';
            }

            const buttonsHtml = \\\`
                <a href="tel:9895720303" class="btn btn-primary" style="display: inline-flex; align-items: center; gap: 8px;">
                    \\\${getSvgIcon('phone')}
                    <span>Call Now: (989) 572-0303</span>
                </a>
                <a href="/contact" class="btn btn-secondary" style="display: inline-flex; align-items: center; gap: 8px;">
                    \\\${getSvgIcon('calendar')}
                    <span>Schedule Service</span>
                </a>
 
<button class="btn btn-outline" onclick="resetAndScroll()">Try Again</button>
            \\\`;

            document.getElementById('app').innerHTML = \\\`
                <div class="solution-card \\\${severity}">
<img src="/src/photos/springstatus-logo.webp" alt="Check the estimated life expectancy of your garage door springs" loading="lazy" class="badge-img" />
                    <div class="solution-header">
                        \\\${iconHtml}
                        <h2 class="solution-title">Spring Status Report</h2>
                    </div>

                    <div class="result-time \\\${severity}">
                        Estimated Remaining Life: \\\${formatTimeRemaining(months)}
                    </div>

                    <div class="steps-section">
                        <h3 class="steps-title">\\\${ctaTitle}</h3>
                        <p class="step-text">\\\${explanation}</p>
                    </div>

                    <div class="callout \\\${severity}">
                        <p class="callout-text">
                            <strong>Note:</strong> This estimate is based on typical usage patterns and spring ratings. Actual lifespan may vary based on environmental conditions, maintenance, and manufacturing quality.
                        </p>
                    </div>

                    <div class="button-group">
                        \\\${buttonsHtml}
                    </div>
<div style="text-align: center; color: #888; font-family: 'Lora', serif; opacity: 0.7; margin-top: 1rem;">
  <p style="font-size: 1.75rem; font-weight: 700; margin: 0;">SpringStatus\u2122</p>
  <p style="font-size: 0.75rem; font-weight: 400; margin: 0;">by Isabella Garage Door</p>
</div>
                </div>

                <div class="center-text" style="margin-top: 32px;">
                    <p style="font-size: 0.875rem; color: #1a334f;">
                        Isabella Garage Door - Serving Central Michigan with expert garage door repair and installation
                    </p>
                </div>
            \\\`;
        }

        function renderQuestion() {
            const currentQuestion = questions[currentStep];
            if (!currentQuestion) return;

            let questionContent = '';

            if (currentQuestion.type === 'slider') {
                // Initialize slider value if not set
                if (!answers.usage) {
                    answers.usage = currentQuestion.default;
                }

                questionContent = \\\`
                    <div class="slider-container">
                        <label class="slider-label">Times per day: <span id="usageValue">\\\${answers.usage}</span></label>
                        <input type="range" id="usageSlider" class="slider" 
                               min="\\\${currentQuestion.min}" 
                               max="\\\${currentQuestion.max}" 
                               value="\\\${answers.usage}">
                               <p class="note-text">\\\${currentQuestion.note || ''}</p>
                    </div>
                \\\`;
            } else {
                const optionsHtml = currentQuestion.options.map(option => \\\`
                    <button class="option-button" onclick="handleAnswer('\\\${option.id}', '\\\${option.next}', \\\${option.value})">
                        <span>\\\${option.text}</span>
                        \\\${getSvgIcon('chevron-right')}
                    </button>
                \\\`).join('');

                questionContent = \\\`
                    <div class="options-container">
                        \\\${optionsHtml}
                    </div>
                \\\`;
            }

            document.getElementById('app').innerHTML = \\\`
                <div class="card">
<img src="/src/photos/springstatus-logo.webp" alt="Check the estimated life expectancy of your garage door springs" loading="lazy" class="badge-img" />
                    <div style="margin-bottom: 24px;">
                        <h2 class="question-title">\\\${currentQuestion.question}</h2>
                        \\\${questionContent}
                    </div>

                    <div class="center-text">
                        <span class="reset-link" onclick="resetAndScroll()">Start Over</span>
<div style="text-align: center; color: #888; font-family: 'Lora', serif; opacity: 0.7;">
  <p style="font-size: 1.75rem; font-weight: 700; margin: 0;">SpringStatus\u2122</p>
  <p style="font-size: 0.75rem; font-weight: 400; margin: 0;">by Isabella Garage Door</p>
</div>
                    </div>
                </div>
            \\\`;

            // If this is a slider question, set up the event listener
            if (currentQuestion.type === 'slider') {
                const slider = document.getElementById('usageSlider');
                const valueDisplay = document.getElementById('usageValue');
                
                slider.addEventListener('input', function() {
                    valueDisplay.textContent = this.value;
                    answers.usage = parseInt(this.value);
                    
                    // Auto-advance after a brief delay
                    clearTimeout(window.sliderTimeout);
                    window.sliderTimeout = setTimeout(() => {
                        currentStep = currentQuestion.next;
                        if (currentStep === 'result') {
                            renderResult();
                        } else {
                            renderQuestion();
                        }
                    }, 1500);
                });
            }
        }

        function handleAnswer(optionId, nextStep, value) {
            // Store the answer based on current step
            switch(currentStep) {
                case 'start':
                    answers.age = value;
                    break;
                case 'door-type':
                    answers.doorType = value;
                    break;
                case 'material':
                    answers.material = value;
                    break;
                case 'performance':
                    answers.performance = value;
                    break;
            }
            
            currentStep = nextStep;
            
            if (currentStep === 'result') {
                renderResult();
            } else {
                renderQuestion();
            }
        }

        function resetTool() {
            currentStep = 'start';
            answers = {};
            renderQuestion();
        }

function resetAndScroll() {
    resetTool(); // reset logic
    document.getElementById('springstatus').scrollIntoView({ behavior: 'smooth' });
}


        // Initialize the app
        renderQuestion();
    <\/script> `])), maybeRenderHead(), renderScript($$result2, "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/homeowner-tools/spring-status.astro?astro&type=script&index=0&lang.ts"), renderScript($$result2, "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/homeowner-tools/spring-status.astro?astro&type=script&index=1&lang.ts")), "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_b || (_b = __template([' <script type="application/ld+json">', "<\/script> "])), unescapeHTML(JSON.stringify(springStatusSchema))) })}` })}`;
}, "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/homeowner-tools/spring-status.astro", void 0);

const $$file = "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/homeowner-tools/spring-status.astro";
const $$url = "/homeowner-tools/spring-status";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SpringStatus,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
