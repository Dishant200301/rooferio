import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useState, MouseEvent } from "react";

const services = [
  {
    title: "Roof Installation",
    description: "A new roof, a new vibe — let's protect your home in style",
    image: "/image/service-installation.jpg",
    href: "/services/roof-installation",
  },
  {
    title: "Roof Repair",
    description: "Got a leak? We'll be there faster than you can say 'bucket'.",
    image: "/image/service-repair.jpg",
    href: "/services/roof-repair",
  },
  {
    title: "Roof Replacement",
    description: "Out with the old, in with the weatherproof.",
    image: "/image/service-replacement.jpg",
    href: "/services/roof-replacement",
  },
  {
    title: "Roof Inspections",
    description: "Spot problems early, fix them fast, and keep your roof happy.",
    image: "/image/service-inspection.jpg",
    href: "/services/roof-inspections",
  },
  {
    title: "Roof Coating",
    description: "It's like sunscreen… but for your roof.",
    image: "/image/service-coating.jpg",
    href: "/services/roof-coating",
  },
  {
    title: "Commercial Roofing",
    description: "From the ground up to the top of the roof—we've got you covered.",
    image: "/image/service-commercial.jpg",
    href: "/services/commercial-roofing",
  },
];

interface ServiceCardProps {
  service: typeof services[0];
}

function ServiceCard({ service }: ServiceCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <Link
      ref={cardRef}
      to={service.href}
      className="service-card group relative flex flex-col md:flex-row bg-[#f5f5f5] overflow-hidden cursor-none"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Text Content */}
      <div className="flex-1 p-6 md:py-8 md:pl-4 flex flex-col justify-between relative z-10">
        <h3 className="font-heading text-[22px] font-black uppercase tracking-tight text-black">
          {service.title}
        </h3>

        {/* Hover Button (Cursor Follower) */}
        <div
          className="absolute z-50 pointer-events-none transition-opacity duration-150 ease-out"
          style={{
            left: 0,
            top: 0,
            transform: `translate(${cursorPos.x}px, ${cursorPos.y}px) translate(-50%, -50%)`,
            opacity: isHovering ? 1 : 0,
          }}
        >
          <span className="bg-black text-white text-[16px] font-heading font-bold py-2 px-2 uppercase tracking-widest flex items-center gap-2 shadow-2xl whitespace-nowrap">
            View <span className="text-white animate-arrow">{'>>>'}</span>
          </span>
        </div>

        <p className="font-body text-[16px] line-height-[22px] font-semibold font-inter text-black mt-4">
          {service.description}
        </p>
      </div>

      {/* Image */}
      <div className="w-full h-[200px] md:w-[240px] md:h-full shrink-0">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover md:py-4 md:pr-4"
        />
      </div>
    </Link>
  );
}

export function ServicesSection() {
  return (
    <section className="bg-white py-16 md:pb-24 md:pt-0">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="section-label mb-4">Our Services</div>
        <h2 className="section-heading">
          We Climb So You<br />
          Don't Have To
        </h2>
      </div>
      <style>{`
        @keyframes arrow-slide {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }
        .animate-arrow {
          animation: arrow-slide 1s ease-in-out infinite;
          display: inline-block;
        }
      `}</style>
      <div className="container mx-auto px-5 md:px-12 lg:px-6 xl:px-12 max-w-[1590px]">
        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
        {/* CTA Button */}
        <div className="text-center">
          <Link to="/services" className="btn-cta">
            View All Services
            <ChevronRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  );
}
