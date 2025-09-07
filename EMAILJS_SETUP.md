# EmailJS Setup Guide

## Overview
Your contact form is now configured to send emails directly to leosungwonlee@gmail.com without opening the user's email client.

## Setup Steps

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Connect your Gmail account (leosungwonlee@gmail.com)
5. Note down the **Service ID** (e.g., `service_abc123`)
  service ID: service_hfk6i0h


### 3. Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template content:

**Subject:** Contact from {{from_name}} - Personal Website

**Content:**
```
You have received a new message from your personal website:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your personal website contact form.
```

4. Save the template and note down the **Template ID** (e.g., `template_xyz789`)

### 4. Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (e.g., `user_abc123def456`)

### 5. Update Configuration
1. Open `src/config/emailjs.js`
2. Replace the placeholder values:

```javascript
export const emailjsConfig = {
  serviceId: 'service_your_actual_service_id',
  templateId: 'template_your_actual_template_id', 
  publicKey: 'your_actual_public_key'
};
```

### 6. Test the Form
1. Start your development server: `npm run dev`
2. Go to the contact page
3. Fill out and submit the form
4. Check your email (leosungwonlee@gmail.com) for the message

## Features

- ✅ **Direct email sending** - No email client required
- ✅ **Loading states** - Button shows "Sending..." during submission
- ✅ **Success/Error handling** - User feedback via toast messages
- ✅ **Form validation** - Client-side validation before sending
- ✅ **Professional formatting** - Clean email template
- ✅ **Spam protection** - EmailJS handles spam filtering

## Troubleshooting

### Common Issues:
1. **"Service not found"** - Check your Service ID
2. **"Template not found"** - Check your Template ID  
3. **"Invalid public key"** - Check your Public Key
4. **Emails not received** - Check spam folder, verify Gmail connection

### Testing:
- Use the browser console to see detailed error messages
- Check EmailJS dashboard for delivery logs
- Verify all IDs are correct in the config file

## Security Notes

- EmailJS public key is safe to expose in client-side code
- No sensitive credentials are stored in your code
- EmailJS handles rate limiting and spam protection
- Free tier includes 200 emails/month

## Support

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: Available through their dashboard
