export default function SkillCard({ icon, title, skills }) {
  return (
    <div className="bg-gradient-to-br from-slate-700 to-slate-900 p-6 rounded-lg border border-cyan-500/30 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition duration-300 transform hover:scale-105">
      <div className="flex items-center mb-4">
        <span className="text-3xl text-blue-400 mr-3">{icon}</span>
        <h3 className="text-xl font-semibold text-cyan-400">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill, idx) => (
          <li key={idx} className="text-gray-300 flex items-center">
            <span className="text-green-400 mr-2">✓</span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
