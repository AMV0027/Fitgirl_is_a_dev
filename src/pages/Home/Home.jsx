import React from 'react';
import { motion } from 'framer-motion';
import Stats from './Stats';
import WhatWeBuild from '../../components/WhatWeBuild/WhatWeBuild';
import {
  FileEdit,
  Search,
  CreditCard,
  Rocket
} from 'lucide-react';
import Fitgirl from '../../assets/fitgirl-front.png';
import Bannerbg from '../../assets/fitgirl-bg-banner.png';
import { FaDiscord } from "react-icons/fa6";
import LetterGlitch from '../../components/LetterGlitch/LetterGlitch';

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
    title: 'Pre-payment',
    description: 'Initial amount to Begin',
    icon: Search,
    gradient: 'from-green-500 to-emerald-500'
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
        <div className="max-w-6xl p-4 mx-auto flex flex-col items-center justify-between gap-10 md:gap-6 ">
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
            className="relative w-full h-[260px] rounded-lg overflow-hidden flex items-center justify-center"
          >
            {/* <img
              src={Bannerbg}
              alt="FitGirl is a Dev Banner"
              className="absolute top-0 left-0 w-full object-cover h-full rounded-lg z-10 brightness-90 hue-rotate-[10deg]"
            /> */}
            <LetterGlitch
              glitchSpeed={50}
              centerVignette={true}
              outerVignette={false}
              smooth={true}
              className="absolute top-0 left-0 w-full h-full z-10"
            />
            <img
              src={Fitgirl}
              alt="FitGirl is a Dev Banner"
              className="relative w-auto object-center h-[260px] rounded-lg z-20 hover:scale-105 transition-all duration-300 ease-in-out"
            />
            <div className='absolute md:relative z-20 bottom-0 left-4 h-full flex flex-col justify-between py-5 md:py-0 md:justify-center'>
              <h2 className='text-xl sm:text-3xl md:text-4xl font-semibold text-white md:mb-2 bg-black/20 md:bg-transparent rounded-md px-2 md:px-0'>
                Fitgirl is a Dev
              </h2>
              <a href="https://discord.gg/Z2YhDh27" target='_blank' rel='noopener noreferrer'>
                <button className='flex flex-row items-center justify-center text-white bg-violet-600 rounded-md text-sm md:text-md gap-1 px-1 w-auto cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out'>
                  <FaDiscord className='w-6 h-6 shadow' />
                  Discord Community
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Build Section */}
      <WhatWeBuild />

      {/* Stats Section */}
      <Stats />

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-base-200 to-base-300">
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
            <div className="relative">
              {/* Horizontal Flow Container */}
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 overflow-x-scroll pb-4">
                {steps.map((step, index) => (
                  <React.Fragment key={step.title}>
                    {/* Step Card */}
                    <motion.div
                      className="flex flex-col items-center text-center relative z-10"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {/* Step Number */}
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-content font-bold text-md flex items-center justify-center mb-4 shadow-lg absolute top-0 left-4">
                        {index + 1}
                      </div>

                      {/* Icon Container */}
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} p-4 mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}>
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
                            {React.createElement(step.icon, { size: 40, className: "text-white" })}
                          </motion.div>
                        ) : (
                          React.createElement(step.icon, { size: 40, className: "text-white" })
                        )}
                      </div>

                      {/* Content */}
                      <div className="bg-base-100 rounded-xl p-4 shadow-lg min-w-[200px] max-w-[250px]">
                        <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                        <p className="text-sm text-base-content/70">{step.description}</p>
                      </div>
                    </motion.div>

                    {/* Connecting Arrow (except for last item) */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block flex-shrink-0">
                        <motion.div
                          className="flex items-center"
                          initial={{ opacity: 0, scaleX: 0 }}
                          animate={{ opacity: 1, scaleX: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                        >
                          {/* Arrow Line */}
                          <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-secondary"></div>
                          {/* Arrow Head */}
                          <div className="w-0 h-0 border-l-[8px] border-l-secondary border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent"></div>
                        </motion.div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Mobile Vertical Flow Lines */}
              <div className="lg:hidden absolute left-1/2 transform -translate-x-1/2 top-6 w-0.5 h-full bg-gradient-to-b from-primary via-secondary to-primary opacity-30"></div>

              {/* Mobile Vertical Arrows */}
              <div className="lg:hidden absolute left-1/2 transform -translate-x-1/2">
                {steps.slice(0, -1).map((_, index) => (
                  <motion.div
                    key={`mobile-arrow-${index}`}
                    className="absolute w-0 h-0 border-l-[6px] border-l-primary border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent"
                    style={{ top: `${(index + 1) * 14.28}%` }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  />
                ))}
              </div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                    <p className="text-4xl font-bold mb-2">₹1,500</p>
                    <p className="text-base-content/70 mb-6">Starting from</p>
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
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Unlimited Reviews</span>
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
                className="card bg-primary text-primary-content shadow-xl hover:shadow-2xl transition-all duration-300 scale-105 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="absolute top-4 right-4 z-10">
                  <div className="badge badge-secondary px-2"><span className='hidden md:block'>Most{" "}</span> Popular</div>
                </div>
                <div className="card-body">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">Major Project</h3>
                    <p className="text-4xl font-bold mb-2">Let's Discuss</p>
                    <p className="opacity-90 mb-6">Custom pricing</p>
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
                      <span>AI/ML Integration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Blockchain/Smart Contracts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Custom Architecture</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Deployment Setup</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>30 Days Support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Priority Support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Unlimited Reviews</span>
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
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-base-200">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-4xl mx-auto text-justify md:text-center">
              <h2 className="text-4xl font-bold mb-8">About Fitgirl is a Dev</h2>
              <motion.p
                className="text-xl mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span>&nbsp;&nbsp;</span>We're a collective of passionate developers specializing in building real-world software projects for students, startups, and communities. Not just demo code - production-grade projects you can present, deploy, and extend.
              </motion.p>
              <motion.p
                className="text-xl mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span>&nbsp;&nbsp;</span>Fitgirl is a Dev Community is more than a dev studio, we're building a student-first innovation & Hustling community.
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
