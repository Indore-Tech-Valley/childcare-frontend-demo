import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How often should my child visit a pediatrician?",
    answer:
      "Routine check-ups are recommended at least once a year. Infants and toddlers may need more frequent visits.",
  },
  {
    question: "What vaccinations does my child need?",
    answer:
      "Vaccinations are age-specific and include immunizations against diseases like measles, mumps, rubella, polio, and more. Consult your pediatrician for a full schedule.",
  },
  {
    question: "Do you offer developmental screenings?",
    answer:
      "Yes, we provide regular developmental screenings to monitor physical, emotional, and cognitive growth.",
  },
  {
    question: "How do I manage my child’s fever?",
    answer:
      "Ensure your child stays hydrated and gets rest. Use fever-reducing medicine as advised by your pediatrician. If the fever persists, consult a doctor.",
  },
  {
    question: "Are your services safe for newborns?",
    answer:
      "Absolutely. We have trained pediatric specialists and equipment suitable for treating newborns with the highest safety standards.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h4 className=" text-blue-600 font-bold text-md lg:text-lg sm:text-base mb-2 text-left">
            EVERYTHING YOU NEED TO KNOW 
          </h4>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a1d42] leading-tight">
            Frequently Asked <br className="hidden sm:block" /> Questions
          </h2>
        </motion.div>

        <motion.div
          className="bg-white lg:p-4 md:p-6 rounded-2xl shadow-sm"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <div key={index} className="border-b">
              <button
                onClick={() => toggle(index)}
                className="w-full text-left flex justify-between items-center pb-8 text-[#0a1d42] font-medium text-base sm:text-lg"
              >
                {faq.question}
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-500 ease-out transform ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-out ${
                  openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="pb-4 text-gray-600 text-sm sm:text-base">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
