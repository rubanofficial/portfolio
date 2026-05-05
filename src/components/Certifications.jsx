export default function Certifications() {
  const certifications = [
    {
      title: 'MongoDB Associate Developer',
      issuer: 'MongoDB Inc.',
      icon: '📜',
      description: 'Certified MongoDB Associate Developer demonstrating proficiency in MongoDB database design and development',
      link: 'https://university.mongodb.com'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-900 text-white px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-slate-700 to-slate-900 p-8 rounded-lg border border-cyan-500/30 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition duration-300 transform hover:scale-105"
            >
              <div className="flex items-start mb-4">
                <span className="text-5xl mr-4">{cert.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-cyan-400">{cert.title}</h3>
                  <p className="text-blue-400 font-semibold">{cert.issuer}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">{cert.description}</p>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold py-2 px-4 rounded transition duration-300"
                >
                  Verify Credential
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
