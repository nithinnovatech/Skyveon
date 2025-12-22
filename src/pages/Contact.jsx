import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ui/ContactForm';

const Contact = () => {
    const contactMethods = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: 'Email Us',
            description: 'Send us an email anytime',
            value: 'info@skyveon.ai',
            link: 'mailto:info@skyveon.ai',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: 'Our Office',
            description: 'Visit our headquarters',
            value: 'San Francisco, CA',
            link: null,
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: 'Response Time',
            description: 'We typically respond within',
            value: '24 hours',
            link: null,
        },
    ];

    return (
        <div className="min-h-screen bg-dark-900">
            {/* Hero Section */}
            <section className="relative section-container pt-32 md:pt-40 text-center overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-coral-500/10 rounded-full blur-3xl"></div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Let's <span className="gradient-text">Connect</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                        Ready to transform your technology landscape? Get in touch with our team
                        to discuss how we can help you achieve measurable outcomes.
                    </p>
                </motion.div>
            </section>

            {/* Contact Methods */}
            <section className="section-container pb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
                    {contactMethods.map((method, index) => (
                        <motion.div
                            key={method.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="card-hover text-center"
                        >
                            <div className="text-orange-400 mb-4 flex justify-center">
                                {method.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                            <p className="text-gray-500 text-sm mb-2">{method.description}</p>
                            {method.link ? (
                                <a
                                    href={method.link}
                                    className="text-orange-400 hover:text-orange-300 transition-colors font-medium"
                                >
                                    {method.value}
                                </a>
                            ) : (
                                <span className="text-white font-medium">{method.value}</span>
                            )}
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="section-container">
                <ContactForm />
            </section>

            {/* Additional Info Section */}
            <section className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <div className="glass rounded-2xl p-8 md:p-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Looking for a <span className="gradient-text">specific solution?</span>
                        </h2>
                        <p className="text-gray-400 mb-6">
                            Explore our solution patterns and resources to see how we've helped
                            organizations like yours deliver outcomes at scale.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/solutions"
                                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-coral-500 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-orange-500/30 transition-all"
                            >
                                View Solutions →
                            </a>
                            <a
                                href="/patterns"
                                className="px-6 py-3 border border-white/20 rounded-lg text-white font-semibold hover:bg-white/5 transition-all"
                            >
                                Explore Patterns →
                            </a>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Map / Location placeholder */}
            <section className="section-container pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="relative rounded-2xl overflow-hidden h-64 md:h-80 bg-gradient-to-br from-dark-800 to-dark-900 border border-white/10">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-orange-400 mb-4">
                                    <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Global Presence</h3>
                                <p className="text-gray-400">Serving clients across the Americas, Europe, and Asia-Pacific</p>
                            </div>
                        </div>
                        {/* Decorative grid pattern */}
                        <div className="absolute inset-0 opacity-10" style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}></div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Contact;
