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
  clients?: any[];
};

const experience: Career[] = [
  {
    company: {
      name: "Goji Systems",
      logo: "",
      location: "Blue Bell, PA",
      overview: "Kiosk company",
    },
    role: "Fullstack Software Engineer",
    dateRange: "March 2018 - May 2019",
    techKeywords:
      "Javascript, Angular, Node, Express, RethinkDB, Socket.io, UDP, Chrome App, PWA, Card-Present Payments",
    highlights: [],
  },
  {
    company: {
      name: "Ownable",
      logo: "",
      location: "Philadelphia, PA",
      overview: "",
    },
    role: "Fullstack Software Engineer",
    dateRange: "May 2018 - September 2019",
    techKeywords: "Javascript, Angular, C#, .NET Core, MongoDB, Paypal",
    highlights: [],
  },
  {
    company: {
      name: "MenuMash",
      logo: "",
      location: "Philadelphia, PA",
      overview: "",
    },
    role: "Founder",
    dateRange: "May 2018 - September 2019",
    techKeywords: "Ionic, Cordova/Capacitor, Angular, Firebase",
    highlights: [],
  },
  {
    company: {
      name: "Plebeian Marketplace",
      logo: "",
      location: "Philadelphia, PA",
      overview: "",
    },
    role: "Co-Founder",
    dateRange: "May 2018 - September 2019",
    techKeywords: "Angular, Firebase, PWA, Stripe",
    highlights: [],
  },
  {
    company: {
      name: "goPuff",
      logo: "",
      location: "Philadelphia, PA",
      overview: "",
    },
    role: "Fullstack Software Engineer",
    dateRange: "May 2018 - September 2019",
    techKeywords: "Azure, Node, Typescript, Vue",
    highlights: [],
  },
  {
    company: {
      name: "Carona Stats",
      logo: "",
      location: "Philadelphia, PA",
      overview: "",
    },
    role: "Founder",
    dateRange: "May 2018 - September 2019",
    techKeywords: "Svelte, Interactive Data Visualizations",
    highlights: [],
  },
  {
    company: {
      name: "Essentials Anonymous",
      logo: "",
      location: "Philadelphia, PA",
      overview: "",
    },
    role: "Founder",
    dateRange: "May 2018 - September 2019",
    techKeywords: "Ionic, Angular, Firebase",
    highlights: ["Anonymous authentication"],
  },
  {
    company: {
      name: "The Art of Cooking Salmon",
      logo: "",
      location: "Philadelphia, PA",
      overview:
        "Social network for salmon recipes withi client-side and cloud-side image optimizations",
    },
    role: "Founder",
    dateRange: "May 2018 - September 2019",
    techKeywords: "Angular, Firebase, Images",
    highlights: [
      "Social network database structure",
      "Cloud functions for resizing images and creating thumbnails",
      "Client-side image editing and compression",
    ],
  },
  // Node Grouping - https://reactflow.dev/examples/grouping/sub-flows
  {
    company: {
      name: "Bitovi (Consulting)",
      logo: "",
      location: "Remote",
      overview: "",
    },
    role: "Frontend Software Engineer",
    dateRange: "May 2018 - September 2019",
    techKeywords: "Angular, React, Next.js, GraphQL, Azure",
    highlights: ["Anonymous authentication"],
    clients: [
      "Apple App Store Ads Platform",
      "KFC Online Ordering System",
      "Winklevoss Capital Landing Pages",
      "Nations Photo Lab Consumer Application",
    ],
  },
  {
    company: {
      name: "xTrades",
      logo: "",
      location: "Remote",
      overview: "A short-term contract to build a hybrid app with a small team",
    },
    role: "Frontend Software Engineer",
    dateRange: "May 2018 - September 2019",
    techKeywords: "Ionic, Angular, C#/.NET",
    highlights: ["Stock trading platform"],
  },
  {
    company: {
      name: "Perfect Gift (Wolfe LLC)",
      logo: "",
      location: "Remote",
      overview: "A short-term contract to build a hybrid app with a small team",
    },
    role: "Senior Fullstack Software Engineer",
    dateRange: "May 2018 - September 2019",
    techKeywords: "Ionic, Angular, C#/.NET",
    highlights: ["Stock trading platform"],
  },
  {
    company: {
      name: "BinderView",
      logo: "",
      location: "Remote",
      overview: "1,000+ daily page views",
    },
    role: "Founder",
    dateRange: "May 2018 - September 2019",
    techKeywords: "Ionic, Angular, C#/.NET",
    highlights: ["Stock trading platform"],
  },
  {
    company: {
      name: "Vibe Coding Endeavors",
      logo: "",
      location: "Remote",
      overview: "Vibe Coded with some human assistance",
    },
    role: "Founder",
    dateRange: "May 2018 - September 2019",
    techKeywords: "Ionic, Angular, C#/.NET",
    highlights: ["Melody Maker", "Cookbook Club"],
  },
  {
    company: {
      name: "Leetcode Accountability Group",
      logo: "",
      location: "Remote",
      overview:
        "Met 2 other people preparing for FAANG coding interviews and started this group.",
    },
    role: "Founder",
    dateRange: "May 2018 - September 2019",
    techKeywords: "Ionic, Angular, C#/.NET",
    highlights: [],
  },
  {
    company: {
      name: "Data Annotations (Current)",
      logo: "",
      location: "Remote",
      overview: "Evaluating code generated by various LLMs",
    },
    role: "Software Engineering Contractor",
    dateRange: "May 2018 - September 2019",
    techKeywords: "Python, Javascript",
    highlights: [],
  },
  {
    company: {
      name: "Stacked (with Michael) AI",
      logo: "",
      location: "Remote",
      overview:
        "Met 2 other people preparing for FAANG coding interviews and started this group.",
    },
    role: "Founder",
    dateRange: "May 2018 - September 2019",
    techKeywords: "Next.js, React, React Flow, Tailwind, Shadcn",
    highlights: [],
  },
];
