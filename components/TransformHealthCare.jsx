import * as React from "react";

function TransformHealthCare() {
  return (
    <div className="flex flex-col md:flex-row gap-10 justify-center items-start mt-20 px-6 md:px-12">
      {/* Text Section */}
      <div className="flex flex-col min-w-[240px] w-full max-w-[489px]">
        <div className="flex flex-col w-full">
          <div className="text-2xl md:text-3xl font-semibold text-neutral-900">
            <span className="capitalize">Transform</span> Your Healthcare
            experience with Our Smart <span className="uppercase">EMR</span>{" "}
            Solutions
          </div>
          <div className="mt-4 text-base md:text-lg tracking-wider text-neutral-900 text-opacity-80">
            Have full control of your hospital and manage all your patients
            and staff records and activities with our Electronic Management
            System (EMR)
          </div>
          <div className="flex flex-col mt-8 space-y-5 text-base md:text-lg tracking-wider text-neutral-900 text-opacity-80">
            <div className="flex items-start gap-3">
              <img
                loading="lazy"
                src="/images/icons/check.svg"
                className="object-contain w-6 aspect-square"
              />
              <div className="flex-1">
                Enhance data accuracy, and improve clinical outcomes with our
                advanced EMR software
              </div>
            </div>
            <div className="flex items-start gap-3">
              <img
                loading="lazy"
                src="/images/icons/check.svg"
                className="object-contain w-6 aspect-square"
              />
              <div className="flex-1">
                Experience real-time updates, and comprehensive patient
                management all in one platform
              </div>
            </div>
          </div>
        </div>
        <button className="mt-10 bg-slate-950 text-white text-base md:text-lg font-semibold tracking-wide rounded px-6 py-3">
          Learn More
        </button>
      </div>

      {/* Image and Info Section */}
      <div className="flex flex-col w-full max-w-[658px] px-6 md:px-14 pb-14 rounded-none bg-white shadow-[-59px_59px_118px_rgba(245,245,245,0.2)]">
        <div className="flex flex-col pt-9">
          <div className="flex flex-wrap gap-7 justify-center items-center mx-6">
            <div className="flex gap-3 items-center">
              <div className="w-5 h-5 bg-red-600 rounded-full" />
              <div className="w-5 h-5 bg-yellow-400 rounded-full" />
              <div className="w-5 h-5 bg-lime-400 rounded-full" />
            </div>
            <div className="bg-neutral-900 bg-opacity-10 h-[23px] rounded-[40px] flex-1" />
            <div className="bg-slate-950 h-[23px] rounded-[40px] w-24" />
          </div>
          <div className="mt-5 h-px border border-neutral-900 border-opacity-10" />
          <div className="flex flex-col gap-6 mx-6 md:mx-0">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col w-full md:w-3/12">
                <div className="bg-slate-950 p-6 rounded-xl flex flex-col gap-4">
                  <div className="flex gap-2 items-center">
                    <div className="w-4 h-4 rounded-full bg-white bg-opacity-50" />
                    <div className="h-4 rounded-md bg-white bg-opacity-50 w-[102px]" />
                  </div>
                  <div className="flex gap-2 items-center mt-4">
                    <div className="w-4 h-4 rounded-full bg-white bg-opacity-50" />
                    <div className="h-4 rounded-md bg-white bg-opacity-50 w-[102px]" />
                  </div>
                  <div className="flex gap-2 items-center mt-4">
                    <div className="w-4 h-4 rounded-full bg-white bg-opacity-50" />
                    <div className="h-4 rounded-md bg-white bg-opacity-50 w-[102px]" />
                  </div>
                  <img
                    loading="lazy"
                    src="/images/chart.svg"
                    className="object-contain mt-6 w-full rounded-3xl shadow-[-5px_5px_10px_rgba(230,230,230,0.2)]"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full md:w-9/12">
                <div className="flex flex-col mt-5 pl-6">
                  <div className="flex flex-col text-neutral-900">
                    <div className="flex flex-wrap gap-4 text-sm tracking-wide">
                      {["Patients", "Doctors", "Nurses"].map((item) => (
                        <div key={item} className="flex flex-col gap-2 p-2.5 border border-dashed border-neutral-900 border-opacity-10 rounded-xl w-[127px]">
                          <div>{item}</div>
                          <div className="h-4 rounded-md bg-neutral-900 bg-opacity-10 w-[110px]" />
                          <div className="flex gap-10 justify-between items-center mt-2 font-semibold">
                            <div>1234</div>
                            <img
                              loading="lazy"
                              src="/images/icons/arrow.svg"
                              className="object-contain w-6 aspect-square"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-3 items-start mt-5 text-xs text-center">
                      <div className="flex gap-1.5 items-center">
                        <div className="w-2 h-2 rounded-full bg-slate-950" />
                        <div>Hospitalized</div>
                      </div>
                      <div className="flex gap-1.5 items-center">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                        <div>Recovered</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {[87, 120, 97, 102, 114, 87, 132, 47, 168, 142, 123, 110, 153, 24, 73, 123, 139, 92, 61].map((height, index) => (
                      <div key={index} className="flex flex-col w-2 rounded-2xl">
                        <div className={`flex rounded-2xl ${index % 2 === 0 ? 'bg-slate-950' : 'bg-cyan-500'} h-[${height}px]`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransformHealthCare;
