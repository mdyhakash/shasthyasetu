"use client";
import { useEffect } from "react";

const StatsSection = () => {
  const stats = [
    { count: 127, label: "Professional Staff" },
    { count: 633, label: "Kinds of Medicine" },
    { count: 70, label: "Doctor Specialists" },
    { count: 260, label: "Active Members" },
  ];

  useEffect(() => {
    let hasAnimated = false;

    const handleScroll = () => {
      const statsSection = document.getElementById("stats-section");
      const statsItems = document.querySelectorAll(".stats-item");

      
      const rect = statsSection.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0 && !hasAnimated) {
        hasAnimated = true;

        statsItems.forEach((item, index) => {
          const countElement = item.querySelector(".count");
          let count = 0;
          const targetCount = parseInt(countElement.dataset.target, 10);

         
          const incrementSpeed = 15; // Time between increments in ms (lower = faster)
          const incrementStep = Math.ceil(targetCount / 50);

          const interval = setInterval(() => {
            count += incrementStep;
            if (count >= targetCount) {
              count = targetCount;
              clearInterval(interval);
            }
            countElement.textContent = count;
          }, incrementSpeed);
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="stats-section" className="py-10 px-4 bg-gray-50">
      <div className="w-full mx-auto flex items-center justify-evenly">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-44 text-center">
          {stats.map(({ count, label }, index) => (
            <div key={index} className="stats-item">
              <h3 className="text-3xl font-bold text-green-600">
                <span className="count" data-target={count}>
                  0
                </span>
                +
              </h3>
              <p className="text-gray-600">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
