import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Users, UserPlus } from 'lucide-react';

const stats = [
  {
    title: 'Projects Completed',
    value: '150+',
    icon: Code2,
    description: 'Successful deliveries',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Active Developers',
    value: '50+',
    icon: UserPlus,
    description: 'Skilled contributors',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Community Members',
    value: '500+',
    icon: Users,
    description: 'Growing discord family',
    gradient: 'from-amber-500 to-orange-500'
  }
];

function Stats() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                className="card bg-base-100 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="card-body text-center">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${stat.gradient} p-3 mb-4 transform transition-transform duration-300 group-hover:scale-110`}>
                    {React.createElement(stat.icon, {
                      size: 40,
                      className: "text-white"
                    })}
                  </div>
                  <motion.h3
                    className="text-4xl font-bold mb-2"
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
                  <h4 className="text-xl font-semibold mb-2">{stat.title}</h4>
                  <p className="text-base-content/70">{stat.description}</p>
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

