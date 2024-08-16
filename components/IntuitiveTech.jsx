import * as React from "react";

function IntuitiveTech() {
  return (
    <div className="flex flex-col md:flex-row gap-10 justify-center items-center px-6 md:px-12">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/42aa6db30df5ce30ac0cd3af24e7cc6f88b3aff8262f8f2367bc992005b4f9a2?placeholderIfAbsent=true&apiKey=774f1019adb54272942a62c15045ee46"
        className="object-contain rounded-none aspect-[1.76] w-full max-w-[500px] md:max-w-[787px]"
      />
      <div className="flex flex-col gap-6 md:max-w-[500px] w-full">
        <div className="flex flex-col">
          <div className="text-2xl md:text-3xl font-semibold text-neutral-900">
            Intuitive technology to navigate financial complexity with ease
          </div>
          <div className="mt-4 text-base md:text-lg tracking-wider leading-7 text-neutral-900 text-opacity-80">
            Leverage advanced analytics and real-time data to make informed
            financial decisions and drive business growth. Our software
            simplifies budgeting, forecasting, and reporting, making financial
            management straightforward and reliable.
          </div>
        </div>
        <div className="px-6 py-3 bg-slate-950 text-white text-base font-semibold tracking-wide rounded shadow-sm w-full max-w-[200px] self-start md:w-48">
          Learn More
        </div>
      </div>
    </div>
  );
}

export default IntuitiveTech;
