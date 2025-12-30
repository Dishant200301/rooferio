import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ProjectDetail } from "@/data/projectDetails";

interface ProjectCardProps {
    project: ProjectDetail;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const cardRef = useRef<HTMLAnchorElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [sliderPosition, setSliderPosition] = useState(100);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect();
            setCursorPos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        }

        // Update slider position based on mouse position over image
        if (imageRef.current) {
            const imageRect = imageRef.current.getBoundingClientRect();
            const x = e.clientX - imageRect.left;
            const percentage = (x / imageRect.width) * 100;
            const clampedPercentage = Math.min(Math.max(percentage, 0), 100);
            setSliderPosition(clampedPercentage);
        }
    };

    return (
        <Link
            to={`/projects/${project.slug}`}
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => {
                setIsHovering(false);
                setSliderPosition(100); // Reset to center when mouse leaves
            }}
            className="relative block bg-[#f5f5f5] h-[300px] group  overflow-hidden"
        >
            {/* Custom Cursor */}
            {/* <div
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
            </div> */}

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

                {/* Image Container with Hover-Based Before/After Comparison */}
                <div
                    ref={imageRef}
                    className="relative h-64 lg:h-full overflow-hidden order-1 lg:order-2"
                >
                    {/* After Image (Background) */}
                    <img
                        src={project.beforeAfter.after}
                        alt={`${project.title} After`}
                        className="absolute inset-0 w-full h-full object-cover z-10"
                    />

                    {/* Before Image (Clipped based on mouse position) */}
                    <div
                        className="absolute inset-0 z-20 overflow-hidden transition-all duration-200 ease-out"
                        style={{
                            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
                        }}
                    >
                        <img
                            src={project.beforeAfter.before}
                            alt={`${project.title} Before`}
                            className="w-full h-full object-cover"
                        />
                    </div>

                   

                   
                </div>
            </div>
        </Link>
    );
};
