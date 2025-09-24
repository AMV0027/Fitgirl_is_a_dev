import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus } from 'lucide-react';
import Avatar from 'react-avatar';
import developersData from '../../assets/developers.json';

function Developers() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero py-12 pt-22 bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-3xh -full">
            <motion.h1
              className="text-5xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Join Our Developer Community
            </motion.h1>
            <motion.p
              className="text-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Join Fitgirl is a Dev and build real projects with other students.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href="https://forms.gle/Yz3yDp47UjHgpqv39"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg gap-2"
              >
                <UserPlus className="w-5 h-5" />
                Join as Developer
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Current Developers Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Developers</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-base-100 rounded-lg shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="table w-full">
                  <tbody>
                    {developersData.map((dev, index) => (
                      <motion.tr
                        key={dev.name}
                        className="hover:bg-base-200 transition-colors cursor-pointer"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        onClick={() => window.open(`https://github.com/${dev.github}`, '_blank')}
                      >
                        <td>
                          <div className="flex items-center gap-4">
                            <Avatar
                              githubHandle={dev.github}
                              size={60}
                              round="12px"
                            />
                            <div>
                              <div className="font-bold text-lg">{dev.name}</div>
                              <div className="text-sm opacity-70">@{dev.github}</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="text-right">
                            <div className="font-semibold">{dev.projects} Projects</div>
                            <div className="text-sm opacity-70">{dev.tagline}</div>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Developers;
