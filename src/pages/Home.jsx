import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ui/ServiceCard';
import FeatureCard from '../components/ui/FeatureCard';
import PlaybookCard from '../components/ui/PlaybookCard';
import IndustryCard from '../components/ui/IndustryCard';
import Button from '../components/ui/Button';
import ContactForm from '../components/ui/ContactForm';
import { SplineScene } from '../components/ui/SplineScene';
import { Spotlight } from '../components/ui/Spotlight';
import NeuralNetwork from '../components/ui/NeuralNetwork';

const Home = () => {
    const handleScrollToEdge = () => {
        const edgeSection = document.getElementById('edge');
        if (edgeSection) {
            edgeSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
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

    // Industry Icons
    const BankIcon = () => (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
    );

    const HeartIcon = () => (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
    );

    const ShoppingIcon = () => (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
    );

    const FactoryIcon = () => (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
    );

    const ShieldIcon = () => (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
    );

    const MonitorIcon = () => (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    );

    const industries = [
        {
            title: 'Financial Services',
            tagline: 'Zero-trust by default, auditable changes, and cost-aware scale.',
            icon: <BankIcon />,
            features: ['PCI/DSS & SOX readiness', 'Golden paths for CI/CD', 'Data lineage & controls'],
        },
        {
            title: 'Healthcare & Life Sciences',
            tagline: 'HIPAA/GDPR baked in: PHI isolation, access controls, repeatable pipelines.',
            icon: <HeartIcon />,
            features: ['De-identification & retention', 'Clinical data models', 'Audit & rollback playbooks'],
        },
        {
            title: 'Retail & eCommerce',
            tagline: 'Personalization, inventory signals, and reliable peak-season scale.',
            icon: <ShoppingIcon />,
            features: ['Event streams & CDC', 'Realtime analytics', 'A/B and guardrailed rollouts'],
        },
        {
            title: 'Manufacturing',
            tagline: 'Secure telemetry from plant to cloud, anomaly detection, and closed-loop actions.',
            icon: <FactoryIcon />,
            features: ['Edge → lakehouse', 'Predictive maintenance', 'Digital twin patterns'],
        },
        {
            title: 'Public Sector',
            tagline: 'Compliance-first delivery with mission SLAs.',
            icon: <ShieldIcon />,
            features: ['FedRAMP-aligned paths', 'Data governance', 'Reliability runbooks'],
        },
        {
            title: 'Media & Technology',
            tagline: 'Multi-tenant platforms, developer experience at scale, AI assistants with rollback.',
            icon: <MonitorIcon />,
            features: ['Platform engineering', 'Observability at scale', 'Private AI assistants'],
        },
    ];


    return (
        <div className="min-h-screen">
            {/* Hero Section with Spline 3D */}
            <section className="relative min-h-screen w-full bg-black/[0.96] overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-40">
                    <NeuralNetwork />
                </div>
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="#FF6B35"
                />

                <div className="flex flex-col lg:flex-row min-h-screen relative z-10">
                    {/* Left content */}
                    <div className="flex-1 p-6 pt-24 md:p-12 lg:p-16 relative z-10 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-4 md:mb-6"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                                </span>
                                AI-Powered Solutions
                            </motion.div>

                            <motion.h1
                                className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                            >
                                <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                                    Engineering that{" "}
                                </span>
                                <span className="gradient-text">
                                    ships and scales.
                                </span>
                            </motion.h1>

                            <motion.p
                                className="mt-2 md:mt-4 text-neutral-300 max-w-lg text-base md:text-xl leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                            >
                                We design, build, and operate modern systems—apps, cloud foundations, data platforms,
                                Workday & Salesforce, and pragmatic AI—engineered for reliability, security, and scale.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                                className="mt-6 md:mt-8"
                            >
                                <Button variant="primary" onClick={handleScrollToEdge}>
                                    Why Skyveon? →
                                </Button>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right content - Logo and Robot */}
                    <div className="flex-1 relative min-h-[250px] md:min-h-[400px] lg:min-h-0 flex flex-col items-center justify-center">
                        <motion.img
                            src="/src/assets/skyveon-logo.png"
                            alt="Skyveon Logo"
                            className="w-[150px] md:w-[280px] lg:w-[350px] h-auto object-contain drop-shadow-2xl z-10"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        />
                        <div className="w-full h-[200px] md:h-[350px] lg:h-[400px] -mt-4 md:-mt-8">
                            <SplineScene
                                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
                >
                    <motion.div
                        className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
                        animate={{
                            boxShadow: [
                                "0 0 0px rgba(255, 107, 53, 0)",
                                "0 0 20px rgba(255, 107, 53, 0.5)",
                                "0 0 0px rgba(255, 107, 53, 0)"
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
                            className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 shadow-lg shadow-orange-500/50"
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
            <section id="edge" className="section-container bg-dark-900 scroll-mt-20">
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

            {/* Industries We Serve Section */}
            <section className="section-container bg-dark-900">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
                        Industries we <span className="gradient-text">serve</span>
                    </h2>
                    <p className="text-gray-400 text-center mb-12 md:mb-16 max-w-3xl mx-auto">
                        We design, build, and operate cross-stack systems with compliance, reliability, and measurable
                        outcomes — tailored to each industry's guardrails and goals.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {industries.map((industry, index) => (
                        <IndustryCard
                            key={industry.title}
                            {...industry}
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
