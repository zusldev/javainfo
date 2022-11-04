import React from "react";

const Footer = () => {
  {
    /* footer with link to github */
  }
  return (
    <footer className="p-4 bg-white bottom-0:sm w-full relative shadow:sm md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 z-50">
      <span className="text-sm text-gray-500 text-center:sm dark:text-gray-400">
        © 2022{" "}
        <a href="#" className="hover:underline">
          Java.info
        </a>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 mt-4:sm">
        <li>
          <a
            href="https://github.com/Zusl16"
            target="_blank"
            className="mr-4 hover:underline md:mr-6 "
          >
            Liborio Zuñiga
          </a>
        </li>
        <li>
          <a
            href="https://github.com/JairoSainz"
            target="_blank"
            className="mr-4 hover:underline md:mr-6"
          >
            Jairo Sainz
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
