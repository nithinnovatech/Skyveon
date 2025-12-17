import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const stats = [
        { number: '500+', label: 'Projects Delivered' },
        { number: '50+', label: 'Enterprise Clients' },
        { number: '200+', label: 'Engineers' },
        { number: '15+', label: 'Countries' },
    ];

    const timeline = [
        {
            year: '2015',
            title: 'Founded',
            description: 'Started with a vision to deliver engineering excellence.',
        },
        {
            year: '2018',
            title: 'Global Expansion',
            description: 'Expanded operations across multiple continents.',
        },
        {
            year: '2020',
            title: 'Fortune 500 Partnerships',
            description: 'Became trusted partner for major enterprises.',
        },
        {
            year: '2023',
            title: 'AI Innovation',
            description: 'Launched proprietary AI accelerators and playbooks.',
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
                        About <span className="gradient-text">Skyveon</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                        We are a team of elite engineers building systems that power the future.
                        Our mission is to deliver engineering excellence at scale.
                    </p>
                </motion.div>
            </section>

            {/* Stats */}
            <section className="section-container">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                                {stat.number}
                            </div>
                            <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Mission */}
            <section className="section-container bg-dark-800">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                        Our <span className="gradient-text">Mission</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 text-center leading-relaxed mb-6">
                        To empower organizations with engineering solutions that are reliable, scalable,
                        and built to last. We believe in shipping quality code that makes a real impact.
                    </p>
                    <p className="text-lg md:text-xl text-gray-300 text-center leading-relaxed">
                        Our team of ex-FAANG and ex-unicorn engineers brings world-class expertise to
                        every project, ensuring your systems are built with the same rigor as the world's
                        most demanding platforms.
                    </p>
                </motion.div>
            </section>

            {/* Team Culture Section */}
            <section className="section-container bg-dark-900">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid md:grid-cols-2 gap-8 items-center"
                >
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Our <span className="gradient-text">Team</span>
                        </h2>
                        <p className="text-lg text-gray-300 leading-relaxed mb-4">
                            We're a diverse team of engineers, designers, and innovators united by a
                            passion for building exceptional technology solutions.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            Our culture emphasizes continuous learning, collaboration, and delivering
                            measurable value to our clients.
                        </p>
                    </div>
                    <div className="relative rounded-xl overflow-hidden">
                        <img
                            src="/images/team_culture_1765953840232.png"
                            alt="Skyveon Team Culture"
                            className="w-full h-auto rounded-xl shadow-2xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent"></div>
                    </div>
                </motion.div>
            </section>

            {/* Timeline */}
            <section className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Our <span className="gradient-text">Journey</span>
                    </h2>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div className="space-y-8">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex gap-6"
                            >
                                <div className="flex-shrink-0 w-24 text-right">
                                    <div className="text-2xl font-bold gradient-text">{item.year}</div>
                                </div>
                                <div className="flex-shrink-0 w-px bg-gradient-to-b from-blue-500 to-purple-500"></div>
                                <div className="flex-grow pb-8">
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
