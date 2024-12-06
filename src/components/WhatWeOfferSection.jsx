import Link from "next/link";

const WhatWeOfferSection = () => {
  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-lg font-semibold text-gray-600">
          What We Offer
        </h2>
        <h3 className="text-center text-3xl font-bold text-gray-800 mt-2">
          Dedicated to Your <span className="text-green-600">Wellbeing</span>
        </h3>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-50 shadow-md rounded-lg p-6 text-center">
            <h4 className="text-lg font-semibold text-gray-800">
              Generic Medicine
            </h4>
            <p className="mt-2 text-sm text-gray-600">
              
            </p>
            <button className="mt-4 px-4 py-2 text-green-600 border border-green-600 rounded-md hover:bg-green-600 hover:text-white transition">
              Learn More
            </button>
          </div>
          <div className="bg-gray-50 shadow-md rounded-lg p-6 text-center">
            <h4 className="text-lg font-semibold text-gray-800">
              BMI Calculator
            </h4>
            <p className="mt-2 text-sm text-gray-600"></p>
            <Link href="/bmi">
              <button className="mt-4 px-4 py-2 text-green-600 border border-green-600 rounded-md hover:bg-green-600 hover:text-white transition">
                Check Your BMI
              </button>
            </Link>
          </div>
          <div className="bg-green-600 text-white shadow-md rounded-lg p-6 text-center">
            <h4 className="text-lg font-semibold">
              AI-Generated Health Tips Bot
            </h4>
            <p className="mt-2 text-sm"></p>
            <Link href="/health-tips-bot">
              <button className="mt-4 px-4 py-2 bg-white text-green-600 border border-white rounded-md hover:bg-green-700 hover:text-white transition">
                Go To Bot
              </button>
            </Link>
          </div>
          <div className="bg-gray-50 shadow-md rounded-lg p-6 text-center">
            <h4 className="text-lg font-semibold text-gray-800">
              Pharmacy Store
            </h4>
            <p className="mt-2 text-sm text-gray-600">
              
            </p>
            <button className="mt-4 px-4 py-2 text-green-600 border border-green-600 rounded-md hover:bg-green-600 hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferSection;
