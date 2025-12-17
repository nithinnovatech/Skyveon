import React from 'react';
import { motion } from 'framer-motion';
import PlaybookCard from '../components/ui/PlaybookCard';

const Patterns = () => {
    const patterns = [
        {
            title: 'Cloud Foundations',
            description: 'Regulated-ready landing zones, CI/CD, and zero-trust guardrails.',
            details: 'Enterprise-grade cloud infrastructure patterns with security and compliance built-in.',
        },
        {
            title: 'Lakehouse + Analytics',
            description: 'Semantic layers, lineage, freshness SLAs, and exec dashboards.',
            details: 'Modern data architecture combining the best of data lakes and warehouses.',
        },
        {
            title: 'Private AI Assistants',
            description: 'Privacy-first copilots with guardrails, evals, and safe rollback.',
            details: 'Secure AI deployment patterns for enterprise environments.',
        },
        {
            title: 'Cross-Stack Integration',
            description: 'End-to-end orchestration across cloud, data, AI, and platforms.',
            details: 'Seamless integration patterns across your entire technology stack.',
        },
        {
            title: 'Microservices Architecture',
            description: 'Scalable, resilient service mesh with observability.',
            details: 'Battle-tested patterns for building distributed systems.',
        },
        {
            title: 'Event-Driven Systems',
            description: 'Real-time data streaming and event processing at scale.',
            details: 'Patterns for building reactive, event-driven architectures.',
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
                        Solution <span className="gradient-text">Patterns</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                        Proven architectural patterns and best practices from hundreds of successful
                        enterprise implementations.
                    </p>
                </motion.div>
            </section>

            {/* Patterns Grid */}
            <section className="section-container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
                    {patterns.slice(0, 4).map((pattern, index) => (
                        <PlaybookCard
                            key={pattern.title}
                            title={pattern.title}
                            description={pattern.description}
                            delay={index * 0.1}
                        />
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {patterns.slice(4).map((pattern, index) => (
                        <motion.div
                            key={pattern.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="card-hover"
                        >
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                                {pattern.title}
                            </h3>
                            <p className="text-gray-400 text-sm md:text-base mb-3">
                                {pattern.description}
                            </p>
                            <p className="text-gray-500 text-sm">
                                {pattern.details}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Patterns;
