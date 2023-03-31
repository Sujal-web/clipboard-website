import React from "react";

const CompanyIcons = () => {
  return (
    <div className="">
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
    </div>
  );
};

export default CompanyIcons;
