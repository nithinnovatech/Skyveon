import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Solutions = () => {
    const [openIndex, setOpenIndex] = useState(null);

    // Solution Icons
    const CodeIcon = () => (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
    );

    const CloudIcon = () => (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
    );

    const DataIcon = () => (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
    );

    const PlatformIcon = () => (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
    );

    const AIIcon = () => (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
    );

    const solutions = [
        {
            title: 'Digital Product Engineering',
            description: 'Web and mobile experiences with robust, secure APIs.',
            icon: <CodeIcon />,
            details: [
                'Design systems & performance budgets',
                'Next.js, React Native, Edge/SSR',
                'Web Vitals optimization',
                'Developer experience (DX) you can feel',
            ],
        },
        {
            title: 'Cloud & DevOps (SRE)',
            description: 'Infrastructure as code, CI/CD, observability, and reliability at scale.',
            icon: <CloudIcon />,
            details: [
                'Terraform, EKS/GKE, ArgoCD',
                'Policy-as-code guardrails',
                'OpenTelemetry & observability',
                'Golden paths for reliable delivery',
            ],
        },
        {
            title: 'Data Engineering & Analytics',
            description: 'Clean pipelines, modeled warehouses/lakes, semantic layers, dashboards.',
            icon: <DataIcon />,
            details: [
                'dbt, Spark, Delta Lake',
                'Semantic layers & data contracts',
                'Freshness SLAs & lineage tracking',
                'Executive dashboards & self-serve BI',
            ],
        },
        {
            title: 'Enterprise Platforms',
            description: 'Workday HCM/Finance and Salesforce clouds, integrated end-to-end.',
            icon: <PlatformIcon />,
            details: [
                'Workday implementation & optimization',
                'Salesforce multi-cloud integration',
                'Mulesoft connectivity',
                'Security & compliance guardrails',
            ],
        },
        {
            title: 'AI & Machine Learning',
            description: 'Automation, private LLM assistants, forecasting & anomaly detection.',
            icon: <AIIcon />,
            details: [
                'RAG pipelines & retrieval systems',
                'LLM evaluation & guardrails',
                'Vector databases & embeddings',
                'Private AI with safe rollback',
            ],
        },
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-dark-900">
            {/* Hero */}
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
                            className="border border-white/10 rounded-xl overflow-hidden bg-dark-800/50 hover:border-orange-500/30 transition-colors"
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                            >
                                <div className="flex items-center gap-4 flex-1">
                                    <div className="text-orange-400 flex-shrink-0">
                                        {solution.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                                            {solution.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm md:text-base">
                                            {solution.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="ml-4 text-2xl text-orange-400 transition-transform duration-300" style={{
                                    transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)'
                                }}>
                                    +
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
                                        <div className="px-6 pb-6 border-t border-white/10">
                                            <div className="pt-5 pl-12">
                                                <ul className="space-y-3">
                                                    {solution.details.map((detail, idx) => (
                                                        <li key={idx} className="flex items-center gap-3 text-gray-300">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0"></span>
                                                            {detail}
                                                        </li>
                                                    ))}
                                                </ul>
                                                <Link
                                                    to="/contact"
                                                    className="inline-block mt-6 text-orange-400 hover:text-orange-300 transition-colors font-medium"
                                                >
                                                    Discuss this solution →
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Metrics Section */}
            <section className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="glass rounded-2xl p-8 md:p-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
                            Measured against <span className="gradient-text">what matters</span>
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">2x</div>
                                <div className="text-gray-400 text-sm">Cycle Time Reduction</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">99.9%</div>
                                <div className="text-gray-400 text-sm">Reliability SLAs</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">95%</div>
                                <div className="text-gray-400 text-sm">Accuracy Targets</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">40%</div>
                                <div className="text-gray-400 text-sm">Unit Cost Savings</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* CTA Section */}
            <section className="section-container pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Ready to see outcomes?
                    </h2>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                        Explore our reference patterns or get in touch to discuss your specific needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/patterns"
                            className="px-6 py-3 bg-gradient-to-r from-orange-500 to-coral-500 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-orange-500/30 transition-all"
                        >
                            View Solution Patterns →
                        </Link>
                        <Link
                            to="/contact"
                            className="px-6 py-3 border border-white/20 rounded-lg text-white font-semibold hover:bg-white/5 transition-all"
                        >
                            Contact Us →
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Solutions;
