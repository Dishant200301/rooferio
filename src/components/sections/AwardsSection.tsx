import React from "react";

type Award = {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const awards: Award[] = [
  {
    year: "2018",
    title: "GOLDEN\nSHINGLE AWARD",
    description:
      "Presented for outstanding craftsmanship and creativity in residential roofing.",
    icon: (
      <div >
       <img src="/image/ultra.svg" alt="" />
      </div>
    ),
  },
  {
    year: "2022",
    title: "TOP ROOFERS\nOF THE REGION",
    description:
      "Recognized as one of the most trusted and top-rated roofing teams in the tri-county area.",
    icon: (
      <div>
       <img src="/image/top.svg" alt="" />
      </div>
    ),
  },
  {
    year: "2025",
    title: "ECO-FRIENDLY\nROOFER AWARD",
    description:
      "Presented to roofing pros using sustainable materials and green work practices.",
    icon: (
      <div>
       <img src="/image/ultimate.svg" alt="" />
      </div>
    ),
  },
];

const AwardsSection: React.FC = () => {
  return (
    <section className="w-full bg-[#FAFAFA] py-[120px]">
      <div className="container mx-auto px-5 md:px-12 lg:px-6 xl:px-12 max-w-[1590px]">
        {/* Section Header */}
        <div className="mb-[80px]">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-[10px] h-[10px] bg-[#FF8A3D]" />
            <span className="text-[16px] font-bold font-heading tracking-widest text-black">
              AWARDS
            </span>
            <span className="w-[10px] h-[10px] bg-[#FF8A3D]" />
          </div>

          <h2 className="text-[70px] leading-[1.05] font-extrabold uppercase text-black max-w-[700px]">
            Proof we’re
            <br />
            kinda awesome
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-[#F3F3F3] p-[48px] min-h-[360px] flex flex-col justify-between"
            >
              {/* Icon */}
              <div className="mb-[40px]">{award.icon}</div>

              {/* Content */}
              <div>
                <span className="block text-[16px] font-heading font-semibold text-black mb-[12px]">
                  {award.year}
                </span>

                <h3 className="text-[28px] leading-[1.2] font-extrabold uppercase text-black whitespace-pre-line mb-[16px]">
                  {award.title}
                </h3>

                <p className="text-[16px] font-inter font-semibold leading-[1.6] text-gray-600 max-w-[320px]">
                  {award.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
