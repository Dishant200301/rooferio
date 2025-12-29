import { ArrowRight, ChevronRight, Home, MessageCircle, Search } from "lucide-react";
import { Link } from "react-router-dom";
import img1 from "/image/about-us-icon-1.svg";
import img2 from "/image/about-us-icon-2.svg";
import img3 from "/image/about-us-icon-3.svg";
import img4 from "/image/about-us-icon-4.svg";
const benefits = [
  {
    icon: img1,
    text: "Every roof we build is made to fit your home — not some template.",
  },
  {
    icon: img2,
    text: "We live here too, so we treat your home like our own.",
  },
  {
    icon: img3,
    text: "From your first call to final cleanup, you'll speak with real people who actually know roofs",
  },
  {
    icon: img4,
    text: "From hidden damage to tiny leaks — we catch the small stuff before it's big.",
  },
];

export function AboutSection() {
  return (
    <section className="bg-[#f5f5f5] py-20 md:py-28">
      <div className="container mx-auto px-5 md:px-12 lg:px-6 xl:px-12 max-w-[1590px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Content */}
          <div className="pt-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-3 h-3 bg-orange-500" />
              <span className="text-[16px] font-bold uppercase tracking-[0.15em] text-[#1a1a1a] font-heading">
                About Us
              </span>
              <span className="w-3 h-3 bg-orange-500" />
            </div>

            <h2 className="font-heading text-[56px] md:text-[72px] font-black uppercase leading-[0.9] text-[#1a1a1a] mb-8 tracking-tight">
              Serving Roofs<br />
              Since 1982
            </h2>
            <p
              className="font-body text-xl md:text-2xl font-semibold mb-8 max-w-lg"
              style={{ lineHeight: "31px", letterSpacing: "-0.24px" }}
            >
              We're a friendly, family-run roofing company that's been keeping
              homes dry and happy since 1982. Whether it's a sneaky leak or a
              full roof makeover, we show up with tools in hand, smiles on our
              faces, and zero drama. Great work, fair prices, and roofs that
              last — that's how we roll.
            </p>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-black text-white font-heading text-[15px] font-bold uppercase px-8 h-14 tracking-wider hover:bg-black/90 transition-colors"
            >
              Know More About Us
              <ChevronRight className="w-6 h-6" />
            </Link>
          </div>

          {/* Right Benefits */}
          <div className="bg-white p-8 md:p-12">
            <div className="flex flex-col">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                className={`flex items-start gap-4 py-4 ${index !== benefits.length - 1 ? "border-b border-border" : ""
                    }`}
                >
                  <div className="w-[80px] h-[80px] bg-[#e6e6e6] flex items-center justify-center shrink-0">
                    <img src={benefit.icon} alt="" className="w-6 h-6" />
                  </div>
                  <p className="font-body text-[18px] font-bold text-[#1a1a1a] leading-snug max-w-xs">
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
