import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogs = [
  {
    image: "/image/blog-1.jpg",
    category: "Tips",
    date: "June 22, 2025",
    author: "Thayer Juno",
    authorImage: "/image/thayer-juno.png",
    title: "7 Easy Ways To Make Your Roof Last Longer",
    href: "/blogs/1",
  },
  {
    image: "/image/blog-2.jpg",
    category: "Guides",
    date: "July 5, 2025",
    author: "Bramwell Cutter",
    authorImage: "/image/bramwell-cutter.png",
    title: "Choosing The Right Roofing Material: A Homeowner's Simple Guide",
    href: "/blogs/2",
  },
  {
    image: "/image/blog-3.jpg",
    category: "Guides",
    date: "June 22, 2025",
    author: "Thayer Juno",
    authorImage: "/image/thayer-juno.png",
    title: "Roof Repair Vs. Replacement: How To Make The Right Call",
    href: "/blogs/3",
  },
];

export function BlogsSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-5 md:px-12 lg:px-6 xl:px-12 max-w-[1590px]">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 md:mb-24 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-3 h-3 bg-orange-500" />
              <span className="text-[16px] font-bold uppercase tracking-[0.15em] text-[#1a1a1a] font-heading">
                Blogs
              </span>
            </div>
            <h2 className="font-heading text-[42px] md:text-[64px] font-extrabold uppercase leading-[0.95] text-[#1a1a1a] tracking-tight">
              THE ROOF FILES — STORIES,<br />
              GUIDES & GOOD ADVICE
            </h2>
          </div>


        </div>

        {/* Blog List */}
        <div className=" ml-0 md:ml-[28%]">
          {blogs.map((blog) => (
            <Link
              key={blog.title}
              to={blog.href}
              className="group flex flex-col md:flex-row items-start gap-8 lg:gap-10 py-12 border-t border-gray-200 first:border-t-0"
            >
              {/* Image */}
              <div className="w-full md:w-[280px] lg:w-[320px] aspect-square shrink-0 overflow-hidden bg-gray-100">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Meta Column */}
              <div className="flex flex-col gap-3 shrink-0 md:w-48 items-start pt-2">
                <span className="bg-[#f5f5f5] px-4 py-1 text-[13px] font-bold text-[#1a1a1a] w-fit uppercase tracking-wide">
                  {blog.category}
                </span>
                <span className="bg-[#f5f5f5] px-4 py-1 text-[13px] font-bold text-[#1a1a1a] w-fit uppercase tracking-wide">
                  {blog.date}
                </span>
                <div className="bg-[#f5f5f5] px-4 py-1 flex items-center gap-3 ">
                  <img
                    src={blog.authorImage}
                    alt={blog.author}
                    className="w-5 h-5 object-cover grayscale"
                  />
                  <span className="text-[12px] font-bold text-[#1a1a1a] uppercase tracking-wide">
                    {blog.author}
                  </span>
                </div>
              </div>

              {/* Title */}
              <div className="flex-1 pt-2">
                <h3 className="font-heading text-3xl md:text-[24px] font-bold uppercase leading-[1.05] text-[#1a1a1a] group-hover:text-orange-500 transition-colors max-w-2xl tracking-tight">
                  {blog.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>


      </div>
    </section>
  );
}
