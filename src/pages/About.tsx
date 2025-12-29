import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Play, Plus, Linkedin, Facebook, Twitter, ArrowRight, Award, MessageSquare, Calendar, Clock, DollarSign, ChevronRight } from "lucide-react";
import aboutHero from "/image/hero-roof.jpg";
import aboutHero1 from "/image/about-video.png";
import missionImage from "/image/mission-image.png";
import team1 from "/image/bramwell-cutter.png";
import team2 from "/image/blog-3.jpg";
import team3 from "/image/blog-1.jpg";
import { ContactSection } from "@/components/sections/ContactSection";
import AwardsSection from "@/components/sections/AwardsSection";

const timeline = [
  {
    year: "2010",
    title: "The Humble Beginning",
    description: "What started in a small garage with just one truck, a ladder, and a dream became the foundation of Rooferio. Jake Rooferio believed that honest, quality roofing work done right the first time was the key to success.",
  },
  {
    year: "2012",
    title: "Building A Reputation",
    description: "Word spread quickly about our commitment to excellence. We expanded our team and started serving more neighborhoods across Dallas and Fort Worth.",
  },
  {
    year: "2021",
    title: "A Year Of Growth",
    description: "We hit a milestone of 1,500 roofs installed. Our crew grew to 30 experts, all trained to maintain the same standard of excellence we've always stood for.",
  },
  {
    year: "2023",
    title: "Awards & Recognition",
    description: "Rooferio was named 'Best Roofing Company' in Texas by Home Improvement Magazine. A testament to our team's dedication and customer commitment.",
  },
  {
    year: "2025",
    title: "Leading With Purpose",
    description: "We continue to lead with innovation, sustainability, and a customer-first philosophy. Our goal is to protect 50,000 homes in the next decade.",
  },
];

const values = [
  {
    title: "Creativity Leads The Way",
    icon: "CREATIVITY",
    content: "Roofing doesn't have to be cookie-cutter. We approach every project with fresh eyes, finding creative solutions that work specifically for your home or business. From custom designs to problem-solving unique challenges, we bring innovation to every roof.",
  },
  {
    title: "Craftsmanship Has No Shortcuts",
    icon: "CRAFTSMANSHIP",
    content: "Every nail, every shingle, every seal matters. We take pride in doing things right the first time, even when it takes longer. Because we know a shortcut today means a problem tomorrow.",
  },
  {
    title: "Safety Above All",
    icon: "SAFETY",
    content: "We never compromise on safety—not for our team, not for your home. Our crews are fully trained, insured, and equipped with the best safety gear in the industry.",
  },
  {
    title: "Transparency Matters",
    icon: "CUSTOMER",
    content: "No surprises, no hidden fees, no fine print. We believe in honest communication from the first call to the final invoice. You'll always know exactly what you're getting.",
  },
  {
    title: "Community Roots",
    icon: "COMMUNITY",
    content: "We live here, we work here, we raise our families here. We're your neighbors, and we treat your home like we'd treat our own.",
  },
  {
    title: "Accountability Always",
    icon: "ACCOUNTABILITY",
    content: "If something goes wrong, we make it right. Period. We stand behind our work with industry-leading warranties and a genuine commitment to your satisfaction.",
  },
];

const team = [
  {
    name: "Bramwell \"Bram\" Cutter",
    role: "Founder & Chief Roof Whisperer",
    image: team1,
    about: "Bram is the heart and hammer behind the company. With over two decades of hands-on experience, he's seen it all—from leaky old barns to sleek modern roofs with solar panels. He's got this uncanny sixth sense when it comes to roofing—if something's off, he'll feel it before he sees it. Bram started this company from scratch, working weekends out of his pickup truck, driven by a passion for honest work and solid craftsmanship. These days, he's still up on the roof more often than at a desk.",
    qualifications: "20+ years in residential and commercial roofing. Certified in GAF and CertainTeed shingle systems. Specializes in storm damage repairs, old roof restorations, and quality control. Occasionally doubles as the team therapist over lunch.",
    social: {
      linkedin: "#",
      facebook: "#",
      twitter: "#"
    }
  },
  {
    name: "Thayer Juno",
    role: "Project Manager & On-Site Coordinator",
    image: team2,
    about: "Thayer is the glue that holds every project together. She's organized, detail-oriented, and has a knack for keeping everyone on schedule without making it feel like boot camp. Whether it's coordinating material deliveries or calming down a nervous homeowner, Thayer handles it all with grace and efficiency.",
    qualifications: "15+ years in construction project management. Expert in scheduling, budgeting, and client communication. Certified Project Management Professional (PMP). Known for her color-coded spreadsheets and ability to solve problems before they happen.",
    social: {
      linkedin: "#",
      facebook: "#",
      twitter: "#"
    }
  },
  {
    name: "Osric Vane",
    role: "Lead Installer & Meticulous Guru",
    image: team3,
    about: "Osric is the perfectionist of the crew. If a shingle is even slightly off, he'll notice—and fix it. He's been installing roofs for over a decade and takes serious pride in his work. Clients love him because he treats every roof like it's his own home.",
    qualifications: "12+ years of hands-on roofing installation. Specialist in metal roofing, tile, and architectural shingles. OSHA-certified for safety. Has a reputation for leaving job sites cleaner than he found them.",
    social: {
      linkedin: "#",
      facebook: "#",
      twitter: "#"
    }
  },
  {
    name: "Elric Boone",
    role: "Customer Success & Inspection Lead",
    image: team1,
    about: "Elric is the friendly face customers see first and last. He conducts thorough roof inspections, explains everything in plain English, and makes sure every client feels heard and valued. His follow-up game is unmatched—he'll check in weeks after a job just to make sure everything's holding up.",
    qualifications: "10+ years in roofing inspections and customer relations. Certified roof inspector. Expert in insurance claims and documentation. Known for his patience, clear communication, and genuine care for client satisfaction.",
    social: {
      linkedin: "#",
      facebook: "#",
      twitter: "#"
    }
  },
];

const awards = [
  {
    year: "2018",
    title: "Golden Shingle Award",
    description: "Presented for outstanding craftsmanship and creativity in residential roofing.",
  },
  {
    year: "2022",
    title: "Top Roofers of the Region",
    description: "Recognized as one of the most trusted and top-rated roofing teams in the tri-county area.",
  },
  {
    year: "2025",
    title: "Eco-Friendly Roofer Award",
    description: "Presented to roofing pros using sustainable materials and green work practices.",
  },
];

const jobs = [
  {
    title: "Lead Craftsperson",
    location: "Austin, TX",
    type: "Full-Time",
    salary: "$55k–$75k/year",
  },
  {
    title: "Roofing Technician",
    location: "Dallas, TX",
    type: "Full-Time",
    salary: "$45k–$60k/year",
  },
  {
    title: "Roof Inspector",
    location: "Houston, TX",
    type: "Full-Time / Part-Time",
    salary: "$40k–$55k/year",
  },
];

const About = () => {
  const [activeTab, setActiveTab] = useState<"story" | "mission" | "vision" | "values">("story");
  const [activeValue, setActiveValue] = useState<number>(0);
  const [expandedTeam, setExpandedTeam] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["story", "mission", "vision", "values"];
      let current = "story";

      for (const section of sections) {
        const element = document.getElementById(`${section}-section`);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 300) {
            current = section;
          }
        }
      }
      setActiveTab(current as "story" | "mission" | "vision" | "values");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative h-screen min-h-[700px] overflow-hidden">

          {/* Background Video */}
          <div className="absolute inset-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source
                src="/image/about-video.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-black/60" />
          </div>

          {/* Left Content */}
          <div className="relative z-10 container mx-auto px-5 md:px-12 xl:px-0 h-full mt-10 items-center">
            <div className="max-w-5xl">

              {/* ABOUT label */}
              <div className="flex items-center gap-3 mb-8">
                <span className="w-3 h-3 bg-orange-500" />
                <span className="font-heading text-lg font-bold uppercase tracking-widest text-white">
                  About
                </span>
                <span className="w-3 h-3 bg-orange-500" />
              </div>

              {/* Heading */}
              <h1 className="font-heading text-white uppercase font-black leading-[0.9] 
                         text-5xl md:text-6xl lg:text-[60px]">
                Our Story Is As Sturdy As <br />
                Our Roofs—Come Meet Us!
              </h1>

            </div>
          </div>

          {/* Bottom Right Overlay Card (EXACT POSITION) */}
          <div className="hidden lg:block absolute right-0 bottom-0 w-[45%] h-[55%] 
                      overflow-hidden shadow-2xl z-20 mb-12 mr-10">

            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full lg:w-[910px] lg:h-[510px]  object-cover"
            >
              <source
                src="/image/about-video.mp4"
                type="video/mp4"
              />
            </video>





          </div>
        </section>

        {/* Unified Story/Mission/Vision/Values Section with Sticky Sidebar */}
        <section className="bg-background py-16 md:py-24">
          <div className="container mx-auto px-5 md:px-12 xl:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

              {/* Sticky Left Sidebar - Tab Navigation */}
              <div className="lg:col-span-3">
                <div className="lg:sticky lg:top-32 grid grid-cols-2 gap-1">
                  <button
                    onClick={() => {
                      setActiveTab("story");
                      document.getElementById("story-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className={`flex items-center justify-center gap-2 px-4 py-6 font-heading text-xs font-bold uppercase transition-all ${activeTab === "story"
                      ? "bg-[#ff9436] text-white"
                      : "bg-gray-200 text-black hover:bg-gray-300"
                      }`}
                  >
                    <img src="/image/icon/story.svg" className="w-5 h-5" />
                    <span className="text-sm">Story</span>
                  </button>

                  <button
                    onClick={() => {
                      setActiveTab("mission");
                      document.getElementById("mission-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className={`flex items-center justify-center gap-2 px-4 py-6 font-heading text-xs font-bold uppercase transition-all ${activeTab === "mission"
                      ? "bg-[#ff9436] text-white"
                      : "bg-gray-200 text-black hover:bg-gray-300"
                      }`}
                  >
                    <img src="/image/icon/mission.svg" className="w-5 h-5" />
                    <span className="text-sm">Mission</span>
                  </button>

                  <button
                    onClick={() => {
                      setActiveTab("vision");
                      document.getElementById("vision-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className={`flex items-center justify-center gap-2 px-4 py-6 font-heading text-xs font-bold uppercase transition-all ${activeTab === "vision"
                      ? "bg-[#ff9436] text-white"
                      : "bg-gray-200 text-black hover:bg-gray-300"
                      }`}
                  >
                    <img src="/image/icon/vision.svg" className="w-5 h-5" />
                    <span className="text-sm">Vision</span>
                  </button>

                  <button
                    onClick={() => {
                      setActiveTab("values");
                      document.getElementById("values-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className={`flex items-center justify-center gap-2 px-4 py-6 font-heading text-xs font-bold uppercase transition-all ${activeTab === "values"
                      ? "bg-[#ff9436] text-white"
                      : "bg-gray-200 text-black hover:bg-gray-300"
                      }`}
                  >
                    <img src="/image/icon/values.svg" className="w-5 h-5" />
                    <span className="text-sm">Values</span>
                  </button>
                </div>
              </div>

              {/* Right Content Area - Scrollable with Stack Effect */}
              <div className="lg:col-span-9 space-y-12">

                {/* STORY SECTION */}
                <div id="story-section" className="scroll-mt-2">
                  <div className="bg-white p-8 md:px-12  md:pt-0">
                    {/* Intro Paragraph */}
                    <p className="font-body text-lg font-inter font-semibold md:text-2xl leading-relaxed mb-12">
                      Founded in 2010 with one truck and a dream, Rooferio started as a one-man show with a mission to do roofing differently. What began as small repairs for neighbors has grown into a trusted team serving thousands — but we've never outgrown our roots. We still show up with the same honesty, quality work, and neighborly service. Today, we're a trusted local team — still grounded in the same values that got us here.
                    </p>

                    {/* Timeline */}
                    <div className="space-y-12">
                      {timeline.map((item) => (
                        <div key={item.year} className="flex gap-6">
                          <div className="shrink-0 pt-1">
                            <span className="font-heading text-4xl md:text-7xl font-bold text-black flex items-center gap-3">
                              <span className="w-3 h-3 bg-orange-500 inline-block mt-2" />
                              {item.year}
                            </span>
                          </div>
                          <div className="flex-1 pt-2">
                            <h3 className="font-heading text-xl md:text-3xl font-bold uppercase mb-3 text-black">
                              {item.title}
                            </h3>
                            <p className="font-body font-semibold font-inter text-lg opacity-80 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Video Thumbnail */}
                    <div className="mt-12 relative aspect-video bg-dark overflow-hidden rounded-lg">
                      {!isPlaying ? (
                        <>
                          <img
                            src={aboutHero1}
                            alt="Video thumbnail"
                            className="w-full h-full object-cover opacity-80"
                          />
                          <button
                            onClick={() => setIsPlaying(true)}
                            className="absolute inset-0 flex items-center justify-center group"
                          >
                            <div className=" flex items-center justify-center ">
                              <img src="/image/youtube.svg" alt="Play" className="w-16 h-16 ml-1 " />
                            </div>
                          </button>
                        </>
                      ) : (
                        <iframe
                          width="100%"
                          height="100%"
                          src="https://www.youtube.com/embed/crUmMb0OlMM?v=crUmMb0OlMM&iv_load_policy=3&rel=0&modestbranding=1&playsinline=1&autoplay=1&color=white"
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          className="w-full h-full"
                        ></iframe>
                      )}
                    </div>
                  </div>
                </div>

                {/* MISSION SECTION */}
                <div
                  id="mission-section"
                  className="scroll-mt-32 px-10"
                >
                  <div className="relative min-h-[640px] overflow-hidden bg-[#2f3f45] text-white">

                    {/* Background Image */}
                    <img
                      src={missionImage}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover opacity-25"
                    />

                    {/* Content */}
                    <div className="relative z-10 flex h-full flex-col justify-between p-10 md:p-14">

                      {/* Top Content */}
                      <div>
                        {/* Mission Label */}
                        <div className="mb-6 flex items-center gap-3">
                          <span className="h-[12px] w-[12px] bg-orange-500" />
                          <span className="text-[16px] font-bold uppercase tracking-[0.25em]">
                            Our Mission
                          </span>
                          <span className="h-[12px] w-[12px] bg-orange-500" />
                        </div>

                        {/* Heading */}
                        <h2 className="max-w-3xl font-heading text-[56px] leading-[0.95] md:text-[70px] font-extrabold uppercase">
                          To Protect What
                          <br />
                          Matters Most
                        </h2>
                      </div>

                      {/* Bottom Panel */}
                      <div className="mt-16 max-w-3xl bg-gradient-to-t from-black/80 to-black/40 p-8">

                        <p className="text-2xl weight-[600] leading-[31px] font-inter font-semibold text-white/95">
                          We believe roofing doesn't have to be complicated or intimidating.
                          That's why we show up on time, speak like real humans, and do the job
                          right the first time. Whether it's a tiny leak or a full replacement,
                          we're here to help you feel confident under your own roof — with
                          craftsmanship you can trust and service you'll actually enjoy.
                        </p>

                        {/* Signature */}
                        <div className="mt-6 flex items-center gap-4">
                          <img
                            src={team1}
                            alt="CEO"
                            className="h-14 w-14 rounded-full object-cover"
                          />

                          <div>
                            <p className="font-home font-[400] text-[22px] leading-[26px]">
                              Oliver Vance
                            </p>
                            <p className="text-[16px] leading-[22px] font-heading font-bold uppercase tracking-wider text-white/60">
                              CEO, Rooferio
                            </p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>


                {/* VISION SECTION */}
                <div id="vision-section" className="scroll-mt-32">
                  <div className="bg-white p-8 md:p-12">
                    <div className="mb-6 flex items-center gap-2">
                      <span className="w-3 h-3 bg-orange-500" />
                      <span className="font-heading text-lg font-bold uppercase tracking-widest text-black">
                        Our Vision
                      </span>
                      <span className="w-3 h-3 bg-orange-500" />
                    </div>

                    <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold uppercase mb-12 leading-[0.9] text-black">
                      To Become The Most<br />Trusted Name In Roofing
                    </h2>

                    <div className="bg-light p-8 md:p-12 space-y-8 shadow-sm">
                      <p className="font-body font-inter font-semibold text-2xl leading-relaxed text-gray-800">
                        We envision a future where every homeowner feels confident and cared for when choosing a roofing partner. Our goal is to redefine what it means to work with contractors by delivering not only durable, high-quality work, but also warm, reliable, and transparent service from start to finish.
                      </p>
                      <p className="font-body font-inter font-semibold text-2xl leading-relaxed text-gray-800">
                        As we grow, we aim to lead the industry in innovation, safety, and sustainability—setting a new standard for professionalism in roofing. Whether we're working on a single-family home or a commercial project, we see every roof as an opportunity to build trust, protect families, and contribute to stronger communities.
                      </p>
                    </div>
                  </div>
                </div>

                {/* VALUES SECTION */}
                <div id="values-section" className="scroll-mt-32">
                  <div className="bg-white p-8 md:p-12">
                    <div className="mb-6 flex items-center gap-2">
                      <span className="w-3 h-3 bg-orange-500" />
                      <span className="font-heading text-lg font-bold uppercase tracking-widest text-black">
                        Our Values
                      </span>
                      <span className="w-3 h-3 bg-orange-500" />
                    </div>

                    <h2 className="font-heading text-5xl md:text-6xl font-bold uppercase mb-12 leading-[0.9] text-black">
                      The Heart Behind<br />The Hard Hats
                    </h2>

                    {/* Accordion */}
                    <div className="space-y-2">
                      {values.map((value, index) => (
                        <div key={value.title} className="border-b border-gray-200">
                          <button
                            onClick={() => setActiveValue(activeValue === index ? -1 : index)}
                            className={`w-full flex items-center justify-between py-2 text-left transition-all ${activeValue === index
                              ? "bg-black text-white px-2"
                              : "bg-transparent hover:bg-gray-50 px-2"
                              }`}
                          >
                            <span className="font-heading text-lg md:text-xl font-bold uppercase flex items-center gap-4">
                              <img
                                src={`/image/icon/${value.icon}-${activeValue === index ? 'orange' : 'black'}.svg`}
                                alt=""
                                className="w-6 h-6 object-contain"
                              />
                              {value.title}
                            </span>
                            <img
                              src={`/image/icon/arrow-${activeValue === index ? 'white' : 'black'}.svg`}
                              alt=""
                              className={`w-8 h-8 transition-transform ${activeValue === index ? "rotate-180" : ""}`}
                            />
                          </button>

                          <div className={`overflow-hidden transition-all duration-300 ${activeValue === index ? "max-h-96 bg-gray-50" : "max-h-0"
                            }`}>
                            <div className="p-6 md:p-8">
                              <p className="font-body text-lg font-semibold font-inter leading-relaxed text-gray-700">
                                {value.content}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-5 md:px-12 xl:px-0">
            {/* Section Label */}
            <div className="mb-4 flex items-center gap-2">
              <span className="w-3 h-3 bg-orange-500" />

              <span className="font-heading text-lg font-bold uppercase tracking-widest text-black">
                NUMBERS
              </span>
              <span className="w-3 h-3 bg-orange-500" />
            </div>

            {/* Main Heading */}
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-12 leading-tight text-black">
              Hard Hats On, Results Up
            </h2>

            {/* Top Two Large Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Roofs Installed */}
              <div className="bg-white p-8 md:p-12">
                <p className="font-heading text-sm md:text-base font-bold uppercase mb-4 tracking-wide text-black">
                  Roofs Happily Installed
                </p>
                <p className="font-heading text-6xl md:text-7xl lg:text-8xl font-bold mb-4 text-black">
                  2450<span className="text-orange-500">+</span>
                </p>
                <p className="font-body text-sm md:text-base text-gray-600">
                  That's a lot of homes kept dry, cozy, and storm-proof!
                </p>
              </div>

              {/* Happy Customer Rating */}
              <div className="bg-white p-8 md:p-12">
                <p className="font-heading text-sm md:text-base font-bold uppercase mb-4 tracking-wide text-black">
                  Happy Customer Rating
                </p>
                <p className="font-heading text-6xl md:text-7xl lg:text-8xl font-bold mb-4 text-black">
                  98.7<span className="text-orange-500">%</span>
                </p>
                <p className="font-body text-sm md:text-base text-gray-600">
                  That's a lot of homes kept dry, cozy, and storm-proof!
                </p>
              </div>
            </div>

            {/* Bottom Three Smaller Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* 99% On-Time */}
              <div className="bg-white p-8 md:p-10">
                <p className="font-heading text-base md:text-lg font-bold uppercase mb-3 tracking-wide text-black">
                  99% On-Time<br />Project Completion
                </p>
                <p className="font-body text-sm text-gray-600">
                  Unless we're distracted<br />by a squirrel. (Kidding)
                </p>
              </div>

              {/* 645 Storm Damaged */}
              <div className="bg-white p-8 md:p-10">
                <p className="font-heading text-base md:text-lg font-bold uppercase mb-3 tracking-wide text-black">
                  645 Storm-Damaged<br />Roofs Rescued
                </p>
                <p className="font-body text-sm text-gray-600">
                  We don't wear capes,<br />but we do carry tarps.
                </p>
              </div>

              {/* 93% of Customers */}
              <div className="bg-white p-8 md:p-10">
                <p className="font-heading text-base md:text-lg font-bold uppercase mb-3 tracking-wide text-black">
                  93% Of Customers<br />Refer Us To A Friend
                </p>
                <p className="font-body text-sm text-gray-600">
                  The other 7% just don't<br />have enough friends yet.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-black text-white py-16 md:py-24">
          <div className="container mx-auto px-5 md:px-12">
            {/* Section Label */}
            <div className="mb-4">
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-accent">
                ■ OUR TEAM
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-12 leading-tight">
              The Hands (And Hearts)<br />Behind Your Roof
            </h2>

            {/* Team Members */}
            <div className="space-y-0">
              {team.map((member, index) => {
                const isOpen = expandedTeam === index;
                return (
                  <div key={member.name} className="border-b border-white/10">
                    {!isOpen ? (
                      <button
                        onClick={() => setExpandedTeam(index)}
                        className="w-full flex items-center gap-6 py-6 text-left hover:bg-white/5 transition-colors group"
                      >
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-20 h-20 object-cover grayscale group-hover:grayscale-0 transition-all"
                        />
                        <div className="flex-1">
                          <p className="font-heading text-xl font-bold uppercase text-white mb-1">
                            {member.name}
                          </p>
                          <p className="font-body text-sm text-white/60">{member.role}</p>
                        </div>
                        <div className="w-8 h-8 bg-white flex items-center justify-center shrink-0">
                          <img
                            src="/image/arrow-left.svg"
                            className={`w-5 h-5 text-black transition-transform duration-300 ${expandedTeam === index ? "rotate-90" : "-rotate-90"}`}
                            alt=""
                          />
                        </div>
                      </button>
                    ) : (
                      <div className="py-10 animate-in fade-in slide-in-from-top-4 duration-300">
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                          {/* Left: Image & Socials */}
                          <div className="shrink-0">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full lg:w-64 h-64 object-cover mb-4 grayscale-0"
                            />
                            <div className="flex gap-2">
                              <a href={member.social.linkedin} className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-orange-500 transition-colors">
                                <img src="/image/linkedin.svg" className="w-4 h-4 brightness-0 invert" alt="LinkedIn" />
                              </a>
                              <a href={member.social.facebook} className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-orange-500 transition-colors">
                                <img src="/image/facebook.svg" className="w-4 h-4 brightness-0 invert" alt="Facebook" />
                              </a>
                              <a href={member.social.twitter} className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-orange-500 transition-colors">
                                <img src="/image/x.svg" className="w-4 h-4 brightness-0 invert" alt="X" />
                              </a>
                            </div>
                          </div>

                          {/* Right: Content */}
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-8">
                              <div>
                                <h3 className="font-heading text-3xl md:text-4xl font-bold uppercase text-orange-500 mb-2">
                                  {member.name}
                                </h3>
                                <p className="font-body text-base text-white/60">
                                  {member.role}
                                </p>
                              </div>
                              <button
                                onClick={() => setExpandedTeam(null)}
                                className="w-8 h-8 bg-white flex items-center justify-center shrink-0 hover:bg-gray-200 transition-colors"
                              >
                                <img src="/image/arrow-left.svg" className={`w-5 h-5 text-black transition-transform duration-300 ${expandedTeam === index ? "rotate-90" : "rotate-90"}`} alt="" />
                              </button>
                            </div>

                            <div className="space-y-8 max-w-3xl">
                              <div>
                                <h4 className="font-heading text-xs font-bold uppercase text-white/40 mb-3 tracking-widest">
                                  About
                                </h4>
                                <p className="font-body text-lg leading-relaxed text-white/80">
                                  {member.about}
                                </p>
                              </div>
                              <div>
                                <h4 className="font-heading text-xs font-bold uppercase text-white/40 mb-3 tracking-widest">
                                  Qualification & Expertise
                                </h4>
                                <p className="font-body text-lg leading-relaxed text-white/80">
                                  {member.qualifications}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>



        {/* Career Section with Stack Animation */}
        <section className="relative bg-[#f5f5f5] py-0 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

            {/* Left Side Image */}
            <div className="hidden lg:block lg:col-span-3 h-full min-h-screen sticky top-0">
              <img
                src={team1}
                alt="Roofer at work"
                className="absolute inset-0 w-full h-full object-cover grayscale"
              />
            </div>

            {/* Center Content */}
            <div className="lg:col-span-6 px-5 md:px-12 lg:px-16 py-16 md:py-24 bg-white">

              {/* Header */}
              <div className="text-center mb-16">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="w-3 h-3 bg-orange-500" />
                  <span className="font-heading text-lg font-bold uppercase tracking-widest text-black">
                    CAREER
                  </span>
                  <span className="w-3 h-3 bg-orange-500" />
                </div>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-[0.9] text-black">
                  Join The Crew,<br />Climb Higher
                </h2>
              </div>

              {/* Job List */}
              <div className="space-y-8 mb-16">
                {jobs.map((job) => (
                  <div key={job.title} className="border border-gray-200 p-8 hover:border-gray-300 transition-colors">
                    <h3 className="font-heading text-2xl font-bold uppercase mb-6 text-black">
                      {job.title}
                    </h3>

                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3 text-sm font-bold uppercase text-black">
                        <Calendar className="w-4 h-4" />
                        <span>Jul 15, 2025</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm font-bold uppercase text-black">
                        <Clock className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm font-bold uppercase text-black">
                        <DollarSign className="w-4 h-4" />
                        <span>{job.salary}</span>
                      </div>
                    </div>

                    <button className="bg-black text-white px-8 py-3 font-heading text-xs font-bold uppercase flex items-center gap-2 hover:bg-gray-800 transition-colors">
                      View Job
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="bg-black text-white p-12 text-center">
                <p className="font-body text-lg leading-relaxed font-medium">
                  If you don't see an open position that fits, we'd still love to hear from you! <a href="#" className="text-orange-500 underline decoration-2 underline-offset-4 hover:text-orange-400">Drop us a note</a> about how we could collaborate—we're always excited to connect with talented people and grow together.
                </p>
              </div>

            </div>

            {/* Right Side Image */}
            <div className="hidden lg:block lg:col-span-3 h-full min-h-screen sticky top-0">
              <img
                src={team2}
                alt="Roofer at work"
                className="absolute inset-0 w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <AwardsSection />

        {/* Silhouette */}
        {/* <RooferSilhouette /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
