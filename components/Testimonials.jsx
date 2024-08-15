import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      name: 'Prof. Jude Okohue',
      title: 'CEO, Gynescope Specialist Hospital',
      text: 'Implementing Appnova\'s EMR solutions has been a game-changer for our hospital. The integration of patient records, streamlined workflows, and user-friendly interface have significantly improved patient care.',
      image: '/path-to-image1.jpg',
    },
    {
      name: 'Kingsley Offor',
      title: 'MD/CEO Kingsoo Group',
      text: 'Transitioning to Appnova\'s EMR system has been a transformative experience for our hospital. The comprehensive features have truly revolutionized the way we manage medical records.',
      image: '/path-to-image2.jpg',
    },
    {
      name: 'Prof. Jude Okohue',
      title: 'CEO, Gynescope Specialist Hospital',
      text: 'Implementing Appnova\'s EMR solutions has been a game-changer for our hospital. The integration of patient records, streamlined workflows, and user-friendly interface have significantly improved patient care.',
      image: '/path-to-image1.jpg',
    },
    {
      name: 'Kingsley Offor',
      title: 'MD/CEO Kingsoo Group',
      text: 'Transitioning to Appnova\'s EMR system has been a transformative experience for our hospital. The comprehensive features have truly revolutionized the way we manage medical records.',
      image: '/path-to-image2.jpg',
    },
    {
      name: 'Prof. Jude Okohue',
      title: 'CEO, Gynescope Specialist Hospital',
      text: 'Implementing Appnova\'s EMR solutions has been a game-changer for our hospital. The integration of patient records, streamlined workflows, and user-friendly interface have significantly improved patient care.',
      image: '/path-to-image1.jpg',
    },
    {
      name: 'Kingsley Offor',
      title: 'MD/CEO Kingsoo Group',
      text: 'Transitioning to Appnova\'s EMR system has been a transformative experience for our hospital. The comprehensive features have truly revolutionized the way we manage medical records.',
      image: '/path-to-image2.jpg',
    },
   
  ];

  return (
    <div className="container mx-auto px-4 py-12">
     
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">What Our Users Say About Us</h2>
        <p className="text-gray-600">These testimonials showcase Deximpl's dedication to driving</p>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center mb-4">
              <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                <p className="text-gray-500">{testimonial.title}</p>
              </div>
            </div>
            <p className="text-gray-600">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
