"use client";
import { useEffect, useState } from "react";
import { FaGlobe, FaHeadset, FaRocket } from "react-icons/fa"; // Example Icons

const WhyChooseUsSection = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("why-choose-us");
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setInView(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="why-choose-us"
      className="py-10 px-4 bg-gray-50 transition-opacity duration-1000"
      style={{ opacity: inView ? 1 : 0 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-center">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-gray-600 mb-2">
            Why Choose Us
          </h2>
          <h3 className="text-3xl font-bold text-gray-800 leading-tight">
            Excellence in <span className="text-green-600">Pharmacy</span> and
            Medical Care
          </h3>
          <p className="mt-4 text-gray-600">
            We provide the highest quality services in pharmacy and medical
            care, ensuring customer satisfaction and well-being.
          </p>
          <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-all duration-300 transform hover:scale-105">
            Learn More
          </button>
        </div>

        {/* Right Features */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Feature 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 transform transition-all hover:scale-105 hover:shadow-2xl">
            <div className="text-4xl text-green-600">
              <FaHeadset />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mt-4">
              Priority Medical Support
            </h4>
            <p className="mt-2 text-sm text-gray-600">
              Access 24/7 healthcare support to address all your medical
              inquiries and ensure a smooth healthcare experience.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 transform transition-all hover:scale-105 hover:shadow-2xl">
            <div className="text-4xl text-green-600">
              <FaRocket />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mt-4">
              Cutting-Edge Medical Technology
            </h4>
            <p className="mt-2 text-sm text-gray-600">
              We utilize the latest medical advancements and technologies to
              enhance treatments and provide the best care possible for our
              patients.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 transform transition-all hover:scale-105 hover:shadow-2xl">
            <div className="text-4xl text-green-600">
              <FaGlobe />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mt-4">
              Global Health Network
            </h4>
            <p className="mt-2 text-sm text-gray-600">
              Join a global community committed to advancing wellness, sharing
              medical knowledge, and providing quality healthcare solutions
              worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
