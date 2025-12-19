import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const principles = [
        {
            icon: '⚡',
            title: 'Outcomes over optics',
            description: 'We measure success in shipped systems, not in glossy slides.',
        },
        {
            icon: '🔒',
            title: 'Security by default',
            description: 'Privacy, compliance, and governance are built in—not bolted on.',
        },
        {
            icon: '❤️',
            title: 'Human-centric engineering',
            description: 'Technology only matters when it empowers the people who use it.',
        },
        {
            icon: '📚',
            title: 'Knowledge transfer',
            description: 'We document, teach, and hand over so solutions live long after launch.',
        },
    ];

    const whyChooseUs = [
        {
            title: 'Accountable Builders',
            description: 'One team that owns the journey end-to-end. No hand-offs, no excuses.',
        },
        {
            title: 'Engineering Discipline',
            description: 'Structured delivery with real metrics—uptime, cycle time, defect rates.',
        },
        {
            title: 'Depth Across Stacks',
            description: 'Cloud, Data, AI, Workday & Salesforce. Not just breadth, but proven mastery.',
        },
        {
            title: 'Operable Outcomes',
            description: 'We don\'t stop at launch. We ensure systems keep running at scale.',
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
                        About <span className="gradient-text">Us</span>
                    </h1>
                </motion.div>
            </section>

            {/* Story */}
            <section className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto space-y-6"
                >
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                        Every company has a beginning. Ours started with a group of engineers who were more than just coders—they were dreamers. What began as curiosity, side projects, and late-night builds slowly transformed into an industry force. Today, those same IT enthusiasts have become veterans, guiding enterprises through some of the most complex technology shifts of our era.
                    </p>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                        We are not here to sell buzzwords. We are here to design and deliver systems that actually work. From setting up resilient cloud foundations, to building enterprise-grade data platforms, to integrating mission-critical platforms like Workday and Salesforce, and finally to responsibly embedding AI into business workflows—we've proven that vision can scale into real impact.
                    </p>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                        Our DNA is built on relentless curiosity, disciplined engineering, and a refusal to compromise on reliability or security. It's this mix of energy and rigor that lets us transform what once felt like IT "dreams" into outcomes that leaders and users can trust.
                    </p>
                </motion.div>
            </section>

            {/* Guiding Principles */}
            <section className="section-container bg-dark-800">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Our Guiding <span className="gradient-text">Principles</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {principles.map((principle, index) => (
                            <motion.div
                                key={principle.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex gap-4"
                            >
                                <div className="text-3xl flex-shrink-0">{principle.icon}</div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        {principle.title}
                                    </h3>
                                    <p className="text-gray-400">
                                        {principle.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Why Teams Choose Us */}
            <section className="section-container bg-dark-900">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Why Teams <span className="gradient-text">Choose Us</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {whyChooseUs.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="card-hover"
                            >
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Closing Statement */}
            <section className="section-container bg-dark-800 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto"
                >
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                        We are builders at heart—engineers who turned enthusiasm into expertise. Our mission is simple: make technology deliver real outcomes, without the noise.
                    </p>
                </motion.div>
            </section>
        </div>
    );
};

export default About;
