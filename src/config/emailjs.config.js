// EmailJS Configuration
// 
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create an account or sign in
// 3. Add an email service (Gmail, Outlook, etc.)
// 4. Create an email template
// 5. Get your Public Key from the Account page
// 6. Replace the values below with your actual credentials

export const EMAILJS_CONFIG = {
    SERVICE_ID: 'YOUR_SERVICE_ID',      // Replace with your EmailJS Service ID
    TEMPLATE_ID: 'YOUR_TEMPLATE_ID',    // Replace with your EmailJS Template ID
    PUBLIC_KEY: 'YOUR_PUBLIC_KEY'       // Replace with your EmailJS Public Key
};

// Example EmailJS Template Variables:
// {{from_name}} - Sender's name
// {{from_email}} - Sender's email
// {{company}} - Sender's company
// {{message}} - Message content
// {{to_name}} - Recipient name (e.g., "Skyveon Team")
