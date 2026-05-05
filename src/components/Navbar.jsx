import { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { isDark, setIsDark } = useContext(ThemeContext);

    const navItems = [
        { label: 'Home', id: 'hero' },
        { label: 'About', id: 'about' },
        { label: 'Skills', id: 'skills' },
        { label: 'Projects', id: 'projects' },
        { label: 'Experience', id: 'experience' },
        { label: 'Education', id: 'education' },
        { label: 'Contact', id: 'contact' }
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <nav className="fixed w-full top-0 bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/30 text-white z-50 shadow-lg shadow-cyan-500/10">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <motion.div
                        className="flex-shrink-0"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <button
                            onClick={() => scrollToSection('hero')}
                            className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text hover:from-blue-300 hover:to-cyan-300 transition"
                        >
                            RS
                        </button>
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-1 items-center">
                        {navItems.map((item) => (
                            <motion.button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition duration-300 hover:bg-slate-700/50"
                            >
                                {item.label}
                            </motion.button>
                        ))}

                        {/* Theme Toggle */}
                        <motion.button
                            onClick={() => setIsDark(!isDark)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="ml-4 p-2 rounded-md bg-slate-700/50 hover:bg-slate-600 transition"
                            title={isDark ? 'Light Mode' : 'Dark Mode'}
                        >
                            {isDark ? (
                                <i className="fas fa-sun text-yellow-400"></i>
                            ) : (
                                <i className="fas fa-moon text-purple-400"></i>
                            )}
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-2">
                        <motion.button
                            onClick={() => setIsDark(!isDark)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-2 rounded-md bg-slate-700/50 hover:bg-slate-600 transition"
                        >
                            {isDark ? (
                                <i className="fas fa-sun text-yellow-400"></i>
                            ) : (
                                <i className="fas fa-moon text-purple-400"></i>
                            )}
                        </motion.button>
                        <motion.button
                            onClick={() => setIsOpen(!isOpen)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 focus:outline-none transition"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="md:hidden pb-3 space-y-1"
                    >
                        {navItems.map((item) => (
                            <motion.button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                whileHover={{ x: 5 }}
                                className="w-full text-left text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 block px-3 py-2 rounded-md text-base font-medium transition"
                            >
                                {item.label}
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </div>
        </nav>
    );
}
