import React from 'react'

function Footer() {
  return (
    <div>Footer</div>
  )
}

export default Footer

// import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa'
// import { Link } from 'react-router-dom'
// import SmoothScrollLink from './utils/SmoothScrollLink'

// const Footer = () => {
//   const currentYear = new Date().getFullYear()

//   return (
//     <footer className="footer p-10 bg-neutral text-neutral-content">
//       <div className="container mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* About */}
//           <div>
//             <span className="footer-title">About</span>
//             <p>
//               A passionate MERN stack developer building modern web applications with focus on performance, accessibility, and user experience.
//             </p>
//           </div>
          
//           {/* Quick Links */}
//           <div>
//             <span className="footer-title">Quick Links</span>
//             <div className="grid grid-cols-2 gap-2">
//               <SmoothScrollLink to="/#home" className="link link-hover">Home</SmoothScrollLink>
//               <SmoothScrollLink to="/#about" className="link link-hover">About</SmoothScrollLink>
//               <SmoothScrollLink to="/#projects" className="link link-hover">Projects</SmoothScrollLink>
//               <SmoothScrollLink to="/#skills" className="link link-hover">Skills</SmoothScrollLink>
//               <SmoothScrollLink to="/#resume" className="link link-hover">Resume</SmoothScrollLink>
//               <SmoothScrollLink to="/#contact" className="link link-hover">Contact</SmoothScrollLink>
//             </div>
//           </div>
          
//           {/* Social */}
//           <div>
//             <span className="footer-title">Social</span>
//             <div className="flex space-x-4">
//               <a 
//                 href="https://github.com/yourusername" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="btn btn-circle btn-ghost hover:bg-primary hover:text-primary-content"
//                 aria-label="GitHub"
//               >
//                 <FaGithub size={20} />
//               </a>
//               <a 
//                 href="https://linkedin.com/in/yourusername" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="btn btn-circle btn-ghost hover:bg-primary hover:text-primary-content"
//                 aria-label="LinkedIn"
//               >
//                 <FaLinkedin size={20} />
//               </a>
//               <a 
//                 href="https://twitter.com/yourusername" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="btn btn-circle btn-ghost hover:bg-primary hover:text-primary-content"
//                 aria-label="Twitter"
//               >
//                 <FaTwitter size={20} />
//               </a>
//             </div>
//           </div>
//         </div>
        
//         {/* Copyright */}
//         <div className="border-t border-neutral-content/10 pt-6 mt-8 text-center">
//           <p>
//             &copy; {currentYear} All rights reserved | Made with <FaHeart className="inline text-red-500" /> by YourName
//           </p>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer