export default function ProjectCard({ title, description, tech, link, github, image }) {
  return (
    <div className="bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg overflow-hidden border border-cyan-500/30 hover:border-cyan-400 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition duration-300 transform hover:-translate-y-2">
      {image && (
        <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-cyan-400 mb-3">{title}</h3>
        <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>
        
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {tech.map((t, idx) => (
              <span
                key={idx}
                className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300 text-center"
            >
              View Live
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold py-2 px-4 rounded transition duration-300 text-center"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
