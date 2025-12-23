import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Resources = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [selectedResource, setSelectedResource] = useState(null);

    const filters = ['All', 'Cloud', 'Data', 'Platforms', 'Workday/Salesforce', 'Pragmatic AI'];

    // Resource type icons
    const getTypeIcon = (type) => {
        switch (type) {
            case 'brief':
                return (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                );
            case 'checklist':
                return (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                );
            case 'runbook':
                return (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                );
            case 'talk':
                return (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                );
            default:
                return null;
        }
    };

    const getTypeColor = (type) => {
        switch (type) {
            case 'brief': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
            case 'checklist': return 'bg-green-500/20 text-green-400 border-green-500/30';
            case 'runbook': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
            case 'talk': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
            default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
        }
    };

    const getCategoryColor = (filter) => {
        switch (filter) {
            case 'Cloud': return 'text-blue-400';
            case 'Data': return 'text-green-400';
            case 'Platforms': return 'text-purple-400';
            case 'Workday/Salesforce': return 'text-yellow-400';
            case 'Pragmatic AI': return 'text-orange-400';
            default: return 'text-gray-400';
        }
    };

    const resources = [
        {
            type: 'brief',
            category: 'Platforms',
            readTime: '8 min read',
            title: 'SLOs that matter: picking the right reliability signals',
            description: 'A practical primer on SLOs/SLA vs error budgets with examples that influence real product decisions.',
            filter: 'Platforms',
        },
        {
            type: 'checklist',
            category: 'Cloud',
            readTime: null,
            title: 'Cloud landing zone readiness checklist',
            description: 'The 20 checks we require before turning on production in multi-account clouds (org, network, identity, cost).',
            filter: 'Cloud',
        },
        {
            type: 'brief',
            category: 'Data',
            readTime: null,
            title: 'Data contracts with dbt: keeping SLAs honest',
            description: 'How we use dbt + contracts + tests to guarantee freshness SLAs and prevent silent schema drift.',
            filter: 'Data',
        },
        {
            type: 'runbook',
            category: 'Platforms',
            readTime: null,
            title: 'Incident playbook: blue/green rollbacks in 5 minutes',
            description: 'Step-by-step runbook for safe rollback with post-deploy smoke tests and traffic drains.',
            filter: 'Platforms',
        },
        {
            type: 'talk',
            category: 'Pragmatic AI',
            readTime: null,
            title: 'Private LLM evals: measuring groundedness',
            description: 'Short talk + demo on setting up an eval harness that catches hallucinations with citations.',
            filter: 'Pragmatic AI',
        },
        {
            type: 'brief',
            category: 'Workday/Salesforce',
            readTime: null,
            title: 'Workday to warehouse: reconciliation patterns',
            description: 'Deterministic sync and reconciliation patterns that keep HCM/Finance aligned with analytics.',
            filter: 'Workday/Salesforce',
        },
    ];

    const filteredResources = activeFilter === 'All'
        ? resources
        : resources.filter(r => r.filter === activeFilter);

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
                        <span className="gradient-text">Resources</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                        Briefs, checklists, runbooks, and talks—curated from our delivery playbooks.
                    </p>
                </motion.div>
            </section>

            {/* Filters */}
            <section className="section-container pt-8">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="flex flex-wrap gap-3 justify-center mb-12"
                >
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === filter
                                ? 'bg-gradient-to-r from-orange-500 to-coral-500 text-white shadow-lg shadow-orange-500/30'
                                : 'bg-dark-800 text-gray-400 hover:bg-dark-700 hover:text-white border border-white/10'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </motion.div>

                {/* Resource Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {filteredResources.map((resource, index) => (
                        <motion.div
                            key={resource.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            onClick={() => setSelectedResource(resource)}
                            className="card-hover cursor-pointer group h-full flex flex-col"
                        >
                            {/* Meta info */}
                            <div className="flex items-center gap-2 mb-4 text-xs">
                                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border ${getTypeColor(resource.type)}`}>
                                    {getTypeIcon(resource.type)}
                                    {resource.type}
                                </span>
                                <span className={getCategoryColor(resource.filter)}>
                                    {resource.category}
                                </span>
                                {resource.readTime && (
                                    <>
                                        <span className="text-gray-600">•</span>
                                        <span className="text-gray-500">{resource.readTime}</span>
                                    </>
                                )}
                            </div>

                            {/* Title */}
                            <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                                {resource.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 text-sm mb-4 flex-grow">
                                {resource.description}
                            </p>

                            {/* Footer */}
                            <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                <span className={`text-xs ${getTypeColor(resource.type).split(' ')[1]}`}>
                                    {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)} • {resource.category}
                                </span>
                                <span className="text-orange-400 group-hover:text-orange-300 transition-colors text-sm font-medium">
                                    View →
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Empty state if no results */}
            {filteredResources.length === 0 && (
                <section className="section-container">
                    <div className="text-center py-12">
                        <p className="text-gray-400">No resources found for this category.</p>
                    </div>
                </section>
            )}

            {/* Newsletter CTA */}
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
                            Stay <span className="gradient-text">updated</span>
                        </h2>
                        <p className="text-gray-400 mb-6">
                            Get the latest briefs, playbooks, and engineering insights delivered to your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 bg-dark-900 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                            />
                            <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-coral-500 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-orange-500/30 transition-all whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-4">
                            No spam. Unsubscribe anytime.
                        </p>
                    </div>
                </motion.div>
            </section>
            {/* Resource Detail Modal */}
            <AnimatePresence>
                {selectedResource && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedResource(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-2xl bg-dark-800 rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
                        >
                            {/* Modal Header */}
                            <div className={`p-6 border-b border-white/10 ${getTypeColor(selectedResource.type).split(' ')[0]}`}>
                                <div className="flex justify-between items-start">
                                    <div className="flex items-center gap-3">
                                        <div className={`p-2 rounded-lg border ${getTypeColor(selectedResource.type)}`}>
                                            {getTypeIcon(selectedResource.type)}
                                        </div>
                                        <div>
                                            <span className={`text-[10px] uppercase tracking-wider font-bold ${getCategoryColor(selectedResource.filter)}`}>
                                                {selectedResource.category}
                                            </span>
                                            <h2 className="text-xl md:text-2xl font-bold text-white leading-tight">
                                                {selectedResource.title}
                                            </h2>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setSelectedResource(null)}
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
                                    <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Overview</h4>
                                    <p className="text-gray-400 leading-relaxed text-lg">
                                        {selectedResource.description}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                    <div className="p-4 bg-dark-900/50 rounded-xl border border-white/5">
                                        <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">Resource Type</h4>
                                        <p className="text-white font-medium capitalize">{selectedResource.type}</p>
                                    </div>
                                    <div className="p-4 bg-dark-900/50 rounded-xl border border-white/5">
                                        <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">Target Audience</h4>
                                        <p className="text-white font-medium">Engineering Leaders & Architects</p>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link
                                        to="/contact"
                                        className="flex-1 px-6 py-4 bg-gradient-to-r from-orange-500 to-coral-500 rounded-xl text-white font-bold text-center hover:shadow-lg hover:shadow-orange-500/30 transition-all transform hover:-y-0.5"
                                    >
                                        Request Full {selectedResource.type.charAt(0).toUpperCase() + selectedResource.type.slice(1)} →
                                    </Link>
                                    <button
                                        onClick={() => setSelectedResource(null)}
                                        className="px-6 py-4 border border-white/10 rounded-xl text-gray-300 font-semibold hover:bg-white/5 transition-all"
                                    >
                                        Back to Resources
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

export default Resources;
