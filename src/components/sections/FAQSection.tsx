import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How Do I Know If My Roof Needs Replacing?",
    answer:
      "Look for signs like missing or curling shingles, granules in gutters, daylight through roof boards, or a roof over 20 years old. We offer free inspections to assess your roof's condition.",
  },
  {
    question: "Do You Offer Free Estimates?",
    answer:
      "Yes! We provide completely free, no-obligation estimates. Our team will assess your roof, discuss your options, and give you a transparent quote with no hidden fees.",
  },
  {
    question: "How Long Does A Roof Replacement Take?",
    answer:
      "Most residential roof replacements take 1-3 days depending on size, weather, and complexity. We'll give you a timeline upfront and keep you updated throughout the process.",
  },
  {
    question: "What Roofing Materials Do You Offer?",
    answer:
      "We offer asphalt shingles, metal roofing, clay and concrete tiles, wood shakes, slate, and flat roofing options. We'll help you choose the best material for your home and budget.",
  },
  {
    question: "Are Your Roofers Licensed And Insured?",
    answer:
      "Absolutely. All our roofers are fully licensed, insured, and certified. Your home and peace of mind are always protected when you work with us.",
  },
  {
    question: "Do You Offer Warranties?",
    answer:
      "Yes, we offer comprehensive warranties on both materials and workmanship. Specific terms vary by product, but we stand behind every roof we install.",
  },
  {
    question: "Can You Help With Insurance Claims?",
    answer:
      "We regularly work with insurance companies and can help document damage, provide estimates, and guide you through the claims process.",
  },
  {
    question: "Do You Do Emergency Repairs?",
    answer:
      "Yes, we offer 24/7 emergency repair services for urgent issues like storm damage or major leaks. Call us anytime and we'll be there fast.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-light-alt py-16 md:py-24">
      <div className="container mx-auto px-5 md:px-12 lg:px-6 xl:px-12 max-w-[1590px]">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="section-label mb-4">FAQs</div>
          <h2 className="section-heading">
            Let's Climb Through Your<br />
            Questions, One By One.
          </h2>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`backdrop-blur-sm mb-1 overflow-hidden transition-colors duration-300 ${openIndex === index ? "bg-black text-white" : "bg-light"
                }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between gap-6 pl-6 text-left"
              >
                <h3
                  className="font-heading text-lg md:text-xl font-bold uppercase pr-4"
                  style={{ letterSpacing: "-0.1px", lineHeight: "29px" }}
                >
                  {faq.question}
                </h3>
                <div
                  className={`w-16 h-16 flex items-center justify-center shrink-0 transition-colors ${openIndex === index
                    ? "bg-orange-500 text-black"
                    : "bg-black text-white"
                    }`}
                >
                  <ChevronDown
                    className={`w-6 h-6 transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""
                      }`}
                  />
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-48 bg-[#f5f5f5] text-black" : "max-h-0"
                  }`}
              >
                <p
                  className="px-6 pb-5 mt-4 font-inter text-[16px] font-inter font-semibold opacity-80"
                  style={{ lineHeight: "24px" }}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
