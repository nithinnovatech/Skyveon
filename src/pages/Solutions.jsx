import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Solutions = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const solutions = [
        {
            title: 'Digital Product Engineering',
            description: 'Web and mobile experiences with robust, secure APIs.',
        },
        {
            title: 'Cloud & DevOps (SRE)',
            description: 'Infrastructure as code, CI/CD, observability, and reliability at scale.',
        },
        {
            title: 'Data Engineering & Analytics',
            description: 'Clean pipelines, modeled warehouses/lakes, semantic layers, dashboards.',
        },
        {
            title: 'Enterprise Platforms',
            description: 'Workday HCM/Finance and Salesforce clouds, integrated end-to-end.',
        },
        {
            title: 'AI & Machine Learning',
            description: 'Automation, private LLM assistants, forecasting & anomaly detection.',
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
                        Solutions that Deliver <span className="gradient-text">Outcomes</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                        Outcome-linked delivery across products, platforms, cloud, data, and AI — measured against cycle time, reliability, accuracy, and unit cost.
                    </p>
                </motion.div>
            </section>

            {/* Accordion Solutions */}
            <section className="section-container">
                <div className="max-w-4xl mx-auto space-y-4">
                    {solutions.map((solution, index) => (
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
                                <div className="flex-1">
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                                        {solution.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm md:text-base">
                                        {solution.description}
                                    </p>
                                </div>
                                <div className="ml-4 text-2xl text-gray-400">
                                    {openIndex === index ? '−' : '+'}
                                </div>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-5 text-gray-400">
                                            {/* Expanded content can be added here if needed */}
                                            <p className="text-sm">Additional details about {solution.title}.</p>
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

export default Solutions;
