export interface BlogDetail {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  authorAvatar: string;
  authorBio: string;
  featuredImage: string;
  introContent: string[];
  sections: BlogSection[];
  relatedBlogs?: string[]; // IDs of related blogs
}

export interface BlogSection {
  heading: string;
  content: string[];
  lists?: {
    items: string[];
    type?: 'bullet' | 'numbered';
  }[];
}

export const blogDetails: BlogDetail[] = [
  {
    id: "2",
    slug: "choosing-the-right-roofing-material",
    title: "CHOOSING THE RIGHT ROOFING MATERIAL: A HOMEOWNER'S SIMPLE GUIDE",
    category: "GUIDES",
    date: "JUL 5, 2025",
    author: "BRAMWELL CUTTER",
    authorAvatar: "/image/bramwell-cutter.png",
    authorBio: "Bram is the heart and hammer behind the company. With over two decades of hands-on roofing experience, he's seen it all—from tiny old barns to sleek modern homes with solar panels.",
    featuredImage: "/image/blog-2.jpg",
    introContent: [
      "Standing in front of a roofing showroom (or Googling your heart out) and thinking, \"Wait, there are how many kinds of shingles?\" Yeah, we've all been there.",
      "Picking the right roofing material might feel overwhelming, but it doesn't have to be.",
      "Here's a no-pressure, plain-English guide to help you pick a roof that fits your home, your climate, and your budget."
    ],
    sections: [
      {
        heading: "STEP 1: CONSIDER YOUR CLIMATE",
        content: [
          "Not all roofing materials perform the same way everywhere. Some are made for the blazing sun, some for heavy snow, and some for everything in between.",
          "Match your roof to your weather:"
        ],
        lists: [
          {
            type: 'bullet',
            items: [
              "Hot & sunny? Go for light-colored or reflective materials like metal or cool shingles.",
              "Rainy & humid? Choose mold- and algae-resistant shingles (like asphalt).",
              "Cold & snowy? Consider materials like asphalt, metal, or composite that hold up best.",
              "Windy areas? Look for impact-rated shingles or materials designed to resist high winds."
            ]
          }
        ]
      },
      {
        heading: "STEP 2: KNOW YOUR MATERIAL OPTIONS",
        content: [
          "Each roofing material comes with its own pros, cons, and price tags. Let's break down the big players:"
        ],
        lists: [
          {
            type: 'numbered',
            items: [
              "Asphalt Shingles - Affordable and easy to install, Available in many colors and styles, Lifespan: 15–25 years, Great for: Budget-friendly projects",
              "Metal Roofing - Super durable, fire-resistant, Reflects heat, lowers cooling costs, Lifespan: 40–70 years, Great for: Hot climates, modern styles, long-term savings",
              "Clay or Concrete Tiles - Classic, high-end appearance, Extremely weather-durable, Lifespan: 50–100 years, Great for: Mediterranean or Spanish-style homes",
              "Slate Roofing - Natural stone, beautiful and strong, One of the longest-lasting options, Lifespan: 75–100+ years, Great for: Luxury homes and historic architecture",
              "Synthetic or Composite Shingles - Mimic wood, slate, or tile—but lighter and more affordable, Low maintenance, Lifespan: 30–50 years, Great for: Homeowners who want style + performance"
            ]
          }
        ]
      },
      {
        heading: "STEP 3: THINK ABOUT STYLE AND CURB APPEAL",
        content: [
          "Sure, function matters. But let's be real—you also want a roof that looks good. Your roofing material should match your home's style and enhance its appearance.",
          "Style tips:"
        ],
        lists: [
          {
            type: 'bullet',
            items: [
              "Traditional homes often pair well with dimensional asphalt shingles.",
              "Metal roofing looks stunning on modern, farmhouse, or cabin-style homes.",
              "Clay or slate roofs create timeless elegance for high-end or historic houses.",
              "Tile or cedar roofs bring character and charm to Mediterranean homes."
            ]
          }
        ]
      },
      {
        heading: "STEP 4: BUDGET WISELY (AND THINK LONG-TERM)",
        content: [
          "It's tempting to go with the cheapest option now—but it might not be the cheapest in the long run. Consider the full picture: installation cost + maintenance + lifespan.",
          "Ask yourself:"
        ],
        lists: [
          {
            type: 'bullet',
            items: [
              "How long do you plan to stay in this home?",
              "Do you want the lowest upfront cost or long-term value?",
              "Are there rebates or tax credits that might qualify for rebates?"
            ]
          }
        ]
      }
    ],
    relatedBlogs: ["3", "8", "11"]
  },
  {
    id: "3",
    slug: "roof-repair-vs-replacement",
    title: "ROOF REPAIR VS. REPLACEMENT: HOW TO MAKE THE RIGHT CALL",
    category: "GUIDES",
    date: "JUN 23, 2025",
    author: "THAYER JUNO",
    authorAvatar: "/image/thayer-juno.png",
    authorBio: "Thayer is a roofing specialist with over 15 years of experience helping homeowners make informed decisions about their roofs.",
    featuredImage: "/image/blog-3.jpg",
    introContent: [
      "You've noticed some issues with your roof. Maybe there's a leak, missing shingles, or just general wear and tear.",
      "Now comes the big question: Should you repair it or replace the whole thing?",
      "Let's break down how to make the right call for your home and your wallet."
    ],
    sections: [
      {
        heading: "STEP 1: ASSESS THE DAMAGE",
        content: [
          "The first step is understanding what you're dealing with. Not all roof problems require a full replacement.",
          "Common issues that can often be repaired:"
        ],
        lists: [
          {
            type: 'bullet',
            items: [
              "A few missing or damaged shingles",
              "Minor leaks in one area",
              "Damaged flashing around chimneys or vents",
              "Small areas of wear and tear"
            ]
          }
        ]
      },
      {
        heading: "STEP 2: CONSIDER THE AGE OF YOUR ROOF",
        content: [
          "Age matters. A lot. If your roof is relatively new, repairs usually make sense. If it's near the end of its lifespan, replacement might be the smarter investment.",
          "Typical roof lifespans:"
        ],
        lists: [
          {
            type: 'bullet',
            items: [
              "Asphalt shingles: 15–25 years",
              "Metal roofing: 40–70 years",
              "Tile roofing: 50–100 years",
              "Slate roofing: 75–100+ years"
            ]
          }
        ]
      },
      {
        heading: "STEP 3: CALCULATE THE COST",
        content: [
          "Sometimes the math makes the decision for you. If repair costs are approaching 50% or more of a replacement cost, it's usually better to replace.",
          "Consider:"
        ],
        lists: [
          {
            type: 'bullet',
            items: [
              "Cost of current repairs",
              "Likelihood of future repairs",
              "Long-term value of a new roof",
              "Energy efficiency improvements with new materials"
            ]
          }
        ]
      }
    ],
    relatedBlogs: ["2", "8", "11"]
  },
  {
    id: "8",
    slug: "roof-repair-vs-replacement-what-you-need",
    title: "ROOF REPAIR VS. REPLACEMENT: HOW TO KNOW WHAT YOU REALLY NEED",
    category: "GUIDES",
    date: "JUN 23, 2025",
    author: "THAYER JUNO",
       authorAvatar: "/image/thayer-juno.png",
    authorBio: "Thayer is a roofing specialist with over 15 years of experience helping homeowners make informed decisions about their roofs.",
    featuredImage: "/image/blog-8.jpg",
    introContent: [
      "Facing roof issues can be stressful. The big question is always: repair or replace?",
      "This guide will help you understand the key factors to consider when making this important decision.",
      "Let's dive into what you really need to know."
    ],
    sections: [
      {
        heading: "UNDERSTANDING THE DIFFERENCE",
        content: [
          "Repairs are targeted fixes for specific problems. Replacement means installing a completely new roof system.",
          "Key considerations:"
        ],
        lists: [
          {
            type: 'bullet',
            items: [
              "Extent of damage",
              "Age of current roof",
              "Budget constraints",
              "Long-term plans for your home"
            ]
          }
        ]
      },
      {
        heading: "WHEN TO REPAIR",
        content: [
          "Repairs make sense when the damage is localized and your roof is relatively young.",
          "Good candidates for repair:"
        ],
        lists: [
          {
            type: 'bullet',
            items: [
              "Roof is less than 15 years old",
              "Damage affects less than 30% of the roof",
              "No structural issues",
              "Budget is tight right now"
            ]
          }
        ]
      },
      {
        heading: "WHEN TO REPLACE",
        content: [
          "Sometimes replacement is the only sensible option, even if it costs more upfront.",
          "Signs you need replacement:"
        ],
        lists: [
          {
            type: 'bullet',
            items: [
              "Roof is 20+ years old",
              "Widespread damage or multiple problem areas",
              "Sagging or structural issues",
              "Frequent repairs becoming costly"
            ]
          }
        ]
      }
    ],
    relatedBlogs: ["2", "3", "11"]
  },
  {
    id: "11",
    slug: "roof-replacement-guide",
    title: "ROOF REPLACEMENT GUIDE: WHAT TO EXPECT (AND HOW TO STAY SANE)",
    category: "GUIDES",
    date: "MAY 10, 2025",
    author: "BRAMWELL CUTTER",
    authorAvatar: "/image/bramwell-cutter.png",
    authorBio: "Bram is the heart and hammer behind the company. With over two decades of hands-on roofing experience, he's seen it all—from tiny old barns to sleek modern homes with solar panels.",
    featuredImage: "/image/blog-1.jpg",
    introContent: [
      "Getting a new roof is a big deal. It's noisy, it's messy, and it's expensive.",
      "But it doesn't have to be stressful if you know what to expect.",
      "Here's your complete guide to surviving (and thriving through) a roof replacement."
    ],
    sections: [
      {
        heading: "BEFORE THE PROJECT STARTS",
        content: [
          "Preparation is key to a smooth roof replacement. Here's what you should do before the crew arrives:",
          "Pre-project checklist:"
        ],
        lists: [
          {
            type: 'bullet',
            items: [
              "Clear your driveway and garage for equipment access",
              "Move vehicles away from the house",
              "Remove wall decorations (vibrations can knock things down)",
              "Cover items in your attic",
              "Inform your neighbors about the project"
            ]
          }
        ]
      },
      {
        heading: "DURING THE REPLACEMENT",
        content: [
          "The actual replacement typically takes 1-3 days depending on your roof size and complexity.",
          "What to expect:"
        ],
        lists: [
          {
            type: 'bullet',
            items: [
              "Loud noises throughout the day",
              "Debris and dust (even inside sometimes)",
              "Workers on your property",
              "Temporary disruption to satellite/internet",
              "Daily cleanup by the crew"
            ]
          }
        ]
      },
      {
        heading: "AFTER COMPLETION",
        content: [
          "Once the new roof is installed, there are still a few important steps:",
          "Post-installation tasks:"
        ],
        lists: [
          {
            type: 'bullet',
            items: [
              "Final walkthrough with your contractor",
              "Magnet sweep for stray nails",
              "Gutter cleaning",
              "Documentation and warranty registration",
              "Schedule a follow-up inspection"
            ]
          }
        ]
      }
    ],
    relatedBlogs: ["2", "3", "8"]
  },
  {
    id: "1",
    slug: "7-easy-ways-to-make-your-roof-last-longer",
    title: "7 EASY WAYS TO MAKE YOUR ROOF LAST LONGER",
    category: "TIPS",
    date: "JUN 22, 2025",
    author: "THAYER JUNO",
    authorAvatar: "/image/thayer-juno.png",
    authorBio: "Thayer is a roofing specialist with over 15 years of experience helping homeowners make informed decisions about their roofs.",
    featuredImage: "/image/blog-1.jpg",
    introContent: [
      "Your roof is one of the biggest investments you'll make in your home. The good news? A little maintenance goes a long way.",
      "You don't need to be a roofing expert to keep your roof in great shape. Just follow these simple tips.",
      "Here are 7 easy ways to extend your roof's lifespan and save money in the long run."
    ],
    sections: [
      {
        heading: "1. KEEP YOUR GUTTERS CLEAN",
        content: [
          "Clogged gutters can cause water to back up and damage your roof, fascia, and even your home's foundation.",
          "Clean your gutters at least twice a year—more often if you have trees nearby."
        ]
      },
      {
        heading: "2. TRIM OVERHANGING BRANCHES",
        content: [
          "Tree branches rubbing against your roof can wear down shingles and create entry points for water.",
          "Trim back any branches that hang over or touch your roof to prevent damage."
        ]
      },
      {
        heading: "3. INSPECT YOUR ROOF REGULARLY",
        content: [
          "Catch small problems before they become big, expensive ones.",
          "Do a visual inspection from the ground twice a year, and after major storms."
        ],
        lists: [
          {
            type: 'bullet',
            items: [
              "Look for missing, cracked, or curling shingles",
              "Check for moss or algae growth",
              "Inspect flashing around chimneys and vents",
              "Look for signs of sagging or water damage"
            ]
          }
        ]
      },
      {
        heading: "4. REMOVE MOSS AND ALGAE",
        content: [
          "Moss and algae can trap moisture and cause your shingles to deteriorate faster.",
          "Use a roof-safe cleaner or hire a professional to remove growth safely."
        ]
      },
      {
        heading: "5. ENSURE PROPER ATTIC VENTILATION",
        content: [
          "Poor ventilation can cause heat and moisture buildup, leading to premature roof aging.",
          "Make sure your attic has adequate intake and exhaust vents to keep air flowing."
        ]
      },
      {
        heading: "6. FIX SMALL PROBLEMS IMMEDIATELY",
        content: [
          "A small leak or missing shingle might not seem like a big deal, but it can quickly turn into major damage.",
          "Address repairs as soon as you notice them to prevent costly problems down the road."
        ]
      },
      {
        heading: "7. SCHEDULE PROFESSIONAL INSPECTIONS",
        content: [
          "Even if everything looks fine, it's smart to have a professional inspect your roof every few years.",
          "They can spot issues you might miss and help you plan for future maintenance or replacement."
        ]
      }
    ],
    relatedBlogs: ["2", "4", "9"]
  },
  {
    id: "4",
    slug: "6-early-signs-your-roof-needs-attention",
    title: "SPOT IT BEFORE IT LEAKS: 6 EARLY SIGNS YOUR ROOF NEEDS ATTENTION",
    category: "TIPS",
    date: "JUL 5, 2025",
    author: "THAYER JUNO",
    authorAvatar: "/image/thayer-juno.png",
    authorBio: "Thayer is a roofing specialist with over 15 years of experience helping homeowners make informed decisions about their roofs.",
    featuredImage: "/image/blog-5.jpg",
    introContent: [
      "Most roof problems don't announce themselves with a dramatic leak. They start small and quiet.",
      "The key to avoiding expensive repairs? Catching issues early.",
      "Here are 6 warning signs that your roof needs attention—before it starts leaking."
    ],
    sections: [
      {
        heading: "1. MISSING OR DAMAGED SHINGLES",
        content: [
          "After a storm or high winds, check your roof for missing, cracked, or curling shingles.",
          "Even a few damaged shingles can let water seep in and cause bigger problems."
        ]
      },
      {
        heading: "2. GRANULES IN YOUR GUTTERS",
        content: [
          "Asphalt shingles are coated with protective granules. As they age, these granules wash off.",
          "If you notice a lot of granules collecting in your gutters, your shingles may be nearing the end of their lifespan."
        ]
      },
      {
        heading: "3. DARK STREAKS OR STAINS",
        content: [
          "Dark streaks on your roof are usually caused by algae or moss growth.",
          "While not immediately dangerous, they can trap moisture and accelerate shingle deterioration."
        ]
      },
      {
        heading: "4. SAGGING ROOF DECK",
        content: [
          "A sagging roof is a serious red flag. It could indicate structural damage, water damage, or rot.",
          "If you notice any sagging, call a professional immediately."
        ]
      },
      {
        heading: "5. WATER STAINS ON CEILINGS OR WALLS",
        content: [
          "Water stains inside your home are a clear sign that water is getting through your roof.",
          "Don't ignore these—they indicate an active leak that needs immediate attention."
        ]
      },
      {
        heading: "6. INCREASED ENERGY BILLS",
        content: [
          "If your heating or cooling costs suddenly spike, your roof might be to blame.",
          "Poor insulation or ventilation can make your HVAC system work harder, driving up energy costs."
        ]
      }
    ],
    relatedBlogs: ["1", "9", "2"]
  },
  {
    id: "5",
    slug: "roofing-industry-update-2025",
    title: "ROOFING INDUSTRY UPDATE 2025: WHAT'S CHANGING (AND WHAT IT MEANS FOR YOU)",
    category: "NEWS",
    date: "JUN 22, 2025",
    author: "THAYER JUNO",
      authorAvatar: "/image/thayer-juno.png",
    authorBio: "Thayer is a roofing specialist with over 15 years of experience helping homeowners make informed decisions about their roofs.",
    featuredImage: "/image/blog-8.jpg",
    introContent: [
      "The roofing industry is evolving fast. New materials, regulations, and technologies are changing how we protect our homes.",
      "Whether you're planning a roof replacement or just curious about what's new, here's what you need to know.",
      "Let's break down the biggest changes in 2025 and what they mean for homeowners."
    ],
    sections: [
      {
        heading: "NEW ENERGY EFFICIENCY STANDARDS",
        content: [
          "Many states are implementing stricter energy codes that affect roofing materials and installation.",
          "Cool roofs and reflective materials are becoming more popular to meet these standards."
        ]
      },
      {
        heading: "SUSTAINABLE ROOFING MATERIALS",
        content: [
          "Eco-friendly options like recycled shingles, metal roofing, and solar tiles are gaining traction.",
          "These materials not only help the environment but can also qualify for tax credits and rebates."
        ]
      },
      {
        heading: "ADVANCED INSTALLATION TECHNIQUES",
        content: [
          "New installation methods are improving roof durability and weather resistance.",
          "Contractors are using better underlayment, improved flashing, and enhanced ventilation systems."
        ]
      },
      {
        heading: "SMART ROOF TECHNOLOGY",
        content: [
          "Smart sensors and monitoring systems can now detect leaks, temperature changes, and structural issues.",
          "These technologies help homeowners catch problems early and extend roof lifespan."
        ]
      },
      {
        heading: "LABOR SHORTAGES AND PRICING",
        content: [
          "The roofing industry is facing a skilled labor shortage, which may affect project timelines and costs.",
          "Planning ahead and booking early can help you avoid delays and price increases."
        ]
      }
    ],
    relatedBlogs: ["10", "2", "11"]
  },
  {
    id: "6",
    slug: "roofaria-best-roofing-company-2025",
    title: "WE WON! ROOFARIA NAMED BEST ROOFING COMPANY OF 2025 🏆",
    category: "NEWS",
    date: "MAY 14, 2025",
    author: "BRAMWELL CUTTER",
    authorAvatar: "/image/bramwell-cutter.png",
    authorBio: "Bram is the heart and hammer behind the company. With over two decades of hands-on roofing experience, he's seen it all—from tiny old barns to sleek modern homes with solar panels.",
    featuredImage: "/image/blog-10.jpg",
    introContent: [
      "We're thrilled to announce that Roofaria has been named the Best Roofing Company of 2025!",
      "This award belongs to our amazing team and, most importantly, to you—our incredible customers.",
      "Here's what this recognition means and how we plan to keep raising the bar."
    ],
    sections: [
      {
        heading: "WHAT THIS AWARD MEANS TO US",
        content: [
          "Being recognized as the best in our industry is an incredible honor, but it's also a responsibility.",
          "It means we're doing something right, and it motivates us to keep improving every single day."
        ]
      },
      {
        heading: "THANK YOU TO OUR CUSTOMERS",
        content: [
          "This award wouldn't be possible without your trust and support.",
          "Every review, referral, and kind word has helped us grow and improve our services."
        ]
      },
      {
        heading: "OUR COMMITMENT MOVING FORWARD",
        content: [
          "Winning this award is just the beginning. We're committed to:",
          ""
        ],
        lists: [
          {
            type: 'bullet',
            items: [
              "Maintaining the highest quality standards",
              "Providing exceptional customer service",
              "Using the best materials and techniques",
              "Staying ahead of industry trends",
              "Supporting our local community"
            ]
          }
        ]
      },
      {
        heading: "WHAT'S NEXT FOR ROOFARIA",
        content: [
          "We're expanding our services, investing in new technology, and training our team to deliver even better results.",
          "We can't wait to serve you and continue earning your trust for years to come."
        ]
      }
    ],
    relatedBlogs: ["7", "5", "10"]
  },
  {
    id: "7",
    slug: "storm-restoration-10-roofs",
    title: "HOW WE HELPED RESTORE 10 ROOFS AFTER LAST MONTH'S STORM",
    category: "NEWS",
    date: "MAY 14, 2025",
    author: "BRAMWELL CUTTER",
    authorAvatar: "/image/bramwell-cutter.png",
    authorBio: "Bram is the heart and hammer behind the company. With over two decades of hands-on roofing experience, he's seen it all—from tiny old barns to sleek modern homes with solar panels.",
    featuredImage: "/image/blog-1.jpg",
    introContent: [
      "Last month's storm hit our community hard. High winds, heavy rain, and hail left many homes damaged.",
      "Our team jumped into action, working around the clock to help families get back to normal.",
      "Here's a behind-the-scenes look at how we restored 10 roofs in record time."
    ],
    sections: [
      {
        heading: "IMMEDIATE RESPONSE",
        content: [
          "Within hours of the storm passing, we were fielding calls from worried homeowners.",
          "We prioritized emergency repairs—tarping damaged areas to prevent further water damage."
        ]
      },
      {
        heading: "DAMAGE ASSESSMENT",
        content: [
          "Our team conducted thorough inspections to assess the extent of damage.",
          "We documented everything for insurance claims and provided detailed repair estimates."
        ]
      },
      {
        heading: "COORDINATING WITH INSURANCE",
        content: [
          "We worked directly with insurance adjusters to ensure homeowners got fair coverage.",
          "Our experience with storm damage claims helped speed up the approval process."
        ]
      },
      {
        heading: "QUALITY REPAIRS",
        content: [
          "Despite the time pressure, we never compromised on quality.",
          "Each roof was repaired or replaced using premium materials and proper installation techniques."
        ]
      },
      {
        heading: "LESSONS LEARNED",
        content: [
          "This experience reinforced the importance of regular roof maintenance and inspections.",
          "Homes with well-maintained roofs suffered significantly less damage during the storm."
        ]
      }
    ],
    relatedBlogs: ["1", "4", "11"]
  },
  {
    id: "9",
    slug: "prepare-roof-rainy-season",
    title: "HOW TO PREPARE YOUR ROOF FOR THE RAINY SEASON WITHOUT LOSING YOUR MIND",
    category: "TIPS",
    date: "JUN 22, 2025",
    author: "THAYER JUNO",
       authorAvatar: "/image/thayer-juno.png",
    authorBio: "Thayer is a roofing specialist with over 15 years of experience helping homeowners make informed decisions about their roofs.",
    featuredImage: "/image/blog-3.jpg",
    introContent: [
      "Rainy season is coming. Is your roof ready?",
      "A little preparation now can save you from leaks, water damage, and expensive repairs later.",
      "Here's your simple, stress-free guide to weatherproofing your roof before the storms arrive."
    ],
    sections: [
      {
        heading: "STEP 1: INSPECT YOUR ROOF",
        content: [
          "Start with a visual inspection from the ground. Look for obvious damage or wear.",
          "What to check:"
        ],
        lists: [
          {
            type: 'bullet',
            items: [
              "Missing, cracked, or curling shingles",
              "Damaged flashing around chimneys and vents",
              "Moss or algae growth",
              "Sagging areas or visible damage"
            ]
          }
        ]
      },
      {
        heading: "STEP 2: CLEAN YOUR GUTTERS",
        content: [
          "Clogged gutters can cause water to overflow and damage your roof and foundation.",
          "Remove leaves, debris, and check that downspouts are clear and directing water away from your home."
        ]
      },
      {
        heading: "STEP 3: TRIM OVERHANGING BRANCHES",
        content: [
          "Heavy rain and wind can cause branches to break and damage your roof.",
          "Trim back any trees that hang over or touch your roof."
        ]
      },
      {
        heading: "STEP 4: CHECK YOUR ATTIC",
        content: [
          "Look for signs of leaks, water stains, or poor ventilation in your attic.",
          "Proper ventilation prevents moisture buildup that can damage your roof from the inside."
        ]
      },
      {
        heading: "STEP 5: SCHEDULE A PROFESSIONAL INSPECTION",
        content: [
          "A professional can spot issues you might miss and make repairs before the rain starts.",
          "It's a small investment that can prevent major problems."
        ]
      },
      {
        heading: "STEP 6: MAKE NECESSARY REPAIRS",
        content: [
          "Don't wait until it's raining to fix problems. Address repairs now while the weather is dry.",
          "Even small issues can turn into big leaks during heavy rain."
        ]
      }
    ],
    relatedBlogs: ["1", "4", "2"]
  },
  {
    id: "10",
    slug: "roofing-trends-2025",
    title: "ROOFING TRENDS 2025: WHAT'S HOT (AND WHAT'S HERE TO STAY)",
    category: "NEWS",
    date: "APR 9, 2025",
    author: "BRAMWELL CUTTER",
    authorAvatar: "/image/bramwell-cutter.png",
    authorBio: "Bram is the heart and hammer behind the company. With over two decades of hands-on roofing experience, he's seen it all—from tiny old barns to sleek modern homes with solar panels.",
    featuredImage: "/image/blog-5.jpg",
    introContent: [
      "The roofing world is changing fast. New materials, colors, and technologies are reshaping how we think about roofs.",
      "Whether you're planning a replacement or just curious about what's trending, we've got you covered.",
      "Here are the biggest roofing trends of 2025—and which ones are worth your attention."
    ],
    sections: [
      {
        heading: "SUSTAINABLE AND ECO-FRIENDLY MATERIALS",
        content: [
          "Green roofing is no longer a niche trend—it's going mainstream.",
          "Popular eco-friendly options include:"
        ],
        lists: [
          {
            type: 'bullet',
            items: [
              "Recycled shingles made from reclaimed materials",
              "Metal roofing (highly recyclable and energy-efficient)",
              "Solar tiles that generate electricity",
              "Cool roofs that reflect sunlight and reduce cooling costs"
            ]
          }
        ]
      },
      {
        heading: "BOLD COLORS AND MODERN AESTHETICS",
        content: [
          "Homeowners are moving away from traditional grays and browns.",
          "Dark charcoals, deep blues, and even black roofs are gaining popularity for their modern, sleek look."
        ]
      },
      {
        heading: "SMART ROOF TECHNOLOGY",
        content: [
          "Technology is making roofs smarter and more efficient.",
          "Innovations include leak detection sensors, temperature monitoring, and integrated solar panels."
        ]
      },
      {
        heading: "METAL ROOFING CONTINUES TO RISE",
        content: [
          "Metal roofs are durable, energy-efficient, and available in a variety of styles.",
          "They're becoming a top choice for modern homes, farmhouses, and eco-conscious homeowners."
        ]
      },
      {
        heading: "ARCHITECTURAL SHINGLES",
        content: [
          "Dimensional or architectural shingles offer a high-end look at a reasonable price.",
          "They're thicker, more durable, and add depth and texture to your roof."
        ]
      }
    ],
    relatedBlogs: ["5", "2", "6"]
  },
  {
    id: "12",
    slug: "5-smart-roofing-tips",
    title: "5 SMART ROOFING TIPS EVERY HOMEOWNER SHOULD KNOW",
    category: "TIPS",
    date: "MAY 14, 2025",
    author: "BRAMWELL CUTTER",
    authorAvatar: "/image/bramwell-cutter.png",
    authorBio: "Bram is the heart and hammer behind the company. With over two decades of hands-on roofing experience, he's seen it all—from tiny old barns to sleek modern homes with solar panels.",
    featuredImage: "/image/blog-10.jpg",
    introContent: [
      "Your roof is one of your home's most important features, yet it's often overlooked—until there's a problem.",
      "A little knowledge can go a long way in protecting your investment and avoiding costly repairs.",
      "Here are 5 smart roofing tips every homeowner should know."
    ],
    sections: [
      {
        heading: "1. KNOW YOUR ROOF'S AGE AND LIFESPAN",
        content: [
          "Different roofing materials have different lifespans. Knowing when your roof was installed helps you plan for maintenance and replacement.",
          "Typical lifespans:"
        ],
        lists: [
          {
            type: 'bullet',
            items: [
              "Asphalt shingles: 15-25 years",
              "Metal roofing: 40-70 years",
              "Tile roofing: 50-100 years",
              "Slate roofing: 75-100+ years"
            ]
          }
        ]
      },
      {
        heading: "2. INSPECT YOUR ROOF TWICE A YEAR",
        content: [
          "Regular inspections help you catch small problems before they become big, expensive ones.",
          "Do a visual check from the ground in spring and fall, and after major storms."
        ]
      },
      {
        heading: "3. DON'T IGNORE SMALL LEAKS",
        content: [
          "A small leak might seem minor, but it can quickly lead to mold, rot, and structural damage.",
          "Address leaks immediately to prevent costly repairs down the road."
        ]
      },
      {
        heading: "4. INVEST IN PROPER VENTILATION",
        content: [
          "Good attic ventilation extends your roof's lifespan by preventing heat and moisture buildup.",
          "It also helps regulate your home's temperature and reduces energy costs."
        ]
      },
      {
        heading: "5. HIRE A PROFESSIONAL FOR MAJOR WORK",
        content: [
          "While DIY repairs might seem tempting, roofing is dangerous and requires specialized skills.",
          "Hiring a licensed, insured professional ensures the job is done safely and correctly."
        ]
      }
    ],
    relatedBlogs: ["1", "4", "9"]
  }
];

// Helper function to get blog detail by slug
export const getBlogDetailBySlug = (slug: string): BlogDetail | undefined => {
  return blogDetails.find(blog => blog.slug === slug);
};

// Helper function to get blog detail by ID
export const getBlogDetailById = (id: string): BlogDetail | undefined => {
  return blogDetails.find(blog => blog.id === id);
};

