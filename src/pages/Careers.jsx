import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

const Careers = () => {
    const openings = [
        {
            title: 'Senior Full Stack Engineer',
            location: 'Remote / Hybrid',
            type: 'Full-time',
            department: 'Engineering',
        },
        {
            title: 'Cloud Solutions Architect',
            location: 'Remote',
            type: 'Full-time',
            department: 'Cloud & DevOps',
        },
        {
            title: 'Data Engineer',
            location: 'Remote / Hybrid',
            type: 'Full-time',
            department: 'Data Engineering',
        },
        {
            title: 'AI/ML Engineer',
            location: 'Remote',
            type: 'Full-time',
            department: 'AI & ML',
        },
        {
            title: 'Workday Consultant',
            location: 'Remote / Hybrid',
            type: 'Full-time',
            department: 'Enterprise Platforms',
        },
        {
            title: 'Salesforce Developer',
            location: 'Remote',
            type: 'Full-time',
            department: 'Enterprise Platforms',
        },
    ];

    const values = [
        {
            title: 'Excellence',
            description: 'We hold ourselves to the highest standards of engineering excellence.',
            icon: '⭐',
        },
        {
            title: 'Innovation',
            description: 'We embrace cutting-edge technologies and push boundaries.',
            icon: '🚀',
        },
        {
            title: 'Collaboration',
            description: 'We believe the best solutions come from diverse perspectives.',
            icon: '🤝',
        },
        {
            title: 'Growth',
            description: 'We invest in continuous learning and career development.',
            icon: '📈',
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
                        Join Our <span className="gradient-text">Elite Team</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                        Work with ex-FAANG and ex-unicorn engineers on cutting-edge projects that
                        power millions of users worldwide.
                    </p>
                    <Button variant="primary">View Open Positions</Button>
                </motion.div>
            </section>

            {/* Values */}
            <section className="section-container bg-dark-800">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Our <span className="gradient-text">Values</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="glass rounded-xl p-6 text-center"
                        >
                            <div className="text-5xl mb-4">{value.icon}</div>
                            <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                            <p className="text-gray-400 text-sm">{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Open Positions */}
            <section className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Open <span className="gradient-text">Positions</span>
                    </h2>
                </motion.div>

                <div className="space-y-4">
                    {openings.map((job, index) => (
                        <motion.div
                            key={job.title}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                                    <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                                        <span className="flex items-center gap-1">
                                            📍 {job.location}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            💼 {job.type}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            🏢 {job.department}
                                        </span>
                                    </div>
                                </div>
                                <Button variant="secondary" className="md:flex-shrink-0">
                                    Apply Now
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Careers;
