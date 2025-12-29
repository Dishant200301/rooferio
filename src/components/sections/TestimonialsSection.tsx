import { useState } from "react";
import { ChevronLeft, ChevronRight, Eye, EyeOff, Star, Asterisk, Command } from "lucide-react";

const badges = [
  {
    id: "google",
    icon: (
      <div className="relative w-5 h-5">
        <div className="absolute top-0 left-0 w-3.5 h-3.5 rounded-full bg-[#7c3aed] mix-blend-multiply" />
        <div className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-[#f97316] mix-blend-multiply" />
      </div>
    ),
    rating: "4.9",
    subtitle: "150+ Google Reviews",
    hasStar: true
  },
  {
    id: "yelp",
    icon: <div className="relative w-5 h-5">
        <img src="/image/review-2.svg" alt="" />
      </div>,
    rating: "5.00",
    subtitle: "200+ Yelp Reviews",
    hasStar: true
  },
  {
    id: "bbb",
    icon: <div className="relative w-5 h-5">
        <img src="/image/review-3.svg" alt="" />
      </div>,
    rating: "A+",
    subtitle: "BBB Rating",
    hasStar: false
  }
];

const reviews = [
  {
    id: 1,
    quote:
      "“I called three companies. One ghosted me, one gave me a quote that made me cry, and then I found Ridge & Nail Roofing. These guys were fast, funny, and absolutely nailed it — literally.”",
    name: "DAVE MULBERRY",
    meta: "House Owner, Austin, TX",
    image: "/image/reviewer-1.jpg",
    roofImage: "/image/portfolio-1.png",
    source: {
      rating: "4.9",
      count: "150+ Google Reviews",
      isGoogle: true
    }
  },
  {
    id: 2,
    quote:
      "“I thought I'd have to put buckets all over the office. Instead, Nate and the team fixed it in a flash and even cleaned up after themselves. My roof and my sanity are both saved.”",
    name: "ELLIS GRANGER",
    meta: "House Owner, Austin, TX",
    image: "/image/reviewer-2.jpg",
    roofImage: "/image/portfolio-2.png",
    source: {
      rating: "5.00",
      count: "200+ Yelp Reviews",
      isYelp: true
    }
  },
  {
    id: 3,
    quote:
      "“The team arrived on time, worked efficiently, and left the site cleaner than they found it. The new roof looks fantastic and has already weathered a major storm without issues.”",
    name: "SARAH JENKINS",
    meta: "Business Owner, Dallas, TX",
    image: "/image/reviewer-1.jpg",
    roofImage: "/image/portfolio-3.png",
    source: {
      rating: "4.9",
      count: "150+ Google Reviews",
      isGoogle: true
    }
  },
  {
    id: 4,
    quote:
      "“Professional, courteous, and transparent pricing. They explained every step of the process and delivered exactly what was promised. Highly recommend for any roofing needs.”",
    name: "MICHAEL CHANG",
    meta: "Homeowner, Houston, TX",
    image: "/image/reviewer-2.jpg",
    roofImage: "/image/portfolio-4.png",
    source: {
      rating: "A+",
      count: "BBB Rating",
      isBBB: true
    }
  },
];

const ReviewCard = ({ review }: { review: typeof reviews[0] }) => {
  const [showImage, setShowImage] = useState(false);

  return (
    <div className="bg-white pt-12 pb-8 px-8 md:px-12 relative shadow-sm border border-gray-100 flex flex-col justify-between min-h-[420px]">
     

      {/* Content Area with Animation */}
      <div className="relative flex-1 overflow-hidden">
        {/* Quote Text */}
        <div
          className={`transition-all duration-500 ease-in-out transform ${showImage ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
        >
          <p className="font-body text-[20px] md:text-[22px] font-bold text-[#1a1a1a] leading-[1.5] mt-6">
            {review.quote}
          </p>
        </div>

        {/* Image Overlay */}
        <div
          className={`absolute inset-0 w-full h-full transition-transform duration-500 ease-in-out ${showImage ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
          <img
            src={review.roofImage}
            alt="Roof work"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-end justify-between border-t border-gray-100 pt-8 mt-8 relative z-10 bg-white">
        <div>
          <h4 className="font-heading text-[18px] font-black uppercase text-[#1a1a1a] mb-1 tracking-tight">
            {review.name}
          </h4>
          <p className="font-body text-[13px] text-gray-500 font-semibold">
            {review.meta}
          </p>
        </div>

        <div className="flex items-center gap-0">
          <img
            src={review.image}
            alt={review.name}
            className="w-14 h-14 object-cover"
          />
          <button
            onClick={() => setShowImage(!showImage)}
            className="w-14 h-14 bg-[#f5f5f5] flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            {showImage ? (
              <EyeOff className="w-6 h-6 text-black" />
            ) : (
              <Eye className="w-6 h-6 text-black" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Calculate visible reviews for infinite loop effect
  const visibleReviews = [
    reviews[currentIndex],
    reviews[(currentIndex + 1) % reviews.length]
  ];

  return (
    <section className="bg-[#f9f9f9] py-20 md:py-28">
      <div className="container mx-auto px-5 md:px-12 lg:px-6 xl:px-12 max-w-[1590px]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-3 mb-6">
            <span className="w-2.5 h-2.5 bg-orange-500" />
            <span className="text-[15px] font-bold uppercase tracking-[0.15em] text-[#1a1a1a] font-heading">
              Reviews
            </span>
            <span className="w-2.5 h-2.5 bg-orange-500" />
          </div>
          <h2 className="font-heading text-[42px] md:text-[64px] font-black uppercase leading-[0.9] text-[#1a1a1a] tracking-tight">
            Don't Take Our Word<br />
            For It — Take Theirs
          </h2>
        </div>

        {/* Badges Section */}
        <div className="relative max-w-7xl mx-auto mb-10 pb-0">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gray-200 -translate-y-1/2 hidden md:block" />

          <div className="flex flex-wrap justify-center md:justify-between gap-6 relative z-10">
            {badges.map((badge) => (
              <div key={badge.id} className="bg-white p-4 flex items-center gap-4 min-w-[280px] shadow-sm">
                <div className="w-12 h-12 bg-[#f5f5f5] flex items-center justify-center shrink-0">
                  {badge.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-heading text-[24px] font-bold text-[#1a1a1a] leading-none">{badge.rating}</span>
                    {badge.hasStar && <Star className="w-4 h-4 fill-orange-500 text-orange-500" />}
                  </div>
                  <p className="font-body text-[12px] font-bold text-[#1a1a1a] mt-1">{badge.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {visibleReviews.map((review, index) => (
            <ReviewCard key={`${review.id}-${index}`} review={review} />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-3">
          <button
            onClick={prevSlide}
            className="w-12 h-12 bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
