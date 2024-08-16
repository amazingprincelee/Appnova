import * as React from "react";

function Services() {
  return (
    <div className="flex flex-col items-center mt-20 px-4">
      <div className="text-3xl font-semibold text-center text-zinc-900 max-w-full md:max-w-4xl">
        Unique Software Solutions for Your Businesses
      </div>
      <div className="flex flex-col mt-10 gap-7 w-full max-w-4xl">
        <div className="flex flex-wrap justify-center gap-7">
          {[
            {
              title: "EMR Solutions",
              description: "Streamline patient care with our advanced electronic medical records system",
              imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/756fc9190f600f4671529da9b60309b31cc80be6656ff6b997c100be743795b1?placeholderIfAbsent=true&apiKey=774f1019adb54272942a62c15045ee46"
            },
            {
              title: "Financial Management",
              description: "Optimize your financial processes with our software, designed for accuracy and efficiency in all aspects of finance",
              imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/8a24482ece4dc81d69ab8e042aa822dd8b467b3dff554f5ef555add227bef0c3?placeholderIfAbsent=true&apiKey=774f1019adb54272942a62c15045ee46"
            },
            {
              title: "ERP Systems",
              description: "Centralize and simplify your business operations with our integrated ERP solutions",
              imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a119fd8186ed4b61190fe42bc49c28bd37ffa68a0ea49d33aa56a6dc3f59687a?placeholderIfAbsent=true&apiKey=774f1019adb54272942a62c15045ee46"
            },
            {
              title: "School Management",
              description: "Enhance educational administration with our comprehensive school management tools",
              imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/45c0e260e198ee345b3a7ca3bfb67e6a81e5397ea80fc01eba14a591254ed4bb?placeholderIfAbsent=true&apiKey=774f1019adb54272942a62c15045ee46"
            },
            {
              title: "E-Commerce",
              description: "Drive online sales and improve customer experience with our tailored e-commerce solutions",
              imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2c36bf4aef7cdc336adedf216c1b6808a2a79159febf615aa5c06fe6144f402d?placeholderIfAbsent=true&apiKey=774f1019adb54272942a62c15045ee46"
            },
            {
              title: "E-Book Services",
              description: "Expand your digital content offerings with our platform, making e-books more accessible and engaging",
              imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0700a0132071c6d82d797d2b365e6c28bba5c94e34a0e7ccf1eaa4adc5b85d3f?placeholderIfAbsent=true&apiKey=774f1019adb54272942a62c15045ee46"
            }
          ].map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-center px-6 py-7 bg-white rounded-3xl shadow-2xl w-full sm:w-[350px] lg:w-[387px]"
            >
              <img
                loading="lazy"
                src={service.imgSrc}
                className="object-contain aspect-square w-[73px]"
                alt={service.title}
              />
              <div className="flex flex-col justify-center mt-9">
                <div className="text-2xl font-semibold tracking-wider text-zinc-900">
                  {service.title}
                </div>
                <div className="mt-3 text-base tracking-wide text-neutral-900 text-opacity-80">
                  {service.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
