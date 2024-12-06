import {
  FaHeartbeat,
  FaHospital,
  FaPills,
  FaStethoscope,
} from "react-icons/fa";
import Link from "next/link";
const ServicesPage = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="hero bg-green-600 text-white text-center py-20">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="mt-4 text-xl">Quality care and services you can trust</p>
      </section>

      {/* Services Section */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            What We Offer
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            We provide a wide range of high-quality healthcare services to
            ensure your well-being. Discover our services below.
          </p>

          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
              <div className="text-4xl text-green-600 mb-4">
                <FaHeartbeat />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Emergency Care
              </h3>
              <p className="text-gray-600 mb-4">
                Our emergency department is equipped to handle all kinds of
                medical emergencies 24/7 with expert care.
              </p>
              <button className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300">
                Learn More
              </button>
            </div>

            {/* Service 2 */}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
              <div className="text-4xl text-green-600 mb-4">
                <FaPills />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Pharmacy Services
              </h3>
              <p className="text-gray-600 mb-4">
                We offer a wide variety of medications and health products, with
                knowledgeable pharmacists available to assist you.
              </p>
              <button className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300">
                Learn More
              </button>
            </div>

            {/* Service 3 */}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
              <div className="text-4xl text-green-600 mb-4">
                <FaStethoscope />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Specialized Consultation
              </h3>
              <p className="text-gray-600 mb-4">
                Our specialists provide expert consultations in various medical
                fields, ensuring you receive the best care for your health.
              </p>
              <Link href="/doctor-team">
                <button className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300">
                Learn More
                </button>
              </Link>
            </div>

            {/* Service 4 */}
            {/* <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
              <div className="text-4xl text-green-600 mb-4">
                <FaHospital />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Inpatient Services
              </h3>
              <p className="text-gray-600 mb-4">
                Our inpatient services ensure a comfortable stay with top-notch
                medical supervision, catering to your every need.
              </p>
              <button className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300">
                Learn More
              </button>
            </div> */}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Looking for Healthcare Services?
          </h2>
          <p className="text-lg mb-6">
            Whether you need immediate care or ongoing treatment, we&apos;re here to
            help. Get in touch with us today!
          </p>
          <Link href="/contact">
          <button className="px-8 py-3 bg-white text-green-600 rounded-md hover:bg-gray-100 transition duration-300">
            Contact Us Now
          </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
