import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
    children,
    variant = 'primary',
    onClick,
    className = '',
    icon,
    ...props
}) => {
    const variants = {
        primary: 'btn-primary',
        secondary: 'btn-secondary',
        ghost: 'btn-ghost',
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className={`${variants[variant]} ${className} inline-flex items-center gap-2`}
            {...props}
        >
            {children}
            {icon && <span>{icon}</span>}
        </motion.button>
    );
};

export default Button;
