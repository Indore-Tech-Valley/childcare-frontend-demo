import React from "react";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiInstagram,
  FiFacebook,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";
import { IoLogoInstagram, IoLocationOutline, IoMailOutline, IoCallOutline } from "react-icons/io5";

import { motion } from "framer-motion";

const contactItems = [
  {
    id: 1,
    icon: IoCallOutline,
    label: "Call Our Child Specialist",
    value: "(+123) 456 7890",
    link: "tel:+1234567890",
  },
  {
    id: 2,
    icon: IoMailOutline,
    label: "Email",
    value: "contact@childcareclinic.com",
    link: "mailto:contact@childcareclinic.com",
  },
  {
    id: 3,
    icon: IoLocationOutline,
    label: "Clinic Address",
    value: "789 Caring St, Kids Town, TX",
    link: "https://maps.app.goo.gl/qmG1HRLptUZtWfeC8",
  },
  {
    id: 4,
    icon: IoLogoInstagram,
    label: "Instagram",
    value: "@childcareclinic",
    link: "https://instagram.com/childcareclinic",
  },
];

const ContactUs = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Column */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a1d42] leading-tight">
            Get In Touch
          </h2>
          <p className="text-gray-500 text-base sm:text-lg">
            At Child Care Clinic, your child’s health and happiness are our top priorities. Contact us for consultations, appointments, or any questions about child healthcare.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
            {contactItems.map(({ id, icon: Icon, label, value, link }, index) => (
              <motion.div
                key={id}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="mb-2">
                  <Icon className="text-blue-600 text-4xl" />
                </div>
                <h5 className="text-lg font-semibold text-[#0a1d42]">{label}</h5>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-md inline-block hover:text-blue-600 transition text-gray-500 mt-1"
                >
                  {value}
                </a>
              </motion.div>
            ))}
          </div>

          <div className="mt-10">
            <p className="text-gray-600 font-semibold mb-2">Follow Us</p>
            <div className="flex space-x-8 text-xl text-gray-600">
              <a href="https://facebook.com/childcareclinic" target="_blank" rel="noopener noreferrer">
                <FiFacebook />
              </a>
              <a href="https://twitter.com/childcareclinic" target="_blank" rel="noopener noreferrer">
                <FiTwitter />
              </a>
              <a href="https://youtube.com/childcareclinic" target="_blank" rel="noopener noreferrer">
                <FiYoutube />
              </a>
              <a href="https://instagram.com/childcareclinic" target="_blank" rel="noopener noreferrer">
                <FiInstagram />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <div className="bg-[#f3f6fd] p-8 rounded-xl shadow">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block mb-1 text-gray-700 font-medium">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 text-gray-700 font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block mb-1 text-gray-700 font-medium">
                Phone
              </label>
              <input
                id="phone"
                type="text"
                placeholder="Phone"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 text-gray-700 font-medium">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Message"
                rows="5"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="relative group hidden md:inline-block bg-blue-600 hover:bg-[#10244b] text-white px-6 py-3 rounded-lg font-semibold text-md overflow-hidden min-w-[160px] h-[44px] transition-colors duration-300 ease-in-out"
            >
              {/* Default Text */}
              <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-full">
                Send Query
              </span>

              {/* Hover Text */}
              <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                Send Query
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
