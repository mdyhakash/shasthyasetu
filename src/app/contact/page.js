'use client'
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Thank you for contacting us. We will get back to you shortly.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero bg-green-600 text-white text-center py-20">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-4 text-xl">
          We're here to help! Reach out to us and we’ll get back to you as soon
          as possible.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-gray-600 mb-8">
            Have a question or need more information? Fill out the form below,
            and we’ll get back to you as soon as possible.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-sm font-semibold text-gray-800"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-2 p-4 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-300 ease-in-out"
                placeholder="Your full name"
                required
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-800"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-2 p-4 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-300 ease-in-out"
                placeholder="Your email address"
                required
              />
            </div>

            <div className="flex flex-col col-span-2">
              <label
                htmlFor="message"
                className="text-sm font-semibold text-gray-800"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="mt-2 p-4 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-300 ease-in-out"
                rows="6"
                placeholder="Your message"
                required
              ></textarea>
            </div>

            <div className="col-span-2 text-center">
              <button
                type="submit"
                className="px-8 py-3 mt-6 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out shadow-lg"
              >
                Send Message
              </button>
            </div>
          </form>

          {status && (
            <div className="mt-6 text-lg font-semibold text-green-600">
              {status}
            </div>
          )}
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Our Contact Information
          </h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-800">Email</h3>
              <p className="mt-2 text-gray-600">contact@yourdomain.com</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
              <p className="mt-2 text-gray-600">+1 (555) 123-4567</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-800">Address</h3>
              <p className="mt-2 text-gray-600">
                123 Main Street, City, Country
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional) */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Our Location
          </h2>
          <div className="mt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.077758170116!2d144.9537363153151!3d-37.813629779751516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d47f8e8d23f%3A0x5045675218ce620!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1618937673785!5m2!1sen!2sus"
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: "0" }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
