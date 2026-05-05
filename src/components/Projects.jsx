import ProjectCard from './ProjectCard';

export default function Projects() {
    const projects = [
        {
            title: 'LIVITY – Real Estate Management',
            description: 'A responsive property listing platform with seller and buyer dashboards. Built with modern React for seamless user experience and optimized state management.',
            tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Cloudinary', 'JWT'],
            link: 'https://livity-live.vercel.app',
            github: 'https://github.com/rubanofficial/livity'
        },
        {
            title: 'CampusVoice – Complaint Management',
            description: 'Smart complaint management system with JWT authentication, role-based access control, AI sentiment analysis, and automatic priority classification using Gemini API.',
            tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Gemini API', 'AI'],
            link: null,
            github: 'https://github.com/rubanofficial/campusvoice'
        },
        {
            title: 'Library Management System',
            description: 'Console-based library management system built with object-oriented programming. Handles book issuing, returning, and comprehensive records management.',
            tech: ['Java', 'Collections Framework', 'OOP', 'File I/O'],
            link: null,
            github: 'https://github.com/rubanofficial/library-management'
        }
    ];

    return (
        <section id="projects" className="py-20 bg-slate-800 text-white px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                    Featured Projects
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <ProjectCard key={idx} {...project} />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="https://github.com/rubanofficial?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
                    >
                        View All Projects on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}
