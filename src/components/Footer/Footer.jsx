import React from 'react';
import { Github, Heart } from 'lucide-react';

function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content border-t-1 border-gray-200">
      <div>
        <p className="flex items-center gap-2">
          Made with <Heart className="w-4 h-4 text-red-500" /> by Fitgirl is a Dev Community
        </p>
        <p className="text-sm opacity-70">Building the future of student projects, one line at a time.</p>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://github.com/fitgirl-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-sm"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div>
        <p>© {new Date().getFullYear()} Fitgirl is a Dev - All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
