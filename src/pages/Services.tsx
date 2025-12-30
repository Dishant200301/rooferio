import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/sections/ContactSection";
import { Link } from "react-router-dom";
import { services } from "../data/services";

import { Helmet } from "react-helmet-async";
import { PageTransition } from "@/components/PageTransition";

const Services = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Helmet>
          <title>Roofaria - Roofer and Roofing Service Framer Template</title>
        </Helmet>
        <Navbar />
        <main>
          {/* Hero */}
          <section className="py-12 md:py-28">
            <div className="container mx-auto px-5 md:px-12 lg:px-6 xl:px-12 max-w-[1590px]">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-3 h-3 bg-orange-500" />
                <span className="text-[14px] md:text-[16px] font-bold uppercase tracking-[0.15em] text-[#1a1a1a] font-heading">
                  Our Services
                </span>
                <span className="w-3 h-3 bg-orange-500" />
              </div>
              <h1 className="font-heading text-3xl md:text-[64px] font-extrabold uppercase leading-[1.1] md:leading-[0.95] text-[#1a1a1a] tracking-tight">
                Need Roofing Help? Here's<br />Everything We Can Do For You
              </h1>
            </div>
          </section>

          {/* Services List */}
          <section className="pb-12 md:pb-20">
            <div className="container mx-auto px-5 md:px-12 lg:px-6 xl:px-12 max-w-[1590px]">
              <div className="space-y-8">
                {services.map((service) => (
                  <Link
                    key={service.title}
                    to={service.href}
                    className="block bg-[#f5f5f5] transition-colors group"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-auto lg:min-h-[400px]">
                      {/* Image Column (Span 5) */}
                      <div className="lg:col-span-5 relative h-64 lg:h-auto overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="absolute inset-0 w-full h-full p-4 lg:py-10 lg:pl-10 object-cover transition-transform duration-700"
                        />
                      </div>

                      {/* Content Column (Span 4) */}
                      <div className="lg:col-span-4 p-6 md:p-12 flex flex-col items-start">
                        <div className="w-12 h-12 bg-black flex items-center justify-center mb-6">
                          <service.icon className="w-6 h-6 text-orange-500" />
                        </div>

                        <h3 className="font-heading text-2xl md:text-[28px] uppercase leading-tight md:leading-[34px] font-[600] mb-4 text-[#1a1a1a]">
                          {service.title}
                        </h3>

                        <p className="font-inter text-lg md:text-[22px] uppercase font-bold leading-snug md:leading-[31px] mb-4 md:mb-auto text-[#1a1a1a]">
                          {service.subtitle}
                        </p>

                        <p className="font-body text-base md:text-[18px] leading-relaxed md:leading-[25px] font-inter font-[600] text-[#4a4a4a] mt-4 md:mt-8 max-w-sm ">
                          {service.description}
                        </p>
                      </div>

                      {/* Tags Column (Span 3) */}
                      <div className="lg:col-span-3 p-6 md:p-12 flex flex-row lg:flex-col flex-wrap lg:flex-nowrap items-start lg:items-end justify-start gap-2">
                        {service.features.map((feature) => (
                          <span
                            key={feature}
                            className="bg-[#e5e5e5] px-2 py-[2px] text-sm md:text-[16px] font-bold text-[#1a1a1a] tracking-wide text-left lg:text-right w-fit"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Contact CTA Section */}
          <ContactSection />
        </main>
        <Footer />    </div>
    </PageTransition>
  );
};

export default Services;
