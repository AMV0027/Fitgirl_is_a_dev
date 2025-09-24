import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Users, Brain, Rocket } from 'lucide-react';
import statsData from '../../assets/stats.json';

const iconMap = {
  "Projects Delivered": Code2,
  "Happy Students": Users,
  "Technologies": Brain,
  "Team Size": Rocket
};

const gradientMap = {
  "Projects Delivered": "from-blue-500 to-cyan-500",
  "Happy Students": "from-purple-500 to-pink-500",
  "Technologies": "from-green-500 to-emerald-500",
  "Team Size": "from-amber-500 to-orange-500"
};

function Stats() {
  return (
    <section className="py-10 md:py-20">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto px-4 md:px-0">
              Numbers that showcase our commitment to delivering quality projects and supporting students worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {statsData.stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                className={`card bg-base-100 hover:shadow-xl transition-all duration-300`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="card-body text-center">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${gradientMap[stat.title]} p-3 mb-2 transform transition-transform duration-300 group-hover:scale-110`}>
                    {React.createElement(iconMap[stat.title], {
                      size: 40,
                      className: "text-white"
                    })}
                  </div>
                  <motion.h3
                    className="text-3xl md:text-4xl font-bold mb-2"
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + index * 0.1
                    }}
                  >
                    {stat.value}
                  </motion.h3>
                  <h4 className="text-lg md:text-xl font-semibold mb-2">{stat.title}</h4>
                  {/* <p className="text-base-content/70 text-sm md:text-base">{stat.description}</p> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;