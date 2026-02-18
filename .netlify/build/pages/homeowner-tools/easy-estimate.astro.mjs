/* empty css                                                                   */
import { a as createComponent, g as renderComponent, r as renderTemplate, F as Fragment, u as unescapeHTML, b as renderScript, m as maybeRenderHead } from '../../chunks/astro/server_xoD-kxEp.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BTkoY-F8.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a, _b;
const $$EasyEstimate = createComponent(($$result, $$props, $$slots) => {
  const title = "EasyEstimate\u2122 | Isabella Garage Door";
  const description = "Get a fast, accurate estimate for garage door repair, installation, or maintenance in Mt. Pleasant and surrounding areas. No pressure\u2014just honest pricing.";
  const estimateSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "EasyEstimate\u2122",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "description": "An interactive tool for homeowners to receive instant ballpark quotes for garage door repairs and installations.",
        "author": {
          "@id": "https://isabellagaragedoor.com/#business"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "description": "Free to use online estimate tool"
        }
      },
      {
        "@type": "Service",
        "name": "Garage Door Quote Service",
        "serviceType": "Pricing Estimate",
        "provider": {
          "@id": "https://isabellagaragedoor.com/#business"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Isabella County"
        },
        "description": "Transparent, no-pressure pricing for garage door services including spring replacement, opener repair, and new installations."
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(['  <link rel="stylesheet" href="/styles/global.css"> <link rel="stylesheet" href="/styles/tools.css"> ', `<img src="/src/photos/new-estimate-image.webp" alt="New garage door intallation in Central Michigan" loading="eager" fetchpriority="high" class="header-photo-interior"> <section> <h1 class="page-title">EasyEstimate\u2122</h1> <h2 class="sub-heading">Fast. Transparent. No Pressure.</h2> <p>Need garage door service but unsure what it\u2019ll cost? With EasyEstimate\u2122, you can get a quick, ballpark quote in under a minute \u2014 no phone call, no hassle.
</p> <div style="margin-left: 1rem;"> <ul class="bullet-list"> <li><i class="fas fa-check icon-bronze"></i><strong> Simple step-by-step tool</strong></li> <li><i class="fas fa-check icon-bronze"></i><strong> Real pricing based on your issue</strong></li> <li><i class="fas fa-check icon-bronze"></i><strong> No commitment required</strong></li> </ul> </div> </section>  <div class="highlight-section"> <p>
When your garage door doesn\u2019t open, your whole day stops. We built EasyEstimate\u2122 to make sure your fix starts quickly \u2014 without wasting time, guessing prices, or getting sold something you don\u2019t need.
</p> </div> <section> <p>Choose your concern and we\u2019ll guide you through a few quick questions to generate an accurate estimate:</p> </section>   <div id="estimate-form" style="position: relative; top: -80px;"></div>  <div id="estimate-app-container"> <!-- Splash Screen (initially visible) --> <div id="estimate-splash" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 250px; gap: 1rem;"> <img src="/src/photos/blue-isabella-garage-door-logo.png" alt="Isabella Garage Door Logo" style="max-width: 280px; opacity: 0.8;"> <div class="lds-ring"><div></div><div></div><div></div><div></div></div> </div> <!-- Your Actual App --> <div id="app" style="display: none;"></div> </div>  <section> <div class="footer-text">
Need immediate help? Call us at
<a href="tel:9895720303" style="color: #b27d57; font-weight: bold; text-decoration: none;">
(989) 572-0303
</a> </div> </section> <section style="margin-top: 3rem;"> <h2 class="sub-heading">Why use EasyEstimate\u2122?</h2> <p>Getting your garage door fixed shouldn\u2019t be stressful or uncertain. EasyEstimate\u2122 was built for homeowners who want:
</p> <div style="margin-left: 1rem;"> <ul class="bullet-list"> <li><i class="fas fa-check icon-bronze"></i><strong> Clarity before commitment</strong> \u2013 Know what to expect</li> <li><i class="fas fa-check icon-bronze"></i><strong> No-pressure pricing</strong> \u2013 No upsells, no surprises</li> <li><i class="fas fa-check icon-bronze"></i><strong> Peace of mind</strong> \u2013 Backed by real experience, not guesswork</li> </ul> </div> </section>   <section id="faq"> <div class="faq-head"> <a href="/resources/faq" style="text-decoration: none; color: inherit; display: block;"> <h2 class="sub-heading" style="margin-bottom: -.5rem;">Frequently Asked Questions</h2> </a> </div> <div class="faq-item"> <div class="faq-question"> <span>Is the estimate I get final?</span> <span class="faq-arrow">&#9654;</span> </div> <div class="faq-answer"> <p>No \u2014 it\u2019s a starting point based on common scenarios. Once we\u2019re on-site, we\u2019ll confirm the exact price before starting any work.</p> </div> </div> <div class="faq-item"> <div class="faq-question"> <span>Can I text you a photo instead?</span> <span class="faq-arrow">&#9654;</span> </div> <div class="faq-answer"> <p>Absolutely. If you're not sure how to answer a question or just want to show us the issue, <a href="sms:+19895720303?&body=Hi! Here's a photo of my garage door problem." style="color: #b27d57;">
Text us
</a> a picture of your garage door issue.</p> </div> </div> <div class="faq-item"> <div class="faq-question"> <span>Is this the same as scheduling a service call?</span> <span class="faq-arrow">&#9654;</span> </div> <div class="faq-answer"> <p>Nope. EasyEstimate\u2122 is free and doesn\u2019t commit you to anything. If you like the quote, you can then choose to book a service call.</p> </div> </div> <div class="faq-item"> <div class="faq-question"> <span>How soon can you come out?</span> <span class="faq-arrow">&#9654;</span> </div> <div class="faq-answer"> <p>It depends on our current schedule, but we do our best to get out quickly. Just give us a call or send a message, and we'll find the soonest spot that works for you.</p> </div> </div> <!--
  <div class="faq-item">
    <div class="faq-question">
      <span>How much does it cost to install a new garage door?</span>
      <span class="faq-arrow">&#9654;</span>
    </div>
    <div class="faq-answer">
      <p>The cost varies depending on the size, material, and style of door you choose. Single garage doors typically range from $900-$2,500, while double doors range from $1,200-$4,000. This includes the door, hardware, and professional installation.</p>
    </div>
  </div>
--> </section> <section style="margin-top: 3rem;"> <h2 class="sub-heading">Ready to Book? Still Have Questions?</h2> <p style="text-align:center;">Use EasyEstimate\u2122 now, or reach out directly. We\u2019re always happy to help.</p> <a href="/contact" class="cta-button margin-bottom-2rem"><i class="fas fa-magnifying-glass"></i> Contact Us</a> </section> <section> <h2 class="sub-heading">Isabella Garage Door</h2> <p style="font-size: .9rem; text-align: center;">Serving Mt. Pleasant \u2022 Clare \u2022 Alma \u2022 Isabella County</p> <p style="font-size: .9rem; text-align: center; margin: 0.5rem;"><em>Raising Performance. Elevating Standards</em></p> </section> <script>
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
<\/script>  <form id="estimateForm" action="https://formsubmit.co/Isabellagaragedoor@gmail.com" method="POST" style="display: none;"> <input type="hidden" name="_subject" value="New Garage Door Service Request"> <input type="hidden" name="name"> <input type="hidden" name="phone"> <input type="hidden" name="email"> <input type="hidden" name="address"> <input type="hidden" name="details"> <input type="hidden" name="Service Type"> <input type="hidden" name="Estimated Cost"> <input type="hidden" name="_next" value="http://isabellagaragedoor.com/thank-you-estimate"> </form> `, " ", ` <script>
        const questions = {
            start: {
                question: "What type of service do you need?",
                options: [
                    { id: 'spring-repair', text: "Broken Spring Repair", next: 'spring-type' },
                    { id: 'opener-repair', text: "Opener Repair/Replacement", next: 'opener-problem' },
                    { id: 'roller-replacement', text: "Roller Replacement", next: 'roller-problem' },
                    { id: 'cable-repair', text: "Cable Off/Replacement", next: 'cable-problem' },
                    { id: 'track-repair', text: "Track Repair", next: 'track-problem' },
                    { id: 'maintenance', text: "Maintenance/Inspection", next: 'maintenance-pricing' }
                ]
            },
            'spring-type': {
                question: "What type of spring system do you have?",
                options: [
                    { id: 'torsion', text: "Torsion Springs (above door)", next: 'spring-count-torsion' },
                    { id: 'extension', text: "Extension Springs (sides)", next: 'spring-count-extension' },
                    { id: 'not-sure', text: "Not sure / Other", next: 'contact-spring-unknown' }
                ]
            },
            'spring-count-torsion': {
                question: "How many torsion springs need replacement?",
                options: [
                    { id: 'torsion-1', text: "1 spring", next: 'pricing-torsion-1' },
                    { id: 'torsion-2', text: "2 springs (recommended)", next: 'pricing-torsion-2' },
                    { id: 'torsion-4', text: "4 springs", next: 'contact-torsion-4' }
                ]
            },
            'spring-count-extension': {
                question: "How many extension springs need replacement?",
                options: [
                    { id: 'extension-1', text: "1 spring", next: 'pricing-extension-1' },
                    { id: 'extension-2', text: "2 springs (recommended)", next: 'pricing-extension-2' },
                    { id: 'extension-4', text: "4 springs", next: 'contact-extension-4' }
                ]
            },
            'opener-problem': {
                question: "What's happening with your opener?",
                options: [
                    { id: 'remote-issue', text: "Wall button or remote not working", next: 'pricing-remote' },
                    { id: 'motor-runs', text: "Motor runs but won't move door", next: 'pricing-motor' },
                    { id: 'wont-open', text: "Door won't open or close", next: 'pricing-open-close' },
                    { id: 'light-flashing', text: "Opener light flashing/blinking", next: 'pricing-light' },
                    { id: 'replacement', text: "Need complete opener replacement", next: 'pricing-replacement' }
                ]
            },
            'roller-problem': {
                question: "What's wrong with your rollers?",
                options: [
                    { id: 'loud-squeaky', text: "Loud or squeaky operation", next: 'roller-count' },
                    { id: 'jerky-uneven', text: "Door moves jerky/uneven", next: 'pricing-jerky' },
                    { id: 'visible-wear', text: "Visible wear or damage", next: 'pricing-wear' },
                    { id: 'off-track', text: "Rollers came off track", next: 'pricing-off-track' }
                ]
            },
            'roller-count': {
                question: "How many rollers does your door have?",
                options: [
                    { id: 'few-rollers', text: "1-2 rollers", next: 'pricing-few-rollers' },
                    { id: 'single-door', text: "10 rollers (standard single)", next: 'pricing-single-door' },
                    { id: 'double-door', text: "12 rollers (standard double)", next: 'pricing-double-door' },
                    { id: 'roller-other', text: "Other/Not sure", next: 'contact-roller-other' }
                ]
            },
            'cable-problem': {
                question: "What's the cable issue?",
                options: [
                    { id: 'frayed-broken', text: "Frayed or broken cable", next: 'pricing-frayed' },
                    { id: 'rusty-corroded', text: "Rusty or corroded cable", next: 'pricing-rusty' },
                    { id: 'off-drum', text: "Cable came off the drum", next: 'pricing-off-drum' },
                    { id: 'door-uneven', text: "Door is uneven/crooked", next: 'pricing-uneven' }
                ]
            },
            'track-problem': {
                question: "What's wrong with the track?",
                options: [
                    { id: 'bent-damaged', text: "Bent or damaged track", next: 'pricing-bent' },
                    { id: 'rubbing', text: "Door is rubbing against track", next: 'pricing-rubbing' },
                    { id: 'completely-off', text: "Door is completely off track", next: 'pricing-completely-off' }
                ]
            }
        };

        const pricing = {
            'pricing-torsion-1': { price: '$325 - $395', service: 'Torsion Spring Repair (1 spring)' },
            'pricing-torsion-2': { price: '$395 - $525', service: 'Torsion Spring Repair (2 springs)' },
            'pricing-extension-1': { price: '$250 - $350', service: 'Extension Spring Repair (1 spring)' },
            'pricing-extension-2': { price: '$275 - $375', service: 'Extension Spring Repair (2 springs)' },
            'pricing-remote': { price: '$150 - $250', service: 'Remote/Wall Button Repair' },
            'pricing-motor': { price: '$150 - $350', service: 'Motor Drive Repair' },
            'pricing-open-close': { price: '$150 - $450', service: 'Opener Operation Repair' },
            'pricing-light': { price: '$150 - $200', service: 'Opener Diagnostic & Repair' },
            'pricing-replacement': { price: '$495 - $750', service: 'Complete Opener Replacement' },
            'pricing-few-rollers': { price: '$130 - $170', service: 'Roller Replacement (1-2 rollers)' },
            'pricing-single-door': { price: '$160 - $200', service: 'Roller Replacement (Single Door)' },
            'pricing-double-door': { price: '$160 - $200', service: 'Roller Replacement (Double Door)' },
            'pricing-jerky': { price: '$150 - $200', service: 'Roller Repair (Movement Issues)' },
            'pricing-wear': { price: '$165 - $200', service: 'Roller Replacement (Worn)' },
            'pricing-off-track': { price: '$150 - $500', service: 'Roller & Track Realignment' },
            'pricing-frayed': { price: '$160 - $200', service: 'Cable Replacement (Frayed)' },
            'pricing-rusty': { price: '$160 - $200', service: 'Cable Replacement (Corroded)' },
            'pricing-off-drum': { price: '$140 - $200', service: 'Cable Reattachment & Repair' },
            'pricing-uneven': { price: '$120 - $300', service: 'Cable & Balance Adjustment' },
            'pricing-bent': { price: '$250 - $375', service: 'Track Repair (Bent/Damaged)' },
            'pricing-rubbing': { price: '$150 - $250', service: 'Track Alignment' },
            'pricing-completely-off': { price: '$300 - $600', service: 'Track Realignment (Emergency)' },
            'maintenance-pricing': { price: '$120 - $150', service: 'Maintenance & Inspection' }
        };

        let currentStep = 'start';
        let answers = {};
        let contactData = {};

        function getSvgIcon(type, className = '') {
            const icons = {
                'dollar-sign': \`<svg class="solution-icon \${className}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path></svg>\`,
                'chevron-right': \`<svg class="chevron" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>\`,
                'phone': \`<svg class="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>\`,
                'calendar': \`<svg class="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>\`,
                'send': \`<svg class="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>\`
            };
            return icons[type] || '';
        }

        function renderPricing() {
            const priceData = pricing[currentStep];
            if (!priceData) return;

            document.getElementById('app').innerHTML = \`
                <div class="solution-card-estimate">
<img src="/src/photos/easyestimate-logo.webp" alt="Instant online garage door repair quote" loading="lazy" class="badge-img" />
<div style="background: transparent; height: 1rem;"></div>
                    <div class="solution-header">
                        \${getSvgIcon('dollar-sign')}
                        <h2 class="solution-title">Service Estimate</h2>
                    </div>

                    <div class="price-display">
                        <div class="price-label">\${priceData.service}</div>
                        <div class="price-range">\${priceData.price}</div>
                    </div>

                    <div class="callout">
                        <p class="callout-text">
                            <strong>Next Step:</strong> Fill out your contact information below to schedule your service appointment.
                        </p>
                    </div>

                    <div class="steps-section">
                        <h3 class="steps-title">Contact Information</h3>
                        
                        <div class="form-row">
                            <div class="form-group">
                                <label for="name">Full Name *</label>
                                <input type="text" id="name" placeholder="Enter your name" required>
                            </div>
                            <div class="form-group">
                                <label for="phone">Phone Number *</label>
                                <input type="tel" id="phone" placeholder="(555) 123-4567" required>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label for="email">Email Address</label>
                            <input type="email" id="email" placeholder="your.email@example.com">
                        </div>
                        
                        <div class="form-group">
                            <label for="address">Service Address *</label>
                            <input type="text" id="address" placeholder="123 Main St, City, State 12345" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="details">Additional Details</label>
                            <textarea id="details" rows="4" placeholder="Any additional information about your garage door issue..."></textarea>
                        </div>
                    </div>

                    <div class="button-group">
                        <button class="btn btn-primary" onclick="submitEstimate()">
                            \${getSvgIcon('send')}
                            Submit Service Request
                        </button>
<a href="tel:9895720303" class="btn btn-secondary" style="display: inline-flex; align-items: center; gap: 8px;">
  \${getSvgIcon('phone')}
  <span>Call Now: (989) 572-0303</span>
</a>
                        <button class="btn btn-outline" onclick="resetAndScroll()">
                            Try Again
                        </button>
<div style="text-align: center; color: #888; font-family: 'Lora', serif; opacity: 0.7;">
  <p style="font-size: 1.75rem; font-weight: 700; margin: 0;">EasyEstimate\u2122</p>
  <p style="font-size: 0.75rem; font-weight: 400; margin: 0;">by Isabella Garage Door</p>
</div>
                    </div>
                </div>

                <div class="center-text" style="margin-top: 32px;">
                    <p style="font-size: 0.875rem; color: #1a334f;">
                        Isabella Garage Door - Serving Central Michigan with expert garage door repair and installation
                    </p>
                </div>
            \`;
        }

        function renderContactOnly() {
            document.getElementById('app').innerHTML = \`
                <div class="solution-card-estimate">
<img src="/src/photos/easyestimate-logo.webp" alt="instant online garage door repair quote" loading="lazy" class="badge-img" />
<div style="background: transparent; height: 1rem;"></div>
                    <div class="solution-header">
                        \${getSvgIcon('dollar-sign')}
                        <h2 class="solution-title">Contact for Estimate</h2>
                    </div>

                    <div class="callout">
                        <p class="callout-text">
                            <strong>Custom Quote Required:</strong> This service requires a personalized estimate based on your specific situation. Please provide your contact information and we'll get back to you with pricing.
                        </p>
                    </div>

                    <div class="steps-section">
                        <h3 class="steps-title">Contact Information</h3>
                        
                        <div class="form-row">
                            <div class="form-group">
                                <label for="name">Full Name *</label>
                                <input type="text" id="name" placeholder="Enter your name" required>
                            </div>
                            <div class="form-group">
                                <label for="phone">Phone Number *</label>
                                <input type="tel" id="phone" placeholder="(555) 123-4567" required>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label for="email">Email Address</label>
                            <input type="email" id="email" placeholder="your.email@example.com">
                        </div>
                        
                        <div class="form-group">
                            <label for="address">Service Address *</label>
                            <input type="text" id="address" placeholder="123 Main St, City, State 12345" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="details">Service Details *</label>
                            <textarea id="details" rows="4" placeholder="Please describe your garage door issue in detail..." required></textarea>
                        </div>
                    </div>

                    <div class="button-group">
                        <button class="btn btn-primary" onclick="submitEstimate()">
                            \${getSvgIcon('send')}
                            Request Custom Quote
                        </button>
<a href="tel:9895720303" class="btn btn-secondary" style="display: inline-flex; align-items: center; gap: 8px;">
  \${getSvgIcon('phone')}
  <span>Call Now: (989) 572-0303</span>
</a>
                        <button class="btn btn-outline" onclick="resetAndScroll()">
                            Try Again
                        </button>
<div style="text-align: center; color: #888; font-family: 'Lora', serif; opacity: 0.7;">
  <p style="font-size: 1.75rem; font-weight: 700; margin: 0;">EasyEstimate\u2122</p>
  <p style="font-size: 0.75rem; font-weight: 400; margin: 0;">by Isabella Garage Door</p>
</div>

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

            const optionsHtml = currentQuestion.options.map(option => \`
                <button class="option-button" onclick="handleAnswer('\${option.id}', '\${option.next}')">
                    <span>\${option.text}</span>
                    \${getSvgIcon('chevron-right')}
                </button>
            \`).join('');

            document.getElementById('app').innerHTML = \`
                <div class="card">
<img src="/src/photos/easyestimate-logo.webp" alt="Instant online garage door repair quote" loading="lazy" class="badge-img" />

                    <div style="margin-bottom: 24px;">
                        <h2 class="question-title">\${currentQuestion.question}</h2>
                        
                        <div class="options-container">
                            \${optionsHtml}
                        </div>
                    </div>

                    <div class="center-text">
                        <span class="reset-link" onclick="resetAndScroll()">Start Over</span>
<div style="text-align: center; color: #888; font-family: 'Lora', serif; opacity: 0.7;">
  <p style="font-size: 1.75rem; font-weight: 700; margin: 0;">EasyEstimate\u2122</p>
  <p style="font-size: 0.75rem; font-weight: 400; margin: 0;">by Isabella Garage Door</p>
</div>
                    </div>
                </div>
            \`;
        }

        function handleAnswer(optionId, nextStep) {
            answers[currentStep] = optionId;
            currentStep = nextStep;
            
            if (pricing[currentStep]) {
                renderPricing();
            } else if (nextStep.includes('contact-')) {
                renderContactOnly();
            } else {
                renderQuestion();
            }
        }

        function resetTool() {
            currentStep = 'start';
            answers = {};
            contactData = {};
            renderQuestion();
        }

function resetAndScroll() {
    resetTool(); // reset logic
    document.getElementById('estimate-form').scrollIntoView({ behavior: 'smooth' });
}


function submitEstimate() {
    const submitBtn = document.querySelector('.btn-primary');
    const name = document.getElementById('name')?.value || '';
    const phone = document.getElementById('phone')?.value || '';
    const email = document.getElementById('email')?.value || '';
    const address = document.getElementById('address')?.value || '';
    const details = document.getElementById('details')?.value || '';

    // Basic validation
    if (!name || !phone || !address) {
        alert('Please fill in all required fields (marked with *)');
        return;
    }

    // Show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = \`\${getSvgIcon('send')} Submitting... <span class="loading"></span>\`;

    setTimeout(() => {
        const form = document.getElementById('estimateForm');

        // Fill in hidden form fields
        form.querySelector('input[name="name"]').value = name;
        form.querySelector('input[name="phone"]').value = phone;
        form.querySelector('input[name="email"]').value = email;
        form.querySelector('input[name="address"]').value = address;
        form.querySelector('input[name="details"]').value = details;
        form.querySelector('input[name="Service Type"]').value = pricing[currentStep]?.service || 'Custom Quote Request';
        form.querySelector('input[name="Estimated Cost"]').value = pricing[currentStep]?.price || 'Custom Quote';

        // Remove any previously added answer inputs
        Array.from(form.querySelectorAll('input.dynamic-answer')).forEach(el => el.remove());

        // Add custom answers
        Object.entries(answers).forEach(([step, answer]) => {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = \`Selection: \${step}\`;
            input.value = answer;
            input.classList.add('dynamic-answer');
            form.appendChild(input);
        });

        // Submit form
        form.submit();
    }, 1500);
}


        // Initialize the app
        renderQuestion();
    <\/script> `], ['  <link rel="stylesheet" href="/styles/global.css"> <link rel="stylesheet" href="/styles/tools.css"> ', `<img src="/src/photos/new-estimate-image.webp" alt="New garage door intallation in Central Michigan" loading="eager" fetchpriority="high" class="header-photo-interior"> <section> <h1 class="page-title">EasyEstimate\u2122</h1> <h2 class="sub-heading">Fast. Transparent. No Pressure.</h2> <p>Need garage door service but unsure what it\u2019ll cost? With EasyEstimate\u2122, you can get a quick, ballpark quote in under a minute \u2014 no phone call, no hassle.
</p> <div style="margin-left: 1rem;"> <ul class="bullet-list"> <li><i class="fas fa-check icon-bronze"></i><strong> Simple step-by-step tool</strong></li> <li><i class="fas fa-check icon-bronze"></i><strong> Real pricing based on your issue</strong></li> <li><i class="fas fa-check icon-bronze"></i><strong> No commitment required</strong></li> </ul> </div> </section>  <div class="highlight-section"> <p>
When your garage door doesn\u2019t open, your whole day stops. We built EasyEstimate\u2122 to make sure your fix starts quickly \u2014 without wasting time, guessing prices, or getting sold something you don\u2019t need.
</p> </div> <section> <p>Choose your concern and we\u2019ll guide you through a few quick questions to generate an accurate estimate:</p> </section>   <div id="estimate-form" style="position: relative; top: -80px;"></div>  <div id="estimate-app-container"> <!-- Splash Screen (initially visible) --> <div id="estimate-splash" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 250px; gap: 1rem;"> <img src="/src/photos/blue-isabella-garage-door-logo.png" alt="Isabella Garage Door Logo" style="max-width: 280px; opacity: 0.8;"> <div class="lds-ring"><div></div><div></div><div></div><div></div></div> </div> <!-- Your Actual App --> <div id="app" style="display: none;"></div> </div>  <section> <div class="footer-text">
Need immediate help? Call us at
<a href="tel:9895720303" style="color: #b27d57; font-weight: bold; text-decoration: none;">
(989) 572-0303
</a> </div> </section> <section style="margin-top: 3rem;"> <h2 class="sub-heading">Why use EasyEstimate\u2122?</h2> <p>Getting your garage door fixed shouldn\u2019t be stressful or uncertain. EasyEstimate\u2122 was built for homeowners who want:
</p> <div style="margin-left: 1rem;"> <ul class="bullet-list"> <li><i class="fas fa-check icon-bronze"></i><strong> Clarity before commitment</strong> \u2013 Know what to expect</li> <li><i class="fas fa-check icon-bronze"></i><strong> No-pressure pricing</strong> \u2013 No upsells, no surprises</li> <li><i class="fas fa-check icon-bronze"></i><strong> Peace of mind</strong> \u2013 Backed by real experience, not guesswork</li> </ul> </div> </section>   <section id="faq"> <div class="faq-head"> <a href="/resources/faq" style="text-decoration: none; color: inherit; display: block;"> <h2 class="sub-heading" style="margin-bottom: -.5rem;">Frequently Asked Questions</h2> </a> </div> <div class="faq-item"> <div class="faq-question"> <span>Is the estimate I get final?</span> <span class="faq-arrow">&#9654;</span> </div> <div class="faq-answer"> <p>No \u2014 it\u2019s a starting point based on common scenarios. Once we\u2019re on-site, we\u2019ll confirm the exact price before starting any work.</p> </div> </div> <div class="faq-item"> <div class="faq-question"> <span>Can I text you a photo instead?</span> <span class="faq-arrow">&#9654;</span> </div> <div class="faq-answer"> <p>Absolutely. If you're not sure how to answer a question or just want to show us the issue, <a href="sms:+19895720303?&body=Hi! Here's a photo of my garage door problem." style="color: #b27d57;">
Text us
</a> a picture of your garage door issue.</p> </div> </div> <div class="faq-item"> <div class="faq-question"> <span>Is this the same as scheduling a service call?</span> <span class="faq-arrow">&#9654;</span> </div> <div class="faq-answer"> <p>Nope. EasyEstimate\u2122 is free and doesn\u2019t commit you to anything. If you like the quote, you can then choose to book a service call.</p> </div> </div> <div class="faq-item"> <div class="faq-question"> <span>How soon can you come out?</span> <span class="faq-arrow">&#9654;</span> </div> <div class="faq-answer"> <p>It depends on our current schedule, but we do our best to get out quickly. Just give us a call or send a message, and we'll find the soonest spot that works for you.</p> </div> </div> <!--
  <div class="faq-item">
    <div class="faq-question">
      <span>How much does it cost to install a new garage door?</span>
      <span class="faq-arrow">&#9654;</span>
    </div>
    <div class="faq-answer">
      <p>The cost varies depending on the size, material, and style of door you choose. Single garage doors typically range from $900-$2,500, while double doors range from $1,200-$4,000. This includes the door, hardware, and professional installation.</p>
    </div>
  </div>
--> </section> <section style="margin-top: 3rem;"> <h2 class="sub-heading">Ready to Book? Still Have Questions?</h2> <p style="text-align:center;">Use EasyEstimate\u2122 now, or reach out directly. We\u2019re always happy to help.</p> <a href="/contact" class="cta-button margin-bottom-2rem"><i class="fas fa-magnifying-glass"></i> Contact Us</a> </section> <section> <h2 class="sub-heading">Isabella Garage Door</h2> <p style="font-size: .9rem; text-align: center;">Serving Mt. Pleasant \u2022 Clare \u2022 Alma \u2022 Isabella County</p> <p style="font-size: .9rem; text-align: center; margin: 0.5rem;"><em>Raising Performance. Elevating Standards</em></p> </section> <script>
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
<\/script>  <form id="estimateForm" action="https://formsubmit.co/Isabellagaragedoor@gmail.com" method="POST" style="display: none;"> <input type="hidden" name="_subject" value="New Garage Door Service Request"> <input type="hidden" name="name"> <input type="hidden" name="phone"> <input type="hidden" name="email"> <input type="hidden" name="address"> <input type="hidden" name="details"> <input type="hidden" name="Service Type"> <input type="hidden" name="Estimated Cost"> <input type="hidden" name="_next" value="http://isabellagaragedoor.com/thank-you-estimate"> </form> `, " ", ` <script>
        const questions = {
            start: {
                question: "What type of service do you need?",
                options: [
                    { id: 'spring-repair', text: "Broken Spring Repair", next: 'spring-type' },
                    { id: 'opener-repair', text: "Opener Repair/Replacement", next: 'opener-problem' },
                    { id: 'roller-replacement', text: "Roller Replacement", next: 'roller-problem' },
                    { id: 'cable-repair', text: "Cable Off/Replacement", next: 'cable-problem' },
                    { id: 'track-repair', text: "Track Repair", next: 'track-problem' },
                    { id: 'maintenance', text: "Maintenance/Inspection", next: 'maintenance-pricing' }
                ]
            },
            'spring-type': {
                question: "What type of spring system do you have?",
                options: [
                    { id: 'torsion', text: "Torsion Springs (above door)", next: 'spring-count-torsion' },
                    { id: 'extension', text: "Extension Springs (sides)", next: 'spring-count-extension' },
                    { id: 'not-sure', text: "Not sure / Other", next: 'contact-spring-unknown' }
                ]
            },
            'spring-count-torsion': {
                question: "How many torsion springs need replacement?",
                options: [
                    { id: 'torsion-1', text: "1 spring", next: 'pricing-torsion-1' },
                    { id: 'torsion-2', text: "2 springs (recommended)", next: 'pricing-torsion-2' },
                    { id: 'torsion-4', text: "4 springs", next: 'contact-torsion-4' }
                ]
            },
            'spring-count-extension': {
                question: "How many extension springs need replacement?",
                options: [
                    { id: 'extension-1', text: "1 spring", next: 'pricing-extension-1' },
                    { id: 'extension-2', text: "2 springs (recommended)", next: 'pricing-extension-2' },
                    { id: 'extension-4', text: "4 springs", next: 'contact-extension-4' }
                ]
            },
            'opener-problem': {
                question: "What's happening with your opener?",
                options: [
                    { id: 'remote-issue', text: "Wall button or remote not working", next: 'pricing-remote' },
                    { id: 'motor-runs', text: "Motor runs but won't move door", next: 'pricing-motor' },
                    { id: 'wont-open', text: "Door won't open or close", next: 'pricing-open-close' },
                    { id: 'light-flashing', text: "Opener light flashing/blinking", next: 'pricing-light' },
                    { id: 'replacement', text: "Need complete opener replacement", next: 'pricing-replacement' }
                ]
            },
            'roller-problem': {
                question: "What's wrong with your rollers?",
                options: [
                    { id: 'loud-squeaky', text: "Loud or squeaky operation", next: 'roller-count' },
                    { id: 'jerky-uneven', text: "Door moves jerky/uneven", next: 'pricing-jerky' },
                    { id: 'visible-wear', text: "Visible wear or damage", next: 'pricing-wear' },
                    { id: 'off-track', text: "Rollers came off track", next: 'pricing-off-track' }
                ]
            },
            'roller-count': {
                question: "How many rollers does your door have?",
                options: [
                    { id: 'few-rollers', text: "1-2 rollers", next: 'pricing-few-rollers' },
                    { id: 'single-door', text: "10 rollers (standard single)", next: 'pricing-single-door' },
                    { id: 'double-door', text: "12 rollers (standard double)", next: 'pricing-double-door' },
                    { id: 'roller-other', text: "Other/Not sure", next: 'contact-roller-other' }
                ]
            },
            'cable-problem': {
                question: "What's the cable issue?",
                options: [
                    { id: 'frayed-broken', text: "Frayed or broken cable", next: 'pricing-frayed' },
                    { id: 'rusty-corroded', text: "Rusty or corroded cable", next: 'pricing-rusty' },
                    { id: 'off-drum', text: "Cable came off the drum", next: 'pricing-off-drum' },
                    { id: 'door-uneven', text: "Door is uneven/crooked", next: 'pricing-uneven' }
                ]
            },
            'track-problem': {
                question: "What's wrong with the track?",
                options: [
                    { id: 'bent-damaged', text: "Bent or damaged track", next: 'pricing-bent' },
                    { id: 'rubbing', text: "Door is rubbing against track", next: 'pricing-rubbing' },
                    { id: 'completely-off', text: "Door is completely off track", next: 'pricing-completely-off' }
                ]
            }
        };

        const pricing = {
            'pricing-torsion-1': { price: '$325 - $395', service: 'Torsion Spring Repair (1 spring)' },
            'pricing-torsion-2': { price: '$395 - $525', service: 'Torsion Spring Repair (2 springs)' },
            'pricing-extension-1': { price: '$250 - $350', service: 'Extension Spring Repair (1 spring)' },
            'pricing-extension-2': { price: '$275 - $375', service: 'Extension Spring Repair (2 springs)' },
            'pricing-remote': { price: '$150 - $250', service: 'Remote/Wall Button Repair' },
            'pricing-motor': { price: '$150 - $350', service: 'Motor Drive Repair' },
            'pricing-open-close': { price: '$150 - $450', service: 'Opener Operation Repair' },
            'pricing-light': { price: '$150 - $200', service: 'Opener Diagnostic & Repair' },
            'pricing-replacement': { price: '$495 - $750', service: 'Complete Opener Replacement' },
            'pricing-few-rollers': { price: '$130 - $170', service: 'Roller Replacement (1-2 rollers)' },
            'pricing-single-door': { price: '$160 - $200', service: 'Roller Replacement (Single Door)' },
            'pricing-double-door': { price: '$160 - $200', service: 'Roller Replacement (Double Door)' },
            'pricing-jerky': { price: '$150 - $200', service: 'Roller Repair (Movement Issues)' },
            'pricing-wear': { price: '$165 - $200', service: 'Roller Replacement (Worn)' },
            'pricing-off-track': { price: '$150 - $500', service: 'Roller & Track Realignment' },
            'pricing-frayed': { price: '$160 - $200', service: 'Cable Replacement (Frayed)' },
            'pricing-rusty': { price: '$160 - $200', service: 'Cable Replacement (Corroded)' },
            'pricing-off-drum': { price: '$140 - $200', service: 'Cable Reattachment & Repair' },
            'pricing-uneven': { price: '$120 - $300', service: 'Cable & Balance Adjustment' },
            'pricing-bent': { price: '$250 - $375', service: 'Track Repair (Bent/Damaged)' },
            'pricing-rubbing': { price: '$150 - $250', service: 'Track Alignment' },
            'pricing-completely-off': { price: '$300 - $600', service: 'Track Realignment (Emergency)' },
            'maintenance-pricing': { price: '$120 - $150', service: 'Maintenance & Inspection' }
        };

        let currentStep = 'start';
        let answers = {};
        let contactData = {};

        function getSvgIcon(type, className = '') {
            const icons = {
                'dollar-sign': \\\`<svg class="solution-icon \\\${className}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path></svg>\\\`,
                'chevron-right': \\\`<svg class="chevron" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>\\\`,
                'phone': \\\`<svg class="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>\\\`,
                'calendar': \\\`<svg class="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>\\\`,
                'send': \\\`<svg class="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>\\\`
            };
            return icons[type] || '';
        }

        function renderPricing() {
            const priceData = pricing[currentStep];
            if (!priceData) return;

            document.getElementById('app').innerHTML = \\\`
                <div class="solution-card-estimate">
<img src="/src/photos/easyestimate-logo.webp" alt="Instant online garage door repair quote" loading="lazy" class="badge-img" />
<div style="background: transparent; height: 1rem;"></div>
                    <div class="solution-header">
                        \\\${getSvgIcon('dollar-sign')}
                        <h2 class="solution-title">Service Estimate</h2>
                    </div>

                    <div class="price-display">
                        <div class="price-label">\\\${priceData.service}</div>
                        <div class="price-range">\\\${priceData.price}</div>
                    </div>

                    <div class="callout">
                        <p class="callout-text">
                            <strong>Next Step:</strong> Fill out your contact information below to schedule your service appointment.
                        </p>
                    </div>

                    <div class="steps-section">
                        <h3 class="steps-title">Contact Information</h3>
                        
                        <div class="form-row">
                            <div class="form-group">
                                <label for="name">Full Name *</label>
                                <input type="text" id="name" placeholder="Enter your name" required>
                            </div>
                            <div class="form-group">
                                <label for="phone">Phone Number *</label>
                                <input type="tel" id="phone" placeholder="(555) 123-4567" required>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label for="email">Email Address</label>
                            <input type="email" id="email" placeholder="your.email@example.com">
                        </div>
                        
                        <div class="form-group">
                            <label for="address">Service Address *</label>
                            <input type="text" id="address" placeholder="123 Main St, City, State 12345" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="details">Additional Details</label>
                            <textarea id="details" rows="4" placeholder="Any additional information about your garage door issue..."></textarea>
                        </div>
                    </div>

                    <div class="button-group">
                        <button class="btn btn-primary" onclick="submitEstimate()">
                            \\\${getSvgIcon('send')}
                            Submit Service Request
                        </button>
<a href="tel:9895720303" class="btn btn-secondary" style="display: inline-flex; align-items: center; gap: 8px;">
  \\\${getSvgIcon('phone')}
  <span>Call Now: (989) 572-0303</span>
</a>
                        <button class="btn btn-outline" onclick="resetAndScroll()">
                            Try Again
                        </button>
<div style="text-align: center; color: #888; font-family: 'Lora', serif; opacity: 0.7;">
  <p style="font-size: 1.75rem; font-weight: 700; margin: 0;">EasyEstimate\u2122</p>
  <p style="font-size: 0.75rem; font-weight: 400; margin: 0;">by Isabella Garage Door</p>
</div>
                    </div>
                </div>

                <div class="center-text" style="margin-top: 32px;">
                    <p style="font-size: 0.875rem; color: #1a334f;">
                        Isabella Garage Door - Serving Central Michigan with expert garage door repair and installation
                    </p>
                </div>
            \\\`;
        }

        function renderContactOnly() {
            document.getElementById('app').innerHTML = \\\`
                <div class="solution-card-estimate">
<img src="/src/photos/easyestimate-logo.webp" alt="instant online garage door repair quote" loading="lazy" class="badge-img" />
<div style="background: transparent; height: 1rem;"></div>
                    <div class="solution-header">
                        \\\${getSvgIcon('dollar-sign')}
                        <h2 class="solution-title">Contact for Estimate</h2>
                    </div>

                    <div class="callout">
                        <p class="callout-text">
                            <strong>Custom Quote Required:</strong> This service requires a personalized estimate based on your specific situation. Please provide your contact information and we'll get back to you with pricing.
                        </p>
                    </div>

                    <div class="steps-section">
                        <h3 class="steps-title">Contact Information</h3>
                        
                        <div class="form-row">
                            <div class="form-group">
                                <label for="name">Full Name *</label>
                                <input type="text" id="name" placeholder="Enter your name" required>
                            </div>
                            <div class="form-group">
                                <label for="phone">Phone Number *</label>
                                <input type="tel" id="phone" placeholder="(555) 123-4567" required>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label for="email">Email Address</label>
                            <input type="email" id="email" placeholder="your.email@example.com">
                        </div>
                        
                        <div class="form-group">
                            <label for="address">Service Address *</label>
                            <input type="text" id="address" placeholder="123 Main St, City, State 12345" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="details">Service Details *</label>
                            <textarea id="details" rows="4" placeholder="Please describe your garage door issue in detail..." required></textarea>
                        </div>
                    </div>

                    <div class="button-group">
                        <button class="btn btn-primary" onclick="submitEstimate()">
                            \\\${getSvgIcon('send')}
                            Request Custom Quote
                        </button>
<a href="tel:9895720303" class="btn btn-secondary" style="display: inline-flex; align-items: center; gap: 8px;">
  \\\${getSvgIcon('phone')}
  <span>Call Now: (989) 572-0303</span>
</a>
                        <button class="btn btn-outline" onclick="resetAndScroll()">
                            Try Again
                        </button>
<div style="text-align: center; color: #888; font-family: 'Lora', serif; opacity: 0.7;">
  <p style="font-size: 1.75rem; font-weight: 700; margin: 0;">EasyEstimate\u2122</p>
  <p style="font-size: 0.75rem; font-weight: 400; margin: 0;">by Isabella Garage Door</p>
</div>

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

            const optionsHtml = currentQuestion.options.map(option => \\\`
                <button class="option-button" onclick="handleAnswer('\\\${option.id}', '\\\${option.next}')">
                    <span>\\\${option.text}</span>
                    \\\${getSvgIcon('chevron-right')}
                </button>
            \\\`).join('');

            document.getElementById('app').innerHTML = \\\`
                <div class="card">
<img src="/src/photos/easyestimate-logo.webp" alt="Instant online garage door repair quote" loading="lazy" class="badge-img" />

                    <div style="margin-bottom: 24px;">
                        <h2 class="question-title">\\\${currentQuestion.question}</h2>
                        
                        <div class="options-container">
                            \\\${optionsHtml}
                        </div>
                    </div>

                    <div class="center-text">
                        <span class="reset-link" onclick="resetAndScroll()">Start Over</span>
<div style="text-align: center; color: #888; font-family: 'Lora', serif; opacity: 0.7;">
  <p style="font-size: 1.75rem; font-weight: 700; margin: 0;">EasyEstimate\u2122</p>
  <p style="font-size: 0.75rem; font-weight: 400; margin: 0;">by Isabella Garage Door</p>
</div>
                    </div>
                </div>
            \\\`;
        }

        function handleAnswer(optionId, nextStep) {
            answers[currentStep] = optionId;
            currentStep = nextStep;
            
            if (pricing[currentStep]) {
                renderPricing();
            } else if (nextStep.includes('contact-')) {
                renderContactOnly();
            } else {
                renderQuestion();
            }
        }

        function resetTool() {
            currentStep = 'start';
            answers = {};
            contactData = {};
            renderQuestion();
        }

function resetAndScroll() {
    resetTool(); // reset logic
    document.getElementById('estimate-form').scrollIntoView({ behavior: 'smooth' });
}


function submitEstimate() {
    const submitBtn = document.querySelector('.btn-primary');
    const name = document.getElementById('name')?.value || '';
    const phone = document.getElementById('phone')?.value || '';
    const email = document.getElementById('email')?.value || '';
    const address = document.getElementById('address')?.value || '';
    const details = document.getElementById('details')?.value || '';

    // Basic validation
    if (!name || !phone || !address) {
        alert('Please fill in all required fields (marked with *)');
        return;
    }

    // Show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = \\\`\\\${getSvgIcon('send')} Submitting... <span class="loading"></span>\\\`;

    setTimeout(() => {
        const form = document.getElementById('estimateForm');

        // Fill in hidden form fields
        form.querySelector('input[name="name"]').value = name;
        form.querySelector('input[name="phone"]').value = phone;
        form.querySelector('input[name="email"]').value = email;
        form.querySelector('input[name="address"]').value = address;
        form.querySelector('input[name="details"]').value = details;
        form.querySelector('input[name="Service Type"]').value = pricing[currentStep]?.service || 'Custom Quote Request';
        form.querySelector('input[name="Estimated Cost"]').value = pricing[currentStep]?.price || 'Custom Quote';

        // Remove any previously added answer inputs
        Array.from(form.querySelectorAll('input.dynamic-answer')).forEach(el => el.remove());

        // Add custom answers
        Object.entries(answers).forEach(([step, answer]) => {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = \\\`Selection: \\\${step}\\\`;
            input.value = answer;
            input.classList.add('dynamic-answer');
            form.appendChild(input);
        });

        // Submit form
        form.submit();
    }, 1500);
}


        // Initialize the app
        renderQuestion();
    <\/script> `])), maybeRenderHead(), renderScript($$result2, "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/homeowner-tools/easy-estimate.astro?astro&type=script&index=0&lang.ts"), renderScript($$result2, "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/homeowner-tools/easy-estimate.astro?astro&type=script&index=1&lang.ts")), "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_b || (_b = __template([' <script type="application/ld+json">', "<\/script> "])), unescapeHTML(JSON.stringify(estimateSchema))) })}` })}`;
}, "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/homeowner-tools/easy-estimate.astro", void 0);

const $$file = "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/homeowner-tools/easy-estimate.astro";
const $$url = "/homeowner-tools/easy-estimate";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$EasyEstimate,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
