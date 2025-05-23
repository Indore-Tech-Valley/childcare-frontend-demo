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

const pastEventsData = [
  {
    id: 1,
    image:
      "https://www.scitechseries.com/public/assets/admin/uploads/sliders/primary-health-care-9245.jpg",
    title: "Child Wellness Workshop",
    description:
      "Interactive sessions on promoting healthy habits and wellness routines for children of all ages.",
  },
  {
    id: 2,
    image:
      "https://content3.jdmagicbox.com/v2/comp/gurgaon/c2/011pxx11.xx11.150626104301.x8c2/catalogue/desire-society-gurgaon-sector-54-gurgaon-ngos-ye6nui.jpg",
    title: "Nutrition & Growth Counseling",
    description:
      "Expert guidance for parents on balanced nutrition and supporting your child’s healthy development.",
  },
  {
    id: 3,
    image:
      "https://gulbargadiocese.org/wp-content/uploads/2021/05/IMG-20191031-WA0009-min-1.jpg",
    title: "Pediatric Health Camp",
    description:
      "Free health screenings and check-ups to monitor and improve children’s health in a caring environment.",
  },
];

const PastEvents = () => {
  return (
    <motion.div
      className="w-full bg-blue-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <section className="max-w-7xl mx-auto px-6 py-12 lg:py-24">
        <motion.div className="mb-14" variants={cardVariants}>
          <h2 className="lg:text-center text-blue-600 font-bold text-md lg:text-lg sm:text-base mb-2 text-left">
            PAST EVENTS
          </h2>
          <h3 className="mb-4 lg:text-center text-left text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a1d42] leading-tight">
            Dedicated Care for Your Child’s Health
          </h3>
          <p className="text-gray-600 max-w-xl lg:mx-auto text-lg lg:text-center text-left mb-6">
            Located at 789 Caring St, Kids Town, TX. Contact us at +1 123 456 789 or email contact@childcareclinic for more information.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastEventsData.map((event) => (
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
      </section>
    </motion.div>
  );
};

export default PastEvents;
