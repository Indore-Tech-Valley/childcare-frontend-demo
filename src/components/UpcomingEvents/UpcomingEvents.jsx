import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      duration: 0.6,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const upcomingEventsData = [
  {
    id: 1,
    image:
      "https://www.scitechseries.com/public/assets/admin/uploads/logo/primary-health-care_logo_7348.png",
    title: "Pediatric Health Conference 2025",
    description:
      "Join leading child specialists and healthcare professionals to discuss advances in pediatric care and wellness.",
  },
  {
    id: 2,
    image:
      "https://png.pngtree.com/png-vector/20220517/ourmid/pngtree-child-checkup-with-parent-2d-vector-isolated-illustration-png-image_4660245.png",
    title: "Free Child Health Check-Up Camp",
    description:
      "Providing free health screenings and consultations focused on children’s growth, nutrition, and development.",
  },
  {
    id: 3,
    image:
      "https://www.shutterstock.com/image-vector/kids-inside-huge-green-apple-600nw-1409469515.jpg",
    title: "Workshop on Child Nutrition and Wellness",
    description:
      "Interactive sessions with experts sharing the latest knowledge on nutrition, immunization, and healthy child development.",
  },
];


const UpcomingEvents = () => {
  return (
    <motion.section
      className="max-w-7xl mx-auto px-6 py-12 lg:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div className="mb-14" variants={cardVariants}>
        <h2 className="lg:text-center text-blue-600 font-bold text-md lg:text-lg sm:text-base mb-2 text-left">
          UPCOMING EVENTS
        </h2>
        <h3 className="mb-4 lg:text-center text-left text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a1d42] leading-tight">
          Complete Care for Every Smile
        </h3>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {upcomingEventsData.map((event) => (
          <motion.div
            key={event.id}
            className="bg-white rounded-xl shadow hover:shadow-md transition-shadow duration-300"
            variants={cardVariants}
          >
            <img
              src={event.image}
              alt={event.title}
              className="rounded-t-xl w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {event.title}
              </h3>
        <p className="text-gray-500 text-base sm:text-lg">
  {event.description}
</p>

            </div>
          </motion.div>
        ))}
      </div>

      <motion.div className="text-center mt-14" variants={cardVariants}>
        <Link
          to="/"
          className="relative group hidden md:inline-block bg-blue-600 hover:bg-[#10244b] text-white px-6 py-3 rounded-lg font-semibold text-md overflow-hidden min-w-[160px] h-[44px] transition-colors duration-300 ease-in-out"
        >
          <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-full">
            View More
          </span>
          <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 translate-y-full group-hover:translate-y-0">
            View More
          </span>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default UpcomingEvents;
