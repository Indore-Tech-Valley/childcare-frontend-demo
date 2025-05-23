import React from "react";
import { Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { PiStethoscopeLight, PiSyringeLight, PiSmileyLight, PiChartLineUpLight, PiHeartbeatLight } from "react-icons/pi";
import { CiApple } from "react-icons/ci";


const Appointment = () => {
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
  return (
    <section className="max-w-7xl mx-auto px-6 lg:py-24 py-12">
      <div className="md:flex md:items-start md:gap-8">
        {/* Left: Form */}
        <div className="md:w-1/2 bg-white rounded-2xl p-6 shadow min-h-[480px] flex flex-col justify-between lg:h-[698px] md:h-[758px] sm:h-full">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a1d42] leading-tight">
                Book Your Appointment
              </h2>
            </div>
            <p className="mb-8 max-w-md text-gray-500 text-base sm:text-lg">
              Schedule a visit with our expert pediatricians. We’re here to
              provide caring, child-friendly healthcare from infancy through
              adolescence.
            </p>

            <form className="space-y-4">
              <div>
                <label htmlFor="service" className="block mb-1 text-gray-700 font-medium">
                  Select Service
                </label>
                <select id="service" className="w-full border border-gray-300 rounded-md px-4 py-3">
                  {/* <option>Select Service</option>
                  <option>General Pediatric Checkup</option>
                  <option>Vaccination</option>
                  <option>Nutrition Consultation</option> */}
                  {services.map((service,index)=>
                  <option key={service.id}>{service.title}</option>
                  )}
                </select>
              </div>

              <div className="flex gap-4">
                <div className="w-1/2">
                  <label htmlFor="date" className="block mb-1 text-gray-700 font-medium">
                    Date
                  </label>
                  <input
                    id="date"
                    
                    type="date"
                    className="w-full border border-gray-300 rounded-md px-4 py-3"
                    defaultValue={new Date().toISOString().split("T")[0]}
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="time" className="block mb-1 text-gray-700 font-medium">
                    Time
                  </label>
                  <select id="time" className="w-full border border-gray-300 rounded-md px-2 py-3">
                    <option>Select Time</option>
                    <option>10:00 AM</option>
                    <option>12:30 PM</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 min-w-0">
                  <label htmlFor="name" className="block mb-1 text-gray-700 font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Parent/Guardian Name"
                    className="w-full border border-gray-300 rounded-md px-2 py-3"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <label htmlFor="email" className="block mb-1 text-gray-700 font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="w-full border border-gray-300 rounded-md px-2 py-3"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <label htmlFor="phone" className="block mb-1 text-gray-700 font-medium">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Phone"
                    className="w-full border border-gray-300 rounded-md px-2 py-3"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block mb-1 text-gray-700 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="3"
                  placeholder="Write your query or child’s details here..."
                  className="w-full border border-gray-300 rounded-md px-2 py-3"
                ></textarea>
              </div>

              <Link
                to="/appointment"
                className="relative group hidden md:inline-block bg-blue-600 hover:bg-[#10244b] text-white px-6 py-3 rounded-lg font-semibold text-md overflow-hidden min-w-[160px] h-[44px] transition-colors duration-300 ease-in-out"
              >
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-full">
                  Send Appointment
                </span>
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                  Send Appointment
                </span>
              </Link>
            </form>
          </div>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 relative rounded-2xl overflow-hidden shadow lg:h-[698px] md:h-[758px] sm:h-full">
          <img
            src="https://plus.unsplash.com/premium_photo-1661277662078-c1e73dec5881?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVkaWF0cmljaWFufGVufDB8MXwwfHx8MA%3D%3D"
            alt="Pediatrician with child patient"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute bottom-6 left-6 bg-black/60 text-white rounded-xl px-6 py-4 flex items-center gap-4 backdrop-blur-sm shadow-lg">
            <Clock className="w-6 h-6 text-white" />
            <div>
              <p className="font-semibold text-white">Opening Hours</p>
              <p className="text-sm text-white/80">Mon to Sat 08:00 - 20:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
