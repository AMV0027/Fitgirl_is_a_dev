import React from 'react';
import { Github, Heart } from 'lucide-react';

function Footer() {
  return (
    <footer className="footer footer-center p-4 sm:p-6 lg:p-10 bg-base-200 text-base-content border-t-2 border-gray-500/50">
      <div className="w-full max-w-4xl mx-auto">
        {/* Main content section */}
        <div className="mb-4 sm:mb-6">
          <p className="flex items-center justify-center gap-2 text-sm sm:text-base">
            Made with <Heart className="w-4 h-4 text-red-500" /> by Fitgirl is a Dev Community
          </p>
          <p className="text-xs sm:text-sm opacity-70 mt-2 text-center">
            Building the future of student projects, one line at a time.
          </p>
        </div>

        {/* Social links section */}
        <div className="mb-4 sm:mb-6">
          <div className="flex justify-center">
            <a
              href="https://github.com/fitgirl-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-sm hover:btn-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright section */}
        <div className="text-center">
          <p className="text-xs sm:text-sm opacity-70">
            © {new Date().getFullYear()} Fitgirl is a Dev - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
