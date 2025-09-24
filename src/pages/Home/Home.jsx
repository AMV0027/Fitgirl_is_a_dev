import React from 'react';
import { motion } from 'framer-motion';
import Stats from './Stats';
import {
  Globe,
  Smartphone,
  Monitor,
  Server,
  Link,
  Brain,
  Bot,
  Zap,
  FileEdit,
  Search,
  CreditCard,
  Rocket
} from 'lucide-react';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAndroid,
  FaApple
} from 'react-icons/fa';
import {
  SiSvelte,
  SiAstro,
  SiPhp,
  SiTauri,
  SiRust,
  SiSpringboot,
  SiSolidity,
  SiPostgresql,
  SiSqlite,
  SiRedis,
  SiMysql
} from 'react-icons/si';

const serviceCards = [
  {
    title: 'Websites',
    description: 'Sleek, scalable, and modern web applications.',
    icon: Globe,
    techIcons: [FaReact, SiSvelte, SiAstro, SiPhp],
    tech: ['React', 'Svelte', 'Astro', 'PHP'],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Mobile Apps',
    description: 'Native mobile experiences for Android and iOS.',
    icon: Smartphone,
    techIcons: [FaReact, FaAndroid, FaApple],
    tech: ['React Native', 'Android', 'iOS'],
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Desktop Apps',
    description: 'Fast, secure desktop applications with modern tech.',
    icon: Monitor,
    techIcons: [SiTauri, SiRust],
    tech: ['Tauri.js', 'Rust'],
    gradient: 'from-purple-500 to-indigo-500'
  },
  {
    title: 'Backend',
    description: 'Robust server-side solutions for any scale.',
    icon: Server,
    techIcons: [FaNodeJs, FaPython, SiSpringboot],
    tech: ['Node.js', 'Python', 'Spring Boot'],
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    title: 'Databases',
    description: 'Scalable data storage and management solutions.',
    icon: Server,
    techIcons: [SiPostgresql, SiMysql, SiSqlite, SiRedis],
    tech: ['PostgreSQL', 'MySQL', 'SQLite', 'Redis'],
    gradient: 'from-blue-600 to-indigo-600'
  },
  {
    title: 'Web3',
    description: 'Blockchain solutions and decentralized applications.',
    icon: Link,
    techIcons: [SiSolidity],
    tech: ['Solidity', 'Smart Contracts', 'DApps'],
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    title: 'Machine Learning',
    description: 'Data-driven solutions for complex problems.',
    icon: Bot,
    tech: ['Regression', 'Classification', 'Clustering', 'NLP'],
    gradient: 'from-green-600 to-teal-600'
  },
  {
    title: 'AI',
    description: 'Cutting-edge AI solutions for modern challenges.',
    icon: Brain,
    tech: ['Fine-tuning', 'RAG', 'CAG', 'Agentic AI'],
    gradient: 'from-red-500 to-pink-500'
  },
  {
    title: 'Automation',
    description: 'Streamline workflows and boost productivity.',
    icon: Zap,
    tech: ['n8n', 'Zapier', 'Selenium', 'Scripts'],
    gradient: 'from-amber-500 to-orange-500'
  }
];

const steps = [
  {
    title: 'Submit',
    description: 'Fill our project form',
    icon: FileEdit
  },
  {
    title: 'Consult',
    description: 'Get tech stack advice',
    icon: Search
  },
  {
    title: 'Pay 50%',
    description: 'Initial payment',
    icon: CreditCard
  },
  {
    title: 'Develop',
    description: 'Get first version',
    icon: Rocket
  },
  {
    title: 'Review',
    description: 'Request changes',
    icon: FileEdit
  },
  {
    title: 'Pay 50%',
    description: 'Final payment',
    icon: CreditCard
  },
  {
    title: 'Deliver',
    description: 'Get full project',
    icon: Rocket
  }
];

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen bg-base-200 flex items-center justify-center">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-between gap-16">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <motion.h1
              className="text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Your Ideas. Our Code. Full Projects from Web to AI.
            </motion.h1>
            <motion.p
              className="text-xl mb-8 text-base-content/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We build end-to-end software projects for students and innovators — web, mobile, desktop, AI, ML, automation, and more. Delivered fast at student-friendly pricing.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-4"
            >
              <a
                href="https://forms.gle/UemJF5oCFmtYb8Bf7"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Submit Your Idea
              </a>
              <a
                href="https://discord.gg/Z2YhDh27"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Join Discord
              </a>
            </motion.div>
          </div>
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src="/src/assets/banner.png"
              alt="FitGirl Dev Banner"
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="py-20 px-4 bg-base-200/50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6">What We Build</h2>
            <p className="text-xl text-center text-base-content/70 mb-16 max-w-2xl mx-auto">
              From web applications to AI solutions, we craft modern software solutions across various domains.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {serviceCards.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="card bg-base-100 hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="card-body">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {React.createElement(service.icon, { size: 40, className: "text-white" })}
                    </div>
                    <h3 className="card-title text-2xl mb-3">{service.title}</h3>
                    <p className="text-base-content/70 mb-6">{service.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {service.tech.map((tech, idx) => (
                        <span
                          key={tech}
                          className="badge badge-outline gap-2 py-3 px-4"
                        >
                          {service.techIcons?.[idx] && React.createElement(service.techIcons[idx], {
                            size: 16,
                            className: "opacity-70"
                          })}
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-base-200">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-7 gap-4 md:gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  className="card bg-base-100 shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="card-body items-center text-center">
                    <div className="mb-4">
                      {React.createElement(step.icon, { size: 48, className: "mx-auto" })}
                    </div>
                    <h3 className="card-title">{step.title}</h3>
                    <p>{step.description}</p>
                    {index < steps.length - 1 && (
                      <div className="hidden 2xl:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 text-4xl">
                        →
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Pricing</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto">
              <motion.div
                className="card bg-base-100 shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="card-body text-center">
                  <h3 className="text-2xl font-bold mb-4">Mini Project</h3>
                  <p className="text-4xl font-bold mb-8">₹3,000</p>
                  <a
                    href="https://forms.gle/UemJF5oCFmtYb8Bf7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Get Started
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="card bg-primary text-primary-content shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="card-body text-center">
                  <h3 className="text-2xl font-bold mb-4">Major Project</h3>
                  <p className="text-4xl font-bold mb-8">₹5,000</p>
                  <a
                    href="https://forms.gle/UemJF5oCFmtYb8Bf7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    Get Started
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="card bg-base-100 shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="card-body text-center">
                  <h3 className="text-2xl font-bold mb-4">Custom AI/Web3</h3>
                  <p className="text-xl mb-8">Let's Discuss</p>
                  <a
                    href="https://forms.gle/UemJF5oCFmtYb8Bf7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Contact Us
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-base-200">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8">About Fitgirl Dev</h2>
              <motion.p
                className="text-xl mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                We're a collective of passionate developers specializing in building real-world software projects for students, startups, and communities. Not just demo code — production-grade projects you can present, deploy, and extend.
              </motion.p>
              <motion.p
                className="text-xl mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Fitgirl is more than a dev studio — we're building a student-first innovation community.
              </motion.p>
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <a
                  href="https://discord.gg/Z2YhDh27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                  </svg>
                  Join Our Discord Community
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
