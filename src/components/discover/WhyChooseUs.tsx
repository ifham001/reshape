"use client";

import { FC } from "react";
import { SearchCheck, AlertTriangle, Route } from "lucide-react";

const reasons = [
  {
    title: "Explainable AI",
    description:
      "Reasoning of AI models transparently exposed to the users and domain experts.",
    icon: SearchCheck,
  },
  {
    title: "Automated Risk Identification",
    description:
      "Automated identification of high uncertainty areas for the risk assessment.",
    icon: AlertTriangle,
  },
  {
    title: "Decision Traceability",
    description:
      "Traceability of AI-supported decisions throughout the project evolution.",
    icon: Route,
  },
];

const WhyChooseUs: FC = () => {
  return (
    <section className="py-20 px-6 md:px-20 ">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-700 text-center mb-12">
        Why Choose Us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition flex flex-col items-center text-center"
          >
            <reason.icon
              className="text-orange-500 mb-4"
              size={40}
              strokeWidth={1.5}
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-3">
              {reason.title}
            </h3>
            <p className="text-gray-600">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
