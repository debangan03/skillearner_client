import React from 'react';
import logoimage from '../assets/Images/logo1.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:justify-between">
          <div className="md:w-1/5 mb-6 md:mb-0">
            <div className="flex-shrink-0">
              <img className="h-16 w-48 mt-px" src={logoimage} alt="Skill Earner Logo" />
            </div>
            <p className="text-gray-400">Empowering you with the skills of tomorrow.</p>
          </div>
          <div className="md:w-1/5 mb-6 md:mb-0">
            <h5 className="uppercase font-bold mb-4">Quick Links</h5>
            <ul>
              <li><Link to="/" className="text-gray-400 hover:text-white block mb-2">Home</Link></li>
              <li><Link to="/courses" className="text-gray-400 hover:text-white block mb-2">Courses</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white block mb-2">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white block">Contact</Link></li>
            </ul>
          </div>
          <div className="md:w-1/5 mb-6 md:mb-0">
            <h5 className="uppercase font-bold mb-4">Policies</h5>
            <ul>
              <li><Link to="/privacypolicy" className="text-gray-400 hover:text-white block mb-2">Privacy Policy</Link></li>
              <li><Link to="/refundpolicy" className="text-gray-400 hover:text-white block mb-2">Refund Policy</Link></li>
              <li><Link to="/termsandconditions" className="text-gray-400 hover:text-white block">Terms and Conditions</Link></li>
            </ul>
          </div>
          <div className="md:w-1/5 mb-6 md:mb-0">
            <h5 className="uppercase font-bold mb-4">Follow Us</h5>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-400 hover:text-white"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.42 3.6 8.06 8.24 9.66.6.11.82-.26.82-.58v-2.12c-3.34.72-4.04-1.4-4.04-1.4-.54-1.36-1.32-1.72-1.32-1.72-1.08-.74.08-.72.08-.72 1.2.08 1.84 1.22 1.84 1.22 1.06 1.84 2.8 1.3 3.48.98.1-.78.42-1.3.76-1.6-2.66-.3-5.44-1.34-5.44-5.96 0-1.32.46-2.4 1.22-3.24-.14-.3-.54-1.52.1-3.16 0 0 1-.32 3.26 1.24.94-.26 1.96-.38 2.98-.38 1.02 0 2.04.12 2.98.38 2.26-1.56 3.26-1.24 3.26-1.24.64 1.64.24 2.86.1 3.16.76.84 1.22 1.92 1.22 3.24 0 4.62-2.78 5.66-5.44 5.96.44.38.82 1.12.82 2.26v3.34c0 .32.22.7.84.58 4.64-1.6 8.24-5.24 8.24-9.66 0-5.5-4.46-9.96-9.96-9.96z"/></svg></a></li>
              <li><a href="#" className="text-gray-400 hover:text-white"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.34-1.58.57-2.44.68.88-.52 1.55-1.34 1.88-2.32-.82.48-1.73.83-2.7 1.02-.78-.83-1.88-1.35-3.1-1.35-2.35 0-4.26 1.91-4.26 4.26 0 .33.04.66.11.98-3.54-.18-6.68-1.87-8.78-4.45-.36.62-.56 1.34-.56 2.1 0 1.45.74 2.72 1.88 3.47-.68-.02-1.32-.21-1.88-.52v.05c0 2.03 1.45 3.72 3.38 4.1-.35.1-.72.15-1.1.15-.27 0-.53-.03-.78-.08.54 1.66 2.08 2.87 3.92 2.91-1.43 1.12-3.22 1.79-5.18 1.79-.34 0-.67-.02-1-.06 1.85 1.19 4.05 1.88 6.42 1.88 7.7 0 11.9-6.38 11.9-11.9 0-.18-.01-.35-.02-.53.81-.59 1.5-1.33 2.05-2.17z"/></svg></a></li>
              <li><a href="#" className="text-gray-400 hover:text-white"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c-5.374 0-9.75 4.376-9.75 9.75 0 4.813 3.444 8.787 7.95 9.614.58.108.792-.253.792-.561 0-.279-.01-1.02-.015-2-3.23.708-3.91-1.555-3.91-1.555-.528-1.344-1.29-1.703-1.29-1.703-1.055-.721.08-.707.08-.707 1.167.083 1.78 1.2 1.78 1.2 1.04 1.778 2.726 1.264 3.39.967.106-.753.41-1.265.75-1.556-2.575-.293-5.283-1.287-5.283-5.73 0-1.265.45-2.3 1.19-3.108-.12-.293-.52-1.475.11-3.077 0 0 .98-.314 3.22 1.2.94-.26 1.94-.39 2.94-.39 1 0 2 .13 2.94.39 2.24-1.514 3.22-1.2 3.22-1.2.63 1.602.23 2.784.11 3.077.74.808 1.19 1.843 1.19 3.108 0 4.456-2.71 5.432-5.29 5.71.42.37.79 1.102.79 2.22 0 1.605-.01 2.9-.01 3.29 0 .31.21.675.79.56 4.51-.825 7.95-4.798 7.95-9.61 0-5.374-4.376-9.75-9.75-9.75z"/></svg></a></li>
              <li><a href="#" className="text-gray-400 hover:text-white"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.56v15.08c0 2.52-2.05 4.36-4.56 4.36h-14.88c-2.52 0-4.56-1.84-4.56-4.36v-15.08c0-2.52 2.05-4.56 4.56-4.56h14.88c2.52 0 4.56 2.05 4.56 4.56zm-11.83 8.39c-1.19 0-2.15-.96-2.15-2.15s.96-2.15 2.15-2.15 2.15.96 2.15 2.15-.96 2.15-2.15 2.15zm4.31 6.81c0-.41-.33-.74-.74-.74h-7.14c-.41 0-.74.33-.74.74v.11c0 .41.33.74.74.74h7.14c.41 0 .74-.33.74-.74v-.11zm-4.31-4.11c2.24 0 4.06-1.82 4.06-4.06s-1.82-4.06-4.06-4.06-4.06 1.82-4.06 4.06 1.82 4.06 4.06 4.06zm6.64-8.92c-.41 0-.74-.33-.74-.74s.33-.74.74-.74.74.33.74.74-.33.74-.74.74z"/></svg></a></li>
            </ul>
          </div>
          <div className="md:w-1/5 mb-6 md:mb-0">
            <h5 className="uppercase font-bold mb-4">Contact Us</h5>
            <p className="text-gray-400">123 Skill Lane</p>
            <p className="text-gray-400">Learning City, ST 12345</p>
            <p className="text-gray-400">Email: support@skillearner.com</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
          &copy; 2024 Skill Earner. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
