import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Industries', path: '/industries' },
        { name: 'Solutions', path: '/solutions' },
        { name: 'Solution Patterns', path: '/patterns' },
        { name: 'Resources', path: '/resources' },
        { name: 'Careers', path: '/careers' },
        { name: 'About us', path: '/about' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-dark-900/95 backdrop-blur-lg border-b border-white/10 shadow-lg'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2 group">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="text-2xl md:text-3xl font-bold"
                        >
                            <span className="gradient-text">Skyveon</span>
                            <span className="text-xs text-gray-400 ml-1">®</span>
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive(link.path)
                                        ? 'text-white bg-white/10'
                                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={false}
                animate={{
                    height: isMobileMenuOpen ? 'auto' : 0,
                    opacity: isMobileMenuOpen ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="lg:hidden overflow-hidden bg-dark-800/95 backdrop-blur-lg border-b border-white/10"
            >
                <div className="px-4 py-4 space-y-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${isActive(link.path)
                                    ? 'text-white bg-white/10'
                                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </motion.div>
        </nav>
    );
};

export default Navbar;
