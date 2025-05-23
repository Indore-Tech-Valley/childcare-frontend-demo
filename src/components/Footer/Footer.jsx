// Updated Footer Component for ChildCare Clinic

import { Link, useNavigate } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import logo from '../Navbar/Logo/ChildCareClinic_White.png';


import {
  PiStethoscopeLight,
  PiSyringeLight,
  PiSmileyLight,
  PiChartLineUpLight,
  PiHeartbeatLight,
} from "react-icons/pi";
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

const Footer = () => {
  const navigate = useNavigate();

  const handleLinkClick = (id) => {
    navigate("/services#" + id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-[#0c1d36] text-white py-12">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-10 px-6">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-auto h-14 text-white mb-5" />
          </div>
          <p className="text-gray-300 text-[15px] leading-relaxed">
           "At ChildCareClinic, we’re dedicated to providing expert, personalized healthcare designed exclusively for children. Our skilled team uses the latest medical advancements to ensure gentle, effective treatments that support every child’s growth and well-being."
          </p>
          <div className="flex items-center gap-4 mt-6 text-xl text-gray-400">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaWhatsapp className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaYoutube className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Company and Services in single row */}
        <div className="col-span-1 md:col-span-2">
          <div className="flex flex-row flex-wrap gap-10">
            {/* Company Links */}
            <div className="min-w-[150px]">
              <h4 className="text-white font-semibold text-xl mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300 text-[16px]">
                <li>
                  <Link to="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-white">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link to="about#dentists" className="hover:text-white">
                    Pediatricians
                  </Link>
                </li>
                <li>
                  <Link to="/events" className="hover:text-white">
                    Events
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Our Services */}
            <div className="min-w-[150px]">
              <h4 className="text-white font-semibold text-xl mb-4">
                Our Services
              </h4>
              <ul className="space-y-2 text-gray-300 text-[16px]">
                {services.map((e) => (
                  <li key={e.id}>
                    <button
                      onClick={() => handleLinkClick(e.id)}
                      className="hover:text-white"
                    >
                      {e.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold text-xl mb-4">Contact Us</h4>
          <ul className="space-y-4 text-gray-300 text-[16px]">
            <li>
              <div className="flex items-start gap-2">
                <a
                  href="https://maps.app.goo.gl/qmG1HRLptUZtWfeC8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 hover:text-blue-300 transition-colors duration-200"
                >
                  <FaMapMarkerAlt className="text-blue-400 mt-1" />
                  <div>
                    <p className="font-semibold text-white">Clinic Location</p>
                    789 Caring St, Kids Town, TX
                  </div>
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-start gap-2">
                <FaPhoneAlt className="text-blue-400 mt-1" />
                <div>
                  <p className="font-semibold text-white">Call Us</p>
                  +1 123 456 789
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-start gap-2">
                <FaEnvelope className="text-blue-400 mt-1" />
                <div>
                  <p className="font-semibold text-white">Send a Message</p>
                  contact@childcareclinic
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t max-w-7xl mx-auto border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between lg:items-center text-[15px] text-gray-400 px-6">
        <p className="text-left md:text-center">
          Copyright 2025 – ChildCareClinic by Indore Tech Valley
        </p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <Link to="/termsConditions" className="hover:text-white">
            Terms & Conditions
          </Link>
          <Link to="/privacy" className="hover:text-white">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
