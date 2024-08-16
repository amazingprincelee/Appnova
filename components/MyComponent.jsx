import * as React from "react";
import Image from "next/image";

function MyComponent() {
  return (
    <div className="flex overflow-hidden flex-col">
      <div className="flex flex-col w-full">
        <div className="relative flex flex-col pt-28 mt-0 w-full min-h-[745px] md:pt-24">
          <Image
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6a99c64e9812567df5dda0a988b0fccf4af0c38a44934bb6105b1a89fd27cd51?placeholderIfAbsent=true&apiKey=774f1019adb54272942a62c15045ee46&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a99c64e9812567df5dda0a988b0fccf4af0c38a44934bb6105b1a89fd27cd51?placeholderIfAbsent=true&apiKey=774f1019adb54272942a62c15045ee46&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a99c64e9812567df5dda0a988b0fccf4af0c38a44934bb6105b1a89fd27cd51?placeholderIfAbsent=true&apiKey=774f1019adb54272942a62c15045ee46&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a99c64e9812567df5dda0a988b0fccf4af0c38a44934bb6105b1a89fd27cd51?placeholderIfAbsent=true&apiKey=774f1019adb54272942a62c15045ee46&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a99c64e9812567df5dda0a988b0fccf4af0c38a44934bb6105b1a89fd27cd51?placeholderIfAbsent=true&apiKey=774f1019adb54272942a62c15045ee46&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a99c64e9812567df5dda0a988b0fccf4af0c38a44934bb6105b1a89fd27cd51?placeholderIfAbsent=true&apiKey=774f1019adb54272942a62c15045ee46&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a99c64e9812567df5dda0a988b0fccf4af0c38a44934bb6105b1a89fd27cd51?placeholderIfAbsent=true&apiKey=774f1019adb54272942a62c15045ee46&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a99c64e9812567df5dda0a988b0fccf4af0c38a44934bb6105b1a89fd27cd51?placeholderIfAbsent=true&apiKey=774f1019adb54272942a62c15045ee46"
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
                <Image
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9b8bf8a5a7131050477fc191b1ccd8138f20c2a23eaf0bb1f68dbe8cf69123c?placeholderIfAbsent=true&apiKey=774f1019adb54272942a62c15045ee46"
                  className="object-contain w-[41px] aspect-[0.98]"
                />
                <Image
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2676c2c9091c07967ee9e0fae946907e4e076f5445eb6978f5857c3e5050d91?placeholderIfAbsent=true&apiKey=774f1019adb54272942a62c15045ee46"
                  className="object-contain w-[116px] aspect-[8.26]"
                />
              </div>
              <div className="flex gap-4 items-center text-2xl tracking-wider text-white whitespace-nowrap">
                <Image
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f4a9837ea2d1460da5253a736cb4a0d13604d3477fd3d61b238b9030214a1ed?placeholderIfAbsent=true&apiKey=774f1019adb54272942a62c15045ee46"
                  className="object-contain w-[41px] aspect-[0.98]"
                />
                <div>GYNESCOPE</div>
              </div>
              <div className="flex gap-4 items-center">
                <Image
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d306a8d1fbb83229ed9914cfe7f34161dcb468ef315166b48e2af36014b1d41?placeholderIfAbsent=true&apiKey=774f1019adb54272942a62c15045ee46"
                  className="object-contain w-[42px] aspect-square"
                />
                <Image
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f03714159de43cf2a62d969684e6d90f72cf46b47e909ff7484d7dbdfc39b7d0?placeholderIfAbsent=true&apiKey=774f1019adb54272942a62c15045ee46"
                  className="object-contain w-[115px] aspect-[8.2]"
                />
              </div>
              <div className="flex gap-4 items-center text-2xl tracking-wider text-white whitespace-nowrap">
                <Image
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e74df6a5975504639d43fd034598abc9eeb1a2ba8382c1815e1f9c1f079667c0?placeholderIfAbsent=true&apiKey=774f1019adb54272942a62c15045ee46"
                  className="object-contain w-[42px] aspect-square"
                />
                <div>GYNESCOPE</div>
              </div>
              <div className="flex gap-4 items-center text-2xl tracking-wider whitespace-nowrap text-white text-opacity-90">
                <Image
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b564034412db969ad72e3fb4ddaf64f81bfdba3b6fc5f13e0576a863b83003fc?placeholderIfAbsent=true&apiKey=774f1019adb54272942a62c15045ee46"
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

export default MyComponent;
