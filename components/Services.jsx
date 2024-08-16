import * as React from "react";

function Services() {
  return (
    <div className="flex flex-col items-center mt-20 px-4">
      <div className="text-3xl font-semibold text-center text-zinc-900 max-w-full md:max-w-4xl">
        Unique Software Solutions for Your Businesses
      </div>
      <div className="mt-10 w-full max-w-4xl">
        <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "EMR Solutions",
              description: "Streamline patient care with our advanced electronic medical records system",
              imgSrc: "/images/icons/solution.svg"
            },
            {
              title: "Financial Management",
              description: "Optimize your financial processes with our software, designed for accuracy and efficiency in all aspects of finance",
              imgSrc: "/images/icons/note.svg"
            },
            {
              title: "ERP Systems",
              description: "Centralize and simplify your business operations with our integrated ERP solutions",
              imgSrc: "/images/icons/progress.svg"
            },
            {
              title: "School Management",
              description: "Enhance educational administration with our comprehensive school management tools",
              imgSrc: "/images/icons/school.svg"
            },
            {
              title: "E-Commerce",
              description: "Drive online sales and improve customer experience with our tailored e-commerce solutions",
              imgSrc: "/images/icons/ecommense.svg"
            },
            {
              title: "E-Book Services",
              description: "Expand your digital content offerings with our platform, making e-books more accessible and engaging",
              imgSrc: "/images/icons/ebook.svg"
            }
          ].map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-center px-6 py-7 bg-white rounded-3xl shadow-2xl w-full"
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
