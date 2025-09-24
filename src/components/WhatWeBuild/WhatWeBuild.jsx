import React from 'react';
import { motion } from 'framer-motion';
import StackIcon from 'tech-stack-icons';
import {
  Globe,
  Smartphone,
  Server,
  Bot,
  Brain,
  Zap,
  FileEdit,
  Code,
  Database,
  Cpu,
  Settings,
  TestTube,
  Cloud
} from 'lucide-react';

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

function WhatWeBuild() {
  return (
    <section className="py-10 md:py-20 px-4 bg-base-200/ border-t-2 border-b-2 border-gray-500/50">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6">What We Build</h2>
          <p className="text-xl text-center text-base-content/70 mb-16 max-w-2xl mx-auto">
            From web applications to AI solutions, we craft modern software solutions across various domains.
          </p>
          <div className="overflow-x-auto">
            <table className="table w-full border border-gray-500/50">
              <thead>
                <tr className="border-b border-gray-500/50">
                  <th className="border-r border-gray-500/50 text-lg">Service</th>
                  <th className="text-lg">Technologies</th>
                </tr>
              </thead>
              <tbody>
                {serviceCards.map((service, index) => (
                  <motion.tr
                    key={service.title}
                    className="hover:bg-base-200 transition-colors duration-200 border-b border-gray-500/50"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <td className="border-r border-gray-500/50">
                      <h3 className="font-semibold text-md">{service.title}</h3>
                    </td>
                    <td className="text-md">
                      <div className="flex flex-wrap gap-2">
                        {service.tech.map((tech, idx) => (
                          <span
                            key={tech}
                            className="badge badge-outline badge-sm text-[1rem]"
                          >
                            {tech}
                          </span>
                        ))}
                        {service.specialTech?.map((special, idx) => (
                          <div key={special.name} className="tooltip tooltip-top" data-tip={special.tooltip}>
                            <span className="badge badge-primary badge-sm text-[1rem] rounded-sm px-2">
                              {special.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeBuild;
