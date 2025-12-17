import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PlaybookCard = ({ title, description, image, link, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="group relative overflow-hidden rounded-xl"
        >
            <Link to={link || '/'}>
                <div className="relative h-64 md:h-80 overflow-hidden bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 grid-pattern opacity-30"></div>

                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-end p-6 md:p-8 bg-gradient-to-t from-dark-900 via-dark-900/80 to-transparent">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
                            {title}
                        </h3>
                        <p className="text-gray-400 text-sm md:text-base">
                            {description}
                        </p>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/20 group-hover:to-purple-600/20 transition-all duration-300"></div>
                </div>
            </Link>
        </motion.div>
    );
};

export default PlaybookCard;
