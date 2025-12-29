import { Home, ArrowRight, Wrench, RefreshCw, Search, Paintbrush, Building } from "lucide-react";
import serviceInstallation from "/image/service-1.png";
import serviceRepair from "/image/service-2.png";
import serviceReplacement from "/image/service-3.png";
import serviceInspection from "/image/service-4.png";
import serviceCoating from "/image/service-5.png";
import serviceCommercial from "/image/service-6.png";
export const services = [
  {
    title: "Roof Installation",
    subtitle: "A new roof, a new vibe — let's protect your home in style",
    description: "Protect your home with expert roof installation services across Texas—built to handle the heat, storms, and everything in between.",
    image: serviceInstallation,
    icon: Wrench,
    href: "/services/roof-installation",
    features: [
      "New roof installation",
      "Asphalt shingle installation",
      "Transition to metal roofing",
      "Tile and concrete installation",
      "Budget-conscious solutions",
      "Solar-ready installation",
    ],
  },
  {
    title: "Roof Repair",
    subtitle: "Got a leak? We'll be there faster than you can say 'bucket'.",
    description: "From mystery drips to wind-blown shingles, we fix roof problems big and small — before they turn into full-blown headaches. Quick fixes, solid results.",
    image: serviceRepair,
    icon: Home,
    href: "/services/roof-repair",
    features: [
      "24/7 emergency repairs",
      "Leak detection & patching",
      "Chimney and skylight sealing",
      "Emergency storm repairs",
      "Missing shingle repair",
      "Bird and rodent proofing",
    ],
  },
  {
    title: "Roof Replacement",
    subtitle: "Out with the old, in with the weatherproof.",
    description: "When repairs just won't cut it, we'll tear off the old and give your home a fresh, strong new lid. Bonus: it might just boost your curb appeal, too.",
    image: serviceReplacement,
    icon: RefreshCw,
    href: "/services/roof-replacement",
    features: [
      "Complete roof removal",
      "Old-to-new transformation",
      "Warranty-backed work",
      "Deck repair/replacement",
      "Energy-efficient options",
      "Seamless process finish",
    ],
  },
  {
    title: "Roof Inspections",
    subtitle: "Spot problems early, fix them fast, and keep your roof happy.",
    description: "Our maintenance and inspection service is like a checkup for your roof—preventing big issues with a little love, care, and expert eyes.",
    image: serviceInspection,
    icon: Search,
    href: "/services/roof-inspections",
    features: [
      "Full-roof surface scan",
      "Certified inspection reports",
      "Gutter and drain check",
      "Pre-purchase inspections",
      "Post-storm assessments",
      "Detailed drone imaging",
    ],
  },
  {
    title: "Roof Coating",
    subtitle: "It's like sunscreen... but for your roof.",
    description: "Our high-performance roof coatings add years of life, reflect brutal Texas heat, and help you save on energy bills.",
    image: serviceCoating,
    icon: Paintbrush,
    href: "/services/roof-coating",
    features: [
      "Elastomeric roof coating",
      "UV-reflective coating",
      "High reflectivity coating",
      "Cost-saving in summer",
      "Waterproofing",
      "Thermal barrier coating",
      "Coating with Silane/Siloxane",
    ],
  },
  {
    title: "Commercial Roofing",
    subtitle: "From the ground up to the top of the roof—we've got you covered!",
    description: "We install, repair, maintain, and upgrade all types of commercial roofing systems. Whether it's new construction, a much-needed upgrade, or emergency repair.",
    image: serviceCommercial,
    icon: Building,
    href: "/services/commercial-roofing",
    features: [
      "Industrial roof solutions",
      "TPO & flat roofing",
      "EPDM roofing systems",
      "Commercial metal roofing",
      "Built-up roofing (BUR)",
      "Roof maintenance programs",
    ],
  },
];