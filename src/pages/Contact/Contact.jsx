import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

function Contact() {
  return (
    <div className="min-h-screen mt-16">
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <motion.h1
              className="text-4xl font-bold text-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Get in Touch
            </motion.h1>
            <motion.p
              className="text-xl text-center text-base-content/70 mb-16 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Have questions about our services? Want to discuss your project? We're here to help!
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <motion.div
                className="card bg-base-100 shadow-xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="card-body">
                  <h2 className="card-title mb-6">Send us a Message</h2>
                  <form className="space-y-4">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input type="text" placeholder="Your name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input type="email" placeholder="Your email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Message</span>
                      </label>
                      <textarea className="textarea textarea-bordered h-32" placeholder="Your message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-full">
                      Send Message
                    </button>
                  </form>
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="card bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title mb-6">Other Ways to Connect</h2>
                    <div className="space-y-6">
                      <a
                        href="mailto:contact@fitgirldev.com"
                        className="flex items-center gap-4 text-lg hover:text-primary transition-colors"
                      >
                        <Mail className="h-6 w-6" />
                        contact@fitgirldev.com
                      </a>
                      <a
                        href="https://discord.gg/Z2YhDh27"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 text-lg hover:text-primary transition-colors"
                      >
                        <MessageSquare className="h-6 w-6" />
                        Join our Discord
                      </a>
                      <div className="flex items-center gap-4 text-lg">
                        <MapPin className="h-6 w-6" />
                        Bangalore, India
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title mb-4">Quick Links</h2>
                    <div className="space-y-4">
                      <a
                        href="https://forms.gle/UemJF5oCFmtYb8Bf7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline w-full"
                      >
                        Submit a Project
                      </a>
                      <a
                        href="https://forms.gle/Yz3yDp47UjHgpqv39"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline w-full"
                      >
                        Join as Developer
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
