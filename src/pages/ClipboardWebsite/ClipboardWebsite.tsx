import * as React from "react";

const ClipboardWebsite = () => {
  return (
    // global container
    <div>
      {/* hero section */}
      <section id="hero">
        <div className="parent-container mb-28 px-10 pt-10">
          <img
            className="mx-auto mt-12 mb-10"
            src="/src/assets/images/clipboard-images/logo.svg"
            alt=""
          />

          <h3>A history of everything you copy</h3>

          <p className="section-content text-center mb-10">
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all devices.
          </p>

          {/* button contrainer */}
          <div className="flex px-6 flex-col justify-center w-full space-y-5 md:flex-row md:space-y-0 md:space-x-5">
            <a
              href="#"
              className="py-3 px-10 rounded-full text-white bg-emerald-700 hover:bg-emerald-600 
              duration-200 hover:-translate-y-0.5 transition cursor-pointer
              shadow-sm shadow-emerald-100 hover:shadow-lg hover:shadow-emerald-200"
            >
              Download for iOS
            </a>
            <a
              href="#"
              className="py-3 px-10 rounded-full text-white bg-blue-600 hover:bg-blue-500 
              duration-200 hover:-translate-y-0.5 transition cursor-pointer
              shadow-sm shadow-blue-100 hover:shadow-lg hover:shadow-blue-200"
            >
              Download for Mac
            </a>
          </div>
        </div>
      </section>

      {/* snippets section */}
      <section id="snippets">
        <div className="parent-container mb-24 px-10">
          {/* content */}
          <div className="flex flex-col mb-14 space-y-4">
            <h3>Keep track of your snippets</h3>

            <p className="section-content text-center">
              Clipboard instantly stores any item you copy in the cloud, meaning
              you can access your snippets immediately on all your devices. Our
              Mac and iOS apps will help you organize everything.
            </p>
          </div>

          {/* img and items */}
          <div
            className="flex flex-col justify-between items-center mb-10 space-y-4
           md:flex-row md:space-y-0 md:space-x-6"
          >
            {/* image */}
            <img
              className="mb-10 px-10 my-auto md:w-1/2 object-contain"
              src="/src/assets/images/clipboard-images/image-computer.png"
              alt=""
            />

            {/* items */}
            <div
              className="flex flex-col items-center md:w-1/2 space-y-6 lg:space-y-10 lg:pb-10 lg:pl-4
               justify-between  md:text-left"
            >
              {/* item 1 */}
              <div className="flex flex-col space-y-2 justify-center items-center md:items-start">
                <h5 className="text-xl font-bold text-gray-800">
                  Quick Search
                </h5>
                <p className="section-content mb-20">
                  Easily search your snippets by content, category, web address,
                  application, and more.
                </p>
              </div>

              {/* item 2 */}
              <div className="flex flex-col space-y-2 w-full justify-center items-center md:items-start md:text-left">
                <h5 className="text-xl font-bold text-gray-800">iCloud Sync</h5>
                <p className="section-content mb-20 w-full">
                  Instantly saves and syncs snippets across all your devices.
                </p>
              </div>

              {/* item 3 */}
              <div className="flex flex-col space-y-2 justify-center items-center md:items-start">
                <h5 className="text-xl font-bold text-gray-800">
                  Completely History
                </h5>
                <p className="section-content mb-20">
                  Retrieve any snippets from the first moment you started using
                  the app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* clipboard section */}
      <section id="clipboard">
        <div className="parent-container mb-16 px-10">
          <h3>Access Clipboard Anywhere</h3>

          <p className="section-content text-center pb-14">
            Whether you're on the go, or at your computer, you can access all
            your Clipboard snippets in a few simple clicks.
          </p>

          <img
            className="mx-auto object-contain w-full md:max-w-2xl"
            src="/src/assets/images/clipboard-images/image-devices.png"
            alt=""
          />
        </div>
      </section>

      {/* supercharge section */}
      <section id="supercharge">
        <div className="parent-container mb-24 px-10">
          <h3>Supercharge your workflow</h3>
          <p className="section-content text-center pb-14">
            We've got the tools to boost your productivity.
          </p>
          {/* items */}
          <div className="flex flex-col justify-center items-center space-y-6 md:flex-row md:space-y-0 md:space-x-8">
            {/* item 1 */}
            <div className="flex flex-col justify-center items-center space-y-4">
              <img
                className=""
                src="/src/assets/images/clipboard-images/icon-blacklist.svg"
                alt=""
              />

              <h5 className="snippet-heading">Create Blacklists</h5>
              <p className="mx-auto text-md leading-6 text-gray-600">
                Easily search your snippets by content, category, web address,
                application and more.
              </p>
            </div>

            {/* item 2 */}
            <div className="flex flex-col justify-center items-center space-y-4">
              <img
                className=""
                src="/src/assets/images/clipboard-images/icon-text.svg"
                alt=""
              />

              <h5 className="snippet-heading">Plain Text Snippets</h5>
              <p className="mx-auto text-md leading-6 text-gray-600">
                Remove unwanted formatting from copied text for a consistent
                look.
              </p>
            </div>

            {/* item 3 */}
            <div className="flex flex-col justify-center items-center space-y-4">
              <img
                className=""
                src="/src/assets/images/clipboard-images/icon-preview.svg"
                alt=""
              />

              <h5 className="snippet-heading">Sneak Preview</h5>
              <p className="mx-auto text-md leading-6 text-gray-600">
                Quick preview of all snippets on your Clipboard for easy access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* company icons section */}
      <section id="company-icons">
        <div
          className="flex flex-col items-center justify-center mb-20 px-14 
        space-y-16 text-gray-500 md:flex-row md:space-y-0 md:space-x-6 md:justify-around md:w-full"
        >
          <img
            src="/src/assets/images/clipboard-images/logo-google.png"
            alt=""
          />
          <img src="/src/assets/images/clipboard-images/logo-ibm.png" alt="" />
          <img
            src="/src/assets/images/clipboard-images/logo-microsoft.png"
            alt=""
          />
          <img src="/src/assets/images/clipboard-images/logo-hp.png" alt="" />
          <img
            src="/src/assets/images/clipboard-images/logo-vector-graphics.png"
            alt=""
          />
        </div>
      </section>

      {/* clipboard endpage section */}
      <section id="clipboard-endpage">
        <div className="parent-container mb-28 px-10 pt-10">
          <h3>Clipboard for iOS and MacOS</h3>

          <p className="section-content text-center mb-10">
            Available for free on the App Store. Download for Mac or iOS, sync
            with iCloud and you're ready to start adding to your clipboard.
          </p>

          {/* button contrainer */}
          <div className="flex px-6 flex-col justify-center w-full space-y-5 md:flex-row md:space-y-0 md:space-x-5">
            <a
              href="#"
              className="py-3 px-10 rounded-full text-white bg-emerald-700 hover:bg-emerald-600 
              duration-200 hover:-translate-y-0.5 transition cursor-pointer
              shadow-sm shadow-emerald-100 hover:shadow-lg hover:shadow-emerald-200"
            >
              Download for iOS
            </a>
            <a
              href="#"
              className="py-3 px-10 rounded-full text-white bg-blue-600 hover:bg-blue-500 
              duration-200 hover:-translate-y-0.5 transition cursor-pointer
              shadow-sm shadow-blue-100 hover:shadow-lg hover:shadow-blue-200"
            >
              Download for Mac
            </a>
          </div>
        </div>
      </section>

      {/* references and footer section */}
      <section id="footer">
        <div
          className="flex flex-col justify-center items-center py-6 space-y-6
         md:flex-row md:space-y-0 md:space-x-4 md:justify-around bg-gray-200"
        >
          <div className="">
            <img
              className="h-16"
              src="/src/assets/images/clipboard-images/logo.svg"
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
              src="/src/assets/images/clipboard-images/icon-facebook.svg"
              alt=""
            />
            <img
              className="cursor-pointer hover:-translate-y-0.5 transition 
              duration-150 hover:shadow-md hover:scale-105"
              src="/src/assets/images/clipboard-images/icon-instagram.svg"
              alt=""
            />
            <img
              className="cursor-pointer hover:-translate-y-0.5 transition 
              duration-150 hover:shadow-md hover:scale-105"
              src="/src/assets/images/clipboard-images/icon-twitter.svg"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClipboardWebsite;
