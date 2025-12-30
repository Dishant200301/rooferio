export interface ProjectDetail {
  slug: string;
  title: string;
  category: "Residential" | "Commercial";
  client: string;
  type: string;
  propertyType: string;
  location: string;
  service: string;
  year: number;
  duration: string;
  materials: string[];
  description: string;
  heroImage: string;

  whatWeDid: {
    title: string;
    bullets: string[];
  }[];

  beforeAfter: {
    before: string;
    after: string;
  };

  challenges: string[];
  whyItStandsOut: string[];
  finalResult: string;

  testimonial?: {
    quote: string;
    name: string;
    role: string;
  };

  gallery: string[];
}

export const projectDetails: ProjectDetail[] = [
  {
    slug: "leak-repair-partial-roof-restoration",
    title: "Leak Repair And Partial Roof Restoration",
    category: "Residential",
    client: "Client T.",
    type: "Residential",
    propertyType: "1.5-story brick home",
    location: "McKinney, Texas",
    service: "Roof Repair & Restoration",
    year: 2024,
    duration: "3 days",
    materials: ["Asphalt Shingles", "Underlayment", "Flashing", "Sealant"],
    description:
      "A critical roof repair project addressing multiple leak points and restoring structural integrity to a residential property in McKinney. The homeowner experienced water damage during heavy storms, requiring immediate attention and expert restoration.",
    heroImage: "/image/project-before-1.png",

    whatWeDid: [
      {
        title: "Leak Detection & Inspection",
        bullets: [
          "Comprehensive roof inspection to identify all leak sources",
          "Thermal imaging to detect hidden moisture",
          "Assessment of structural damage and water infiltration paths",
        ],
      },
      {
        title: "Repair & Restoration",
        bullets: [
          "Removed damaged shingles and underlayment in affected areas",
          "Replaced rotted decking and reinforced structural supports",
          "Installed new flashing around chimneys and vents",
          "Applied high-quality asphalt shingles matching existing roof",
          "Sealed all penetrations and potential weak points",
        ],
      },
    ],

    beforeAfter: {
      before: "/image/project-before-1.png",
      after: "/image/project-after-1.png",
    },

    challenges: [
      "Multiple leak points scattered across different roof sections",
      "Hidden water damage beneath the surface requiring extensive decking replacement",
      "Matching existing shingle color and style for seamless integration",
      "Working around homeowner's schedule to minimize disruption",
    ],

    whyItStandsOut: [
      "Completed ahead of schedule despite discovering additional damage",
      "Zero callbacks — all leaks permanently resolved",
      "Preserved 80% of existing roof, saving homeowner thousands",
      "Provided 10-year workmanship warranty on all repairs",
    ],

    finalResult:
      "The roof is now completely watertight with restored structural integrity. The homeowner reported no further leaks even during subsequent heavy rainfall. The repair work blends seamlessly with the existing roof, maintaining the home's curb appeal while providing long-term protection.",

    testimonial: {
      quote:
        "I was worried I'd need a full roof replacement, but Roofaria found and fixed every leak without breaking the bank. Their team was professional, fast, and the roof looks brand new. No more buckets in the attic!",
      name: "Sarah Mitchell",
      role: "Homeowner, McKinney, TX",
    },

    gallery: [
      "/image/project-1(1).png",
      "/image/project-1(2).png",
      "/image/project-1(3).png",
     
    ],
  },
  {
    slug: "commercial-roof-coating-restoration",
    title: "Commercial Roof Coating Restoration",
    category: "Commercial",
    client: "Property Manager",
    type: "Commercial",
    propertyType: "Commercial Building",
    location: "Garland, Texas",
    service: "Roof Coating & Restoration",
    year: 2024,
    duration: "5 days",
    materials: [
      "Silicone Roof Coating",
      "Acrylic Sealant",
      "Reinforcement Fabric",
      "Primer",
    ],
    description:
      "A comprehensive commercial roof restoration project utilizing advanced coating technology to extend the lifespan of a flat roof system. This project transformed an aging commercial roof into a highly reflective, energy-efficient surface.",
    heroImage: "/image/project-before-2.png",

    whatWeDid: [
      {
        title: "Surface Preparation",
        bullets: [
          "Power washed entire roof surface to remove debris and contaminants",
          "Repaired all cracks, blisters, and damaged areas",
          "Replaced deteriorated flashing and edge metal",
          "Applied primer to ensure proper coating adhesion",
        ],
      },
      {
        title: "Coating Application",
        bullets: [
          "Applied two coats of premium silicone roof coating",
          "Reinforced seams and penetrations with fabric and coating",
          "Created seamless, monolithic waterproof membrane",
          "Installed reflective topcoat for energy efficiency",
        ],
      },
    ],

    beforeAfter: {
      before: "/image/project-before-2.png",
      after: "/image/project-after-2.png",
    },

    challenges: [
      "Working on occupied commercial building with minimal disruption",
      "Coordinating around business hours and weather conditions",
      "Addressing extensive surface deterioration and ponding water issues",
      "Meeting strict commercial building codes and warranty requirements",
    ],

    whyItStandsOut: [
      "Extended roof life by 15+ years at fraction of replacement cost",
      "Reduced building cooling costs by 25% through reflective coating",
      "Completed during off-hours to avoid business interruption",
      "Provided comprehensive 10-year manufacturer warranty",
    ],

    finalResult:
      "The commercial roof now features a seamless, highly reflective surface that dramatically improves energy efficiency and provides superior waterproofing. The building owner reports significant reduction in cooling costs and complete elimination of previous leak issues.",

    testimonial: {
      quote:
        "Roofaria saved us from a costly roof replacement. The coating system they installed has performed flawlessly, and our energy bills have dropped noticeably. Professional work from start to finish.",
      name: "Michael Chen",
      role: "Property Manager, Garland, TX",
    },

    gallery: [
      "/image/project-2(1).png",
      "/image/project-2(2).png",
      "/image/project-2(3).png",
    
    ],
  },
  {
    slug: "metal-roof-installation-energy-efficiency",
    title: "Metal Roof Installation For Energy Efficiency",
    category: "Residential",
    client: "Rodriguez Family",
    type: "Residential",
    propertyType: "Single Family Home",
    location: "Round Rock, Texas",
    service: "Metal Roof Installation",
    year: 2024,
    duration: "7 days",
    materials: [
      "Standing Seam Metal Panels",
      "Synthetic Underlayment",
      "Trim & Flashing",
      "Insulation",
    ],
    description:
      "A complete metal roof installation project focused on maximizing energy efficiency and longevity. The homeowner wanted a sustainable roofing solution that would last decades while reducing cooling costs in the hot Texas climate.",
    heroImage: "/image/project-before-3.png",

    whatWeDid: [
      {
        title: "Roof Preparation",
        bullets: [
          "Complete tear-off of existing asphalt shingle roof",
          "Inspection and repair of roof decking",
          "Installation of high-performance synthetic underlayment",
          "Added ventilation system for optimal airflow",
        ],
      },
      {
        title: "Metal Installation",
        bullets: [
          "Installed standing seam metal panels with concealed fasteners",
          "Custom fabricated all trim pieces and flashing on-site",
          "Sealed all penetrations and ridge caps",
          "Applied reflective coating for enhanced energy efficiency",
          "Installed snow guards and gutter system",
        ],
      },
    ],

    beforeAfter: {
      before: "/image/project-before-3.png",
      after: "/image/project-after-3.png",
    },

    challenges: [
      "Complex roof geometry with multiple valleys and dormers",
      "Precise panel fabrication required for custom angles",
      "Ensuring proper thermal expansion allowances",
      "Coordinating color match with homeowner's aesthetic preferences",
    ],

    whyItStandsOut: [
      "Achieved 50-year lifespan with minimal maintenance requirements",
      "Reduced cooling costs by 30% through reflective metal surface",
      "Zero penetrations through roof surface for maximum waterproofing",
      "Increased home value and curb appeal significantly",
    ],

    finalResult:
      "The new metal roof provides exceptional durability, energy efficiency, and aesthetic appeal. The standing seam design offers superior weather protection while the reflective surface keeps the home cooler. The homeowner is thrilled with both the performance and modern appearance.",

    testimonial: {
      quote:
        "We love our new metal roof! It looks amazing and our AC doesn't run nearly as much. Roofaria's crew was meticulous with every detail. Best investment we've made in our home.",
      name: "Jennifer & Tom Rodriguez",
      role: "Homeowners, Round Rock, TX",
    },

    gallery: [
      "/image/project-3(1).png",
      "/image/project-3(2).png",
      "/image/project-3(3).png",
     
    ],
  },
  {
    slug: "shingle-roof-replacement-storm-damage",
    title: "Shingle Roof Replacement After Storm Damage",
    category: "Residential",
    client: "David Patterson",
    type: "Residential",
    propertyType: "2-story Home",
    location: "Plano, Texas",
    service: "Complete Roof Replacement",
    year: 2024,
    duration: "4 days",
    materials: [
      "Architectural Shingles",
      "Ice & Water Shield",
      "Synthetic Underlayment",
      "Ridge Vent",
    ],
    description:
      "Emergency roof replacement following severe hail storm damage. The project required complete tear-off and replacement with upgraded materials to provide superior protection against future storms.",
    heroImage: "/image/project-before-4.png",

    whatWeDid: [
      {
        title: "Storm Damage Assessment",
        bullets: [
          "Comprehensive inspection documenting all hail damage",
          "Worked with insurance adjuster for claim approval",
          "Provided detailed estimate and material recommendations",
          "Scheduled emergency tarping to prevent further damage",
        ],
      },
      {
        title: "Complete Replacement",
        bullets: [
          "Full tear-off of damaged shingle roof",
          "Replaced damaged decking and structural components",
          "Installed ice & water shield in critical areas",
          "Applied premium synthetic underlayment",
          "Installed impact-resistant architectural shingles",
          "Added continuous ridge vent for improved ventilation",
        ],
      },
    ],

    beforeAfter: {
      before: "/image/project-before-4.png",
      after: "/image/project-after-4.png",
    },

    challenges: [
      "Extensive hail damage across entire roof surface",
      "Insurance coordination and documentation requirements",
      "Urgent timeline to prevent water infiltration",
      "Upgrading to impact-resistant materials within budget",
    ],

    whyItStandsOut: [
      "Completed insurance claim process seamlessly for homeowner",
      "Upgraded to Class 4 impact-resistant shingles at minimal cost difference",
      "Finished project in 4 days despite extensive damage",
      "Provided lifetime warranty on materials and 10-year workmanship warranty",
    ],

    finalResult:
      "The home now features a beautiful new roof with superior storm protection. The impact-resistant shingles provide peace of mind against future hail events, and the improved ventilation system extends the roof's lifespan. The homeowner's insurance claim was fully approved.",

    testimonial: {
      quote:
        "After the storm, I was overwhelmed. Roofaria handled everything — the insurance, the repairs, everything. They were fast, professional, and the new roof looks incredible. I sleep better knowing it can handle whatever Texas weather throws at it.",
      name: "David Patterson",
      role: "Homeowner, Plano, TX",
    },

    gallery: [
      "/image/project-4(1).png",
      "/image/project-4(2).png",
      "/image/project-4(3).png",
   
    ],
  },
];

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projectDetails.find((project) => project.slug === slug);
}

export function getRelatedProjects(
  currentSlug: string,
  limit: number = 3
): ProjectDetail[] {
  return projectDetails
    .filter((project) => project.slug !== currentSlug)
    .slice(0, limit);
}
