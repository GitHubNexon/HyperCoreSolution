import React from "react";
import { FaGithub, FaFacebook, FaInstagram, FaRobot } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import HeroGif from "../assets/hero.gif";

const ContactItem = ({ icon: Icon, link, text }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center text-blue-400 hover:text-blue-300 transition duration-300 ease-in-out group"
    tabIndex="0"
  >
    <Icon className="mr-2 sm:mr-3 text-xl sm:text-2xl group-hover:scale-110 transition duration-300 ease-in-out" />
    <span className="text-sm sm:text-base md:text-lg ">{text}</span>{" "}
  </a>
);

const Test = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center min-h-screen
      bg-gradient-to-br from-gray-900 to-black text-white font-sans
      p-4 sm:p-8 gap-8 md:gap-16"
    >
      <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 leading-tight mb-4">
          HyperCoreSolution.<span className="text-blue-400">com</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 max-w-md sm:max-w-lg">
          Empowering the future with cutting-edge IT solutions. We provide
          innovative technology services designed to transform your business and
          drive unprecedented growth.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <ContactItem
            icon={FaGithub}
            link="https://github.com/yourprofile"
            text="GitHub"
          />
          <ContactItem
            icon={MdEmail}
            link="mailto:info@hypercoresolution.com"
            text="Email Us"
          />
          <ContactItem icon={MdPhone} link="tel:+1234567890" text="Call Us" />
          <ContactItem
            icon={FaFacebook}
            link="https://facebook.com/yourpage"
            text="Facebook"
          />
          <ContactItem
            icon={FaInstagram}
            link="https://instagram.com/yourpage"
            text="Instagram"
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src={HeroGif}
          alt="HyperCoreSolution Hero Illustration"
          className="w-full h-auto object-contain rounded-lg shadow-lg max-w-sm md:max-w-md lg:max-w-lg"
        />
      </div>
    </div>
  );
};

export default Test; // Export the renamed component
