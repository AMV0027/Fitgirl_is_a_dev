import React from 'react';
import { motion } from 'framer-motion';
import Stats from './Stats';
import StackIcon from 'tech-stack-icons';
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
  Rocket,
  Code,
  Database,
  Cpu,
  Layers,
  Settings,
  TestTube,
  Cloud
} from 'lucide-react';
import banner from '../../assets/banner.png'

// Default icons mapping for technologies without specific icons
const getDefaultIcon = (techName) => {
  const iconMap = {
    'HTML': Code,
    'CSS': Code,
    'JavaScript': Code,
    'TailwindCSS': Code,
    'SASS': Code,
    'PHP': Code,
    'Swift': Code,
    'Flutter': Code,
    'Python': Code,
    'Spring': Code,
    'Solidity': Code,
    'MySQL': Database,
    'PostgreSQL': Database,
    'Supabase': Database,
    'MongoDB': Database,
    'YOLO': Cpu,
    'CNN': Cpu,
    'RNN': Cpu,
    'NLP': Cpu,
    'Common ML Algorithms': Cpu,
    'OpenAI': Brain,
    'OpenRouter': Brain,
    'Hugging Face': Brain,
    'Grok': Brain,
    'Ollama': Brain,
    'RAG': Brain,
    'CAG': Brain,
    'Fine-Tuning': Brain,
    'Model Training': Brain,
    'Agentic AI': Brain,
    'Multi-Modal AI': Brain,
    'n8n': Settings,
    'Zapier': Settings,
    'Selenium': Settings,
    'Unit Testing': TestTube,
    'Integration Testing': TestTube,
    'End-to-End Testing': TestTube,
    'Render.com': Cloud,
    'Virtual Machines': Cloud
  };
  return iconMap[techName] || Code;
};

const serviceCards = [
  {
    title: 'Web Development',
    description: 'Sleek, scalable, and modern web applications.',
    icon: Globe,
    techIcons: ['react', 'svelte', 'astro', 'php'],
    tech: ['React.js', 'Svelte', 'Astro', 'HTML', 'CSS', 'JavaScript', 'TailwindCSS', 'SASS', 'PHP'],
    specialTech: [{ name: 'Tauri V2', tooltip: 'Desktop Environment' }],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Mobile App Development',
    description: 'Native mobile experiences for Android and iOS.',
    icon: Smartphone,
    techIcons: ['react', 'android', 'apple'],
    tech: ['React Native', 'Android', 'Swift', 'Flutter'],
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Backend Development',
    description: 'Robust server-side solutions for any scale.',
    icon: Server,
    techIcons: ['nodejs', 'python', 'spring'],
    tech: ['Node.js', 'Python', 'Spring', 'Solidity'],
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    title: 'Databases',
    description: 'Scalable data storage and management solutions.',
    icon: Server,
    techIcons: ['mysql', 'postgresql', 'mongodb'],
    tech: ['MySQL', 'PostgreSQL', 'Supabase', 'MongoDB'],
    gradient: 'from-blue-600 to-indigo-600'
  },
  {
    title: 'Machine Learning',
    description: 'Data-driven solutions for complex problems.',
    icon: Bot,
    techIcons: ['tensorflow', 'pytorch'],
    tech: ['YOLO', 'CNN', 'RNN', 'NLP', 'Common ML Algorithms'],
    gradient: 'from-green-600 to-teal-600'
  },
  {
    title: 'Artificial Intelligence',
    description: 'Cutting-edge AI solutions for modern challenges.',
    icon: Brain,
    techIcons: ['openai'],
    tech: ['OpenAI', 'OpenRouter', 'Hugging Face', 'Grok', 'Ollama', 'RAG', 'CAG', 'Fine-Tuning', 'Agentic AI', 'Multi-Modal AI'],
    gradient: 'from-red-500 to-pink-500'
  },
  {
    title: 'Automation & Workflows',
    description: 'Streamline workflows and boost productivity.',
    icon: Zap,
    techIcons: ['github', 'docker'],
    tech: ['n8n', 'Zapier', 'Selenium'],
    gradient: 'from-amber-500 to-orange-500'
  },
  {
    title: 'Testing',
    description: 'Comprehensive testing solutions for quality assurance.',
    icon: FileEdit,
    techIcons: ['jest', 'cypress'],
    tech: ['Unit Testing', 'Integration Testing', 'End-to-End Testing'],
    gradient: 'from-emerald-500 to-green-500'
  },
  {
    title: 'DevOps',
    description: 'Streamline development and deployment workflows.',
    icon: Server,
    techIcons: ['docker', 'jenkins'],
    tech: ['Jenkins', 'Docker', 'Render.com', 'Virtual Machines'],
    gradient: 'from-sky-500 to-blue-500'
  }
];

const steps = [
  {
    title: 'Submit',
    description: 'Fill our project form',
    icon: FileEdit,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Consult',
    description: 'Get tech stack advice',
    icon: Search,
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Pay 50%',
    description: 'Initial payment',
    icon: CreditCard,
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    title: 'Develop',
    description: 'Get first version',
    icon: Rocket,
    gradient: 'from-purple-500 to-indigo-500'
  },
  {
    title: 'Review',
    description: 'Request changes',
    icon: FileEdit,
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    title: 'Pay 50%',
    description: 'Final payment',
    icon: CreditCard,
    gradient: 'from-teal-500 to-cyan-500'
  },
  {
    title: 'Deliver',
    description: 'Get full project',
    icon: Rocket,
    gradient: 'from-red-500 to-pink-500',
    isAnimated: true
  }
];

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen bg-base-200 flex items-center justify-center">
        <div className="max-w-6xl p-4 mx-auto flex flex-col items-center justify-between gap-16">
          <div className="w-full order-2 lg:order-1">
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Your Ideas. Our Code. Full Projects from Web to AI.
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl mb-8 text-base-content/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We build end-to-end software projects for students and innovators - web, mobile, desktop, AI, ML, automation, and more. Delivered fast at student-friendly pricing.
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src={banner}
              alt="FitGirl is a Dev Banner"
              className="w-full object-cover min-h-[230px] rounded-lg"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {serviceCards.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="card bg-base-100 hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="card-body">
                    <div className="flex items-center justify-start mb-6 gap-3">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-3 group-hover:scale-110 transition-transform duration-300`}>
                        {React.createElement(service.icon, { size: 40, className: "text-white" })}
                      </div>
                      <h3 className="card-title text-2xl w-full">{service.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {service.tech.map((tech, idx) => {
                        const techIcon = service.techIcons?.[idx];
                        const DefaultIcon = getDefaultIcon(tech);

                        return (
                          <span
                            key={tech}
                            className="badge badge-outline gap-2 py-3 px-4"
                          >
                            {techIcon ? (
                              <StackIcon
                                name={techIcon}
                                variant="dark"
                                style={{ width: 16, height: 16 }}
                                className="opacity-70"
                              />
                            ) : (
                              <DefaultIcon
                                size={16}
                                className="opacity-70"
                              />
                            )}
                            {tech}
                          </span>
                        );
                      })}
                      {service.specialTech?.map((special, idx) => (
                        <div key={special.name} className="tooltip tooltip-top" data-tip={special.tooltip}>
                          <span className="badge badge-primary gap-2 py-3 px-4 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 glow-effect">
                            <StackIcon
                              name="tauri"
                              variant="dark"
                              style={{ width: 16, height: 16 }}
                              className="opacity-90"
                            />
                            {special.name}
                          </span>
                        </div>
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
      <section className="py-20 px-4 bg-gradient-to-br from-base-200 to-base-300">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-7 gap-4 md:gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                    style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
                    data-gradient={step.gradient}></div>
                  <div className="card-body items-center text-center relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} p-3 mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}>
                      {step.isAnimated ? (
                        <motion.div
                          animate={{
                            y: [0, -8, 0],
                            rotate: [0, 5, -5, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          {React.createElement(step.icon, { size: 32, className: "text-white" })}
                        </motion.div>
                      ) : (
                        React.createElement(step.icon, { size: 32, className: "text-white" })
                      )}
                    </div>
                    <h3 className="card-title text-lg font-bold">{step.title}</h3>
                    <p className="text-sm text-base-content/70">{step.description}</p>
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
            <h2 className="text-4xl font-bold text-center mb-6">Student-Friendly Pricing</h2>
            <p className="text-xl text-center text-base-content/70 mb-16 max-w-2xl mx-auto">
              Choose the perfect plan for your project needs. All plans include source code, documentation, and deployment guide.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="card-body">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">Mini Project</h3>
                    <div className="badge badge-ghost mb-4">Perfect for Beginners</div>
                    <p className="text-4xl font-bold mb-2">₹3,000</p>
                    <p className="text-base-content/70 mb-6">One-time payment</p>
                  </div>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Basic Web Application</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>2-3 Core Features</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Basic Database Integration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>7 Days Support</span>
                    </div>
                  </div>
                  <div className="card-actions justify-center mt-auto">
                    <a
                      href="https://forms.gle/UemJF5oCFmtYb8Bf7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-block"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="card bg-primary text-primary-content shadow-xl hover:shadow-2xl transition-all duration-300 scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="card-body">
                  <div className="text-center">
                    <div className="badge badge-secondary mb-4">Most Popular</div>
                    <h3 className="text-2xl font-bold mb-2">Major Project</h3>
                    <p className="text-4xl font-bold mb-2">₹5,000</p>
                    <p className="opacity-90 mb-6">One-time payment</p>
                  </div>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Full-Stack Application</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>5-7 Advanced Features</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Advanced Database Design</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Authentication & Authorization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>15 Days Support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Deployment Setup</span>
                    </div>
                  </div>
                  <div className="card-actions justify-center mt-auto">
                    <a
                      href="https://forms.gle/UemJF5oCFmtYb8Bf7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-block"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="card-body">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">Custom AI/Web3</h3>
                    <div className="badge badge-ghost mb-4">Enterprise Grade</div>
                    <p className="text-2xl font-bold mb-2">Custom Quote</p>
                    <p className="text-base-content/70 mb-6">Project-based pricing</p>
                  </div>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>AI/ML Integration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Blockchain/Smart Contracts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Custom Architecture</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>30 Days Support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Priority Support</span>
                    </div>
                  </div>
                  <div className="card-actions justify-center mt-auto">
                    <a
                      href="https://forms.gle/UemJF5oCFmtYb8Bf7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-block"
                    >
                      Contact Us
                    </a>
                  </div>
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
                We're a collective of passionate developers specializing in building real-world software projects for students, startups, and communities. Not just demo code - production-grade projects you can present, deploy, and extend.
              </motion.p>
              <motion.p
                className="text-xl mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Fitgirl is a Dev Community is more than a dev studio, we're building a student-first innovation & Hustling community.
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
