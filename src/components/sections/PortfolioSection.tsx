import React, { useRef, useState, MouseEvent, useEffect } from "react";
import { ChevronRight } from "lucide-react";

interface PortfolioItem {
  src: string;
}

const portfolioImages: PortfolioItem[] = [
  { src: "/image/portfolio-1.png" },
  { src: "/image/portfolio-2.png" },
  { src: "/image/portfolio-3.png" },
  { src: "/image/portfolio-4.png" },
  { src: "/image/portfolio-5.png" },
  { src: "/image/portfolio-6.png" },
  { src: "/image/portfolio-7.png" },
  { src: "/image/portfolio-8.png" },
  { src: "/image/portfolio-10.png" },
  { src: "/image/portfolio-11.png" },
  { src: "/image/portfolio-12.png" },
];

// Ensure we have 20 images for a perfect 18-degree step circle (360 / 18 = 20)
// We repeat the portfolioImages to fill the 20 slots
const displayImages = [...portfolioImages, ...portfolioImages].slice(0, 20);

export function PortfolioSection() {
  const isDragging = useRef(false);
  const startX = useRef(0);
  const currentRotation = useRef(-311.4); // Use ref for rotation to avoid re-renders
  const startRotation = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: MouseEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
    startRotation.current = currentRotation.current;
    if (containerRef.current) {
      containerRef.current.style.cursor = "grabbing";
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const delta = e.clientX - startX.current;
    // Adjust sensitivity as needed
    currentRotation.current = startRotation.current - delta * 0.2;

    // Apply transform directly
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateZ(1100px) rotateY(${currentRotation.current}deg)`;
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    if (containerRef.current) {
      containerRef.current.style.cursor = "grab";
    }
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    if (containerRef.current) {
      containerRef.current.style.cursor = "grab";
    }
  };

  // Auto-rotation effect
  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      if (!isDragging.current) {
        currentRotation.current -= 0.05; // Adjust speed here
        if (carouselRef.current) {
          carouselRef.current.style.transform = `translateZ(1100px) rotateY(${currentRotation.current}deg)`;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="bg-[#f5f5f5] py-20 overflow-hidden flex flex-col items-center border-b border-gray-100 min-h-[900px]">
      {/* Header Section */}
      <div className="container mx-auto px-5 md:px-12 lg:px-6 xl:px-12 max-w-[1590px] text-center mb-20 relative z-10">
        {/* Eyebrow Label */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="w-2 h-2 bg-orange-500 rounded-sm"></span>
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-gray-800">
            OUR PORTFOLIO
          </span>
          <span className="w-2 h-2 bg-orange-500 rounded-sm"></span>
        </div>

        {/* Main Heading */}
        <h2 className="text-[44px] md:text-[56px] lg:text-[64px] font-[900] text-black tracking-tight uppercase leading-[1.05] mb-10">
          A LOOK AT WHAT
          <br />
          WE'VE NAILED
        </h2>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <button className="flex items-center justify-center gap-3 bg-black text-white px-8 py-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-gray-900 transition-all">
            VIEW PROJECTS
            <ChevronRight className="w-4 h-4 stroke-[3px]" />
          </button>
          <button className="flex items-center justify-center gap-3 bg-black text-white px-8 py-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-gray-900 transition-all">
            VIEW GALLERY
            <ChevronRight className="w-4 h-4 stroke-[3px]" />
          </button>
        </div>
      </div>

      {/* 3D Carousel */}
      <div
        className="w-full h-[300px] relative flex items-center justify-center perspective-container overflow-hidden"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: "grab" }}
      >
        <div
          ref={carouselRef}
          className="relative w-full h-full transform-style-3d will-change-transform"
          style={{
            transform: `translateZ(1100px) rotateY(${currentRotation.current}deg)`, // Initial transform
          }}
        >
          {displayImages.map((item, index) => (
            <div
              key={index}
              className="absolute top-1/2 left-1/2 w-[600px] h-[450px] bg-[#f5f5f5] overflow-hidden will-change-transform"
              style={{
                // Concave setup for 7 images:
                // Radius 2000px, Angle 18deg -> Flatter curve, fits more items
                // Gap calculation: Chord(18deg, R=2000) ~= 625px. Card width 600px -> ~25px gap.
                transform: `translate(-50%, -50%) rotateY(${index * 18}deg) translateZ(-2000px)`,
                backfaceVisibility: "hidden",
              }}
            >
              <img
                src={item.src}
                alt={`Portfolio ${index}`}
                className="w-full h-full object-cover pointer-events-none"
              />
              {/* Subtle shadow for depth at edges */}
              <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .perspective-container {
          perspective: 700px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
}