import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
    number: string;
    image: string;
    icon: LucideIcon;
    title: string;
    subtitle: string;
    description: string;
    features: string[];
}

export function ServiceCard({
    number,
    image,
    icon: Icon,
    title,
    subtitle,
    description,
    features,
}: ServiceCardProps) {
    return (
        <article className="bg-light rounded-lg overflow-hidden">
            {/* Desktop: 3-column layout | Tablet: 2-column | Mobile: Single column */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-0">
                {/* 3.1 ImageWrapper - Left Column on Desktop */}
                <div className="md:col-span-1 lg:col-span-4 h-64 md:h-80 lg:h-full min-h-[320px] overflow-hidden order-1">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* 3.2 ContentWrapper - Center Column on Desktop */}
                <div className="md:col-span-1 lg:col-span-5 p-6 md:p-8 lg:p-10 flex flex-col justify-center order-2">
                    {/* Small Square Icon with Accent Background */}
                    <div className="w-12 h-12 bg-accent flex items-center justify-center mb-4 rounded">
                        <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>

                    {/* Service Title - Uppercase, Bold */}
                    <h3 className="font-heading text-2xl md:text-3xl lg:text-3xl font-bold uppercase mb-3 leading-tight">
                        {title}
                    </h3>

                    {/* Short Tagline / Subtitle */}
                    <p className="font-body text-base md:text-lg font-medium mb-4 text-foreground/90">
                        {subtitle}
                    </p>

                    {/* Short Descriptive Paragraph */}
                    <p className="font-body text-sm md:text-base leading-relaxed text-foreground/70">
                        {description}
                    </p>
                </div>

                {/* 3.3 ServiceTags - Right Column on Desktop */}
                <div className="md:col-span-2 lg:col-span-3 p-6 md:p-8 lg:p-10 flex flex-col justify-center bg-background order-3">
                    {/* Vertical List of Service Features */}
                    <ul className="space-y-3 md:space-y-4">
                        {features.map((feature, idx) => (
                            <li
                                key={idx}
                                className="flex items-start gap-3 font-body text-sm md:text-base"
                            >
                                {/* Accent Dot */}
                                <span className="text-accent mt-1 flex-shrink-0">●</span>
                                <span className="text-foreground/80">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </article>
    );
}
