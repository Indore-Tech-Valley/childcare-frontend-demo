import React from 'react';
import img from '../Banner1/Banner1Images/Doc.png'
import { Link } from 'react-router-dom';


const Banner1 = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 pb-2 flex flex-col lg:flex-row justify-between w-full gap-5 lg:py-24 py-12">

        {/* Left Text Content */}
        <div className="lg:w-[65%] space-y-4 lg:text-left">
          <h4 className="text-blue-600 font-bold text-md lg:text-lg sm:text-base mb-2 text-left">
            WELCOME TO ChildCareClinic 
          </h4>
          <h1 className=" text-3xl sm:text-4xl lg:text-5xl  font-bold tracking-tight ext-3xl  text-[#0a1d42] leading-tight">
            Expert <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-500 leading-tight">Child Specialist Care</span>
          </h1>
          <p className="lg:pt-4 max-w-lg lg:mx-0 text-gray-500 text-base sm:text-lg">
            We provide compassionate and comprehensive care tailored to children’s unique needs. From routine wellness to special treatments, our team ensures a safe and nurturing experience for your child’s health and comfort.
          </p>

          <div className="flex flex-col sm:flex-row lg:items-center justify-start space-y-4 sm:space-y-0 sm:space-x-6 pt-6">
            <Link
  to="/#appointment"
  className="relative group block w-full sm:w-auto text-center bg-blue-600 hover:bg-[#10244b] text-white px-6 py-3 rounded-lg font-semibold text-md overflow-hidden min-w-[160px] h-[44px] transition-colors duration-300 ease-in-out"
>
  <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-full">
    Book a Visit
  </span>
  <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 translate-y-full group-hover:translate-y-0">
    Book a Visit
  </span>
</Link>

            <div className="flex items-center space-x-3">
              <div className="flex -space-x-2">
                {/* Sample Avatars */}
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhqKlHgZXQswTLt1EeVYwyxpdT5ZhSt1AtJw&s" alt="Avatar 1" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRumwhtKzTjA7zibU2h-StvedbJQhB2gFr9zw&s" alt="Avatar 2" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                <img src="https://mypresents.eu/wp-content/uploads/2018/08/u%C5%9Bmiech-dziecka-810x608.jpg" alt="Avatar 3" className="w-12 h-12 rounded-full border-2 border-white  object-cover" />
              </div>
              <div>
                <p className="font-semibold text-lg">10k+</p>
                <p className="text-sm text-gray-500">happy little smiles</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-[45%] flex justify-center mb-12 lg:mb-0">
          <img
            src={img}
            alt="Child Specialist Illustration"
            className="w-[400px] md:w-[520px] lg:w-[620px] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner1;
