import { useState } from "react";
import { MessageCircle, Search, ClipboardList, Hammer } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: MessageCircle,
    label: "Step 1",
    title: "Tell Us What's Up (Or What's Leaking)",
    description:
      "You reach out — we listen. Whether it's a drip in the attic or a full roof redo, we start with a quick call or visit to understand your needs.",
  },
  {
    id: 2,
    icon: Search,
    label: "Step 2",
    title: "We Check It Out (Yes, We Climb Roofs For A Living)",
    description:
      "Our pros inspect every inch. We'll inspect your roof, take notes, snap photos, and figure out what's really going on — no guesswork, no surprises.",
  },
  {
    id: 3,
    icon: ClipboardList,
    label: "Step 3",
    title: "You Get Options (And No Guilt Trips)",
    description:
      "We send a clear plan & pricing. You'll get a simple, no-jargon quote with smart solutions that fit your roof and your budget. You're in control.",
  },
  {
    id: 4,
    icon: Hammer,
    label: "Step 4",
    title: "We Handle The Hard Work (You Relax)",
    description:
      "We show up, fix up, and clean up. Our team handles everything from start to spotless finish — fast, professional, and leak-free guaranteed.",
  },
];

export function HowWeWorkSection() {
  const [activeStep, setActiveStep] = useState(1);
  const currentStep = steps.find((s) => s.id === activeStep) || steps[0];

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-5 md:px-12 lg:px-6 xl:px-12 max-w-[1590px]">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="section-label mb-4">How We Work</div>
          <h2 className="section-heading">
            Here's How We Make<br />
            Roofing Easy-Peasy
          </h2>
        </div>

        {/* Steps Bar - Desktop */}
        <div className="hidden md:flex mb-12">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`flex-1 flex items-center justify-center gap-3 py-4 transition-colors ${activeStep === step.id
                  ? "bg-accent text-accent-foreground"
                  : "bg-light text-foreground hover:bg-light/80"
                }`}
            >
              <step.icon className="w-5 h-5" />
              <span className="font-heading text-base font-bold uppercase">
                {step.label}
              </span>
            </button>
          ))}
        </div>

        {/* Steps Bar - Mobile */}
        <div className="flex flex-col md:hidden gap-2 mb-8">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`flex items-center gap-3 px-4 py-3 transition-colors ${activeStep === step.id
                  ? "bg-accent text-accent-foreground"
                  : "bg-light text-foreground"
                }`}
            >
              <step.icon className="w-5 h-5" />
              <span className="font-heading text-base font-bold uppercase">
                {step.label}
              </span>
            </button>
          ))}
        </div>

        {/* Step Content */}
        <div className="text-center max-w-2xl mx-auto animate-fade-in" key={activeStep}>
          <h3
            className="font-heading text-3xl md:text-4xl font-semibold uppercase mb-6"
            style={{ letterSpacing: "-1px" }}
          >
            {currentStep.title}
          </h3>
          <p
            className="font-body text-lg md:text-xl opacity-80"
            style={{ lineHeight: "28px", letterSpacing: "-0.36px" }}
          >
            {currentStep.description}
          </p>
        </div>
      </div>
    </section>
  );
}
