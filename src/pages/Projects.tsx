import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
// import { RooferSilhouette } from "@/components/RooferSilhouette";
import { ContactSection } from "@/components/sections/ContactSection";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { projectDetails } from "@/data/projectDetails";

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-background py-12 md:py-16">
          <div className="container mx-auto px-5 md:px-12 xl:px-0">
            <div className="section-label-left mb-4">Our Projects</div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold uppercase leading-tight max-w-6xl">
              Sometimes The Best Way To Trust A<br />
              Roofer Is To See The Difference Yourself.
            </h1>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="bg-background py-8 md:py-12">
          <div className="container mx-auto px-5 md:px-12 xl:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projectDetails.map((project) => (
                <Link
                  key={project.slug}
                  to={`/projects/${project.slug}`}
                  className="bg-light group cursor-pointer"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Content */}
                    <div className="p-6 flex flex-col justify-between order-2 lg:order-1">
                      <div>
                        <span className="inline-block bg-accent text-accent-foreground px-3 py-1 font-heading text-sm font-bold uppercase mb-4">
                          {project.category}
                        </span>
                        <h3 className="font-heading text-2xl font-semibold uppercase leading-tight mb-4">
                          {project.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 text-base uppercase font-bold text-accent-foreground opacity-70">
                        <img src="/image/location.svg" className="w-4 h-4 text-black " />
                        <span className="font-heading text-black font-bold">{project.location}</span>
                      </div>
                    </div>

                    {/* Image */}
                    <div className="h-64 lg:h-full overflow-hidden order-1 lg:order-2">
                      <img
                        src={project.heroImage}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <ContactSection />

        {/* Silhouette */}
        {/* <RooferSilhouette /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
