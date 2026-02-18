/* empty css                                                                */
import { a as createComponent, g as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_xoD-kxEp.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_B24roKEI.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useRef, useState } from 'react';
export { renderers } from '../renderers.mjs';

function ContactEstimateForm() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    serviceType: "",
    description: "",
    contactMethod: "",
    appointmentTime: "",
    referral: ""
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.address) newErrors.address = "Service address is required";
    if (!formData.serviceType) newErrors.serviceType = "Service type is required";
    if (!formData.description) newErrors.description = "Please describe the issue";
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
            margin: 2rem auto 1rem;
            padding: 2rem 1rem;
            background-color: #fdfaf7;
            border: 0.094rem solid #b27d57;
            border-radius: 0.75rem;
           box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.4);
           font-family: 'Lora', serif;
           color: #1a334f;
          }
          .form-group {
            margin-bottom: 15px;
          }
          label {
            display: block;
            font-weight: bold;
            color: #1a334f;
            margin: 0.5rem;
          }
          input, select, textarea {
              width: 100%;
             margin-top: 0.25rem;
             padding: 0.6rem;
             border: 1px solid #ccc !important;
             border-radius: 0.5rem;
             font-family: 'Jost', sans-serif;
             font-size: 1rem;
             color: #1a334f;
             background-color: #fff;
             resize: vertical;
          }
          .btn-brand {
                    background-color: #1a334f;
      color: #ffffff;
      padding: 0.85rem 2.25rem; /* Adjusted padding */
      font-size: 1.1rem;
      border: 0.094rem solid #b27d57;
      border-radius: 0.75rem;
      margin: 1.5rem auto 1rem; /* Adjusted margin */
      font-family: 'Lora', serif;
      font-weight: 500;
      box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.4);
      transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
      display: inline-block;
      width: 100%;
      max-width: 25rem;
      text-align: center;
      white-space: nowrap;
      cursor: pointer;
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
          }

          .form-button-wrapper {
            display: flex;
            justify-content: center;
            margin-top: 1.5rem;
          }
        ` }),
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
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                id: "name",
                name: "name",
                value: formData.name,
                onChange: handleChange
              }
            ),
            errors.name && /* @__PURE__ */ jsx("div", { className: "error", children: errors.name })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "phone", children: "Phone Number *" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "tel",
                id: "phone",
                name: "phone",
                value: formData.phone,
                onChange: handleChange
              }
            ),
            errors.phone && /* @__PURE__ */ jsx("div", { className: "error", children: errors.phone })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "email", children: "Email Address" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                id: "email",
                name: "email",
                value: formData.email,
                onChange: handleChange
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "address", children: "Service Address *" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                id: "address",
                name: "address",
                value: formData.address,
                onChange: handleChange
              }
            ),
            errors.address && /* @__PURE__ */ jsx("div", { className: "error", children: errors.address })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "serviceType", children: "What type of service do you need? *" }),
            /* @__PURE__ */ jsxs(
              "select",
              {
                id: "serviceType",
                name: "serviceType",
                value: formData.serviceType,
                onChange: handleChange,
                children: [
                  /* @__PURE__ */ jsx("option", { value: "", children: "Select one" }),
                  /* @__PURE__ */ jsx("option", { children: "Garage Door Repair" }),
                  /* @__PURE__ */ jsx("option", { children: "Garage Door Installation" }),
                  /* @__PURE__ */ jsx("option", { children: "Opener Installation or Repair" }),
                  /* @__PURE__ */ jsx("option", { children: "Routine Maintenance" }),
                  /* @__PURE__ */ jsx("option", { children: "General Question" }),
                  /* @__PURE__ */ jsx("option", { children: "Other" })
                ]
              }
            ),
            errors.serviceType && /* @__PURE__ */ jsx("div", { className: "error", children: errors.serviceType })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "description", children: "Tell Us How We Can Help *" }),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                id: "description",
                name: "description",
                rows: "4",
                value: formData.description,
                onChange: handleChange
              }
            ),
            errors.description && /* @__PURE__ */ jsx("div", { className: "error", children: errors.description })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "contactMethod", children: "Preferred Method of Contact" }),
            /* @__PURE__ */ jsxs(
              "select",
              {
                id: "contactMethod",
                name: "contactMethod",
                value: formData.contactMethod,
                onChange: handleChange,
                children: [
                  /* @__PURE__ */ jsx("option", { value: "", children: "Select one" }),
                  /* @__PURE__ */ jsx("option", { children: "Call" }),
                  /* @__PURE__ */ jsx("option", { children: "Text" }),
                  /* @__PURE__ */ jsx("option", { children: "Email" }),
                  /* @__PURE__ */ jsx("option", { children: "Any" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "appointmentTime", children: "Preferred Appointment Day/Time" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                id: "appointmentTime",
                name: "appointmentTime",
                value: formData.appointmentTime,
                onChange: handleChange
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "referral", children: "How did you hear about us?" }),
            /* @__PURE__ */ jsxs(
              "select",
              {
                id: "referral",
                name: "referral",
                value: formData.referral,
                onChange: handleChange,
                children: [
                  /* @__PURE__ */ jsx("option", { value: "", children: "Select one" }),
                  /* @__PURE__ */ jsx("option", { children: "Google Search" }),
                  /* @__PURE__ */ jsx("option", { children: "Facebook" }),
                  /* @__PURE__ */ jsx("option", { children: "Friend or Family" }),
                  /* @__PURE__ */ jsx("option", { children: "Repeat Customer" }),
                  /* @__PURE__ */ jsx("option", { children: "Other" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { class: "form-button-wrapper", children: /* @__PURE__ */ jsx("button", { type: "submit", class: "cta-button", children: "Submit" }) })
        ]
      }
    ),
    submitted && /* @__PURE__ */ jsxs("div", { className: "mt-6 p-4 border rounded bg-green-50 text-green-800 shadow-sm text-center", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold", children: "Thank you!" }),
      /* @__PURE__ */ jsxs("p", { className: "mt-1", children: [
        "Thank you for contacting ",
        /* @__PURE__ */ jsx("strong", { children: "Isabella Garage Door" }),
        ". We’ve received your request and will be responding soon."
      ] })
    ] })
  ] });
}

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const title = "Request Service | Isabella Garage Door";
  const description = "Get in touch with Isabella Garage Door for fast, friendly, and reliable garage door repairs in Mt. Pleasant, MI.";
  return renderTemplate`<link rel="stylesheet" href="/styles/global.css">${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<img src="/photos/request-service-garage-door-image.webp" alt="Request garage door service or intallation today in Central Michigan" loading="eager" fetchpriority="high" class="header-photo-interior"><h1 class="page-title">Request Service</h1><p class="left-content">Ready to schedule service, ask a question, or request a quote? We're here to help. Reach out using the form below, or contact us directly - whichever is easiest for you.
</p><section class="py-8 px-4 max-w-4xl mx-auto">${renderComponent($$result2, "ContactForm", ContactEstimateForm, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/components/ContactForm.jsx", "client:component-export": "default" })}</section><h3 class="sub-sub-heading" style="margin-top: 1.5rem; font-family:'Lora', serif;">Prefer to talk to someone?</h3><div class="contact-block"><p><strong>📱 Text us:</strong><a href="sms:9895720303" style="color: #0000EE; text-decoration: none;">(989) 572-0303</a><br><strong>📞 Call us:</strong><a href="tel:9895720303" style="color: #0000EE; text-decoration: none;">(989) 572-0303</a><br><strong>✉️ Email:</strong><a href="mailto:IsabellaGarageDoor@gmail.com" style="color: #0000EE; text-decoration: none;">IsabellaGarageDoor@gmail.com</a><br></p></div><div id="service-area" style="position: relative; top: -60px;"></div><h2 class="sub-heading" style="margin-top: 2rem;">Service Area</h2><img src="/photos/Isabella-Garage-Door-map-of-central-Michigan-service-area.webp" alt="Isabella Garage Door Service Area Map covering Central Michigan to include Mt. Pleasant, Clare, Alma, Coleman and more" class="homepg-service-photo"><section class="area-description"><div class="centered-content"><p class="p-home area-description-intro">
Looking for garage door
services near you? Isabella Garage Door proudly serves homeowners in:</p><p class="area-description-list">
Mount Pleasant • Lake Isabella • Clare • Farwell • Coleman • Beal City • Shepherd • Alma • Remus • Edmore • Rosebush • St. Louis • Winn
and surrounding Central Michigan communities.</p></div></section><section><h2 class="sub-heading">Isabella Garage Door</h2><p style="font-size: .9rem; text-align: center;">
Serving Central Michigan with honest, high-quality garage door service.
</p><p style="font-size: .9rem; text-align: center; margin: 0.5rem;"><em>Raising Performance. Elevating Standards</em></p></section>` })}`;
}, "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/contact.astro", void 0);

const $$file = "C:/Users/Amanda/Documents/Peters-Files/isabella-garage-door/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
