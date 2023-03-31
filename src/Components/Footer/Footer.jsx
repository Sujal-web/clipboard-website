import React from "react";

const Footer = () => {
  return (
    <div className="">
      {/* references and footer section */}
      <div id="footer">
        <div
          className="flex flex-col justify-center items-center py-6 space-y-6
         md:flex-row md:space-y-0 md:space-x-4 md:justify-around bg-gray-200"
        >
          <div className="">
            <img
              className="h-16"
              src="/images/clipboard-images/logo.svg"
              alt=""
            />
          </div>

          {/* Item 1 */}
          <div className="flex flex-col items-center justify-center md:h-16 text-center md:text-left space-y-6 text-gray-500 cursor-pointer">
            <a className="hover:underline w-full" href="#">
              FAQs
            </a>
            <a className="hover:underline w-full" href="#">
              Contact Us
            </a>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center justify-center md:h-16 text-center md:text-left space-y-6 text-gray-500 cursor-pointer">
            <a className="hover:underline w-full" href="#">
              Privacy Policy
            </a>
            <a className="hover:underline w-full" href="#">
              Press Kit
            </a>
          </div>

          {/* Item 3 */}
          <div
            className="flex flex-col items-center justify-center md:h-16 text-center md:text-left space-y-6
          md:justify-start text-gray-500 cursor-pointer"
          >
            <a className="hover:underline w-full" href="#">
              Install Guide
            </a>
          </div>
          {/* company icons */}
          <div className="flex space-x-6 justify-center items-center md:h-16">
            <img
              className="cursor-pointer hover:-translate-y-0.5 transition 
              duration-150 hover:shadow-md hover:scale-105"
              src="/images/clipboard-images/icon-facebook.svg"
              alt=""
            />
            <img
              className="cursor-pointer hover:-translate-y-0.5 transition 
              duration-150 hover:shadow-md hover:scale-105"
              src="/images/clipboard-images/icon-instagram.svg"
              alt=""
            />
            <img
              className="cursor-pointer hover:-translate-y-0.5 transition 
              duration-150 hover:shadow-md hover:scale-105"
              src="/images/clipboard-images/icon-twitter.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
