export type TableSchema = {
  id: number;
  label: string;
  category: string;
  access: string;
  tokens: string;
  updated: string;
  content: { type: string; text: string }[];
};

export const tabledata: TableSchema[] = [
  {
    id: 1,
    label: "Javascript, Typescript, Web",
    category: "Frontend, Fullstack",
    access: "Public",
    tokens: "398",
    updated: "Today",
    content: [
      {
        type: "heading",
        text: "Frontend & Fullstack Development",
      },
      {
        type: "body",
        text: "Next.js is the foundation of high-quality web applications, providing tooling and features that enable fast and efficient development. I'm proficient with every aspect of the framework and enjoy engaging with the community and following each release. Integrates well with cloud services and ORMs while providing route handlers, middleware, and server actions natively in the framework.",
      },
      {
        type: "body",
        text: "In-depth knowledge of rendering strategies including Incremental Static Regeneration, Static Site Generation, Server-Side Rendering, and Hydration & UI-Streaming to bring it all together. I have experience configuring these for many different applications, leveraging the abstractions provided by Next.js to architect intricate and production-grade systems.",
      },
      {
        type: "body",
        text: "The React ecosystem is used for client-side functionality. Tanstack, Zustand, Hooks & Context-Reducer Pattern, Server Components, Data fetching & caching, State-management.",
      },
      {
        type: "heading",
        text: "CSS, UI Libraries, Components, Animations",
      },
      {
        type: "body",
        text: "Tailwind-CSS, Shadcn, Radix-UI, Headless-UI, (Framer) Motion, xy/react-flow, Design Systems, Figma, SVG & Native CSS Animations. I'm well-versed in these tools and libraries, and also have a deep understanding of the underlying principles like Data-Attributes; used for framework-agnostic interactivity and state-management without any Javascript overhead.",
      },
      {
        type: "body",
        text: "I like to think I have an eye for design, but I also recognize the value of collaborating with dedicated designers and product developers to create intuitive user interfaces with considerations for the frontend code, ensuring fast performance and maintainability.",
      },
      {
        type: "heading",
        text: "Javascript & Typescript Fundamentals",
      },
      {
        type: "body",
        text: "Concurrency & Event-Loop, Closures & Scope, Prototypical Inheritance, Async Patterns, Service Workers, Built-in objects & data structures, Browser APIs & Permissions. Typescript.",
      },
      {
        type: "body",
        text: "I've followed the entire history of JavaScript, from its origins and rapid adoption to the modern ecosystem we know today. Fittingly, I was born in November 1995, around the time Javascript was first introduced, so you could say my passion for coding on the web was destined from the start.",
      },
      {
        type: "body",
        text: "The ability to become proficient with any library/framework/methodology extremely quickly comes from a strong fundamental understanding of the ecosystem. I'm driven by a passion for the internet, technology, and building things.",
      },
      {
        type: "heading",
        text: "Hybrid Apps, PWAs, Angular",
      },
      {
        type: "body",
        text: "My first true love in Frontend-Focused Fullstack Development was from 2017-2021; I was immersed in Webview-based Hybrid Apps & PWAs using Angular, Ionic, Capacitor/Cordova, and Firebase. I have fond memories of building TONS of apps as well as enterprise products using this stack. Observables and Singleton patterns were commonplace, and Firebase was the backend glue that wrapped everything together.",
      },
      {
        type: "body",
        text: "I was an early supporter of Jeff Delaney and the 'Fireship' Youtube channel, formerly known as 'AngularFire'. I  engaged in the initial testing and formulation of the official Angular-Firebase SDK, and actively participated in Google Developer Group events in Philadelphia as well as other local tech groups.",
      },
      {
        type: "heading",
        text: "Node.js & Backend JS/TS",
      },
      {
        type: "body",
        text: "Node, Deno, Nest.js, Express.js, Socket.io/Websockets, Cloud Functions, API Routes, Webhooks, ORMs & DB queries, Headless CMS, Cloud Providers.",
      },
    ],
  },
  {
    id: 2,
    label: "Serverless & System Design",
    category: "Backend",
    access: "Public",
    tokens: "265",
    updated: "Today",
    content: [
      {
        type: "heading",
        text: "Backend, Cloud, & Databases",
      },
      {
        type: "body",
        text: "Cloud platforms like Supabase & Vercel provide infrastructure for cohesive backends supporting Databases, Storage, Auth, Functions, Web Sockets/Real-time events, etc...",
      },
      {
        type: "body",
        text: "Most of my database experience is using relational databases, only using Vector DBs for curiosity and theoretical learning. I'm proficient with SQL & NoSQL, Schema design, and data normalization for optimized queries and scalability. Postgres is the standard these days and also my go-to database, I also lots of experience with MongoDB and a bunch of ORMs (Prisma, Drizzle, TypeORM, Mongoose).",
      },
      {
        type: "body",
        text: "When it comes to running and fine-tuning LLMs, Replicate is my perferred cloud provider. I have an app called MelodyMakerAI that I built using Meta/music-gen, and I also enjoy exploring all the LLMs on the Replicate platform.",
      },
      {
        type: "heading",
        text: "Product Architecture",
      },
      {
        type: "body",
        text: "Product Architecture is a great term used by Meta to encompass API & Client-Application design for user-facing products and services. I love this aspect of software development. Examples include Social networks, e-commerce stores, payment processing, messaging, real-time interactions, streaming (not just audio/video but data and UI streaming - especially with the advent of AI).",
      },
      {
        type: "body",
        text: "I'm also comfortable with distributed systems, with experience in the Azure ecosystem for running microservices, redis/KV stores, data replication, and load balancers.",
      },
      {
        type: "body",
        text: "Lastly, I have extensive experience with Payment Processing, using nearly all of Stripe's product offerings as well as card-present transactions for several payment gateways including Spin and Tenerum.",
      },
    ],
  },
  {
    id: 3,
    label: "AI & ML",
    category: "General",
    access: "Public",
    tokens: "410",
    updated: "Yesterday",
    content: [
      {
        type: "heading",
        text: "Brain-dump of what interests me about AI",
      },
      {
        type: "body",
        text: "Working with cutting-edge developer tools like Copilot, Claude, GPT, Cursor, Windsurf, and Bolt empowers me to build faster and experiment more deeply with AI-driven development.",
      },
      {
        type: "body",
        text: "With OpenAI and Anthropic publicly stating that the majority of their revenue comes from APIs, it's clear they've set the standard for cloud AI providers and developer adoption—making it essential to stay familiar with the current landscape.",
      },
      // {
      //   type: "body",
      //   text: "When it comes to running and fine-tuning LLMs, Replicate is my perferred cloud provider. I have an app called MelodyMakerAI that I built using Meta/music-gen, and I also enjoy exploring all the LLMs on the Replicate platform.",
      // },
      {
        type: "body",
        text: "Vercel's AI SDK stands out as a favorite of mine because it supports all major models for generations and streaming while also offering powerful UI components that accelerate innovation.",
      },
      {
        type: "body",
        text: "The profound impact of AI on society becomes even more fascinating when viewed through the lenses of philosophy and economics.",
      },
      {
        type: "body",
        text: "Insights from leaders of the AI industry offer valuable perspective on the evolving economic landscape of major AI companies in the United States.",
      },
      {
        type: "body",
        text: "Staying up to date with the latest innovations and discussing them with others fuels my excitement, and moving to Silicon Valley will allow me to meet more people who share this passion.",
      },
      {
        type: "body",
        text: "Scientific breakthroughs across industries are incredibly exciting, and AI continues to be one of the most transformative forces driving them forward.",
      },
      {
        type: "body",
        text: "Transformers, Retrieval-Augmented Generation, Neural Networks, and MCP are just a few areas where I have developed a wide breadth of understanding, often diving deep into topics out of sheer curiosity.",
      },
      {
        type: "body",
        text: "Learning is the most fascinating aspect of life—it's how we grow. Exploring new frontiers like LLMs and AI infrastructure has become one of my greatest passions.",
      },
      {
        type: "body",
        text: "Leveraging the latest AI innovations to create meaningful value for society is a mission that deeply motivates me.",
      },
      {
        type: "body",
        text: "The AI 2027 paper served as a major inspiration, sparking my desire to study AI in depth, relocate to Silicon Valley, and pursue meaningful work with AI startups.",
      },
      {
        type: "body",
        text: "Experimentation with local LLMs such as Ollama and Mistral on my own machine provides hands-on experience with running models and testing their capabilities.",
      },
      {
        type: "heading",
        text: "Conclusion",
      },
      {
        type: "body",
        text: "Stack AI represents an incredible market opportunity to abstract agent orchestration, giving businesses intuitive, powerful tools to streamline processes, increase efficiency, and iterate rapidly.",
      },
    ],
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
    id: 5,
    label: "C, C++, C#, Rust, WASM",
    category: "Frontend, Backend",
    access: "Public",
    tokens: "252",
    updated: "Assign updated",
    content: [
      {
        type: "heading",
        text: "Web",
      },
      {
        type: "body",
        text: "C#, .NET, & Entity Framework for servers in a few different companies.",
      },
      {
        type: "body",
        text: "As a frontend-focused fullstack engineer, Web Assembly naturally peaks my interest. I did a case study exploring how Figma used C++ and Emscripten to create an insanely optimized canvas platform used as a core part of their product offerings. I find it cool how they use this in conjunction with React to build their tools.",
      },
      {
        type: "body",
        text: "My foray of modern low-level programming continues into Rust, where I researched the efficacy of the language and differences from C++, as well as the practical use-cases in web/software development. Many build tools for Vite/Webpack/etc... are built with Rust to provide efficient compilation functionality for modern web dev stacks. Tailwind in particular is built with Rust and I enjoy reading/watching how they use this at a high level.",
      },
      {
        type: "heading",
        text: "Hobby",
      },
      {
        type: "body",
        text: "Pokemon ROM hacks using C with devkitPro/devkitARM as the toolchain framework for compiling to ARM binaries used in Gameboy Advanced Games/Console. Source code is a disassembly of the games created by a the Pokemon-Reverse-Engineering-Tools (PRET) online community of developers.",
      },
    ],
  },
  {
    id: 6,
    label: "Hardware & Linux",
    category: "General",
    access: "Public",
    tokens: "117",
    updated: "Jamik Tashpulatov",
    content: [
      {
        type: "heading",
        text: "PC Building & Operating System Culture",
      },
      {
        type: "body",
        text: "During my teenage years I was very interested in video editing. I published many Call of Duty montages on Youtube using Sony Vegas and After Effects to create artistic edits of gameplay. The way I chose my video editing software was based on which cracked versions I could download for free online lol.",
      },
      {
        type: "body",
        text: "I built a computer to run these programs and render videos, but it was later confiscated by police when I was arrested for ordering LSD on the dark web. But that's a story for in-person/video communication.",
      },
      {
        type: "body",
        text: "I have explored linux from both a user perspective and a research perspective to study operating system design. These days I prefer a nice Macbook.",
      },
      {
        type: "heading",
        text: "Chips, Datacenters, Macro-economics",
      },
      {
        type: "body",
        text: "Currently, many companies produce insanely optimized processors, and while I prefer working on the software side, I cant help but read in awe while following the latest Nvidia chips and large-scale systems used by the major players in the tech & ai industry.",
      },
      {
        type: "body",
        text: "I enjoy following the progress of the Stargate factory and how data centers are being created throughout the country, and the impact on compute and AI performance as well as the impact on the local economy of each city/location. I am all-for embracing technology.",
      },
    ],
  },
  {
    id: 7,
    label: "Python & Java",
    category: "General",
    access: "Public",
    tokens: "177",
    updated: "Assign updated",
    content: [
      {
        type: "heading",
        text: "Initial Experiences",
      },
      {
        type: "body",
        text: "My introduction to programming was in an AP Computer Science class in high-school. I was 1 of 4 people in the class, and there was no involvement from the teacher. Each student received a digital copy of the Blue Pelican Java book and had to read and teach themselves, fortunately everyone was extremely interested in learning this stuff and eventually became Software Engineers. This set the foundation for continued learning into OOP design patterns, Swing UI, and the Android SDK. I remember when Android Studio was released - I was enamored by the simplified development and emulation process of a dedicated Android IDE as opposed to the old workflow using Eclipse to integrate the Android SDK manually. Good times.",
      },
      {
        type: "heading",
        text: "Python & General Purpose Programming",
      },
      {
        type: "body",
        text: "I'm also familiar with Python in the context of web servers using Flask & FastAPI, LLM integrations using Ollama, and many general application uses in my current role evaluating AI responses pertaining to Python software development. Python is also the most commonly used language in competitive programming and classic algorithm problems, so I constantly read code solutions in this language and have naturally developed a 'passive proficiency'.",
      },
    ],
  },
  {
    id: 8,
    label: "Business & Product",
    category: "Other",
    access: "Public",
    tokens: "192",
    updated: "Assign updated",
    content: [
      {
        type: "heading",
        text: "Teams & Corp Structure",
      },
      {
        type: "body",
        text: "I have developed a strong familiarity with modern corporate structures and software product development, with an understanding that goes beyond coding to include the broader mechanics of how companies operate and grow.",
      },
      {
        type: "body",
        text: "I also have insight into how teams can be structured around objectives and personal strengths to maximize productivity and innovation. My knowledge spans economics, reporting, KPIs, and fundamental analysis, giving me a foundation for understanding the business impact of technical work.",
      },
      {
        type: "heading",
        text: "Product Development & Users",
      },
      {
        type: "body",
        text: "I'm experienced with A/B testing, user engagement, and value measurement, recognizing the importance of data-driven decisions in shaping product direction. I believe all departments should have at least a moderate proficiency in modern corporate operations, as they are essential for building meaningful software products. Effective communication and clarity around why features are built is just as important as the implementation itself.",
      },
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
