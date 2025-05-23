import React from 'react';
import { motion } from 'framer-motion';
import { SlCalender } from 'react-icons/sl';
import { CiFaceSmile } from 'react-icons/ci';
import { PiHandHeartLight, PiClockCountdown } from "react-icons/pi";

const steps = [
  {
    id: 1,
    icon: <SlCalender className="text-white" size={44} />,
    title: 'Step 1',
    description: 'Schedule an appointment with @childcareclinic.',
  },
  {
    id: 2,
    icon: <PiHandHeartLight className="text-white" size={44} />,
    title: 'Step 2',
    description: 'Visit us at 789 Caring St, Kids Town, TX for a warm welcome.',
  },
  {
    id: 3,
    icon: <PiClockCountdown className="text-white" size={44} />,
    title: 'Step 3',
    description: 'Receive expert, personalized care for your child’s health.',
  },
  {
    id: 4,
    icon: <CiFaceSmile className="text-white" size={44} />,
    title: 'Step 4',
    description: 'Leave with a happy, healthy child and ongoing support.',
  },
];

const OurProcess = () => {
  return (
    <section className="bg-[#000C67] py-12 lg:py-20 text-white">
      <div className="max-w-7xl mx-auto text-center  px-6">
        <div className="text-center mb-14 mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="lg:text-center font-bold text-md lg:text-lg sm:text-base mb-2 text-left"
          >
            OUR PROCESS
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-4 lg:text-center text-left text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
          >
            A Simple Path to Caring for Your Child
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-300 max-w-xl lg:mx-auto text-lg lg:text-center text-left"
          >
            Follow our four-step process designed to guide your child from consultation to ongoing care — personalized, gentle, and supportive.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              <div className="mb-6">{step.icon}</div>
              <div className="w-full lg:w-auto">
                <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                <p className="text-gray-200 text-md">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
