"use client";

import Image from "next/image";
import { FC } from "react";

export const Partners: FC = () => {
  const logos = [
    { src: "/cvc+size.webp", alt: "Département de l'économie" },
    { src: "/fit+size.webp", alt: "Venture Kick" },
    { src: "/innovaud+size.webp", alt: "CERN" },
    { src: "/ms+startups+size.webp", alt: "Microsoft for Startups" },
    { src: "/nvidia+size.webp", alt: "Fondation pour l’innovation" },
  ];

  return (
    <section className="py-16 text-center">
      <h2 className="text-4xl sm:text-5xl font-bold text-gray-700 mb-12">
        Proud To Partner With
      </h2>

      <div className="overflow-x-auto">
        <div className="flex gap-6 sm:gap-10 px-4 sm:px-0 justify-center items-center min-w-max">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 p-4 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={80}
                className="object-contain grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
