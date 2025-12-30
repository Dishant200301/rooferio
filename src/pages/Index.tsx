import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { HowWeWorkSection } from "@/components/sections/HowWeWorkSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { RoofingTypesSection } from "@/components/sections/RoofingTypesSection";
import { BlogsSection } from "@/components/sections/BlogsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";

import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Rooferio - Roofer and Roofing Service Framer Template</title>
      </Helmet>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <WhyChooseUsSection />
        <StatsSection />
        <AboutSection />
        <HowWeWorkSection />
        <TestimonialsSection />
        <RoofingTypesSection />
        <BlogsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
