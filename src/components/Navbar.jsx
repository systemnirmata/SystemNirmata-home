import { useState } from "react";
import logo from "../assets/logo/systemnirmata-logo.png";

export default function Navbar({ activePage, setActivePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Studio", id: "about" },
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "work" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-outline-variant/20">

      <div className="max-w-screen-2xl mx-auto h-20 md:h-32 px-4 sm:px-6 md:px-16 flex items-center justify-between gap-4">

        {/* Logo */}
        <button
          onClick={() => {
            setActivePage("home");
            setMobileMenuOpen(false);
          }}
          className="flex items-center flex-shrink-0 min-w-0"
        >
          <img
            src={logo}
            alt="SystemNirmata"
            className="h-10 sm:h-12 md:h-[110px] w-auto object-contain hover:scale-105 transition duration-300"
          />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-12">

          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActivePage(link.id)}
              className={`uppercase tracking-[4px] text-[13px] transition-all duration-300 pb-1 border-b ${
                activePage === link.id
                  ? "border-primary text-primary"
                  : "border-transparent text-on-surface-variant hover:text-primary hover:border-primary"
              }`}
            >
              {link.name}
            </button>
          ))}

        </div>

        {/* Desktop Button */}
        <button
          onClick={() => setActivePage("contact")}
          className="hidden md:flex items-center justify-center px-10 h-12 bg-primary text-on-primary uppercase tracking-[3px] text-xs hover:bg-primary-container transition duration-300 flex-shrink-0"
        >
          Inquire
        </button>

        {/* Mobile Menu */}
        <button
          className="md:hidden flex-shrink-0 p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <span className="material-symbols-outlined text-2xl sm:text-3xl">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-outline-variant px-6 py-6">

          <div className="flex flex-col gap-6">

            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setActivePage(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`uppercase tracking-[3px] text-left pb-2 border-b ${
                  activePage === link.id
                    ? "text-primary border-primary"
                    : "text-on-surface-variant border-transparent"
                }`}
              >
                {link.name}
              </button>
            ))}

            <button
              onClick={() => {
                setActivePage("contact");
                setMobileMenuOpen(false);
              }}
              className="bg-primary text-on-primary py-4 uppercase tracking-[3px]"
            >
              Inquire
            </button>

          </div>
        </div>
      )}
    </nav>
  );
}