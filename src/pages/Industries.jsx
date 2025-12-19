import React from 'react';
import { motion } from 'framer-motion';

const Industries = () => {
    const industries = [
        {
            title: 'Financial Services',
            description: 'Zero-trust by default, auditable changes, and cost-aware scale.',
            points: [
                'PCI/DSS & SOX readiness',
                'Golden paths for CI/CD',
                'Data lineage & controls',
            ],
        },
        {
            title: 'Healthcare & Life Sciences',
            description: 'HIPAA/GDPR baked in: PHI isolation, access controls, repeatable pipelines.',
            points: [
                'De-identification & retention',
                'Clinical data models',
                'Audit & rollback playbooks',
            ],
        },
        {
            title: 'Retail & eCommerce',
            description: 'Personalization, inventory signals, and reliable peak-season scale.',
            points: [
                'Event streams & CDC',
                'Realtime analytics',
                'A/B and guardrailed rollouts',
            ],
        },
        {
            title: 'Manufacturing',
            description: 'Secure telemetry from plant to cloud, anomaly detection, and closed-loop actions.',
            points: [
                'Edge → lakehouse',
                'Predictive maintenance',
                'Digital twin patterns',
            ],
        },
        {
            title: 'Public Sector',
            description: 'Compliance-first delivery with mission SLAs.',
            points: [
                'FedRAMP-aligned paths',
                'Data governance',
                'Reliability runbooks',
            ],
        },
        {
            title: 'Media & Technology',
            description: 'Multi-tenant platforms, developer experience at scale, AI assistants with rollback.',
            points: [
                'Platform engineering',
                'Observability at scale',
                'Private AI assistants',
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
                        Industries we <span className="gradient-text">serve</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                        We design, build, and operate cross-stack systems with compliance, reliability, and measurable outcomes — tailored to each industry's guardrails and goals.
                    </p>
                </motion.div>
            </section>

            {/* Industries Grid */}
            <section className="section-container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={industry.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="card-hover"
                        >
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                {industry.title}
                            </h3>
                            <p className="text-gray-300 text-base md:text-lg mb-6">
                                {industry.description}
                            </p>
                            <ul className="space-y-2">
                                {industry.points.map((point, idx) => (
                                    <li key={idx} className="text-gray-400 text-sm md:text-base flex items-start">
                                        <span className="text-blue-400 mr-2">•</span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Industries;
