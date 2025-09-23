"use client";

import { FC } from "react";
import { ShieldCheck, AlertTriangle, Gauge, CheckCircle2 } from "lucide-react";

const features = [
  {
    label: "Safety",
    description: "Ensuring the highest standards of protection.",
    icon: ShieldCheck,
  },
  {
    label: "Hazards",
    description: "Identifying and preventing potential risks.",
    icon: AlertTriangle,
  },
  {
    label: "Performance",
    description: "Optimizing efficiency and system output.",
    icon: Gauge,
  },
  {
    label: "Reliability",
    description: "Delivering consistent and dependable results.",
    icon: CheckCircle2,
  },
];

export const TickerLine: FC = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-700 mb-4">
          Our Key Features<span className="text-[#ff5e1a]">.</span>
        </h2>
        <p className="text-gray-700 text-base sm:text-lg">
          Designed to enhance safety, performance, and reliability in every aspect.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
        {features.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">
                <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-orange-500" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800">{item.label}</h3>
              <p className="mt-2 text-gray-600 text-sm sm:text-base">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
