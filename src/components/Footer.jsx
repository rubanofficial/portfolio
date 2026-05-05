export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-cyan-500/30 text-gray-300 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-cyan-400 font-bold text-lg mb-4">Ruban S</h3>
            <p className="text-gray-400">Full-Stack Developer | MERN Specialist</p>
          </div>

          <div>
            <h4 className="text-cyan-400 font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-400 transition">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-cyan-400 font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/rubanofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition text-lg"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://linkedin.com/in/ruban-s"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition text-lg"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://leetcode.com/u/S_RUBAN/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition text-lg"
                title="LeetCode"
              >
                <i className="fas fa-code"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center text-sm text-gray-500">
          <p>© {currentYear} Ruban S. All rights reserved.</p>
          <p className="mt-2">Designed & Built with <span className="text-red-400">❤</span> using React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
