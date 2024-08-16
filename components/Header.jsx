import * as React from "react";

function Header() {
  const customStyle = {
    
    sunshineyFont: {
      fontFamily: "'Sunshiney', cursive",
    },
  };




  return (
    <div className="flex overflow-hidden flex-col">
      <div className="flex flex-col w-full">
        <div className="relative flex flex-col pt-28 mt-0 w-full min-h-[745px] md:pt-24">
          <img
            loading="lazy"
            srcSet="/images/bg-photo.png"
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="relative flex flex-col mx-auto w-[90%] max-w-[607px] md:ml-32">
            <div className="flex flex-col text-white">
              <div className="text-4xl font-semibold md:text-5xl">
                Empower Your Business With Our{" "}
                <span className="text-cyan-500">Software </span>Solutions
              </div>
              <div className="mt-4 text-lg tracking-wider">
                Simplify your operations with custom software designed to solve
                your unique business challenges
              </div>
            </div>
            <button className="mt-10 px-5 py-5 text-lg font-semibold tracking-wide leading-none text-slate-950 bg-cyan-500 rounded shadow-md w-[226px]">
              Learn More
            </button>
          </div>
          <div style={{border: "red solid red", marginTop: "180px"}} className="relative flex flex-col justify-center items-center mt-10 w-full bg-gray-600 bg-opacity-50 min-h-[158px] md:mt-24">
            <div className="text-xl tracking-wider text-center text-white">
              Trusted by <span className="font-medium text-cyan-500">50+</span>{" "}
              Partners & Customers
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4 mt-5 max-w-full">
              <div className="flex gap-4 items-center">
                <img
                  loading="lazy"
                  src="/images/icons/b-5.svg"
                  className="object-contain w-[41px] aspect-[0.98]"
                />
                <img
                  loading="lazy"
                  src="/images/icons/bou.svg"
                  className="object-contain w-[116px] aspect-[8.26]"
                />
              </div>
              <div className="flex gap-4 items-center text-2xl tracking-wider text-white whitespace-nowrap">
                <img
                  loading="lazy"
                  src="/images/icons/gyn.svg"
                  className="object-contain w-[41px] aspect-[0.98]"
                />
                <div style={customStyle.sunshineyFont}>GYNESCOPE</div>
              </div>
              <div className="flex gap-4 items-center">
                <img
                  loading="lazy"
                  src="/images/icons/b-5.svg"
                  className="object-contain w-[42px] aspect-square"
                />
                <img
                  loading="lazy"
                  src="/images/icons/bou.svg"
                  className="object-contain w-[115px] aspect-[8.2]"
                />
              </div>
              <div className="flex gap-4 items-center text-2xl tracking-wider text-white whitespace-nowrap">
                <img
                  loading="lazy"
                  src="/images/icons/gyn.svg"
                  className="object-contain w-[42px] aspect-square"
                />
                <div style={customStyle.sunshineyFont}>GYNESCOPE</div>
              </div>
              <div className="flex gap-4 items-center text-2xl tracking-wider whitespace-nowrap text-white text-opacity-90">
                <img
                  loading="lazy"
                  src="/images/icons/leaf.svg"
                  className="object-contain w-[41px] aspect-[0.98]"
                />
                <div>KingSoo</div>
              </div>
            </div>
          </div> 
          {/* end of parter section */}
        </div>
      </div>
    </div>
  );
}

export default Header;
