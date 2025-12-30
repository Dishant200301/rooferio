import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
// import { RooferSilhouette } from "@/components/RooferSilhouette";
import { ContactSection } from "@/components/sections/ContactSection";
import { useParams, Link, Navigate } from "react-router-dom";
import { getServiceBySlug, serviceDetails } from "../data/serviceDetails";
import { services } from "../data/services";
import { useState } from "react";
import { ArrowRight, ChevronDown, ChevronUp, Phone, Calendar, MessageSquare, Award, ShieldCheck, Trophy, ChevronRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { PageTransition } from "@/components/PageTransition";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug || "");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  if (!service) {
    return <Navigate to="/services" replace />;
  }



  return (
    <PageTransition>
      <div className="min-h-screen">
        <Helmet>
          <title>{service.title}</title>
        </Helmet>
        <Navbar />
        <main>
          {/* Hero Section */}
          <section className="bg-light py-12 md:py-20">
            <div className="container mx-auto px-5 md:px-12 lg:px-6 xl:px-12 max-w-[1590px]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                {/* Left Content */}
                <div className="pt-4">
                  {/* Header Label */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-3 h-3 bg-orange-500" />
                    <span className="text-[15px] font-bold uppercase tracking-[0.15em] text-[#1a1a1a] font-heading">
                      {service.title}
                    </span>
                  </div>

                  {/* Main Title */}
                  {/* Main Title */}
                  <h1 className="font-heading text-3xl md:text-[56px] lg:text-[60px] font-[600] uppercase leading-tight md:leading-[66px] text-[#1a1a1a] tracking-tight mb-8 max-w-xl">
                    {service.title} IN {service.locations}
                  </h1>

                  {/* Separator */}
                  <div className="w-full h-px bg-gray-200 mb-8" />

                  {/* Description */}
                  <p className="font-body text-lg text-black leading-relaxed mb-10 max-w-lg font-inter font-[600] line-height-[25px]">
                    {service.shortDescription}
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <Link
                      to="/contact"
                      className="w-full md:w-auto h-14 px-8 bg-orange-500 hover:bg-orange-600 text-black font-heading font-bold uppercase tracking-wider text-[16px] flex items-center justify-center gap-2 transition-colors"
                    >
                      Get A Free Quote
                      <ChevronRight className="w-6 h-6" />
                    </Link>
                    <a
                      href="tel:+14524567890"
                      className="w-full md:w-auto h-14 px-8 bg-gray-200 hover:bg-gray-300 text-black font-heading font-bold uppercase tracking-wider text-[16px] flex items-center justify-center gap-2 transition-colors"
                    >
                      <Phone className="w-4 h-4 fill-current" />
                      +1 (452) 456 789
                      <ChevronRight className="w-6 h-6" />
                    </a>
                  </div>
                </div>

                {/* Right Content */}
                <div className="flex flex-col gap-6">
                  {/* Badges Row */}
                  {/* Badges Row */}
                  <div className="border-t border-gray-200 pt-6 mt-2">
                    <div className="flex flex-wrap gap-2">
                      <div className="flex items-center gap-3 bg-white px-5 py-1 shadow-sm">
                        <Award className="w-4 h-4 text-[#1a1a1a]" />
                        <span className="font-heading text-sm font-bold text-[#1a1a1a]">
                          20+ years of experience
                        </span>
                      </div>
                      <div className="flex items-center gap-3 bg-white px-5 py-1 shadow-sm">
                        <ShieldCheck className="w-4 h-4 text-[#1a1a1a]" />
                        <span className="font-heading text-sm font-bold text-[#1a1a1a]">
                          Certified Contractor
                        </span>
                      </div>
                      <div className="flex items-center gap-3 bg-white px-5 py-1 shadow-sm">
                        <Trophy className="w-4 h-4 text-[#1a1a1a]" />
                        <span className="font-heading text-sm font-bold text-[#1a1a1a]">
                          Voted best roofers in Texas 2025
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Image Container */}
                  <div className="relative w-full aspect-[4/3] md:aspect-[12/10] overflow-hidden bg-gray-100">
                    <img
                      src={service.heroImage}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />




                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Main Content Section */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-5 md:px-12 lg:px-6 xl:px-12 max-w-[1590px]">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-5">
                {/* Left Content */}
                <div className="bg-light p-6 md:p-8 lg:col-span-2 space-y-12 md:space-y-16">
                  {/* What We Offer */}
                  <div>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase mb-4 text-[#1a1a1a]">
                      What We Offer
                    </h2>
                    {service.sectionDescriptions?.whatWeOffer && (
                      <p className="font-body text-base md:text-[18px] font-semibold text-[#1a1a1a] mb-6 max-w-2xl">
                        {service.sectionDescriptions.whatWeOffer}
                      </p>
                    )}
                    <ul className="space-y-3">
                      {service.sections.whatWeOffer.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 font-body">
                          <span className="w-1.5 h-1.5 bg-[#1a1a1a] mt-2 shrink-0 rounded-full" />
                          <span className="text-base md:text-[18px] font-bold text-[#1a1a1a]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What's Included */}
                  <div>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase mb-4 text-[#1a1a1a]">
                      What's Included
                    </h2>
                    {service.sectionDescriptions?.whatsIncluded && (
                      <p className="font-body text-base md:text-[18px] font-semibold text-[#1a1a1a] mb-6 max-w-2xl">
                        {service.sectionDescriptions.whatsIncluded}
                      </p>
                    )}
                    <ul className="space-y-3">
                      {service.sections.whatsIncluded.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 font-body">
                          <span className="w-1.5 h-1.5 bg-[#1a1a1a] mt-2 shrink-0 rounded-full" />
                          <span className="text-sm md:text-[15px] font-bold text-[#1a1a1a]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Our Approach */}
                  <div>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase mb-4 text-[#1a1a1a]">
                      Our Approach
                    </h2>
                    {service.sectionDescriptions?.ourApproach && (
                      <p className="font-body text-base md:text-[18px] font-semibold text-[#1a1a1a] mb-6 max-w-2xl">
                        {service.sectionDescriptions.ourApproach}
                      </p>
                    )}
                    <ul className="space-y-3">
                      {service.sections.ourApproach.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 font-body">
                          <span className="w-1.5 h-1.5 bg-[#1a1a1a] mt-2 shrink-0 rounded-full" />
                          <span className="text-base md:text-[18px] font-semibold text-[#1a1a1a]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Why Choose Us */}
                  <div>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase mb-4 text-[#1a1a1a]">
                      Why Choose Our Service
                    </h2>
                    {service.sectionDescriptions?.whyChooseUs && (
                      <p className="font-body text-base md:text-[18px] font-semibold text-[#1a1a1a] mb-6 max-w-2xl">
                        {service.sectionDescriptions.whyChooseUs}
                      </p>
                    )}
                    <ul className="space-y-3">
                      {service.sections.whyChooseUs.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 font-body">
                          <span className="w-1.5 h-1.5 bg-[#1a1a1a] mt-2 shrink-0 rounded-full" />
                          <span className="text-base md:text-[18px] font-semibold text-[#1a1a1a]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase mb-4 text-[#1a1a1a]">
                      Benefits of a New Roof
                    </h2>
                    {service.sectionDescriptions?.benefits && (
                      <p className="font-body text-base md:text-[18px] font-semibold text-[#1a1a1a] mb-6 max-w-2xl">
                        {service.sectionDescriptions.benefits}
                      </p>
                    )}
                    <ul className="space-y-3">
                      {service.sections.benefits.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 font-body">
                          <span className="w-1.5 h-1.5 bg-[#1a1a1a] mt-2 shrink-0 rounded-full" />
                          <span className="text-base md:text-[18px] font-semibold text-[#1a1a1a]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing */}
                  <div>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase mb-4 text-[#1a1a1a]">
                      Pricing
                    </h2>
                    {service.sectionDescriptions?.pricing && (
                      <p className="font-body text-base md:text-[18px] font-semibold text-[#1a1a1a] mb-6 max-w-2xl">
                        {service.sectionDescriptions.pricing}
                      </p>
                    )}
                    <ul className="space-y-3">
                      {service.sections.pricing.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 font-body">
                          <span className="w-1.5 h-1.5 bg-[#1a1a1a] mt-2 shrink-0 rounded-full" />
                          <span className="text-base md:text-[18px] font-semibold text-[#1a1a1a]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* FAQs */}
                  <div>
                    <h2 className="font-heading text-3xl font-bold uppercase mb-4 text-[#1a1a1a]">
                      FAQs
                    </h2>
                    {service.sectionDescriptions?.faqs && (
                      <p className="font-body text-[18px] font-semibold text-[#1a1a1a] mb-8 max-w-2xl">
                        {service.sectionDescriptions.faqs}
                      </p>
                    )}
                    <div className="space-y-8 border-l-2 border-orange-500 pl-6 py-2">
                      {service.sections.faqs.map((faq, index) => (
                        <div key={index}>
                          <h3 className="font-heading text-[18px] font-bold text-[#1a1a1a] mb-2">
                            {faq.question}
                          </h3>
                          <p className="font-body text-[18px] text-gray-600 italic leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Related Services */}
                  <div className="bg-black p-6 md:p-10 mt-12">
                    <h3 className="font-heading text-xl md:text-3xl font-bold uppercase text-white mb-8">
                      Explore Other Services
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {services.map((related) => {
                        const Icon = related.icon || ChevronRight;

                        return (
                          <Link
                            key={related.href}
                            to={related.href}
                            className="relative flex items-center bg-[#1a1a1a] hover:bg-[#2a2a2a] p-2 md:p-3 transition-all group border border-white/10 overflow-hidden"
                          >
                            {/* Hover Arrow (Custom SVG) */}
                            <div className="absolute left-3 opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-6 h-6 fill-orange-500">
                                <path d="M181.66,133.66l-80,80A8,8,0,0,1,88,208V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                              </svg>
                            </div>

                            {/* Content */}
                            <div className="flex items-center gap-4 transition-transform duration-300 group-hover:translate-x-8">
                              <span className="text-orange-500">
                                <Icon className="w-6 h-6" />
                              </span>
                              <span className="font-heading md:text-[22px] text-sm font-bold uppercase text-white leading-[29px] tracking-wide">
                                {related.title}
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Right Sidebar - Booking Form */}
                <div className="lg:sticky lg:top-24">
                  <div className="bg-[#f5f5f5] p-6 md:p-10">
                    <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase mb-8 text-[#1a1a1a]">
                      Book A Service
                    </h3>
                    <form className="space-y-5">
                      {/* Name */}
                      <div>
                        <label className="block font-heading text-lg font-bold uppercase mb-2 text-[#1a1a1a]">
                          Name*
                        </label>
                        <input
                          type="text"
                          placeholder="Jane Smith"
                          className="w-full h-12 px-4 bg-[#eaeaea] font-body text-base placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all"
                        />
                      </div>

                      {/* Email & Phone Row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block font-heading text-lg font-bold uppercase mb-2 text-[#1a1a1a]">
                            Email*
                          </label>
                          <input
                            type="email"
                            placeholder="jane@framer.com"
                            className="w-full h-12 px-4 bg-[#eaeaea] font-body text-base placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block font-heading text-lg font-bold uppercase mb-2 text-[#1a1a1a]">
                            Phone*
                          </label>
                          <input
                            type="tel"
                            placeholder="(123) 456-7890"
                            className="w-full h-12 px-4 bg-[#eaeaea] font-body text-base placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all"
                          />
                        </div>
                      </div>

                      {/* Property Type & Service Type Row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block font-heading text-lg font-bold uppercase mb-2 text-[#1a1a1a]">
                            Property Type*
                          </label>
                          <div className="relative">
                            <select className="w-full h-12 px-4 bg-[#eaeaea] font-body text-base text-[#1a1a1a] appearance-none focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all cursor-pointer">
                              <option>Residential</option>
                              <option>Commercial</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                          </div>
                        </div>
                        <div>
                          <label className="block font-heading text-lg font-bold uppercase mb-2 text-[#1a1a1a]">
                            Service Type*
                          </label>
                          <div className="relative">
                            <select className="w-full h-12 px-4 bg-[#eaeaea] font-body text-base text-[#1a1a1a] appearance-none focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all cursor-pointer">
                              {serviceDetails.map((s) => (
                                <option key={s.slug} value={s.slug} selected={s.slug === service.slug}>
                                  {s.title}
                                </option>
                              ))}
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                          </div>
                        </div>
                      </div>

                      {/* Zip Code & Best Time Row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block font-heading text-lg font-bold uppercase mb-2 text-[#1a1a1a]">
                            Zip Code*
                          </label>
                          <input
                            type="text"
                            placeholder="2624"
                            className="w-full h-12 px-4 bg-[#eaeaea] font-body text-base placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block font-heading text-lg font-bold uppercase mb-2 text-[#1a1a1a]">
                            Best Time To Call
                          </label>
                          <div className="relative">
                            <input
                              type="time"
                              className="w-full h-12 px-4 bg-[#eaeaea] font-body text-base text-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block font-heading text-lg font-bold uppercase mb-2 text-[#1a1a1a]">
                          Message
                        </label>
                        <textarea
                          placeholder="Write your detailed message here"
                          rows={4}
                          className="w-full px-4 py-3 bg-[#eaeaea] font-body text-base placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all resize-none"
                        />
                      </div>

                      {/* Terms Checkbox */}
                      <div className="flex items-start gap-3 pt-2">
                        <input
                          type="checkbox"
                          id="terms"
                          className="mt-1 w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                        />
                        <label htmlFor="terms" className="font-body text-sm text-[#1a1a1a] font-medium leading-snug">
                          By submitting this form, you agree to our <span className="text-orange-500 font-bold">Privacy Policy</span> and <span className="text-orange-500 font-bold">Terms & Conditions</span>.
                        </label>
                      </div>

                      <button
                        type="submit"
                        className="w-full h-14 bg-orange-500 text-white font-heading text-base font-bold uppercase tracking-wider hover:bg-orange-600 transition-colors mt-4"
                      >
                        Request Free Estimate
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Gallery Section */}
          <section className="bg-background py-8 md:py-16">
            <div className="container mx-auto px-5 md:px-12 xl:px-0">
              <div className="section-label-left mb-4">Services done by us</div>
              <h2 className="section-heading-left mb-8">
                No Stock Photos —<br />Just Our Actual Work.
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {service.gallery.map((image, index) => (
                  <div key={index} className="aspect-[3/3] overflow-hidden">
                    <img
                      src={image}
                      alt={`${service.title} project ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <ContactSection />

          {/* Silhouette */}
          {/* <RooferSilhouette /> */}
        </main>
        <Footer />    </div>
    </PageTransition>
  );
};

export default ServiceDetail;
