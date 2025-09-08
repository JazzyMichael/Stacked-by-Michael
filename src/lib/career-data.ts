type Career = {
  company: {
    name: string;
    logo: string;
    location: string;
    overview: string;
  };
  role: string;
  dateRange: string;
  techKeywords: string;
  highlights: string[];
};

export const experience: Career[] = [
  {
    company: {
      name: "Goji Systems",
      logo: "/career/goji-systems.png",
      location: "Blue Bell, PA",
      overview: "Kiosks for Restaurants",
    },
    role: "Fullstack Software Engineer",
    dateRange: "March 2018 - May 2019",
    techKeywords:
      "Javascript, Angular, Node, Express, RethinkDB, Socket.io, UDP, Chrome App, PWA, Card-Present Payments",
    highlights: [
      "Architected a UDP scanning system to manage hardware integrations for self-ordering restaurant kiosks streamlining device setups and remote management.",
      "Added card-present payment processing with Spin and Tenerum gateways, enabling secure in-person transactions for thousands of daily customers with an owner’s dashboard for management and reporting.",
      "Created a flexible receipt printing system supporting custom branding for Epson and Bixolon printers.",
      "Built a feature-rich dashboard for restaurant admins, complete with RBAC, REST APIs, optimized database queries, and complex client-side state management.",
    ],
  },
  {
    company: {
      name: "Ownable",
      logo: "/career/ownable.jpeg",
      location: "Philadelphia, PA",
      overview: "Rent-to-Own Ecommerce & Financing",
    },
    role: "Fullstack Software Engineer",
    dateRange: "May 2019 - September 2019",
    techKeywords: "Javascript, Angular, C#, .NET Core, MongoDB, Paypal",
    highlights: [
      "Drop-shipping products from BestBuy using their API.",
      "Financing partnerships to offer lines of credit in the form of rental agreements.",
      "I launched a secondary site to sell items that were returned at a large discount.",
    ],
  },
  {
    company: {
      name: "MenuMash",
      logo: "/career/menu-mash.jpeg",
      location: "Philadelphia, PA",
      overview: "Tinder for Food",
    },
    role: "Founder",
    dateRange: "June 2019 - September 2019",
    techKeywords: "Ionic, Cordova/Capacitor, Angular, Firebase",
    highlights: [
      "Hybrid App with a swipe-to-like interface to find your next meal.",
      "Pulled data from EatStreet and linked users to their platform for ordering after using MenuMash to find their food.",
    ],
  },
  {
    company: {
      name: "Plebeian Marketplace",
      logo: "/career/plebeian.jpeg",
      location: "Philadelphia, PA",
      overview: "A seller-marketplace for artists",
    },
    role: "Co-Founder",
    dateRange: "August 2019 - March 2020",
    techKeywords: "Angular, Firebase, PWA, Stripe",
    highlights: [
      "Built the entire platform in one month.",
      "Custom rich text editor.",
      "Stripe Connect & Payment Processing",
      "PWA/TWA Hybrid App",
    ],
  },
  {
    company: {
      name: "goPuff",
      logo: "/career/gopuff.png",
      location: "Philadelphia, PA",
      overview: "Vertically Integrated Snack Delivery",
    },
    role: "Fullstack Software Engineer",
    dateRange: "September 2019 - March 2020",
    techKeywords: "Azure, Node, Typescript, Vue",
    highlights: [
      "Worked on the main consumer application using Vue for a Webview-based hybrid app.",
      "Azure functions and API design",
    ],
  },
  {
    company: {
      name: "Carona Stats",
      logo: "/career/carona.jpeg",
      location: "Philadelphia, PA",
      overview: "Coronavirus Stats",
    },
    role: "Founder",
    dateRange: "March 2020 - May 2020",
    techKeywords: "Svelte, Interactive Data Visualizations",
    highlights: [
      "As the pandemic was taking over the world, I was naturally inclined to launch a web app to show various data points.",
      "Svelte & Fancy UI Design",
    ],
  },
  {
    company: {
      name: "Essentials Anonymous",
      logo: "/career/essentials-anonymous.png",
      location: "Philadelphia, PA",
      overview: "Anonymous Social Network for Essential Workers",
    },
    role: "Founder",
    dateRange: "March 2020 - May 2020",
    techKeywords: "Ionic, Angular, Firebase",
    highlights: [
      "I used anonymous authentication with Firebase to create a place for people to discuss working experiences during the pandemic.",
      "Hybrid App rejected from the App Store",
    ],
  },
  {
    company: {
      name: "The Art of Cooking Salmon",
      logo: "/career/salmon.jpg",
      location: "Philadelphia, PA",
      overview:
        "Social network for salmon recipes withi client-side and cloud-side image optimizations",
    },
    role: "Founder",
    dateRange: "May 2020 - June 2020",
    techKeywords: "Angular, Firebase, Images",
    highlights: [
      "Fun project to build a fully-fledged Social Network, emphasizing a scalable database structure to support follower-following relationships and standard social network interactions.",
      "Cloud functions for resizing images and creating thumbnails.",
      "Client-side image editing and compression.",
    ],
  },
  {
    company: {
      name: "Bitovi (Consulting)",
      logo: "/career/bitovi.webp",
      location: "Remote",
      overview: "Consulting Agency with several clients",
    },
    role: "Frontend Software Engineer",
    dateRange: "June 2020 - June 2023",
    techKeywords: "Angular, React, Next.js, GraphQL, Azure, Typescript",
    highlights: [
      "Apple App Store Ads Platform",
      "KFC Online Ordering System",
      "Winklevoss Capital Landing Pages",
      "Nations Photo Lab Consumer Application",
    ],
  },
  {
    company: {
      name: "xTrades",
      logo: "/career/xtrades.jpg",
      location: "Remote",
      overview: "Stock Trading Community Platform",
    },
    role: "Frontend Software Engineer",
    dateRange: "September 2021 - November 2021",
    techKeywords: "Ionic, Angular, C#/.NET",
    highlights: [
      "A short-term contract to build a hybrid app with a small team",
    ],
  },
  {
    company: {
      name: "Perfect Gift (Wolfe LLC)",
      logo: "/career/perfect-gift.png",
      location: "Remote",
      overview: "Giftcard E-commerce Platform",
    },
    role: "Senior Fullstack Software Engineer",
    dateRange: "July 2023 - July 2024",
    techKeywords: "Next.js, React, Typescript, AWS EC2, Payment Processing",
    highlights: [
      "Developed custom fraud detection and payment integrations with Fiserv, Forter, and Stripe to reduce processing fees and identify suspicious transactions. I introduced shared Typescript SDKs allowing for each third-party integration to be maintained and reused across 3 teams working on consumer web applications.",
      "Streamlined the redemption flow for a digital gift card offering that reduced redemption-related customer support requests by 85% by refactoring the API and redesigning the user experience.",
      "Optimized state management by configuring React Query to cache and revalidate requests, added support for multiple shipping addresses, and turned stale graphics into SVG animations to elevate the user experience.",
    ],
  },
  {
    company: {
      name: "BinderView",
      logo: "/career/binderview.png",
      location: "Remote",
      overview: "1,000+ daily page views",
    },
    role: "Founder",
    dateRange: "September 2024 - Current",
    techKeywords: "Next.js, React, Typescript, Motion, Vercel, Analytics, SEO",
    highlights: [
      "Data-intensive application using caching and rendering strategies to provide the best possible user experience for viewing Pokemon cards.",
      "Incremental Static Regeneration is used to automatically update pages for each set of cards.",
      "Lots of user-centered customization features based on interacting with users & the community.",
    ],
  },
  {
    company: {
      name: "Melody Maker AI",
      logo: "/career/melody-maker.ico",
      location: "Remote",
      overview: "Vibe Coded with some human assistance",
    },
    role: "Founder",
    dateRange: "June 2025",
    techKeywords: "Next.js, Supabase, Replicate, Spotify, Typescript",
    highlights: [
      "Tried to use as much AI as possible to develop this with minimal 'manual' coding.",
      "API routes in Next to facilitate 3rd party integrations with Spotify and Replicate for using Meta's MusicGen LLM.",
      "Supabase real-time websockets to track progress of song generations.",
    ],
  },
  {
    company: {
      name: "Leetcode Accountability Group",
      logo: "/career/leetcode.png",
      location: "Remote",
      overview: "Data Structures & Algorithm Learning and Practice",
    },
    role: "Founder",
    dateRange: "March 2025 - May 2025",
    techKeywords:
      "Data Structures and Algorithms, Graphs, Dyanmic Programming, Tabulation, Memoization, Search",
    highlights: [
      "Met a couple people in DSA & FAANG interview communities online and started a small group with 3 meetings each week.",
      "Created a presentation to encompass algorithms and share with the group throughout the week.",
      "Mostly graph structures, leetcode trends, and company outreach.",
    ],
  },
  {
    company: {
      name: "Data Annotations (Current)",
      logo: "/career/data-annotations.webp",
      location: "Remote",
      overview: "AI Evaluations",
    },
    role: "Software Engineering Contractor",
    dateRange: "July 2025 - Current",
    techKeywords: "Python, Javascript",
    highlights: [
      "Reviewing code generated by various LLMs to provide evaluations for AI companies.",
    ],
  },
  {
    company: {
      name: "Stacked (with Michael) AI",
      logo: "/career/stack-ai.webp",
      location: "Remote",
      overview: "Cool Job Application",
    },
    role: "Senior Frontend Engineer",
    dateRange: "August & September 2025",
    techKeywords: "Next.js, Typescript, React, React Flow, Tailwind, Shadcn",
    highlights: [
      "Primarily interested in the Senior Frontend Engineer role, also interested in Fullstack & Forward Deployed roles",
    ],
  },
];
