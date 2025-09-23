"use client";

import { FC } from "react";
import { CheckCircle2, XCircle } from "lucide-react";

const methods = [
  {
    name: "FMEA (Failure Modes and Effects Analysis)",
    description:
      "Identifies potential failure modes within a system and assesses their impact to prioritize mitigation efforts.",
    pros: [
      "Systematic, helps prioritize risks",
      "Improves reliability",
    ],
    cons: [
      "Time-consuming",
      "May miss complex interactions",
    ],
  },
  {
    name: "FMECA (Failure Modes, Effects, and Criticality Analysis)",
    description:
      "Extends FMEA by adding a criticality analysis to quantify the severity and likelihood of failures.",
    pros: [
      "Detailed prioritization",
      "Quantifies risk",
      "Enhances decision-making",
    ],
    cons: [
      "More complex and resource-intensive than FMEA",
      "Relies on accurate data",
    ],
  },
  {
    name: "HAZOP (Hazard and Operability Study)",
    description:
      "Examines processes to identify hazards and operability issues through systematic deviation analysis.",
    pros: [
      "Thorough",
      "Identifies operational issues",
      "Enhances safety",
    ],
    cons: [
      "Requires expert knowledge",
      "Labor-intensive",
      "May be subjective",
    ],
  },
  {
    name: "STPA (System-Theoretic Process Analysis)",
    description:
      "Uses a systems theory approach to identify unsafe interactions and control flaws in complex systems.",
    pros: [
      "Addresses complex interactions",
      "Focuses on control systems",
      "Adaptable to various domains",
    ],
    cons: [
      "Requires deep understanding of systems theory",
      "Only qualitative",
    ],
  },
];

const TraditionalRiskAnalysis: FC = () => {
  return (
    <section className="py-20 px-6 md:px-20 ">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12">
        Traditional Ways of Risk Analysis (Before Us)
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {methods.map((method, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              {method.name}
            </h3>
            <p className="text-gray-700 mb-4">{method.description}</p>


            <div className="mb-3">
              <h4 className="text-md font-semibold text-green-700 mb-2">
                Pros:
              </h4>
              <ul className="space-y-2">
                {method.pros.map((pro, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={18} />
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>


            <div>
              <h4 className="text-md font-semibold text-red-700 mb-2">
                Cons:
              </h4>
              <ul className="space-y-2">
                {method.cons.map((con, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-700">
                    <XCircle className="text-red-500 flex-shrink-0 mt-1" size={18} />
                    <span>{con}</span>
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

export default TraditionalRiskAnalysis;
