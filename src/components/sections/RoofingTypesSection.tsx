import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useState, MouseEvent } from "react";

const roofingTypes = [
  {
    title: "Asphalt Shingle",
    description:
      "Affordable, reliable, and made to handle the heat (and the hail).",
    image: "/image/Roofing-3.png",
    lifespan: "15–30 years",
    price: "$3.50 to $5.50 per sq. ft. (installed)",
  },
  {
    title: "Clay Tile",
    description:
      "Timeless elegance, unbeatable heat resistance, extreme durability",
    image: "/image/Roofing-1.png",
    lifespan: "50–100+ years",
    price: "$10.00 – $18.00 per sq. ft. (installed)",
  },
  {
    title: "Concrete Tile",
    description:
      "Stylish, tough, and made to mimic high-end without the high cost.",
    image: "/image/Roofing-2.png",
    lifespan: "40–75 years",
    price: "$8.00 – $12.00 per sq. ft. (installed)",
  },
];

const RoofingCard = ({ type }: { type: typeof roofingTypes[0] }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      className="bg-light-alt relative overflow-hidden md:cursor-none group p-4"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Cursor Follower */}
      <div
        className="hidden md:block absolute z-50 pointer-events-none transition-opacity duration-150 ease-out"
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

      {/* Header */}
      <h3
        className="font-heading text-2xl font-semibold uppercase mb-2"
        style={{ letterSpacing: "-0.6px" }}
      >
        {type.title}
      </h3>
      <p
        className="font-body text-base mb-4"
        style={{ lineHeight: "25px", letterSpacing: "-0.36px" }}
      >
        {type.description}
      </p>

      {/* Image */}
      <div className="bg-light h-64 md:h-96 mb-4 overflow-hidden">
        <img
          src={type.image}
          alt={type.title}
          className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Details */}
      <div className="space-y-2">
        <div className="flex justify-between border-t border-border pt-2">
          <span
            className="font-body text-base font-semibold"
            style={{ letterSpacing: "-0.36px" }}
          >
            Lifespan
          </span>
          <span
            className="font-body text-base"
            style={{ letterSpacing: "-0.36px" }}
          >
            {type.lifespan}
          </span>
        </div>
        <div className="flex justify-between border-t border-border pt-2">
          <span
            className="font-body text-base font-semibold"
            style={{ letterSpacing: "-0.36px" }}
          >
            Price
          </span>
          <span
            className="font-body text-base text-right"
            style={{ letterSpacing: "-0.36px" }}
          >
            {type.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export function RoofingTypesSection() {
  return (
    <section className="bg-light-alt py-16 md:py-24">
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
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="section-label mb-4">Roofing Types</div>
          <h2 className="section-heading text-3xl md:text-6xl lg:text-7xl">
            Shingle? Metal? Tile?<br />
            Let's Find Your Match
          </h2>
        </div>

        {/* Roofing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {roofingTypes.map((type) => (
            <RoofingCard key={type.title} type={type} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link to="/types" className="btn-cta">
            View All Types
            <ChevronRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  );
}
