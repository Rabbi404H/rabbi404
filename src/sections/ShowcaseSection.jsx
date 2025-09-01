import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
  <a href="https://animated-demo.vercel.app/" target="_blank" rel="noopener noreferrer">
    <video 
      src="/videos/1videos.mp4" 
      autoPlay 
      loop 
      muted 
      playsInline 
      className="w-full h-full object-cover rounded-xl absolute inset-0"
    />
  </a>
</div>

            <div className="text-content">
              <h2>
                On-Demand Gamers Made Simple with a Powerful, User-Friendly App
                called Gamer
              </h2>
              <p className="text-white-50 md:text-xl">
                A modern and responsive clone of Redefine Gamer, built with React & TailwindCSS featuring smooth animations and a gamer-centric UI.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div>
  <a href="https://your-library-app-link.com" target="_blank" rel="noopener noreferrer">
    <video 
      src="/videos/2videos.mp4" 
      autoPlay 
      loop 
      muted 
      playsInline 
      className="w-full h-full object-contain rounded-xl"
    />
  </a>
</div>

              <h2> A Startup Showcase App built using React Three Fiber & GSAP.</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div>
  <a href="https://your-yc-directory-link.com" target="_blank" rel="noopener noreferrer">
    <video 
      src="/videos/3videos.mp4" 
      autoPlay 
      loop 
      muted 
      playsInline 
      className="w-full h-full object-contain rounded-xl"
    />
  </a>
</div>

              <h2>A K72 clone website featuring smooth GSAP-powered animations and interactive UI elements.</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;




// import { useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// const AppShowcase = () => {
//   const sectionRef = useRef(null);
//   const rydeRef = useRef(null);
//   const libraryRef = useRef(null);
//   const ycDirectoryRef = useRef(null);

//   useGSAP(() => {
//     gsap.fromTo(
//       sectionRef.current,
//       { opacity: 0 },
//       { opacity: 1, duration: 1.5 }
//     );

//     const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

//     cards.forEach((card, index) => {
//       gsap.fromTo(
//         card,
//         {
//           y: 50,
//           opacity: 0,
//         },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1,
//           delay: 0.3 * (index + 1),
//           scrollTrigger: {
//             trigger: card,
//             start: "top bottom-=100",
//           },
//         }
//       );
//     });
//   }, []);

//   return (
//     <div id="work" ref={sectionRef} className="app-showcase">
//       <div className="w-full">
//         <div className="showcaselayout">
//           {/* First Project */}
//           <div ref={rydeRef} className="first-project-wrapper">
//             <div className="image-wrapper">
//               <a href="https://your-ryde-app-link.com" target="_blank" rel="noopener noreferrer">
//                 <video
//                   src="/videos/1videos.mp4"
//                   autoPlay
//                   loop
//                   muted
//                   playsInline
//                   className="rounded-xl shadow-lg"
//                 />
//               </a>
//             </div>
//             <div className="text-content">
//               <h2>
//                 On-Demand Rides Made Simple with a Powerful, User-Friendly App
//                 called Ryde
//               </h2>
//               <p className="text-white-50 md:text-xl">
//                 An app built with React Native, Expo, & TailwindCSS for a fast,
//                 user-friendly experience.
//               </p>
//             </div>
//           </div>

//           {/* Second + Third Projects */}
//           <div className="project-list-wrapper overflow-hidden">
//             <div className="project" ref={libraryRef}>
//               <div className="video-wrapper bg-[#FFEFDB]">
//                 <a href="https://your-library-app-link.com" target="_blank" rel="noopener noreferrer">
//                   <video
//                     src="/videos/library.mp4"
//                     autoPlay
//                     loop
//                     muted
//                     playsInline
//                     className="rounded-xl shadow-lg"
//                   />
//                 </a>
//               </div>
//               <h2>The Library Management Platform</h2>
//             </div>

//             <div className="project" ref={ycDirectoryRef}>
//               <div className="video-wrapper bg-[#FFE7EB]">
//                 <a href="https://your-yc-directory-link.com" target="_blank" rel="noopener noreferrer">
//                   <video
//                     src="/videos/yc-directory.mp4"
//                     autoPlay
//                     loop
//                     muted
//                     playsInline
//                     className="rounded-xl shadow-lg"
//                   />
//                 </a>
//               </div>
//               <h2>YC Directory - A Startup Showcase App</h2>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AppShowcase;

