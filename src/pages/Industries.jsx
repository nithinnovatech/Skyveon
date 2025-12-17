import React from 'react';
import { motion } from 'framer-motion';

const Industries = () => {
    const industries = [
        {
            title: 'Financial Services',
            description: 'Secure, compliant solutions for banking, insurance, and fintech.',
            icon: '💰',
        },
        {
            title: 'Healthcare & Life Sciences',
            description: 'HIPAA-compliant platforms for patient care and research.',
            icon: '🏥',
        },
        {
            title: 'Retail & E-Commerce',
            description: 'Scalable platforms for modern retail experiences.',
            icon: '🛍️',
        },
        {
            title: 'Technology & SaaS',
            description: 'Cloud-native solutions for tech companies and startups.',
            icon: '💻',
        },
        {
            title: 'Manufacturing',
            description: 'IoT and automation solutions for Industry 4.0.',
            icon: '🏭',
        },
        {
            title: 'Energy & Utilities',
            description: 'Smart grid and renewable energy platforms.',
            icon: '⚡',
        },
    ];

    return (
        <div className="min-h-screen bg-dark-900">
            {/* Hero */}
            <section className="section-container pt-32 md:pt-40 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Industries We <span className="gradient-text">Serve</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                        Deep domain expertise across critical industries, delivering solutions that understand
                        your unique challenges and regulatory requirements.
                    </p>
                </motion.div>
            </section>

            {/* Industries Grid */}
            <section className="section-container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={industry.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="card-hover"
                        >
                            <div className="text-5xl mb-4">{industry.icon}</div>
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                                {industry.title}
                            </h3>
                            <p className="text-gray-400 text-sm md:text-base">
                                {industry.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Industries;
