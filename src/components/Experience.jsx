export default function Experience() {
    const experiences = [
        {
            title: 'Intern ',
            company: 'SAN Technovation Pvt Ltd',
            duration: 'Aug 2025 – Sep 2025',
            description: [
                'Implemented resume name extraction using spaCy NER (Named Entity Recognition) with rule-based filtering',
                'Developed email extraction functionality using regex patterns and fuzzy matching algorithms',
                'Worked on automating document processing and data extraction tasks'
            ],
            skills: ['spaCy', 'NER', 'Regex', 'Python', 'Data Processing']
        }
    ];

    return (
        <section id="experience" className="py-20 bg-slate-900 text-white px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                    Work Experience
                </h2>

                <div className="space-y-8">
                    {experiences.map((exp, idx) => (
                        <div key={idx} className="bg-gradient-to-br from-slate-700 to-slate-900 p-8 rounded-lg border-l-4 border-cyan-400 hover:border-blue-400 transition duration-300">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-cyan-400">{exp.title}</h3>
                                    <p className="text-blue-400 font-semibold text-lg mt-1">{exp.company}</p>
                                </div>
                                <p className="text-gray-400 text-sm md:text-right mt-2 md:mt-0">{exp.duration}</p>
                            </div>

                            <ul className="space-y-2 mb-6">
                                {exp.description.map((point, i) => (
                                    <li key={i} className="text-gray-300 flex items-start">
                                        <span className="text-green-400 mr-3 font-bold mt-1">▸</span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2">
                                {exp.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm border border-green-400/30"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
