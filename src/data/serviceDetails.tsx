import serviceInstallation from "/image/service-1.png";
import serviceRepair from "/image/service-2.png";
import serviceReplacement from "/image/service-3.png";
import serviceInspection from "/image/service-4.png";
import serviceCoating from "/image/service-5.png";
import serviceCommercial from "/image/service-6.png";
import portfolio1 from "/image/portfolio-1.png";
import portfolio2 from "/image/portfolio-2.png";
import portfolio3 from "/image/portfolio-3.png";

export interface ServiceDetail {
    slug: string;
    title: string;
    locations: string;
    heroImage: string;
    heroBadges?: {
        icon: string;
        text: string;
    }[];
    shortDescription: string;
    sectionDescriptions?: {
        whatWeOffer?: string;
        whatsIncluded?: string;
        ourApproach?: string;
        whyChooseUs?: string;
        benefits?: string;
        pricing?: string;
        faqs?: string;
    };
    sections: {
        whatWeOffer: string[];
        whatsIncluded: string[];
        ourApproach: string[];
        whyChooseUs: string[];
        benefits: string[];
        pricing: string[];
        faqs: {
            question: string;
            answer: string;
        }[];
    };
    gallery: string[];
    relatedServices: {
        title: string;
        slug: string;
    }[];
}

export const serviceDetails: ServiceDetail[] = [
    {
        slug: "roof-installation",
        title: "Residential Roof Installation",
        locations: "In Dallas, Houston, Austin, San Antonio, and Fort Worth",
        heroImage: serviceInstallation,
        shortDescription: "Getting a new roof shouldn't be stressful—it should feel like a home upgrade! Whether you're building from scratch or finally saying goodbye to that leaky old roof, we're here to help with expert residential roof installation across Dallas, Houston, Austin, San Antonio, and Fort Worth.",
        sectionDescriptions: {
            whatWeOffer: "We handle everything from start to finish to give your home a fresh, weatherproof upgrade.",
            whatsIncluded: "We go all-in on quality and service—no shortcuts, just solid roofing you can count on.",
            ourApproach: "We believe in making roof replacement hassle-free and actually kind of fun (yes, really).",
            whyChooseUs: "Because replacing your roof shouldn't be stressful—and we make sure it isn't.",
            benefits: "A fresh roof is more than just shingles—it's a smart investment with major perks.",
            pricing: "We price every roof fairly based on your home size, roof type, and materials.",
            faqs: "Wondering about the process? We've got answers ready!",
        },
        sections: {
            whatWeOffer: [
                "Full tear-off and disposal of old roofing",
                "New roofing system installation",
                "Asphalt shingles, metal, tile, or designer materials",
                "Underlayment and moisture barrier upgrades",
                "Ventilation and insulation enhancements",
                "Color and style consultation to match your home",
            ],
            whatsIncluded: [
                "Free roof inspection and honest replacement advice",
                "Complete removal of old roofing materials",
                "New flashing, drip edge, and waterproof barriers",
                "High-quality, long-lasting roofing materials",
                "Expert installation and thorough cleanup",
                "Manufacturer and labor warranties",
            ],
            ourApproach: [
                "We walk you through every step before we start",
                "We help you choose the perfect roof for your home and budget",
                "We stick to our timeline—no dragging out the job",
                "We leave your home cleaner than we found it",
            ],
            whyChooseUs: [
                "Friendly, licensed, and insured crews",
                "Tons of 5-star reviews from Texas homeowners",
                "Great financing options available",
                "Clear quotes and no last-minute surprise costs",
            ],
            benefits: [
                "Improves your home's energy efficiency",
                "Increases resale value and curb appeal",
                "Reduces the risk of leaks, mold, and pests",
                "Keeps your home safe during wild Texas weather",
            ],
            pricing: [
                "Asphalt shingle replacement: Starting at $7,000",
                "Metal roof replacement: Starting at $10,500",
                "Tile or designer roof systems: Custom quotes",
                "We offer free, no-pressure inspections and price estimates—let's talk!",
            ],
            faqs: [
                {
                    question: "How do I know I need a roof replacement?",
                    answer: "If your roof is over 20 years old, leaking often, sagging, or has missing shingles—it's probably time.",
                },
                {
                    question: "Can I choose the color and style?",
                    answer: "Absolutely! We offer a full range of styles, colors, and materials to suit your taste and budget.",
                },
                {
                    question: "Will you remove my old roof?",
                    answer: "Yes, and we'll dispose of it responsibly, so you don't have to lift a finger.",
                },
                {
                    question: "How long does a roof replacement take?",
                    answer: "Usually 1-3 days depending on the size and complexity of your home.",
                },
            ],
        },
        gallery: [portfolio1, portfolio2, portfolio3],
        relatedServices: [
            { title: "Roof Repair", slug: "roof-repair" },
            { title: "Roof Replacement", slug: "roof-replacement" },
            { title: "Roof Inspections", slug: "roof-inspections" },
            { title: "Roof Coating", slug: "roof-coating" },
            { title: "Commercial Roofing", slug: "commercial-roofing" },
        ],
    },
    {
        slug: "roof-repair",
        title: "Roof Repair",
        locations: "In Dallas, Houston, Austin, San Antonio, and Fort Worth",
        heroImage: serviceRepair,
        shortDescription: "Got a leak? Missing shingles? Storm damage? We'll be there faster than you can say 'bucket'. Our repair team fixes everything from minor leaks to major damage.",
        sections: {
            whatWeOffer: [
                "Emergency leak repairs available 24/7",
                "Storm damage assessment and repair",
                "Shingle replacement and repair",
                "Flashing repair and replacement",
                "Gutter and fascia repairs",
            ],
            whatsIncluded: [
                "Thorough roof inspection to identify all issues",
                "Detailed repair estimate with photos",
                "High-quality replacement materials",
                "Professional repair work",
                "Cleanup and debris removal",
                "Post-repair inspection",
            ],
            ourApproach: [
                "We respond quickly to repair requests",
                "We thoroughly diagnose the problem before recommending solutions",
                "We provide honest assessments - repair vs. replace recommendations",
                "We complete most repairs same-day or next-day",
            ],
            whyChooseUs: [
                "Fast response times",
                "Experienced repair specialists",
                "Honest, no-pressure assessments",
                "Quality repairs that last",
            ],
            benefits: [
                "Prevent further water damage to your home",
                "Extend the life of your existing roof",
                "Cost-effective alternative to full replacement",
                "Peace of mind during storm season",
            ],
            pricing: [
                "Minor leak repairs: Starting at $150",
                "Shingle replacement (per square): $100 - $350",
                "Flashing repair: $200 - $500",
                "Emergency repairs: Call for pricing",
            ],
            faqs: [
                {
                    question: "How quickly can you respond to an emergency?",
                    answer: "We offer 24/7 emergency response and can typically have someone at your property within 2-4 hours for urgent leaks.",
                },
                {
                    question: "Do you work with insurance companies?",
                    answer: "Yes! We have extensive experience working with insurance adjusters and can help document damage for your claim.",
                },
            ],
        },
        gallery: [portfolio1, portfolio2, portfolio3],
        relatedServices: [
            { title: "Roof Installation", slug: "roof-installation" },
            { title: "Roof Replacement", slug: "roof-replacement" },
            { title: "Roof Inspections", slug: "roof-inspections" },
            { title: "Roof Coating", slug: "roof-coating" },
            { title: "Commercial Roofing", slug: "commercial-roofing" },
        ],
    },
    {
        slug: "roof-replacement",
        title: "Roof Replacement",
        locations: "In Dallas, Houston, Austin, San Antonio, and Fort Worth",
        heroImage: serviceReplacement,
        shortDescription: "Out with the old, in with the weatherproof. When repairs won't cut it anymore, we'll replace your entire roof with minimal disruption to your daily life.",
        sections: {
            whatWeOffer: [
                "Complete tear-off and disposal of old roofing",
                "Deck inspection and repair",
                "New underlayment and ice/water shield installation",
                "Premium roofing material installation",
                "New flashing, vents, and accessories",
            ],
            whatsIncluded: [
                "Full property protection during work",
                "Complete old roof removal",
                "Deck inspection and minor repairs",
                "New underlayment installation",
                "New roofing material installation",
                "Thorough cleanup with magnetic nail sweep",
            ],
            ourApproach: [
                "We provide detailed pre-replacement assessment",
                "We help you select the best materials for your budget and needs",
                "We coordinate efficiently to minimize disruption",
                "We complete most replacements in 2-4 days",
            ],
            whyChooseUs: [
                "Experienced replacement crews",
                "Wide selection of roofing materials",
                "Competitive pricing with financing options",
                "Manufacturer-backed warranties",
            ],
            benefits: [
                "Brand new roof with full warranty",
                "Improved energy efficiency",
                "Increased home value",
                "Decades of worry-free protection",
            ],
            pricing: [
                "Standard Asphalt Replacement: $7,500 - $15,000",
                "Architectural Shingle Replacement: $10,000 - $20,000",
                "Metal Roof Replacement: $15,000 - $35,000",
                "Tile Roof Replacement: $20,000 - $50,000",
            ],
            faqs: [
                {
                    question: "How do I know if I need a replacement vs. repair?",
                    answer: "Generally, if your roof is over 20 years old or has damage affecting more than 30% of the surface, replacement is usually more cost-effective long-term.",
                },
                {
                    question: "Do you offer financing?",
                    answer: "Yes! We offer flexible financing options with competitive rates. Ask about our 0% APR for 12 months option.",
                },
            ],
        },
        gallery: [portfolio1, portfolio2, portfolio3],
        relatedServices: [
            { title: "Roof Installation", slug: "roof-installation" },
            { title: "Roof Repair", slug: "roof-repair" },
            { title: "Roof Inspections", slug: "roof-inspections" },
            { title: "Roof Coating", slug: "roof-coating" },
            { title: "Commercial Roofing", slug: "commercial-roofing" },
        ],
    },
    {
        slug: "roof-inspections",
        title: "Roof Inspections",
        locations: "In Dallas, Houston, Austin, San Antonio, and Fort Worth",
        heroImage: serviceInspection,
        shortDescription: "Spot problems early, fix them fast, and keep your roof happy. Regular inspections save you money in the long run and give you peace of mind.",
        sections: {
            whatWeOffer: [
                "Comprehensive visual inspections",
                "Drone inspections for hard-to-reach areas",
                "Detailed written reports with photos",
                "Recommendations for maintenance or repairs",
                "Pre-purchase home inspections",
            ],
            whatsIncluded: [
                "Full exterior roof inspection",
                "Attic inspection (when accessible)",
                "Flashing and penetration check",
                "Gutter and drainage assessment",
                "Detailed written report",
                "Maintenance recommendations",
            ],
            ourApproach: [
                "We use proven inspection checklists",
                "We document everything with photos",
                "We explain findings in plain language",
                "We provide honest, no-pressure recommendations",
            ],
            whyChooseUs: [
                "Experienced, certified inspectors",
                "Thorough, detailed reports",
                "No hidden upsells",
                "Same-day reports available",
            ],
            benefits: [
                "Catch problems before they become expensive",
                "Extend the life of your roof",
                "Document condition for insurance purposes",
                "Peace of mind knowing your roof's status",
            ],
            pricing: [
                "Standard Home Inspection: $150 - $250",
                "Pre-Purchase Inspection: $200 - $300",
                "Drone Inspection Add-on: $75",
                "Insurance Documentation Package: $250",
            ],
            faqs: [
                {
                    question: "How often should I get my roof inspected?",
                    answer: "We recommend annual inspections, plus after any major storm. Regular inspections can catch small issues before they become major problems.",
                },
                {
                    question: "How long does an inspection take?",
                    answer: "Most inspections take 30-60 minutes. You'll typically receive your report the same day.",
                },
            ],
        },
        gallery: [portfolio1, portfolio2, portfolio3],
        relatedServices: [
            { title: "Roof Installation", slug: "roof-installation" },
            { title: "Roof Repair", slug: "roof-repair" },
            { title: "Roof Replacement", slug: "roof-replacement" },
            { title: "Roof Coating", slug: "roof-coating" },
            { title: "Commercial Roofing", slug: "commercial-roofing" },
        ],
    },
    {
        slug: "roof-coating",
        title: "Roof Coating",
        locations: "In Dallas, Houston, Austin, San Antonio, and Fort Worth",
        heroImage: serviceCoating,
        shortDescription: "It's like sunscreen... but for your roof. Extend your roof's life and improve energy efficiency with our professional coating services.",
        sections: {
            whatWeOffer: [
                "Elastomeric roof coatings",
                "Silicone roof coatings",
                "Acrylic roof coatings",
                "Cool roof coatings for energy savings",
                "Waterproofing treatments",
            ],
            whatsIncluded: [
                "Roof cleaning and preparation",
                "Minor repairs before coating",
                "Professional coating application",
                "Multiple coat options available",
                "Post-application inspection",
            ],
            ourApproach: [
                "We assess your roof's condition",
                "We recommend the best coating type for your needs",
                "We properly prepare the surface",
                "We apply coatings according to manufacturer specs",
            ],
            whyChooseUs: [
                "Expert coating application",
                "Premium coating products",
                "Energy savings expertise",
                "Extended roof life results",
            ],
            benefits: [
                "Extend roof life by 10-15 years",
                "Reduce cooling costs by up to 25%",
                "Prevent leaks and water damage",
                "Environmentally friendly option",
            ],
            pricing: [
                "Acrylic Coating: $1.50 - $2.50 per sq. ft.",
                "Silicone Coating: $2.50 - $4.00 per sq. ft.",
                "Elastomeric Coating: $2.00 - $3.50 per sq. ft.",
                "Cool Roof Coating: $2.50 - $4.50 per sq. ft.",
            ],
            faqs: [
                {
                    question: "How long does roof coating last?",
                    answer: "Quality roof coatings typically last 10-15 years with proper application. Some silicone coatings can last even longer.",
                },
                {
                    question: "Will coating stop existing leaks?",
                    answer: "Coating can help seal minor issues, but significant leaks should be repaired before coating. We'll assess and recommend the best approach.",
                },
            ],
        },
        gallery: [portfolio1, portfolio2, portfolio3],
        relatedServices: [
            { title: "Roof Installation", slug: "roof-installation" },
            { title: "Roof Repair", slug: "roof-repair" },
            { title: "Roof Replacement", slug: "roof-replacement" },
            { title: "Roof Inspections", slug: "roof-inspections" },
            { title: "Commercial Roofing", slug: "commercial-roofing" },
        ],
    },
    {
        slug: "commercial-roofing",
        title: "Commercial Roofing",
        locations: "In Dallas, Houston, Austin, San Antonio, and Fort Worth",
        heroImage: serviceCommercial,
        shortDescription: "From the ground up to the top of the roof—we've got you covered. Large-scale projects handled with the same care and attention as residential.",
        sections: {
            whatWeOffer: [
                "Flat roof systems (TPO, EPDM, PVC)",
                "Metal roofing systems",
                "Built-up roofing (BUR)",
                "Modified bitumen systems",
                "Roof maintenance programs",
            ],
            whatsIncluded: [
                "Comprehensive property assessment",
                "Detailed project proposal",
                "Minimal business disruption planning",
                "Professional installation",
                "Warranty and maintenance documentation",
                "Post-installation support",
            ],
            ourApproach: [
                "We work around your business schedule",
                "We provide detailed project timelines",
                "We maintain clean, safe work sites",
                "We communicate clearly throughout the project",
            ],
            whyChooseUs: [
                "Extensive commercial experience",
                "Certified commercial roofing crews",
                "Competitive commercial pricing",
                "Flexible scheduling options",
            ],
            benefits: [
                "Protect your business investment",
                "Reduce energy costs",
                "Minimize business disruption",
                "Long-term peace of mind",
            ],
            pricing: [
                "TPO Roofing: $5.00 - $8.00 per sq. ft.",
                "EPDM Roofing: $4.00 - $7.00 per sq. ft.",
                "Metal Commercial: $8.00 - $15.00 per sq. ft.",
                "Contact us for custom quotes",
            ],
            faqs: [
                {
                    question: "Can you work on weekends or after hours?",
                    answer: "Absolutely! We understand businesses need to operate. We can schedule work during off-hours to minimize disruption.",
                },
                {
                    question: "Do you offer maintenance contracts?",
                    answer: "Yes! We offer annual maintenance programs that include regular inspections and priority service for any issues.",
                },
            ],
        },
        gallery: [portfolio1, portfolio2, portfolio3],
        relatedServices: [
            { title: "Roof Installation", slug: "roof-installation" },
            { title: "Roof Repair", slug: "roof-repair" },
            { title: "Roof Replacement", slug: "roof-replacement" },
            { title: "Roof Inspections", slug: "roof-inspections" },
            { title: "Roof Coating", slug: "roof-coating" },
        ],
    },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
    return serviceDetails.find((service) => service.slug === slug);
}
