import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
// import { RooferSilhouette } from "@/components/RooferSilhouette";
import { ContactSection } from "@/components/sections/ContactSection";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { projectDetails } from "@/data/projectDetails";
import { ProjectCard } from "@/components/ProjectCard";

import { Helmet } from "react-helmet-async";
import { PageTransition } from "@/components/PageTransition";

const Projects = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
      <Helmet>
        <title>Rooferio - Roofer and Roofing Service Framer Template</title>
      </Helmet>
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
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <ContactSection />

        {/* Silhouette */}
        {/* <RooferSilhouette /> */}
      </main>
      <Footer />    </div>
    </PageTransition>
  );
};

export default Projects;
