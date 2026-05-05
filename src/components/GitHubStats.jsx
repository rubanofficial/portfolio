import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function GitHubStats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/rubanofficial')
      .then(res => res.json())
      .then(data => {
        setStats({
          repos: data.public_repos,
          followers: data.followers,
          following: data.following,
          contributions: data.public_repos * 15 // Estimated
        });
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        // Fallback data
        setStats({
          repos: 15,
          followers: 25,
          following: 40,
          contributions: 250
        });
        setLoading(false);
      });
  }, []);

  const statItems = [
    { label: 'Public Repos', value: stats?.repos || 0, icon: '📦' },
    { label: 'Followers', value: stats?.followers || 0, icon: '👥' },
    { label: 'Following', value: stats?.following || 0, icon: '🔗' },
    { label: 'Contributions', value: stats?.contributions || 0, icon: '⭐' }
  ];

  return (
    <section className="py-20 bg-slate-800 text-white px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text"
        >
          GitHub Stats
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {statItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-slate-700 to-slate-900 p-6 rounded-lg border border-cyan-500/30 hover:border-cyan-400 text-center transition duration-300"
            >
              <div className="text-4xl mb-2">{item.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                {loading ? '...' : item.value}
              </div>
              <div className="text-gray-400 text-sm md:text-base">{item.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/rubanofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
          >
            <i className="fab fa-github mr-2"></i>
            Visit GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
