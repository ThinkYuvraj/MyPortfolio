export const portfolioData = {
  hero: {
    title: "Yuvraj",
    subtitle: "Singh",
    role: "AI-Full Stack Developer",
    description: (
      <>
        Engineering the future with <span className="text-white font-bold">Generative AI</span> and <span className="text-primary italic">Scalable Systems</span>. Turning complex data into cinematic digital experiences.
      </>
    ),
    resumeLink: "https://drive.google.com/file/d/1hnhPQcRrmByIUIFwmfG5ml0wjVOyXSrJ/view?usp=drive_link"
  },
  about: {
    photo: "/assets/My_photo4.png", // Used the new photo the user pushed
    bio: (
      <>
        I'm B.Tech Computer Science and Engineering Graduate from <span className="text-white font-bold">Amity University</span> with a strong foundation in <span className="text-primary">Software Development, Artificial Intelligence and Full-Stack Development</span>
      </>
    ),
    interests: "Artificial Intelligence, Transformers, Generative AI, Full-Stack Development, and Cloud Computing.",
    careerGoals: "To lead innovation in AI-driven recruitment and social connectivity platforms, leveraging technical expertise and collaboration to build impactful solutions."
  },
  skills: [
    {
      title: "Programming Languages",
      items: ["Python", "JavaScript", "C++", "Java", "SQL"]
    },
    {
      title: "AI / ML Tools",
      items: ["PyTorch", "TensorFlow", "OpenAI API", "LangChain", "Scikit-Learn"]
    },
    {
      title: "Frontend Tech",
      items: ["React.js", "Next.js", "Tailwind CSS", "GSAP", "Framer Motion"]
    },
    {
      title: "Backend & Database",
      items: ["Node.js", "Express", "SQL", "MongoDB", "PostgreSQL", "Redis"]
    },
    {
      title: "Cloud Services",
      items: ["AWS EC2", "AWS Bedrock", "S3"]
    },
    {
      title: "Languages",
      items: ["English", "Hindi", "French"]
    }
  ],
  experience: [
    {
      company: "SmartBridge",
      role: "MERN Stack Development Intern",
      date: "May – July 2025",
      points: [
        "Built a real-time chat application using React, Node.js, MongoDB, and Socket.IO.",
        "Implemented secure authentication and data storage mechanisms.",
        "Reduced data access latency by 25% and improved application performance.",
        "Enabled low-latency messaging with response times under 100ms."
      ]
    },
    {
      company: "Jabsz Gaming Studios LLP",
      role: "Game Development Intern",
      date: "May - July 2025",
      points: [
        "Developed the \"Time Rewind\" game using Godot, TypeScript, React, and WebGL.",
        "Improved gameplay responsiveness by 25% through optimized game logic.",
        "Enhanced user engagement by 30% with smoother gameplay mechanics.",
        "Implemented efficient state management and interactive UI systems."
      ]
    },
    {
      company: "Research Work",
      role: "Heart Disease Prediction using Hybrid Machine Learning Techniques",
      date: "Jan'2026",
      points: [
        <>
          <span className="font-bold text-glow">Published research titled</span>{" "}
          <span className="italic">"Heart Disease Prediction using Hybrid Machine Learning Techniques"</span>
        </>,
        "Conducted research on heart disease prediction using a hybrid ensemble machine learning framework.",
        "Utilized the Cleveland Heart Disease Dataset from the UCI Repository and applied preprocessing, normalization, and feature engineering techniques."
      ]
    },
    {
      company: "Research Work",
      role: "Hybrid Weather Forecasting using LSTM-GRU Hybid Neural Network",
      date: "DEC'2025",
      points: [
        <>
          <span className="font-bold text-glow">Published research titled</span>{" "}
          <span className="italic">"A Novice Approach for Weather Forecasting by using Hybrid Predictive Methodologies in Deep Learning "</span> at an IEEE Conference at <span className="font-bold text-glow">NIT Delhi.</span>
        </>,
        "Conducted research on Weather Forecasting using a hybrid LSTM-GRU deep learning model.",
        "Utilized NASA POWER & ERA5 datasets to predict temperature, humidity, precipitation, and wind speed.",
        "Improved forecasting accuracy by combining sequential learning capabilities of LSTM and GRU networks."
      ]
    }
  ],
  projects: [
    {
      title: "HireIn",
      badge: "Bulk Screening Module",
      icon: "fa-solid fa-robot",
      description: "An AI-powered recruitment platform that automates resume screening and candidate matching using NLP.",
      tryLink: "https://hire-in-fwc.vercel.app/",
      knowMoreLink: "https://github.com/ThinkYuvraj/HireIn"
    },
    {
      title: "Weatherly",
      badge: "FORECASTING",
      icon: "fa-solid fa-cloud-bolt",
      description: "Advanced weather forecasting system utilizing real-time API data and predictive modeling.",
      tryLink: "https://github.com/ThinkYuvraj/Weatherly",
      knowMoreLink: "https://github.com/ThinkYuvraj/Weatherly"
    },
    {
      title: "SocialeX",
      badge: "SOCIAL MEDIA",
      icon: "fa-solid fa-share-nodes",
      description: "A full-stack social media application featuring real-time messaging, post interactions, and user analytics.",
      tryLink: "https://socialx-chat.vercel.app/",
      knowMoreLink: "https://socialx-chat.vercel.app/"
    },
    {
      title: "Team Task Manager",
      badge: "Team Manager",
      icon: "fa-solid fa-list-check",
      description: "A collaborative tool that helps teams organize, assign, track, and manage tasks efficiently. It improves productivity by enabling team members to monitor progress, set deadlines, prioritize work, and communicate effectively within a shared workspace.",
      tryLink: "https://team-task-manager-es69.onrender.com/login",
      knowMoreLink: "https://github.com/ThinkYuvraj/Team-Task-Manager"
    }
  ],
  education: [
    {
      degree: "B.Tech in CSE",
      institution: "Amity University",
      location: "Noida, Uttar Pradesh",
      score: "CGPA: [7.33]",
      coursework: ["Data Structures", "AI", "DBMS", "OS", "Networks"]
    },
    {
      degree: "XII",
      institution: "Delhi public school",
      location: "Bhagpat Road Meerut",
      score: "Percent: [83.98]",
      coursework: ["Physics", "Chem", "Maths"]
    },
    {
      degree: "X",
      institution: "Delhi public school",
      location: "Bhagpat Road Meerut",
      score: "Percent: [73]",
      coursework: ["Computer Science", "Social Science", "Maths", "English", "Science"]
    }
  ],
  achievements: [
    { icon: "fa-solid fa-award", text: "IEEE Conference Publication at NIT Delhi" },
    { icon: "fa-solid fa-cloud-sun-rain", text: "Developed Hybrid LSTM-GRU Weather Forecasting System" },
    { icon: "fa-solid fa-cloud", text: "AWS Academy Cloud Foundations Graduate" },
    { icon: "fa-solid fa-database", text: "MongoDB Node.js Developer Path Certification" },
    { icon: "fa-solid fa-briefcase", text: "Completed Internships at SmartBridge'2025 & Jabsz Gaming Studios'2025" },
    { icon: "fa-solid fa-code", text: "Built AI/ML and Full-Stack Projects using React, Node.js & Python" }
  ],
  socials: [
    { icon: "fa-solid fa-phone", text: "Phone", link: "tel:+919639677118" },
    { icon: "fa-solid fa-envelope", text: "Email", link: "mailto:yuvraj@example.com" },
    { icon: "fa-brands fa-linkedin", text: "LinkedIn", link: "https://www.linkedin.com/in/thinkyuvraj/" },
    { icon: "fa-brands fa-github", text: "GitHub", link: "https://github.com/ThinkYuvraj" },
    { icon: "fa-solid fa-code", text: "LeetCode", link: "https://leetcode.com/u/Yuvraj21_/" },
    { icon: "fa-brands fa-instagram", text: "Instagram", link: "https://www.instagram.com/yuvraj21__/" }
  ]
};
