import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProjectDetail } from "@/data/projectDetails";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
    project: ProjectDetail;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const cardRef = useRef<HTMLAnchorElement>(null);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect();
            setCursorPos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        }
    };

    return (
        <Link
            to={`/projects/${project.slug}`}
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="relative block bg-[#f5f5f5] h-[300px] group cursor-none overflow-hidden"
        >
            {/* Custom Cursor */}
             {/* Hover Button (Cursor Follower) */}
        <div
          className="absolute z-50 pointer-events-none transition-opacity duration-150 ease-out"
          style={{
            left: 0,
            top: 0,
            transform: `translate(${cursorPos.x}px, ${cursorPos.y}px) translate(-50%, -50%)`,
            opacity: isHovering ? 1 : 0,
          }}
        >
          <span className="bg-black text-white text-[16px] font-heading font-bold py-2 px-2 uppercase tracking-widest flex items-center gap-2 shadow-2xl whitespace-nowrap">
            View <span className="text-white animate-arrow">{'>>>'}</span>
          </span>
        </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 h-full">
                {/* Content */}
                <div className="p-6 flex flex-col justify-between order-2 lg:order-1 relative z-30 bg-[#f5f5f5] h-full">
                    <div>
                        <span className="inline-block bg-[#ff9436] text-black px-3 py-1 font-heading text-sm font-bold uppercase mb-4">
                            {project.category}
                        </span>
                        <h3 className="font-heading text-2xl text-black font-semibold uppercase leading-tight mb-4">
                            {project.title}
                        </h3>
                    </div>
                    <div className="flex items-center gap-2 text-base uppercase font-bold text-accent-foreground opacity-70">
                        <img src="/image/location.svg" className="w-4 h-4 text-black" alt="" />
                        <span className="font-heading text-black font-bold">
                            {project.location}
                        </span>
                    </div>
                </div>

                {/* Image Container */}
                <div className="relative h-64 lg:h-full overflow-hidden order-1 lg:order-2">
                    {/* Before Image (Default) */}
                    <img
                        src={project.beforeAfter.before}
                        alt={`${project.title} Before`}
                        className="absolute inset-0 w-full h-full object-cover z-10 transition-transform duration-500"
                    />

                    {/* After Image (Slides in on Hover) */}
                    <div className="absolute inset-0 z-20 w-full h-full translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out">
                        <img
                            src={project.beforeAfter.after}
                            alt={`${project.title} After`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </Link>
    );
};
