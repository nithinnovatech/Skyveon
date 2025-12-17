import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (!formData.name || !formData.email || !formData.message) {
            toast.error('Please fill in all required fields');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast.error('Please enter a valid email address');
            return;
        }

        setIsSubmitting(true);

        try {
            // Import EmailJS config
            // TODO: Update src/config/emailjs.config.js with your actual credentials
            const { EMAILJS_CONFIG } = await import('../../config/emailjs.config.js');

            await emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    company: formData.company,
                    message: formData.message,
                    to_name: 'Skyveon Team'
                },
                EMAILJS_CONFIG.PUBLIC_KEY
            );

            toast.success('Message sent successfully! We\'ll get back to you soon.');

            // Reset form
            setFormData({
                name: '',
                email: '',
                company: '',
                message: ''
            });
        } catch (error) {
            console.error('EmailJS Error:', error);
            toast.error('Failed to send message. Please try again or contact us directly.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-6 md:p-8 max-w-2xl mx-auto"
        >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
                Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-gray-400 text-center mb-8">
                Have a project in mind? Let's discuss how we can help.
            </p>

            <div className="space-y-4">
                {/* Name Field */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark-900 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="John Doe"
                    />
                </div>

                {/* Email Field */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark-900 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="john@example.com"
                    />
                </div>

                {/* Company Field */}
                <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        Company
                    </label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-900 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="Your Company"
                    />
                </div>

                {/* Message Field */}
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-dark-900 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                        placeholder="Tell us about your project..."
                    />
                </div>

                {/* Submit Button */}
                <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 ${isSubmitting
                        ? 'bg-gray-600 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50'
                        }`}
                >
                    {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Sending...
                        </span>
                    ) : (
                        'Send Message'
                    )}
                </motion.button>
            </div>

            {/* Info Note */}
            <p className="text-xs text-gray-500 text-center mt-4">
                We'll respond within 24 hours. For urgent matters, please use the chat widget.
            </p>
        </motion.form>
    );
};

export default ContactForm;
