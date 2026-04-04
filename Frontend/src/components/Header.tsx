import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/dp3.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isHomePage = location.pathname === '/';

  // Detect scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 300);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const headerClass =
    isHomePage && !scrolled
      ? 'bg-transparent'
      : 'bg-[#E6E6E4] shadow-md';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClass}`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20 py-4">

          {/* LEFT SIDE */}
          <div className="flex items-center gap-6 pl-3 md:pl-0 md:-translate-x-6">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src={logo}
                alt="Deon Plaza"
                className="h-20 sm:h-20 md:h-24 lg:h-28 w-auto object-contain transition-transform group-hover:scale-105 drop-shadow-sm"
              />
            </Link>

            <nav className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => {
                const inactiveClass =
                  isHomePage && !scrolled
                    ? 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                    : 'bg-black/5 text-gray-800 hover:bg-black/10';

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                      isActive(link.path)
                        ? 'bg-primary text-white'
                        : inactiveClass
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/book-appointment">
              <Button className="btn-primary-gradient shadow-md">
                Book Appointment
              </Button>
            </Link>

            <a href="tel:+911234567890">
              <Button
                variant="outline"
                size="icon"
                className={
                  isHomePage && !scrolled
                    ? 'border-white text-white bg-white/20 hover:bg-white hover:text-black backdrop-blur-sm'
                    : 'border-primary text-primary hover:bg-primary hover:text-white'
                }
              >
                <Phone className="h-4 w-4" />
              </Button>
            </a>
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isHomePage && !scrolled
                ? 'bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm'
                : 'hover:bg-black/10 text-black'
            }`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 mt-2 rounded-xl bg-black/40 backdrop-blur-md">
            <nav className="flex flex-col gap-2 px-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all ${
                    isActive(link.path)
                      ? 'bg-primary text-white'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <Link
                to="/book-appointment"
                onClick={() => setIsOpen(false)}
                className="mt-2"
              >
                <Button className="btn-primary-gradient w-full">
                  Book Appointment
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
