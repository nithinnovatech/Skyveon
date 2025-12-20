import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const AnimatedOrb = ({ size = 400, color = 'purple', delay = 0 }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;

            // Calculate parallax offset (move opposite to mouse, scaled down)
            const xOffset = (clientX - innerWidth / 2) / 20;
            const yOffset = (clientY - innerHeight / 2) / 20;

            mouseX.set(xOffset);
            mouseY.set(yOffset);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    const colorMap = {
        orange: 'from-orange-500/30 via-orange-400/20 to-transparent',
        coral: 'from-orange-400/30 via-amber-400/20 to-transparent',
        amber: 'from-amber-500/30 via-orange-500/20 to-transparent',
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
                opacity: 1,
                scale: [0.8, 1, 0.9, 1],
            }}
            transition={{
                opacity: { delay, duration: 1 },
                scale: {
                    delay,
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }}
            style={{
                x,
                y,
                width: size,
                height: size,
            }}
            className="absolute pointer-events-none"
        >
            {/* Main Orb */}
            <motion.div
                animate={{
                    rotate: [0, 360],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className={`w-full h-full rounded-full bg-gradient-to-br ${colorMap[color]} blur-3xl opacity-50`}
            />

            {/* Inner Glow */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className={`absolute inset-0 rounded-full bg-gradient-to-br ${colorMap[color]} blur-2xl`}
            />
        </motion.div>
    );
};

export default AnimatedOrb;
