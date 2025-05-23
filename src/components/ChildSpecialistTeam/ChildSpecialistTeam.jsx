import React, { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const childSpecialists = [
  {
    name: "Dr. Ananya Mehta",
    title: "Child Psychologist",
    image: "https://madebydesignesia.com/themes/dentia/images/team/1.webp",
    quote:
      "Dr. Ananya brings empathy and deep insight to every child she works with. A truly transformative professional.",
  },
  {
    name: "Dr. Riya Malhotra",
    title: "Pediatrician",
    image: "https://madebydesignesia.com/themes/dentia/images/team/2.webp",
    quote:
      "With over a decade of pediatric care, Dr. Riya ensures every child is treated like her own. Highly recommended.",
  },
  {
    name: "Dr. Karan Desai",
    title: "Speech Therapist",
    image: "https://madebydesignesia.com/themes/dentia/images/team/3.webp",
    quote:
      "Dr. Karan's dedication to helping children communicate better is unmatched. He's made a real difference.",
  },
  {
    name: "Dr. Arjun Verma",
    title: "Child Nutrition Expert",
    image: "https://madebydesignesia.com/themes/dentia/images/team/4.webp",
    quote:
      "Dr. Arjun is the go-to for any parent concerned about nutrition. Thoughtful, clear, and deeply knowledgeable.",
  },
];

const variants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 300 : -300,
  }),
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -300 : 300,
  }),
};

const ChildSpecialistTeam = () => {
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setCurrentIndex(([prevIndex]) => [
        (prevIndex + 1) % childSpecialists.length,
        1,
      ]);
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resetAutoSlide = () => {
    stopAutoSlide();
    startAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const handleNext = () => {
    setCurrentIndex(([prevIndex]) => [
      (prevIndex + 1) % childSpecialists.length,
      1,
    ]);
    resetAutoSlide();
  };

  const handlePrev = () => {
    setCurrentIndex(([prevIndex]) => [
      prevIndex === 0 ? childSpecialists.length - 1 : prevIndex - 1,
      -1,
    ]);
    resetAutoSlide();
  };

  const doc = childSpecialists[currentIndex];

  return (
    <section className="bg-[#f3f6fd] py-12 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-12">
          <p className="text-sm text-blue-600 font-bold text-md lg:text-lg sm:text-base mb-2 text-left lg:text-center">
            OUR PEDIATRIC EXPERTS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a1d42] leading-tight text-left lg:text-center">
            Trusted Care for Every Stage of Childhood
          </h2>
        </div>

        {/* Animated Card Container */}
        <div
          className="relative overflow-hidden"
          style={{ maxWidth: "100%" }}
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
        >
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: "easeInOut" }}
              style={{ display: "flex", width: "100%" }}
            >
              {/* Card */}
              <div className="flex flex-col lg:flex-row items-center bg-white rounded-3xl shadow-md overflow-visible w-full mb-10 px-4 sm:px-6 lg:px-12 py-8 sm:py-10">
                {/* Image Left */}
                <div className="w-full lg:w-[35%] flex justify-center items-center py-6 sm:py-8">
                  <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg flex items-center justify-center">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                {/* Text Right */}
                <div className="w-full lg:w-[65%] flex flex-col justify-center text-left mt-6 lg:mt-0 px-2 sm:px-4">
                  <p className="text-base sm:text-lg md:text-xl text-gray-800 font-medium leading-relaxed mb-4 sm:mb-6">
                    “{doc.quote}”
                  </p>
                  <p className="text-base sm:text-lg font-semibold text-blue-900">
                    — {doc.name}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">{doc.title}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex justify-end mt-1 space-x-4">
          <button
            onClick={handlePrev}
            className="bg-blue-100 hover:bg-blue-200 p-3 rounded-full shadow"
          >
            <ChevronLeft className="text-blue-600 w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="bg-blue-100 hover:bg-blue-200 p-3 rounded-full shadow"
          >
            <ChevronRight className="text-blue-600 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ChildSpecialistTeam;
