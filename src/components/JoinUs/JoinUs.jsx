import React from "react";
import { FaRegEnvelopeOpen } from "react-icons/fa";

const JoinUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 font-sans">
      <div className="flex flex-col md:flex-row items-stretch gap-10">
        
        {/* Left Section - Form */}
        <div className="md:w-1/2 flex flex-col justify-center bg-white p-8 rounded-2xl shadow-lg">
          <div className="flex justify-center md:justify-start items-center gap-2 mb-4">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[#0a1d42]">
              Join ChildCareClinic
            </h2>
          </div>
          <p className="text-gray-500 mb-6 text-base sm:text-lg">
            Be the first to know about upcoming pediatric wellness camps and child care events.
          </p>
          <form className="space-y-4">
            <div>
              <label className="block mb-1 text-gray-700 font-medium" htmlFor="name">
                Parent/Guardian Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your Full Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700 font-medium" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@childcareclinic.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-[#10244b] transition duration-200"
            >
              Notify Me
            </button>
          </form>
        </div>

        {/* Right Section - Image */}
        <div className="md:w-1/2 rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://t3plus.in/wp-content/uploads/2024/01/dr.jpg"
            alt="Child Care Event"
            className="w-full h-full object-cover"
            style={{ minHeight: '100%' }}
          />
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
