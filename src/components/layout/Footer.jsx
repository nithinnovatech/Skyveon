import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark-900 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                {/* Logo */}
                <div className="mb-8">
                    <img
                        src="/images/skyveon-logo.png"
                        alt="Skyveon"
                        className="h-12 w-auto mb-6"
                    />
                </div>

                {/* Contact Block */}
                <div className="mb-8">
                    <h4 className="text-white font-semibold mb-4 text-lg">Contact</h4>
                    <div className="space-y-2 text-gray-400">
                        <p>Powell, OH</p>
                        <p>
                            <a href="mailto:info@skyveon.ai" className="hover:text-white transition-colors">
                                info@skyveon.ai
                            </a>
                        </p>
                        <p>
                            <a href="mailto:hr@skyveon.ai" className="hover:text-white transition-colors">
                                hr@skyveon.ai
                            </a>
                        </p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-white/10">
                    <p className="text-gray-500 text-sm text-center md:text-left">
                        © {currentYear} Skyveon®. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
