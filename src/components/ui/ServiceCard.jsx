import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, link, icon, image, tags, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: 0.6,
                delay,
                type: "spring",
                stiffness: 100,
                damping: 15
            }}
            whileHover={{ scale: 1.03 }}
            className="group"
        >
            <Link to={link}>
                <div className="card-hover h-full relative overflow-hidden transition-shadow duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
                    {/* Background Image with Hover Effect */}
                    {image && (
                        <>
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                                <img
                                    src={image}
                                    alt={title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-800/80 to-transparent"></div>
                        </>
                    )}

                    {/* Content - keep relative positioning */}
                    <div className="flex flex-col h-full relative z-10">
                        {icon && (
                            <div className="mb-4 text-orange-400 group-hover:text-orange-300 transition-colors duration-300 transform group-hover:scale-110">
                                {icon}
                            </div>
                        )}
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                            {title}
                        </h3>
                        <p className="text-gray-400 text-sm md:text-base mb-4 flex-grow">
                            {description}
                        </p>
                        {tags && tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                                {tags.map((tag, index) => (
                                    <span key={index} className="text-xs text-gray-500">
                                        {tag}
                                        {index < tags.length - 1 && ' |'}
                                    </span>
                                ))}
                            </div>
                        )}
                        <div className="link-arrow text-sm md:text-base group">
                            Explore →
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default ServiceCard;
