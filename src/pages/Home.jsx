import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ui/ServiceCard';
import FeatureCard from '../components/ui/FeatureCard';
import PlaybookCard from '../components/ui/PlaybookCard';
import Button from '../components/ui/Button';
import ContactForm from '../components/ui/ContactForm';
import NeuralNetwork from '../components/ui/NeuralNetwork';
import AnimatedOrb from '../components/ui/AnimatedOrb';

const Home = () => {
    // Service icons (using simple SVG)
    const CodeIcon = () => (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
    );

    const CloudIcon = () => (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
    );

    const DataIcon = () => (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
    );

    const PlatformIcon = () => (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
    );

    const AIIcon = () => (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
    );

    const GlobeIcon = () => (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );

    const RocketIcon = () => (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
    );

    const StarIcon = () => (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
    );

    const services = [
        {
            title: 'Digital Product Engineering',
            description: 'Web/mobile experiences with robust APIs. Design systems, performance budgets, DX you can feel.',
            link: '/solutions#prod',
            icon: <CodeIcon />,
            image: '/images/digital_product_engineering_1765953702630.png',
            tags: ['Next.js', 'React Native', 'Edge/SSR', 'Web Vitals'],
        },
        {
            title: 'Cloud & DevOps (SRE)',
            description: 'IaC, CI/CD, policy-as-code, observability, reliability at scale. Golden paths you can reuse.',
            link: '/solutions#sre',
            icon: <CloudIcon />,
            image: '/images/cloud_devops_1765953724289.png',
            tags: ['Terraform', 'EKS/GKE', 'ArgoCD', 'OpenTelemetry'],
        },
        {
            title: 'Data Engineering & Analytics',
            description: 'Pipelines, lakehouse models, semantic layers, and exec dashboards. Measurable freshness.',
            link: '/solutions#data',
            icon: <DataIcon />,
            image: '/images/data_analytics_1765953749508.png',
            tags: ['dbt', 'Spark', 'Delta/Lake', 'Superset'],
        },
        {
            title: 'Enterprise Platforms',
            description: 'Workday HCM/Finance & Salesforce clouds, integrated end-to-end with guardrails.',
            link: '/solutions#platforms',
            icon: <PlatformIcon />,
            image: '/images/enterprise_platforms_1765953784664.png',
            tags: ['Workday', 'Salesforce', 'Mulesoft', 'Security'],
        },
        {
            title: 'AI & Machine Learning',
            description: 'Private LLM assistants with guardrails, forecasting & anomaly detection that ship.',
            link: '/solutions#ai',
            icon: <AIIcon />,
            image: '/images/ai_machine_learning_1765953810878.png',
            tags: ['RAG', 'LLM Eval', 'Vector DB', 'Guardrails'],
        },
    ];

    const edgeFeatures = [
        {
            icon: <GlobeIcon />,
            title: 'Global Trust',
            description: 'Chosen by Fortune 500s and startups alike, Skyveon systems power millions of users across continents every single day.',
        },
        {
            icon: <RocketIcon />,
            title: 'Innovation at Core',
            description: 'With proprietary accelerators, AI-driven playbooks, and bleeding-edge architectures, we ensure you leap ahead — not just catch up.',
        },
        {
            icon: <StarIcon />,
            title: 'Elite Engineering Culture',
            description: 'Our teams are ex-FAANG and ex-unicorn engineers obsessed with reliability, design elegance, and measurable excellence.',
        },
    ];

    const playbooks = [
        {
            title: 'Cloud Foundations',
            description: 'Regulated-ready landing zones, CI/CD, and zero-trust guardrails.',
            link: '/patterns',
        },
        {
            title: 'Lakehouse + Analytics',
            description: 'Semantic layers, lineage, freshness SLAs, and exec dashboards.',
            link: '/patterns',
        },
        {
            title: 'Private AI Assistants',
            description: 'Privacy-first copilots with guardrails, evals, and safe rollback.',
            link: '/patterns',
        },
        {
            title: 'Cross-Stack Integration',
            description: 'End-to-end orchestration across cloud, data, AI, and platforms.',
            link: '/patterns',
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Neural Network Background */}
                <div className="absolute inset-0 bg-black">
                    <NeuralNetwork />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>

                    {/* Animated Gradient Orbs */}
                    <div className="absolute top-1/4 left-1/4">
                        <AnimatedOrb size={500} color="orange" delay={0} />
                    </div>
                    <div className="absolute bottom-1/4 right-1/4">
                        <AnimatedOrb size={400} color="coral" delay={0.3} />
                    </div>
                    <div className="absolute top-1/2 right-1/3">
                        <AnimatedOrb size={300} color="amber" delay={0.6} />
                    </div>
                </div>

                <div className="relative section-container text-center">
                    {/* Staggered Text Animation */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.h1
                            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{
                                duration: 0.8,
                                type: "spring",
                                stiffness: 100,
                                damping: 15
                            }}
                        >
                            <motion.span
                                className="text-white inline-block"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                            >
                                Engineering that{" "}
                            </motion.span>
                            <motion.span
                                className="gradient-text inline-block"
                                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{
                                    delay: 0.4,
                                    duration: 0.6,
                                    type: "spring",
                                    stiffness: 120,
                                    damping: 12
                                }}
                            >
                                ships and scales.
                            </motion.span>
                        </motion.h1>

                        <motion.p
                            className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.7 }}
                        >
                            We design, build, and operate modern systems—apps, cloud foundations, data platforms,
                            Workday & Salesforce, and pragmatic AI—engineered for reliability, security, and scale.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{
                                delay: 0.8,
                                duration: 0.6,
                                type: "spring",
                                stiffness: 100,
                                damping: 15
                            }}
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        >
                            <Button variant="primary">
                                Why Skyveon? →
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Enhanced Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center relative"
                        animate={{
                            boxShadow: [
                                "0 0 0px rgba(147, 51, 234, 0)",
                                "0 0 20px rgba(147, 51, 234, 0.5)",
                                "0 0 0px rgba(147, 51, 234, 0)"
                            ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="w-1.5 h-1.5 bg-white rounded-full mt-2 shadow-lg shadow-purple-500/50"
                        />
                    </motion.div>
                </motion.div>
            </section>

            {/* Services Section */}
            <section className="section-container bg-dark-800">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
                        Where we are <span className="gradient-text">strong</span>
                    </h2>
                    <p className="text-gray-400 text-center mb-12 md:mb-16 max-w-2xl mx-auto">
                        Comprehensive solutions across the entire technology stack
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.title}
                            {...service}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </section>

            {/* Skyveon Edge Section */}
            <section className="section-container bg-dark-900">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
                        The <span className="gradient-text">Skyveon Edge</span>
                    </h2>
                    <p className="text-gray-400 text-center mb-12 md:mb-16 max-w-2xl mx-auto">
                        What sets us apart in delivering exceptional engineering solutions
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {edgeFeatures.map((feature, index) => (
                        <FeatureCard
                            key={feature.title}
                            {...feature}
                            delay={index * 0.15}
                        />
                    ))}
                </div>
            </section>

            {/* Signature Playbooks Section */}
            <section className="section-container bg-dark-800">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
                        Signature <span className="gradient-text">Playbooks</span>
                    </h2>
                    <p className="text-gray-400 text-center mb-12 md:mb-16 max-w-3xl mx-auto">
                        Codified expertise from hundreds of enterprise launches, packaged as playbooks your teams
                        can adopt on day one — with Skyveon's rigor built in.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {playbooks.map((playbook, index) => (
                        <PlaybookCard
                            key={playbook.title}
                            {...playbook}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </section>

            {/* Bottom Tagline Section */}
            <section className="section-container bg-dark-900 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        The <span className="gradient-text">Cross-Stack Technology Company</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-400">
                        Cloud Data Platforms Workday Salesforce Pragmatic AI
                    </p>
                </motion.div>
            </section>

            {/* Contact Section */}
            <section className="section-container bg-dark-900">
                <ContactForm />
            </section>
        </div>
    );
};

export default Home;
