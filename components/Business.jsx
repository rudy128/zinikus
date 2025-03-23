"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Zephyr from "@/app/assets/zephyr.svg";
import Zoro from "@/app/assets/delivery-zoro.svg";
import Zeno from "@/app/assets/zeno.svg";
import Zoro_Zini from "@/app/assets/zoro-zini.png";
import Link from "next/link";

const Business = () => {
  const secondSectionRef = useRef(null);
  const thirdSectionRef = useRef(null);
  const fourthSectionRef = useRef(null);
  const fifthSectionRef = useRef(null);

  // Visibility states for each section
  const [isSecondVisible, setIsSecondVisible] = useState(false);
  const [isThirdVisible, setIsThirdVisible] = useState(false);
  const [isFourthVisible, setIsFourthVisible] = useState(false);
  const [isFifthVisible, setIsFifthVisible] = useState(false);

  // Intersection Observer logic
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.target.id === "second-section") {
          setIsSecondVisible(entry.isIntersecting);
        } else if (entry.target.id === "third-section") {
          setIsThirdVisible(entry.isIntersecting);
        } else if (entry.target.id === "fourth-section") {
          setIsFourthVisible(entry.isIntersecting);
        } else if (entry.target.id === "fifth-section") {
          setIsFifthVisible(entry.isIntersecting);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -30% 0px", // Trigger when 30% of the section is visible
      threshold: 0,
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    const secondSectionElement = secondSectionRef.current;
    const thirdSectionElement = thirdSectionRef.current;
    const fourthSectionElement = fourthSectionRef.current;
    const fifthSectionElement = fifthSectionRef.current;

    // Observe all sections
    if (secondSectionElement) observer.observe(secondSectionElement);
    if (thirdSectionElement) observer.observe(thirdSectionElement);
    if (fourthSectionElement) observer.observe(fourthSectionElement);
    if (fifthSectionElement) observer.observe(fifthSectionElement);

    return () => {
      // Cleanup observers
      if (secondSectionElement) observer.unobserve(secondSectionElement);
      if (thirdSectionElement) observer.unobserve(thirdSectionElement);
      if (fourthSectionElement) observer.unobserve(fourthSectionElement);
      if (fifthSectionElement) observer.unobserve(fifthSectionElement);
    };
  }, []);

  return (
    <>
         {/*1st section - innovation modularity  */}
      <section className="flex flex-col sm:flex-row justify-center items-center mx-4 sm:mx-8 lg:mx-60 mb-20">
        <div className="w-full sm:w-1/2 space-y-6 sm:space-y-10 ml-0 sm:ml-[5%] relative py-16 sm:py-24 text-center sm:text-left">
          <h1 className="text-2xl sm:text-4xl font-bold opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.5s]">
            Innovative Modularity
          </h1>
          <p className="text-base sm:text-xl opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.6s]">
            Based on personalized needs, our Platform is designed to support the
            assembly of various robotic bodies, including delivery, reception,
            cleaning, and advertisements, catering to diverse customer
            requirements. ZINIKUS operates a professional production facility,
            an advanced R&D center, and a dedicated maintenance team, offering
            comprehensive modular services across three key domains: robotic
            customization, system integration, and long-term support & upgrades.
          </p>
        </div>
        <div className="w-full sm:w-1/2 flex justify-center sm:justify-end">
          <Image
            src={Zoro_Zini}
            alt="ZINIKUS Robot"
            width={750}
            height={750}
            className="w-full max-w-xs sm:max-w-none opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.5s]"
          />
        </div>
      </section>

      {/* Second Section - zoro */}
      <section
        id="second-section"
        ref={secondSectionRef}
        className={`flex flex-col-reverse sm:flex-row h-auto sm:h-[500px] mx-4 sm:mx-8 lg:mx-60 relative ${
          isSecondVisible ? "animate-fadeIn" : "opacity-0"
        }`}
      >
        {/* Text Content */}
        <div className="w-full sm:w-2/3 space-y-6 sm:space-y-10 flex flex-col items-center sm:items-start text-center sm:text-left relative pb-12 sm:pb-24">
          <h1
            className={`text-3xl sm:text-7xl font-bold ${
              isSecondVisible
                ? "inline-block opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.2s]"
                : ""
            }`}
          >
            ZORO
          </h1>
          <h4
            className={`text-[#545454] text-sm sm:text-2xl leading-relaxed px-2 sm:px-0 ${
              isSecondVisible
                ? "inline-block opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.3s]"
                : ""
            }`}
          >
            ZORO is an intelligent catering and food delivery robot designed to
            revolutionize the way meals are served, whether in restaurants,
            hotels, or corporate spaces.
          </h4>
          <Link href="/products/zoro">
            <button
              className={`border border-black px-4 py-3 rounded-3xl text-base sm:text-lg font-bold w-fit ${
                isSecondVisible
                  ? "inline-block opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.4s]"
                  : ""
              }`}
            >
              Learn About Zoro
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="flex justify-center sm:justify-end w-full sm:w-auto pb-6 sm:pb-0">
          <Image
            src={Zoro}
            alt="Zoro Robot"
            width={500}
            height={720}
            className={`w-64 sm:w-96 max-w-xs sm:max-w-none z-10 ${
              isSecondVisible
                ? "inline-block opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.3s]"
                : ""
            }`}
          />
        </div>
      </section>

      {/* Third Section - zephyr */}
      <section
        id="third-section"
        ref={thirdSectionRef}
        className={`h-auto sm:h-[1087px] gap-x-10 relative flex flex-col-reverse sm:flex-row justify-start p-6 sm:p-10 pb-0 items-center bg-gradient-to-br from-[#27272d] to-85% to-[#8428e0] ${
          isThirdVisible
            ? "inline-block opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.5s]"
            : "opacity-0"
        }`}
      >
        {/* Image Section */}
        <div className="flex justify-center sm:justify-start w-full sm:w-1/2">
          <Image
            src={Zephyr}
            alt="Zephyr Robot"
            width={460}
            height={900}
            className={`w-72 sm:w-[460px] max-w-xs sm:max-w-none ${
              isThirdVisible
                ? "inline-block opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.6s]"
                : ""
            }`}
          />
        </div>

        {/* Text Content */}
        <div className="w-full sm:w-1/2 text-center sm:text-left text-white space-y-6 sm:space-y-10 px-4 sm:px-0">
          <h1
            className={`text-3xl sm:text-6xl font-bold ${
              isThirdVisible
                ? "inline-block opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.5s]"
                : ""
            }`}
          >
            ZEPHYR
          </h1>
          <p
            className={`text-lg sm:text-2xl leading-relaxed ${
              isThirdVisible
                ? "inline-block opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.6s]"
                : ""
            }`}
          >
            Your brand deserves a representative that &apos;s smart, efficient, and
            unforgettable. Meet ZEPHYR, the cutting-edge robot designed to
            elevate customer interactions with seamless service and precision.
          </p>
          <Link href="/products/zephyr">
            <button
              className={`text-lg font-bold border border-white rounded-full px-5 py-3 ${
                isThirdVisible
                  ? "inline-block opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.7s]"
                  : ""
              }`}
            >
              Learn About ZEPHYR
            </button>
          </Link>
        </div>
      </section>

      {/* Fourth Section - zeno*/}
      <section
        id="second-section"
        ref={secondSectionRef}
        className={`flex flex-col-reverse sm:flex-row items-center h-auto my-10 mb-32 sm:h-[500px] mx-4 sm:mx-8 lg:mx-60 relative gap-8 sm:gap-0 ${
          isSecondVisible ? "animate-fadeIn" : "opacity-0"
        }`}
      >
        {/* Text Content */}
        <div className="w-full sm:w-1/2 space-y-6 sm:space-y-10 flex flex-col items-center sm:items-start text-center sm:text-left pb-16 sm:pb-24">
          <h1
            className={`text-3xl sm:text-6xl font-bold ${
              isSecondVisible
                ? "inline-block opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.2s]"
                : ""
            }`}
          >
            ZORO
          </h1>
          <h4
            className={`text-[#545454] text-lg sm:text-2xl leading-relaxed ${
              isSecondVisible
                ? "inline-block opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.3s]"
                : ""
            }`}
          >
            ZORO is an intelligent catering and food delivery robot designed to
            revolutionize the way meals are served. Whether in restaurants,
            hotels, or corporate spaces.
          </h4>
          <Link href="/products/zoro">
            <button
              className={`border border-black px-5 py-3 rounded-3xl text-lg font-bold w-fit ${
                isSecondVisible
                  ? "inline-block opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.4s]"
                  : ""
              }`}
            >
              Learn About Zoro
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="flex justify-center sm:justify-end w-full sm:w-1/2">
          <Image
            src={Zoro}
            alt="Zoro Robot"
            width={500}
            height={720}
            className={`w-64 sm:w-[500px] max-w-xs sm:max-w-none ${
              isSecondVisible
                ? "inline-block opacity-0 animate-[appearFromBelow_1s_ease-out_forwards] [animation-delay:0.3s]"
                : ""
            }`}
          />
        </div>
      </section>

      {/* Fifth Section */}
      <section
        id="fifth-section"
        ref={fifthSectionRef}
        className={`flex justify-center items-center ${
          isFifthVisible ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000 ease-out`}
      >
        <div className="space-y-10 max-w-5xl mx-4 sm:mx-8 lg:mx-60">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Revolutionizing industries with advanced robotic solutions.
          </h1>
          <p className="text-lg sm:text-xl">
            ZINIKUS offers customizable robotic solutions designed to address a
            wide range of industry needs.
          </p>
        </div>
      </section>
    </>
  );
};

export default Business;
