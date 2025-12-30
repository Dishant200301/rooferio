import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/sections/ContactSection";
import { useState, cloneElement, isValidElement } from "react";
import { Link } from "react-router-dom";
import { blogs } from "@/data/blogs";
import { Star } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { PageTransition } from "@/components/PageTransition";
const categories = [
  { id: "all", label: "All", iconSrc: "/image/filter-all.svg" },
  { id: "featured", label: "Featured", iconSrc: <Star /> },
  { id: "tips", label: "Tips", iconSrc: "/image/filter-tips.svg" },
  { id: "guides", label: "Guides", iconSrc: "/image/filter-guides.svg" },
  { id: "news", label: "News", iconSrc: "/image/filter-news.svg" },
];

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredBlogs = blogs.filter((blog) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "featured") return blog.featured;
    return blog.category.toLowerCase() === activeCategory;
  });



  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
      <Helmet>
        <title>Rooferio - Roofer and Roofing Service Framer Template</title>
      </Helmet>
      <Navbar />
      <main>
        {/* Blog Section */}
        <section className="bg-background py-16 md:py-12">
          <div className="container mx-auto px-5 md:px-12 lg:px-6 xl:px-0">
            {/* Section Label */}
            <div className="section-label-left mb-4">Blogs</div>

            {/* Main Heading */}
            <h1
              className="font-heading text-4xl md:text-5xl lg:text-[60px] font-semibold uppercase mb-12 max-w-3xl"
              style={{ lineHeight: "1", letterSpacing: "-2.8px" }}
            >
              Stories, Lessons, And Insights From Up High (So You Don't Have To Climb Up There).
            </h1>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 mb-12">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center font-heading gap-2 px-4 py-2 text-[16px] font-bold uppercase transition-colors ${isActive
                      ? "bg-black text-white"
                      : "bg-[#f5f5f5] text-black hover:bg-gray-200"
                      }`}
                  >
                    {typeof cat.iconSrc === "string" ? (
                      <img
                        src={cat.iconSrc}
                        alt=""
                        className="w-4 h-4 object-contain"
                        style={isActive ? {
                          filter: 'invert(53%) sepia(99%) saturate(1519%) hue-rotate(360deg) brightness(103%) contrast(106%)'
                        } : {}}
                      />
                    ) : (
                      isValidElement(cat.iconSrc) && cloneElement(cat.iconSrc as React.ReactElement, {
                        className: `w-4 h-4 ${isActive ? "text-accent" : ""}`
                      })
                    )}
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBlogs.map((blog, index) => (
                <Link key={index} to={`/blogs/${blog.slug}`} className="group">
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden mb-3">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Meta Row */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-[#F5F5F5] text-black px-3 py-1 text-sm font-heading font-bold uppercase">{blog.category}</span>
                    <span className="bg-[#F5F5F5] text-black px-3 py-1 text-sm font-heading font-semibold">{blog.date}</span>
                    <div className="flex items-center gap-2 bg-[#F5F5F5] px-2 py-1">
                      <img
                        src={`/image/${blog.author.toLowerCase().replace(' ', '-')}.png`}
                        alt={blog.author}
                        className="w-6 h-6  object-cover"
                      />
                      <span className=" text-black text-sm font-heading font-semibold">{blog.author}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="font-heading text-base md:text-2xl font-semibold uppercase group-hover:text-accent transition-colors line-clamp-2"
                    style={{ lineHeight: "1.3", letterSpacing: "-0.3px" }}
                  >
                    {blog.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </main>
      <Footer />    </div>
    </PageTransition>
  );
};

export default Blogs;
