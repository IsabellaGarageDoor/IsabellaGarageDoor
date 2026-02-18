/* empty css                                                                   */
import { a as createComponent, g as renderComponent, r as renderTemplate, F as Fragment, u as unescapeHTML, b as renderScript, m as maybeRenderHead } from '../../chunks/astro/server_xoD-kxEp.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_B24roKEI.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a, _b;
const $$DoorDiagnosis = createComponent(($$result, $$props, $$slots) => {
  const title = "DoorDiagnosis\u2122 | Isabella Garage Door";
  const description = "If you\u2019re having trouble with your garage door and need help narrowing down the issue, give our free Troubleshooting Tool a try!";
  const diagnosisSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "DoorDiagnosis\u2122",
        "applicationCategory": "EducationalApplication",
        "operatingSystem": "Web",
        "description": "An interactive diagnostic tool designed to help homeowners troubleshoot garage door issues and identify necessary repairs.",
        "author": {
          "@id": "https://isabellagaragedoor.com/#business"
        }
      },
      {
        "@type": "Service",
        "name": "Garage Door Troubleshooting",
        "serviceType": "Diagnostic Service",
        "provider": {
          "@id": "https://isabellagaragedoor.com/#business"
        },
        "description": "Professional guidance and interactive troubleshooting for garage door hardware, springs, and opener malfunctions."
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(['  <link rel="stylesheet" href="/styles/tools.css"> <link rel="stylesheet" href="/styles/tools.css">  ', `<section> <img src="/photos/Troubleshooting-garage-door-problems (1).webp" alt="Frustrated man trying to fix his garage door" loading="eager" fetchpriority="high" class="header-photo-interior"> </section>  <section> <h1 class="page-title">DoorDiagnosis\u2122</h1> <h2 class="sub-heading">Something\u2019s off? Let\u2019s figure it out \u2014 fast.</h2> <p>
Before you call for help, try DoorDiagnosis\u2122. This free interactive tool helps you pinpoint what\u2019s wrong with your garage door \u2014 and whether it\u2019s something you can safely fix yourself.
</p> <div style="margin-left: 1rem; margin-top: 1rem;"> <ul class="bullet-list"> <li><i class="fas fa-check icon-bronze"></i><strong> Step-by-step guidance</strong></li> <li><i class="fas fa-check icon-bronze"></i><strong> See the most likely cause</strong></li> <li><i class="fas fa-check icon-bronze"></i><strong> Know when it\u2019s time to call in a pro</strong></li> </ul> </div> </section>  <div class="highlight-section"> <p>
A garage door problem can feel like a full stop in your day. DoorDiagnosis\u2122 helps turn that moment into a clear next step \u2014 no guessing, no pressure.
</p> </div> <section> <p>Choose the symptoms of your garage door problem and we\u2019ll guide you through a few quick questions to generate an accurate diagnosis:</p> </section>  <section> <div id="troubleshooting" style="position: relative; top: -80px;"></div></section>  <div id="estimate-app-container"> <!-- Splash Screen (initially visible) --> <div id="estimate-splash" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 250px; gap: 1rem;"> <img src="/photos/blue-isabella-garage-door-logo.png" alt="Isabella Garage Door Logo" style="max-width: 280px; opacity: 0.8;"> <div class="lds-ring"><div></div><div></div><div></div><div></div></div> </div> <!-- Your Actual App --> <div id="app" style="display: none;"></div> </div>  <section> <div class="footer-text">
Need immediate help? Call us at
<a href="tel:9895720303" style="color: #b27d57; font-weight: bold; text-decoration: none;">
(989) 572-0303
</a> </div> </section> <section style="margin-top: 3rem;"> <h2 class="sub-heading">How DoorDiagnosis\u2122 helps</h2> <p>Not every garage door issue needs a service call \u2014 and not every online fix is safe. DoorDiagnosis\u2122 helps you:
</p> <div style="margin-left: 1rem; margin-top: 1rem;"> <ul class="bullet-list"> <li><i class="fas fa-check icon-bronze"></i><strong> Rule out simple, common issues</strong> \u2013 like sensors or batteries</li> <li><i class="fas fa-check icon-bronze"></i><strong> Identify signs of bigger problems</strong> \u2013 like broken springs or cables</li> <li><i class="fas fa-check icon-bronze"></i><strong> Avoid dangerous DIY mistakes</strong> \u2013 especially with high-tension parts</li> </ul> </div> </section>   <section id="faq"> <div class="faq-head"> <a href="/resources/faq" style="text-decoration: none; color: inherit; display: block;"> <h2 class="sub-heading" style="margin-bottom: -.5rem;">Frequently Asked Questions</h2> </a> </div> <div class="faq-item"> <div class="faq-question"> <span>Can I really fix it myself?</span> <span class="faq-arrow">&#9654;</span> </div> <div class="faq-answer"> <p>Sometimes, yes \u2014 especially if it\u2019s a sensor issue, battery, or remote setting. But anything involving springs, cables, or door alignment should only be handled by a trained tech.</p> </div> </div> <div class="faq-item"> <div class="faq-question"> <span>Is it dangerous to keep using a faulty door?</span> <span class="faq-arrow">&#9654;</span> </div> <div class="faq-answer"> <p>It can be. Broken springs or cables can cause serious injury or property damage. DoorDiagnosis\u2122 will flag any safety risks so you know when to stop using the door.</p> </div> </div> <div class="faq-item"> <div class="faq-question"> <span>Do I have to call to get help?</span> <span class="faq-arrow">&#9654;</span> </div> <div class="faq-answer"> <p>Nope. If you decide you want service, you can <a href="sms:+19895720303?&body=Hi! Here's a photo of my garage door problem." style="color: #b27d57;">
Text us
</a>, request an appointment <a href="/contact" style="color: #b27d57;">
online
</a>, or use our <a href="/homeowner-tools/easy-estimate#estimate-form" style="color: #b27d57;">
EasyEstimate\u2122
</a> tool for a quick estimate.</p> </div> </div> <div class="faq-item"> <div class="faq-question"> <span>I just moved in and don\u2019t know what\u2019s wrong. Can this still help?</span> <span class="faq-arrow">&#9654;</span> </div> <div class="faq-answer"> <p>Definitely. Just answer what you see, even if you\u2019re unsure. We built this tool to help homeowners with zero garage door experience.</p> </div> </div> </section> <section style="margin-top: 3rem;"> <h2 class="sub-heading">When you're ready, we\u2019re here.</h2> <p style="text-align:center;">Whether you\u2019re dealing with a minor glitch or a serious breakdown, we\u2019ll give you clear answers, upfront pricing, and honest help \u2014 every time.</p> <a href="/homeowner-tools/easy-estimate#estimate-form" class="testimonials-cta-button" style="margin-top: 3rem;"> <i class="fas fa-tools"></i> Get a Repair Estimate
</a> <a href="/contact" class="cta-button" style="margin-bottom: 2rem;"> <i class="fas fa-calendar-check"></i> Request Service
</a> </section> <section> <h2 class="sub-heading">Isabella Garage Door</h2> <p style="font-size: .9rem; text-align: center;">Serving Mt. Pleasant \u2022 Clare \u2022 Alma \u2022 all of Central Michigan</p> <p style="font-size: .9rem; text-align: center; margin: 0.5rem;"><em>Raising Performance. Elevating Standards</em></p> </section> `, " <script>\ndocument.querySelectorAll('.faq-item').forEach(item => {\n  const question = item.querySelector('.faq-question');\n  const answer = item.querySelector('.faq-answer');\n\n  question.addEventListener('click', () => {\n    const isOpen = item.classList.contains('open');\n\n    // Close all\n    document.querySelectorAll('.faq-item').forEach(i => {\n      i.classList.remove('open');\n      i.querySelector('.faq-answer').style.maxHeight = null;\n    });\n    if (!isOpen) {\n      item.classList.add('open');\n      answer.style.maxHeight = answer.scrollHeight + 'px';\n    }\n  });\n});\n<\/script> ", `  <script>
        const questions = {
            start: {
                question: "What's the main issue with your garage door?",
                options: [
                    { id: 'wont-open', text: "Door won't open at all", next: 'power-check' },
                    { id: 'wont-close', text: "Door won't close completely", next: 'obstruction-check' },
                    { id: 'noisy', text: "Door is making strange noises", next: 'noise-type' },
                    { id: 'slow-jerky', text: "Door moves slowly or jerky", next: 'movement-issues' },
                    { id: 'remote-issues', text: "Remote/opener not working", next: 'remote-check' },
                    { id: 'off-track', text: "Door appears crooked/off track", next: 'safety-warning' }
                ]
            },
            'power-check': {
                question: "Is your garage door opener getting power?",
                options: [
                    { id: 'no-power', text: "No lights/display on opener", next: 'power-solution' },
                    { id: 'has-power', text: "Opener has power/lights on", next: 'manual-test' }
                ]
            },
            'manual-test': {
                question: "Can you lift the door manually (with opener disconnected)?",
                options: [
                    { id: 'manual-easy', text: "Yes, lifts easily by hand", next: 'opener-problem' },
                    { id: 'manual-heavy', text: "Very heavy or won't lift", next: 'spring-problem' }
                ]
            },
            'obstruction-check': {
                question: "Do you see anything blocking the door's path?",
                options: [
                    { id: 'clear-path', text: "Path is completely clear", next: 'sensor-check' },
                    { id: 'obstruction', text: "Something is in the way", next: 'clear-obstruction' }
                ]
            },
            'sensor-check': {
                question: "Are the safety sensors at the bottom aligned and clean?",
                options: [
                    { id: 'sensors-good', text: "Sensors look aligned and clean", next: 'force-settings' },
                    { id: 'sensors-issue', text: "Sensors are dirty/misaligned", next: 'sensor-solution' }
                ]
            },
            'noise-type': {
                question: "What type of noise is your door making?",
                options: [
                    { id: 'grinding', text: "Grinding or scraping sounds", next: 'grinding-solution' },
                    { id: 'squealing', text: "Squealing or screeching", next: 'lubrication-needed' },
                    { id: 'banging', text: "Loud banging or popping", next: 'spring-noise' },
                    { id: 'rattling', text: "Rattling or vibrating", next: 'hardware-loose' }
                ]
            },
            'movement-issues': {
                question: "How would you describe the door's movement?",
                options: [
                    { id: 'jerky-stop', text: "Starts and stops, jerky motion", next: 'track-alignment' },
                    { id: 'very-slow', text: "Moves very slowly", next: 'opener-strain' },
                    { id: 'shakes', text: "Shakes or vibrates while moving", next: 'balance-issue' }
                ]
            },
            'remote-check': {
                question: "Have you tried replacing the remote battery?",
                options: [
                    { id: 'battery-tried', text: "Yes, tried new battery", next: 'remote-programming' },
                    { id: 'battery-not-tried', text: "No, haven't tried that yet", next: 'battery-solution' }
                ]
            }
        };

        const solutions = {
            'power-solution': {
                severity: 'easy',
                title: "Check Your Power Source",
                steps: [
                    "Check if the outlet has power (try plugging in something else)",
                    "Look for a tripped circuit breaker in your electrical panel",
                    "Ensure the opener is plugged in securely",
                    "Check for a reset button on the opener motor"
                ],
                callout: "If power issues persist, you may have a wiring problem that needs professional attention."
            },
            'opener-problem': {
                severity: 'moderate',
                title: "Opener Motor Issue",
                steps: [
                    "Check if the emergency release cord was pulled",
                    "Re-engage the opener by pulling the trolley cord toward the door",
                    "Try operating with the wall button instead of remote"
                ],
                callout: "If the opener still won't work, the motor or circuit board likely needs professional diagnosis."
            },
            'spring-problem': {
                severity: 'emergency',
                title: "\u26A0\uFE0F Broken Spring - DO NOT OPERATE",
                steps: [
                    "STOP using the door immediately",
                    "Do not attempt to lift manually",
                    "Keep people and pets away from the door",
                    "This requires immediate professional repair"
                ],
                callout: "Garage door springs are dangerous and can cause serious injury. This needs same-day professional service."
            },
            'clear-obstruction': {
                severity: 'easy',
                title: "Clear the Obstruction",
                steps: [
                    "Remove any objects from the door's path",
                    "Check for ice buildup in winter",
                    "Clear debris from the tracks",
                    "Test the door operation"
                ],
                callout: "If the door still won't close after clearing obstructions, check the safety sensors."
            },
            'sensor-solution': {
                severity: 'easy',
                title: "Fix Safety Sensors",
                steps: [
                    "Clean sensor lenses with a soft cloth",
                    "Align sensors so they face each other directly",
                    "Check for loose mounting brackets",
                    "Ensure no sunlight is hitting the sensors directly"
                ],
                callout: "Sensors should have solid lights when properly aligned. Blinking lights indicate a problem."
            },
            'grinding-solution': {
                severity: 'urgent',
                title: "Grinding Sounds - Stop Use",
                steps: [
                    "Stop operating the door immediately",
                    "This usually indicates worn rollers or track damage",
                    "Continued use can cause expensive damage",
                    "Schedule professional inspection within 24-48 hours"
                ],
                callout: "Grinding sounds often mean metal is wearing against metal. Quick action prevents costly repairs."
            },
            'lubrication-needed': {
                severity: 'easy',
                title: "Lubrication Required",
                steps: [
                    "Apply white lithium grease or silicone lubricant to hinges and rollers",
                    "Spray chain or screw drive with appropriate lubricant",
                    "Avoid WD-40 - use proper garage door lubricant",
                    "Test operation after lubrication"
                ],
                callout: "Regular lubrication every 6 months prevents most noise issues and extends door life."
            },
            'spring-noise': {
                severity: 'urgent',
                title: "Spring System Issue",
                steps: [
                    "Stop using the door if noise is very loud",
                    "Banging/popping often indicates spring problems",
                    "Visual inspection: look for gaps in springs",
                    "Schedule professional service soon"
                ],
                callout: "Spring noises often precede complete failure. Don't wait for a breakdown."
            },
            'battery-solution': {
                severity: 'easy',
                title: "Replace Remote Battery",
                steps: [
                    "Open your remote control",
                    "Replace with fresh battery (usually 12V or 9V)",
                    "Test the remote from different distances",
                    "If multiple remotes stopped working, check the opener antenna"
                ],
                callout: "Remote batteries typically last 1-2 years depending on usage."
            },
            'force-settings': {
                severity: 'moderate',
                title: "Opener Force Adjustment",
                steps: [
                    "Your opener's close-force may be set too low",
                    "This is a safety feature but may need adjustment",
                    "Check your owner's manual for adjustment screws",
                    "Consider professional calibration for safety"
                ],
                callout: "Improper force settings can be dangerous. Professional adjustment ensures safety and proper operation."
            },
            'safety-warning': {
                severity: 'emergency',
                title: "\u26A0\uFE0F OFF-TRACK DOOR - DANGER",
                steps: [
                    "STOP using the door immediately",
                    "Do not attempt to operate or fix yourself",
                    "Keep people and pets away from the door area",
                    "An off-track door can fall and cause serious injury"
                ],
                callout: "Off-track doors are extremely dangerous and can fall without warning. This requires immediate professional service."
            },
            'track-alignment': {
                severity: 'urgent',
                title: "Track Alignment Issue",
                steps: [
                    "Stop using the door until inspected",
                    "Check for bent or damaged track sections",
                    "Look for loose mounting brackets",
                    "Do not attempt to bend tracks yourself"
                ],
                callout: "Track problems can cause the door to bind or fall off completely. Professional alignment is essential for safety."
            },
            'opener-strain': {
                severity: 'moderate',
                title: "Opener Working Too Hard",
                steps: [
                    "Check if the door is properly balanced",
                    "Disconnect opener and test manual operation",
                    "Look for worn rollers or damaged tracks",
                    "The opener may need recalibration"
                ],
                callout: "When openers work harder than normal, it usually indicates the door system needs adjustment or repair."
            },
            'balance-issue': {
                severity: 'urgent',
                title: "Door Balance Problem",
                steps: [
                    "Disconnect the opener and test manual operation",
                    "A balanced door should stay in place when lifted halfway",
                    "If it falls or shoots up, springs need adjustment",
                    "Do not attempt spring adjustment yourself"
                ],
                callout: "Unbalanced doors put excessive strain on openers and can be dangerous. Spring adjustment requires professional tools and expertise."
            },
            'remote-programming': {
                severity: 'moderate',
                title: "Remote Programming Issue",
                steps: [
                    "Try reprogramming the remote to the opener",
                    "Check your opener manual for programming steps",
                    "Test with the wall button to confirm opener works",
                    "Multiple remote failures may indicate receiver problems"
                ],
                callout: "If reprogramming doesn't work, the remote or opener's receiver may need replacement."
            },
            'hardware-loose': {
                severity: 'easy',
                title: "Loose Hardware",
                steps: [
                    "Check and tighten all visible bolts and screws",
                    "Pay attention to track mounting brackets",
                    "Inspect roller brackets and hinges",
                    "Use appropriate tools - don't over-tighten"
                ],
                callout: "Regular hardware inspection prevents small problems from becoming major repairs. Check every 6 months."
            }
        };

        let currentStep = 'start';
        let answers = {};

        function getSvgIcon(type, className = '') {
            const icons = {
                'alert-triangle': \`<svg class="solution-icon \${className}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.232 15.5c-.77.833.192 2.5 1.732 2.5z"></path></svg>\`,
                'clock': \`<svg class="solution-icon \${className}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>\`,
                'wrench': \`<svg class="solution-icon \${className}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4"></path></svg>\`,
                'check-circle': \`<svg class="solution-icon \${className}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>\`,
                'chevron-right': \`<svg class="chevron" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>\`,
                'phone': \`<svg class="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>\`,
                'calendar': \`<svg class="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>\`
            };
            return icons[type] || '';
        }

        function renderSolution() {
            const lastAnswer = Object.values(answers).pop();
            const solution = solutions[lastAnswer] || solutions[currentStep];
            
            if (!solution) return;

            let iconHtml = '';
            if (solution.severity === 'emergency') iconHtml = getSvgIcon('alert-triangle', 'emergency');
            else if (solution.severity === 'urgent') iconHtml = getSvgIcon('clock', 'urgent');
            else if (solution.severity === 'moderate') iconHtml = getSvgIcon('wrench', 'moderate');
            else if (solution.severity === 'easy') iconHtml = getSvgIcon('check-circle', 'easy');

            const stepsHtml = solution.steps.map((step, index) => \`
                <li class="step-item">
                    <span class="step-number">\${index + 1}</span>
                    <span class="step-text">\${step}</span>
                </li>
            \`).join('');

            let buttonsHtml = '';
            if (solution.severity === 'emergency' || solution.severity === 'urgent') {
                buttonsHtml += \`
<a href="tel:9895720303" class="btn btn-primary" style="display: inline-flex; align-items: center; gap: 8px;">
  \${getSvgIcon('phone')}
  <span>Call Now: (989) 572-0303</span>
</a>

                \`;
            }
            
            buttonsHtml += \`
<a href="/contact" class="btn btn-secondary" style="display: inline-flex; align-items: center; gap: 8px;">
  \${getSvgIcon('calendar')}
  <span>Schedule Service</span>
</a>

                <button class="btn btn-outline" onclick="resetAndScroll()">
                    Try Again
                </button>
            \`;

            document.getElementById('app').innerHTML = \`
                <div class="solution-card \${solution.severity}">
<img src="/photos/doordiagnosis-logo.webp" alt="Garage door troubleshooting tool" loading="lazy" class="badge-img" />
                    <div class="solution-header">
                        \${iconHtml}
                        <h2 class="solution-title">\${solution.title}</h2>
                    </div>

                    <div class="steps-section">
                        <h3 class="steps-title">What to do:</h3>
                        <ol class="steps-list">
                            \${stepsHtml}
                        </ol>
                    </div>

                    <div class="callout \${solution.severity}">
                        <p class="callout-text">
                            <strong>Important:</strong> \${solution.callout}
                        </p>
                    </div>

                    <div class="button-group">
                        \${buttonsHtml}
                    </div>
<div style="text-align: center; color: #888; font-family: 'Lora', serif; opacity: 0.7; margin-top: 1rem;">
  <p style="font-size: 1.75rem; font-weight: 700; margin: 0;">DoorDiagnosis\u2122</p>
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

            const optionsHtml = currentQuestion.options.map(option => \`
                <button class="option-button" onclick="handleAnswer('\${option.id}', '\${option.next}')">
                    <span>\${option.text}</span>
                    \${getSvgIcon('chevron-right')}
                </button>
            \`).join('');

            document.getElementById('app').innerHTML = \`
                <div class="card">
<img src="/photos/doordiagnosis-logo.webp" alt="Garage door troubleshooting tool" loading="lazy" class="badge-img" />
                    <div style="margin-bottom: 24px;">
                        <h2 class="question-title">\${currentQuestion.question}</h2>
                        
                        <div class="options-container">
                            \${optionsHtml}
                        </div>
                    </div>

                    <div class="center-text">
                        <span class="reset-link" onclick="resetAndScroll()">Start Over</span>
<div style="text-align: center; color: #888; font-family: 'Lora', serif; opacity: 0.7;">
  <p style="font-size: 1.75rem; font-weight: 700; margin: 0;">DoorDiagnosis\u2122</p>
  <p style="font-size: 0.75rem; font-weight: 400; margin: 0;">by Isabella Garage Door</p>
</div>
                    </div>
                </div>
            \`;
        }

        function handleAnswer(optionId, nextStep) {
            answers[currentStep] = optionId;
            currentStep = nextStep;
            
            if (solutions[currentStep]) {
                renderSolution();
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
    document.getElementById('troubleshooting').scrollIntoView({ behavior: 'smooth' });
}


        // Initialize the app
        renderQuestion();
    <\/script> `], ['  <link rel="stylesheet" href="/styles/tools.css"> <link rel="stylesheet" href="/styles/tools.css">  ', `<section> <img src="/photos/Troubleshooting-garage-door-problems (1).webp" alt="Frustrated man trying to fix his garage door" loading="eager" fetchpriority="high" class="header-photo-interior"> </section>  <section> <h1 class="page-title">DoorDiagnosis\u2122</h1> <h2 class="sub-heading">Something\u2019s off? Let\u2019s figure it out \u2014 fast.</h2> <p>
Before you call for help, try DoorDiagnosis\u2122. This free interactive tool helps you pinpoint what\u2019s wrong with your garage door \u2014 and whether it\u2019s something you can safely fix yourself.
</p> <div style="margin-left: 1rem; margin-top: 1rem;"> <ul class="bullet-list"> <li><i class="fas fa-check icon-bronze"></i><strong> Step-by-step guidance</strong></li> <li><i class="fas fa-check icon-bronze"></i><strong> See the most likely cause</strong></li> <li><i class="fas fa-check icon-bronze"></i><strong> Know when it\u2019s time to call in a pro</strong></li> </ul> </div> </section>  <div class="highlight-section"> <p>
A garage door problem can feel like a full stop in your day. DoorDiagnosis\u2122 helps turn that moment into a clear next step \u2014 no guessing, no pressure.
</p> </div> <section> <p>Choose the symptoms of your garage door problem and we\u2019ll guide you through a few quick questions to generate an accurate diagnosis:</p> </section>  <section> <div id="troubleshooting" style="position: relative; top: -80px;"></div></section>  <div id="estimate-app-container"> <!-- Splash Screen (initially visible) --> <div id="estimate-splash" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 250px; gap: 1rem;"> <img src="/photos/blue-isabella-garage-door-logo.png" alt="Isabella Garage Door Logo" style="max-width: 280px; opacity: 0.8;"> <div class="lds-ring"><div></div><div></div><div></div><div></div></div> </div> <!-- Your Actual App --> <div id="app" style="display: none;"></div> </div>  <section> <div class="footer-text">
Need immediate help? Call us at
<a href="tel:9895720303" style="color: #b27d57; font-weight: bold; text-decoration: none;">
(989) 572-0303
</a> </div> </section> <section style="margin-top: 3rem;"> <h2 class="sub-heading">How DoorDiagnosis\u2122 helps</h2> <p>Not every garage door issue needs a service call \u2014 and not every online fix is safe. DoorDiagnosis\u2122 helps you:
</p> <div style="margin-left: 1rem; margin-top: 1rem;"> <ul class="bullet-list"> <li><i class="fas fa-check icon-bronze"></i><strong> Rule out simple, common issues</strong> \u2013 like sensors or batteries</li> <li><i class="fas fa-check icon-bronze"></i><strong> Identify signs of bigger problems</strong> \u2013 like broken springs or cables</li> <li><i class="fas fa-check icon-bronze"></i><strong> Avoid dangerous DIY mistakes</strong> \u2013 especially with high-tension parts</li> </ul> </div> </section>   <section id="faq"> <div class="faq-head"> <a href="/resources/faq" style="text-decoration: none; color: inherit; display: block;"> <h2 class="sub-heading" style="margin-bottom: -.5rem;">Frequently Asked Questions</h2> </a> </div> <div class="faq-item"> <div class="faq-question"> <span>Can I really fix it myself?</span> <span class="faq-arrow">&#9654;</span> </div> <div class="faq-answer"> <p>Sometimes, yes \u2014 especially if it\u2019s a sensor issue, battery, or remote setting. But anything involving springs, cables, or door alignment should only be handled by a trained tech.</p> </div> </div> <div class="faq-item"> <div class="faq-question"> <span>Is it dangerous to keep using a faulty door?</span> <span class="faq-arrow">&#9654;</span> </div> <div class="faq-answer"> <p>It can be. Broken springs or cables can cause serious injury or property damage. DoorDiagnosis\u2122 will flag any safety risks so you know when to stop using the door.</p> </div> </div> <div class="faq-item"> <div class="faq-question"> <span>Do I have to call to get help?</span> <span class="faq-arrow">&#9654;</span> </div> <div class="faq-answer"> <p>Nope. If you decide you want service, you can <a href="sms:+19895720303?&body=Hi! Here's a photo of my garage door problem." style="color: #b27d57;">
Text us
</a>, request an appointment <a href="/contact" style="color: #b27d57;">
online
</a>, or use our <a href="/homeowner-tools/easy-estimate#estimate-form" style="color: #b27d57;">
EasyEstimate\u2122
</a> tool for a quick estimate.</p> </div> </div> <div class="faq-item"> <div class="faq-question"> <span>I just moved in and don\u2019t know what\u2019s wrong. Can this still help?</span> <span class="faq-arrow">&#9654;</span> </div> <div class="faq-answer"> <p>Definitely. Just answer what you see, even if you\u2019re unsure. We built this tool to help homeowners with zero garage door experience.</p> </div> </div> </section> <section style="margin-top: 3rem;"> <h2 class="sub-heading">When you're ready, we\u2019re here.</h2> <p style="text-align:center;">Whether you\u2019re dealing with a minor glitch or a serious breakdown, we\u2019ll give you clear answers, upfront pricing, and honest help \u2014 every time.</p> <a href="/homeowner-tools/easy-estimate#estimate-form" class="testimonials-cta-button" style="margin-top: 3rem;"> <i class="fas fa-tools"></i> Get a Repair Estimate
</a> <a href="/contact" class="cta-button" style="margin-bottom: 2rem;"> <i class="fas fa-calendar-check"></i> Request Service
</a> </section> <section> <h2 class="sub-heading">Isabella Garage Door</h2> <p style="font-size: .9rem; text-align: center;">Serving Mt. Pleasant \u2022 Clare \u2022 Alma \u2022 all of Central Michigan</p> <p style="font-size: .9rem; text-align: center; margin: 0.5rem;"><em>Raising Performance. Elevating Standards</em></p> </section> `, " <script>\ndocument.querySelectorAll('.faq-item').forEach(item => {\n  const question = item.querySelector('.faq-question');\n  const answer = item.querySelector('.faq-answer');\n\n  question.addEventListener('click', () => {\n    const isOpen = item.classList.contains('open');\n\n    // Close all\n    document.querySelectorAll('.faq-item').forEach(i => {\n      i.classList.remove('open');\n      i.querySelector('.faq-answer').style.maxHeight = null;\n    });\n    if (!isOpen) {\n      item.classList.add('open');\n      answer.style.maxHeight = answer.scrollHeight + 'px';\n    }\n  });\n});\n<\/script> ", `  <script>
        const questions = {
            start: {
                question: "What's the main issue with your garage door?",
                options: [
                    { id: 'wont-open', text: "Door won't open at all", next: 'power-check' },
                    { id: 'wont-close', text: "Door won't close completely", next: 'obstruction-check' },
                    { id: 'noisy', text: "Door is making strange noises", next: 'noise-type' },
                    { id: 'slow-jerky', text: "Door moves slowly or jerky", next: 'movement-issues' },
                    { id: 'remote-issues', text: "Remote/opener not working", next: 'remote-check' },
                    { id: 'off-track', text: "Door appears crooked/off track", next: 'safety-warning' }
                ]
            },
            'power-check': {
                question: "Is your garage door opener getting power?",
                options: [
                    { id: 'no-power', text: "No lights/display on opener", next: 'power-solution' },
                    { id: 'has-power', text: "Opener has power/lights on", next: 'manual-test' }
                ]
            },
            'manual-test': {
                question: "Can you lift the door manually (with opener disconnected)?",
                options: [
                    { id: 'manual-easy', text: "Yes, lifts easily by hand", next: 'opener-problem' },
                    { id: 'manual-heavy', text: "Very heavy or won't lift", next: 'spring-problem' }
                ]
            },
            'obstruction-check': {
                question: "Do you see anything blocking the door's path?",
                options: [
                    { id: 'clear-path', text: "Path is completely clear", next: 'sensor-check' },
                    { id: 'obstruction', text: "Something is in the way", next: 'clear-obstruction' }
                ]
            },
            'sensor-check': {
                question: "Are the safety sensors at the bottom aligned and clean?",
                options: [
                    { id: 'sensors-good', text: "Sensors look aligned and clean", next: 'force-settings' },
                    { id: 'sensors-issue', text: "Sensors are dirty/misaligned", next: 'sensor-solution' }
                ]
            },
            'noise-type': {
                question: "What type of noise is your door making?",
                options: [
                    { id: 'grinding', text: "Grinding or scraping sounds", next: 'grinding-solution' },
                    { id: 'squealing', text: "Squealing or screeching", next: 'lubrication-needed' },
                    { id: 'banging', text: "Loud banging or popping", next: 'spring-noise' },
                    { id: 'rattling', text: "Rattling or vibrating", next: 'hardware-loose' }
                ]
            },
            'movement-issues': {
                question: "How would you describe the door's movement?",
                options: [
                    { id: 'jerky-stop', text: "Starts and stops, jerky motion", next: 'track-alignment' },
                    { id: 'very-slow', text: "Moves very slowly", next: 'opener-strain' },
                    { id: 'shakes', text: "Shakes or vibrates while moving", next: 'balance-issue' }
                ]
            },
            'remote-check': {
                question: "Have you tried replacing the remote battery?",
                options: [
                    { id: 'battery-tried', text: "Yes, tried new battery", next: 'remote-programming' },
                    { id: 'battery-not-tried', text: "No, haven't tried that yet", next: 'battery-solution' }
                ]
            }
        };

        const solutions = {
            'power-solution': {
                severity: 'easy',
                title: "Check Your Power Source",
                steps: [
                    "Check if the outlet has power (try plugging in something else)",
                    "Look for a tripped circuit breaker in your electrical panel",
                    "Ensure the opener is plugged in securely",
                    "Check for a reset button on the opener motor"
                ],
                callout: "If power issues persist, you may have a wiring problem that needs professional attention."
            },
            'opener-problem': {
                severity: 'moderate',
                title: "Opener Motor Issue",
                steps: [
                    "Check if the emergency release cord was pulled",
                    "Re-engage the opener by pulling the trolley cord toward the door",
                    "Try operating with the wall button instead of remote"
                ],
                callout: "If the opener still won't work, the motor or circuit board likely needs professional diagnosis."
            },
            'spring-problem': {
                severity: 'emergency',
                title: "\u26A0\uFE0F Broken Spring - DO NOT OPERATE",
                steps: [
                    "STOP using the door immediately",
                    "Do not attempt to lift manually",
                    "Keep people and pets away from the door",
                    "This requires immediate professional repair"
                ],
                callout: "Garage door springs are dangerous and can cause serious injury. This needs same-day professional service."
            },
            'clear-obstruction': {
                severity: 'easy',
                title: "Clear the Obstruction",
                steps: [
                    "Remove any objects from the door's path",
                    "Check for ice buildup in winter",
                    "Clear debris from the tracks",
                    "Test the door operation"
                ],
                callout: "If the door still won't close after clearing obstructions, check the safety sensors."
            },
            'sensor-solution': {
                severity: 'easy',
                title: "Fix Safety Sensors",
                steps: [
                    "Clean sensor lenses with a soft cloth",
                    "Align sensors so they face each other directly",
                    "Check for loose mounting brackets",
                    "Ensure no sunlight is hitting the sensors directly"
                ],
                callout: "Sensors should have solid lights when properly aligned. Blinking lights indicate a problem."
            },
            'grinding-solution': {
                severity: 'urgent',
                title: "Grinding Sounds - Stop Use",
                steps: [
                    "Stop operating the door immediately",
                    "This usually indicates worn rollers or track damage",
                    "Continued use can cause expensive damage",
                    "Schedule professional inspection within 24-48 hours"
                ],
                callout: "Grinding sounds often mean metal is wearing against metal. Quick action prevents costly repairs."
            },
            'lubrication-needed': {
                severity: 'easy',
                title: "Lubrication Required",
                steps: [
                    "Apply white lithium grease or silicone lubricant to hinges and rollers",
                    "Spray chain or screw drive with appropriate lubricant",
                    "Avoid WD-40 - use proper garage door lubricant",
                    "Test operation after lubrication"
                ],
                callout: "Regular lubrication every 6 months prevents most noise issues and extends door life."
            },
            'spring-noise': {
                severity: 'urgent',
                title: "Spring System Issue",
                steps: [
                    "Stop using the door if noise is very loud",
                    "Banging/popping often indicates spring problems",
                    "Visual inspection: look for gaps in springs",
                    "Schedule professional service soon"
                ],
                callout: "Spring noises often precede complete failure. Don't wait for a breakdown."
            },
            'battery-solution': {
                severity: 'easy',
                title: "Replace Remote Battery",
                steps: [
                    "Open your remote control",
                    "Replace with fresh battery (usually 12V or 9V)",
                    "Test the remote from different distances",
                    "If multiple remotes stopped working, check the opener antenna"
                ],
                callout: "Remote batteries typically last 1-2 years depending on usage."
            },
            'force-settings': {
                severity: 'moderate',
                title: "Opener Force Adjustment",
                steps: [
                    "Your opener's close-force may be set too low",
                    "This is a safety feature but may need adjustment",
                    "Check your owner's manual for adjustment screws",
                    "Consider professional calibration for safety"
                ],
                callout: "Improper force settings can be dangerous. Professional adjustment ensures safety and proper operation."
            },
            'safety-warning': {
                severity: 'emergency',
                title: "\u26A0\uFE0F OFF-TRACK DOOR - DANGER",
                steps: [
                    "STOP using the door immediately",
                    "Do not attempt to operate or fix yourself",
                    "Keep people and pets away from the door area",
                    "An off-track door can fall and cause serious injury"
                ],
                callout: "Off-track doors are extremely dangerous and can fall without warning. This requires immediate professional service."
            },
            'track-alignment': {
                severity: 'urgent',
                title: "Track Alignment Issue",
                steps: [
                    "Stop using the door until inspected",
                    "Check for bent or damaged track sections",
                    "Look for loose mounting brackets",
                    "Do not attempt to bend tracks yourself"
                ],
                callout: "Track problems can cause the door to bind or fall off completely. Professional alignment is essential for safety."
            },
            'opener-strain': {
                severity: 'moderate',
                title: "Opener Working Too Hard",
                steps: [
                    "Check if the door is properly balanced",
                    "Disconnect opener and test manual operation",
                    "Look for worn rollers or damaged tracks",
                    "The opener may need recalibration"
                ],
                callout: "When openers work harder than normal, it usually indicates the door system needs adjustment or repair."
            },
            'balance-issue': {
                severity: 'urgent',
                title: "Door Balance Problem",
                steps: [
                    "Disconnect the opener and test manual operation",
                    "A balanced door should stay in place when lifted halfway",
                    "If it falls or shoots up, springs need adjustment",
                    "Do not attempt spring adjustment yourself"
                ],
                callout: "Unbalanced doors put excessive strain on openers and can be dangerous. Spring adjustment requires professional tools and expertise."
            },
            'remote-programming': {
                severity: 'moderate',
                title: "Remote Programming Issue",
                steps: [
                    "Try reprogramming the remote to the opener",
                    "Check your opener manual for programming steps",
                    "Test with the wall button to confirm opener works",
                    "Multiple remote failures may indicate receiver problems"
                ],
                callout: "If reprogramming doesn't work, the remote or opener's receiver may need replacement."
            },
            'hardware-loose': {
                severity: 'easy',
                title: "Loose Hardware",
                steps: [
                    "Check and tighten all visible bolts and screws",
                    "Pay attention to track mounting brackets",
                    "Inspect roller brackets and hinges",
                    "Use appropriate tools - don't over-tighten"
                ],
                callout: "Regular hardware inspection prevents small problems from becoming major repairs. Check every 6 months."
            }
        };

        let currentStep = 'start';
        let answers = {};

        function getSvgIcon(type, className = '') {
            const icons = {
                'alert-triangle': \\\`<svg class="solution-icon \\\${className}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.232 15.5c-.77.833.192 2.5 1.732 2.5z"></path></svg>\\\`,
                'clock': \\\`<svg class="solution-icon \\\${className}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>\\\`,
                'wrench': \\\`<svg class="solution-icon \\\${className}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4"></path></svg>\\\`,
                'check-circle': \\\`<svg class="solution-icon \\\${className}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>\\\`,
                'chevron-right': \\\`<svg class="chevron" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>\\\`,
                'phone': \\\`<svg class="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>\\\`,
                'calendar': \\\`<svg class="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>\\\`
            };
            return icons[type] || '';
        }

        function renderSolution() {
            const lastAnswer = Object.values(answers).pop();
            const solution = solutions[lastAnswer] || solutions[currentStep];
            
            if (!solution) return;

            let iconHtml = '';
            if (solution.severity === 'emergency') iconHtml = getSvgIcon('alert-triangle', 'emergency');
            else if (solution.severity === 'urgent') iconHtml = getSvgIcon('clock', 'urgent');
            else if (solution.severity === 'moderate') iconHtml = getSvgIcon('wrench', 'moderate');
            else if (solution.severity === 'easy') iconHtml = getSvgIcon('check-circle', 'easy');

            const stepsHtml = solution.steps.map((step, index) => \\\`
                <li class="step-item">
                    <span class="step-number">\\\${index + 1}</span>
                    <span class="step-text">\\\${step}</span>
                </li>
            \\\`).join('');

            let buttonsHtml = '';
            if (solution.severity === 'emergency' || solution.severity === 'urgent') {
                buttonsHtml += \\\`
<a href="tel:9895720303" class="btn btn-primary" style="display: inline-flex; align-items: center; gap: 8px;">
  \\\${getSvgIcon('phone')}
  <span>Call Now: (989) 572-0303</span>
</a>

                \\\`;
            }
            
            buttonsHtml += \\\`
<a href="/contact" class="btn btn-secondary" style="display: inline-flex; align-items: center; gap: 8px;">
  \\\${getSvgIcon('calendar')}
  <span>Schedule Service</span>
</a>

                <button class="btn btn-outline" onclick="resetAndScroll()">
                    Try Again
                </button>
            \\\`;

            document.getElementById('app').innerHTML = \\\`
                <div class="solution-card \\\${solution.severity}">
<img src="/photos/doordiagnosis-logo.webp" alt="Garage door troubleshooting tool" loading="lazy" class="badge-img" />
                    <div class="solution-header">
                        \\\${iconHtml}
                        <h2 class="solution-title">\\\${solution.title}</h2>
                    </div>

                    <div class="steps-section">
                        <h3 class="steps-title">What to do:</h3>
                        <ol class="steps-list">
                            \\\${stepsHtml}
                        </ol>
                    </div>

                    <div class="callout \\\${solution.severity}">
                        <p class="callout-text">
                            <strong>Important:</strong> \\\${solution.callout}
                        </p>
                    </div>

                    <div class="button-group">
                        \\\${buttonsHtml}
                    </div>
<div style="text-align: center; color: #888; font-family: 'Lora', serif; opacity: 0.7; margin-top: 1rem;">
  <p style="font-size: 1.75rem; font-weight: 700; margin: 0;">DoorDiagnosis\u2122</p>
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

            const optionsHtml = currentQuestion.options.map(option => \\\`
                <button class="option-button" onclick="handleAnswer('\\\${option.id}', '\\\${option.next}')">
                    <span>\\\${option.text}</span>
                    \\\${getSvgIcon('chevron-right')}
                </button>
            \\\`).join('');

            document.getElementById('app').innerHTML = \\\`
                <div class="card">
<img src="/photos/doordiagnosis-logo.webp" alt="Garage door troubleshooting tool" loading="lazy" class="badge-img" />
                    <div style="margin-bottom: 24px;">
                        <h2 class="question-title">\\\${currentQuestion.question}</h2>
                        
                        <div class="options-container">
                            \\\${optionsHtml}
                        </div>
                    </div>

                    <div class="center-text">
                        <span class="reset-link" onclick="resetAndScroll()">Start Over</span>
<div style="text-align: center; color: #888; font-family: 'Lora', serif; opacity: 0.7;">
  <p style="font-size: 1.75rem; font-weight: 700; margin: 0;">DoorDiagnosis\u2122</p>
  <p style="font-size: 0.75rem; font-weight: 400; margin: 0;">by Isabella Garage Door</p>
</div>
                    </div>
                </div>
            \\\`;
        }

        function handleAnswer(optionId, nextStep) {
            answers[currentStep] = optionId;
            currentStep = nextStep;
            
            if (solutions[currentStep]) {
                renderSolution();
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
    document.getElementById('troubleshooting').scrollIntoView({ behavior: 'smooth' });
}


        // Initialize the app
        renderQuestion();
    <\/script> `])), maybeRenderHead(), renderScript($$result2, "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/homeowner-tools/door-diagnosis.astro?astro&type=script&index=0&lang.ts"), renderScript($$result2, "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/homeowner-tools/door-diagnosis.astro?astro&type=script&index=1&lang.ts")), "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_b || (_b = __template([' <script type="application/ld+json">', "<\/script> "])), unescapeHTML(JSON.stringify(diagnosisSchema))) })}` })}`;
}, "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/homeowner-tools/door-diagnosis.astro", void 0);

const $$file = "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/homeowner-tools/door-diagnosis.astro";
const $$url = "/homeowner-tools/door-diagnosis";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$DoorDiagnosis,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
