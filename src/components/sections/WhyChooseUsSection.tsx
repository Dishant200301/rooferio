import { ShieldCheck, Award, Box, Tag } from "lucide-react";
import whyChooseIcon1 from "/image/why-choose-icon-1.svg";
import whyChooseIcon2 from "/image/why-choose-icon-2.svg";
import whyChooseIcon3 from "/image/why-choose-icon-3.svg";
import whyChooseIcon4 from "/image/why-choose-icon-4.svg";

const benefits = [
  {
    icon: whyChooseIcon1,
    title: "No Worries,\nNo What-Ifs.",
    description:
      "We’re fully insured so your home — and your peace of mind — are always protected.",
  },
  {
    icon: whyChooseIcon2,
    title: "Certified, Verified\n& Trusted.",
    description:
      "We’re officially recognized pros who play by the rules (and raise the bar).",
  },
  {
    icon: whyChooseIcon3,
    title: "Only The Good\nStuff Up Top.",
    description:
      "We use top-tier materials that hold strong through storms, sun, and squirrel attacks.",
  },
  {
    icon: whyChooseIcon4,
    title: "Fair Prices,\nNo Funny Business",
    description:
      "We keep things affordable without cutting corners — great roofs at great value.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="bg-[#fffcfc] py-20 md:py-28">
      <div className="container mx-auto px-5 py-10 md:px-12 md:py-12 lg:px-6 xl:px-16 xl:py-16 max-w-[950px] bg-[#f5f5f5]">
        {/* Header */}
        <div className="text-center mb-12 md:mb-24">
          <div className="flex justify-center items-center gap-3 mb-6">
            <span className="w-2.5 h-2.5 bg-orange-500" />
            <span className="text-[16px] font-bold uppercase tracking-[0.15em] text-[#1a1a1a] font-heading">
              Why Choose Roofaria
            </span>
            <span className="w-2.5 h-2.5 bg-orange-500" />
          </div>

          <h2 className="font-heading text-3xl md:text-[64px] font-extrabold uppercase leading-[0.95] text-[#1a1a1a] max-w-[900px] mx-auto tracking-tight">
            Because Your Roof <br />
            Deserves Better <br />
            Than ‘Good Enough’
          </h2>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-16 max-w-[1000px] mx-auto">
          {benefits.map((item) => (
            <div key={item.title} className="flex flex-col">
              {/* Top Row: Icon & Title */}
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 md:w-[80px] md:h-[80px] bg-[#e6e6e6] flex items-center justify-center shrink-0">
                  <img src={item.icon} className="w-8 h-8" alt="" />
                </div>
                <h3 className="font-heading text-xl md:text-[28px] font-bold uppercase leading-tight md:leading-[34px] text-[#1a1a1a] whitespace-pre-line tracking-tight">
                  {item.title}
                </h3>
              </div>

              {/* Divider */}
              <div className="w-full h-[2px] bg-[#e5e5e5] my-6 md:my-8" />

              {/* Description */}
              <p className="text-base md:text-[18px] font-inter font-semibold leading-[22px] text-[#4a4a4a]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
