import React from 'react';
import { Link } from 'react-router-dom';
import { FileEdit, Mail, Users, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../../assets/logo.png';

function Sidebar({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 dark:bg-black/40 z-40 lg:hidden"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed right-0 top-0 bottom-0 w-[280px] bg-base-100 shadow-xl z-50 lg:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="p-4 border-b border-base-200">
                <div className="flex items-center justify-between mb-2">
                  <Link to="/" className="flex items-center gap-2" onClick={onClose}>
                    <img src={Logo} alt="Logo" className="w-8 h-8" />
                    <span className="text-lg font-medium">Fitgirl is a Dev</span>
                  </Link>
                  <button
                    onClick={onClose}
                    className="btn btn-ghost btn-sm btn-circle"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex-1 overflow-y-auto py-4">
                <div className="flex flex-col gap-2 px-2">
                  <a
                    href="https://forms.gle/UemJF5oCFmtYb8Bf7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost justify-start gap-2 normal-case"
                    onClick={onClose}
                  >
                    <FileEdit className="h-5 w-5" />
                    Submit Project
                  </a>
                  <Link
                    to="/developers"
                    className="btn btn-ghost justify-start gap-2 normal-case"
                    onClick={onClose}
                  >
                    <Users className="h-5 w-5" />
                    Join Us
                  </Link>
                  <Link
                    to="/contact"
                    className="btn btn-ghost justify-start gap-2 normal-case"
                    onClick={onClose}
                  >
                    <Mail className="h-5 w-5" />
                    Contact
                  </Link>
                </div>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default Sidebar;
