// "use client";

import Doctor1 from "@/assets/doctor.jpg";
import Doctor2 from "@/assets/doctor2.jpg";
import Image from "next/image";
import Link from "next/link";

const DoctorDetailsPage = async ({ params }) => {
  const { id } = await params;
  const doctors = [
    {
      id: 1,
      name: "Dr. John Doe",
      image: Doctor1,
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
      rating: 5,
    },
    {
      id: 2,
      name: "Dr. Jane Smith",
      image: Doctor2,
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
      rating: 3.5,
    },
    {
      id: 3,
      name: "Dr. Michael Lee",
      image: Doctor1,
      degree: "MBBS, FRCS",
      from: "Stanford University",
      speciality: "Orthopedics",
      experience: "12 years",
      contact: {
        phone: "321-654-9870",
        email: "michaellee@hospital.com",
        address: "789 Oak Avenue, Dhaka",
      },
      languages: ["English", "Bengali"],
      available: false,
      rating: 4,
    },
    {
      id: 4,
      name: "Dr. Sarah Khan",
      image: Doctor1,
      degree: "MBBS, MD",
      from: "University of Dhaka",
      speciality: "Pediatrics",
      experience: "5 years",
      contact: {
        phone: "987-654-3210",
        email: "sarahkhan@hospital.com",
        address: "101 Pine Road, Dhaka",
      },
      languages: ["English", "Bengali"],
      available: true,
      rating: 4,
    },
    {
      id: 5,
      name: "Dr. Robert Green",
      image: Doctor1,
      degree: "MBBS, MSc in Internal Medicine",
      from: "Cambridge University",
      speciality: "Internal Medicine",
      experience: "15 years",
      contact: {
        phone: "654-321-9870",
        email: "robertgreen@hospital.com",
        address: "202 Maple Street, Dhaka",
      },
      languages: ["English", "Spanish"],
      available: true,
      rating: 5,
    },
    {
      id: 6,
      name: "Dr. Emily White",
      image: Doctor1,
      degree: "MBBS, DGO",
      from: "Delhi University",
      speciality: "Gynecology",
      experience: "6 years",
      contact: {
        phone: "456-789-1230",
        email: "emilywhite@hospital.com",
        address: "303 Birch Lane, Dhaka",
      },
      languages: ["English", "Hindi"],
      available: true,
      rating: 2,
    },
    {
      id: 7,
      name: "Dr. David Harris",
      image: Doctor1,
      degree: "MBBS, FRCS",
      from: "Harvard University",
      speciality: "Surgery",
      experience: "20 years",
      contact: {
        phone: "567-890-1234",
        email: "davidharris@hospital.com",
        address: "404 Cedar Drive, Dhaka",
      },
      languages: ["English", "French"],
      available: false,
      rating: 3,
    },
    {
      id: 8,
      name: "Dr. Anna Lee",
      image: Doctor1,
      degree: "MBBS, DMD",
      from: "Yale University",
      speciality: "Dentistry",
      experience: "7 years",
      contact: {
        phone: "678-901-2345",
        email: "annalee@hospital.com",
        address: "505 Redwood Street, Dhaka",
      },
      languages: ["English", "Korean"],
      available: true,
      rating: 5,
    },
    {
      id: 9,
      name: "Dr. Daniel Brown",
      image: Doctor1,
      degree: "MBBS, MD",
      from: "University of Dhaka",
      speciality: "Psychiatry",
      experience: "10 years",
      contact: {
        phone: "789-012-3456",
        email: "danielbrown@hospital.com",
        address: "606 Ashwood Road, Dhaka",
      },
      languages: ["English", "Bengali"],
      available: true,
      rating: 2,
    },
    {
      id: 10,
      name: "Dr. Olivia Wilson",
      image: Doctor1,
      degree: "MBBS, DPH",
      from: "Oxford University",
      speciality: "Dermatology",
      experience: "11 years",
      contact: {
        phone: "890-123-4567",
        email: "oliviawilson@hospital.com",
        address: "707 Sequoia Avenue, Dhaka",
      },
      languages: ["English", "French"],
      available: false,
      rating: 4,
    },
    {
      id: 11,
      name: "Dr. James White",
      image: Doctor1,
      degree: "MBBS, MCh Orthopedics",
      from: "Harvard University",
      speciality: "Orthopedics",
      experience: "18 years",
      contact: {
        phone: "321-987-6543",
        email: "jameswhite@hospital.com",
        address: "808 Acacia Road, Dhaka",
      },
      languages: ["English", "Hindi"],
      available: true,
      rating: 3,
    },
    {
      id: 12,
      name: "Dr. Lucy Adams",
      image: Doctor1,
      degree: "MBBS, MD",
      from: "Stanford University",
      speciality: "Endocrinology",
      experience: "13 years",
      contact: {
        phone: "432-109-8765",
        email: "lucyadams@hospital.com",
        address: "909 Fir Street, Dhaka",
      },
      languages: ["English", "Mandarin"],
      available: true,
      rating: 4,
    },
    //   {
    //     id: 13,
    //     name: "Dr. Peter Johnson",
    //     image: "https://example.com/images/peter_johnson.jpg",
    //     degree: "MBBS, PhD in Immunology",
    //     from: "University of Cambridge",
    //     speciality: "Immunology",
    //     experience: "9 years",
    //     contact: {
    //       phone: "543-210-9876",
    //       email: "peterjohnson@hospital.com",
    //       address: "1010 Pinehill Road, Dhaka",
    //     },
    //     languages: ["English", "French"],
    //     available: false,
    //   },
    //   {
    //     id: 14,
    //     name: "Dr. Lisa Taylor",
    //     image: "https://example.com/images/lisa_taylor.jpg",
    //     degree: "MBBS, MSc in Rheumatology",
    //     from: "University of Sydney",
    //     speciality: "Rheumatology",
    //     experience: "14 years",
    //     contact: {
    //       phone: "654-321-0000",
    //       email: "lisataylor@hospital.com",
    //       address: "1111 Magnolia Lane, Dhaka",
    //     },
    //     languages: ["English", "Mandarin"],
    //     available: true,
    //   },
    //   {
    //     id: 15,
    //     name: "Dr. Mark Robinson",
    //     image: "https://example.com/images/mark_robinson.jpg",
    //     degree: "MBBS, PhD in Cardiology",
    //     from: "Columbia University",
    //     speciality: "Cardiology",
    //     experience: "22 years",
    //     contact: {
    //       phone: "765-432-1098",
    //       email: "markrobinson@hospital.com",
    //       address: "1212 Birchwood Street, Dhaka",
    //     },
    //     languages: ["English", "Spanish"],
    //     available: true,
    //   },
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
          <div className="mt-4 text-xl">
            {doctor.available ? "Available 😊" : "Not Available 😞"}
          </div>

          {/* Achievements */}
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-gray-800">
              Achievements
            </h3>
            <ul className="text-lg text-gray-600 mt-2">
              <li>
                - Published 5+ research papers in leading medical journals.
              </li>
              <li>- Awarded &quot;Best Doctor of the Year&quot; in 2023.</li>
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
          <h3 className="text-2xl font-semibold text-gray-800">
            Doctor&apos;s Bio
          </h3>
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
