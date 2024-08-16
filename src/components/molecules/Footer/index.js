import React from "react";
import { FaTelegram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const year = new Date();

  return (
    <>
      <footer
        className="w-full text-center p-6 bg-accent"
        style={{ backgroundColor: "#313131" }}
      >
        <div className="flex items-center justify-center mb-6">
          <a
            className="inline-block mx-2"
            href="https://t.me/judi_ali"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegram className="text-2xl text-[#229ED9]" />
          </a>
          <a
            className="inline-block mx-2"
            href="https://www.linkedin.com/in/judi-ali/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl text-white" />
          </a>
          <a
            className="inline-block mx-2"
            href="https://github.com/Judi-Ali"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl text-black" />
          </a>
          {/* <a
            className="inline-block mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl text-pink-500" />
          </a> */}
        </div>
        {/* <div className="hidden  md:flex items-center justify-center mb-6 flex-wrap">
          <a
            className="text-xl inline-bloc mx-6 text-neutral"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fiverr
          </a>
          <a
            className="text-xl inline-bloc mx-6 text-neutral"
            target="_blank"
            rel="noopener noreferrer"
          >
            UpWork
          </a>
          <a
            className="text-xl inline-bloc mx-6 text-neutral"
            target="_blank"
            rel="noopener noreferrer"
          >
            Freelancer
          </a>
          <a
            className="text-xl inline-bloc mx-6 text-neutral"
            target="_blank"
            rel="noopener noreferrer"
          >
            ThemeForest
          </a>
          <a
            className="text-xl inline-bloc mx-6 text-neutral"
            target="_blank"
            rel="noopener noreferrer"
          >
            RemoteHub
          </a>
          <a
            className="text-xl inline-bloc mx-6 text-neutral"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dribbble
          </a>
          <a
            className="text-xl inline-bloc mx-6 text-neutral"
            href="https://drive.google.com/file/d/1Rpj8koI8ZAxa75jfUA5purpJ8bTVmO42/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div> */}

        <div className="w-full h-[2px] bg-gray-600"></div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-4">
          <p>&copy; Copyright All Rights Reserved {year.getFullYear()}</p>
          <p>
            Developed by{" "}
            <a
              href="https://www.linkedin.com/in/judi-ali/"
              className="text-primary hover:underline"
              target="blank"
            >
              Judi Ali
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
