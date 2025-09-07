import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import Section from '../components/Section.jsx';
import InputField from '../components/InputField.jsx';
import Button from '../components/Button.jsx';
import { emailjsConfig } from '../config/emailjs.js';

function Contact({ content, onToast }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function validate(next = form) {
    const e = {};
    if (!next.name.trim()) e.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(next.email)) e.email = "Enter a valid email.";
    if (next.message.trim().length < 10) e.message = "Message should be at least 10 characters.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function onChange(ev) {
    const next = { ...form, [ev.target.name]: ev.target.value };
    setForm(next);
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    
    // Check EmailJS configuration
    const { serviceId, templateId, publicKey } = emailjsConfig;
    
    if (serviceId === 'service_your_service_id' || 
        templateId === 'template_your_template_id' || 
        publicKey === 'your_public_key') {
      onToast("EmailJS not configured yet. Please check the setup guide and update your credentials.");
      return;
    }
    
    setIsSubmitting(true);
    
    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
      to_email: content.contact.email,
      subject: `Contact from ${form.name} - Personal Website`
    };
    
    // Debug logging
    console.log('EmailJS Config:', { serviceId, templateId, publicKey });
    console.log('Template Params:', templateParams);
    
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        onToast("Message sent successfully! I'll get back to you soon.");
        setForm({ name: "", email: "", message: "" });
        setErrors({});
      })
      .catch((error) => {
        console.error('EmailJS Error Details:', {
          error: error,
          status: error.status,
          text: error.text,
          serviceId: serviceId,
          templateId: templateId,
          publicKey: publicKey ? 'Present' : 'Missing'
        });
        
        // More specific error messages
        let errorMessage = "Sorry, there was an error sending your message.";
        
        if (error.status === 400) {
          errorMessage = "Invalid configuration. Please check EmailJS setup.";
        } else if (error.status === 401) {
          errorMessage = "Authentication failed. Please check your EmailJS credentials.";
        } else if (error.status === 403) {
          errorMessage = "Access denied. Please check your EmailJS permissions.";
        } else if (error.status === 404) {
          errorMessage = "Service or template not found. Please check your EmailJS configuration.";
        } else if (error.status === 429) {
          errorMessage = "Too many requests. Please try again later.";
        } else if (error.status >= 500) {
          errorMessage = "Server error. Please try again later.";
        }
        
        onToast(`${errorMessage} You can also email me directly at ${content.contact.email}`);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }

  // Remove the automatic validation on mount
  // useEffect(() => { validate(form); /* live validation */ }, []);

  return (
    <Section id="contact" title="Contact">
      <div className="stack center" style={{ marginBottom: "1rem" }}>
        <p className="muted">Based in {content.contact.location}. Prefer email.</p>
        <p>
          <a href={`mailto:${content.contact.email}`}>{content.contact.email}</a>
        </p>
      </div>
      <form className="contact" noValidate onSubmit={onSubmit}>
        <InputField id="name" label="Name" name="name" value={form.name} onChange={onChange} error={errors.name} />
        <InputField id="email" label="Email" name="email" type="email" value={form.email} onChange={onChange} error={errors.email} />
        <InputField id="message" label="Message" as="textarea" name="message" rows={6} value={form.message} onChange={onChange} error={errors.message} />
        <div>
          <Button 
            className="primary" 
            type="submit" 
            disabled={Object.keys(errors).length > 0 || isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send"}
          </Button>
        </div>
      </form>
    </Section>
  );
}

export default Contact;
