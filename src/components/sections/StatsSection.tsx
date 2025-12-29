import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { VideoSection } from "./VideoSection";

gsap.registerPlugin(ScrollTrigger);

const statsData = [
  {
    id: 1,
    target: 21,
    suffix: "K+",
    title: "Roofs Installed",
    description: "From cozy homes to massive commercial builds — we've covered a lot of ground",
    decimals: 0,
  },
  {
    id: 2,
    target: 42,
    suffix: "+",
    title: "Expert Roofers",
    description: "Skilled, certified, and always up for the climb.",
    decimals: 0,
  },
  {
    id: 3,
    target: 3500,
    suffix: "+",
    title: "Repairs Completed",
    description: "Fast, reliable, and leak-proof — just how roof repairs should be.",
    decimals: 0,
  },
  {
    id: 4,
    target: 4.9,
    suffix: "-star",
    title: "Average Rating",
    description: "Across Google, Facebook, and Yelp — customers love us",
    decimals: 1,
  },
];

export function StatsSection() {
  const containerRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  // State to hold current animated values
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Split Reveal Animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150%", // Pin for 1.5 screen heights
          scrub: true,
          pin: true,
        },
      });

      tl.to(leftRef.current, {
        xPercent: -50,
        ease: "none",
      }, 0)
        .to(rightRef.current, {
          xPercent: 50,
          ease: "none",
        }, 0);

      if (videoRef.current) {
        tl.fromTo(videoRef.current,
          { y: "50%", opacity: 0.5 },
          { y: "0%", opacity: 1, ease: "none" },
          0
        );
      }

      // Count Up Animation
      // We use a separate ScrollTrigger for the counting so it starts when the section is visible
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 75%", // Start counting when section is 75% visible
        once: true,
        onEnter: () => {
          const targets = {
            val0: 0, val1: 0, val2: 0, val3: 0
          };

          gsap.to(targets, {
            val0: statsData[0].target,
            val1: statsData[1].target,
            val2: statsData[2].target,
            val3: statsData[3].target,
            duration: 2.5,
            ease: "power3.out",
            onUpdate: () => {
              setCounts([targets.val0, targets.val1, targets.val2, targets.val3]);
            },
          });
        },
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const renderContent = () => (
    <>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/image/stats-bg.jpg)` }}
      >
        <div className="absolute inset-0 bg-[#0f172a]/90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-5 md:px-12 lg:px-6 xl:px-12 max-w-[1590px] relative z-10 h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 md:gap-y-32 w-full max-w-[1200px] mx-auto">
          {statsData.map((stat, index) => (
            <div key={stat.title} className="text-white text-center flex flex-col items-center">
              {/* Value & Suffix */}
              <div className="flex items-start justify-center leading-none mb-4">
                <span className="font-heading text-[80px] md:text-[100px] font-semibold tracking-tighter text-white">
                  {stat.decimals > 0
                    ? counts[index].toFixed(stat.decimals)
                    : Math.floor(counts[index]).toLocaleString()}
                </span>
                <span className="font-heading text-[40px] md:text-[50px] font-semibold text-orange-500 mt-2 md:mt-3">
                  {stat.suffix}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-heading text-2xl md:text-[28px] font-extrabold uppercase mb-4 tracking-wide">
                {stat.title}
              </h3>

              {/* Description */}
              <p
                className="font-body text-lg md:text-base opacity-90 max-w-[280px] leading-relaxed"
              >
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden z-20 bg-white">
      {/* Video Section (Revealed) */}
      <div
        ref={videoRef}
        className="absolute inset-0 z-0 flex items-center justify-center w-full h-full"
      >
        <div className="w-full h-full">
          <VideoSection />
        </div>
      </div>
      {/* Left Half */}
      <div
        ref={leftRef}
        className="absolute inset-0 z-20 h-full w-full bg-[#0f172a]"
        style={{ clipPath: "inset(0 50% 0 0)" }}
      >
        {renderContent()}
      </div>

      {/* Right Half */}
      <div
        ref={rightRef}
        className="absolute inset-0 z-20 h-full w-full bg-[#0f172a]"
        style={{ clipPath: "inset(0 0 0 50%)" }}
      >
        {renderContent()}
      </div>
    </section>
  );
}
