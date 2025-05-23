import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

import { motion } from "framer-motion";
import { PiStethoscopeLight, PiSyringeLight, PiSmileyLight, PiChartLineUpLight, PiHeartbeatLight } from "react-icons/pi";
import { CiApple } from "react-icons/ci";

// Update your services data to use React icon components, NOT URLs
const services = [
  {
    id: "child-general-checkup",
    title: "Child General Checkup",
    desc: "Routine physical exams to monitor growth, immunity, and development in children, ensuring a healthy foundation.",
    image:
      "https://ik.imagekit.io/d7t01fhx21/Ovum_Hospitals/Blogs/The-Importance-of-Regular-Child-Check-Ups.jpg?updatedAt=1705569204249",
    icon: PiStethoscopeLight,
  },
  {
    id: "vaccination-services",
    title: "Vaccination Services",
    desc: "Timely immunizations to protect children from common illnesses and support lifelong health from early years.",
    image:
      "https://www.vaccinehouse.com/img/vaccine-house/new-images/Child.jpg",
    icon: PiSyringeLight,
  },
  {
    id: "child-behavioral-support",
    title: "Child Behavioral Support",
    desc: "Compassionate guidance for managing emotions, building healthy habits, and supporting mental well-being in kids.",
    image: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/12/Child_Therapy_1296x728-header-1296x728.jpg?w=1155&h=1528",
    icon: PiSmileyLight,
  },
  {
    id: "growth-development-tracking",
    title: "Growth & Development Tracking",
    desc: "Monitoring milestones in height, weight, and cognitive abilities to ensure age-appropriate development.",
    image:
      "http://thomsonmedical.com/_next/image?url=https%3A%2F%2Fimages.contentstack.io%2Fv3%2Fassets%2Fblt5f400315f9e4f0b3%2Fblt74525f5e020517ae%2F6756b7956080e15995b0b172%2FBaby_Growth_Blog_Banner_1440_x_810.png%3Fbranch%3Dprod&w=3840&q=75",
    icon: PiChartLineUpLight,
  },
  {
    id: "emergency-pediatric-care",
    title: "Emergency Pediatric Care",
    desc: "Rapid response care for childhood injuries, fevers, or allergic reactions—available when your child needs it most.",
    image:
      "https://elite24er.com/wp-content/uploads/2025/02/Pediatric-Care-Emergency-Care-For-Kids-League-City-TX-small.jpg",
    icon: PiHeartbeatLight,
  },
  {
    id: "child-nutrition-guidance",
    title: "Child Nutrition Guidance",
    desc: "Personalized advice on balanced diets to support immunity, energy, and proper physical and mental development.",
    image:
      "https://www.drnehaagarwal.com/uploaded_files/treatment/thumb/headerImage1_3.jpg",
    icon: CiApple,
  },
];


const OurServices = () => {
  const navigate = useNavigate();

  const handleReadMoreClick = (id) => {
    navigate(`/services#${id}`);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <section className="bg-blue-50 lg:py-24 py-12">
      <div className="text-center mb-14 px-6 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="lg:text-center text-blue-600 font-bold text-md lg:text-lg sm:text-base mb-2 text-left"
        >
          OUR SERVICES
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-4 lg:text-center text-left text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a1d42] leading-tight"
        >
          Comprehensive Care for Your Child’s Health
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-gray-500 max-w-xl lg:mx-auto text-lg lg:text-center text-left"
        >
          At @childcareclinic, we provide expert child health services with a gentle,
          personalized approach—located at 789 Caring St, Kids Town, TX. Contact us at
          contact@childcareclinic for appointments.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
        {services.slice(0, 4).map((service) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.id}
              className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition duration-300 flex flex-col h-[420px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="flex-grow">
                <Icon size={36} className="text-blue-600" />
                <motion.h4
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="font-semibold text-xl mt-6 mb-3"
                >
                  {service.title}
                </motion.h4>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="leading-relaxed text-gray-500 text-base sm:text-lg"
                >
                  {service.desc}
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1 }}
                viewport={{ once: true }}
                className="mt-auto pt-6"
              >
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleReadMoreClick(service.id);
                  }}
                  className="group relative flex items-center border border-slate-300 rounded-full bg-white text-blue-900 overflow-hidden transition-all duration-500 ease-in-out pl-4 pr-4 h-12 w-12 hover:w-40"
                >
                  <FaPlus className="text-blue-900 z-10" />
                  <span className="absolute left-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out whitespace-nowrap font-semibold">
                    Read more
                  </span>
                </button>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      <div className="text-center mt-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            to="/services"
            className="relative group hidden md:inline-block bg-blue-600 hover:bg-[#10244b] text-white px-6 py-3 rounded-lg font-semibold text-md overflow-hidden min-w-[160px] h-[44px] transition-colors duration-300 ease-in-out"
          >
            <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-full">
              View All Services
            </span>
            <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 translate-y-full group-hover:translate-y-0">
              View All Services
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;
