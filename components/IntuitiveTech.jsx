import * as React from "react";

function IntuitiveTech() {
  return (
    <div className="flex flex-wrap gap-10 justify-center items-center">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/42aa6db30df5ce30ac0cd3af24e7cc6f88b3aff8262f8f2367bc992005b4f9a2?placeholderIfAbsent=true&apiKey=774f1019adb54272942a62c15045ee46"
        className="object-contain self-stretch my-auto rounded-none aspect-[1.76] min-w-[240px] w-[787px] max-md:max-w-full"
      />
      <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[500px] max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[501px]">
          <div className="text-3xl font-semibold text-neutral-900 max-md:max-w-full">
            Intuitive technology to navigate financial complexity with ease
          </div>
          <div className="mt-4 text-lg tracking-wider leading-7 text-neutral-900 text-opacity-80 max-md:max-w-full">
            Leverage advanced analytics and real-time data to make informed
            financial decisions and drive business growth. Our software
            simplifies budgeting, forecasting, and reporting, making financial
            management straightforward and reliable.
          </div>
        </div>
        <div className="gap-2.5 self-stretch px-8 py-4 mt-10 w-48 max-w-full text-lg font-semibold tracking-wide leading-none text-white rounded shadow-sm bg-slate-950 min-h-[56px] max-md:px-5">
          Learn More
        </div>
      </div>
    </div>
  );
}


export default IntuitiveTech;