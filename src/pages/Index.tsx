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
import { PageTransition } from "@/components/PageTransition";

import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen ">
        <Helmet>
          <title>Roofaria | Premier Roofing Services & Installation in Texas</title>
          <meta name="description" content="Roofaria provides top-tier roofing installation, repair, and replacement services in Texas. Trusted by thousands of homeowners for quality craftsmanship and reliability." />
        </Helmet>
        <Navbar />
        <main className="overflow-hidden">
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
    </PageTransition>
  );
};

export default Index;
