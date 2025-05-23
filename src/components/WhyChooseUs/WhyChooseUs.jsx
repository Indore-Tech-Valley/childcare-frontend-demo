import React from "react";
import { motion } from "framer-motion";
import { FiUserCheck, FiCpu, FiSliders, FiUsers } from "react-icons/fi";

const images = [
  "https://media.istockphoto.com/id/489362313/photo/that-tickles.jpg?s=612x612&w=0&k=20&c=IUHA_ml6EeoXaWULyIDTGV592sk5wwfUwXh6fO8nAFo=",
  "https://www.shutterstock.com/image-photo/doctor-examining-little-girl-by-600nw-617822795.jpg",
  "http://media.istockphoto.com/id/1388254153/photo/shot-of-a-baby-sitting-on-her-mothers-lap-while-being-examined-by-a-doctor.jpg?s=612x612&w=0&k=20&c=PBzQWrBVp8pIyYBH_ds8Bu8y4Y4j2jdL3Z2n8L1W0v4="
];

const features = [
  {
    id: 1,
    icon: FiUserCheck,
    title: "Experienced Child Specialists",
    description: "Compassionate care backed by years of pediatric expertise.",
  },
  {
    id: 2,
    icon: FiCpu,
    title: "Advanced Pediatric Technology",
    description: "Modern diagnostic tools designed specifically for children’s health.",
  },
  {
    id: 3,
    icon: FiSliders,
    title: "Personalized Child Care Plans",
    description: "Tailored treatments addressing your child’s unique growth and development needs.",
  },
  {
    id: 4,
    icon: FiUsers,
    title: "Family-Centered Approach",
    description: "Creating a warm, welcoming environment for children and their families.",
  },
];


const WhyChooseUs = () => {
  return (
    <section className="bg-white py-12 px lg:py-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">
        {/* Text Section */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <h4 className="text-blue-600 font-bold text-md lg:text-lg sm:text-base mb-2 text-left">
  WHY CHOOSE OUR CHILD SPECIALISTS
</h4>

<motion.h2
  className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a1d42] leading-tight"
  initial={{ y: 40, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ once: true }}
>
  Dedicated Care for Growing Smiles
</motion.h2>

<motion.p
  className="text-gray-500 text-base sm:text-lg"
  initial={{ y: 40, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6, delay: 0.4 }}
  viewport={{ once: true }}
>
  Our child specialists combine expert knowledge with gentle care to support your child’s health and happiness every step of the way.
</motion.p>

          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t pt-6"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {features.map(({ id, icon: Icon, title, description }) => (
              <div key={id}>
                <div className="flex items-center mb-4">
                  <Icon className="text-blue-600 text-4xl" />
                </div>
                <h5 className="font-semibold text-lg text-gray-900">{title}</h5>
                <p className="text-gray-500 mt-1">{description}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Images Section */}
        <motion.div
          className="w-full lg:w-1/2 flex items-stretch"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full h-full">
            <div className="flex flex-col gap-4 h-full">
              <motion.img
                src={images[0]}
                alt="Dental care 1"
                className="rounded-lg shadow-md object-cover w-2/3 h-2/7 ml-auto"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              />
              <motion.img
                src={images[1]}
                alt="Dental care 2"
                className="rounded-lg shadow-md object-cover w-full h-full"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
              />
            </div>
            <motion.div
              className="h-5/6 my-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <img
                src={images[2]}
                alt="Dental care 3"
                className="rounded-lg shadow-md object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
