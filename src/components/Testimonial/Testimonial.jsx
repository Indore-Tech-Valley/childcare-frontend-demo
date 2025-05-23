import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Emily R.",
    role: "Parent",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "The child zspecialist here made my little one feel so comfortable and safe. The care and attention to detail were outstanding. Highly recommend for any parent seeking expert pediatric care!",
  },
  {
    name: "Michael B.",
    role: "Parent",
    image: "https://randomuser.me/api/portraits/men/53.jpg",
    quote:
      "From the moment we walked in, the staff treated my child like family. The doctors are patient, kind, and knowledgeable. It’s a relief knowing my child is in such good hands.",
  },
  {
    name: "James T.",
    role: "Parent",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    quote:
      "My son loves coming here! The specialists are fantastic and truly care about children’s health. The appointments are well organized, and the whole experience is positive.",
  },
  {
    name: "Linda M.",
    role: "Parent",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    quote:
      "Professional, caring, and attentive child specialists. I appreciate how the clinic focuses on personalized care for kids. We’ve had nothing but great experiences here.",
  },
];

const Testimonial = () => {
  return (
    <div className="bg-blue-50 py-12 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading Section */}
        <h4 className="text-sm lg:text-center text-blue-600 font-bold text-md lg:text-lg sm:text-base mb-2 text-left">
          TESTIMONIALS
        </h4>

        <h2 className="my-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a1d42] leading-tight text-left lg:text-center">
          What Parents Say About Us
        </h2>

        <p className="max-w-2xl mx-auto text-gray-500 text-base sm:text-lg text-left lg:text-center">
          Thousands of families trust us for expert child healthcare. Read what parents have to say about our compassionate care and specialized pediatric services.
        </p>

        {/* Swiper Section */}
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          className="mt-10"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-12 rounded-2xl  text-left h-full flex flex-col justify-between min-h-[400px] relative">
                <FaQuoteLeft className="text-blue-500 text-2xl mb-4" />
                <p className="text-gray-600 mb-6">&ldquo;{item.quote}&rdquo;</p>
                <div className="flex items-center space-x-4 mt-auto">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full border-2 border-blue-500"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-blue-50 to-white"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
