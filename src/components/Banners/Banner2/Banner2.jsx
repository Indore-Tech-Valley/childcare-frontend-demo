import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const images = [
  'https://www.lotushospitals.in/wp-content/uploads/2025/03/Pediatric-neurology-specialist.jpg',
  'https://sa1s3optim.patientpop.com/assets/images/provider/photos/2720518.png',
  'https://www.metropediatrics.com/wp-content/uploads/2024/05/child-doctor-checkup.jpg'
];

const Banner2 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full ">
      {/* Banner Section */}
      <div className="relative h-screen min-h-[736px] overflow-hidden max-h-[786px]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 bg-opacity-70 flex flex-col justify-center gap-4 items-start z-20">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <p className="text-lg mb-2 text-white">Trusted Child Specialist Care</p>
         <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
  Pediatric Care <br /> By Experts <br /> With Compassion
</h1>



            <Link
              to="/#appointment"
              className="text-md mt-6 relative group text-white font-semibold px-6 py-3 rounded shadow overflow-hidden h-[48px] min-w-[180px] inline-flex items-center justify-center no-underline"
              style={{ textDecoration: 'none' }}
            >
              <span className="border border-white rounded-lg absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:border-transparent group-hover:bg-[#001F5B]">
                <span className="transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0">
                  Book Appointment
                </span>
              </span>

              <span className="rounded-lg absolute inset-0 flex items-center justify-center transition-all duration-300 opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100">
                Book Appointment
              </span>
            </Link>

            <a
              href="https://g.co/kgs/UNBZRpR"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="flex flex-col md:flex-row mt-4 gap-2 text-md text-white cursor-pointer">
                <span className="ml-2">Google Rating</span>
                <span>
                  <span className="ml-2 font-bold">5.0</span>
                  <span className="ml-2 text-yellow-400">★★★★★</span>
                </span>
                <span className="ml-2 text-lg">Based on 23k Reviews</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
