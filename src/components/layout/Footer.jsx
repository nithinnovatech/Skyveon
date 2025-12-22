import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        solutions: [
            { name: 'Industries', path: '/industries' },
            { name: 'Solutions', path: '/solutions' },
            { name: 'Solution Patterns', path: '/patterns' },
            { name: 'Resources', path: '/resources' },
        ],
        company: [
            { name: 'About Us', path: '/about' },
            { name: 'Careers', path: '/careers' },
            { name: 'Contact', path: '/contact' },
        ],
    };

    return (
        <footer className="bg-dark-900 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
                    {/* Logo & Description */}
                    <div className="md:col-span-1">
                        <img
                            src="/images/skyveon-logo.png"
                            alt="Skyveon"
                            className="h-10 w-auto mb-4"
                        />
                        <p className="text-gray-400 text-sm">
                            Engineering that ships and scales. Cross-stack technology solutions for the modern enterprise.
                        </p>
                    </div>

                    {/* Solutions Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Solutions</h4>
                        <ul className="space-y-2">
                            {footerLinks.solutions.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Block */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Contact</h4>
                        <div className="space-y-2 text-gray-400 text-sm">
                            <p>Powell, OH</p>
                            <p>
                                <a href="mailto:info@skyveon.ai" className="hover:text-orange-400 transition-colors">
                                    info@skyveon.ai
                                </a>
                            </p>
                            <p>
                                <a href="mailto:hr@skyveon.ai" className="hover:text-orange-400 transition-colors">
                                    hr@skyveon.ai
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 mt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} Skyveon®. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-gray-500 hover:text-orange-400 transition-colors text-sm">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-gray-500 hover:text-orange-400 transition-colors text-sm">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
