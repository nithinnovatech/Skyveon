import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Patterns = () => {
    const [openIndex, setOpenIndex] = useState(0); // Cloud foundations open by default

    const patternGroups = [
        {
            title: 'Cloud foundations',
            content: {
                patternTitle: 'Zero-Trust Remote Access',
                description: 'Identity-aware access to internal apps and services—no legacy VPN, no flat network risk.',
                points: [
                    'IdP + device posture',
                    'mTLS / IAP',
                    'Just-in-time access',
                ],
            },
        },
        {
            title: 'Data & analytics',
            content: null,
        },
        {
            title: 'Platforms & product',
            content: null,
        },
        {
            title: 'Pragmatic AI',
            content: null,
        },
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

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
                        Solution <span className="gradient-text">Patterns</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                        Reference designs and playbooks we use to deliver fast—without compromising reliability, security, or cost.
                    </p>
                </motion.div>
            </section>

            {/* Accordion Pattern Groups */}
            <section className="section-container">
                <div className="max-w-4xl mx-auto space-y-4">
                    {patternGroups.map((group, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="border border-white/10 rounded-lg overflow-hidden bg-dark-800/50"
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                            >
                                <h3 className="text-xl md:text-2xl font-bold text-white">
                                    {group.title}
                                </h3>
                                <div className="ml-4 text-2xl text-gray-400">
                                    {openIndex === index ? '−' : '+'}
                                </div>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && group.content && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 border-t border-white/10">
                                            <div className="pt-6">
                                                <h4 className="text-lg md:text-xl font-bold text-white mb-3">
                                                    {group.content.patternTitle}
                                                </h4>
                                                <p className="text-gray-400 mb-4">
                                                    {group.content.description}
                                                </p>
                                                <ul className="space-y-2 mb-6">
                                                    {group.content.points.map((point, idx) => (
                                                        <li key={idx} className="text-gray-400 flex items-start">
                                                            <span className="text-blue-400 mr-2">•</span>
                                                            {point}
                                                        </li>
                                                    ))}
                                                </ul>
                                                <div className="flex flex-col sm:flex-row gap-4 items-start">
                                                    <a
                                                        href="#contact"
                                                        className="text-blue-400 hover:text-blue-300 transition-colors"
                                                    >
                                                        Read Pattern Brief →Contact
                                                    </a>
                                                </div>
                                                <p className="text-gray-500 text-sm mt-4">
                                                    Or email us at{' '}
                                                    <a
                                                        href="mailto:info@skyveon.ai"
                                                        className="text-blue-400 hover:text-blue-300 transition-colors"
                                                    >
                                                        info@skyveon.ai
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Patterns;
