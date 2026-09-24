export const portfolioData = {
  hero: {
    title: "Yuvraj",
    subtitle: "Singh",
    role: "Full-Stack Web Developer",
    description: (
      <>
        Engineering scalable full-stack web applications with <span className="text-white font-bold">JavaScript, React.js, Node.js & Express.js</span>. Passionate about <span className="text-primary italic font-semibold">RESTful APIs, Microservices & Cloud Architecture</span>.
      </>
    ),
    resumeLink: "https://drive.google.com/file/d/1hnhPQcRrmByIUIFwmfG5ml0wjVOyXSrJ/view?usp=drive_link"
  },
  about: {
    photo: "/assets/My_photo4.png",
    bio: (
      <>
        I'm a B.Tech Computer Science and Engineering student at <span className="text-white font-bold">Amity University, Noida</span> (2022–2026). I specialize in <span className="text-primary font-semibold">Full-Stack Web Development using JavaScript, React.js, Node.js, and Express.js</span>, with hands-on industry experience building real-time collaboration tools, e-commerce platforms, and published IEEE research.
      </>
    ),
    interests: "Full-Stack Web Development, MERN Stack (JavaScript, React.js, Node.js, Express.js), RESTful APIs, Microservices, and Cloud Computing.",
    careerGoals: "To engineer robust backend architectures and high-performance full-stack web products that solve real-world problems at scale."
  },
  skills: [
    {
      title: "Core Technologies",
      items: ["JavaScript (ES6+)", "React.js", "Node.js", "Express.js", "TypeScript"]
    },
    {
      title: "Backend & APIs",
      items: ["Node.js", "Express.js", "RESTful API design", "JWT Authentication", "Socket.io", "FastAPI"]
    },
    {
      title: "Frontend",
      items: ["JavaScript", "React.js", "HTML5", "CSS3", "Tailwind CSS", "Next.js"]
    },
    {
      title: "Databases",
      items: ["MongoDB", "SQL", "PostgreSQL"]
    },
    {
      title: "Cloud & DevOps",
      items: ["AWS (EC2, Lambda, S3, RDS, VPC, IAM)", "Docker", "GitHub Actions"]
    },
    {
      title: "Developer Tools & Collaboration",
      items: ["Git", "GitHub", "VS Code", "Postman", "Google Antigravity"]
    }
  ],
  experience: [
    {
      company: "MarketinGlu",
      companyLink: "https://marketinglu.com/",
      role: "Software Developer Intern",
      date: "September 2025 – Present",
      tech: "JavaScript, React.js, Node.js, Express.js, REST APIs",
      points: [
        "Engineering responsive frontend components and high-performance backend APIs for client web applications and enterprise digital engineering solutions.",
        "Collaborating with cross-functional teams to integrate RESTful endpoints, optimize database interactions, and enhance digital user experiences."
      ]
    },
    {
      company: "SmartBridge – SmartInternz",
      role: "MERN Stack Developer Intern",
      date: "May – July 2025",
      tech: "JavaScript, React, Node.js, Express.js, MongoDB",
      points: [
        "Owned the backend build for a real-time chat application end-to-end, turning an open-ended product brief into a working Node.js/Express.js/MongoDB service and React client shipped to production.",
        "Independently identified and closed authentication and data-access gaps, designing secure auth and storage layers that cut latency and improved reliability without requiring senior sign-off on implementation details."
      ]
    },
    {
      company: "Jabsz Gaming Studios LLP, Sector-49 Gurgaon",
      role: "Web Developer Intern | Part-time",
      date: "May – July 2025",
      tech: "TypeScript, React, Node.js, Express.js, Godot",
      points: [
        "Built a browser-based game using TypeScript, engineering core gameplay mechanics, UI screens, and state-driven transitions across 50+ levels through Godot Engine integration.",
        "Spotted a performance bottleneck affecting gameplay responsiveness and independently optimized backend service architecture and API interactions to fix it, without being asked to."
      ]
    }
  ],
  projects: [
    {
      title: "HireIn",
      subtitle: "AI Recruitment Platform",
      badge: "AI & RAG PLATFORM",
      icon: "fa-solid fa-robot",
      tech: "React, TypeScript, Node.js, Express.js, PostgreSQL, FastAPI",
      description: "A scalable AI recruitment platform backend built end-to-end with RESTful APIs, RBAC, batch resume screening for up to 100 resumes, and a production RAG-based recruiter assistant using Python FastAPI and Sentence Transformer embeddings.",
      points: [
        "Scoped and shipped a scalable AI recruitment platform backend end-to-end, turning a broad 'help recruiters screen faster' ask into RESTful APIs, RBAC, and batch resume screening for up to 100 resumes.",
        "Built a production RAG-based recruiter assistant in Python, integrating FastAPI with a Sentence Transformer embeddings API to power natural-language candidate search and semantic matching, deployed as a live service behind the recruiter dashboard."
      ],
      tryLink: "https://hire-in-fwc.vercel.app/",
      knowMoreLink: "https://github.com/tanyarajput08/Hire_In_FWC"
    },
    {
      title: "Team Task Manager",
      subtitle: "Agile Project Management Portal",
      badge: "COLLABORATION ENGINE",
      icon: "fa-solid fa-list-check",
      tech: "React.js, TypeScript, Node.js, Express.js, MongoDB, TanStack Query",
      description: "Team Task Manager is a full-stack web application developed to help teams organize projects, assign tasks, monitor progress, and manage collaboration efficiently through a centralized workspace.",
      points: [
        "Designed REST APIs and real-time backend services with Socket.io for dashboard analytics, task prioritization, and status tracking, integrating TanStack Query for client-side caching and data synchronization.",
        "Owned a centralized team collaboration platform end-to-end, from problem framing with a 5-person internship team to a piloted RESTful/Socket.io backend, closing a real communication gap and measurably boosting the team's task throughput."
      ],
      tryLink: "https://team-task-manager-526z.onrender.com/",
      knowMoreLink: "https://github.com/ThinkYuvraj/Team-Task-Manager"
    },
    {
      title: "Slice & Fire",
      subtitle: "Full-Stack E-Commerce Ordering Platform",
      badge: "FULL-STACK E-COMMERCE",
      icon: "fa-solid fa-pizza-slice",
      tech: "React 18 / Vite, Express.js, TypeScript, Node-Cron, Nodemailer",
      description: "A production-grade, full-stack Neapolitan pizza delivery platform and automated kitchen operations system. Built with React 18 / Vite, Express.js, TypeScript, and Node-Cron, featuring real-time interactive pizza customization, automatic recipe inventory deduction, automated email alerting via Nodemailer, and an admin operations console.",
      points: [
        "Built a full-stack e-commerce ordering platform end-to-end — from a custom pizza builder with real-time ingredient selection to inventory-aware order validation — using React 18/Vite, TypeScript, Express.js, and Node.js.",
        "Engineered a BOM-based inventory automation engine with scheduled Node-Cron jobs and Nodemailer low-stock alerts, replacing manual stock checks with an admin console operations staff could run without any engineering support."
      ],
      tryLink: "https://pizzadeliveryapp.vercel.app/",
      knowMoreLink: "https://github.com/ThinkYuvraj/Online-E-Commerce-Platform",
      blogLink: "https://medium.com/@thinkyuvraj/from-idea-to-application-my-oibsip-journey-building-a-full-stack-pizza-delivery-app-74395d97d81d"
    },
    {
      title: "SocialeX",
      subtitle: "Real-Time Messaging Platform",
      badge: "REAL-TIME CHAT",
      icon: "fa-solid fa-comments",
      tech: "React.js, Node.js, Express.js, MongoDB, Socket.io",
      description: "A full-stack real-time messaging application featuring low-latency socket connections, authentication layers, responsive React UI components, and state synchronization.",
      points: [
        "Built a full-stack real-time messaging engine with Socket.io, Node.js, and Express, enabling sub-100ms bi-directional message dispatching and active user presence tracking.",
        "Implemented JWT-based authentication, MongoDB message persistence, and responsive React client interfaces with real-time state synchronization."
      ],
      tryLink: "https://socialex-static.vercel.app/",
      knowMoreLink: "https://github.com/amrutanshupandadeveloper/Chat_App"
    },
    {
      title: "Weatherly",
      subtitle: "Predictive Weather System",
      badge: "DEEP LEARNING",
      icon: "fa-solid fa-cloud-bolt",
      tech: "Python, TensorFlow, PyTorch, LSTM-GRU, FastAPI",
      description: "Hybrid weather forecasting system combining LSTM-GRU deep learning networks to predict temperature, precipitation, and wind speed using ERA5 datasets.",
      points: [
        "Architected a deep learning predictive pipeline combining LSTM and GRU neural network architectures trained on NASA POWER & ERA5 meteorological datasets.",
        "Engineered multi-parameter forecasting for temperature, humidity, precipitation, and wind speed deployed behind a Python FastAPI service."
      ],
      tryLink: "https://github.com/ThinkYuvraj/Weatherly",
      knowMoreLink: "https://github.com/ThinkYuvraj/Weatherly"
    },
    {
      title: "Creator Roster",
      subtitle: "Talent Analytics & Operations Dashboard",
      badge: "CREATOR ANALYTICS",
      icon: "fa-solid fa-users-gear",
      tech: "React.js, TypeScript, Tailwind CSS, REST APIs",
      description: "An interactive analytics and management dashboard for organizing creator rosters, tracking engagement metrics, managing profile data, and streamlining talent operations.",
      points: [
        "Engineered an interactive talent analytics dashboard using React 18, TypeScript, and Tailwind CSS for real-time creator roster tracking and campaign management.",
        "Implemented custom filtering components, performance metrics visualization, and RESTful API integrations to streamline creator operations."
      ],
      tryLink: "https://github.com/ThinkYuvraj/Creator-Roster-Dashboard",
      knowMoreLink: "https://github.com/ThinkYuvraj/Creator-Roster-Dashboard"
    }
  ],
  education: [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Amity University, Noida",
      duration: "2022 – 2026",
      score: "CGPA: 7.33/10",
      coursework: ["Data Structures", "Algorithms", "Operating Systems", "DBMS", "Computer Networks", "Artificial Intelligence"]
    },
    {
      degree: "Senior Secondary (Class XII)",
      institution: "Delhi Public School, Meerut",
      duration: "2022",
      score: "84.20%",
      coursework: ["Physics", "Chemistry", "Mathematics", "English"]
    },
    {
      degree: "High School (Class X)",
      institution: "Delhi Public School, Meerut",
      duration: "2020",
      score: "73.40%",
      coursework: ["Mathematics", "Science", "Social Science", "English", "Computer Applications"]
    }
  ],
  publications: [
    {
      title: "A Novice Approach to Weather Forecasting by Using Hybrid Predictive Methodologies in ML",
      venue: "Proceedings of the IC2SDT, NIT Delhi, India, 2025",
      documentId: "IEEE Xplore Document ID: 11383605",
      link: "https://ieeexplore.ieee.org/"
    }
  ],
  certifications: [
    {
      name: "MongoDB Developer Path",
      issuer: "MongoDB",
      date: "July 2025"
    },
    {
      name: "AWS Academy Graduate, AWS Academy Cloud Foundations",
      issuer: "AWS Academy",
      date: "January 2025"
    },
    {
      name: "The Joy of Computing Using Python",
      issuer: "NPTEL, IIT Madras",
      date: "July – October 2024"
    },
    {
      name: "Design Thinking: A Primer",
      issuer: "NPTEL, IIT Madras",
      date: "January – February 2024"
    }
  ],
  resumeData: {
    name: "Yuvraj Singh",
    title: "Full-Stack Web Developer",
    contact: {
      phone: "+91-9639677118",
      email: "thinkyuvraj@gmail.com",
      linkedin: "https://linkedin.com/in/thinkyuvraj",
      linkedinDisplay: "linkedin.com/in/thinkyuvraj",
      github: "https://github.com/ThinkYuvraj",
      githubDisplay: "github.com/ThinkYuvraj",
      location: "Noida, India"
    },
    education: [
      {
        institution: "Amity University, Noida",
        degree: "Bachelor of Technology in Computer Science and Engineering",
        duration: "2022 – 2026",
        score: "CGPA: 7.33/10"
      },
      {
        institution: "Delhi Public School, Meerut",
        degree: "Senior Secondary",
        duration: "2022",
        score: "84.20%"
      },
      {
        institution: "Delhi Public School, Meerut",
        degree: "High School",
        duration: "2020",
        score: "73.40%"
      }
    ],
    technicalSkills: {
      "Programming Languages": ["Python", "JavaScript", "TypeScript"],
      "Backend & APIs": ["FastAPI", "Node.js", "Express.js", "RESTful API design", "JWT Authentication", "Socket.io"],
      "Databases": ["SQL", "PostgreSQL", "MongoDB"],
      "Cloud & DevOps": ["AWS (EC2, Lambda, S3, RDS, VPC, IAM, Auto Scaling)", "Docker", "GitHub Actions"],
      "Frontend": ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
      "Developer Tools & Collaboration": ["Git", "GitHub", "VS Code", "Postman", "Google Antigravity"]
    },
    experience: [
      {
        role: "MERN Stack Developer Intern",
        company: "SmartBridge – SmartInternz",
        duration: "May – July 2025",
        tech: "JavaScript, React, Node.js, Express.js, MongoDB",
        bullets: [
          "Owned the backend build for a real-time chat application end-to-end, turning an open-ended product brief into a working Node.js/Express.js/MongoDB service and React client shipped to production.",
          "Independently identified and closed authentication and data-access gaps, designing secure auth and storage layers that cut latency and improved reliability without requiring senior sign-off on implementation details."
        ]
      },
      {
        role: "Web Developer Intern",
        company: "Jabsz Gaming Studios LLP, Sector-49 Gurgaon | Part-time",
        duration: "May – July 2025",
        tech: "TypeScript, React, Node.js, Express.js, Godot",
        bullets: [
          "Built a browser-based game using TypeScript, engineering core gameplay mechanics, UI screens, and state-driven transitions across 50+ levels through Godot Engine integration.",
          "Spotted a performance bottleneck affecting gameplay responsiveness and independently optimized backend service architecture and API interactions to fix it, without being asked to."
        ]
      }
    ],
    projects: [
      {
        title: "HireIn – AI Recruitment Platform",
        tech: "React, TypeScript, Node.js, Express.js, PostgreSQL, FastAPI",
        bullets: [
          "Scoped and shipped a scalable AI recruitment platform backend end-to-end, turning a broad 'help recruiters screen faster' ask into RESTful APIs, RBAC, and batch resume screening for up to 100 resumes.",
          "Built a production RAG-based recruiter assistant in Python, integrating FastAPI with a Sentence Transformer embeddings API to power natural-language candidate search and semantic matching, deployed as a live service behind the recruiter dashboard."
        ]
      },
      {
        title: "Team Task Manager",
        tech: "React.js, TypeScript, Node.js, Express.js, MongoDB, TanStack Query",
        bullets: [
          "Designed REST APIs and real-time backend services with Socket.io for dashboard analytics, task prioritization, and status tracking, integrating TanStack Query for client-side caching and data synchronization.",
          "Owned a centralized team collaboration platform end-to-end, from problem framing with a 5-person internship team to a piloted RESTful/Socket.io backend, closing a real communication gap and measurably boosting the team's task throughput."
        ]
      },
      {
        title: "Full-Stack E-Commerce Ordering Platform – Slice & Fire",
        tech: "React.js, TypeScript, Express.js, Node.js, Vite, Node-Cron, Nodemailer",
        bullets: [
          "Built a full-stack e-commerce ordering platform end-to-end — from a custom pizza builder with real-time ingredient selection to inventory-aware order validation — using React 18/Vite, TypeScript, Express.js, and Node.js.",
          "Engineered a BOM-based inventory automation engine with scheduled Node-Cron jobs and Nodemailer low-stock alerts, replacing manual stock checks with an admin console operations staff could run without any engineering support."
        ]
      }
    ],
    publications: [
      {
        title: "A Novice Approach to Weather Forecasting by Using Hybrid Predictive Methodologies in ML",
        venue: "Proceedings of the IC2SDT, NIT Delhi, India, 2025. IEEE Xplore Document ID: 11383605"
      }
    ],
    certifications: [
      { name: "MongoDB Developer Path", issuer: "MongoDB", date: "July 2025" },
      { name: "AWS Academy Graduate, AWS Academy Cloud Foundations", issuer: "AWS Academy", date: "January 2025" },
      { name: "The Joy of Computing Using Python", issuer: "NPTEL, IIT Madras", date: "July – October 2024" },
      { name: "Design Thinking: A Primer", issuer: "NPTEL, IIT Madras", date: "January – February 2024" }
    ]
  },
  roadmap: [
    {
      id: "cs-foundations",
      title: "CS Foundations & B.Tech CSE",
      phase: "Past Milestone",
      phaseType: "past",
      period: "2022 – 2024",
      category: "Academic & Core",
      status: "Completed",
      icon: "fa-solid fa-graduation-cap",
      colIndex: 0,
      rowIndex: 0,
      progress: 100,
      headline: "B.Tech Computer Science Engineering at Amity University, Noida",
      description: "Built strong foundational mastery of Data Structures, Algorithms, Operating Systems, Database Management Systems, and Object-Oriented Programming (CGPA 7.33/10).",
      tech: ["Data Structures", "Algorithms", "C++", "Java", "DBMS", "Operating Systems"],
      deliverables: [
        "Consistent academic rigor in core CS engineering curriculum at Amity University",
        "Mastered algorithmic problem-solving across linear and non-linear data structures",
        "Deep foundation in relational database schema design, normalization, and OS concepts"
      ]
    },
    {
      id: "iit-madras-certifications",
      title: "IIT Madras Python & Design Thinking",
      phase: "Past Milestone",
      phaseType: "past",
      period: "Jan – Oct 2024",
      category: "Certifications",
      status: "Completed",
      icon: "fa-solid fa-award",
      colIndex: 0,
      rowIndex: 1,
      progress: 100,
      headline: "Double NPTEL Certification from IIT Madras",
      description: "Earned certifications in 'The Joy of Computing using Python' (July–Oct 2024) and 'Design Thinking: A Primer' (Jan–Feb 2024), fusing algorithmic coding with user-centric solution design.",
      tech: ["Python", "Algorithms", "Design Thinking", "Problem Formulation", "NPTEL IIT Madras"],
      deliverables: [
        "Comprehensive Python mastery for scripting and backend algorithmic operations",
        "Applied design thinking methodology to user-centric product requirements"
      ]
    },
    {
      id: "aws-cloud-foundations",
      title: "AWS Academy Cloud Foundations",
      phase: "Past Milestone",
      phaseType: "past",
      period: "January 2025",
      category: "Cloud & DevOps",
      status: "Completed",
      icon: "fa-brands fa-aws",
      colIndex: 1,
      rowIndex: 0,
      progress: 100,
      headline: "AWS Academy Cloud Architecture Credential",
      description: "Certified by AWS Academy in Core Cloud Services: EC2 compute, Lambda serverless, S3 object storage, RDS managed databases, VPC networking, IAM security policies, and Auto Scaling.",
      tech: ["AWS EC2", "AWS Lambda", "S3", "RDS PostgreSQL", "VPC", "IAM"],
      deliverables: [
        "Gained hands-on proficiency in architecting secure cloud network topologies with VPC",
        "Configured IAM least-privilege security policies for cloud resources"
      ]
    },
    {
      id: "mern-intern-smartbridge",
      title: "MERN Stack Intern — SmartBridge",
      phase: "Past Milestone",
      phaseType: "past",
      period: "May – July 2025",
      category: "Industry Experience",
      status: "Completed",
      icon: "fa-solid fa-briefcase",
      colIndex: 1,
      rowIndex: 1,
      progress: 100,
      headline: "Real-Time Chat Backend & JWT Security Layers",
      description: "Owned the backend build for a real-time chat application end-to-end, converting an open-ended product brief into a working Node.js/Express.js/MongoDB service and React client shipped to production.",
      tech: ["JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "JWT Auth"],
      deliverables: [
        "Shipped production chat client and backend with sub-100ms bi-directional messaging via Socket.io",
        "Independently identified and closed auth/storage security gaps, cutting latency and boosting reliability"
      ]
    },
    {
      id: "gaming-intern-jabsz",
      title: "Web Developer Intern — Jabsz Gaming Studios",
      phase: "Past Milestone",
      phaseType: "past",
      period: "May – July 2025",
      category: "Industry Experience",
      status: "Completed",
      icon: "fa-solid fa-gamepad",
      colIndex: 1,
      rowIndex: 2,
      progress: 100,
      headline: "TypeScript Gameplay & Backend Optimization",
      description: "Built a browser-based game using TypeScript, engineering core gameplay mechanics, UI screens, and state-driven transitions across 50+ levels through Godot Engine integration. Optimized backend API bottlenecks.",
      tech: ["TypeScript", "React", "Node.js", "Express.js", "Godot Engine"],
      deliverables: [
        "Engineered seamless state-driven transitions across 50+ game levels",
        "Spotted and resolved backend throughput bottlenecks affecting gameplay responsiveness"
      ]
    },
    {
      id: "mongodb-cert",
      title: "MongoDB Developer Path Certification",
      phase: "Past Milestone",
      phaseType: "past",
      period: "July 2025",
      category: "Certifications",
      status: "Completed",
      icon: "fa-solid fa-database",
      colIndex: 2,
      rowIndex: 0,
      progress: 100,
      headline: "Certified MongoDB Developer Path",
      description: "Certified by MongoDB in document modeling, complex aggregation pipelines, schema validation, indexing strategies, and high-performance database connectivity.",
      tech: ["MongoDB", "Aggregation Pipelines", "Schema Design", "Mongoose", "Indexing"],
      deliverables: [
        "Mastered advanced aggregation pipelines for analytical reporting and queries",
        "Optimized collection indexing strategies to minimize query execution times"
      ]
    },
    {
      id: "ieee-ml-publication",
      title: "IEEE Research Publication (NIT Delhi)",
      phase: "Past Milestone",
      phaseType: "past",
      period: "2025",
      category: "Research & ML",
      status: "IEEE Published",
      icon: "fa-solid fa-book-bookmark",
      colIndex: 2,
      rowIndex: 1,
      progress: 100,
      headline: "'A Novice Approach to Weather Forecasting by Using Hybrid Predictive Methodologies in ML'",
      description: "Published in Proceedings of the IC2SDT, NIT Delhi, India, 2025 (IEEE Xplore ID: 11383605). Designed hybrid LSTM-GRU deep learning neural architectures for meteorological forecasting.",
      tech: ["Machine Learning", "LSTM", "GRU", "Python", "FastAPI", "ERA5 Data", "NASA POWER"],
      deliverables: [
        "First-author research paper indexed in IEEE Xplore digital library",
        "Engineered multi-parameter predictive pipeline combining LSTM and GRU neural architectures"
      ]
    },
    {
      id: "production-platforms",
      title: "Production Projects: HireIn, Slice & Fire & Task Manager",
      phase: "Past Milestone",
      phaseType: "past",
      period: "2024 – 2025",
      category: "Full-Stack & Systems",
      status: "Production Live",
      icon: "fa-solid fa-cubes",
      colIndex: 2,
      rowIndex: 2,
      progress: 100,
      headline: "RAG AI Recruitment & E-Commerce Automation Engines",
      description: "Shipped HireIn (FastAPI + Sentence Transformers RAG assistant + batch screening for 100+ resumes) and Slice & Fire (BOM-based inventory automation engine with Node-Cron & Nodemailer).",
      tech: ["FastAPI", "React", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "Node-Cron"],
      deliverables: [
        "HireIn: Live semantic candidate search & AI recruiter assistant",
        "Slice & Fire: Real-time inventory deduction & automated operations low-stock email alerts",
        "Team Task Manager: Piloted Socket.io collaboration tool boosting 5-person engineering throughput"
      ]
    },
    {
      id: "marketinglu-intern",
      title: "Software Developer Intern — MarketinGlu",
      phase: "Current Focus",
      phaseType: "active",
      period: "September 2025 – Present",
      category: "Industry Experience",
      status: "In Progress",
      icon: "fa-solid fa-laptop-code",
      colIndex: 3,
      rowIndex: 0,
      progress: 85,
      headline: "Client Web Applications & High-Performance REST APIs",
      description: "Engineering responsive frontend components and high-performance backend APIs for client web applications and enterprise digital engineering solutions at MarketinGlu.",
      tech: ["JavaScript", "React.js", "Node.js", "Express.js", "REST APIs", "Postman"],
      deliverables: [
        "Collaborating across cross-functional teams to deliver client-facing web components and APIs",
        "Integrating and optimizing RESTful endpoints and database queries for enhanced speed and user experience",
        "Maintaining production codebases with active code reviews and clean Git workflows"
      ]
    },
    {
      id: "capstone-degree",
      title: "B.Tech CSE Capstone & Degree Completion",
      phase: "Current Focus",
      phaseType: "active",
      period: "2025 – 2026",
      category: "Academic & Core",
      status: "In Progress",
      icon: "fa-solid fa-graduation-cap",
      colIndex: 3,
      rowIndex: 1,
      progress: 75,
      headline: "Final Year Software Engineering Project & Degree at Amity University",
      description: "Completing fourth-year B.Tech in Computer Science and Engineering at Amity University, Noida, with focus on full-stack architecture, software testing, and enterprise systems.",
      tech: ["Software Engineering", "Full-Stack Architecture", "System Design", "Testing"],
      deliverables: [
        "Developing end-to-end final year capstone project synthesizing web technologies and APIs",
        "Maintaining strong academic standing across advanced computer science subjects"
      ]
    },
    {
      id: "target-sde-career",
      title: "Next Chapter: Full-Time SDE Opportunities",
      phase: "Next Chapter",
      phaseType: "target",
      period: "2026 Focus",
      category: "Career Objectives",
      status: "Open to Opportunities",
      icon: "fa-solid fa-briefcase",
      colIndex: 4,
      rowIndex: 0,
      progress: 100,
      isTarget: true,
      headline: "Full-Time Software Engineer & Cloud Architecture Roles",
      description: "Actively seeking full-time Software Engineer (SDE) roles starting 2026. Bringing verified hands-on production ownership across React, Node.js, FastAPI, AWS Cloud Foundations, database optimization, and first-author published ML research.",
      tech: ["Full-Stack SDE", "Backend Architecture", "AWS Cloud", "Node.js & Express", "React.js & TypeScript", "PostgreSQL & MongoDB"],
      deliverables: [
        "Immediate production readiness across responsive frontend UIs, RESTful microservices, and cloud deployments",
        "Demonstrated track record of delivering real client features at MarketinGlu and SmartBridge with high autonomy",
        "Deep foundation in Data Structures, Algorithms, System Design principles, and database query optimization"
      ]
    }
  ],
  roadmapConnections: [
    { source: "cs-foundations", target: "iit-madras-certifications" },
    { source: "cs-foundations", target: "mern-intern-smartbridge" },
    { source: "cs-foundations", target: "gaming-intern-jabsz" },
    { source: "iit-madras-certifications", target: "aws-cloud-foundations" },
    { source: "mern-intern-smartbridge", target: "mongodb-cert" },
    { source: "mern-intern-smartbridge", target: "production-platforms" },
    { source: "gaming-intern-jabsz", target: "production-platforms" },
    { source: "aws-cloud-foundations", target: "production-platforms" },
    { source: "mongodb-cert", target: "production-platforms" },
    { source: "production-platforms", target: "ieee-ml-publication" },
    { source: "production-platforms", target: "marketinglu-intern" },
    { source: "marketinglu-intern", target: "capstone-degree" },
    { source: "capstone-degree", target: "target-sde-career" }
  ],
  socials: [
    { icon: "fa-solid fa-phone", text: "+91-9639677118", link: "tel:+919639677118" },
    { icon: "fa-solid fa-envelope", text: "thinkyuvraj@gmail.com", link: "mailto:thinkyuvraj@gmail.com" },
    { icon: "fa-brands fa-linkedin", text: "LinkedIn", link: "https://linkedin.com/in/thinkyuvraj" },
    { icon: "fa-brands fa-github", text: "GitHub", link: "https://github.com/ThinkYuvraj" },
    { icon: "fa-solid fa-location-dot", text: "Noida, India", link: "#" }
  ]
};

