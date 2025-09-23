"use client";

import { FC } from "react";
import Image from "next/image";
import { Linkedin } from "lucide-react";

const founders = [
  {
    name: "Andrea Apollonio",
    image: "/Andrea.webp",
    linkedin: "https://www.linkedin.com/in/andrea-apollonio-phd-602b365a/",
    tag: "CO-FOUNDER & CEO",
  },
  {
    name: "Thomas Cartier-Michaud",
    image: "/Thomas.webp",
    linkedin: "https://www.linkedin.com/in/thomas-cartier-michaud-b107b7241/",
    tag: "CO-FOUNDER & CTO",
  },
];

const MeetFounders: FC = () => {
  return (
    <section className="py-20 px-6 md:px-20">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12">
        Meet the Founders
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 max-w-4xl mx-auto">
        {founders.map((founder, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
          >
            <div className="w-28 h-28 sm:w-32 sm:h-32 relative mb-4">
              <Image
                src={founder.image}
                alt={founder.name}
                fill
                className="object-cover rounded-full"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
              {founder.name}
            </h3>
            <p className="text-sm sm:text-base text-gray-500 mb-3">{founder.tag}</p>
            <a
              href={founder.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 hover:bg-blue-100 text-blue-600 transition"
            >
              <Linkedin size={22} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetFounders;
