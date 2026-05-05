# EmailJS Setup Guide

## Overview
The contact form now uses **EmailJS** to send emails directly from your portfolio without requiring a backend server.

## Step-by-Step Setup

### 1. Create an EmailJS Account
- Visit [EmailJS](https://www.emailjs.com/)
- Sign up for a free account
- Verify your email

### 2. Create an Email Service
- Go to "Email Services" in the dashboard
- Click "Add New Service"
- Choose your email provider (Gmail, Outlook, etc.)
- Follow the instructions to connect your email account
- **Copy your Service ID** (e.g., `service_xxxxx`)

### 3. Create an Email Template
- Go to "Email Templates" in the dashboard
- Click "Create New Template"
- Set up your template with these variables:
  - `{{from_name}}` - Visitor's name
  - `{{from_email}}` - Visitor's email
  - `{{to_email}}` - Your email (rubans082005@gmail.com)
  - `{{message}}` - Visitor's message
  - `{{reply_to}}` - Reply-to email

**Example Template:**
```
Subject: New Portfolio Contact from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

- Save the template
- **Copy your Template ID** (e.g., `template_xxxxx`)

### 4. Get Your Public Key
- Go to "Account" → "API Keys"
- Copy your **Public Key**

### 5. Add Credentials to Your Project
- Edit `.env.local` file in your project root
- Add your credentials:
```
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
```

### 6. Test the Form
- Run your dev server: `npm run dev`
- Navigate to the contact section
- Fill out the form and submit
- You should receive an email!

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "Failed to send message" | Check that all credentials in `.env.local` are correct |
| Email not received | Check spam/junk folder, verify email service is properly connected |
| "API key not found" | Ensure `.env.local` exists and Vite is restarted after changes |
| Template variables not showing | Make sure template variable names match exactly (case-sensitive) |

## Rate Limits
- EmailJS free tier: 200 emails/month
- Upgrade your account if you need more

## Security Notes
⚠️ **Important:**
- Never commit `.env.local` to GitHub (it's already in `.gitignore`)
- Keep your API keys private
- The public key is safe to expose (it's meant for client-side use)

## Alternative Services
If you prefer other solutions:
- **Formspree** - Simple form backend
- **Basin** - Lightweight form service
- **Custom Backend** - Node.js/Express API

## Support
For issues with EmailJS, visit their [documentation](https://www.emailjs.com/docs/) or support portal.
