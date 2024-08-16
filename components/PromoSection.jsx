import React from 'react';
import Image from 'next/image';

function PromoSection() {
  return (
    <div className="bg-[#e0f7f7] py-12 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
        
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Experience Advance EMR Through Our Lens
          </h2>
          <p className="text-gray-600 mb-6">
            Get a closer look at how our EMR solution transforms patient care and streamlines medical workflows in real-time for better healthcare outcomes.
          </p>
          <button className="bg-[#070527] text-white font-semibold py-3 px-6 rounded-md">
            Learn More
          </button>
        </div>

        <div className="lg:w-1/2">
          <Image
            src="/images/vid-image.png" 
            alt="EMR Promotion"
            className="rounded-lg shadow-lg"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}

export default PromoSection;
