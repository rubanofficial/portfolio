import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open default email client
    const subject = encodeURIComponent('Portfolio Contact');
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:rubans082005@gmail.com?subject=${subject}&body=${body}`;
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-slate-800 text-white px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
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
                      className="text-cyan-400 hover:text-cyan-300 text-2xl transition"
                      title="LeetCode"
                    >
                      <i className="fab fa-code"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-slate-700 to-slate-900 p-8 rounded-lg border border-cyan-500/30">
            <div className="mb-6">
              <label className="block text-cyan-400 font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition"
                placeholder="Your Name"
              />
            </div>

            <div className="mb-6">
              <label className="block text-cyan-400 font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition"
                placeholder="your@email.com"
              />
            </div>

            <div className="mb-6">
              <label className="block text-cyan-400 font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-3 rounded-lg transition duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
