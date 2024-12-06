/* eslint-disable-next-line react/no-unescaped-entities */
"use client";
import Doctor1 from "@/assets/doctor.jpg";
import Doctor2 from "@/assets/doctor2.jpg";
import Image from "next/image";
import Link from "next/link";
const DoctorDetailsPage = ({ params }) => {
  const { id } = params;

  // Embedded doctor data
  const doctors = [
    {
      id: 1,
      name: "Dr. John Doe",
      image: Doctor1, // Replace with actual image paths
      degree: "MBBS, MD",
      from: "Harvard University",
      speciality: "Cardiology",
      experience: "10 years",
      contact: {
        phone: "123-456-7890",
        email: "johndoe@hospital.com",
        address: "123 Main Street, Dhaka",
      },
      languages: ["English", "Bengali"],
      available: true,
    },
    {
      id: 2,
      name: "Dr. Jane Smith",
      image: Doctor2, // Replace with actual image paths
      degree: "MBBS, MSc in Neurology",
      from: "Oxford University",
      speciality: "Neurology",
      experience: "8 years",
      contact: {
        phone: "123-987-6543",
        email: "janesmith@hospital.com",
        address: "456 Elm Street, Dhaka",
      },
      languages: ["English", "Hindi"],
      available: true,
    },
    // Add more doctor data as needed
  ];

  // Find the doctor matching the id
  const doctor = doctors.find((doc) => doc.id.toString() === id);

  if (!doctor) {
    return <div className="text-center mt-10">Doctor not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Doctor Info */}
        <div className="text-center">
          <div className="w-32 h-32 mx-auto mb-4">
            <Image
              src={doctor.image}
              alt={`Image of ${doctor.name}`}
              width={128}
              height={128}
              className="rounded-full object-cover"
            />
          </div>
          <h2 className="text-3xl font-semibold text-gray-800">
            {doctor.name}
          </h2>
          <p className="text-xl text-gray-600 mt-2">{doctor.speciality}</p>
          <div className="mt-4 text-4xl">{doctor.available ? "😊" : "😞"}</div>

          {/* Achievements */}
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-gray-800">
              Achievements
            </h3>
            <ul className="text-lg text-gray-600 mt-2">
              <li>
                - Published 5+ research papers in leading medical journals.
              </li>
              <li>- Awarded "Best Doctor of the Year" in 2023.</li>
              <li>- Guest lecturer at international medical conferences.</li>
            </ul>
          </div>

          {/* Appointment Button */}
          <div className="mt-6">
            <Link href="/appointment">
              <button className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300">
                Book an Appointment
              </button>
            </Link>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-white p-6 shadow-lg rounded-lg">
          {/* Bio */}
          <h3 className="text-2xl font-semibold text-gray-800">Doctor's Bio</h3>
          <p className="text-lg text-gray-600 mt-4">
            Dr. {doctor.name} is a {doctor.speciality} with {doctor.experience}{" "}
            of experience. They completed their education from {doctor.from}.
          </p>

          {/* Contact Information */}
          <h3 className="text-2xl font-semibold text-gray-800 mt-6">
            Contact Information
          </h3>
          <p className="text-lg text-gray-600 mt-2">
            Phone: {doctor.contact.phone}
          </p>
          <p className="text-lg text-gray-600 mt-2">
            Email: {doctor.contact.email}
          </p>
          <p className="text-lg text-gray-600 mt-2">
            Address: {doctor.contact.address}
          </p>

          {/* Clinic Hours */}
          <h3 className="text-2xl font-semibold text-gray-800 mt-6">
            Clinic Hours
          </h3>
          <p className="text-lg text-gray-600 mt-2">
            Monday - Friday: 9:00 AM - 5:00 PM
          </p>
          <p className="text-lg text-gray-600 mt-2">
            Saturday: 10:00 AM - 2:00 PM
          </p>
          <p className="text-lg text-gray-600 mt-2">Sunday: Closed</p>

          {/* Languages Spoken */}
          <h3 className="text-2xl font-semibold text-gray-800 mt-6">
            Languages Spoken
          </h3>
          <ul className="text-lg text-gray-600 mt-2">
            {doctor.languages.map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetailsPage;
