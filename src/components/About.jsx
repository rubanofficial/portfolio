export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-800 text-white px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-cyan-400 mb-6">Who I Am</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              I'm a passionate Full-Stack Developer specializing in the MERN stack. Currently pursuing my B.Tech in Artificial Intelligence & Data Science at Kongu Engineering College (CGPA: 7.66).
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              With hands-on experience building responsive frontend interfaces and secure backend architectures, I excel in REST API design, JWT-based authentication, database modeling, and scalable application workflows.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm enthusiastic about creating impactful digital solutions and continuously expanding my technical expertise. When I'm not coding, I enjoy solving problems on LeetCode and contributing to open-source projects.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-700 to-slate-900 p-8 rounded-lg border border-cyan-500/30">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-6">Quick Facts</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 font-bold">•</span>
                <span><strong>Location:</strong> India</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 font-bold">•</span>
                <span><strong>Experience:</strong> Intern at SAN Technovation (Aug - Sep 2025)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 font-bold">•</span>
                <span><strong>Email:</strong> rubans082005@gmail.com</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 font-bold">•</span>
                <span><strong>Phone:</strong> 6374372005</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 font-bold">•</span>
                <span><strong>Certification:</strong> MongoDB Associate Developer</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
