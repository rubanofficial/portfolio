import SkillCard from './SkillCard';

export default function Skills() {
  const skillCategories = [
    {
      icon: '🛠️',
      title: 'Languages',
      skills: ['C', 'Python', 'Java', 'JavaScript']
    },
    {
      icon: '🌐',
      title: 'Frontend',
      skills: ['HTML5', 'CSS3', 'JavaScript ES6+', 'React.js', 'Tailwind CSS']
    },
    {
      icon: '⚙️',
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'Middleware']
    },
    {
      icon: '💾',
      title: 'Database',
      skills: ['MongoDB', 'SQL', 'Database Design', 'Data Modeling']
    },
    {
      icon: '🔧',
      title: 'Tools & DevOps',
      skills: ['Git & GitHub', 'Postman', 'VS Code', 'npm', 'Command Line']
    },
    {
      icon: '🎯',
      title: 'Other Skills',
      skills: ['Cloudinary Integration', 'Gemini API', 'spaCy NER', 'Regex', 'Fuzzy Matching']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900 text-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <SkillCard key={idx} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
