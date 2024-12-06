import DoctorImage2 from "@/assets/doctor2.jpg";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <Image
            src={DoctorImage2}
            alt="About Us"
            width={500}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-800 leading-tight">
            About <span className="text-green-600">Us</span>
          </h2>
          <p className="mt-4 text-gray-600">
            We are committed to delivering top-notch healthcare services and
            pharmacy solutions for our customers.
          </p>
          <ul className="mt-6 space-y-4">
            <li className="flex items-center gap-4">
              <FaCheckCircle className="text-green-600" />

              <p>Professional and experienced staff</p>
            </li>
            <li className="flex items-center  gap-4">
            <FaCheckCircle className="text-green-600" />
              <p>Wide range of medical services</p>
            </li>
            <li className="flex items-center  gap-4">
            <FaCheckCircle className="text-green-600" />
              <p>Customer-first approach</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
