// EmailJS Configuration
// You need to set up EmailJS at https://www.emailjs.com/
// and replace these values with your actual credentials

export const emailjsConfig = {
  // Your EmailJS service ID (e.g., 'service_abc123')
  serviceId: 'service_hfk6i0h',
  
  // Your EmailJS template ID (e.g., 'template_xyz789')
  templateId: 'template_r5ivhfr',
  
  // Your EmailJS public key (e.g., 'user_abc123def456')
  publicKey: 'sGojj6CjSab_oEisf'
};

// Email template variables that will be sent
export const emailTemplate = {
  from_name: '{{from_name}}',
  from_email: '{{from_email}}',
  message: '{{message}}',
  to_email: '{{to_email}}',
  subject: '{{subject}}'
};
