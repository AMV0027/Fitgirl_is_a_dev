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
              className="text-5xl font-bold mb-4"
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
              Join Fitgirl is a Dev and build real projects with students for students.
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
                <div className="space-y-1 p-2 md:p-4">
                  {developersData.map((dev, index) => (
                    <motion.div
                      key={dev.name}
                      className="p-2 md:p-3 rounded-lg hover:bg-base-200 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {/* Top row - GitHub link above name */}
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center justify-center gap-1 md:gap-3">
                          <Avatar
                            githubHandle={dev.github}
                            size={32}
                            round="6px"
                            className="md:hidden"
                          />
                          <Avatar
                            githubHandle={dev.github}
                            size={48}
                            round="8px"
                            className="hidden md:block"
                          />
                          <div className="text-left">
                            {dev.github ? (
                              <button
                                onClick={() => window.open(`https://github.com/${dev.github}`, '_blank')}
                                className="text-xs opacity-70 hover:opacity-100 hover:text-primary transition-all cursor-pointer mb-0.5 block"
                              >
                                @{dev.github}
                              </button>
                            ) : (
                              <div className="text-xs opacity-50 mb-0.5">No GitHub profile</div>
                            )}
                            <div className="font-bold text-sm md:text-base">{dev.name}</div>
                          </div>
                        </div>

                        {/* Right side - Projects count */}
                        <div className="font-bold text-sm md:text-lg">{dev.projects} Projects</div>
                      </div>

                      {/* Bottom row - Marquee tagline */}
                      <div className="overflow-hidden">
                        <div className="animate-marquee whitespace-nowrap text-xs opacity-70">
                          {dev.tagline}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Developers;
