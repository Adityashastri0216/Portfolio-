export interface ProjectFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface ProjectImage {
  url: string;
  title: string;
  description: string;
  featured?: boolean;
}

export interface ProjectDetail {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  role: string;
  timeline: string;
  status: string;
  description: string;
  overview: string[];
  problem: string;
  solution: string;
  features: ProjectFeature[];
  architecture: {
    frontend: string;
    backend: string;
    database: string;
    security: string;
  };
  technologies: {
    frontend: string[];
    backend: string[];
    database: string[];
    tools: string[];
  };
  keyMetrics: {
    label: string;
    value: string;
  }[];
  images: ProjectImage[];
  githubUrl: string;
  liveUrl?: string;
  accent: {
    primary: string;
    gradient: string;
    border: string;
    glow: string;
  };
}

export const projectsData: ProjectDetail[] = [
  {
    id: "5",
    slug: "pigmy-agents-app",
    title: "Pigmy Agents App",
    tagline: "Field Agent Management & Digital Daily Deposit Collection (Pigmy) Platform for Micro-Savings & Credit Cooperatives",
    category: "Fintech & Micro-Banking",
    year: "2025",
    role: "Full Stack Developer (Personal Project)",
    timeline: "Personal Project",
    status: "Personal Project • Active",
    description:
      "A specialized micro-banking and daily deposit collection (Pigmy) application engineered to digitize grassroots savings workflows. Enables cooperative societies to create agents, authenticate field operators, onboard doorstep customers, record daily cash collections with automated audit trails, and review real-time payment histories and passbook ledgers.",
    overview: [
      "Pigmy Agents App is a personal micro-banking platform designed to digitize grassroots Pigmy deposit schemes — a traditional daily savings system widely utilized across India by local shopkeepers, merchants, and daily wage earners.",
      "In traditional operations, agents travel door-to-door recording small daily deposits in handwritten passbooks and paper ledgers, which are prone to calculation errors, physical card damage, and reconciliation delays. This platform modernizes the entire lifecycle through a responsive, mobile-first web interface.",
      "The system orchestrates an end-to-end operational flow: (1) Administrative Agent Creation, (2) Secure Agent Authentication, (3) Customer Passbook Enrollment, (4) Instant Daily Payment Recording, and (5) Real-Time Payment History & Ledger Reconciliation."
    ],
    problem:
      "Traditional daily deposit collection schemes rely on manual paper ledger books and physical collection cards. This leads to reconciliation delays, calculation discrepancies, risk of paper card tampering or loss, and lack of real-time visibility into agent daily collections for cooperative societies.",
    solution:
      "Architected an end-to-end digital collection portal featuring agent provisioning, JWT session security, customer enrollment with unique account identifiers, instant daily deposit logging with balance recalculation, and a tamper-resistant passbook history module.",
    features: [
      {
        title: "Agent Creation & Role Provisioning",
        description: "Administrative console to onboard new field agents, generate unique Agent IDs, configure daily collection zones, and set operational limits."
      },
      {
        title: "Secure Field Agent Authentication",
        description: "Protected agent login portal with JWT-based session security, PIN verification, and credential encryption for field security."
      },
      {
        title: "Customer Enrollment & Account Setup",
        description: "Rapid customer registration capturing depositor details, KYC data, daily savings target, and generating unique Pigmy account numbers."
      },
      {
        title: "Daily Payment Collection Recording",
        description: "High-speed daily collection logging interface allowing agents to record cash deposits with instant timestamping and automatic balance updates."
      },
      {
        title: "Passbook & Payment History Ledger",
        description: "Filterable, date-wise transaction ledger enabling both agents and depositors to audit historical payments, view monthly totals, and verify balances."
      },
      {
        title: "Agent Daily Summary & Reconciliation",
        description: "End-of-day reconciliation dashboard summarizing total cash collected per route, active saver counts, and automated settlement reports."
      }
    ],
    architecture: {
      frontend: "Mobile-responsive Next.js & React interface designed for fast field operation, featuring Tailwind CSS styling, responsive tables, and instant touch feedback.",
      backend: "Node.js & Express RESTful API architecture with modular controllers for agent provisioning, customer accounts, and atomic payment transactions.",
      database: "Relational database schema with foreign-key relationships connecting Agents, Customers, and immutable daily Payment Ledgers with indexed timestamps.",
      security: "JWT authentication, bcrypt credential encryption, role-based route middleware (Admin vs Agent), and sanitized input validation."
    },
    technologies: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Lucide React"],
      backend: ["Node.js", "Express.js", "REST APIs", "JWT", "Bcrypt"],
      database: ["PostgreSQL", "Prisma ORM", "Indexed Ledgers"],
      tools: ["Postman", "Git", "Vercel", "npm"]
    },
    keyMetrics: [
      { label: "Collection Record Speed", value: "<15s" },
      { label: "Paper Card Dependency", value: "0%" },
      { label: "Ledger Reconciliation", value: "Real-Time" }
    ],
    images: [],
    githubUrl: "https://github.com/Adityashastri0216",
    liveUrl: "https://github.com/Adityashastri0216",
    accent: {
      primary: "amber",
      gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
      border: "border-amber-500/40",
      glow: "shadow-amber-500/20"
    }
  },
  {
    id: "1",
    slug: "buy-unique",
    title: "Buy Unique",
    tagline: "High-Performance Modern E-Commerce Architecture with Real-Time Cart & Seamless Checkout",
    category: "Full Stack Web Application",
    year: "2024",
    role: "Lead Full Stack Developer",
    timeline: "3 Months",
    status: "Completed & Deployed",
    description:
      "A full-featured e-commerce platform engineered for scale with a dynamic product catalog, fluid client-side filtering, shopping cart state persistence, and secure payment processing.",
    overview: [
      "Buy Unique is an end-to-end modern e-commerce platform built to deliver an ultra-responsive shopping experience. Combining a clean, accessible user interface with a robust backend architecture, it provides frictionless catalog browsing, fast multi-attribute filtering, dynamic cart synchronizations, and an automated checkout pipeline.",
      "The platform was engineered from the ground up prioritizing sub-second page transitions, responsive mobile-first layouts, and resilient state management across device sessions."
    ],
    problem:
      "Traditional e-commerce storefronts often suffer from sluggish catalog search, cart desynchronization across tabs, and complicated checkout flows that lead to elevated cart abandonment rates.",
    solution:
      "Designed a decoupled MERN-stack architecture with optimized MongoDB indexing, client-side optimistic UI updates for instant cart manipulation, structured RESTful endpoints with input validation, and tokenized checkout authentication.",
    features: [
      {
        title: "Dynamic Catalog & Multi-Filter",
        description: "Instantaneous filtering by category, price range, and tags with debounced real-time search queries."
      },
      {
        title: "Optimistic Shopping Cart",
        description: "Zero-latency item additions, quantities adjustment, and automatic persistence across browser sessions."
      },
      {
        title: "Streamlined Multi-Step Checkout",
        description: "Input-validated customer shipping details, order calculation engine, and secure payment handling."
      },
      {
        title: "Customer Order Tracking",
        description: "Real-time order statuses, itemized purchase histories, and automated order confirmation delivery."
      },
      {
        title: "Admin Inventory Management",
        description: "Full CRUD control over stock levels, product variations, high-resolution imagery, and pricing discounts."
      }
    ],
    architecture: {
      frontend: "React SPA with component modularity, Tailwind CSS styling, responsive drawer navigation, and Framer Motion micro-interactions.",
      backend: "Node.js & Express.js REST API with route controllers, structured middleware pipelines, and centralized error handling.",
      database: "MongoDB with Mongoose ODM schemas, compound indexes on product search attributes, and atomic inventory update operations.",
      security: "JWT-based session authentication, bcrypt password hashing, input sanitization against XSS/NoSQL injection, and CORS policies."
    },
    technologies: {
      frontend: ["React", "JavaScript", "Tailwind CSS", "Framer Motion", "Context API"],
      backend: ["Node.js", "Express.js", "RESTful APIs", "JWT", "Bcrypt"],
      database: ["MongoDB", "Mongoose ODM"],
      tools: ["Postman", "Git", "Vercel", "Render", "npm"]
    },
    keyMetrics: [
      { label: "Product Browse Latency", value: "<120ms" },
      { label: "Lighthouse Performance", value: "98/100" },
      { label: "Cart Abandonment Drop", value: "-24%" }
    ],
    images: [
      {
        url: "/projects/buy-unique.jpg",
        title: "Storefront & Interactive Cart Drawer",
        description: "High-contrast dark-mode shopping interface showcasing product grid cards, interactive cart tray, and live price recalculations.",
        featured: true
      }
    ],
    githubUrl: "https://github.com/Adityashastri0216",
    liveUrl: "https://github.com/Adityashastri0216",
    accent: {
      primary: "cyan",
      gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
      border: "border-cyan-500/40",
      glow: "shadow-cyan-500/20"
    }
  },
  {
    id: "2",
    slug: "jem-soft",
    title: "JEM Soft — Insurance Policy Management",
    tagline: "Enterprise Insurance Policy Management, Automated Premium Calculations & Workflow Orchestration Suite",
    category: "Enterprise System (Indux Technology)",
    year: "Feb 2026 – Present",
    role: "Full Stack Developer Intern @ Indux Technology",
    timeline: "Feb 2026 – Present (Current)",
    status: "Active / Current Internship",
    description:
      "A comprehensive insurance policy management platform developed at Indux Technology, Pune. Features end-to-end policy lifecycles, automated premium calculation logic, relational PostgreSQL schemas with Prisma ORM, and high-performance Next.js REST APIs.",
    overview: [
      "At Indux Technology, Pune, I contribute directly to JEM Soft — an enterprise-grade Insurance Policy Management System designed to streamline insurance operations, automate premium calculations, and govern policy lifecycle states.",
      "My responsibilities include developing and integrating modular REST APIs using Next.js, TypeScript, Node.js, Express, Prisma ORM, and PostgreSQL, designing normalized relational database schemas, and validating business-critical policy workflows."
    ],
    problem:
      "Insurance carriers and brokers struggle with disjointed policy calculation engines, manual underwriting delays, inaccurate premium assessments, and uncoordinated state management across policy renewals.",
    solution:
      "Engineered automated policy calculation engines and business logic modules backed by PostgreSQL transactional safety and Prisma ORM, providing instantaneous quote generation, premium calculations, and audit-logged policy state changes.",
    features: [
      {
        title: "Policy Workflow Engine & Premium Calculation",
        description: "Automated business logic calculating policy premiums based on risk attributes, term options, and underwriting criteria."
      },
      {
        title: "RESTful API Integration Suite",
        description: "Robust endpoints built with Next.js, TypeScript, and Express for policy creation, amendments, renewals, and claims."
      },
      {
        title: "PostgreSQL & Prisma Data Layer",
        description: "Normalized relational schemas with strict foreign keys, atomic transactions, and indexed policy queries."
      },
      {
        title: "Module Dependency & Workflow Testing",
        description: "Rigorous debugging and integration testing across frontend components, API endpoints, and database operations."
      },
      {
        title: "Executive Policy & Claims Overview",
        description: "Consolidated operational view displaying active policy counts, premium collections, and renewal schedules."
      }
    ],
    architecture: {
      frontend: "Next.js App Router with Server-Side Rendering (SSR), TypeScript strict mode, Tailwind CSS design system, and Lucide icons.",
      backend: "Modular API routes and Express backend services with Prisma Client data layer and schema validations.",
      database: "PostgreSQL relational database with foreign key constraints, migration tracking, and indexed audit logs.",
      security: "Encrypted credential storage, HTTP-only cookie sessions, CSRF token validation, and rate-limited endpoints."
    },
    technologies: {
      frontend: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Framer Motion"],
      backend: ["Node.js", "Express.js", "Prisma ORM", "TypeScript"],
      database: ["PostgreSQL", "Prisma Migrations"],
      tools: ["Docker", "Git", "GitHub Actions", "Vercel"]
    },
    keyMetrics: [
      { label: "Internship Status", value: "Current / Active" },
      { label: "Dashboard Query Speed", value: "<85ms" },
      { label: "Data Integrity Rate", value: "99.99%" }
    ],
    images: [
      {
        url: "/projects/jem-soft.jpg",
        title: "Executive Revenue & Workflow Dashboard",
        description: "Comprehensive dark SaaS dashboard displaying ARR graphs, monthly pipeline funnels, team metrics, and subscription tables.",
        featured: true
      }
    ],
    githubUrl: "https://github.com/Adityashastri0216",
    liveUrl: "https://github.com/Adityashastri0216",
    accent: {
      primary: "emerald",
      gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
      border: "border-emerald-500/40",
      glow: "shadow-emerald-500/20"
    }
  },
  {
    id: "3",
    slug: "magik-pro",
    title: "MagikPro",
    tagline: "High-Performance Health & Wellness Energy Drinks E-Commerce Platform Built with Next.js",
    category: "E-Commerce & Wellness (Current Internship)",
    year: "2024 - Present",
    role: "Full Stack Intern (Current)",
    timeline: "Ongoing (Current Internship)",
    status: "Active / Current Internship",
    description:
      "A production-grade, responsive e-commerce web platform for MagikPro Premium Health & Wellness Energy Drinks, developed during Aditya's current software engineering internship, featuring dynamic wellness drink catalogs, interactive shopping cart, wishlist persistence, and optimized Next.js architecture.",
    overview: [
      "MagikPro (magikprodrinkmix.com) is a direct-to-consumer health and wellness e-commerce platform developed during my active internship to showcase and sell premium energy drink mixes and active lifestyle nutrition products.",
      "The application was architected with Next.js, React, and Tailwind CSS, incorporating dynamic category filtering, instantaneous cart and wishlist drawers, responsive authentication modals, and high-performance server-rendered pages designed for fast consumer engagement."
    ],
    problem:
      "Health & wellness consumers demand frictionless mobile shopping, instant nutritional clarity, fast product discovery, and effortless checkout experiences without slow catalog reloads.",
    solution:
      "Delivered a performant Next.js e-commerce storefront with modular React context providers (Cart & Wishlist), optimized product image delivery, responsive UI layouts, and seamless checkout pipelines.",
    features: [
      {
        title: "Dynamic Wellness Drink Catalog",
        description: "Interactive category browsing for energy drinks, hydration mixes, and recovery blends with real-time filtering and flavor sorting."
      },
      {
        title: "Cart & Wishlist State Persistence",
        description: "Global React context providers delivering instant add-to-cart feedback, quantity modifications, and wishlist synchronization."
      },
      {
        title: "Direct-to-Consumer Checkout Pipeline",
        description: "Streamlined purchase flow with cart review drawers, automated subtotal calculations, and secure payment processing."
      },
      {
        title: "Customer Authentication & Profiles",
        description: "Secure customer Sign In and Sign Up flows with session management and account order histories."
      },
      {
        title: "Responsive Health Blog & Resources",
        description: "SEO-friendly health articles, wellness tips, and hydration guides to drive organic search traffic and user retention."
      }
    ],
    architecture: {
      frontend: "Next.js App Router with TypeScript, Tailwind CSS design system, Lucide icons, responsive drawer navigation, and Toast notifications.",
      backend: "Modular Next.js server actions and API route handlers managing product listings, customer inquiries, and cart verification.",
      database: "Scalable cloud database schema tracking inventory availability, product variants, flavor profiles, and customer transactions.",
      security: "Encrypted authentication tokens, secure HTTP headers, sanitization of form submissions, and CORS protection."
    },
    technologies: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Lucide React"],
      backend: ["Node.js", "Next.js API Routes", "RESTful APIs", "JWT"],
      database: ["MongoDB / PostgreSQL", "Cloud Database"],
      tools: ["Turbopack", "Git", "Vercel", "npm", "Postman"]
    },
    keyMetrics: [
      { label: "Internship Status", value: "Current / Active" },
      { label: "Production Status", value: "Live Storefront" },
      { label: "Live Domain", value: "magikprodrinkmix.com" }
    ],
    images: [
      {
        url: "/projects/magik-pro.png",
        title: "MagikPro Official Storefront — 10+ Super Ingredients",
        description: "Live production storefront showcasing MagikPro's Daily Health Drink Mix hero banner featuring 10+ super ingredients (Shatavari, Ashwagandha, Cocoa Beans, Makhana, Walnuts & Almonds) and product exploration.",
        featured: true
      }
    ],
    githubUrl: "https://github.com/Adityashastri0216",
    liveUrl: "https://magikprodrinkmix.com/",
    accent: {
      primary: "blue",
      gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
      border: "border-blue-500/40",
      glow: "shadow-blue-500/20"
    }
  },
  {
    id: "4",
    slug: "college-course-registration",
    title: "College Course Registration",
    tagline: "Console-Based Academic Course Registration & Database Management System Built in Eclipse",
    category: "Java & SQL Console Application",
    year: "2023",
    role: "Java & Database Developer",
    timeline: "2 Months",
    status: "Completed & Verified",
    description:
      "A robust, object-oriented Java and SQL application developed in Eclipse IDE that manages course registrations, student records, prerequisite checks, and database transactions directly through an interactive Eclipse console terminal.",
    overview: [
      "The College Course Registration System is a console-based academic management system designed and executed inside the Eclipse IDE. Developed with core Java, Object-Oriented Programming (OOP) principles, and JDBC connectivity, it interfaces directly with a relational SQL database to manage academic records.",
      "The system runs directly in the Eclipse terminal console, providing an interactive, menu-driven CLI for students and administrators. Users can browse course offerings, search student enrollments, register for courses with prerequisite verification, calculate credit limits, and execute atomic database transactions with full integrity."
    ],
    problem:
      "Academic institutions need reliable data consistency and validation logic to prevent student over-enrollment, ensure prerequisite course completion, and avoid database concurrency corruptions without unnecessary web overhead.",
    solution:
      "Engineered an efficient Java application in Eclipse utilizing JDBC PreparedStatements, modular DAO (Data Access Object) classes, relational SQL constraints, and interactive console menu navigation with rigorous input validation.",
    features: [
      {
        title: "Interactive Eclipse Terminal Menu",
        description: "Menu-driven console navigation (1-8) with input parsing, clear ASCII prompts, and user role validation."
      },
      {
        title: "Course Catalog & Search",
        description: "Terminal queries displaying available courses, department codes, credits, and live seat capacities."
      },
      {
        title: "Prerequisite Verification Engine",
        description: "Java business logic verifying that students have cleared prerequisite courses before confirming registration."
      },
      {
        title: "Student Enrollment & Records Management",
        description: "CRUD operations allowing administrators to register students, update semester credits, and review transcripts."
      },
      {
        title: "JDBC Transactional Safety",
        description: "Prepared SQL statements with commit and rollback handling to guarantee zero partial registrations or seat anomalies."
      }
    ],
    architecture: {
      frontend: "Console-based interactive terminal interface with input loops, menu choices (1-8), and structured tabular console output running in the Eclipse terminal.",
      backend: "Modular Core Java architecture implementing OOP principles, model classes (Student, Course, Enrollment), and DAO (Data Access Object) design pattern.",
      database: "Relational SQL database schema with foreign keys, primary keys, and integrity constraints managing student records and course catalogs.",
      security: "Parameterized SQL queries (PreparedStatements) preventing SQL injection vulnerabilities, input sanitization, and administrative passcode access."
    },
    technologies: {
      frontend: ["Eclipse Terminal Console", "Java CLI", "Interactive Text Menus"],
      backend: ["Java (Core & OOP)", "JDBC Driver", "DAO Pattern", "PreparedStatements"],
      database: ["SQL", "Relational Database Design", "CRUD Operations", "Foreign Keys"],
      tools: ["Eclipse IDE", "Git", "MySQL / SQL Workbench"]
    },
    keyMetrics: [
      { label: "Execution Environment", value: "Eclipse IDE" },
      { label: "Data Consistency", value: "100% ACID" },
      { label: "SQL Injection Safety", value: "100%" }
    ],
    images: [
      {
        url: "/projects/course-registration.jpg",
        title: "Eclipse IDE Workspace & Active Terminal Console",
        description: "Eclipse IDE showing Java source code in the editor and the active interactive Course Registration CLI menu running in the Eclipse Console terminal.",
        featured: true
      }
    ],
    githubUrl: "https://github.com/Adityashastri0216",
    liveUrl: "https://github.com/Adityashastri0216",
    accent: {
      primary: "violet",
      gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
      border: "border-violet-500/40",
      glow: "shadow-violet-500/20"
    }
  }
];

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projectsData.find(
    (p) => p.slug.toLowerCase() === slug.toLowerCase() || p.id === slug
  );
}

export function getAllProjects(): ProjectDetail[] {
  return projectsData;
}

export function getNextProject(currentSlug: string): ProjectDetail {
  const currentIndex = projectsData.findIndex(
    (p) => p.slug.toLowerCase() === currentSlug.toLowerCase() || p.id === currentSlug
  );
  const nextIndex = (currentIndex + 1) % projectsData.length;
  return projectsData[nextIndex];
}
