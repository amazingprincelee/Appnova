import * as React from "react";

function Testimonies() {
  return (
    <div className="flex flex-col items-center mt-20 px-4">
      <div className="flex flex-col items-center max-w-full text-center w-full max-w-4xl">
        <div className="text-3xl font-semibold tracking-widest text-zinc-900 mb-2">
          What Our Users Say About Us
        </div>
        <div className="text-base tracking-wider text-neutral-600 text-opacity-80">
          These testimonials showcase Deximpli&apos;s dedication to driving innovation and excellence in our field.
        </div>
      </div>
      <div className="flex flex-wrap gap-5 mt-10 w-full text-neutral-600">
        {[
          {
            name: "Kingsley Offor",
            title: "MD/CEO KIngsoo Group",
            imageUrl: "/images/icons/icon2.png",
            testimonial: "Transitioning to Appnovia&apos;s EMR system has been a transformative experience for our hospital. The comprehensive features have truly revolutionized the way we manage medical records."
          },
          {
            name: "Prof. Jude Okohue",
            title: "CEO, Gynescope Specialist Hospital",
            imageUrl: "/images/icons/icon3.png",
            testimonial: "Implementing Appnovia&apos;s EMR solutions has been a game-changer for our hospital. The integration of patient records, streamlined workflows, and user-friendly interface have significantly improved patient care."
          },
          {
            name: "Kingsley Offor",
            title: "MD/CEO KIngsoo Group",
            imageUrl: "/images/icons/icon4.png",
            testimonial: "Transitioning to Appnovia&apos;s EMR system has been a transformative experience for our hospital. The comprehensive features have truly revolutionized the way we manage medical records."
          },
          {
            name: "Prof. Jude Okohue",
            title: "CEO, Gynescope Specialist Hospital",
            imageUrl: "/images/icons/icon4.png",
            testimonial: "Implementing Appnovia&apos;s EMR solutions has been a game-changer for our hospital. The integration of patient records, streamlined workflows, and user-friendly interface have significantly improved patient care."
          },
          {
            name: "Kingsley Offor",
            title: "MD/CEO KIngsoo Group",
            imageUrl: "/images/icons/icon2.png",
            testimonial: "Transitioning to Appnovia&apos;s EMR system has been a transformative experience for our hospital. The comprehensive features have truly revolutionized the way we manage medical records."
          },
          {
            name: "Prof. Jude Okohue",
            title: "CEO, Gynescope Specialist Hospital",
            imageUrl: "/images/icons/icon5.png",
            testimonial: "Implementing Appnovia&apos;s EMR solutions has been a game-changer for our hospital. The integration of patient records, streamlined workflows, and user-friendly interface have significantly improved patient care."
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
                  src={testimonial.imageUrl}
                  srcSet={`${testimonial.imageUrl}?width=100 100w, ${testimonial.imageUrl}?width=200 200w, ${testimonial.imageUrl}?width=400 400w, ${testimonial.imageUrl}?width=800 800w`}
                  className="object-contain w-12 h-12 rounded-full"
                  alt={`${testimonial.name} photo`}
                  width={48}
                  height={48}
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
