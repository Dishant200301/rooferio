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
            <img src="/image/logo.png" alt="Rooferio" className="h-10 md:h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.hasDropdown ? (
                  <button
                    className="relative flex items-center gap-1 px-4 py-2 font-heading text-base font-bold uppercase overflow-hidden group"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <span
                      className={`absolute bottom-0 left-0 w-full bg-black transition-all duration-300 ease-in-out -z-10 ${location.pathname.startsWith("/services") ? "h-full" : "h-0 group-hover:h-full"
                        }`}
                    />
                    <span className="relative z-10 inline-flex flex-col whitespace-nowrap">
                      <span className={`flex items-center gap-1 transition-transform duration-300 ease-in-out ${location.pathname.startsWith("/services") ? "-translate-y-full" : "group-hover:-translate-y-full"}`}>
                        {link.name}
                        <ChevronDown className="w-4 h-4" />
                      </span>
                      <span className={`absolute top-full left-0 w-full flex items-center gap-1 text-white transition-transform duration-300 ease-in-out ${location.pathname.startsWith("/services") ? "-translate-y-full" : "group-hover:-translate-y-full"}`}>
                        {link.name}
                        <ChevronDown className="w-4 h-4" />
                      </span>
                    </span>
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    className="relative px-4 py-2 font-heading text-base font-bold uppercase overflow-hidden group"
                  >
                    <span
                      className={`absolute bottom-0 left-0 w-full bg-black transition-all duration-300 ease-in-out -z-10 ${location.pathname === link.href ? "h-full" : "h-0 group-hover:h-full"
                        }`}
                    />
                    <span className="relative z-10 inline-flex flex-col whitespace-nowrap">
                      <span className={`block transition-transform duration-300 ease-in-out ${location.pathname === link.href ? "-translate-y-full" : "group-hover:-translate-y-full"}`}>
                        {link.name}
                      </span>
                      <span className={`absolute top-full left-0 w-full block text-white transition-transform duration-300 ease-in-out ${location.pathname === link.href ? "-translate-y-full" : "group-hover:-translate-y-full"}`}>
                        {link.name}
                      </span>
                    </span>
                  </Link>
                )}

                {/* Dropdown */}
                {link.hasDropdown && (
                  <div
                    className={`absolute top-full left-0 pt-2 transition-all duration-200 ${isServicesOpen ? "opacity-100 visible" : "opacity-0 invisible"
                      }`}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <div className="bg-background border border-border shadow-lg min-w-64 py-2">
                      {services.map((service) => {
                        const Icon = service.icon;
                        return (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="relative flex items-center gap-3 px-4 py-3 font-heading text-sm font-bold uppercase overflow-hidden group"
                          >
                            <span
                              className={`absolute bottom-0 left-0 w-full bg-black transition-all duration-300 ease-in-out -z-10 ${location.pathname === service.href ? "h-full" : "h-0 group-hover:h-full"
                                }`}
                            />
                            <span className="relative z-10 inline-flex flex-col whitespace-nowrap w-full">
                              <span className={`flex items-center gap-3 transition-transform duration-300 ease-in-out ${location.pathname === service.href ? "-translate-y-full" : "group-hover:-translate-y-full"}`}>
                                <Icon className="w-5 h-5" />
                                <span>{service.name}</span>
                              </span>
                              <span className={`absolute top-full left-0 w-full flex items-center gap-3 text-white transition-transform duration-300 ease-in-out ${location.pathname === service.href ? "-translate-y-full" : "group-hover:-translate-y-full"}`}>
                                <Icon className="w-5 h-5" />
                                <span>{service.name}</span>
                              </span>
                            </span>
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
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="flex items-center justify-between w-full py-3 font-heading text-base font-bold uppercase"
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                    {isServicesOpen && (
                      <div className="pl-4 pb-2">
                        {services.map((service) => {
                          const Icon = service.icon;
                          return (
                            <Link
                              key={service.name}
                              to={service.href}
                              className="relative flex items-center gap-3 px-4 py-2 font-heading text-sm font-bold uppercase overflow-hidden group"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <span
                                className={`absolute bottom-0 left-0 w-full bg-black transition-all duration-300 ease-in-out -z-10 ${location.pathname === service.href ? "h-full" : "h-0 group-hover:h-full"
                                  }`}
                              />
                              <span className="relative z-10 inline-flex flex-col whitespace-nowrap w-full">
                                <span className={`flex items-center gap-3 transition-transform duration-300 ease-in-out ${location.pathname === service.href ? "-translate-y-full" : "group-hover:-translate-y-full"}`}>
                                  <Icon className="w-5 h-5" />
                                  <span>{service.name}</span>
                                </span>
                                <span className={`absolute top-full left-0 w-full flex items-center gap-3 text-white transition-transform duration-300 ease-in-out ${location.pathname === service.href ? "-translate-y-full" : "group-hover:-translate-y-full"}`}>
                                  <Icon className="w-5 h-5" />
                                  <span>{service.name}</span>
                                </span>
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.href}
                    className="relative block px-4 py-3 font-heading text-base font-bold uppercase overflow-hidden group"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span
                      className={`absolute bottom-0 left-0 w-full bg-black transition-all duration-300 ease-in-out -z-10 ${location.pathname === link.href ? "h-full" : "h-0 group-hover:h-full"
                        }`}
                    />
                    <span className="relative z-10 inline-flex flex-col whitespace-nowrap">
                      <span className={`block transition-transform duration-300 ease-in-out ${location.pathname === link.href ? "-translate-y-full" : "group-hover:-translate-y-full"}`}>
                        {link.name}
                      </span>
                      <span className={`absolute top-full left-0 w-full block text-white transition-transform duration-300 ease-in-out ${location.pathname === link.href ? "-translate-y-full" : "group-hover:-translate-y-full"}`}>
                        {link.name}
                      </span>
                    </span>
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="btn-cta w-full justify-center mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
              <ChevronRight className="w-6 h-6" />
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
