import React from 'react';
import { Sun, Moon, FileEdit, Mail, Users, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import logo from '../../assets/logo.png'

function Header() {
  const [theme, setTheme] = React.useState('light');
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <div className="navbar bg-base-100 fixed top-0 left-0 right-0 z-50 border-b-2 border-gray-500/20 shadow-sm">
        <div className="container mx-auto">
          <div className="max-w-6xl w-full mx-auto flex items-center justify-between">
            <div className="flex-1">
              <Link to="/" className="btn btn-ghost normal-case gap-2">
                <img src={logo} alt="Logo" className="w-8 h-8" />
                <span className="text-lg font-medium">Fitgirl is a Dev</span>
              </Link>
            </div>
            {/* Desktop Navigation */}
            <div className="flex-none hidden lg:flex items-center gap-2">
              <a
                href="https://forms.gle/UemJF5oCFmtYb8Bf7"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost gap-2"
              >
                <FileEdit className="h-5 w-5" />
                Submit Project
              </a>
              <Link to="/developers" className="btn btn-ghost gap-2">
                <Users className="h-5 w-5" />
                Join Us
              </Link>
              <Link to="/contact" className="btn btn-ghost gap-2">
                <Mail className="h-5 w-5" />
                Contact
              </Link>
              {/* <button
                className="btn btn-ghost btn-circle ml-2"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </button> */}
            </div>
            {/* Mobile Menu Button */}
            <div className="flex-none lg:hidden">
              <button
                className="btn btn-ghost btn-circle"
                onClick={() => setIsSidebarOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        theme={theme}
        onThemeToggle={toggleTheme}
      />
    </>
  );
}

export default Header;
