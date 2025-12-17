import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, description, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="glass rounded-xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300"
        >
            <div className="flex flex-col items-center text-center">
                {icon && (
                    <div className="mb-4 text-blue-400">
                        {icon}
                    </div>
                )}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                    {title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

export default FeatureCard;
