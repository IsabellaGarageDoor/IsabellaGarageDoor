import React, { useRef, useState } from 'react';

function ServiceAgreementForm() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    signature: '',
    comments: '',
    agreementAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Full name is required';
    if (!formData.address) newErrors.address = 'Service address is required';
    if (!formData.agreementAccepted) newErrors.agreementAccepted = 'You must confirm agreement';
    if (!formData.signature) newErrors.signature = 'Signature is required';
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

  return (
    <div className="form-wrapper">
      <style>
        {`
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
        `}
      </style>

      <h2>Service Agreement Confirmation</h2>

      <form
        ref={formRef}
        action="https://formsubmit.co/isabellagaragedoor@gmail.com"
        method="POST"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="_captcha" value="false" />

        <div className="form-group">
          <label htmlFor="name">Full Name *</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="address">Service Address *</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} />
          {errors.address && <div className="error">{errors.address}</div>}
        </div>

        <div className="form-group checkbox">
          <label>
            <input
              type="checkbox"
              name="agreementAccepted"
              checked={formData.agreementAccepted}
              onChange={handleChange}
            />
            {' '}I have read and agree to the terms outlined in the Isabella Garage Door Service Agreement *
          </label>
          {errors.agreementAccepted && <div className="error">{errors.agreementAccepted}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="signature">Digital Signature (type full name) *</label>
          <input type="text" id="signature" name="signature" value={formData.signature} onChange={handleChange} />
          {errors.signature && <div className="error">{errors.signature}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="comments">Optional Comments</label>
          <textarea id="comments" name="comments" rows="4" value={formData.comments} onChange={handleChange}></textarea>
        </div>

        <button type="submit" className="btn-brand">Submit Confirmation</button>
      </form>

      {submitted && (
        <div className="mt-6 p-4 border rounded bg-green-50 text-green-800 shadow-sm text-center">
          <h3 className="text-lg font-semibold">Thank you!</h3>
          <p className="mt-1">
            Your confirmation has been received. We appreciate you reviewing and accepting our service agreement.
          </p>
          <p className="text-sm mt-2">
            If you have questions, feel free to call us at <a href="tel:9895720303" className="text-[#1a334f] font-semibold hover:underline">989-572-0303</a>.
          </p>
        </div>
      )}
    </div>
  );
}

export default ServiceAgreementForm;
