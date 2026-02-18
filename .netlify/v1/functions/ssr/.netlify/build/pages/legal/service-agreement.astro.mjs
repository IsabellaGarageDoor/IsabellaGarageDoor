/* empty css                                                                   */
import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate, g as renderComponent } from '../../chunks/astro/server_xoD-kxEp.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_B24roKEI.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useRef, useState } from 'react';
import 'clsx';
export { renderers } from '../../renderers.mjs';

function ServiceAgreementForm() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    signature: "",
    comments: "",
    agreementAccepted: false
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };
  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Full name is required";
    if (!formData.address) newErrors.address = "Service address is required";
    if (!formData.agreementAccepted) newErrors.agreementAccepted = "You must confirm agreement";
    if (!formData.signature) newErrors.signature = "Signature is required";
    return newErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
    } else {
      setErrors({});
      setSubmitted(true);
      formRef.current.submit();
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "form-wrapper", children: [
    /* @__PURE__ */ jsx("style", { children: `
          .form-wrapper {
            max-width: 1200px;
            margin: 1rem auto;
            padding: 1rem;
            background: #fff;
            border-radius: 0.75rem;
            border: 0.094rem solid #b27d57;
            font-family: sans-serif;
            color: #1a334f;
            box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.4);
          }
          .form-group {
            margin-bottom: 15px;
          }
          label {
            display: block;
            font-weight: bold;
            color: #1a334f;
            margin-bottom: 5px;
          }
          input, select, textarea {
            width: 100%;
            padding: 8px;
            margin-top: 5px;
            border: 1px solid #ddd;
            border-radius: 4px;
            box-sizing: border-box;
          }
          .checkbox {
            margin-top: 10px;
          }
          .btn-brand {
            background-color: #1a334f;
            color: white;
            padding: 10px 15px;
            border: .094rem solid #b27d57;
            border-radius: .75rem;
            cursor: pointer;
            font-family: 'Lora', serif;
            font-weight: 500;
          }
          .btn-brand:hover {
            background-color: #b27d57;
          }
          .error {
            color: red;
            font-size: 0.9em;
            margin-top: 4px;
          }
          h2 {
            color: #1a334f;
            text-align: center;
            margin-bottom: 1rem;
            font-family: 'Lora', serif;
            font-size: 1.3rem;
            font-weight: 700;
          }
        ` }),
    /* @__PURE__ */ jsx("h2", { children: "Service Agreement Confirmation" }),
    /* @__PURE__ */ jsxs(
      "form",
      {
        ref: formRef,
        action: "https://formsubmit.co/isabellagaragedoor@gmail.com",
        method: "POST",
        onSubmit: handleSubmit,
        children: [
          /* @__PURE__ */ jsx("input", { type: "hidden", name: "_captcha", value: "false" }),
          /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "name", children: "Full Name *" }),
            /* @__PURE__ */ jsx("input", { type: "text", id: "name", name: "name", value: formData.name, onChange: handleChange }),
            errors.name && /* @__PURE__ */ jsx("div", { className: "error", children: errors.name })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "email", children: "Email Address" }),
            /* @__PURE__ */ jsx("input", { type: "email", id: "email", name: "email", value: formData.email, onChange: handleChange })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "phone", children: "Phone Number" }),
            /* @__PURE__ */ jsx("input", { type: "tel", id: "phone", name: "phone", value: formData.phone, onChange: handleChange })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "address", children: "Service Address *" }),
            /* @__PURE__ */ jsx("input", { type: "text", id: "address", name: "address", value: formData.address, onChange: handleChange }),
            errors.address && /* @__PURE__ */ jsx("div", { className: "error", children: errors.address })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "form-group checkbox", children: [
            /* @__PURE__ */ jsxs("label", { children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "checkbox",
                  name: "agreementAccepted",
                  checked: formData.agreementAccepted,
                  onChange: handleChange
                }
              ),
              " ",
              "I have read and agree to the terms outlined in the Isabella Garage Door Service Agreement *"
            ] }),
            errors.agreementAccepted && /* @__PURE__ */ jsx("div", { className: "error", children: errors.agreementAccepted })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "signature", children: "Digital Signature (type full name) *" }),
            /* @__PURE__ */ jsx("input", { type: "text", id: "signature", name: "signature", value: formData.signature, onChange: handleChange }),
            errors.signature && /* @__PURE__ */ jsx("div", { className: "error", children: errors.signature })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "comments", children: "Optional Comments" }),
            /* @__PURE__ */ jsx("textarea", { id: "comments", name: "comments", rows: "4", value: formData.comments, onChange: handleChange })
          ] }),
          /* @__PURE__ */ jsx("button", { type: "submit", className: "btn-brand", children: "Submit Confirmation" })
        ]
      }
    ),
    submitted && /* @__PURE__ */ jsxs("div", { className: "mt-6 p-4 border rounded bg-green-50 text-green-800 shadow-sm text-center", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold", children: "Thank you!" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1", children: "Your confirmation has been received. We appreciate you reviewing and accepting our service agreement." }),
      /* @__PURE__ */ jsxs("p", { className: "text-sm mt-2", children: [
        "If you have questions, feel free to call us at ",
        /* @__PURE__ */ jsx("a", { href: "tel:9895720303", className: "text-[#1a334f] font-semibold hover:underline", children: "989-572-0303" }),
        "."
      ] })
    ] })
  ] });
}

const html = () => "<h1 id=\"garage-door-service-agreement\">Garage Door Service Agreement</h1>\n<p><strong>Business Name:</strong> Isabella Garage Door, a DBA of Schwab &#x26; Co. Holdings LLC\r\n<strong>Phone:</strong> (989) 572-0303\r\n<strong>Email:</strong> <a href=\"mailto:IsabellaGarageDoor@gmail.com\">IsabellaGarageDoor@gmail.com</a>\r\n<strong>Service Area:</strong> Based in Isabella County, MI — Proudly serving Isabella County and surrounding communities</p>\n<hr>\n<h2 id=\"1-scope-of-work\">1. Scope of Work</h2>\n<p>Isabella Garage Door (“Contractor”) agrees to provide garage door services to the customer (“Client”), including but not limited to:</p>\n<ul>\n<li>Repairs (e.g., springs, cables, rollers)</li>\n<li>Installation and replacement of garage doors</li>\n<li>Garage door opener installation and repair</li>\n<li>Preventive maintenance</li>\n<li>Any additional services specified in the approved written estimate</li>\n</ul>\n<p>All work to be performed will be outlined in a written estimate, which must be approved by the Client prior to commencement. The Contractor’s obligations are limited to the services and components explicitly described in the estimate. Any additional work falls outside the scope of this agreement unless documented and approved in writing.</p>\n<p>Any deviation from the original estimate, whether in scope, material, or method, must be documented and signed off by the Client in writing or via email confirmation.</p>\n<hr>\n<h2 id=\"2-scheduling-and-access\">2. Scheduling and Access</h2>\n<p>The Client agrees to provide timely, clear, and safe access to the garage and surrounding work area during all scheduled service appointments. This includes but is not limited to:</p>\n<ul>\n<li>Securing pets</li>\n<li>Moving vehicles</li>\n<li>Clearing obstructions</li>\n<li>Ensuring the workspace is free from hazards and accessible</li>\n</ul>\n<p>Isabella Garage Door is not responsible for delays, damages, or additional costs arising from inaccessible, unsafe, or unprepared conditions, including but not limited to pets, vehicles, hazardous materials, or adverse weather.</p>\n<p>Appointments may be canceled or rescheduled with at least 24 hours’ notice. Cancellations with less than 24 hours’ notice or failure to be present (if required) may result in a service fee in accordance with the current rate schedule. Repeated last-minute cancellations or no-shows may result in denial of future service.</p>\n<p>The Contractor reserves the right to postpone or refuse service if unsafe site conditions or weather pose a risk to technician safety or service quality. If the delay is determined to be preventable or due to lack of access, a standard service fee will be charged.</p>\n<p>If access is granted via keypad, remote, or smart garage opener (e.g., MyQ), the Client is responsible for:</p>\n<ul>\n<li>Keeping access credentials up to date</li>\n<li>Ensuring all manual locks (e.g., slide bolts or side locks) are disengaged prior to the technician’s arrival</li>\n</ul>\n<p>Isabella Garage Door technicians may activate the opener remotely and may not have interior visibility. The Contractor shall not be held liable for any damage caused by engaging the opener while a manual lock or obstruction is in place.</p>\n<p>If access is denied due to expired codes, disabled smart access, or other preventable barriers, a $25 rescheduling fee may apply.</p>\n<hr>\n<h2 id=\"3-pricing-and-payment\">3. Pricing and Payment</h2>\n<p>Payment is due in full at the time of service completion unless otherwise agreed in writing prior to the start of work. \"Completion of services\" occurs when:</p>\n<ul>\n<li>The technician has finished the contracted work and demonstrated proper operation to the Client, if the Client is present; or</li>\n<li>The technician has finished the contracted work, performed quality control testing, and left the premises, if the Client is not present at completion.</li>\n</ul>\n<p>In cases where the Client is not present during service completion, payment is due within 24 hours of the Contractor's notification that work has been completed. The Contractor will provide notification via email, text message, or phone call using the contact information provided by the Client.</p>\n<p>For jobs exceeding $600 or requiring non-stock, special-order, or custom parts, a 50% deposit is required prior to scheduling the work or initiating procurement. This deposit requirement may be waived at the Contractor’s sole discretion on a case-by-case basis and does not establish a right for future waivers. The remaining balance is due immediately upon service completion.</p>\n<p>The Contractor reserves the right to pause or terminate work if payments are not made as agreed. Final payment is due regardless of minor incomplete items, provided substantial completion has been achieved.</p>\n<p>If final payment is not received as agreed, the Contractor reserves the right to withhold warranty coverage, initiate collections, or record a lien.</p>\n<p><strong>Accepted payment methods include:</strong> cash, check, credit card, and cashier’s check.</p>\n<h3 id=\"late-payments\">Late Payments</h3>\n<p>Late payments will incur a fee of $25 or 1.5% of the outstanding balance per month, whichever is greater, beginning 10 days after the invoice date.</p>\n<p>Returned checks are subject to a $35 fee and may result in suspension of future services until resolved.</p>\n<p>Unpaid balances over 60 days may be referred to a collections agency. The Client is responsible for any additional fees, interest, or costs incurred in the recovery process. The Contractor reserves the right to file a lien in accordance with the notice requirements and deadlines set forth in the Michigan Construction Lien Act.</p>\n<hr>\n<h2 id=\"4-parts--refund-policy\">4. Parts &#x26; Refund Policy</h2>\n<p>Custom, special-order, or non-stock parts are non-refundable once ordered, regardless of the timing of cancellation. If the Client cancels the project after such materials have been ordered, the Contractor may retain all or part of the deposit to cover costs incurred, including restocking fees, supplier charges, and administrative expenses. Refunds, if any, are issued at the Contractor’s reasonable discretion based on costs incurred.</p>\n<p><strong>Completed Services:</strong>\r\nNo refunds will be issued for completed and accepted services. Final payment constitutes acknowledgment that services were performed as agreed. Any concerns after completion will be addressed exclusively through the applicable warranty terms outlined in this agreement.</p>\n<hr>\n<h2 id=\"5-warranty\">5. Warranty</h2>\n<p>The Contractor warrants all workmanship for a period of 90 days from the date of service completion. This warranty covers defects in labor or installation directly attributable to the Contractor’s work.</p>\n<p>Installed products or components are covered only by their respective manufacturer warranties, if applicable. The Contractor does not extend or modify any manufacturer warranty.</p>\n<p><strong>Exclusions:</strong></p>\n<p>This warranty does not apply to issues arising from:</p>\n<ul>\n<li>Misuse, abuse, or neglect</li>\n<li>Accidental damage</li>\n<li>Normal wear and tear</li>\n<li>Weather or environmental conditions</li>\n<li>Unauthorized alterations or repairs</li>\n<li>Pre-existing conditions not addressed in the original estimate</li>\n</ul>\n<p>Any unauthorized modification that affects the Contractor’s work may void the warranty.</p>\n<p><strong>Claim Requirements:</strong>\r\nAll warranty claims must be submitted within the warranty period and may require proof of service and documentation of the issue. Remedies under this warranty are limited to correction of the defective work or replacement of covered components at the Contractor’s discretion.</p>\n<p><strong>Warranty Call Diagnostics:</strong>\r\nIf a customer requests warranty service and the issue is determined to be unrelated to the original repair, installation, or any covered warranty item, a standard service call fee will apply. This includes issues caused by normal wear and tear, misuse, accidental damage, or third-party modifications. The applicable fee will be charged according to the current standard rate sheet.</p>\n<hr>\n<h2 id=\"6-post-service-acceptance\">6. Post-Service Acceptance</h2>\n<p>The Client agrees to inspect all work upon completion and before the Contractor departs. Any concerns must be communicated immediately and documented at that time.</p>\n<p>If no concerns are raised, or if final payment is made, the work shall be considered complete and accepted.</p>\n<p>Acceptance is deemed to occur when:</p>\n<ul>\n<li>The Client signs off on the work</li>\n<li>Makes final payment, or</li>\n<li>Fails to raise objections at the time of service completion</li>\n</ul>\n<p>Any issues arising after this point will be handled solely under the applicable warranty terms.</p>\n<hr>\n<h2 id=\"7-client-responsibilities\">7. Client Responsibilities</h2>\n<p>To ensure a safe and successful service experience, the Client agrees to the following:</p>\n<h3 id=\"a-accurate-information\">A. Accurate Information</h3>\n<ul>\n<li>Provide accurate and complete details regarding the issue or requested service.</li>\n<li>Notify the Contractor of any relevant history, prior repairs, or known issues.</li>\n</ul>\n<h3 id=\"b-access-to-work-area\">B. Access to Work Area</h3>\n<ul>\n<li>Allow timely and reasonable access to the service location.</li>\n<li>Ensure that the workspace is free from obstructions, and that pets, vehicles, or other potential barriers are properly managed.</li>\n</ul>\n<p>If the Contractor is unable to perform the scheduled work due to obstructions, safety hazards, or lack of access to the work area, a standard service fee will apply. This fee may be adjusted based on travel distance, time spent on-site, or the specific conditions encountered.</p>\n<h3 id=\"c-safe-work-environment\">C. Safe Work Environment</h3>\n<ul>\n<li>Address any known or visible hazards, including but not limited to electrical issues, structural concerns, or unsafe entry points.</li>\n</ul>\n<p>The Contractor reserves the right to delay, suspend, or refuse service if the work area presents a safety risk or does not meet reasonable working conditions.</p>\n<h3 id=\"d-care-and-maintenance\">D. Care and Maintenance</h3>\n<ul>\n<li>Properly use and maintain the serviced system according to the Contractor’s recommendations.</li>\n<li>Follow any post-service care, testing, or follow-up instructions provided at the time of service.</li>\n</ul>\n<p><strong>Noncompliance:</strong>\r\nFailure to meet the above responsibilities may void applicable warranties and may limit or release the Contractor from liability for service delays, damages, or incomplete work.</p>\n<h3 id=\"e-property-insurance\">E. Property Insurance</h3>\n<p>The Client represents and warrants that they maintain adequate property insurance covering the premises where the garage door services are to be performed. This insurance should cover any potential damage to the property not directly caused by the Contractor's negligence.</p>\n<p>The Client acknowledges that garage door systems involve mechanical components that can, despite proper installation and service, potentially cause property damage due to unforeseen structural issues, electrical problems, or other pre-existing conditions. The Client's property insurance is the primary coverage for such incidents.</p>\n<p>The Contractor strongly recommends that Clients maintain property insurance with coverage of at least $300,000 for property damage and liability. The Client agrees to waive any claims against the Contractor for damages covered by the Client's insurance policies, and to have their insurers waive any right of subrogation against the Contractor except in cases of gross negligence or willful misconduct.</p>\n<hr>\n<h2 id=\"8-liability\">8. Liability</h2>\n<p>The Contractor maintains general liability insurance and will perform all services in a professional manner consistent with industry standards. A certificate of insurance is available upon request.</p>\n<p>The Contractor shall not be held liable for:</p>\n<ul>\n<li>Pre-existing conditions or concealed defects</li>\n<li>Structural, electrical, or mechanical issues not directly related to the garage door system</li>\n<li>Damage resulting from improper use, lack of maintenance, or unauthorized modifications made after service</li>\n<li>Incidental, indirect, or consequential damages, including but not limited to property damage, personal injury, loss of use, or business interruption</li>\n</ul>\n<p>Upon completion of services, the Client assumes full responsibility for the proper use, maintenance, and safety of the serviced system.</p>\n<p>The Client agrees to indemnify, defend, and hold harmless the Contractor and its owners, employees, and agents from any and all claims, losses, liabilities, or expenses (including reasonable attorney’s fees) arising out of or related to the use, misuse, or modification of the serviced system, except to the extent such claims are caused by the Contractor’s gross negligence or willful misconduct.</p>\n<p>In all cases, the Contractor’s total liability shall not exceed the amount actually paid by the Client for the specific services rendered under this agreement.</p>\n<hr>\n<h2 id=\"9-photo--marketing-release\">9. Photo &#x26; Marketing Release</h2>\n<p>The Contractor may photograph completed work for use in marketing materials, including but not limited to the Contractor’s website, social media, advertising, and project portfolio. These photographs will not include identifying details such as the Client’s name, address, or likeness without the Client’s prior written consent.</p>\n<p>By default, the Client grants the Contractor permission to use such images unless the Client explicitly opts out in writing prior to or at the time of service.</p>\n<p>This release is limited to the depiction of the work performed and does not extend to any personal or sensitive property unless separately authorized.</p>\n<hr>\n<h2 id=\"10-communication-consent\">10. Communication Consent</h2>\n<p>By engaging the Contractor’s services, the Client consents to receive service-related communications via phone call, voicemail, text message, or email. These communications may include appointment confirmations, service updates, invoices, payment reminders, and follow-up requests.</p>\n<p>The Contractor will not use the Client’s contact information for marketing purposes without separate written consent. The Client may request to modify their communication preferences at any time by contacting the Contractor directly.</p>\n<hr>\n<h2 id=\"11-dispute-resolution\">11. Dispute Resolution</h2>\n<p>11.1 Disputes shall be resolved through mediation conducted by a mutually agreed mediator in Isabella County, MI, before either party may initiate arbitration or legal proceedings.</p>\n<p>11.2 If the parties cannot agree on a mediator within 15 days after notice of the dispute, either party may request appointment of a mediator by the American Arbitration Association or another neutral service.</p>\n<p>11.3 If mediation fails to resolve the dispute, the parties agree to binding arbitration before a mutually agreed-upon arbitrator in Isabella County, MI. If the parties cannot agree on an arbitrator within 15 days of the mediation's conclusion, arbitration shall be conducted under the rules of the American Arbitration Association in Isabella County, MI.</p>\n<p>11.4 No legal action or court proceeding may be initiated by either party unless mediation and, if necessary, arbitration have first been completed.</p>\n<p>11.5 In any arbitration or legal proceeding to enforce an arbitration award or recover unpaid fees, Schwab &#x26; Co. Holdings LLC, operating under the assumed name Isabella Garage Door, shall be entitled to recover its reasonable attorney’s fees and costs incurred. For the purposes of this provision, the Contractor shall be considered the prevailing party.</p>\n<p>11.6 Nothing in this section shall prevent either party from seeking temporary injunctive relief in court to preserve the status quo pending arbitration.</p>\n<p>11.7 Nothing in this section shall limit the Contractor’s right to record a lien or pursue remedies available under Michigan’s Construction Lien Act.</p>\n<p>11.8 Any arbitration conducted pursuant to this Agreement shall be governed by the substantive laws of the State of Michigan. The arbitrator shall strictly apply the terms of this Agreement and Michigan law, and shall have no authority to render a decision based on principles of equity or fairness that would modify or ignore the express terms of this Agreement.</p>\n<p>11.9 The arbitrator shall issue a written decision stating the factual and legal basis for the award. The arbitrator shall apply the substantive law of the State of Michigan. Failure to do so shall be grounds for vacating the award under applicable law.</p>\n<hr>\n<h2 id=\"12-force-majeure\">12. Force Majeure</h2>\n<p>The Contractor shall not be held liable for any delay or failure to perform its obligations under this agreement due to circumstances beyond its reasonable control. Such events include, but are not limited to, inclement weather, material or supply shortages, transportation delays, power outages, labor disputes, acts of God, illness, government actions, or other unforeseen events or emergencies.</p>\n<p>In the event of a delay caused by any such force majeure event, the Contractor will make reasonable efforts to notify the Client and reschedule the affected services as soon as conditions reasonably permit.</p>\n<hr>\n<h2 id=\"13-right-to-terminate\">13. Right to Terminate</h2>\n<p>The Contractor reserves the right to cancel or terminate this agreement at any time, with or without cause, at the Contractor’s sole discretion. In the event of termination, the Client shall be invoiced for all labor performed and materials procured up to the point of termination. Any unused portion of the Client’s deposit, if applicable, will be refunded at the Contractor’s discretion, less any costs incurred.</p>\n<hr>\n<h2 id=\"14-limitation-of-action\">14. Limitation of Action</h2>\n<p>To the fullest extent permitted by law, any claim, demand, or legal action arising out of or relating to this agreement, the services performed, or any materials provided—whether based in contract, tort, statute, or any other legal theory—must be commenced within one (1) year from the date the relevant service was completed, unless otherwise required by law. This limitation does not apply to claims made under applicable manufacturer product warranties as outlined in Section 5. If a court determines that a shorter limitation period is unenforceable, the maximum allowable period under applicable law shall apply.</p>\n<hr>\n<h2 id=\"15-severability\">15. Severability</h2>\n<p>If any provision of this Agreement is determined to be invalid, illegal, or unenforceable under applicable law, such provision shall be deemed modified to the minimum extent necessary to make it enforceable, or if that is not possible, severed from the Agreement. The remainder of the Agreement shall remain in full force and effect.</p>\n<hr>\n<h2 id=\"16-governing-law\">16. Governing Law</h2>\n<p>This Agreement shall be governed by and construed in accordance with the laws of the State of Michigan, without regard to its conflict of law principles.</p>\n<p>As outlined in Section 11 (Dispute Resolution), the parties agree to resolve disputes through mediation and, if necessary, binding arbitration in Isabella County, Michigan. Except as otherwise provided in this Agreement, no legal action or court proceeding may be initiated until mediation and arbitration have been completed.</p>\n<p>Any judicial proceeding permitted under this Agreement, including enforcement of an arbitration award or the pursuit of injunctive relief, shall be brought exclusively in the state courts of Isabella County, Michigan, under the laws of the State of Michigan. The parties consent to the jurisdiction and venue of such courts for these limited purposes.</p>\n<hr>\n<h2 id=\"17-entire-agreement\">17. Entire Agreement</h2>\n<p>This Agreement, together with any written estimates or proposals provided by the Contractor, constitutes the complete and exclusive understanding between the parties with respect to the subject matter hereof. It supersedes and replaces any prior discussions, negotiations, agreements, or understandings, whether written or oral, regarding the services to be provided.</p>\n<p>No amendments, modifications, or additions to this Agreement shall be valid unless made in writing and signed by both parties.</p>\n<hr>\n<h2 id=\"18-survival\">18. Survival</h2>\n<p>The provisions of this Agreement that by their nature are intended to survive termination or expiration shall so survive, including but not limited to Sections 3 (Pricing and Payment), 4 (Parts &#x26; Refund Policy), 5–6 (Warranty and Post-Service Acceptance), 8 (Liability), 9 (Photo &#x26; Marketing Release), 10 (Communication Consent), 11 (Dispute Resolution), 14 (Limitation of Action), 15 (Severability), and 16 (Governing Law).</p>\n<hr>\n<p><em>Isabella Garage Door is a registered DBA of Schwab &#x26; Co. Holdings LLC, a Michigan Limited Liability Company.</em></p>";

				const frontmatter = {};
				const file = "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/components/service-agreement-component.md";
				const url = undefined;

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
				});

const $$ServiceAgreement = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="agreement-page"> <section class="agreement-text"> ${renderComponent($$result2, "ServiceAgreementContent", Content, {})} </section> <section> ${renderComponent($$result2, "ServiceAgreementForm", ServiceAgreementForm, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/components/ServiceAgreementForm.jsx", "client:component-export": "default" })} </section> </main>` })}`;
}, "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/legal/service-agreement.astro", void 0);

const $$file = "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/legal/service-agreement.astro";
const $$url = "/legal/service-agreement";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ServiceAgreement,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
