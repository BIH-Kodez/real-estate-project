// src/components/Footer.jsx
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-16 px-6 sm:px-12 lg:px-20 rounded-t-3xl overflow-hidden">
      {/* Watermark Text */}
      <div className="absolute inset-0 flex justify-center items-end pointer-events-none opacity-10">
        <h1 className="text-[120px] sm:text-[160px] font-bold uppercase tracking-widest text-white/5 leading-none select-none">
          Livest
        </h1>
      </div>

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Left - Tagline + Socials */}
        <div>
          <p className="mb-6 text-sm sm:text-base max-w-sm">
            Stay connected, explore opportunities, and invest with confidence.
            Your real estate success starts here
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-green-400">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-green-400">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-green-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-green-400">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Center - Navigation 1 */}
        <div className="flex flex-col space-y-3 text-sm sm:text-base">
          <a href="#" className="hover:text-green-400">Home</a>
          <a href="#" className="hover:text-green-400">Services</a>
          <a href="#" className="hover:text-green-400">Invest</a>
          <a href="#" className="hover:text-green-400">Properties</a>
        </div>

        {/* Right - Navigation 2 */}
        <div className="flex flex-col space-y-3 text-sm sm:text-base">
          <a href="#" className="hover:text-green-400">About</a>
          <a href="#" className="hover:text-green-400">Contact</a>
          <a href="#" className="hover:text-green-400">Privacy Policy</a>
          <a href="#" className="hover:text-green-400">Terms & Conditions</a>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 mt-12 text-center text-xs sm:text-sm text-white/60">
        All Rights Reserved 2024 | <span className="font-semibold text-white">Cando</span>
      </div>
    </footer>
  );
};

export default Footer;
