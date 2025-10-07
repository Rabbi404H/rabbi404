// // Personal information and bot knowledge base
// export const personalInfo = {
//   name: "Rabbi Hossain",
//   email: "rabbihossain88404@gmail.com",
//   phone: "+8801889688404",
//   location: "Mohammod Pur Dhaka Bangladesh",
//   title: "Full Stack Developer",
//   website: "https://rabbi404.vercel.app/",
//   // linkedin: "https://linkedin.com/in/johndoe",
//   github: "https://github.com/rabbi404H",
  
//   about: "I'm a passionate Full Stack Developer with 3+ years of experience creating web applications. I love working with modern technologies and solving complex problems to deliver exceptional user experiences.",
  
//   experience: [
//     {
//       role: "junior Full Stack Developer",
//       company: "Tech Solutions Inc.",
//       period: "2022 - Present",
//       description: "Leading development of web applications using React, Node.js, and cloud technologies."
//     },
//     {
//       role: "Frontend Developer",
//       company: "Digital Innovations LLC",
//       period: "2018 - 2020",
//       description: "Developed responsive web applications and collaborated with design teams."
//     },
//     {
//       role: "Junior Web Developer",
//       company: "StartUp XYZ",
//       period: "2017 - 2018",
//       description: "Built and maintained company websites and web applications."
//     }
//   ],
  
//   skills: {
//     frontend: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js"],
//     backend: ["Node.js", "Python", "Express.js", "REST APIs", "GraphQL"],
//     database: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
//     tools: ["Git", "Docker", "AWS", "Jenkins", "Jest", "Webpack"]
//   },
  
//   projects: [
//     {
//       name: " RedeFine Gaming",
//       description: "Full-stack e-commerce solution with React, Node.js, and MongoDB featuring real-time inventory, payment processing, and admin dashboard.",
//       technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
//       link: "https://animated-demo.vercel.app/"
//     },
//     {
//       name: "Task Management Application",
//       description: "Real-time collaborative task management app with drag-and-drop functionality, team collaboration, and progress tracking.",
//       technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
//       link: "https://github.com/johndoe/task-manager"
//     },
//     {
//       name: "Portfolio Website with AI Chatbot",
//       description: "Responsive portfolio website integrated with an AI-powered chatbot for interactive user engagement.",
//       technologies: ["React", "Tailwind CSS", "JavaScript"],
//       link: "https://github.com/johndoe/portfolio-chatbot"
//     },
//     {
//       name: "Weather Dashboard",
//       description: "Real-time weather dashboard with location-based forecasts and interactive maps.",
//       technologies: ["React", "Weather API", "Chart.js"],
//       link: "https://github.com/johndoe/weather-dashboard"
//     }
//   ],
  
//   education: [
//     {
//       degree: "Bachelor of Science in Computer Science",
//       school: "Stanford University",
//       year: "2017",
//       details: "Graduated Magna Cum Laude with focus on Software Engineering and Web Technologies"
//     }
//   ],
  
//   interests: [
//     "Open Source Contributions",
//     "AI and Machine Learning",
//     "Photography",
//     "Hiking",
//     "Reading Tech Blogs",
//     "Mentoring Junior Developers"
//   ]
// };

// // Bot response logic
// export const generateBotResponse = (userMessage) => {
//   const message = userMessage.toLowerCase().trim();
  
//   // Greetings
//   if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
//     return "Hello! I'm here to tell you about my portfolio. Feel free to ask about my experience, skills, projects, or contact information!";
//   }
  
//   // About me
//   if (message.includes('about') || message.includes('who are you') || message.includes('tell me about yourself')) {
//     return `I'm ${personalInfo.name}, a ${personalInfo.title}. ${personalInfo.about}`;
//   }
  
//   // Name
//   if (message.includes('name') && !message.includes('your name')) {
//     return `My name is ${personalInfo.name}.`;
//   }
  
//   if (message.includes('your name')) {
//     return `I'm the portfolio chatbot for ${personalInfo.name}. How can I help you today?`;
//   }
  
//   // Experience
//   if (message.includes('experience') || message.includes('background') || message.includes('work history')) {
//     const expList = personalInfo.experience.map(exp => 
//       `• ${exp.role} at ${exp.company} (${exp.period}): ${exp.description}`
//     ).join('\n');
//     return `Here's my professional experience:\n${expList}`;
//   }
  
//   // Skills
//   if (message.includes('skill') || message.includes('technology') || message.includes('tech stack') || message.includes('what can you do')) {
//     const skillsList = Object.entries(personalInfo.skills).map(([category, skills]) => 
//       `**${category.charAt(0).toUpperCase() + category.slice(1)}:** ${skills.join(', ')}`
//     ).join('\n');
//     return `My technical skills include:\n${skillsList}`;
//   }
  
//   // Projects
//   if (message.includes('project') || message.includes('work') || message.includes('portfolio')) {
//     const projectsList = personalInfo.projects.map(proj => 
//       `• **${proj.name}:** ${proj.description}\n  Technologies: ${proj.technologies.join(', ')}`
//     ).join('\n\n');
//     return `Here are some of my key projects:\n\n${projectsList}`;
//   }
  
//   // Contact information
//   if (message.includes('contact') || message.includes('email') || message.includes('reach') || message.includes('get in touch')) {
//     return `You can contact me through:\n• Email: ${personalInfo.email}\n• Phone: ${personalInfo.phone}\n• LinkedIn: ${personalInfo.linkedin}\n• GitHub: ${personalInfo.github}\nI'm based in ${personalInfo.location} and always open to discussing new opportunities!`;
//   }
  
//   // Location
//   if (message.includes('location') || message.includes('where') || message.includes('based') || message.includes('live')) {
//     return `I'm currently based in ${personalInfo.location}.`;
//   }
  
//   // Education
//   if (message.includes('education') || message.includes('degree') || message.includes('study') || message.includes('school')) {
//     const eduList = personalInfo.education.map(edu => 
//       `• ${edu.degree} from ${edu.school} (${edu.year})${edu.details ? ` - ${edu.details}` : ''}`
//     ).join('\n');
//     return `My educational background:\n${eduList}`;
//   }
  
//   // Interests
//   if (message.includes('interest') || message.includes('hobby') || message.includes('passion')) {
//     return `Some of my interests include: ${personalInfo.interests.join(', ')}.`;
//   }
  
//   // Thank you
//   if (message.includes('thank') || message.includes('thanks')) {
//     return "You're welcome! Feel free to ask if you have any other questions about my portfolio.";
//   }
  
//   // Default response for unrecognized queries
//   return "I'm not sure how to answer that. I can only answer questions about my portfolio, experience, skills, projects, or contact information. Try using the quick reply buttons below!";
// };

// export const quickReplies = [
//   "About you",
//   "Experience",
//   "Skills", 
//   "Projects",
//   "Contact",
//   "Education"
// ];

// export const welcomeMessage = "👋 Hello! I'm your AI portfolio assistant. I can tell you about my experience, skills, projects, education, and how to get in touch. What would you like to know?";







// Personal information and bot knowledge base
export const personalInfo = {
  name: "Rabbi Hossain",
  email: "rabbihossain88404@gmail.com",
  phone: "+8801889688404",
  location: "Mohammadpur, Dhaka-1207, Bangladesh",
  title: "Full Stack Developer",
  website: "https://rabbi404.vercel.app",
  github: "https://github.com/Rabbi404H",
  linkedin: "#",
  
  about: "Creative and detail-oriented Full Stack Developer skilled in HTML5, CSS3, JavaScript (ES6+), and modern frameworks like React.js, Next.js, Node.js, and Express.js. Passionate about building fast, responsive, and user-friendly web applications with clean, maintainable code. Experienced in integrating AI-powered features, backend APIs, and optimizing performance to enhance user experience.",
  
  experience: [
    {
      role: "Full Stack Developer",
      company: "Self-Employed / Freelance",
      period: "2022 - Present",
      description: "Developing modern, responsive web applications using React, Next.js, Node.js, Express, and MongoDB. Building full-stack solutions with frontend interfaces, backend APIs, and database integration."
    },
    {
      role: "Frontend Developer",
      company: "Personal Projects",
      period: "2021 - 2022", 
      description: "Focused on frontend development with React, JavaScript, and modern CSS frameworks. Created interactive UIs with animations and responsive designs."
    }
  ],
  
  skills: {
    frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Next.js", "Three.js", "Tailwind CSS", "GSAP", "Framer Motion"],
    backend: ["Node.js", "Express.js", "REST APIs", "MongoDB", "Python", "JWT Authentication"],
    tools: ["Git", "GitHub", "Vercel", "Netlify", "Postman", "VS Code", "Chrome DevTools"],
    databases: ["MongoDB", "MySQL", "Firebase"],
    expertise: ["Full Stack Development", "Responsive Web Design", "API Integration", "Performance Optimization", "AI Integration", "Prompt Engineering"]
  },
  
  projects: [
    {
      name: "RedeFine Gaming",
      description: "Developed a modern, responsive clone of Redeline Gamer with a gamer-centric UI and smooth animations. Built with component-based React architecture, mobile-first TailwindCSS design, and Framer Motion for fluid transitions, delivering a high-performance and visually engaging platform.",
      technologies: ["React", "TailwindCSS", "Framer Motion", "JavaScript"],
      link: "https://animated-demo.vercel.app/",
      category: "frontend"
    },
    {
      name: "Startup Showcase App", 
      description: "Created an interactive 3D startup showcase with immersive model rendering and smooth GSAP animations. Optimized 3D assets for fast load times and designed a clean, modern interface to highlight products and services in an engaging, user-friendly way.",
      technologies: ["React", "Three.js (React Three Fiber)", "GSAP", "JavaScript"],
      link: "#",
      category: "frontend"
    },
    {
      name: "K72 Clone Website",
      description: "Built a pixel-perfect clone of the K72 website with GSAP-powered animations and interactive UI elements. Ensured cross-browser compatibility, responsive design, and semantic HTML for maintainable, scalable code while replicating the original site's premium visual style.",
      technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
      link: "#",
      category: "frontend"
    },
    {
      name: "Portfolio AI Chatbot",
      description: "Full-stack portfolio website with integrated AI-powered chatbot. Features real-time messaging, responsive design, and intelligent question-answering capabilities about my skills and experience.",
      technologies: ["React", "Node.js", "Express.js", "Tailwind CSS", "JavaScript"],
      link: "https://rabbi404.vercel.app",
      category: "fullstack"
    },
    {
      name: "E-commerce Backend API",
      description: "RESTful API for e-commerce platform with user authentication, product management, shopping cart, and order processing functionalities.",
      technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "REST API"],
      link: "#",
      category: "backend"
    },
    {
      name: "Task Management System",
      description: "Full-stack task management application with real-time updates, user authentication, and collaborative features.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "JWT"],
      link: "#",
      category: "fullstack"
    }
  ],
  
  education: [
    {
      degree: "BSc in Computer Science & Engineering (CSE)",
      school: "Currently Studying",
      year: "Present",
      details: "Pursuing Bachelor's degree in Computer Science and Engineering"
    },
    {
      degree: "Higher Secondary Certificate (HSC) - Science",
      school: "Mohammadpur Govt. College",
      year: "2021",
      details: "GPA: 3.67/5.00"
    },
    {
      degree: "Secondary School Certificate (SSC) - Science", 
      school: "M. Zabed Ideal Institute",
      year: "2019",
      details: "GPA: 4.43/5.00"
    }
  ],

  certifications: [
    {
      name: "Responsive Web Design",
      issuer: "freeCodeCamp",
      year: "2023"
    },
    {
      name: "JavaScript Algorithms & Data Structures", 
      issuer: "freeCodeCamp",
      year: "2023"
    },
    {
      name: "Frontend Development Specialization",
      issuer: "Self-Taught",
      year: "2022"
    }
  ],
  
  languages: [
    "Bangla (Native)",
    "English (Fluent)"
  ],
  
  interests: [
    "AI and Machine Learning",
    "Full Stack Development", 
    "3D Web Development",
    "Interactive Animations",
    "Open Source Contributions",
    "Web Performance Optimization",
    "Backend Architecture",
    "API Design"
  ],

  availability: "Open to remote & on-site opportunities",
  
  techStack: {
    frontend: "React, Next.js, JavaScript, Tailwind CSS, Three.js",
    backend: "Node.js, Express.js, MongoDB, REST APIs",
    tools: "Git, Vercel, Netlify, Postman, VS Code"
  }
};

// Bot response logic
export const generateBotResponse = (userMessage) => {
  const message = userMessage.toLowerCase().trim();
  
  // Greetings
  if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
    return "Hello! I'm Rabbi's portfolio assistant. I can tell you about his experience, skills, projects, education, and contact information. What would you like to know?";
  }
  
  // About me
  if (message.includes('about') || message.includes('who are you') || message.includes('tell me about yourself')) {
    return `I'm ${personalInfo.name}, a ${personalInfo.title}. ${personalInfo.about}\n\nI'm currently pursuing my BSc in Computer Science & Engineering while working on full-stack projects.`;
  }
  
  // Name
  if (message.includes('name') && !message.includes('your name')) {
    return `My name is ${personalInfo.name}.`;
  }
  
  if (message.includes('your name')) {
    return `I'm the portfolio chatbot for ${personalInfo.name}. How can I help you today?`;
  }
  
  // Experience
  if (message.includes('experience') || message.includes('background') || message.includes('work history')) {
    const expList = personalInfo.experience.map(exp => 
      `• ${exp.role} at ${exp.company} (${exp.period}): ${exp.description}`
    ).join('\n');
    return `Here's my professional experience:\n${expList}\n\nI have been coding for 3+ years and continuously learning new technologies.`;
  }
  
  // Skills
  if (message.includes('skill') || message.includes('technology') || message.includes('tech stack') || message.includes('what can you do')) {
    const skillsList = Object.entries(personalInfo.skills).map(([category, skills]) => 
      `**${category.charAt(0).toUpperCase() + category.slice(1)}:** ${skills.join(', ')}`
    ).join('\n');
    return `My technical skills include:\n${skillsList}\n\nMy main tech stack:\n• Frontend: ${personalInfo.techStack.frontend}\n• Backend: ${personalInfo.techStack.backend}\n• Tools: ${personalInfo.techStack.tools}`;
  }
  
  // Backend specific
  if (message.includes('backend') || message.includes('node') || message.includes('express') || message.includes('api')) {
    return `I have strong backend development skills with:\n• Node.js & Express.js for server development\n• MongoDB for database management\n• REST API design and implementation\n• JWT authentication\n• Database modeling and integration\n\nI've built several backend systems including e-commerce APIs and real-time applications.`;
  }
  
  // Frontend specific
  if (message.includes('frontend') || message.includes('react') || message.includes('ui') || message.includes('interface')) {
    return `My frontend expertise includes:\n• React.js & Next.js for modern web applications\n• JavaScript (ES6+) for interactive features\n• Tailwind CSS for responsive design\n• Three.js for 3D web experiences\n• GSAP & Framer Motion for smooth animations\n• Responsive and mobile-first design`;
  }
  
  // Full Stack
  if (message.includes('full stack') || message.includes('fullstack')) {
    return `As a Full Stack Developer, I work with:\n\n**Frontend:** ${personalInfo.techStack.frontend}\n**Backend:** ${personalInfo.techStack.backend}\n**Tools:** ${personalInfo.techStack.tools}\n\nI can handle complete web application development from UI design to database management and deployment.`;
  }
  
  // Projects
  if (message.includes('project') || message.includes('work') || message.includes('portfolio')) {
    const frontendProjects = personalInfo.projects.filter(proj => proj.category === 'frontend');
    const backendProjects = personalInfo.projects.filter(proj => proj.category === 'backend');
    const fullstackProjects = personalInfo.projects.filter(proj => proj.category === 'fullstack');
    
    let projectsResponse = "Here are my projects:\n\n";
    
    if (fullstackProjects.length > 0) {
      projectsResponse += "**Full Stack Projects:**\n";
      fullstackProjects.forEach(proj => {
        projectsResponse += `• ${proj.name}: ${proj.description}\n  Tech: ${proj.technologies.join(', ')}\n\n`;
      });
    }
    
    if (frontendProjects.length > 0) {
      projectsResponse += "**Frontend Projects:**\n";
      frontendProjects.forEach(proj => {
        projectsResponse += `• ${proj.name}: ${proj.description}\n  Tech: ${proj.technologies.join(', ')}\n\n`;
      });
    }
    
    if (backendProjects.length > 0) {
      projectsResponse += "**Backend Projects:**\n";
      backendProjects.forEach(proj => {
        projectsResponse += `• ${proj.name}: ${proj.description}\n  Tech: ${proj.technologies.join(', ')}\n\n`;
      });
    }
    
    return projectsResponse;
  }
  
  // Contact information
  if (message.includes('contact') || message.includes('email') || message.includes('reach') || message.includes('get in touch')) {
    return `You can contact me through:\n• Email: ${personalInfo.email}\n• Phone: ${personalInfo.phone}\n• Portfolio: ${personalInfo.website}\n• GitHub: ${personalInfo.github}\n\nI'm based in ${personalInfo.location} and ${personalInfo.availability.toLowerCase()}`;
  }
  
  // Location
  if (message.includes('location') || message.includes('where') || message.includes('based') || message.includes('live')) {
    return `I'm currently based in ${personalInfo.location}.`;
  }
  
  // Education
  if (message.includes('education') || message.includes('degree') || message.includes('study') || message.includes('school') || message.includes('cse')) {
    const eduList = personalInfo.education.map(edu => 
      `• ${edu.degree} from ${edu.school} (${edu.year}) - ${edu.details}`
    ).join('\n');
    return `My educational background:\n${eduList}\n\nI'm currently pursuing my BSc in Computer Science & Engineering while actively developing projects.`;
  }
  
  // Current Study
  if (message.includes('current study') || message.includes('studying') || message.includes('present') || message.includes('bsc')) {
    return `I'm currently pursuing my Bachelor of Science in Computer Science & Engineering (BSc in CSE). I'm balancing my academic studies with practical full-stack development projects to build real-world experience.`;
  }
  
  // Certifications
  if (message.includes('certification') || message.includes('certificate')) {
    const certList = personalInfo.certifications.map(cert => 
      `• ${cert.name} - ${cert.issuer} (${cert.year})`
    ).join('\n');
    return `My certifications:\n${certList}`;
  }
  
  // Languages
  if (message.includes('language')) {
    return `I speak: ${personalInfo.languages.join(', ')}`;
  }
  
  // Interests
  if (message.includes('interest') || message.includes('hobby') || message.includes('passion')) {
    return `Some of my interests include: ${personalInfo.interests.join(', ')}.`;
  }
  
  // Availability
  if (message.includes('available') || message.includes('hire') || message.includes('job') || message.includes('opportunity')) {
    return `${personalInfo.availability}. Feel free to contact me at ${personalInfo.email} to discuss potential collaborations!`;
  }
  
  // Thank you
  if (message.includes('thank') || message.includes('thanks')) {
    return "You're welcome! Feel free to ask if you have any other questions about my portfolio.";
  }
  
  // Default response for unrecognized queries
  return "I'm not sure how to answer that. I can only answer questions about my portfolio, experience, skills, projects, education, or contact information. Try using the quick reply buttons below!";
};

export const quickReplies = [
  "About you",
  "Experience",
  "Skills", 
  "Projects",
  "Contact",
  "Education",
  "Backend Skills",
  "Full Stack"
];

export const welcomeMessage = "👋 Hello! I'm Rabbi's AI portfolio assistant. I can tell you about his full-stack development skills, projects, education (currently studying BSc in CSE), and contact information. What would you like to know?";