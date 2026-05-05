import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus('Sending...');

        // Simulate email sending (in production, use EmailJS or backend API)
        setTimeout(() => {
            const mailtoLink = `mailto:rubans082005@gmail.com?subject=${encodeURIComponent('Portfolio Contact')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
            window.location.href = mailtoLink;
            setStatus('Message sent! Opening email client...');
            setFormData({ name: '', email: '', message: '' });
            setLoading(false);
            setTimeout(() => setStatus(''), 3000);
        }, 1000);
    };

    return (
        <section id="contact" className="py-20 bg-slate-800 text-white px-4">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text"
                >
                    Get In Touch
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-cyan-400 mb-6">Contact Information</h3>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <span className="text-2xl text-blue-400 mr-4">📧</span>
                                <div>
                                    <p className="text-gray-400 text-sm uppercase tracking-wide">Email</p>
                                    <a
                                        href="mailto:rubans082005@gmail.com"
                                        className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg transition"
                                    >
                                        rubans082005@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <span className="text-2xl text-green-400 mr-4">📱</span>
                                <div>
                                    <p className="text-gray-400 text-sm uppercase tracking-wide">Phone</p>
                                    <a
                                        href="tel:6374372005"
                                        className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg transition"
                                    >
                                        6374372005
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <span className="text-2xl text-purple-400 mr-4">🔗</span>
                                <div>
                                    <p className="text-gray-400 text-sm uppercase tracking-wide mb-3">Social Media</p>
                                    <div className="flex gap-4">
                                        <a
                                            href="https://github.com/rubanofficial"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-cyan-400 hover:text-cyan-300 text-2xl transition"
                                            title="GitHub"
                                        >
                                            <i className="fab fa-github"></i>
                                        </a>
                                        <a
                                            href="https://linkedin.com/in/ruban-s"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-cyan-400 hover:text-cyan-300 text-2xl transition"
                                            title="LinkedIn"
                                        >
                                            <i className="fab fa-linkedin"></i>
                                        </a>
                                        <a
                                            href="https://leetcode.com/u/S_RUBAN/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-cyan-400 hover:text-cyan-300 text-2xl transition font-bold"
                                            title="LeetCode"
                                        >
                                            &lt;&gt;
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <motion.a
                                href="/RUBAN RESUME.pdf"
                                download="RUBAN_S_Resume.pdf"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full mt-8 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-3 rounded-lg transition duration-300 block text-center"
                            >
                                📥 Download Resume (PDF)
                            </motion.a>
                        </div>
                    </motion.div>

                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-slate-700 to-slate-900 p-8 rounded-lg border border-cyan-500/30"
                    >
                        <div className="mb-6">
                            <label className="block text-cyan-400 font-semibold mb-2">Name</label>
                            <motion.input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                whileFocus={{ scale: 1.02 }}
                                className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition"
                                placeholder="Your Name"
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-cyan-400 font-semibold mb-2">Email</label>
                            <motion.input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                whileFocus={{ scale: 1.02 }}
                                className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition"
                                placeholder="your@email.com"
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-cyan-400 font-semibold mb-2">Message</label>
                            <motion.textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                whileFocus={{ scale: 1.02 }}
                                className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition resize-none"
                                placeholder="Your message here..."
                            ></motion.textarea>
                        </div>

                        {status && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-green-400 text-sm mb-4"
                            >
                                {status}
                            </motion.p>
                        )}

                        <motion.button
                            type="submit"
                            disabled={loading}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-3 rounded-lg transition duration-300 disabled:opacity-50"
                        >
                            {loading ? 'Sending...' : 'Send Message'}
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
