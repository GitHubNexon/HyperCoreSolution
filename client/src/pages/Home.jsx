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
    <Icon className="mr-2 sm:mr-3 text-lg sm:text-xl md:text-2xl group-hover:scale-110 transition duration-300 ease-in-out" />
    <span className="text-xs sm:text-sm md:text-base lg:text-lg">{text}</span>
  </a>
);

const Home = () => {
  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-center min-h-screen
      bg-gradient-to-br from-gray-900 to-black text-white font-sans
      px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 gap-6 sm:gap-8 md:gap-12 lg:gap-16"
    >
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 max-w-2xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 leading-tight mb-4 sm:mb-6">
          <span className="whitespace-nowrap">
            HyperCoreSolution.<span className="text-blue-400">com</span>
          </span>
        </h1>

        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
          Empowering the future with cutting-edge IT solutions. We provide
          innovative technology services designed to transform your business and
          drive unprecedented growth.
        </p>

        <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 md:gap-5">
          <ContactItem
            icon={FaGithub}
            link="https://github.com/GitHubNexon"
            text="GitHub"
          />
          <ContactItem
            icon={MdEmail}
            link="mailto:johnmarkpulmano.dev@gmail.com"
            text="Email Us"
          />
          <ContactItem
            icon={FaFacebook}
            link="https://www.facebook.com/johnmarkliliopulmano"
            text="Facebook"
          />
          <ContactItem
            icon={FaInstagram}
            link="https://www.instagram.com/finch_fuzzy/"
            text="Instagram"
          />
           <ContactItem
            icon={FaRobot}
            link="https://huggingface.co/hypercore"
            text="HuggingFace"
          />
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <img
          src={HeroGif}
          alt="HyperCoreSolution Hero Illustration"
          className="w-full h-auto object-contain rounded-lg shadow-lg max-w-[80%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-[75%] xl:max-w-[80%] aspect-auto"
        />
      </div>
    </div>
  );
};

export default Home;
