import React, { useRef, useState } from 'react';

function ContactEstimateForm() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    serviceType: '',
    description: '',
    contactMethod: '',
    appointmentTime: '',
    referral: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false); // ✅ Track submission

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!formData.address) newErrors.address = 'Service address is required';
    if (!formData.serviceType) newErrors.serviceType = 'Service type is required';
    if (!formData.description) newErrors.description = 'Please describe the issue';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
    } else {
      setErrors({});
      setSubmitted(true); // ✅ Show thank-you message
      formRef.current.submit();
    }
  };

  return (
    <div className="form-wrapper">
      <style>
        {`
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
        `}
      </style>

       {/* <h2>Service Request</h2> remove brackets slashes stars to replace title */}

      <form
        ref={formRef}
        action="https://formsubmit.co/isabellagaragedoor@gmail.com"
        method="POST"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="_captcha" value="false" />

        <div className="form-group">
          <label htmlFor="name">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <div className="error">{errors.phone}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Service Address *</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <div className="error">{errors.address}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="serviceType">What type of service do you need? *</label>
          <select
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
          >
            <option value="">Select one</option>
            <option>Garage Door Repair</option>
            <option>Garage Door Installation</option>
            <option>Opener Installation or Repair</option>
            <option>Routine Maintenance</option>
            <option>General Question</option>
            <option>Other</option>
          </select>
          {errors.serviceType && <div className="error">{errors.serviceType}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="description">Tell Us How We Can Help *</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
          {errors.description && <div className="error">{errors.description}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="contactMethod">Preferred Method of Contact</label>
          <select
            id="contactMethod"
            name="contactMethod"
            value={formData.contactMethod}
            onChange={handleChange}
          >
            <option value="">Select one</option>
            <option>Call</option>
            <option>Text</option>
            <option>Email</option>
            <option>Any</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="appointmentTime">Preferred Appointment Day/Time</label>
          <input
            type="text"
            id="appointmentTime"
            name="appointmentTime"
            value={formData.appointmentTime}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="referral">How did you hear about us?</label>
          <select
            id="referral"
            name="referral"
            value={formData.referral}
            onChange={handleChange}
          >
            <option value="">Select one</option>
            <option>Google Search</option>
            <option>Facebook</option>
            <option>Friend or Family</option>
            <option>Repeat Customer</option>
            <option>Other</option>
          </select>
        </div>

        <div class="form-button-wrapper">
  <button type="submit" class="cta-button">Submit</button>
</div>

      </form>

      {/* ✅ Thank-you message shown after successful validation */}
      {submitted && (
        <div className="mt-6 p-4 border rounded bg-green-50 text-green-800 shadow-sm text-center">
          <h3 className="text-lg font-semibold">Thank you!</h3>
          <p className="mt-1">
            Thank you for contacting <strong>Isabella Garage Door</strong>. We’ve received your request and will be responding soon.
          </p>
        
        </div>
      )}
    </div>
  );
}

export default ContactEstimateForm;
