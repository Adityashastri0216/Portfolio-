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
    githubUrl: "https://github.com/aditya-shastri",
    liveUrl: "https://github.com/aditya-shastri",
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
    title: "JEM Soft",
    tagline: "Enterprise Workflow Orchestration, Real-Time Analytics & Resource Management Suite",
    category: "Enterprise SaaS Solution",
    year: "2024",
    role: "Full Stack Architect",
    timeline: "4 Months",
    status: "Enterprise Deployed",
    description:
      "A comprehensive business software solution empowering enterprises to orchestrate internal workflows, track real-time operational revenue KPIs, and govern role-based team permissions.",
    overview: [
      "JEM Soft is an enterprise-grade SaaS web platform created to bridge the operational gap between team execution and executive decision-making. Featuring interactive revenue charts, deals pipeline funnels, subscription management tables, and dynamic role management, it empowers managers with 360-degree situational awareness.",
      "Engineered with Next.js App Router, TypeScript, Prisma ORM, and PostgreSQL, the platform maintains strict data integrity, type-safety across the entire stack, and lightning-fast server-rendered dashboards."
    ],
    problem:
      "Growing companies frequently face fragmented team workflows spread across disparate spreadsheets, leading to data silos, outdated financial reporting, and insecure access control.",
    solution:
      "Consolidated enterprise data into a centralized PostgreSQL relational schema accessed via Prisma ORM, providing real-time aggregation queries, automated deal pipelines, and granular Role-Based Access Control (RBAC).",
    features: [
      {
        title: "Executive Intelligence Dashboard",
        description: "Real-time Annual Recurring Revenue (ARR), Monthly Recurring Revenue (MRR), and active user health monitors."
      },
      {
        title: "Interactive Deal Flow Pipeline",
        description: "Kanban and stage-funnel visualizations for deals from initial lead qualification through to closed contracts."
      },
      {
        title: "Customer Subscription Ledger",
        description: "Filterable table showing active tiers, renewal dates, payment histories, and direct action triggers."
      },
      {
        title: "Role-Based Access Control (RBAC)",
        description: "Granular permissions system isolating executive financials, team operations, and audit log histories."
      },
      {
        title: "Automated Reporting Exports",
        description: "One-click generation of quarterly operational statements and executive presentation summaries."
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
      { label: "Dashboard Query Speed", value: "<85ms" },
      { label: "Type Safety Coverage", value: "100%" },
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
    githubUrl: "https://github.com/aditya-shastri",
    liveUrl: "https://github.com/aditya-shastri",
    accent: {
      primary: "emerald",
      gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
      border: "border-emerald-500/40",
      glow: "shadow-emerald-500/20"
    }
  },
  {
    id: "3",
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
    githubUrl: "https://github.com/aditya-shastri",
    liveUrl: "https://github.com/aditya-shastri",
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
