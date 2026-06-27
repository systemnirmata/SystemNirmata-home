import { useState } from 'react';

export default function Navbar({ activePage, setActivePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Studio', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'work' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-outline-variant/30 transition-colors duration-300">
      <div className="flex justify-between items-center w-full px-margin-page py-6 mx-auto max-w-screen-2xl">
        {/* Logo */}
        <button
          onClick={() => {
            setActivePage('home');
            setMobileMenuOpen(false);
          }}
          className="font-headline-md text-headline-md text-primary tracking-tight cursor-pointer hover:opacity-80 transition-opacity"
        >
          SystemNirmata
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => {
            const isActive = activePage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => setActivePage(link.id)}
                className={`font-label-caps text-label-caps uppercase tracking-widest transition-colors duration-300 cursor-pointer pb-1 ${isActive
                    ? 'text-primary border-b border-on-tertiary-container'
                    : 'text-on-surface-variant hover:text-primary hover:border-b hover:border-outline-variant'
                  }`}
              >
                {link.name}
              </button>
            );
          })}
        </div>

        {/* Action Button */}
        <button
          onClick={() => setActivePage('contact')}
          className="hidden md:block px-6 py-3 bg-primary text-on-primary font-label-caps text-label-caps uppercase hover:bg-primary-container transition-colors duration-300 rounded-none tracking-widest cursor-pointer"
        >
          Inquire
        </button>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-primary cursor-pointer focus:outline-none"
        >
          <span className="material-symbols-outlined text-2xl">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[100%] left-0 w-full bg-background border-b border-outline-variant/30 py-6 px-margin-page flex flex-col space-y-6 animate-fadeIn">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setActivePage(link.id);
                setMobileMenuOpen(false);
              }}
              className={`font-label-caps text-label-caps uppercase tracking-widest text-left py-2 border-b border-transparent ${activePage === link.id ? 'text-primary border-on-tertiary-container' : 'text-on-surface-variant'
                }`}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => {
              setActivePage('contact');
              setMobileMenuOpen(false);
            }}
            className="w-full text-center py-4 bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-widest rounded-none"
          >
            Inquire
          </button>
        </div>
      )}
    </nav>
  );
}
