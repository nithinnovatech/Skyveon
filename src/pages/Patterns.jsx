import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Patterns = () => {
    const [openIndex, setOpenIndex] = useState(0); // Cloud foundations open by default
    const [selectedPattern, setSelectedPattern] = useState(null);

    const patternGroups = [
        {
            title: 'Cloud foundations',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
            ),
            patterns: [
                {
                    title: 'Zero-Trust Remote Access',
                    description: 'Identity-aware access to internal apps and services—no legacy VPN, no flat network risk.',
                    points: ['IdP + device posture', 'mTLS / IAP', 'Just-in-time access'],
                },
                {
                    title: 'Multi-Account Landing Zones',
                    description: 'Secure, scalable AWS/GCP org structures with guardrails and network connectivity.',
                    points: ['Org hierarchy & SCPs', 'Centralized networking', 'Cost allocation'],
                },
            ],
        },
        {
            title: 'Data & analytics',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            patterns: [
                {
                    title: 'Lakehouse Architecture',
                    description: 'Unified batch and streaming with Delta Lake, schema evolution, and time travel.',
                    points: ['Bronze/Silver/Gold layers', 'Data contracts', 'Freshness SLAs'],
                },
                {
                    title: 'Semantic Layer & Metrics',
                    description: 'Single source of truth for business metrics with dbt metrics and governed access.',
                    points: ['dbt semantic layer', 'Metric definitions', 'Self-serve analytics'],
                },
            ],
        },
        {
            title: 'Platforms & product',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            ),
            patterns: [
                {
                    title: 'Blue/Green Deployments',
                    description: 'Zero-downtime releases with instant rollback capability and traffic management.',
                    points: ['Traffic shifting', 'Smoke tests', 'Rollback in 5 minutes'],
                },
                {
                    title: 'Platform Engineering',
                    description: 'Internal developer platforms with golden paths, self-service, and guardrails.',
                    points: ['Backstage/Port', 'Template libraries', 'Developer portals'],
                },
            ],
        },
        {
            title: 'Pragmatic AI',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            patterns: [
                {
                    title: 'Private LLM Assistants',
                    description: 'Enterprise-grade AI assistants with data privacy, evaluation, and safe rollback.',
                    points: ['RAG pipelines', 'Guardrails & filters', 'Citation tracking'],
                },
                {
                    title: 'Evaluation Harness',
                    description: 'Systematic LLM evaluation for groundedness, relevance, and safety.',
                    points: ['Automated evals', 'Hallucination detection', 'A/B testing'],
                },
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
                            className="border border-white/10 rounded-xl overflow-hidden bg-dark-800/50 hover:border-orange-500/30 transition-colors"
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="text-orange-400">
                                        {group.icon}
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white">
                                        {group.title}
                                    </h3>
                                </div>
                                <div className="ml-4 text-2xl text-orange-400 transition-transform duration-300" style={{
                                    transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)'
                                }}>
                                    +
                                </div>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && group.patterns && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 border-t border-white/10">
                                            <div className="pt-6 space-y-6">
                                                {group.patterns.map((pattern, pIdx) => (
                                                    <div key={pIdx} className="bg-dark-900/50 rounded-lg p-5 border border-white/5">
                                                        <h4 className="text-lg md:text-xl font-bold text-white mb-2">
                                                            {pattern.title}
                                                        </h4>
                                                        <p className="text-gray-400 mb-4 text-sm md:text-base">
                                                            {pattern.description}
                                                        </p>
                                                        <ul className="space-y-2 mb-4">
                                                            {pattern.points.map((point, pointIdx) => (
                                                                <li key={pointIdx} className="text-gray-300 flex items-center gap-2 text-sm">
                                                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0"></span>
                                                                    {point}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        <button
                                                            onClick={() => setSelectedPattern({ ...pattern, category: group.title, icon: group.icon })}
                                                            className="text-orange-400 hover:text-orange-300 transition-colors text-sm font-medium"
                                                        >
                                                            Read Pattern Brief →
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Contact CTA */}
            <section className="section-container pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="glass rounded-2xl p-8 md:p-12 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Need a <span className="gradient-text">custom pattern?</span>
                        </h2>
                        <p className="text-gray-400 mb-6">
                            Every organization is unique. Let's discuss your specific architecture needs and design a pattern that fits.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-coral-500 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-orange-500/30 transition-all"
                            >
                                Contact Us →
                            </Link>
                        </div>
                        <p className="text-gray-500 text-sm mt-6">
                            Or email us at{' '}
                            <a
                                href="mailto:info@skyveon.ai"
                                className="text-orange-400 hover:text-orange-300 transition-colors"
                            >
                                info@skyveon.ai
                            </a>
                        </p>
                    </div>
                </motion.div>
            </section>
            {/* Pattern Detail Modal */}
            <AnimatePresence>
                {selectedPattern && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedPattern(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-2xl bg-dark-800 rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
                        >
                            {/* Modal Header */}
                            <div className="p-6 border-b border-white/10 bg-orange-500/5">
                                <div className="flex justify-between items-start">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg border border-orange-500/20 text-orange-400 bg-orange-500/10">
                                            {selectedPattern.icon}
                                        </div>
                                        <div>
                                            <span className="text-[10px] uppercase tracking-wider font-bold text-orange-400">
                                                {selectedPattern.category} Pattern
                                            </span>
                                            <h2 className="text-xl md:text-2xl font-bold text-white leading-tight">
                                                {selectedPattern.title}
                                            </h2>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setSelectedPattern(null)}
                                        className="text-gray-400 hover:text-white p-2 transition-colors"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="p-8">
                                <div className="mb-8">
                                    <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Architecture Brief</h4>
                                    <p className="text-gray-400 leading-relaxed text-lg">
                                        {selectedPattern.description}
                                    </p>
                                </div>

                                <div className="mb-8 p-6 bg-dark-900/50 rounded-xl border border-white/5">
                                    <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Core Components</h4>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {selectedPattern.points.map((point, idx) => (
                                            <li key={idx} className="flex items-center gap-3 text-gray-400 text-sm">
                                                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0"></span>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link
                                        to="/contact"
                                        className="flex-1 px-6 py-4 bg-gradient-to-r from-orange-500 to-coral-500 rounded-xl text-white font-bold text-center hover:shadow-lg hover:shadow-orange-500/30 transition-all transform hover:-y-0.5"
                                    >
                                        Implement this Pattern →
                                    </Link>
                                    <button
                                        onClick={() => setSelectedPattern(null)}
                                        className="px-6 py-4 border border-white/10 rounded-xl text-gray-300 font-semibold hover:bg-white/5 transition-all"
                                    >
                                        Explore More Patterns
                                    </button>
                                </div>
                            </div>

                            {/* Modal Footer Decor */}
                            <div className="h-1 w-full bg-gradient-to-r from-orange-500 via-coral-500 to-orange-600" />
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Patterns;
