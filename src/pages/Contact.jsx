import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business_type: '',
    project_interest: 'website',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
    if (errors[e.target.id]) {
      setErrors({
        ...errors,
        [e.target.id]: ''
      });
    }
  };

  const validateForm = () => {
    const tempErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required';
    }

    // Email validation
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s\-()]{7,20}$/.test(formData.phone)) {
      tempErrors.phone = 'Please enter a valid phone number (7-20 digits, spaces/hyphens allowed)';
    }

    // Business Type validation
    if (!formData.business_type.trim()) {
      tempErrors.business_type = 'Business type is required';
    }

    // Message validation
    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });

    if (!validateForm()) {
      setStatus({
        type: 'error',
        message: 'Please resolve the errors below before submitting.'
      });
      return;
    }

    setSubmitting(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'LuEYEWtM00BX_RcWI';

      if (!serviceId || !templateId || serviceId === 'YOUR_EMAILJS_SERVICE_ID' || templateId === 'YOUR_EMAILJS_TEMPLATE_ID') {
        throw new Error('EmailJS Service ID or Template ID is not configured. Please set VITE_EMAILJS_SERVICE_ID and VITE_EMAILJS_TEMPLATE_ID in your .env file.');
      }

      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        business_type: formData.business_type,
        project_interest: formData.project_interest,
        message: formData.message
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setStatus({
        type: 'success',
        message: 'Thank you! Your inquiry has been sent successfully. We will get back to you soon.'
      });
      
      // Clear form
      setFormData({
        name: '',
        email: '',
        phone: '',
        business_type: '',
        project_interest: 'website',
        message: ''
      });
      setErrors({});
    } catch (err) {
      console.error('Error sending email via EmailJS:', err);
      setStatus({
        type: 'error',
        message: err.message || 'An error occurred while sending your inquiry. Please try again later or contact us directly at systemnirmata@gmail.com'
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full pt-16 md:pt-28 px-margin-page">
      <main className="flex-grow w-full max-w-7xl mx-auto py-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter text-left">
          {/* Contact Form Section */}
          <div className="col-span-1 md:col-span-7 lg:col-span-6 md:col-start-2">
            <h1 className="font-headline-xl text-primary mb-stack-lg leading-tight">
              Start a Dialogue
            </h1>
            {status.message && (
              <div
                className={`mb-6 p-4 font-body-md ${status.type === 'success'
                    ? 'bg-primary-container/10 text-primary border border-primary/20'
                    : 'bg-error/10 text-error border border-error/20'
                  }`}
              >
                {status.message}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-stack-md" noValidate>
              <div className="flex flex-col">
                <label
                  className="font-label-caps text-label-caps text-primary uppercase tracking-widest mb-2 text-xs"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  required
                  className={`input-underline font-body-md text-on-surface placeholder-outline-variant/60 ${errors.name ? 'input-error' : ''}`}
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  type="text"
                />
                {errors.name && (
                  <span className="text-error text-xs mt-1 font-body-sm">{errors.name}</span>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  className="font-label-caps text-label-caps text-primary uppercase tracking-widest mb-2 text-xs"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  required
                  className={`input-underline font-body-md text-on-surface placeholder-outline-variant/60 ${errors.email ? 'input-error' : ''}`}
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john.doe@example.com"
                  type="email"
                />
                {errors.email && (
                  <span className="text-error text-xs mt-1 font-body-sm">{errors.email}</span>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  className="font-label-caps text-label-caps text-primary uppercase tracking-widest mb-2 text-xs"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  required
                  className={`input-underline font-body-md text-on-surface placeholder-outline-variant/60 ${errors.phone ? 'input-error' : ''}`}
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 123 456 7890"
                  type="tel"
                />
                {errors.phone && (
                  <span className="text-error text-xs mt-1 font-body-sm">{errors.phone}</span>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  className="font-label-caps text-label-caps text-primary uppercase tracking-widest mb-2 text-xs"
                  htmlFor="business_type"
                >
                  Business Type
                </label>
                <input
                  required
                  className={`input-underline font-body-md text-on-surface placeholder-outline-variant/60 ${errors.business_type ? 'input-error' : ''}`}
                  id="business_type"
                  value={formData.business_type}
                  onChange={handleChange}
                  placeholder="E-commerce, Agency, etc."
                  type="text"
                />
                {errors.business_type && (
                  <span className="text-error text-xs mt-1 font-body-sm">{errors.business_type}</span>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  className="font-label-caps text-label-caps text-primary uppercase tracking-widest mb-2 text-xs"
                  htmlFor="project_interest"
                >
                  Project Interest
                </label>
                <select
                  className="input-underline font-body-md text-on-surface bg-transparent appearance-none border-b border-on-tertiary-container pb-2 cursor-pointer focus:outline-none"
                  id="project_interest"
                  value={formData.project_interest}
                  onChange={handleChange}
                >
                  <option value="website">Website Development</option>
                  <option value="ai_chatbot">AI Chatbot Agent</option>
                  <option value="ai_voice_agent">AI Voice Agent</option>
                  <option value="vps">VPS & Infrastructure</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label
                  className="font-label-caps text-label-caps text-primary uppercase tracking-widest mb-2 text-xs"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  required
                  className={`input-underline font-body-md text-on-surface placeholder-outline-variant/60 resize-none ${errors.message ? 'input-error' : ''}`}
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Briefly describe your vision..."
                  rows="4"
                ></textarea>
                {errors.message && (
                  <span className="text-error text-xs mt-1 font-body-sm">{errors.message}</span>
                )}
              </div>

              <div className="pt-stack-sm">
                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-primary text-on-primary font-label-caps text-label-caps px-8 py-4 uppercase tracking-widest hover:bg-primary-container transition-colors rounded-none disabled:opacity-50 cursor-pointer"
                >
                  {submitting ? 'Submitting...' : 'Submit Inquiry'}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Details Sidebar */}
          <div className="col-span-1 md:col-span-4 lg:col-span-3 md:col-start-9 mt-section-gap md:mt-0 flex flex-col justify-center border-t md:border-t-0 md:border-l border-outline-variant/40 pt-stack-lg md:pt-0 pl-0 md:pl-gutter">
            <div className="space-y-stack-md">
              <div>
                <h3 className="font-label-caps text-label-caps text-outline uppercase tracking-widest mb-4 text-xs">
                  Direct Communication
                </h3>
                <div className="flex items-center space-x-4">
                  <span className="material-symbols-outlined text-on-tertiary-container font-light">
                    mail
                  </span>
                  <a
                    className="font-body-md text-primary hover:text-on-tertiary-container transition-colors"
                    href="mailto:systemnirmata@gmail.com"
                  >
                    systemnirmata@gmail.com
                  </a>
                </div>
              </div>

              <div>
                <div className="flex items-center space-x-4">
                  <span className="material-symbols-outlined text-on-tertiary-container font-light">
                    call
                  </span>
                  <a
                    className="font-body-md text-primary hover:text-on-tertiary-container transition-colors"
                    href="tel:+917777967903"
                  >
                    +91 7777967903
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-label-caps text-label-caps text-outline uppercase tracking-widest mb-4 mt-stack-md text-xs">
                  Atelier Location
                </h3>
                <div className="flex items-start space-x-4">
                  <span className="material-symbols-outlined text-on-tertiary-container font-light mt-1">
                    location_on
                  </span>
                  <span className="font-body-md text-primary">
                    Ahmedabad, Gujarat, India
                    <br />
                    By Appointment Only
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-section-gap border-t border-outline-variant/30 pt-8 flex justify-center opacity-60">
          <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest">
            Trusted by 10+ businesses globally
          </span>
        </div>
      </main>
    </div>
  );
}
