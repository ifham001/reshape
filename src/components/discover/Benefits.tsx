"use client";

import { FC } from "react";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const benefits = [
  {
    title: "Reduction of Engineering Costs",
    points: [
      "Automation of time-consuming and error-prone tasks",
      "Processing of technical documentation",
      "Risk identification and classification",
      "Generation of risk analysis reports",
    ],
    img: "/cost.jpg",
  },
  {
    title: "Reduction of Critical Failures",
    points: [
      "Ability to scan existing company knowledge and apply it to new projects",
      "Seamless scaling with project complexity",
      "One-click updates when new project information is available",
    ],
    img: "/time.png",
  },
  {
    title: "Improved Knowledge Management",
    points: [
      "Indefinite retention of organizational knowledge",
      "Collaborative review of risk analysis results with key stakeholders",
    ],
    img: "/time.jpg", 
  },
];

const BenefitsSection: FC = () => {
  return (
    <section className="py-20 px-6 md:px-20">
      <h2 className="text-5xl md:text-5xl font-bold text-gray-700 text-center mb-12">
        We are providing with 


      <span 
                  className="text-[#f5f5f5] font-extrabold relative inline-block px-3 py-1"
                  style={{
                    background: "#ff5e1a",
                   
                    borderRadius: "15px 25px 20px 18px",
                    boxShadow: "0 2px 8px rgba(144, 238, 144, 0.3)"
                  }}
                >
                Gen-AI
                  
                </span>
                </h2>

      <div className="space-y-16 max-w-6xl mx-auto">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
     
            <div className="w-full md:w-1/2">
              <Image
                src={benefit.img}
                alt={benefit.title}
                width={400}
                height={300}
                className="rounded-2xl shadow-md"
              />
            </div>

            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-700 mb-6">
                {benefit.title}
              </h3>
              <ul className="space-y-3 text-gray-700">
                {benefit.points.map((point, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <CheckCircle2
                      className="text-orange-500 flex-shrink-0 mt-1"
                      size={18}
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
