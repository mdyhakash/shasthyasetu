import { FaHandshake, FaRocket, FaUserAlt } from "react-icons/fa";
import Link from "next/link";
const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero bg-green-600 text-white text-center py-20">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4 text-xl">
          Discover who we are, our mission, and what we stand for.
        </p>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800">
            Our Mission & Vision
          </h2>
          <div className="mt-6 flex flex-col md:flex-row justify-around gap-10">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-green-600">Our Mission</h3>
              <p className="mt-4 text-lg text-gray-600">
                We aim to provide the best services in healthcare and
                pharmaceuticals, enhancing the well-being of our customers and
                communities.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-green-600">Our Vision</h3>
              <p className="mt-4 text-lg text-gray-600">
                To be the leading provider of innovative healthcare solutions,
                creating healthier and happier lives globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Our Values</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <div className="text-4xl text-green-600">
                <FaHandshake />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Integrity
              </h3>
              <p className="text-gray-600 mt-2">
                We value honesty, transparency, and ethical practices in all our
                interactions.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <div className="text-4xl text-green-600">
                <FaUserAlt />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Customer First
              </h3>
              <p className="text-gray-600 mt-2">
                Our customers' needs are at the heart of everything we do.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <div className="text-4xl text-green-600">
                <FaRocket />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Innovation
              </h3>
              <p className="text-gray-600 mt-2">
                We embrace new technologies and creative solutions to improve
                our services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800">
            Meet Our Team
          </h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <div className="text-center">
                <div className="text-4xl text-green-600">👨‍⚕️</div>
                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  Dr. John Doe
                </h3>
                <p className="text-gray-600">Chief Medical Officer</p>
              </div>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <div className="text-center">
                <div className="text-4xl text-green-600">👩‍⚕️</div>
                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  Dr. Jane Smith
                </h3>
                <p className="text-gray-600">Pharmacist</p>
              </div>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <div className="text-center">
                <div className="text-4xl text-green-600">👩‍💻</div>
                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  Sara Williams
                </h3>
                <p className="text-gray-600">Lead Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10 px-4 bg-green-600 text-white text-center">
        <h2 className="text-3xl font-semibold">Get In Touch</h2>
        <p className="mt-4 text-lg">
          If you have any questions or want to learn more, feel free to reach
          out to us!
        </p>
        <Link href="/contact">
        <button className="mt-6 px-6 py-3 bg-white text-green-600 rounded-md hover:bg-gray-200 transition">
          Contact Us
        </button></Link>
      </section>
    </div>
  );
};

export default AboutPage;
