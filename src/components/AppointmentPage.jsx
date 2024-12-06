// "use client";

// import { useState } from "react";

// const AppointmentPage = () => {
//   const [formData, setFormData] = useState({
//     doctor: "",
//     date: "",
//     time: "",
//     name: "",
//     email: "",
//   });

//   const doctors = [
//     { id: 1, name: "Dr. John Doe" },
//     { id: 2, name: "Dr. Jane Smith" },
//     { id: 3, name: "Dr. Alan Harris" },
//   ];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic, such as making an API request to schedule the appointment
//     console.log("Appointment Scheduled:", formData);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-8 px-4">
//       <h1 className="text-3xl font-semibold text-center mb-8">Book a Doctor Appointment</h1>

//       <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
//         <form onSubmit={handleSubmit}>
//           {/* Name Input */}
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Full Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//               required
//             />
//           </div>

//           {/* Email Input */}
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email Address</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//               required
//             />
//           </div>

//           {/* Doctor Selection */}
//           <div className="mb-4">
//             <label htmlFor="doctor" className="block text-sm font-semibold text-gray-700">Select Doctor</label>
//             <select
//               id="doctor"
//               name="doctor"
//               value={formData.doctor}
//               onChange={handleChange}
//               className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//               required
//             >
//               <option value="">Select a doctor</option>
//               {doctors.map((doctor) => (
//                 <option key={doctor.id} value={doctor.name}>{doctor.name}</option>
//               ))}
//             </select>
//           </div>

//           {/* Appointment Date */}
//           <div className="mb-4">
//             <label htmlFor="date" className="block text-sm font-semibold text-gray-700">Appointment Date</label>
//             <input
//               type="date"
//               id="date"
//               name="date"
//               value={formData.date}
//               onChange={handleChange}
//               className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//               required
//             />
//           </div>

//           {/* Appointment Time */}
//           <div className="mb-4">
//             <label htmlFor="time" className="block text-sm font-semibold text-gray-700">Appointment Time</label>
//             <input
//               type="time"
//               id="time"
//               name="time"
//               value={formData.time}
//               onChange={handleChange}
//               className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <div className="mb-4">
//             <button
//               type="submit"
//               className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition duration-300"
//             >
//               Book Appointment
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AppointmentPage;
"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppointmentPage = () => {
  const [formData, setFormData] = useState({
    doctor: "",
    date: "",
    time: "",
    name: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);

    // Show a toast message on successful appointment booking
    toast.success("Appointment booked successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <h1 className="text-3xl font-semibold text-center mb-8">
        Book a Doctor Appointment
      </h1>

      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700"
          >
            Book Appointment
          </button>
        </form>
      </div>

      {/* Toast Container to display the toast messages */}
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default AppointmentPage;
