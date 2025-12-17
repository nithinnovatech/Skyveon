import React from 'react';
import { motion } from 'framer-motion';

const Resources = () => {
    const resources = [
        {
            category: 'Case Studies',
            items: [
                { title: 'Fortune 500 Cloud Migration', type: 'Case Study' },
                { title: 'AI-Powered Analytics Platform', type: 'Case Study' },
                { title: 'Enterprise Workday Implementation', type: 'Case Study' },
            ],
        },
        {
            category: 'Whitepapers',
            items: [
                { title: 'Modern Data Architecture Guide', type: 'Whitepaper' },
                { title: 'Cloud Security Best Practices', type: 'Whitepaper' },
                { title: 'AI Governance Framework', type: 'Whitepaper' },
            ],
        },
        {
            category: 'Blog Posts',
            items: [
                { title: 'Building Scalable Microservices', type: 'Blog' },
                { title: 'DevOps Culture Transformation', type: 'Blog' },
                { title: 'Data Mesh Implementation', type: 'Blog' },
            ],
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
                        <span className="gradient-text">Resources</span> & Insights
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                        Learn from our experience with case studies, whitepapers, and technical insights
                        from real-world implementations.
                    </p>
                </motion.div>
            </section>

            {/* Resources */}
            <section className="section-container">
                <div className="space-y-12">
                    {resources.map((section, sectionIndex) => (
                        <motion.div
                            key={section.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                                {section.category}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {section.items.map((item, index) => (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        className="card-hover cursor-pointer"
                                    >
                                        <div className="text-xs text-blue-400 font-semibold mb-2">
                                            {item.type}
                                        </div>
                                        <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                                            {item.title}
                                        </h3>
                                        <div className="link-arrow text-sm">
                                            Read More
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Resources;
