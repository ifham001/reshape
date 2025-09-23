"use client";

import { FC } from "react";
import { FileText, ClipboardList, ShieldCheck } from "lucide-react";

const steps = [
  {
    title: "What you provide: Project Documentation",
    icon: FileText,
    points: [
      "Requirements",
      "Functional and/or technical specifications",
      "Technical drawings",
      "Any other relevant project information",
    ],
  },
  {
    title: "What we offer: Risk-analysis Co-pilot",
    icon: ClipboardList,
    points: [
      "A platform to manage your company projects",
      "Application at any stage of the project life cycle",
      "Automation of common industry risk analysis methods",
      "Compliance with applicable safety standards",
    ],
  },
  {
    title: "What you get: Automated Risk Analysis",
    icon: ShieldCheck,
    points: [
      "Direct interfaces with your company workflows and tools",
      "Intuitive UI to navigate complex projects with thousands of risks",
      "One-click updates when new project information is available",
      "Standardized risk analysis reports",
    ],
  },
];

const HowItWorks: FC = () => {
  return (
    <section className="py-20 px-6 md:px-20 ">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-700 text-center mb-12">
        How It Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-8 hover:shadow-lg transition flex flex-col items-start"
          >
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 mb-6">
              <step.icon className="text-orange-600" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {step.title}
            </h3>
            <ul className="space-y-3 text-gray-600">
              {step.points.map((point, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="w-2 h-2 mt-2 bg-orange-500 rounded-full" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
