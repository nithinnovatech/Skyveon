import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AICharacter = ({ isWaving = false, size = 'md' }) => {
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
                    className="relative w-full h-full bg-gradient-to-br from-orange-500 via-orange-400 to-orange-600 rounded-full shadow-lg"
                    animate={{
                        boxShadow: [
                            '0 0 20px rgba(255, 107, 53, 0.5)',
                            '0 0 30px rgba(255, 140, 97, 0.7)',
                            '0 0 20px rgba(255, 107, 53, 0.5)',
                        ]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                >
                    {/* Antenna */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-gradient-to-t from-orange-400 to-transparent">
                        <motion.div
                            animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.7, 1, 0.7]
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                            }}
                            className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-orange-400 rounded-full shadow-lg shadow-orange-400/50"
                        />
                    </div>

                    {/* Eyes */}
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 flex gap-2">
                        {/* Left Eye */}
                        <motion.div
                            animate={{
                                scaleY: isBlinking ? 0.1 : 1,
                            }}
                            transition={{ duration: 0.1 }}
                            className="w-2 h-2 bg-white rounded-full shadow-inner"
                        >
                            <div className="w-1 h-1 bg-blue-900 rounded-full mt-0.5 ml-0.5" />
                        </motion.div>
                        {/* Right Eye */}
                        <motion.div
                            animate={{
                                scaleY: isBlinking ? 0.1 : 1,
                            }}
                            transition={{ duration: 0.1 }}
                            className="w-2 h-2 bg-white rounded-full shadow-inner"
                        >
                            <div className="w-1 h-1 bg-blue-900 rounded-full mt-0.5 ml-0.5" />
                        </motion.div>
                    </div>

                    {/* Smile */}
                    <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2">
                        <svg width="16" height="8" viewBox="0 0 16 8" className="text-white opacity-80">
                            <path
                                d="M2 2 Q8 6 14 2"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                fill="none"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>

                    {/* Cheek Blush */}
                    <div className="absolute top-1/2 left-1 w-2 h-1.5 bg-pink-300/30 rounded-full blur-sm" />
                    <div className="absolute top-1/2 right-1 w-2 h-1.5 bg-pink-300/30 rounded-full blur-sm" />
                </motion.div>

                {/* Waving Hand */}
                {isWaving && (
                    <motion.div
                        initial={{ rotate: 0, x: 0, y: 0 }}
                        animate={{
                            rotate: [0, 15, -15, 15, -15, 0],
                            x: [0, 2, -2, 2, -2, 0],
                        }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            repeatDelay: 0.5,
                        }}
                        className="absolute -right-2 top-1/4 text-2xl"
                        style={{ fontSize: size === 'sm' ? '16px' : size === 'md' ? '20px' : size === 'lg' ? '24px' : '32px' }}
                    >
                        👋
                    </motion.div>
                )}
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
