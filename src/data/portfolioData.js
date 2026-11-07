export const personalInfo = {
  name: "Dilli Prasath",
  fullName: "Dilli Prasath B",
  title: "Java Full Stack Developer & AI Enthusiast",
  greeting: "Hi, I'm",
  availability: "Available for Roles & Projects",
  bioShort: "Passionate software developer skilled in building modern, scalable, and user-friendly applications using Java, Spring Boot, React, and SQL, with an interest in AI and data-driven solutions.",
  aboutParagraphs: [
    "I am a passionate and dedicated Java Full Stack Developer and AI Enthusiast pursuing B.Tech in Artificial Intelligence and Data Science at Vel Tech High Tech Dr. Rangarajan Dr. Sakunthala Engineering College. I specialize in building modern, high-performance, and scalable digital solutions.",
    "My technical foundation spans Java, Spring Boot, REST APIs, React, HTML, CSS, JavaScript, and relational databases like MySQL and PostgreSQL. I take pride in engineering clean backends paired with intuitive, accessible, and responsive user experiences.",
    "Driven by curiosity and a commitment to continuous learning, I actively explore cutting-edge AI integrations, computer vision systems, and data analytics to solve meaningful real-world challenges."
  ],
  resumeUrl: "/img/Dilli prasath resume.pdf",
  fallbackResumeUrl: "/Dilli_Prasath_Resume.pdf",
  contact: {
    location: "Chennai, Tamil Nadu, India",
    phone: "+91 8610140943",
    email: "dillibabu2725@gmail.com",
    birthday: "12 Sept 2004",
    education: "B.Tech in Artificial Intelligence & Data Science",
    college: "Vel Tech High Tech Dr. Rangarajan Dr. Sakunthala Engineering College"
  },
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/dilli-prasath-8610140943d/",
      icon: "fa-brands fa-linkedin-in",
      color: "#0A66C2"
    },
    {
      name: "GitHub",
      url: "https://github.com/dilliprasathB",
      icon: "fa-brands fa-github",
      color: "#181717"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/mr__black_lad?igsh=bmw1dzBrOTBodWhm",
      icon: "fa-brands fa-instagram",
      color: "#E1306C"
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/918610140943",
      icon: "fa-brands fa-whatsapp",
      color: "#25D366"
    }
  ]
};

export const skillsCategories = [
  { id: "all", label: "All Skills" },
  { id: "programming", label: "Programming" },
  { id: "backend", label: "Backend" },
  { id: "frontend", label: "Frontend" },
  { id: "database", label: "Database" },
  { id: "tools", label: "Tools & Analytics" }
];

export const skillsData = [
  // Programming
  { name: "Java", category: "Programming", categoryKey: "programming", icon: "fa-brands fa-java", color: "#F89820", level: "Advanced" },
  { name: "JavaScript", category: "Programming", categoryKey: "programming", icon: "fa-brands fa-js", color: "#F7DF1E", level: "Proficient" },
  { name: "Python", category: "Programming", categoryKey: "programming", icon: "fa-brands fa-python", color: "#3776AB", level: "Intermediate" },
  
  // Backend
  { name: "Spring Boot", category: "Backend", categoryKey: "backend", icon: "fa-solid fa-leaf", color: "#6DB33F", level: "Proficient" },
  { name: "REST APIs", category: "Backend", categoryKey: "backend", icon: "fa-solid fa-server", color: "#0645C5", level: "Advanced" },
  
  // Frontend
  { name: "React", category: "Frontend", categoryKey: "frontend", icon: "fa-brands fa-react", color: "#00D8FE", level: "Proficient" },
  { name: "HTML5", category: "Frontend", categoryKey: "frontend", icon: "fa-brands fa-html5", color: "#E34F26", level: "Advanced" },
  { name: "CSS3", category: "Frontend", categoryKey: "frontend", icon: "fa-brands fa-css3-alt", color: "#1572B6", level: "Advanced" },
  { name: "Tailwind CSS", category: "Frontend", categoryKey: "frontend", icon: "fa-brands fa-css3", color: "#38BDF8", level: "Proficient" },
  { name: "Bootstrap", category: "Frontend", categoryKey: "frontend", icon: "fa-brands fa-bootstrap", color: "#7952B3", level: "Proficient" },
  
  // Database
  { name: "MySQL", category: "Database", categoryKey: "database", icon: "fa-solid fa-database", color: "#00758F", level: "Advanced" },
  { name: "PostgreSQL", category: "Database", categoryKey: "database", icon: "fa-solid fa-database", color: "#336791", level: "Intermediate" },
  
  // Tools
  { name: "Git", category: "Tools & Analytics", categoryKey: "tools", icon: "fa-brands fa-git-alt", color: "#F05032", level: "Proficient" },
  { name: "GitHub", category: "Tools & Analytics", categoryKey: "tools", icon: "fa-brands fa-github", color: "#181717", level: "Proficient" },
  { name: "Power BI", category: "Tools & Analytics", categoryKey: "tools", icon: "fa-solid fa-chart-column", color: "#F2C811", level: "Proficient" },
  { name: "Microsoft Excel", category: "Tools & Analytics", categoryKey: "tools", icon: "fa-solid fa-file-excel", color: "#107C41", level: "Advanced" }
];

export const experienceData = [
  {
    id: 1,
    role: "Java Full Stack Developer Intern",
    company: "Software Solutions & Web Systems",
    duration: "2024 – Present",
    location: "Chennai, India",
    type: "Internship",
    description: "Developing responsive web applications and scalable backend services with modern architectural practices.",
    responsibilities: [
      "Engineered modular REST APIs and backend micro-services utilizing Java and the Spring Boot framework.",
      "Designed dynamic, component-driven user interfaces using React, JavaScript, HTML5, and CSS3.",
      "Managed and queried relational database structures in MySQL and PostgreSQL with high query efficiency.",
      "Collaborated using Git and GitHub for version control, issue tracking, and automated deployment testing."
    ]
  },
  {
    id: 2,
    role: "Full Stack & AI Project Trainee",
    company: "Vel Tech Innovation & Project Lab",
    duration: "2023 – 2024",
    location: "Chennai, India",
    type: "Academic & Projects",
    description: "Built end-to-end applications bridging full-stack web architectures with machine vision and computer science principles.",
    responsibilities: [
      "Developed full-stack web solutions such as Khel Club turf booking and Billing Management System.",
      "Implemented an air-gesture mathematical calculator using Python, OpenCV computer vision, and Google Gemini AI.",
      "Designed and normalized a 16-table relational database for comprehensive e-commerce transaction analytics.",
      "Formulated Power BI interactive reporting dashboards utilizing DAX measures for statistical trend evaluation."
    ]
  }
];

export const projectsData = [
  {
    id: 1,
    title: "Khel Club",
    subtitle: "Sports Turf & Club Booking Platform",
    category: "Full Stack",
    image: "/img/khel_club.png",
    description: "An intuitive web application designed for booking sports turfs, scheduling club matches, and managing slot reservations seamlessly.",
    details: "Built with a responsive front-end and a robust Java/Spring Boot backend, Khel Club provides sports enthusiasts with real-time slot availability, instant booking confirmation, and court management for sports facility owners.",
    technologies: ["Java", "Spring Boot", "React", "MySQL", "REST APIs"],
    highlights: ["Real-time turf slot booking", "Court schedule management", "Automated confirmation workflows", "Mobile responsive UI"],
    githubUrl: "https://github.com/dilliprasathB",
    demoUrl: ""
  },
  {
    id: 2,
    title: "Billing Management System",
    subtitle: "Enterprise Invoicing & Inventory Solution",
    category: "Backend",
    image: "/img/billing_system.png",
    description: "A comprehensive billing and invoice generation system facilitating customer billing, itemized inventory tracking, and sales reporting.",
    details: "Engineered using Java, Spring Boot, and MySQL to automate billing workflows, calculate taxes, manage product catalog stock levels, and generate printable invoices with high accuracy.",
    technologies: ["Java", "Spring Boot", "MySQL", "REST APIs", "SQL"],
    highlights: ["Automated invoice calculation", "Stock & inventory management", "Customer transaction logs", "Tax & discount handling"],
    githubUrl: "https://github.com/dilliprasathB",
    demoUrl: ""
  },
  {
    id: 3,
    title: "Hospital Appointment System",
    subtitle: "Healthcare Management Platform",
    category: "Frontend",
    image: "/img/hospital.jpg",
    fallbackImage: "/img/hospital",
    description: "Developed a responsive Hospital Appointment System enabling seamless online doctor booking, patient schedule tracking, and appointment management.",
    details: "Designed user-friendly dashboards, appointment reservation forms, and doctor listing interfaces with modern UI/UX and mobile-responsive layout principles. Emphasized clean form handling, intuitive navigation, and accessible interface components.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    highlights: ["Doctor search & filtering", "Interactive appointment scheduling", "Responsive patient dashboard", "Clean UI/UX flow"],
    githubUrl: "https://github.com/dilliprasathB",
    demoUrl: ""
  },
  {
    id: 4,
    title: "Virtual Calculator using OpenCV & GenAI",
    subtitle: "AI & Gesture-Controlled Computing",
    category: "AI & Tech",
    image: "/img/virtual calculater.png",
    description: "An AI-powered smart calculator leveraging OpenCV computer vision and Google's Gemini AI to interpret hand gestures and solve complex mathematical equations.",
    details: "Detects real-time hand gestures via camera feed to draw digits and mathematical operators in mid-air. Uses advanced vision tracking and Gemini AI processing to evaluate complex arithmetic and multi-step equations instantly.",
    technologies: ["Python", "OpenCV", "Google Gemini AI", "Computer Vision"],
    highlights: ["Real-time hand gesture tracking", "Air-canvas drawing recognition", "Gemini AI math resolution", "Interactive visual feedback"],
    githubUrl: "https://github.com/dilliprasathB",
    demoUrl: ""
  },
  {
    id: 5,
    title: "Road Accident Analysis (2021 vs 2022)",
    subtitle: "Interactive Power BI Analytics Dashboard",
    category: "Analytics",
    image: "/img/powerbi project.png",
    description: "Developed a dynamic Power BI analytical dashboard tracking road accident patterns, casualty trends, and yearly comparative metrics across 2021 vs 2022.",
    details: "Formulated robust DAX measures, KPI cards, and calculated columns to evaluate accident severity, vehicle categorization, speed zones, and monthly trends. Delivered actionable visual insights on fatality distributions and casualty reductions.",
    technologies: ["Power BI", "DAX", "MySQL", "Excel"],
    highlights: ["Year-over-Year trend analysis", "Custom DAX metrics & KPIs", "Multi-filter interactive dashboard", "Accident severity mapping"],
    githubUrl: "https://github.com/dilliprasathB",
    demoUrl: ""
  },
  {
    id: 6,
    title: "E-Commerce Database with Customer Analytics",
    subtitle: "Relational DBMS & Analytical Queries",
    category: "Database",
    image: "/img/er diagram.png",
    description: "Engineered a scalable E-Commerce Database Management System using MySQL with 16 interconnected normalized relational tables.",
    details: "Comprehensive relational schema covering customers, catalog inventory, orders, payment transactions, shipments, and customer reviews. Implemented optimized indexes, foreign key constraints, and advanced SQL aggregation queries for business insights.",
    technologies: ["MySQL", "Relational Design", "ER Diagram", "SQL Analytics"],
    highlights: ["16 Normalized ER tables", "Complex joins & aggregate queries", "Order lifecycle management", "Customer behavior analytics"],
    githubUrl: "https://github.com/dilliprasathB",
    demoUrl: ""
  }
];
