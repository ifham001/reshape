"use client";

import { FC } from "react";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for individuals just getting started.",
    features: [
      "Basic risk analysis",
      "1 active project",
      "Community support",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "€49/mo",
    description: "Best for growing teams and professionals.",
    features: [
      "Advanced AI analysis",
      "Unlimited projects",
      "Export reports",
      "Priority email support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large organizations.",
    features: [
      "Custom integrations",
      "Dedicated account manager",
      "On-premise deployment",
      "24/7 support",
    ],
    highlighted: false,
  },
];

const Pricing: FC = () => {
  return (
    <section className=" py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-lg text-gray-600">
          Choose a plan that fits your needs. No hidden fees, cancel anytime.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl shadow-md p-8 flex flex-col justify-between border transition hover:shadow-xl ${
              plan.highlighted
                ? "border-[#ff5e1a] bg-white scale-105"
                : "border-gray-200 bg-white"
            }`}
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <p className="text-3xl font-extrabold text-gray-900 mb-6">
                {plan.price}
              </p>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="text-[#ff5e1a] w-5 h-5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#"
              className={`mt-6 inline-block text-center px-6 py-3 rounded-xl font-medium transition ${
                plan.highlighted
                  ? "bg-[#ff5e1a] text-white hover:bg-[#e24e0e]"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {plan.highlighted ? "Contact" : "Learn more"}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
