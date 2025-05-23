import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
// Update your services data to use React icon components, NOT URLs
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

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      // Wait until DOM has rendered
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100); // Slight delay to ensure layout is painted
    }
  }, [location]);

  return (
    <div className="py-12 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="lg:text-center text-blue-600 font-bold text-md lg:text-lg sm:text-base mb-2 text-left">
          SERVICES
        </h2>
       <h3 className="mb-4 lg:text-center text-left text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a1d42] leading-tight">
  Complete Dental Solutions Tailored to You
</h3>


        <div>
          {services.map((item, index) => (
            <div
              key={index}
              id={item.id}
              className={`flex flex-col lg:flex-row items-start gap-10 lg:pt-24 pt-20 ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="lg:w-1/2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-60 object-cover rounded-2xl shadow-md"
                />
              </div>
              <div className="lg:w-1/2 text-left flex flex-col justify-start">
                <h3 className="text-2xl lg:text-3xl font-semibold text-blue-600 mb-4">
                {/* <h3 className="lg:text-3xl mb-4 font-semibold text-lg text-gray-900"> */}
                  {item.title}
                </h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
