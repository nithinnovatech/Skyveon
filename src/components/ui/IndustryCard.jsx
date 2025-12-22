import React from 'react';
import { motion } from 'framer-motion';

const IndustryCard = ({ title, tagline, icon, features, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: 0.6,
                delay,
                type: "spring",
                stiffness: 100,
                damping: 15
            }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="group"
        >
            <div className="card-hover h-full relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10 bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-600/50 hover:border-orange-500/30">
                {/* Decorative gradient overlay on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-orange-500/5 via-transparent to-coral-500/5"></div>

                {/* Glow effect */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                    {/* Icon and Title */}
                    <div className="flex items-start gap-4 mb-4">
                        {icon && (
                            <div className="text-orange-400 group-hover:text-orange-300 transition-colors duration-300 transform group-hover:scale-110 flex-shrink-0">
                                {icon}
                            </div>
                        )}
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                                {title}
                            </h3>
                            <p className="text-sm text-gray-400 mt-1">
                                {tagline}
                            </p>
                        </div>
                    </div>

                    {/* Features List */}
                    {features && features.length > 0 && (
                        <ul className="space-y-2 flex-grow">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-2 text-gray-300 text-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0"></span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default IndustryCard;
