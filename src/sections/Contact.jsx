import React, { useEffect, useState } from 'react';
import Section from '../components/Section.jsx';
import InputField from '../components/InputField.jsx';
import Button from '../components/Button.jsx';

function Contact({ content, onToast }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

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
    // Demo: simulate send
    onToast("Message sent — thanks! (demo)");
    setForm({ name: "", email: "", message: "" });
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
          <Button className="primary" type="submit" disabled={Object.keys(errors).length > 0}>Send</Button>
        </div>
      </form>
    </Section>
  );
}

export default Contact;
