import Image from "next/image";
//import DoctorImg from "@/assets/doctor-removebg-preview.png"
import DoctorImg from "@/assets/doctor.jpg"
const HeroSection = () => {
  return (
    <section className="bg-green-50 py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            Your Trusted Partner in <span className="text-green-600">Pharmacy</span> and Healthcare
          </h1>
          <p className="mt-4 text-gray-600">
            Providing high-quality care and a wide range of medical services to ensure your health and wellbeing.
          </p>
          <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
            Get Started
          </button>
        </div>

        
        <div className="">
          <Image
            src={DoctorImg} 
            alt="Healthcare Hero"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
