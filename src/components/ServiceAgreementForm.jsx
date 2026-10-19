import React, { useRef, useState } from 'react';
import './contact/forms.css';

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

  // Accessibility wiring for fields that can show an error
  const errorProps = (field) =>
    errors[field] ? { 'aria-invalid': 'true', 'aria-describedby': `${field}-error` } : {};

  return (
    <div className="form-card agreement-form-card">
      <div className="form-card__head">
        <h2 className="form-card__title">Service Agreement Confirmation</h2>
      </div>

      <form
        ref={formRef}
        action="https://formsubmit.co/isabellagaragedoor@gmail.com"
        method="POST"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="_captcha" value="false" />

        <div className="form-grid">
          <div className="form-field">
            <label className="form-label" htmlFor="name">Full Name *</label>
            <input className="form-control" type="text" id="name" name="name" autoComplete="name" value={formData.name} onChange={handleChange} {...errorProps('name')} />
            {errors.name && <div className="form-error" id="name-error">{errors.name}</div>}
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="email">Email Address</label>
            <input className="form-control" type="email" id="email" name="email" autoComplete="email" value={formData.email} onChange={handleChange} />
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="phone">Phone Number</label>
            <input className="form-control" type="tel" id="phone" name="phone" autoComplete="tel" value={formData.phone} onChange={handleChange} />
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="address">Service Address *</label>
            <input className="form-control" type="text" id="address" name="address" autoComplete="street-address" value={formData.address} onChange={handleChange} {...errorProps('address')} />
            {errors.address && <div className="form-error" id="address-error">{errors.address}</div>}
          </div>

          <div className="form-field form-field--full">
            <label className="form-check">
              <input
                type="checkbox"
                name="agreementAccepted"
                checked={formData.agreementAccepted}
                onChange={handleChange}
                {...errorProps('agreementAccepted')}
              />
              <span>I have read and agree to the terms outlined in the Isabella Garage Door Service Agreement *</span>
            </label>
            {errors.agreementAccepted && <div className="form-error" id="agreementAccepted-error">{errors.agreementAccepted}</div>}
          </div>

          <div className="form-field form-field--full">
            <label className="form-label" htmlFor="signature">Digital Signature (type full name) *</label>
            <input className="form-control" type="text" id="signature" name="signature" value={formData.signature} onChange={handleChange} {...errorProps('signature')} />
            {errors.signature && <div className="form-error" id="signature-error">{errors.signature}</div>}
          </div>

          <div className="form-field form-field--full">
            <label className="form-label" htmlFor="comments">Optional Comments</label>
            <textarea className="form-control" id="comments" name="comments" rows="4" value={formData.comments} onChange={handleChange}></textarea>
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn--primary btn--lg">Submit Confirmation</button>
        </div>
      </form>

      {submitted && (
        <div className="form-success" role="status">
          <h3>Thank you!</h3>
          <p>
            Your confirmation has been received. We appreciate you reviewing and accepting our service agreement.
          </p>
          <p className="form-success__small">
            If you have questions, feel free to call us at <a href="tel:+19895720303">989-572-0303</a>.
          </p>
        </div>
      )}
    </div>
  );
}

export default ServiceAgreementForm;
