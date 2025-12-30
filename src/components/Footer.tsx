import { Link } from "react-router-dom";
import { Linkedin, Facebook, Twitter, Youtube, Instagram, PiIcon as Pinterest } from "lucide-react";

const pageLinks = ["Home", "About us", "Services", "Projects", "Albums", "Blogs", "Career", "Reviews", "Contact"];

const serviceLinks = [
  "Roof Installation",
  "Roof Repair",
  "Roof Replacement",
  "Roof Inspections",
  "Roof Coating",
  "Commercial Roofing",
];

const roofingTypes = [
  "Asphalt shingle",
  "Clay Tile",
  "Concrete Tile",
  "Synthetic roofing",
  "Metal Roofing",
  "Architectural",
  "Wood Shake",
  "Solar roofing",
  "Slate Roofing",
  "Flat roofing",
];

const socialLinks = [
  { name: "LINKEDIN", icon: "/image/linkedin.svg" },
  { name: "FACEBOOK", icon: "/image/facebook.svg" },
  { name: "TWITTER/X", icon: "/image/x.svg" },
  { name: "YOUTUBE", icon: "/image/youtube.svg" },
  { name: "INSTAGRAM", icon: "/image/instagram.svg" },
  { name: "PINTEREST", icon: "/image/pinterest.svg" },
];

export function Footer() {
  const borderColor = "border-[#808080]";

  return (

    <footer className="bg-black font-heading overflow-hidden">
      {/* Top Image Section */}
      <div className="bg-white w-full">
        <img src="/image/footer-image.png" alt="Footer Top" className="w-full h-auto block invert bg-light" />
      </div>

      <div className="bg-black text-white px-6 ld:px-0 pt-12 container mx-auto max-w-[1480px]">
        {/* --- TOP SECTION (Links & Newsletter) --- */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 border-t border-b ${borderColor}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Pages */}
          <div className={`p-8 lg:p-10 border-l ${borderColor}`}>
            <h3 className="text-orange-500 text-lg font-bold uppercase mb-3 tracking-wider">Pages</h3>
            <ul className="space-y-0">
              {pageLinks.map((link) => (
                <li key={link}>
                  <Link to="#" className="text-[18px] font-semibold font-inter text-gray-300 hover:text-white transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={`p-8 lg:p-10`}>
            <h3 className="text-orange-500 text-lg font-bold uppercase mb-3 tracking-wider">Services</h3>
            <ul className="space-y-0">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <Link to="#" className="text-[18px] font-semibold text-gray-300 hover:text-white transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Roofing Types */}
          <div className={`p-8 lg:p-10 border-r ${borderColor}`}>
            <h3 className="text-orange-500 text-lg font-bold uppercase mb-3 tracking-wider">Roofing Types</h3>
            <ul className="space-y-0">
              {roofingTypes.map((type) => (
                <li key={type} className="text-[18px] font-semibold text-gray-300">
                  {type}
                </li>
              ))}
            </ul>
          </div>
          </div>

          {/* Newsletter & Socials */}
          <div className="p-8 lg:p-10 border-r ${borderColor}">
            <h3 className="text-white text-lg font-bold uppercase mb-6 tracking-wider">Subscribe to the newsletter</h3>
            <div className="flex mb-[120px]">
              <input
                type="email"
                placeholder="jane@framer.com"
                className="flex-1 bg-[#121212] px-4 py-3 text-[16px] border-none focus:ring-0 placeholder-gray-600 outline-none"
              />
              <button className="bg-orange-500 text-black px-6 py-3 text-[16px] font-bold uppercase tracking-widest hover:bg-orange-600 transition-colors">
                Subscribe
              </button>
            </div>

            <div className="grid grid-cols-3 border-t border-l border-[#1A1A1A]">
              {socialLinks.map((social) => (
                <button
                  key={social.name}
                  className={`flex items-center gap-2 bg-[#0A0A0A] hover:bg-[#ff9436] p-3 text-[16px] font-bold uppercase border-r border-b border-[#1A1A1A] hover:text-black transition-all group`}
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-5 h-5 opacity-70 group-hover:opacity-100 invert group-hover:invert-0 transition-all"
                  />
                  <span className="hidden xl:inline ">{social.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* --- CONTACT INFO ROW --- */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b ${borderColor}`}>
          <div className={`p-8 lg:p-10 border-l border-r ${borderColor}`}>
            <h4 className="text-orange-500 text-lg font-bold uppercase mb-4 tracking-wider">Phone</h4>
            <p className="text-[18px] font-semibold text-gray-300">(217) 555-0134</p>
            <p className="text-[18px] font-semibold text-gray-300">(217) 444-0134</p>
          </div>
          <div className={`p-8 lg:p-10 border-r ${borderColor}`}>
            <h4 className="text-orange-500 text-lg font-bold uppercase mb-4 tracking-wider">Email</h4>
            <p className="text-[18px] font-semibold text-gray-300">rooferio@email.com</p>
          </div>
          <div className={`p-8 lg:p-10 border-r ${borderColor}`}>
            <h4 className="text-orange-500 text-lg font-bold uppercase mb-4 tracking-wider">Address</h4>
            <p className="text-[18px] font-semibold text-gray-300 leading-relaxed">
              123 Main Street, Suite 200, Austin, TX 78701
            </p>
          </div>
          <div className={`p-8 lg:p-10 border-r ${borderColor}`}>
            <h4 className="text-orange-500 text-lg font-bold uppercase mb-4 tracking-wider ">Opening Hours</h4>
            <p className="text-[18px] font-semibold text-gray-300">Mon to Sat: 9.00am - 8.30pm</p>
            <p className="text-[18px] font-semibold text-gray-300">Sun: Closed</p>
          </div>
        </div>

        {/* --- BIG LOGO SECTION --- */}
        <div className="relative px-4 pt-10 pb-10 overflow-hidden">
          <div className="flex flex-col lg:flex-row justify-between items-start">
            <h2 className="font-heading text-[20vw] lg:text-[311px] font-[400] uppercase leading-[211px] tracking-tighter text-white -ml-2">
              Rooferio
            </h2>
            <div className="text-[16px] text-gray-300 text-left max-w-[280px] mt-4 lg:mt-12 lg:mr-4 font-medium">
              <p>Roofs built to last.</p>
              <p>Service built on trust.</p>
              <p>Proudly serving Texas with real</p>
              <p>people, real tools, and real results.</p>
            </div>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="flex flex-col sm:flex-row justify-between items-center px-8 py-6 text-[10px] font-bold uppercase tracking-widest text-gray-400 border-t border-[#262626]">
          <div className="flex gap-6 mb-4 sm:mb-0">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms</Link>
          </div>
          <div className="flex gap-6">
            <span>@Template by RealMehedi</span>
            <span>Built in Framer</span>
          </div>
        </div>
      </div>
    </footer>
  );

}