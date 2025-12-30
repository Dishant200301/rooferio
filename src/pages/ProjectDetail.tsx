import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/sections/ContactSection";
import { useParams, Link, Navigate } from "react-router-dom";
import { getProjectBySlug, getRelatedProjects } from "@/data/projectDetails";
import { ArrowRight, ChevronRight, MapPin } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { Helmet } from "react-helmet-async";
import { PageTransition } from "@/components/PageTransition";

const ProjectDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const project = getProjectBySlug(slug || "");
    const relatedProjects = getRelatedProjects(slug || "", 2);
    const testimonial = project?.testimonial;

    if (!project) {
        return <Navigate to="/projects" replace />;
    }

    return (
        <PageTransition>
            <div className="min-h-screen bg-white">
                <Helmet>
                    <title>{project.title}</title>
                </Helmet>
                <Navbar />
                <main>
                    {/* Hero Section - Dark Background */}
                    <section className="bg-black text-white pt-16 pb-10">
                        <div className="container mx-auto px-5 md:px-12 xl:px-0">
                            {/* Top Label */}
                            <div className="mb-10">
                                <div className="flex items-center gap-2 font-heading text-[16px] font-bold uppercase tracking-widest text-white">
                                    <span className="w-2 h-2 bg-orange-500"></span> PROJECT DETAILS
                                </div>
                            </div>

                            {/* Two Column Layout */}
                            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-0 items-start mb-16">
                                {/* Left: Title & Description */}
                                <div>
                                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-[1.1] mb-8">
                                        {project.title}
                                    </h1>
                                    <p className="font-inter font-bold mt-32 text-[24px] leading-relaxed text-white/80 max-w-xl">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Right: Meta Information Table */}
                                <div className="border border-white/20 text-[16px] uppercase mt-36 font-heading">
                                    <div className="divide-y divide-white/20">
                                        {[
                                            { label: "CLIENT", value: project.client, icon: "/image/icon/Client.svg" },
                                            { label: "TYPE", value: project.type, icon: "/image/icon/Type.svg" },
                                            { label: "DURATION", value: project.duration, icon: "/image/icon/Duration.svg" },
                                            { label: "YEAR", value: project.year, icon: "/image/icon/Year.svg" },
                                            { label: "PROPERTY TYPE", value: project.propertyType, icon: "/image/icon/Property.svg" },
                                            { label: "LOCATION", value: project.location, icon: "/image/icon/Location.svg" },
                                            { label: "SERVICE", value: project.service, icon: "/image/icon/Services.svg" },
                                            { label: "MATERIALS", value: project.materials.join(", "), icon: "/image/icon/Materials.svg" },
                                        ].map((item, i) => (
                                            <div key={i} className="grid grid-cols-[160px_1fr] items-center">
                                                <div className="p-3 border-r border-white/20 bg-white/5 flex items-center font-heading font-bold gap-2 text-[rgba(255, 255, 255, 0.5)]">
                                                    <img src={item.icon} alt="" className="w-4 h-4 brightness-0 invert" /> {item.label}
                                                </div>
                                                <div className="p-3 font-inter text-[rgba(255, 255, 255, 0.5)] pl-5">{item.value}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Hero Image */}
                            <div className="w-full h-[400px] md:h-[500px] lg:h-[680px] lg:w-[1340px] overflow-hidden">
                                <img
                                    src={project.heroImage}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </section>

                    {/* What We Did Section - Light Gray Box */}
                    <section className="bg-white py-20">
                        <div className="container mx-auto px-5 md:px-12 flex justify-center">
                            <div className="bg-[#f4f4f4] p-12 md:p-16 lg:p-20 max-w-4xl w-full">
                                <div className="mb-10">
                                    <h2 className="font-heading text-3xl md:text-3xl font-bold uppercase mb-6">WHAT WE DID</h2>
                                    <p className="font-inter text-base md:text-lg text-black font-inter font-semibold">This project was a detective job first, then a precision fix.</p>
                                </div>

                                <div className="space-y-12">
                                    {project.whatWeDid.map((section, index) => (
                                        <div key={index}>
                                            <h3 className="font-heading text-xl md:text-3xl font-bold uppercase mb-4">
                                                {section.title}
                                            </h3>
                                            <ul className="space-y-3">
                                                {section.bullets.map((bullet, idx) => (
                                                    <li key={idx} className="flex items-start gap-3 font-inter font-semibold text-lg text-black">
                                                        <span className="text-black font-bold mt-0 shrink-0">•</span>
                                                        <span>{bullet}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Before / After Interactive Slider Section */}
                    <section className="bg-white pb-20">
                        <div className="container mx-auto px-5 md:px-12">
                            <BeforeAfterSlider
                                beforeImage={project.beforeAfter.before}
                                afterImage={project.beforeAfter.after}
                            />
                        </div>
                    </section>

                    {/* Challenges Section - Light Gray Background */}
                    <section className="bg-white py-10">
                        <div className="container mx-auto px-5 md:px-12 flex justify-center">
                            <div className="bg-[#f4f4f4] p-12 md:p-16 lg:p-20 max-w-4xl w-full space-y-12">
                                <div>
                                    <h3 className="font-heading text-xl md:text-3xl font-bold uppercase mb-6">Challenges We Faced</h3>
                                    <ul className="space-y-3">
                                        {project.challenges.map((c, i) => (
                                            <li key={i} className="flex items-start gap-3 font-inter font-semibold text-lg text-black">
                                                <span className="font-bold mt-0">•</span> {c}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-heading text-xl md:text-3xl font-bold uppercase mb-6">Why This Project Stands Out</h3>
                                    <ul className="space-y-3">
                                        {project.whyItStandsOut.map((p, i) => (
                                            <li key={i} className="flex items-start gap-3 font-inter font-semibold text-lg text-black">
                                                <span className="font-bold mt-0">•</span> {p}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-heading text-xl md:text-3xl font-bold uppercase mb-6">Final Result</h3>
                                    <p className="font-inter font-semibold text-lg text-black leading-relaxed">
                                        {project.finalResult}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Testimonial Section - Dark Layout */}
                    <section className="w-full bg-white py-20">
                        <div className="max-w-[1200px] mx-auto px-6">
                            <div className="bg-black text-white px-14 py-16">

                                <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-16 items-center">

                                    {/* Left: Image + Name */}
                                    <div className="flex flex-col items-center">
                                        <div className="w-[220px] h-[220px] overflow-hidden">
                                            <img
                                                src="/image/bramwell-cutter.png"
                                                alt={testimonial?.name || "Client"}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        <p className="mt-6 font-heading text-sm font-bold uppercase tracking-widest">
                                            {testimonial?.name}
                                        </p>
                                        <p className="text-xs text-white/60 uppercase mt-1">
                                            {testimonial?.role}
                                        </p>
                                    </div>

                                    {/* Right: Quote */}
                                    <div className="relative max-w-[640px]">

                                        {/* Opening Quote */}
                                        <span className="absolute -top-6 -left-8 text-[64px] font-serif text-white/20 leading-none">
                                            “
                                        </span>

                                        {/* Top dotted line */}
                                        <div className="absolute top-2 right-0 w-[120px] border-t border-dotted border-white/30" />

                                        <p className="text-[20px] leading-[1.8] font-medium">
                                            {testimonial?.quote}
                                        </p>

                                        {/* Bottom dotted line */}
                                        <div className="absolute bottom-2 left-0 w-[120px] border-t border-dotted border-white/30" />

                                        {/* Closing Quote */}
                                        <span className="absolute -bottom-8 right-0 text-[64px] font-serif text-white/20 leading-none">
                                            ”
                                        </span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Gallery Section */}
                    <section className="bg-[#f4f4f4] py-24">
                        <div className="container mx-auto px-5 md:px-12">
                            <div className="mb-12">
                                <div className="flex items-center gap-2 font-heading text-[16px] font-bold uppercase tracking-widest text-black mb-4">
                                    <span className="w-4 h-4 bg-orange-500"></span> PROJECT IMAGES
                                    <span className="w-4 h-4 bg-orange-500"></span>
                                </div>
                                <h2 className="font-heading text-5xl md:text-6xl font-bold uppercase leading-none">
                                    Every Angle, Every Detail
                                </h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                                {project.gallery.map((img, i) => (
                                    <div key={i} className="aspect-[3/3] overflow-hidden">
                                        <img src={img} className="w-full h-full lg:w-[443px] lg:h-[443px] object-cover hover:scale-105 transition-transform duration-700" alt="Detail" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Other Projects Section */}
                    <section className="bg-black text-white py-24">
                        <div className="container mx-auto px-5 md:px-12">

                            {/* Section Header */}
                            <div className="text-center mb-16">
                                <div className="flex justify-center items-center gap-2 mb-6">
                                    <span className="w-3 h-3 bg-orange-500" />
                                    <span className="text-[16px] font-bold uppercase font-heading tracking-[0.25em] text-white">
                                        Other Projects
                                    </span>
                                    <span className="w-3 h-3 bg-orange-500" />
                                </div>

                                <h2 className="font-heading text-[42px] md:text-[60px] font-extrabold uppercase leading-[1.1]">
                                    Other Projects You <br />
                                    May Feel Inspiring
                                </h2>
                            </div>

                            {/* Project Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                                {relatedProjects.map((project) => (
                                    <ProjectCard key={project.slug} project={project} />
                                ))}
                            </div>

                            {/* CTA */}
                            <div className="flex justify-center">
                                <Link
                                    to="/projects"
                                    className="bg-orange-500 text-black px-6 py-3 text-[16px] font-heading font-bold uppercase tracking-widest flex items-center gap-3 hover:bg-orange-600 transition-colors"
                                >
                                    View All Projects
                                    <ChevronRight size={26} />
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

export default ProjectDetail;
