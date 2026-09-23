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
  socials: [
    { icon: "fa-solid fa-phone", text: "+91-9639677118", link: "tel:+919639677118" },
    { icon: "fa-solid fa-envelope", text: "thinkyuvraj@gmail.com", link: "mailto:thinkyuvraj@gmail.com" },
    { icon: "fa-brands fa-linkedin", text: "LinkedIn", link: "https://linkedin.com/in/thinkyuvraj" },
    { icon: "fa-brands fa-github", text: "GitHub", link: "https://github.com/ThinkYuvraj" },
    { icon: "fa-solid fa-location-dot", text: "Noida, India", link: "#" }
  ]
};

