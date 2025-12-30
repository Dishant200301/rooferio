import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Home, ChevronRight, Wrench, Hammer, Trash2, ClipboardCheck, PaintRoller, Building2 } from "lucide-react";

const services = [
  { name: "Roof Installation", href: "/services/installation", icon: Wrench },
  { name: "Roof Repair", href: "/services/repair", icon: Hammer },
  { name: "Roof Replacement", href: "/services/replacement", icon: Trash2 },
  { name: "Roof Inspections", href: "/services/inspections", icon: ClipboardCheck },
  { name: "Roof Coating", href: "/services/coating", icon: PaintRoller },
  { name: "Commercial Roofing", href: "/services/commercial", icon: Building2 },
];

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Projects", href: "/projects" },
  { name: "Blogs", href: "/blogs" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="container mx-auto px-5 md:px-12 lg:px-6 xl:px-12 max-w-[1590px]">
        <div className="flex items-center justify-between h-16 md:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/image/favicon-light.png" alt="Roofaria" className="h-10 md:h-12 w-auto" />
            <h1 className="text-3xl ml-2 font-bold font-heading uppercase">Roofaria</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={link.hasDropdown ? () => setIsServicesOpen(true) : undefined}
                onMouseLeave={link.hasDropdown ? () => setIsServicesOpen(false) : undefined}
              >
                {link.hasDropdown ? (
                  <Link
                    to={link.href}
                    className="relative flex items-center gap-1 px-4 py-2 font-heading text-base font-bold uppercase overflow-hidden group"
                  >
                    <span
                      className={`absolute bottom-0 left-0 w-full bg-black transition-all duration-400 ease-out -z-10 ${location.pathname.startsWith("/services") ? "h-full" : "h-0 group-hover:h-full"
                        }`}
                    />
                    <span className="relative z-10 inline-flex flex-col whitespace-nowrap overflow-hidden">
                      {/* Default text - slides up and fades out */}
                      <span className={`flex items-center gap-1 transition-all duration-400 ease-out ${location.pathname.startsWith("/services") ? "translate-y-[-100%] opacity-0" : "translate-y-0 opacity-100 group-hover:translate-y-[-100%] group-hover:opacity-0"}`}>
                        <span className="text-black">{link.name}</span>
                        <img
                          src="/image/arrow-right.svg"
                          alt=""
                          className="w-4 h-4 transition-all duration-400 ease-out rotate-90 group-hover:brightness-0 group-hover:invert"
                        />
                      </span>
                      {/* Hover text - slides up from bottom */}
                      <span className={`flex items-center gap-1 absolute top-0 transition-all duration-400 ease-out ${location.pathname.startsWith("/services") ? "translate-y-0 opacity-100" : "translate-y-[100%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100"}`}>
                        <span className="text-white">{link.name}</span>
                        <img
                          src="/image/arrow-right.svg"
                          alt=""
                          className="w-4 h-4 transition-transform duration-400 ease-out rotate-90 brightness-0 invert"
                        />
                      </span>
                    </span>
                  </Link>
                ) : (
                  <Link
                    to={link.href}
                    className="relative px-4 py-2  font-heading text-base font-bold uppercase overflow-hidden group"
                  >
                    <span
                      className={`absolute bottom-0 left-0 w-full bg-black transition-all duration-400 ease-out -z-10 ${location.pathname === link.href ? "h-full" : "h-0 group-hover:h-full"
                        }`}
                    />
                    <span className="relative z-10 inline-flex flex-col whitespace-nowrap overflow-hidden">
                      {/* Default text - slides up and fades out */}
                      <span className={`block transition-all duration-400 ease-out ${location.pathname === link.href ? "translate-y-[-100%] opacity-0" : "translate-y-0 opacity-100 group-hover:translate-y-[-100%] group-hover:opacity-0"}`}>
                        <span className="text-black">{link.name}</span>
                      </span>
                      {/* Hover text - slides up from bottom */}
                      <span className={`block absolute top-0 transition-all duration-400 ease-out ${location.pathname === link.href ? "translate-y-0 opacity-100" : "translate-y-[100%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100"}`}>
                        <span className="text-white">{link.name}</span>
                      </span>
                    </span>
                  </Link>
                )}

                {/* Dropdown */}
                {link.hasDropdown && (
                  <div
                    className={`absolute top-full  left-0 pt-2 transition-all duration-200 ${isServicesOpen ? "opacity-100 visible" : "opacity-0 invisible"
                      }`}
                  >
                    <div className="bg-[#f5f5f5] border border-border shadow-lg min-w-[280px] p-2 space-y-1">
                      {services.map((service) => {
                        const Icon = service.icon;
                        return (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="relative z-10 flex hover:bg-[#f5f5f5] items-center justify-between px-4 py-3 font-heading text-sm font-bold uppercase overflow-hidden group bg-white transition-colors"
                          >
                            <span className="relative z-10 inline-flex items-center gap-3">
                              <Icon className="w-5 h-5 text-black" />
                              <span className="text-black">{service.name}</span>
                            </span>

                            {/* Hover Arrow */}
                            <img
                              src="/image/arrow-right.svg"
                              alt=""
                              className="w-4 h-4 hidden opacity-0 translate-x-[-6px] group-hover:block group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                            />

                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Button */}
          <Link
            to="/contact"
            className="hidden lg:inline-flex btn-cta"
          >
            Contact Us
            <ChevronRight className="w-6 h-6" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed top-16 left-0 w-full h-[calc(100vh-4rem)] bg-white z-50 lg:hidden overflow-y-auto flex flex-col items-center py-12 animate-fade-in">
            <div className="flex flex-col items-center w-full max-w-[200px] gap-3">
              {navLinks.map((link) => (
                <div key={link.name} className="w-full">
                  <Link
                    to={link.href}
                    className="block w-full py-3 px-6 text-center bg-[#F5F5F5] hover:bg-black hover:text-white transition-colors font-heading text-lg font-bold uppercase text-black"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </div>
              ))}

              <Link
                to="/contact"
                className="block w-full py-3 px-6 text-center bg-[#F5F5F5] hover:bg-black hover:text-white transition-colors font-heading text-lg font-bold uppercase text-black"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <div className="mt-8 w-full">
                <Link
                  to="/contact"
                  className="flex items-center justify-center w-full bg-black text-white py-4 px-6 font-heading text-lg font-bold uppercase tracking-wider hover:bg-orange-500 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
