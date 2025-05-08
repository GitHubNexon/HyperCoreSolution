import React from "react";
import { FaGithub, FaFacebook, FaInstagram, FaRobot } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import HeroImage from "../assets/hero.gif";

const ContactItem = ({ icon: Icon, link, text }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center text-blue-400 hover:text-blue-300 transition duration-300 ease-in-out group"
  >
    <Icon className="mr-2 sm:mr-3 text-xl sm:text-2xl group-hover:scale-110 transition duration-300" />
    <span className="text-sm sm:text-base md:text-lg">{text}</span>
  </a>
);

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-black text-white font-sans">
      <section className="flex-grow px-4 sm:px-6 lg:px-8 py-12 sm:py-16 flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-12">
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 leading-tight mb-4">
            HyperCoreSolution.<span className="text-blue-400">com</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 max-w-md sm:max-w-lg mx-auto md:mx-0">
            Empowering the future with cutting-edge IT solutions. We provide
            innovative technology services designed to transform your business
            and drive unprecedented growth.
          </p>
        </div>

        {/* Hero Image */}
        <div className="w-full flex justify-center md:justify-end order-1">
          <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-lg shadow-lg overflow-hidden">
            <img
              src={HeroImage}
              alt="HyperCore Solutions Hero"
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      <footer className="bg-gray-950 border-t border-gray-800 py-8 sm:py-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-400 mb-6 sm:mb-8">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-3xl mx-auto">
            <ContactItem
              icon={MdPhone}
              link="tel:+1234567890"
              text="+1 (234) 567-890"
            />
            <ContactItem
              icon={MdEmail}
              link="mailto:info@hypercoresolutions.com"
              text="info@hypercoresolutions.com"
            />
            <ContactItem
              icon={FaGithub}
              link="https://github.com/yourcompany"
              text="GitHub"
            />
            <ContactItem
              icon={FaFacebook}
              link="https://facebook.com/yourcompany"
              text="Facebook"
            />
            <ContactItem
              icon={FaInstagram}
              link="https://instagram.com/yourcompany"
              text="Instagram"
            />
            <ContactItem
              icon={FaRobot}
              link="https://huggingface.co/yourcompany"
              text="Hugging Face"
            />
          </div>
          <p className="text-gray-500 mt-6 sm:mt-8 text-xs sm:text-sm pb-2">
            © 2025 HyperCoreSolutions.com. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
