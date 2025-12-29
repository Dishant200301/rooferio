import { ArrowRight, ChevronRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const badges = [
  "20+ years of experience",
  "Certified Contractor",
  "Voted best roofers in Texas 2025",
];

export function HeroSection() {
  return (
    <section className="bg-dark text-dark-foreground pb-24 lg:bg-[linear-gradient(to_bottom,hsl(var(--dark))_80%,#ffffff_20%)]">
      <div className="container mx-auto px-5 md:px-12 lg:px-6 xl:px-12 max-w-[1590px] py-8 md:py-12">
        {/* Badges Row */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-sm font-body bg-[#1a1a1a] px-4 py-1 "
              style={{ letterSpacing: "-0.28px" }}
            >
              <img src="/image/icon/certificate.svg" alt="" className="w-4 h-4" />
              <span className="opacity-90">{badge}</span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-dark-foreground/20 mb-8 md:mb-12" />

        {/* Main Heading */}
        <h1
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[100px] font-semibold uppercase leading-none mb-8 md:mb-12"
          style={{ letterSpacing: "-4.4px" }}
        >
          The Roofers Your<br />
          Neighbors Secretly<br />
          Recommend
        </h1>
        <div className="w-full h-px bg-dark-foreground/20 mb-0 md:mb-4" />

        {/* Button Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 md:mb-12">
          <div className="flex flex-wrap gap-3">
            <Link to="#" className="btn-cta-accent">
              BUY TEMPLATE
              <ChevronRight className="w-6 h-6" />
            </Link>
            <a
              href="tel:+14524567890"
              className="inline-flex items-center gap-3 bg-[#1a1a1a] text-white font-heading text-base font-bold uppercase px-5 h-12 hover:bg-[#2a2a2a] transition-colors"
            >
              <Phone className="w-4 h-4" />
              +1 (452) 456 789
              <ChevronRight className="w-6 h-6" />
            </a>
          </div>

          <p
            className="font-body font-semibold text-lg text-right max-w-md opacity-90 text-white"
            style={{ lineHeight: "25px", letterSpacing: "-0.36px" }}
          >
            We've got hammers swinging and shingles<br className="hidden md:block" />
            flying in Dallas, Fort Worth, Austin, Houston,<br className="hidden md:block" />
            San Antonio, Plano and way beyond.
          </p>
        </div>

        {/* Hero Image */}
        <div className="w-full">
          <img
            src="/image/hero-roof.jpg"
            alt="Beautiful residential home with professional roofing in Texas suburb"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
