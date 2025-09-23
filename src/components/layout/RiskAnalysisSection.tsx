"use client";

import { FC } from "react";
import Image from "next/image";

const RiskAnalysisSection: FC = () => {
  return (
    <section className="py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10">
      <div className="flex flex-col w-full md:w-1/2 max-w-xl text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-800 mb-6">
          Navigating Complexity <br /> Driving Innovation
        </h2>
        <p className="text-gray-600 text-lg mb-4 leading-relaxed">
          Industry is changing fast—more complexity, increased reliability
          demand, high turnover, and unpredictable supply chains.
        </p>
        <p className="text-gray-600 text-lg mb-4 leading-relaxed">
          Reshape uses the latest AI technologies to streamline risk analysis
          and optimize engineering workflows.
        </p>
        <p className="text-gray-900 font-semibold text-lg border-l-4 border-orange-500 pl-3 italic">
          We empower engineers to make smarter decisions, faster.
        </p>
      </div>

      <div className="w-full md:w-1/2 flex justify-center order-first md:order-last">
        <Image
          src="/3.png"
          alt="AI Risk Analysis Illustration"
          width={420}
          height={420}
          className="object-contain rounded-2xl"
        />
      </div>
    </section>
  );
};

export default RiskAnalysisSection;
