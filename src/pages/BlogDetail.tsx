import { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link as LinkIcon, ArrowRight } from "lucide-react";
import { getBlogDetailBySlug, blogDetails } from "@/data/blogDetails";
import { blogs } from "@/data/blogs";
import { ContactSection } from "@/components/sections/ContactSection";
import { Helmet } from "react-helmet-async";
import { PageTransition } from "@/components/PageTransition";

const BlogDetail = () => {
    const { blogId } = useParams();
    const [isNewsletterVisible, setIsNewsletterVisible] = useState(false);
    const [isContentVisible, setIsContentVisible] = useState(false);
    const newsletterRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const blog = getBlogDetailBySlug(blogId || "") || blogDetails.find(b => b.id === blogId);

    useEffect(() => {
        window.scrollTo(0, 0);
        const observerOptions = { threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.target === newsletterRef.current && entry.isIntersecting) setIsNewsletterVisible(true);
                if (entry.target === contentRef.current && entry.isIntersecting) setIsContentVisible(true);
            });
        }, observerOptions);

        if (newsletterRef.current) observer.observe(newsletterRef.current);
        if (contentRef.current) observer.observe(contentRef.current);
        return () => observer.disconnect();
    }, [blogId]);

    if (!blog) return null;

    const relatedBlogsData = blogs.filter(b => b.id !== blog.id).slice(0, 3);



    return (
        <PageTransition>
            <div className="min-h-screen bg-white">
                <Helmet>
                    <title>{blog.title}</title>
                </Helmet>
                <Navbar />

                <main>
                    {/* 1. Header Section */}
                    <section className="bg-[#F8F8F8] pt-6 pb-10 md:pb-16 border-b border-gray-200">
                        <div className="container mx-auto px-4 xl:px-0 max-w-[1390px]">
                            <div className="flex items-center gap-2 mb-6">
                                <span className="w-2 h-2 bg-[#FF8A3D]"></span>
                                <span className="text-[16px] font-heading font-bold tracking-widest uppercase">BLOG</span>
                                <span className="w-2 h-2 bg-[#FF8A3D]"></span>
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black uppercase leading-[1.1] mb-10 max-w-5xl tracking-tight">
                                {blog.title}
                            </h1>

                            {/* Metadata Bar */}
                            <div className="bg-white border border-gray-200 px-6 py-6 md:py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-6">
                                {/* Left: Author with Avatar */}
                                <div className="flex items-center gap-3 w-full md:w-auto border-b md:border-none border-gray-100 pb-4 md:pb-0">
                                    <img
                                        src={blog.authorAvatar}
                                        alt={blog.author}
                                        className="w-12 h-12 rounded-sm object-cover"
                                    />
                                    <div>
                                        <p className="text-[14px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Author</p>
                                        <p className="text-[16px] font-black font-heading uppercase leading-none">{blog.author}</p>
                                    </div>
                                </div>

                                {/* Vertical Separator */}
                                <div className="hidden md:block h-12 w-px bg-gray-300"></div>

                                {/* Published */}
                                <div className="w-full md:w-auto border-b md:border-none border-gray-100 pb-4 md:pb-0">
                                    <p className="text-[14px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Published</p>
                                    <p className="text-[16px] font-black font-heading uppercase leading-none">{blog.date}</p>
                                </div>

                                {/* Vertical Separator */}
                                <div className="hidden md:block h-12 w-px bg-gray-300"></div>

                                {/* Category */}
                                <div className="w-full md:w-auto border-b md:border-none border-gray-100 pb-4 md:pb-0">
                                    <p className="text-[14px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Category</p>
                                    <p className="text-[16px] font-black font-heading uppercase leading-none text-black">{blog.category}</p>
                                </div>

                                {/* Right: Share Buttons */}
                                <div className="flex items-center gap-3 w-full md:w-auto md:ml-auto pt-2 md:pt-0">
                                    <button className="p-2.5 border border-gray-300 hover:bg-gray-50 transition-colors rounded-sm">
                                        <LinkIcon className="w-5 h-5 font-bold text-gray-700" />
                                    </button>
                                    <button className="flex-1 md:flex-none bg-[#FF8A3D] text-white px-6 py-2.5 text-[16px] font-black font-heading tracking-widest uppercase hover:bg-orange-600 transition-colors rounded-sm">
                                        SHARE
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 2. Hero Image & Intro */}
                    <section className="py-16 md:py-20 bg-white">
                        <div className="container mx-auto px-4 max-w-[1290px]">
                            <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-start">
                                <div className="overflow-hidden">
                                    <img
                                        src={blog.featuredImage}
                                        alt={blog.title}
                                        className="w-full h-[300px] lg:h-[500px] object-cover transition-all duration-700"
                                    />
                                </div>
                                <div ref={contentRef} className={`space-y-6 transition-all duration-1000 ${isContentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                                    {blog.introContent.map((p, i) => (
                                        <p key={i} className="text-base md:text-2xl text-[rgb(20,20,20)] leading-relaxed font-heading">
                                            {p}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 3. Main Content Grid */}
                    <section className="bg-[#F8F8F8] py-16 md:py-20 border-t border-gray-200">
                        <div className="container mx-auto px-4 max-w-[1290px]">
                            <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-12 lg:gap-16">

                                {/* Left: Article Content */}
                                <div className="space-y-12">
                                    {blog.sections.map((section, idx) => (
                                        <div key={idx} className="space-y-6">
                                            <h2 className="text-xl md:text-2xl lg:text-3xl font-black uppercase tracking-tight text-gray-900">
                                                {section.heading}
                                            </h2>
                                            {section.content.map((p, pi) => (
                                                <p key={pi} className="text-lg md:text-xl font-heading text-gray-700 leading-relaxed">
                                                    {p}
                                                </p>
                                            ))}
                                            {section.lists?.map((list, li) => (
                                                <ul key={li} className="space-y-3 pl-2">
                                                    {list.items.map((item, ii) => (
                                                        <li key={ii} className="flex gap-3 text-sm md:text-lg font-heading text-gray-700 leading-relaxed">
                                                            <span className="text-[#FF8A3D] font-bold mt-0">•</span>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            ))}
                                        </div>
                                    ))}
                                </div>

                                {/* Right: Sidebar */}
                                <div className="space-y-8 lg:sticky lg:top-24 lg:self-start">
                                    {/* Author Card */}
                                    <div className="bg-white border border-gray-200 p-6 md:p-8 shadow-sm">
                                        <div className="flex flex-col gap-4">
                                            <img src={blog.authorAvatar} alt={blog.author} className="w-20 h-20 object-cover" />
                                            <div>
                                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Author</p>
                                                <h3 className="text-lg md:text-xl font-black uppercase mb-3 md:mb-4">{blog.author}</h3>
                                                <p className="text-xs md:text-[16px] text-[rgb(20,20,20)] leading-relaxed font-inter font-semibold">
                                                    {blog.authorBio}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Newsletter Card */}
                                    <div
                                        ref={newsletterRef}
                                        className={`bg-white border border-gray-200 p-6 md:p-8 shadow-sm transition-all duration-1000 ${isNewsletterVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                    >
                                        <h3 className="text-lg md:text-xl font-black uppercase leading-tight mb-4">
                                            WHAT'S BETTER THAN INSIDER PERKS, PRO TIPS, AND SURPRISES?
                                        </h3>
                                        <p className="text-xs md:text-[16px] text-[rgb(20,20,20)] leading-relaxed font-inter font-semibold mb-6">
                                            Sign up to get the most recent blog articles in your email every week.
                                        </p>
                                        <div className="space-y-3">
                                            <input
                                                type="email"
                                                placeholder="jane@framer.com"
                                                className="w-full px-4 py-3 md:py-4 bg-[#F8F8F8] border border-gray-100 focus:outline-none focus:border-orange-300 text-sm"
                                            />
                                            <button className="w-full bg-[#FF8A3D] text-white py-3 md:py-4 text-xs font-black tracking-[0.2em] uppercase hover:bg-orange-600 transition-all">
                                                SUBSCRIBE
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 4. Other Blogs Section */}
                    <section className="py-16 md:py-24 bg-white border-t border-gray-200">
                        <div className="container mx-auto px-4 max-w-[1290px]">
                            <div className="text-center mb-12 md:mb-16">
                                <div className="flex items-center justify-center gap-2 mb-4">
                                    <span className="w-2 h-2 bg-[#FF8A3D]"></span>
                                    <span className="text-sm font-bold tracking-widest uppercase">OTHER BLOGS</span>
                                    <span className="w-2 h-2 bg-[#FF8A3D]"></span>
                                </div>
                                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase leading-none tracking-tighter">
                                    WHY STOP HERE?<br />EXPLORE MORE BLOGS
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 md:mb-16">
                                {relatedBlogsData.map((b) => (
                                    <Link key={b.id} to={`/blogs/${b.slug}`} className="group">
                                        <div className="aspect-[1.4/1] bg-gray-100 mb-6 overflow-hidden">
                                            <img src={b.image} alt={b.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                        </div>
                                        <div className="flex items-center gap-2 mb-3 text-[10px] font-bold uppercase tracking-wider">
                                            <span className="text-[#FF8A3D]">{b.category}</span>
                                            <span className="text-gray-300">|</span>
                                            <span className="text-gray-500">{b.date}</span>
                                            <span className="text-gray-300">|</span>
                                            <span className="text-gray-500">{b.author}</span>
                                        </div>
                                        <h3 className="text-base md:text-lg font-black uppercase leading-tight group-hover:text-[#FF8A3D] transition-colors line-clamp-2">
                                            {b.title}
                                        </h3>
                                    </Link>
                                ))}
                            </div>

                            <div className="flex justify-center">
                                <Link to="/blogs" className="flex items-center gap-3 bg-black text-white px-8 py-4 text-xs font-black tracking-widest uppercase hover:bg-[#FF8A3D] transition-all group">
                                    READ ALL BLOGS
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </section>

                    <ContactSection />
                </main>

                <Footer />    </div>
        </PageTransition>
    );
};

export default BlogDetail;
