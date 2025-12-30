import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/sections/ContactSection";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const socialMedia = [
    { name: "X", src: "/image/x.svg" },
    { name: "LINKEDIN", src: "/image/linkedin.svg" },
    { name: "FACEBOOK", src: "/image/facebook.svg" },
    { name: "INSTAGRAM", src: "/image/instagram.svg" },
    { name: "YOUTUBE", src: "/image/youtube.svg" },
    { name: "PINTEREST", src: "/image/pinterest.svg" },
  ];



  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Rooferio - Roofer and Roofing Service Framer Template</title>
      </Helmet>
      <Navbar />
      <main>
        {/* Contact Section */}
        <section className="bg-light-alt py-16 md:py-24">
          <div className="container mx-auto px-5 md:px-12 xl:px-12 max-w-[1590px]">
            {/* Header */}
            <div className="mb-12 md:mb-16">
              <div className="section-label-left mb-6 justify-start">
                <span className="text-foreground">Contact</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold uppercase leading-tight max-w-3xl">
                Your roof's new best friend is one message away
              </h1>
            </div>

            {/* Two Column Layout */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-2">
              {/* Left Column - Contact Information (35% on laptop) */}
              <div className="w-full lg:w-[35%] space-y-2">
                {/* Hotline Block */}
                <div className="bg-[#f5f5f5] p-6">
                  <h3 className="font-heading text-sm font-bold uppercase mb-4 text-foreground">
                    Hotline:
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-accent flex items-center justify-center flex-shrink-0">
                        <img src="/image/phone.svg" alt="Phone" className="w-4 h-4" />
                      </div>
                      <span className="font-heading text-sm font-bold text-foreground">(636) 123-45678</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-accent flex items-center justify-center flex-shrink-0">
                        <img src="/image/phone.svg" alt="Phone" className="w-4 h-4" />
                      </div>
                      <span className="font-heading text-sm font-bold text-foreground">(636) 124-27834</span>
                    </div>
                  </div>
                </div>

                {/* Email Block */}
                <div className="bg-[#f5f5f5] p-6">
                  <h3 className="font-heading text-sm font-bold uppercase mb-4 text-foreground">
                    Email:
                  </h3>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-accent flex items-center justify-center flex-shrink-0">
                      <img src="/image/mail.svg" alt="Email" className="w-4 h-4" />
                    </div>
                    <span className="font-heading text-sm font-bold text-foreground uppercase">
                      ROOFERIO@GMAIL.COM
                    </span>
                  </div>
                </div>

                {/* Address Block */}
                <div className="bg-[#f5f5f5] p-6">
                  <h3 className="font-heading text-sm font-bold uppercase mb-4 text-foreground">
                    Address:
                  </h3>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-accent flex items-center justify-center flex-shrink-0">
                      <img src="/image/location.svg" alt="Location" className="w-4 h-4" />
                    </div>
                    <span className="font-heading text-sm font-bold text-foreground leading-relaxed uppercase">
                      256 EASTERN STREET, BESIDE THE BRIDGE, STATEBURG, TEXAS, 4784
                    </span>
                  </div>
                </div>

                {/* Social Media Block */}
                <div className="bg-[#f5f5f5] p-6">
                  <h3 className="font-heading text-sm font-bold uppercase mb-4 text-foreground">
                    Social Media:
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {socialMedia.map((platform) => (
                      <a
                        key={platform.name}
                        href={platform.src}
                        className="flex items-center gap-2 group hover:opacity-70 transition-opacity"
                      >
                        <div className="w-8 h-8 bg-accent flex items-center justify-center flex-shrink-0">
                          <img src={platform.src} alt="Arrow" className="w-4 h-4" />
                        </div>
                        <span className="font-heading text-xs font-bold text-foreground uppercase">
                          {platform.name}
                        </span>
                        <img src="/image/arrow-right.svg" alt="Arrow" className="w-3 h-3 ml-auto" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Google Map (65% on laptop) */}
              <div className="w-full lg:w-[65%] bg-white h-[600px] lg:h-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648750455!2d-73.98823492346658!3d40.74844097138558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1703001234567!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Rooferio Location Map"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
