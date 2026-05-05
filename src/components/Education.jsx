export default function Education() {
  const education = [
    {
      degree: 'B.Tech – Artificial Intelligence & Data Science',
      institution: 'Kongu Engineering College',
      duration: '2023 – 2027',
      details: 'CGPA: 7.66 (Current)',
      achievements: [
        'Focus on AI and Data Science fundamentals',
        'Strong foundation in algorithms and data structures',
        'Coursework includes Machine Learning, Python, and Database Systems'
      ]
    },
    {
      degree: 'HSC',
      institution: 'Equitas Gurukul Matric School',
      duration: '2022 – 2023',
      details: 'Percentage: 92.5%',
      achievements: [
        'Excellent academic performance',
        'Foundation for engineering studies'
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-slate-800 text-white px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
          Education
        </h2>

        <div className="space-y-8">
          {education.map((edu, idx) => (
            <div key={idx} className="bg-gradient-to-br from-slate-700 to-slate-900 p-8 rounded-lg border-l-4 border-cyan-400 hover:border-blue-400 transition duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-cyan-400">{edu.degree}</h3>
                  <p className="text-blue-400 font-semibold text-lg mt-1">{edu.institution}</p>
                </div>
                <p className="text-gray-400 text-sm md:text-right mt-2 md:mt-0">{edu.duration}</p>
              </div>

              <p className="text-green-400 font-semibold mb-4">{edu.details}</p>

              <ul className="space-y-2">
                {edu.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-300 flex items-start">
                    <span className="text-yellow-400 mr-3 font-bold mt-1">★</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
