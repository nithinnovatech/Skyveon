import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        Solutions: [
            { name: 'Digital Product Engineering', path: '/solutions#prod' },
            { name: 'Cloud & DevOps', path: '/solutions#sre' },
            { name: 'Data Engineering', path: '/solutions#data' },
            { name: 'Enterprise Platforms', path: '/solutions#platforms' },
            { name: 'AI & Machine Learning', path: '/solutions#ai' },
        ],
        Company: [
            { name: 'About Us', path: '/about' },
            { name: 'Careers', path: '/careers' },
            { name: 'Resources', path: '/resources' },
            { name: 'Industries', path: '/industries' },
        ],
    };

    return (
        <footer className="bg-dark-900 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Link to="/" className="inline-block mb-4">
                            <h3 className="text-2xl md:text-3xl font-bold gradient-text">
                                Skyveon
                            </h3>
                        </Link>
                        <p className="text-gray-400 text-sm md:text-base max-w-md mb-6">
                            Engineering that ships and scales. We design, build, and operate modern systems
                            engineered for reliability, security, and scale.
                        </p>
                        <p className="text-gray-500 text-xs md:text-sm">
                            Solutions in Every Horizon
                        </p>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="text-white font-semibold mb-4 text-sm md:text-base">
                                {category}
                            </h4>
                            <ul className="space-y-2">
                                {links.map((link) => (
                                    <li key={link.path}>
                                        <Link
                                            to={link.path}
                                            className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-xs md:text-sm text-center md:text-left">
                            © {currentYear} Skyveon®. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            <Link
                                to="/privacy"
                                className="text-gray-500 hover:text-white transition-colors text-xs md:text-sm"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                to="/terms"
                                className="text-gray-500 hover:text-white transition-colors text-xs md:text-sm"
                            >
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
