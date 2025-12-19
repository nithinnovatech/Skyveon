import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Resources = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filters = ['All', 'Cloud', 'Data', 'Platforms', 'Workday/Salesforce', 'Pragmatic AI'];

    const resources = [
        {
            meta: 'brief•platforms•8 min read',
            title: 'SLOs that matter: picking the right reliability signals',
            description: 'A practical primer on SLOs/SLA vs error budgets with examples that influence real product decisions.',
            category: 'brief Platforms',
            filter: 'Platforms',
        },
        {
            meta: 'checklist•cloud',
            title: 'Cloud landing zone readiness checklist',
            description: 'The 20 checks we require before turning on production in multi-account clouds (org, network, identity, cost).',
            category: 'checklist Cloud',
            filter: 'Cloud',
        },
        {
            meta: 'brief•data',
            title: 'Data contracts with dbt: keeping SLAs honest',
            description: 'How we use dbt + contracts + tests to guarantee freshness SLAs and prevent silent schema drift.',
            category: 'brief Data',
            filter: 'Data',
        },
        {
            meta: 'runbook•platforms',
            title: 'Incident playbook: blue/green rollbacks in 5 minutes',
            description: 'Step-by-step runbook for safe rollback with post-deploy smoke tests and traffic drains.',
            category: 'runbook Platforms',
            filter: 'Platforms',
        },
        {
            meta: 'talk•ai',
            title: 'Private LLM evals: measuring groundedness',
            description: 'Short talk + demo on setting up an eval harness that catches hallucinations with citations.',
            category: 'talk Pragmatic AI',
            filter: 'Pragmatic AI',
        },
        {
            meta: 'brief•workday / salesforce',
            title: 'Workday to warehouse: reconciliation patterns',
            description: 'Deterministic sync and reconciliation patterns that keep HCM/Finance aligned with analytics.',
            category: 'brief Workday/Salesforce',
            filter: 'Workday/Salesforce',
        },
    ];

    const filteredResources = activeFilter === 'All'
        ? resources
        : resources.filter(r => r.filter === activeFilter);

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
                        <span className="gradient-text">Resources</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                        Briefs, checklists, runbooks, and talks—curated from our delivery playbooks.
                    </p>
                </motion.div>
            </section>

            {/* Filters */}
            <section className="section-container">
                <div className="flex flex-wrap gap-3 justify-center mb-12">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === filter
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-dark-800 text-gray-400 hover:bg-dark-700 hover:text-white'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Resource Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {filteredResources.map((resource, index) => (
                        <motion.div
                            key={resource.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="card-hover cursor-pointer"
                        >
                            <div className="text-xs text-gray-500 mb-3">
                                {resource.meta}
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-white mb-3">
                                {resource.title}
                            </h3>
                            <p className="text-gray-400 text-sm mb-4">
                                {resource.description}
                            </p>
                            <div className="text-xs text-gray-500 mb-3">
                                {resource.category}
                            </div>
                            <div className="link-arrow text-sm">
                                View →Open to read details
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Resources;
