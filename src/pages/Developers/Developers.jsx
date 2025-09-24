import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ExternalLink, UserPlus } from 'lucide-react';
import developersData from '../../assets/developers.json';

function Developers() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero min-h-[60vh] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
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
              Be part of Fitgirl Dev, a community-driven dev collective where student ideas become real software projects! Work on web, mobile, desktop, AI/ML, Web3, and automation projects.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developersData.map((dev, index) => (
              <motion.div
                key={dev.name}
                className="card bg-base-100 shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="card-body">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="avatar">
                      <div className="w-16 h-16 rounded-full">
                        <img src={dev.avatar || 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + dev.name} alt={dev.name} />
                      </div>
                    </div>
                    <div>
                      <h3 className="card-title">{dev.name}</h3>
                      <p className="text-sm opacity-70">{dev.role}</p>
                    </div>
                  </div>
                  <p className="mb-4">{dev.bio}</p>
                  <div className="card-actions justify-end">
                    {dev.github && (
                      <a
                        href={dev.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-ghost btn-sm"
                        aria-label="GitHub Profile"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {dev.linkedin && (
                      <a
                        href={dev.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-ghost btn-sm"
                        aria-label="LinkedIn Profile"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {dev.portfolio && (
                      <a
                        href={dev.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-ghost btn-sm"
                        aria-label="Portfolio"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Developers;
