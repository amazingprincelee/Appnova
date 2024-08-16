import * as React from "react";

function Testimonies() {
  return (
    <div className="flex flex-col items-center mt-20 px-4">
      <div className="flex flex-col items-center max-w-full text-center w-full max-w-4xl">
        <div className="text-3xl font-semibold tracking-widest text-zinc-900 mb-2">
          What Our Users Say About Us
        </div>
        <div className="text-base tracking-wider text-neutral-600 text-opacity-80">
          These testimonials showcase Deximpli's dedication to driving innovation and excellence in our field.
        </div>
      </div>
      <div className="flex flex-wrap gap-5 mt-10 w-full text-neutral-600">
        {[
          {
            name: "Kingsley Offor",
            title: "MD/CEO KIngsoo Group",
            imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/053f8f3dc7bed554870bc40ccaf987eabb85ec3ad4f190d17bb8a1082110d494?placeholderIfAbsent=true&apiKey=774f1019adb54272942a62c15045ee46",
            testimonial: "Transitioning to Appnovia's EMR system has been a transformative experience for our hospital. The comprehensive features have truly revolutionized the way we manage medical records."
          },
          {
            name: "Prof. Jude Okohue",
            title: "CEO, Gynescope Specialist Hospital",
            imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/71211b6b076808a747c59da4e8db24b057de71ce3c97b3b2ec048c4fe7dd44fc?placeholderIfAbsent=true&apiKey=774f1019adb54272942a62c15045ee46",
            testimonial: "Implementing Appnovia's EMR solutions has been a game-changer for our hospital. The integration of patient records, streamlined workflows, and user-friendly interface have significantly improved patient care."
          },
          {
            name: "Kingsley Offor",
            title: "MD/CEO KIngsoo Group",
            imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/a377991b0826d83057c27d132f950db23145e57571abdaf42bffc72eece5bfa8?placeholderIfAbsent=true&apiKey=774f1019adb54272942a62c15045ee46",
            testimonial: "Transitioning to Appnovia's EMR system has been a transformative experience for our hospital. The comprehensive features have truly revolutionized the way we manage medical records."
          },
          {
            name: "Prof. Jude Okohue",
            title: "CEO, Gynescope Specialist Hospital",
            imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/1d5a80dc676c44eb26c4b3975fe7b2860482bd12d4880a57203326b432bcbb9f?placeholderIfAbsent=true&apiKey=774f1019adb54272942a62c15045ee46",
            testimonial: "Implementing Appnovia's EMR solutions has been a game-changer for our hospital. The integration of patient records, streamlined workflows, and user-friendly interface have significantly improved patient care."
          },
          {
            name: "Kingsley Offor",
            title: "MD/CEO KIngsoo Group",
            imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca046a62429c37a5d23bb1958ac42ad182f0ee37fd489e5948612e413e1fc012?placeholderIfAbsent=true&apiKey=774f1019adb54272942a62c15045ee46",
            testimonial: "Transitioning to Appnovia's EMR system has been a transformative experience for our hospital. The comprehensive features have truly revolutionized the way we manage medical records."
          },
          {
            name: "Prof. Jude Okohue",
            title: "CEO, Gynescope Specialist Hospital",
            imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c2f788dc5182c808561afdbb8d0a315f235bfee8149d40ee1676ea55f7bb3846?placeholderIfAbsent=true&apiKey=774f1019adb54272942a62c15045ee46",
            testimonial: "Implementing Appnovia's EMR solutions has been a game-changer for our hospital. The integration of patient records, streamlined workflows, and user-friendly interface have significantly improved patient care."
          }
        ].map((testimonial, index) => (
          <div
            key={index}
            className="flex overflow-hidden flex-col justify-center px-7 py-5 bg-white rounded-3xl shadow-[-5px_5px_10px_rgba(230,230,230,0.2)] min-w-[240px] w-full max-w-sm"
          >
            <div className="flex flex-col justify-center w-full">
              <div className="flex gap-3 items-center">
                <img
                  loading="lazy"
                  srcSet={`${testimonial.imageUrl}?width=100 100w, ${testimonial.imageUrl}?width=200 200w, ${testimonial.imageUrl}?width=400 400w, ${testimonial.imageUrl}?width=800 800w`}
                  className="object-contain w-12 h-12 rounded-full"
                  alt={`${testimonial.name} photo`}
                />
                <div className="flex flex-col">
                  <div className="text-xl font-semibold">{testimonial.name}</div>
                  <div className="text-base text-neutral-500">{testimonial.title}</div>
                </div>
              </div>
              <div className="mt-5 text-base tracking-wide leading-6">
                {testimonial.testimonial}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonies;
