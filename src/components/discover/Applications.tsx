"use client";

import { FC } from "react";
import { Car, Atom, Plane, Rocket, Factory, Laptop, Train } from "lucide-react";

const applications = [
  { name: "Automotive", icon: Car },
  { name: "Nuclear", icon: Atom },
  { name: "Avionics", icon: Plane },
  { name: "Aerospace", icon: Rocket },
  { name: "Manufacturing", icon: Factory },
  { name: "Consumer Electronics", icon: Laptop },
  { name: "Railways", icon: Train },
];

const Applications: FC = () => {
  return (
    <section className="py-20 px-6 md:px-20 ">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12">
        Applications of Reshape's Technology
      </h2>

      <p className="text-center max-w-2xl mx-auto text-gray-600 mb-12">
        Reshape's technology was developed to be domain-agnostic. 
        Here are some of the most popular application fields:
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {applications.map((app, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-gray-50 rounded-xl p-6 shadow hover:shadow-md transition"
          >
            <app.icon className="text-orange-500 mb-4" size={40} />
            <span className="text-lg font-medium text-gray-700 text-center">
              {app.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Applications;
