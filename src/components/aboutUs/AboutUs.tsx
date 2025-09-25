"use client";

import Link from "next/link";
import { FC } from "react";

const AboutUs: FC = () => {
  return (
    <section className=" py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          About Us
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Reshape Systems — Empowering Smarter Engineering with AI
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-10 text-gray-700 leading-relaxed">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
          <p>
            To empower engineers and decision-makers with tools that make risk
            evaluation faster, more consistent, and more transparent — without
            compromising on control or safety.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">What We Do</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              AI-based <strong>risk analysis co-pilot</strong> that integrates
              with your workflows.
            </li>
            <li>
              Automates risk methods, generates reports, and updates dynamically.
            </li>
            <li>
              Scales across sectors: automotive, aerospace, nuclear, railways,
              consumer electronics, and more.
            </li>
            <li>
              Makes risk “visible” — turning docs, specs, and drawings into
              insights.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Why It Matters</h3>
          <p>
            Modern systems are more interconnected and safety-critical. Manual
            workflows can create errors and inconsistencies. Reshape brings
            speed, rigor, and transparency — helping teams make better
            decisions, faster.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Roots</h3>
          <p>
            Reshape is a <strong>CERN spin-off</strong>, combining scientific
            rigor with real-world engineering solutions. Our co-founders bring
            deep expertise:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Andrea Apollonio — Co-Founder & CEO</li>
            <li>Thomas Cartier-Michaud — Co-Founder & CTO</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Promise</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Transparent and explainable AI — you stay in control.</li>
            <li>Domain-agnostic architecture for multiple industries.</li>
            <li>Dynamic updates as your projects evolve.</li>
            <li>Compliance and standards built in.</li>
          </ul>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Let’s Build with Confidence
          </h3>
          <p className="text-gray-600 mb-6">
            We’re more than a tool — we’re your partner in designing, assessing,
            and managing risk across every stage.
          </p>
          <Link
            href="/contact-us"
            className="inline-block bg-[#ff5e1a] text-white font-medium px-6 py-3 rounded-xl shadow-md hover:bg-[#e24e0e] transition"
          >
        
            Contact Us
            </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
