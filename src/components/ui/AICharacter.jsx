import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AICharacter = ({ size = 'md' }) => {
    const [isBlinking, setIsBlinking] = useState(false);

    // Random blinking effect
    useEffect(() => {
        const blinkInterval = setInterval(() => {
            setIsBlinking(true);
            setTimeout(() => setIsBlinking(false), 200);
        }, 3000 + Math.random() * 2000);

        return () => clearInterval(blinkInterval);
    }, []);

    const sizes = {
        sm: 'w-8 h-8',
        md: 'w-12 h-12',
        lg: 'w-16 h-16',
        xl: 'w-24 h-24'
    };

    return (
        <div className={`${sizes[size]} relative flex items-center justify-center`}>
            {/* Main Character Container */}
            <motion.div
                animate={{
                    y: [0, -5, 0],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="relative w-full h-full"
            >
                {/* Robot Head */}
                <motion.div
                    className="relative w-full h-full bg-[#0a0a0a] rounded-2xl shadow-lg border border-white/10 overflow-hidden"
                    animate={{
                        boxShadow: [
                            '0 0 15px rgba(255, 255, 255, 0.1)',
                            '0 0 25px rgba(255, 107, 53, 0.2)',
                            '0 0 15px rgba(255, 255, 255, 0.1)',
                        ]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                    }}
                >
                    {/* Glossy Visor */}
                    <div className="absolute top-0 left-0 right-0 h-[60%] bg-gradient-to-b from-white/10 to-transparent z-10" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black via-zinc-900 to-black" />

                    {/* Eyes Screen / Visor Detail */}
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[85%] h-[45%] bg-black rounded-lg flex items-center justify-center gap-4 z-20 border border-white/5 shadow-inner">
                        {/* Left Eye (Sleek LED style) */}
                        <motion.div
                            animate={{
                                opacity: isBlinking ? 0 : [0.7, 1, 0.7],
                                scale: isBlinking ? 0.8 : 1
                            }}
                            transition={{ duration: 0.15 }}
                            className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                        />
                        {/* Right Eye */}
                        <motion.div
                            animate={{
                                opacity: isBlinking ? 0 : [0.7, 1, 0.7],
                                scale: isBlinking ? 0.8 : 1
                            }}
                            transition={{ duration: 0.15 }}
                            className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                        />
                    </div>

                    {/* Mouth Line / Sensor */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-white/10 rounded-full z-20" />

                    {/* Reflective shine */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-white/5 rounded-full blur-xl" />
                </motion.div>

            </motion.div>

            {/* Glow Effect */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                }}
                className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full blur-md -z-10"
            />
        </div>
    );
};

export default AICharacter;
