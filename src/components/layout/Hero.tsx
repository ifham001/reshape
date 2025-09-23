"use client";
import { FC, useState, useEffect } from "react";
import Image from "next/image";
import Button from "../ui/Button";
import { useRouter } from "next/navigation";

const Hero: FC = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "with Gen AI";
  const typingSpeed = 150;

  const route = useRouter()

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, typingSpeed);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="flex text-white py-16 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="w-full md:max-w-xl text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl md:leading-14 font-extrabold text-gray-700">
            Enhancing risk analysis, for your complex systems{" "}
            <span
              className="text-[#f5f5f5] font-extrabold relative inline-block px-3 py-1"
              style={{
                background: "#ff5e1a",
                transform: "rotate(-1deg)",
                borderRadius: "15px 25px 20px 18px",
                boxShadow: "0 2px 8px rgba(144, 238, 144, 0.3)",
              }}
            >
              {displayedText}
              <span className="animate-pulse text-[#f5f5f5]">|</span>
            </span>
            <span className="text-[#ff5e1a] font-extrabold">.</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-gray-700">
            Turn complex data into actionable insights with intelligent risk detection and prediction.
          </p>
          <button onClick={()=>{route.push('/discover')}} className="bg-gray-700 text-[#f5f5f5] hover:bg-gray-900 border-[#ff531a] border-2 w-60 h-10  text-xl rounded-2xl font-extrabold">Discover</button>
        </div>

        <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto">
          <Image
            src="/team.svg"
            alt="Team Illustration"
            width={600}
            height={600}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
