import { ArrowDown, ChevronDown } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "Residential",
    serviceType: "Roof Installation",
    zipCode: "",
    bestTime: "",
    message: "",
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <section className="bg-light py-16 md:py-24">
      <div className="container mx-auto px-5 md:px-12 lg:px-6 xl:px-12 max-w-[1190px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.95] mb-6 md:mb-8">
              YOU CLICK. WE<br />
              CLIMB. DEAL?
            </h2>
            <p className="font-body text-lg max-w-[600px] font-semibold md:text-2xl  text-foreground leading-[31px] mx-auto lg:mx-0">
              Tell us what you need — we'll handle the rest (no ladders required on your part).
            </p>
          </div>

          {/* Right Form */}
          <div className="bg-white p-6 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name - Full Width */}
              <div>
                <label className="block font-heading text-base font-bold uppercase mb-2 text-foreground">
                  NAME*
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Jane Smith"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-12 px-4 bg-[#f5f5f5] font-body text-base placeholder:text-gray-400 focus:outline-none  border-0"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block font-heading text-base font-bold uppercase mb-2 text-foreground">
                    EMAIL*
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="jane@framer.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-12 px-4 bg-[#f5f5f5] font-body text-base placeholder:text-gray-400 focus:outline-none  border-0"
                  />
                </div>
                <div>
                  <label className="block font-heading text-base font-bold uppercase mb-2 text-foreground">
                    PHONE*
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="(123) 456-7890"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full h-12 px-4 bg-[#f5f5f5] font-body text-base placeholder:text-gray-400 focus:outline-none  border-0"
                  />
                </div>
              </div>

              {/* Property Type & Service Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block font-heading text-base font-bold uppercase mb-2 text-foreground">
                    PROPERTY TYPE*
                  </label>
                  <div className="relative">
                    <select
                      name="propertyType"
                      required
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="w-full h-12 px-4 bg-[#f5f5f5] font-body text-base focus:outline-none appearance-none cursor-pointer border-0 pr-10"
                    >
                      <option>Residential</option>
                      <option>Commercial</option>
                      <option>Industrial</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-foreground" />
                  </div>
                </div>
                <div>
                  <label className="block font-heading text-base font-bold uppercase mb-2 text-foreground">
                    SERVICE TYPE*
                  </label>
                  <div className="relative">
                    <select
                      name="serviceType"
                      required
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full h-12 px-4 bg-[#f5f5f5] font-body text-base focus:outline-none appearance-none cursor-pointer border-0 pr-10"
                    >
                      <option>Roof Installation</option>
                      <option>Roof Repair</option>
                      <option>Roof Replacement</option>
                      <option>Roof Inspection</option>
                      <option>Roof Coating</option>
                      <option>Commercial Roofing</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-foreground" />
                  </div>
                </div>
              </div>

              {/* Zip Code & Best Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block font-heading text-base font-bold uppercase mb-2 text-foreground">
                    ZIP CODE*
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    placeholder="2624"
                    required
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="w-full h-12 px-4 bg-[#f5f5f5] font-body text-base placeholder:text-gray-400 focus:outline-none  border-0"
                  />
                </div>
                <div>
                  <label className="block font-heading text-base font-bold uppercase mb-2 text-foreground">
                    BEST TIME TO CALL
                  </label>
                  <input
                    type="time"
                    name="bestTime"
                    placeholder="--:-- --"
                    value={formData.bestTime}
                    onChange={handleChange}
                    className="w-full h-12 px-4 bg-[#f5f5f5] font-body text-base placeholder:text-gray-400 focus:outline-none  border-0"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block font-heading text-base font-bold uppercase mb-2 text-foreground">
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  placeholder="Write your detailed message here"
                  rows={2}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 bg-[#f5f5f5] font-body text-base placeholder:text-gray-400 focus:outline-none  resize-none border-0"
                />
              </div>

              {/* Consent */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="consent"
                  required
                  checked={formData.consent}
                  onChange={handleChange}
                  className="w-4 h-4 mt-1 accent-accent flex-shrink-0"
                />
                <p className="font-body text-sm text-foreground">
                  By submitting this form, you agree to our{" "}
                  <a href="/privacy" className="text-accent font-semibold hover:underline">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="/terms" className="text-accent font-semibold hover:underline">
                    Terms & Conditions
                  </a>
                  .
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full h-12 bg-accent text-black font-heading text-[16px] font-bold uppercase tracking-wider hover:bg-accent/90 transition-colors"
              >
                REQUEST FREE ESTIMATE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
