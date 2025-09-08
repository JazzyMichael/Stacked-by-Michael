import { ReactNode } from "react";

export type TableSchema = {
  id: number;
  label: string;
  category: string;
  access: string;
  tokens: string; // change to number
  updated: string;
  content?: any[];
  template?: ReactNode;
};

export const tabledata: TableSchema[] = [
  {
    id: 1,
    label: "Javascript Expertise",
    category: "Frontend, Fullstack",
    access: "Public",
    tokens: "18",
    updated: "Eddie Lake",
    // content: [
    //   "I'm an expert in JavaScript, TypeScript, and fullstack development**, with deep experience in Next.js, React, and modern UI frameworks. I build scalable, high-performance applications using the right mix of rendering strategies, state management, and design systems. Beyond the browser, I’ve shipped hybrid apps, PWAs, and real-time systems with tools like Node.js, Socket.io, Capacitor, and Node**. My strong fundamentals let me pick up any new framework or methodology quickly, and I stay engaged with the developer community to push the boundaries of what’s possible on the web.",
    //   "What drives my work is not just technical proficiency, but the ability to quickly adapt to any library, framework, or methodology thanks to a strong understanding of core web principles. I take pride in building optimal systems—balancing complex state management, efficient data loading, and performance tuning—while staying active in both local and online developer communities to share knowledge and keep up with the ever-evolving web landscape.",
    //   "I’ve followed the entire history of JavaScript—from its origins and rapid adoption to the modern ecosystem we know today. Fittingly, I was born in November 1995, the same month JavaScript was first introduced, so you could say my passion for coding with it was destined from the start.",
    // ],
    content: [
      "Fullstack and Frontend development: Next.js, React, Tailwind, Tanstack, Zustand",
      "UI Component libraries: Shadcn, Radix-UI, Headless-UI, Design Systems, CSS Fundamentals (Using data attributes on DOM elements for framework-agnostic client-side state management without any Javascript overhead that can be used in server components)",
      "Rendering: Server-side, Static site generation, Incremental Static Regeneration, Single-page applications - Next.js abstracts the rendering process beautifully and hydrates the UI so developers can use a combination of rendering approaches based on the application.",
      "Vanilla Javascript, Service Workers and Browser API's, Offline support, Web Sockets",
      "Backend: Node, Nest.js, Express.js, Socket.io",
      "CMS integrations, Flowcharts using ReactFlow, Animations using Motion (Framer)",
      "Lots of experience and expertise building Hybrid Apps using Webviews/Capacitor/Cordova and PWA's, and a little experience using React Native & Expo. I loved building webview-based hybrid apps, and have fond memories of building tons of applications using Ionic, Angular, and Firebase in 2018, 2019, and 2020. Observables and Singleton patterns were commonplace for this tech stack. I was also an early supporter of Jeff Delaney and the 'Fireship' youtube channel, back when it was called 'AngularFire'.",
      "Ability to become proficient with any library/framework/methodology extremely quickly. This is due to a strong fundamental understanding of the ecosystem and driven by a passion for the internet and technology. I love building the most optimal system with complex state management, efficiently loading data, speed & compute performance, and interacting with the community online and locally to discuss the state of the web and stay up-to-date on the latest releases.",
      "I’ve followed the entire history of JavaScript—from its origins and rapid adoption to the modern ecosystem we know today. Fittingly, I was born in November 1995, around the time Javascript was first introduced, so you could say my passion for coding on the web was destined from the start.",
    ],
  },
  {
    id: 2,
    label: "Serverless & System Design",
    category: "Backend",
    access: "Public",
    tokens: "29",
    updated: "Eddie Lake",
    content: [
      "Cloud platforms like Supabase & Vercel provide infrastructure for cohesive backends supporting Databases, Storage, Auth, Functions, Web Sockets/Real-time events, etc...",
      "Most of my database experience is using relational databases, only using Vector DBs for curiosity and theoretical learning. I'm proficient with SQL & NoSQL, Schema design, and data normalization for optimized queries and scalability. Postgres is the standard these days and also my go-to database, I also lots of experience with MongoDB and a bunch of ORMs (Prisma, Drizzle, TypeORM, Mongoose).",
      "When it comes to running and fine-tuning LLMs, Replicate is my perferred cloud provider. I have an app called MelodyMakerAI that I built using Meta/music-gen, and I also enjoy exploring all the LLMs on the Replicate platform.",
      "Product Architecture is a great term used by Meta to encompass API & Client-Application design for user-facing products and services. I love this aspect of software development. Examples include Social networks, e-commerce stores, payment processing, messaging, real-time interactions, streaming (not just audio/video but data and UI streaming - especially with the advent of AI, progressive rendering, and client-side hydration).",
      "I'm also comfortable with distributed systems, with experience in the Azure ecosystem for running microservices, redis/KV stores, data replication, and load balancers.",
      "Lastly, I have extensive experience with Payment Processing, using nearly all of Stripe's product offerings as well as card-present transactions for several payment gateways including Spin and Tenerum.",
    ],
  },
  {
    id: 3,
    label: "AI & ML",
    category: "General",
    access: "Public",
    tokens: "10",
    updated: "Eddie Lake",
    content: [
      "Working with cutting-edge developer tools like Copilot, Claude, GPT, Cursor, Windsurf, and Bolt empowers me to build faster and experiment more deeply with AI-driven development.",
      "With OpenAI and Anthropic publicly stating that the majority of their revenue comes from APIs, it’s clear they’ve set the standard for cloud AI providers and developer adoption—making it essential to stay familiar with the current landscape.",
      "Vercel’s AI SDK stands out as a favorite of mine because it supports all major models for generations and streaming while also offering powerful UI components that accelerate innovation.",
      "The profound impact of AI on society becomes even more fascinating when viewed through the lenses of philosophy and economics.",
      "Insights from leaders of the AI industry offer valuable perspective on the evolving economic landscape of major AI companies in the United States.",
      "Staying up to date with the latest innovations and discussing them with others fuels my excitement, and moving to Silicon Valley will allow me to meet more people who share this passion.",
      "Scientific breakthroughs across industries are incredibly exciting, and AI continues to be one of the most transformative forces driving them forward.",
      "Transformers, Retrieval-Augmented Generation, Neural Networks, and MCP are just a few areas where I have developed a wide breadth of understanding, often diving deep into topics out of sheer curiosity.",
      "Learning is the most fascinating aspect of life—it’s how growth happens—and exploring new frontiers like LLMs and AI infrastructure has become one of my greatest passions.",
      "Leveraging the latest AI innovations to create meaningful value for society is a mission that deeply motivates me.",
      "The AI 2027 paper served as a major inspiration, sparking my desire to study AI in depth, relocate to Silicon Valley, and pursue meaningful work with AI startups.",
      "Experimentation with local LLMs such as Ollama and Mistral on my own machine provides hands-on experience with running models and testing their capabilities.",
      "Stack AI represents an incredible market opportunity to abstract agent orchestration, giving businesses intuitive, powerful tools to streamline processes, increase efficiency, and iterate rapidly.",
    ],
  },
  {
    id: 4,
    label: "Hardware & Linux",
    category: "General",
    access: "Public",
    tokens: "2",
    updated: "Jamik Tashpulatov",
    content: [
      "Built my first computer when I was 17 for video editing and publishing Call-Of-Duty montages on Youtube.",
      "Explored linux from both a user perspective and a research and operating system design perspective.",
      "These days I prefer a nice Macbook.",
      "I enjoy following the progress of the Stargate factory and how data centers are being created throughout the country, and the impact on compute and AI performance as well as the impact on the local economy of each city/location.",
    ],
    template: (
      <div>
        <h2></h2>
      </div>
    ),
  },
  // {
  //   id: 5,
  //   label: "Data Structures & Algorithms",
  //   category: "General",
  //   access: "Public",
  //   tokens: "20",
  //   updated: "Jamik Tashpulatov",
  // },
  {
    id: 6,
    label: "C, C++, C#, Rust, WASM",
    category: "Frontend, Backend",
    access: "Public",
    tokens: "25",
    updated: "Assign updated",
    content: [
      "C#, .NET, & Entity Framework for web servers.",
      "Pokemon ROM hacks using C with devkitPro/devkitARM as the toolchain framework for compiling to ARM binaries used in Gameboy Advanced Games/Console. Source code is a disassembly of the games created by a the Pokemon-Reverse-Engineering-Tools (PRET) online community of developers.",
      "As a frontend-focused fullstack engineer, Web Assembly peaks my interest. I did a case study exploring how Figma used C++ and Emscripten to create an insanely optimized canvas platform used as a core part of their product offerings. I find it cool how they use this in conjunction with React to build their tools.",
      "My foray of modern low-level programming continues into Rust, where I researched the efficacy of the language and differences from C++, as well as the practical use-cases in web/software development. Many build tools for Vite/Webpack/etc... are built with Rust to provide efficient compilation functionality for modern web dev stacks. Tailwind in particular is built with Rust and I enjoy reading/watching how they use this at a high level.",
    ],
  },
  {
    id: 7,
    label: "Python & Java",
    category: "General",
    access: "Public",
    tokens: "7",
    updated: "Assign updated",
    content: [
      "During high-school I took an AP Computer Science class where I learned Java, my first programming language. This set the foundation for continued learning into OOP design patterns, Swing UI, and the Android SDK. I remember when Android Studio was released was enamored by the simplified development and emulation process of a dedicated Android IDE as opposed to the old workflow using Eclipse to integrate the Android SDK manually. Good times.",
      "I'm also familiar with Python in the context of web servers using Flask & FastAPI, LLM integrations using Ollama, and many general application uses in my current role evaluating AI responses pertaining to Python software development.",
    ],
  },
  {
    id: 8,
    label: "Business & Product",
    category: "Other",
    access: "Public",
    tokens: "9",
    updated: "Assign updated",
    content: [
      "I have developed a strong familiarity with modern corporate structures and software product development, with an understanding that goes beyond coding to include the broader mechanics of how companies operate and grow.",
      "I’m experienced with A/B testing, user engagement, and value measurement, recognizing the importance of data-driven decisions in shaping product direction. I believe all departments should have at least a moderate proficiency in modern corporate operations, as they are essential for building meaningful software products. Effective communication and clarity around why features are built is just as important as the implementation itself.",
      "I also have insight into how teams can be structured around objectives and personal strengths to maximize productivity and innovation. My knowledge spans economics, reporting, KPIs, and fundamental analysis, giving me a foundation for understanding the business impact of technical work.",
    ],
  },
  // {
  //   id: 9,
  //   label: "Agentic Orchestration",
  //   category: "StackAI",
  //   access: "Public",
  //   tokens: "6",
  //   updated: "Assign updated",
  // },
  // {
  //   id: 10,
  //   label: "US Nuclear Codes",
  //   category: "Secrets",
  //   access: "Private",
  //   tokens: "3",
  //   updated: "Assign updated",
  // },
];
