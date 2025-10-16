import { useState, useEffect } from "react";
import { ArrowRight, Mail, MapPin, Github, Globe } from "lucide-react";
import { motion } from "framer-motion";

const AboutMeSection = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showWork, setShowWork] = useState(false);
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = ["Full Stack Developer", "Frontend Engineer", "UI/UX Designer"];

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => prev + 1);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <section className="mt-20 relative text-white h-[85vh] flex items-center overflow-hidden px-6 md:px-16 py-12 font-[Poppins]">
      {/* ===== BACKGROUND IMAGE ===== */}
      <div
        className="
          absolute top-0 right-0
          w-full h-screen
          sm:w-[70vw] sm:h-[60vh]
          md:w-[60vw] md:h-[70vh]
          lg:w-[75vh] lg:h-[80vh]
          bg-cover bg-center rounded-none sm:rounded-l-2xl
        "
        style={{
          backgroundImage: "url('myImage.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>

      {/* ===== CONTENT WRAPPER ===== */}
      <div
        className="
         
          relative z-10 w-full
          flex flex-col md:flex-row items-center md:items-start
          justify-center md:justify-between
          text-center md:text-left
          space-y-8 md:space-y-0
        "
      >
        {/* LEFT SIDE TEXT CONTENT */}
        <div className="w-full lg:mb-110  lg:ml-20 md:w-1/2 flex flex-col justify-center space-y-6 pr-0 md:pr-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className=" text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight tracking-wide drop-shadow-lg"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              I’m Rabbi Hossain,
            </span>
            <br />
            <span className="flex justify-center md:justify-start items-center gap-2">
              <span className="text-gray-200">a</span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text font-semibold glow-text">
                {text}
                <span className="border-r-4 border-blue-300 ml-1 animate-pulse"></span>
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.5 }}
            className="text-gray-200 max-w-md mx-auto md:mx-0 mt-4 leading-relaxed text-sm sm:text-base"
          >
            Government Certified Level-3 Full Stack Web Developer (2025) — officially accredited by the NSDA under the Government of Bangladesh.
          </motion.p>
        </div>

        {/* RIGHT SIDE INFO BOXES */}
        <div className="w-full lg:mr-180  lg:mt-60 md:w-1/3 mt-10 md:mt-0 flex flex-col items-center md:items-start space-y-6 md:pl-20">
          {/* ABOUT ME */}
          <div className="w-full max-w-sm border-t border-gray-700 pt-6 text-left backdrop-blur-md bg-white/5 rounded-xl p-5 shadow-md shadow-blue-500/10">
            <h3 className="text-lg font-semibold uppercase mb-2 text-white tracking-wider">
              About Me
            </h3>
            <p className="text-gray-400 text-sm">
              I’m a Full Stack Developer experienced in React.js, Next.js, and Node.js — passionate about building scalable, user-friendly, and high-performance applications.
            </p>
            {showAbout && (
              <div className="mt-4 text-gray-300 text-sm space-y-2">
                <p><strong>Age:</strong> 25</p>
                <p className="flex items-center gap-2">
                  <MapPin size={14} /> Mohammadpur, Dhaka-1207, Bangladesh
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={14} /> rabbihossain88404@gmail.com
                </p>
                <p className="flex items-center gap-2">
                  <Github size={14} />
                  <a href="https://github.com/Rabbi404H" target="_blank" className="hover:text-blue-400 transition">
                    github.com/Rabbi404H
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Globe size={14} />
                  <a href="https://rabbi404.vercel.app" target="_blank" className="hover:text-blue-400 transition">
                    rabbi404.vercel.app
                  </a>
                </p>
                <p>
                  <strong>Education:</strong> Mohammadpur Govt. College — HSC, GPA 3.67 (2021)
                </p>
                <p>
                  <strong>Certification:</strong> Govt. Certified Level-3 in Web Design & Development (NSDA, 2025)
                </p>
              </div>
            )}
            <button
              onClick={() => setShowAbout(!showAbout)}
              className="mt-3 flex items-center text-sm text-blue-400 hover:text-blue-300 transition"
            >
              {showAbout ? "Show Less" : "Learn More"}
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>

          {/* WHAT I CAN DO */}
          <div className="w-full max-w-sm border-t border-gray-700 pt-6 text-left backdrop-blur-md bg-white/5 rounded-xl p-5 shadow-md shadow-purple-500/10">
            <h3 className="text-lg font-semibold uppercase mb-2 text-white tracking-wider">
              What I Can Do for You
            </h3>
            <p className="text-gray-400 text-sm">
              I deliver full-stack web solutions — from sleek frontends to powerful backends — tailored to your goals with modern tech.
            </p>
            {showWork && (
              <div className="mt-3 text-gray-300 text-sm space-y-1">
                <p>⚡ Frontend: React.js, Next.js, Tailwind CSS, Three.js</p>
                <p>⚙️ Backend: Node.js, Express.js, MongoDB, SQL</p>
                <p>🧠 Expertise: API Integration, Prompt Engineering, SEO</p>
                <p>🛠 Tools: Git, GitHub, Vercel, Netlify, Postman</p>
                <p>🌍 Deployment: Render, Railway, Vercel</p>
              </div>
            )}
            <button
              onClick={() => setShowWork(!showWork)}
              className="mt-3 flex items-center text-sm text-purple-400 hover:text-purple-300 transition"
            >
              {showWork ? "Show Less" : "Learn More"}
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
