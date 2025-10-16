
export const personalInfo = {
  name: "Rabbi Hossain",
  email: "rabbihossain88404@gmail.com",
  phone: "+8801889688404",
  location: "Mohammadpur, Dhaka-1207, Bangladesh",
  title: "Full Stack Developer",
  website: "https://rabbi404.vercel.app",
  github: "https://github.com/Rabbi404H",
  linkedin: "#",
  
  about:
    "Creative and detail-oriented Full Stack Developer skilled in HTML5, CSS3, JavaScript (ES6+), and modern frameworks like React.js, Next.js, Node.js, and Express.js. Passionate about building fast, responsive, and user-friendly web applications with clean, maintainable code. Experienced in integrating AI-powered features, backend APIs, and optimizing performance to enhance user experience.",
  
  experience: [
    {
      role: "Full Stack Developer",
      company: "Self-Employed / Freelance",
      period: "2022 - Present",
      description:
        "Developing modern, responsive web applications using React, Next.js, Node.js, Express, and MongoDB. Building full-stack solutions with frontend interfaces, backend APIs, and database integration.",
    },
    {
      role: "Frontend Developer",
      company: "Personal Projects",
      period: "2021 - 2022",
      description:
        "Focused on frontend development with React, JavaScript, and modern CSS frameworks. Created interactive UIs with animations and responsive designs.",
    },
  ],
  
  skills: {
    frontend: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Next.js",
      "Three.js",
      "Tailwind CSS",
      "GSAP",
      "Framer Motion",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "MongoDB",
      "Python",
      "JWT Authentication",
    ],
    tools: [
      "Git",
      "GitHub",
      "Vercel",
      "Netlify",
      "Postman",
      "VS Code",
      "Chrome DevTools",
    ],
    databases: ["MongoDB", "MySQL", "Firebase"],
    expertise: [
      "Full Stack Development",
      "Responsive Web Design",
      "API Integration",
      "Performance Optimization",
      "AI Integration",
      "Prompt Engineering",
    ],
  },

  projects: [
    {
      name: "RedeFine Gaming",
      description:
        "Developed a modern, responsive clone of Redeline Gamer with a gamer-centric UI and smooth animations. Built with component-based React architecture, mobile-first TailwindCSS design, and Framer Motion for fluid transitions, delivering a high-performance and visually engaging platform.",
      technologies: ["React", "TailwindCSS", "Framer Motion", "JavaScript"],
      link: "https://animated-demo.vercel.app/",
      category: "frontend",
    },
    {
      name: "Startup Showcase App",
      description:
        "Created an interactive 3D startup showcase with immersive model rendering and smooth GSAP animations. Optimized 3D assets for fast load times and designed a clean, modern interface to highlight products and services in an engaging, user-friendly way.",
      technologies: ["React", "Three.js", "GSAP", "JavaScript"],
      link: "#",
      category: "frontend",
    },
    {
      name: "K72 Clone Website",
      description:
        "Built a pixel-perfect clone of the K72 website with GSAP-powered animations and interactive UI elements. Ensured cross-browser compatibility, responsive design, and semantic HTML for maintainable, scalable code while replicating the original site's premium visual style.",
      technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
      link: "#",
      category: "frontend",
    },
    {
      name: "Portfolio AI Chatbot",
      description:
        "Full-stack portfolio website with integrated AI-powered chatbot. Features real-time messaging, responsive design, and intelligent question-answering capabilities about my skills and experience.",
      technologies: ["React", "Node.js", "Express.js", "Tailwind CSS", "JavaScript"],
      link: "https://rabbi404.vercel.app",
      category: "fullstack",
    },
    {
      name: "E-commerce Backend API",
      description:
        "RESTful API for e-commerce platform with user authentication, product management, shopping cart, and order processing functionalities.",
      technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "REST API"],
      link: "#",
      category: "backend",
    },
    {
      name: "Task Management System",
      description:
        "Full-stack task management application with real-time updates, user authentication, and collaborative features.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "JWT"],
      link: "#",
      category: "fullstack",
    },
  ],

  education: [
    {
      degree: "BSc in Computer Science & Engineering (CSE)",
      school: "Currently Studying",
      year: "Present",
      details: "Pursuing Bachelor's degree in Computer Science and Engineering",
    },
    {
      degree: "Higher Secondary Certificate (HSC) - Science",
      school: "Mohammadpur Govt. College",
      year: "2021",
      details: "GPA: 3.67/5.00",
    },
    {
      degree: "Secondary School Certificate (SSC) - Science",
      school: "M. Zabed Ideal Institute",
      year: "2019",
      details: "GPA: 4.43/5.00",
    },
  ],

  certifications: [
    { name: "Responsive Web Design", issuer: "freeCodeCamp", year: "2023" },
    { name: "JavaScript Algorithms & Data Structures", issuer: "freeCodeCamp", year: "2023" },
    { name: "Frontend Development Specialization", issuer: "Self-Taught", year: "2022" },
  ],

  languages: ["Bangla (Native)", "English (Fluent)"],

  interests: [
    "AI and Machine Learning",
    "Full Stack Development",
    "3D Web Development",
    "Interactive Animations",
    "Open Source Contributions",
    "Web Performance Optimization",
    "Backend Architecture",
    "API Design",
  ],

  availability: "Open to remote & on-site opportunities",

  techStack: {
    frontend: "React, Next.js, JavaScript, Tailwind CSS, Three.js",
    backend: "Node.js, Express.js, MongoDB, REST APIs",
    tools: "Git, Vercel, Netlify, Postman, VS Code",
  },
};

// 🌐 EXPANDED BOT LOGIC
export const generateBotResponse = (userMessage) => {
  const msg = userMessage.toLowerCase().trim();

  // ===== GREETINGS =====
  if (/(hello|hi|hey|good morning|good evening|what's up|yo|assalamu|salam)/.test(msg)) {
    return "👋 Hey there! I'm Rabbi's AI portfolio assistant. I can tell you about his experience, skills, projects, education, goals, and more. What would you like to explore today?";
  }

  // ===== PERSONALITY & INTRO =====
  if (msg.includes("who are you") || msg.includes("introduce yourself") || msg.includes("about you") || msg.includes("who made you")) {
    return `I'm an AI assistant built by ${personalInfo.name}, a ${personalInfo.title} from Bangladesh. I’m here to help you learn more about his work, skills, and professional background.`;
  }

  // ===== WHY CODE / MOTIVATION =====
  if (msg.includes("why do you code") || msg.includes("passion") || msg.includes("motivation") || msg.includes("why developer")) {
    return "Coding gives me the power to create something from nothing. I love turning abstract ideas into real, interactive experiences that people use and enjoy. 🚀";
  }

  // ===== WORK STYLE =====
  if (msg.includes("work style") || msg.includes("how do you work") || msg.includes("collaborate") || msg.includes("team player")) {
    return "I believe in clean code, efficient teamwork, and open communication. Whether working solo or in a team, I focus on productivity, version control discipline, and attention to detail.";
  }

  // ===== SOFT SKILLS =====
  if (msg.includes("soft skill") || msg.includes("strength") || msg.includes("quality") || msg.includes("personality")) {
    return "I'm patient, detail-oriented, and calm under pressure. I have strong communication skills, always eager to learn, and love mentoring or collaborating with others.";
  }

  // ===== FREELANCING / CLIENT WORK =====
  if (msg.includes("freelance") || msg.includes("hire") || msg.includes("project cost") || msg.includes("work with you") || msg.includes("available for work")) {
    return "Yes! I'm open to freelance and collaborative projects — remote or on-site. You can contact me via 📧 rabbihossain88404@gmail.com. Rates depend on project scope, but I focus on quality, communication, and timely delivery.";
  }

  // ===== FUTURE GOALS =====
  if (msg.includes("goal") || msg.includes("future") || msg.includes("plan") || msg.includes("dream")) {
    return "My long-term goal is to become a senior full-stack developer and eventually specialize in AI-powered web systems. I also want to contribute to open-source projects and build developer communities.";
  }

  // ===== TOOLS / SETUP =====
  if (msg.includes("tools") || msg.includes("setup") || msg.includes("environment") || msg.includes("what tools")) {
    return "I use VS Code, Git/GitHub, Postman, Chrome DevTools, and Figma. For deployment, I rely on Vercel & Netlify. My workflow emphasizes automation, code formatting (Prettier/ESLint), and fast iteration.";
  }

  // ===== FAVORITE LANGUAGES =====
  if (msg.includes("favorite language") || msg.includes("best language") || msg.includes("which language you like")) {
    return "JavaScript is my favorite language — it's everywhere, from frontend to backend. I also enjoy working with Python for quick automation and experimenting with AI APIs.";
  }

  // ===== TECHNOLOGY PREFERENCES =====
  if (msg.includes("react or next") || msg.includes("next.js") || msg.includes("framework preference") || msg.includes("which framework")) {
    return "I love both React and Next.js! React is amazing for single-page apps, while Next.js is perfect for SEO-friendly, server-side-rendered web experiences.";
  }

  // ===== DATABASE QUESTIONS =====
  if (msg.includes("database") || msg.includes("mongodb") || msg.includes("mysql") || msg.includes("firebase")) {
    return "I mostly use MongoDB for flexibility and scalability. I’ve also worked with MySQL and Firebase for structured data and authentication needs.";
  }

  // ===== HOSTING / DEPLOYMENT =====
  if (msg.includes("deploy") || msg.includes("hosting") || msg.includes("where host")) {
    return "I usually deploy my projects on Vercel or Netlify for frontend, and use Render or Railway for backend APIs. These platforms make CI/CD super easy.";
  }

  // ===== API / BACKEND =====
  if (msg.includes("api") || msg.includes("backend") || msg.includes("server") || msg.includes("express")) {
    return "I design and build REST APIs using Node.js and Express.js. I also implement JWT authentication, input validation, and efficient MongoDB queries for high performance.";
  }

  // ===== FRONTEND =====
  if (msg.includes("frontend") || msg.includes("react") || msg.includes("ui") || msg.includes("interface") || msg.includes("animation")) {
    return "I specialize in building responsive, dynamic UIs using React, Tailwind CSS, and GSAP or Framer Motion for animations. I focus on pixel-perfect design and optimized rendering.";
  }

  // ===== FULL STACK =====
  if (msg.includes("full stack") || msg.includes("fullstack")) {
    return "As a Full Stack Developer, I handle everything from design and frontend to backend logic, database, and deployment — ensuring a seamless and secure web experience.";
  }

  // ===== PROJECT DETAILS =====
  const projectMatch = personalInfo.projects.find((p) =>
    msg.includes(p.name.toLowerCase().split(" ")[0])
  );
  if (projectMatch) {
    return `🧩 Project: ${projectMatch.name}\n💡 Description: ${projectMatch.description}\n⚙️ Tech Stack: ${projectMatch.technologies.join(", ")}\n🔗 Link: ${projectMatch.link}`;
  }

  if (msg.includes("project") || msg.includes("works") || msg.includes("portfolio")) {
    const projectNames = personalInfo.projects.map(p => `• ${p.name}`).join("\n");
    return `Here are some of my notable projects:\n${projectNames}\n\nAsk about any project by name to learn more!`;
  }

  // ===== EXPERIENCE =====
  if (msg.includes("experience") || msg.includes("work history") || msg.includes("background")) {
    const expList = personalInfo.experience.map(e => `• ${e.role} at ${e.company} (${e.period})`).join("\n");
    return `Here's a summary of my experience:\n${expList}\nI've been developing professionally since 2021 with a strong focus on React and Node.js.`;
  }

  // ===== EDUCATION =====
  if (msg.includes("education") || msg.includes("degree") || msg.includes("study") || msg.includes("school") || msg.includes("university")) {
    const eduList = personalInfo.education.map(e => `• ${e.degree} - ${e.school} (${e.year})`).join("\n");
    return `📚 Education:\n${eduList}\nI'm currently pursuing my BSc in CSE.`;
  }

  // ===== CERTIFICATIONS =====
  if (msg.includes("certificate") || msg.includes("certification") || msg.includes("course")) {
    const certs = personalInfo.certifications.map(c => `• ${c.name} (${c.issuer}, ${c.year})`).join("\n");
    return `Here are my certifications:\n${certs}`;
  }

  // ===== AI & MACHINE LEARNING =====
  if (msg.includes("ai") || msg.includes("machine learning") || msg.includes("ml")) {
    return "I'm very interested in AI — especially integrating OpenAI APIs into web apps, building smart chatbots, and using ML for intelligent UI automation.";
  }

  // ===== CONTACT =====
  if (msg.includes("contact") || msg.includes("email") || msg.includes("reach") || msg.includes("message") || msg.includes("connect")) {
    return `📬 You can contact me at:\n• Email: ${personalInfo.email}\n• Phone: ${personalInfo.phone}\n• Portfolio: ${personalInfo.website}\n• GitHub: ${personalInfo.github}`;
  }

  // ===== LOCATION =====
  if (msg.includes("where") || msg.includes("based") || msg.includes("location") || msg.includes("live")) {
    return `I'm based in ${personalInfo.location}, but available for remote opportunities worldwide 🌍.`;
  }

  // ===== AVAILABILITY =====
  if (msg.includes("available") || msg.includes("availability") || msg.includes("job") || msg.includes("open to work")) {
    return `${personalInfo.availability}. Feel free to contact me for freelance or full-time opportunities.`;
  }

  // ===== INTERESTS =====
  if (msg.includes("interest") || msg.includes("hobby") || msg.includes("like to do")) {
    return `Some of my interests are: ${personalInfo.interests.join(", ")}.`;
  }

  // ===== DAILY ROUTINE / LIFESTYLE =====
  if (msg.includes("daily routine") || msg.includes("day look like") || msg.includes("schedule")) {
    return "My typical day includes coding, learning something new, reviewing code, and exploring new tech trends or AI tools.";
  }

  // ===== LEARNING HABITS =====
  if (msg.includes("learn") || msg.includes("learning") || msg.includes("how do you learn")) {
    return "I prefer hands-on learning — I build small projects for every new concept. I also follow documentation, YouTube dev channels, and open-source repos for real-world knowledge.";
  }

  // ===== PROBLEM SOLVING =====
  if (msg.includes("problem solving") || msg.includes("debug") || msg.includes("fix bug")) {
    return "I approach problem-solving by first understanding the issue clearly, replicating it, then using console logs or breakpoints. I also rely on Stack Overflow and documentation for insights.";
  }

  // ===== DESIGN & UI/UX =====
  if (msg.includes("design") || msg.includes("ui") || msg.includes("ux")) {
    return "I value clean, modern, and minimal design. I use Tailwind CSS and Figma for design systems, focusing on smooth interactions, accessibility, and responsiveness.";
  }

  // ===== COMMUNICATION / ENGLISH =====
  if (msg.includes("english") || msg.includes("communication") || msg.includes("language skill")) {
    return "I'm fluent in both English and Bangla, and comfortable communicating in professional and technical contexts.";
  }

  // ===== THANKS / GOODBYE / RANDOM =====
  if (msg.includes("thank")) return "You're very welcome! 😊 I'm glad I could help.";
  if (msg.includes("bye") || msg.includes("goodbye") || msg.includes("see you")) return "👋 Goodbye! Have a great day ahead.";
  if (msg.includes("how are you")) return "I'm doing great! Always ready to talk about web development or AI. How about you?";
  if (msg.includes("what are you doing")) return "Just chilling inside your browser and waiting for your next question 😄";
  if (msg.includes("nice") || msg.includes("cool") || msg.includes("awesome")) return "Thanks! Appreciate the kind words 😎";
  if (msg.includes("funny") || msg.includes("joke")) return "Haha 😄 I’m not a comedian yet, but I do debug better than I joke!";

  // ===== DEFAULT / UNKNOWN =====
  return "Hmm 🤔 I’m not sure about that. Try asking me about projects, skills, backend, education, or tools I use!";
};


// Quick Replies
export const quickReplies = [
  "About You",
  "Experience",
  "Skills",
  "Projects",
  "Backend Skills",
  "Education",
  "Contact",
  "Future Goals",
  "Freelance Info",
  "AI Interests",
  "Tools & Setup",
  "Soft Skills",
  "Languages"
];

export const welcomeMessage =
  "👋 Hello! I'm Rabbi's AI portfolio assistant. I can share info about his development journey, projects, skills, education, and more. What would you like to explore first?";
