import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, Github } from 'lucide-react';
import { BsWhatsapp } from 'react-icons/bs';

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

            <motion.div
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body space-y-6">
                  <h2 className="card-title mb-4">Connect With Us</h2>
                  <div className="grid gap-4">
                    <a
                      href="tel:+918220557520"
                      className="btn btn-primary btn-lg w-full flex items-center gap-3 normal-case"
                    >
                      <Phone className="h-5 w-5" />
                      Call Support
                    </a>

                    <a
                      href="https://wa.me/918220557520"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-success btn-lg w-full flex items-center gap-3 normal-case"
                    >
                      <BsWhatsapp className="h-5 w-5" />
                      WhatsApp Chat
                    </a>

                    <a
                      href="mailto:fitgirlisadev@gmail.com"
                      className="btn btn-accent btn-lg w-full flex items-center gap-3 normal-case"
                    >
                      <Mail className="h-5 w-5" />
                      Email Us
                    </a>

                    <a
                      href="https://github.com/fitgirl-dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-lg w-full flex items-center gap-3 normal-case"
                    >
                      <Github className="h-5 w-5" />
                      Visit our GitHub
                    </a>

                    <a
                      href="https://discord.gg/Z2YhDh27"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-info btn-lg w-full flex items-center gap-3 normal-case"
                    >
                      <MessageSquare className="h-5 w-5" />
                      Join our Discord
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
