import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Solutions = () => {
    const location = useLocation();

    const solutions = [
        {
            id: 'prod',
            title: 'Digital Product Engineering',
            description: 'Build exceptional digital experiences that users love.',
            details: [
                'Modern web and mobile applications',
                'Design systems and component libraries',
                'API-first architecture',
                'Performance optimization',
                'Progressive web apps (PWA)',
            ],
        },
        {
            id: 'sre',
            title: 'Cloud & DevOps (SRE)',
            description: 'Infrastructure that scales with your business.',
            details: [
                'Infrastructure as Code (IaC)',
                'CI/CD pipeline automation',
                'Container orchestration (Kubernetes)',
                'Observability and monitoring',
                'Site reliability engineering',
            ],
        },
        {
            id: 'data',
            title: 'Data Engineering & Analytics',
            description: 'Turn data into actionable insights.',
            details: [
                'Data pipeline architecture',
                'Data lakehouse implementation',
                'Real-time analytics',
                'Business intelligence dashboards',
                'Data governance and quality',
            ],
        },
        {
            id: 'platforms',
            title: 'Enterprise Platforms',
            description: 'Seamless integration of enterprise systems.',
            details: [
                'Workday HCM and Financial Management',
                'Salesforce implementation and customization',
                'System integration and APIs',
                'Custom workflow automation',
                'Enterprise data migration',
            ],
        },
        {
            id: 'ai',
            title: 'AI & Machine Learning',
            description: 'Intelligent systems that drive business value.',
            details: [
                'Private LLM deployment',
                'ML model development and deployment',
                'Predictive analytics',
                'Natural language processing',
                'Computer vision solutions',
            ],
        },
    ];

    React.useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

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
                        Our <span className="gradient-text">Solutions</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                        Comprehensive technology solutions designed to accelerate your digital transformation
                        and drive measurable business outcomes.
                    </p>
                </motion.div>
            </section>

            {/* Solutions */}
            <section className="section-container">
                <div className="space-y-12 md:space-y-16">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={solution.id}
                            id={solution.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="glass rounded-2xl p-8 md:p-12 scroll-mt-24"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                {solution.title}
                            </h2>
                            <p className="text-lg md:text-xl text-gray-300 mb-6">
                                {solution.description}
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {solution.details.map((detail) => (
                                    <div key={detail} className="flex items-start gap-3">
                                        <svg
                                            className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span className="text-gray-400">{detail}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Solutions;
