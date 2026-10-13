export const personalInfo = {
  name: "Dilli Prasath",
  fullName: "Dilli Prasath B",
  title: "Java Full Stack Developer & AI/DS Enthusiast",
  greeting: "Hi, I'm",
  bioShort: "Passionate web developer skilled in creating modern, responsive, and user-friendly websites using HTML, CSS, JavaScript, React, and Java backend technologies to build real-world digital solutions.",
  aboutParagraphs: [
    "I am an enthusiastic and motivated fresher pursuing B.Tech in Artificial Intelligence and Data Science at Vel Tech High Tech Dr. Rangarajan Dr. Sakunthala Engineering College. I have a deep interest in web development, front-end design, and mastering modern software architectures.",
    "My technical foundation spans Java, HTML, CSS, JavaScript, React, Python, Spring Boot, and MySQL. I enjoy engineering responsive, performant, and intuitive web applications that solve real-world problems and deliver exceptional user experiences.",
    "As a fast learner with strong analytical and problem-solving abilities, I am constantly exploring cutting-edge tools in AI and full-stack engineering to build innovative digital products."
  ],
  resumeUrl: "./img/Dilli prasath resume.pdf",
  contact: {
    location: "Chennai, Tamil Nadu, India",
    phone: "+91 8610140943",
    email: "dillibabu2725@gmail.com",
    birthday: "12 Sept 2004",
    education: "B.Tech in AI & Data Science",
    college: "Vel Tech High Tech Dr. Rangarajan Dr. Sakunthala Engg. College"
  },
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/dilli-prasath-8610140943d/",
      icon: "fa-brands fa-linkedin"
    },
    {
      name: "GitHub",
      url: "https://github.com/dilliprasathB",
      icon: "fa-brands fa-github"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/mr__black_lad?igsh=bmw1dzBrOTBodWhm",
      icon: "fa-brands fa-instagram"
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/918610140943",
      icon: "fa-brands fa-whatsapp"
    }
  ]
};

export const skillsData = [
  { name: "Java", category: "Backend", icon: "fa-brands fa-java", color: "#f89820" },
  { name: "HTML5", category: "Frontend", icon: "fa-brands fa-html5", color: "#ff5722" },
  { name: "CSS3", category: "Frontend", icon: "fa-brands fa-css3-alt", color: "#2965f1" },
  { name: "JavaScript", category: "Frontend", icon: "fa-brands fa-js", color: "#f7df1e" },
  { name: "React", category: "Frontend", icon: "fa-brands fa-react", color: "#61dafb" },
  { name: "Tailwind CSS", category: "Frontend", icon: "fa-brands fa-css3", color: "#38bdf8" },
  { name: "Bootstrap", category: "Frontend", icon: "fa-brands fa-bootstrap", color: "#7952b3" },
  { name: "Spring Boot", category: "Backend", icon: "fa-solid fa-leaf", color: "#6db33f" },
  { name: "MySQL", category: "Database", icon: "fa-solid fa-database", color: "#00758f" },
  { name: "Power BI", category: "Analytics", icon: "fa-solid fa-chart-column", color: "#f2c811" },
  { name: "Microsoft Excel", category: "Analytics", icon: "fa-solid fa-file-excel", color: "#107c41" },
  { name: "Python / OpenCV", category: "AI & Tech", icon: "fa-brands fa-python", color: "#3776ab" }
];

export const projectsData = [
  {
    id: 1,
    title: "Hospital Appointment System",
    subtitle: "Healthcare Management Platform",
    category: "Frontend",
    image: "/img/hospital.jpg",
    fallbackImage: "/img/hospital",
    description: "Developed a responsive Hospital Appointment System enabling seamless online doctor booking, patient schedule tracking, and appointment management.",
    details: "Designed user-friendly dashboards, appointment reservation forms, and doctor listing interfaces with modern UI/UX and mobile-responsive layout principles. Emphasized clean form handling, intuitive navigation, and accessible interface components.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    highlights: ["Doctor search & filtering", "Interactive appointment scheduling", "Responsive patient dashboard", "Clean UI/UX flow"]
  },
  {
    id: 2,
    title: "Virtual Calculator using OpenCV & GenAI",
    subtitle: "AI & Gesture-Controlled Computing",
    category: "AI & Tech",
    image: "/img/virtual calculater.png",
    description: "An AI-powered smart calculator leveraging OpenCV computer vision and Google's Gemini AI to interpret hand gestures and solve complex mathematical equations.",
    details: "Detects real-time hand gestures via camera feed to draw digits and mathematical operators in mid-air. Uses advanced vision tracking and Gemini AI processing to evaluate complex arithmetic and multi-step equations instantly.",
    technologies: ["Python", "OpenCV", "Google Gemini AI", "Computer Vision"],
    highlights: ["Real-time hand gesture tracking", "Air-canvas drawing recognition", "Gemini AI math resolution", "Interactive visual feedback"]
  },
  {
    id: 3,
    title: "Road Accident Analysis (2021 vs 2022)",
    subtitle: "Interactive Power BI Analytics Dashboard",
    category: "Analytics",
    image: "/img/powerbi project.png",
    description: "Developed a dynamic Power BI analytical dashboard tracking road accident patterns, casualty trends, and yearly comparative metrics across 2021 vs 2022.",
    details: "Formulated robust DAX measures, KPI cards, and calculated columns to evaluate accident severity, vehicle categorization, speed zones, and monthly trends. Delivered actionable visual insights on fatality distributions and casualty reductions.",
    technologies: ["Power BI", "DAX", "MySQL", "Excel"],
    highlights: ["Year-over-Year trend analysis", "Custom DAX metrics & KPIs", "Multi-filter interactive dashboard", "Accident severity mapping"]
  },
  {
    id: 4,
    title: "E-Commerce Database with Customer Analytics",
    subtitle: "Relational DBMS & Analytical Queries",
    category: "Database",
    image: "/img/er diagram.png",
    description: "Engineered a scalable E-Commerce Database Management System using MySQL with 16 interconnected normalized relational tables.",
    details: "Comprehensive relational schema covering customers, catalog inventory, orders, payment transactions, shipments, and customer reviews. Implemented optimized indexes, foreign key constraints, and advanced SQL aggregation queries for business insights.",
    technologies: ["MySQL", "Relational Design", "ER Diagram", "SQL Analytics"],
    highlights: ["16 Normalized ER tables", "Complex joins & aggregate queries", "Order lifecycle management", "Customer behavior analytics"]
  }
];
