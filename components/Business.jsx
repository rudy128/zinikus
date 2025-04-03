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
  // const fifthSectionRef = useRef(null);

  // Visibility states for each section
  const [isSecondVisible, setIsSecondVisible] = useState(false);
  const [isThirdVisible, setIsThirdVisible] = useState(false);
  const [isFourthVisible, setIsFourthVisible] = useState(false);
  // const [isFifthVisible, setIsFifthVisible] = useState(false);

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
        }
        //   else if (entry.target.id === 'fifth-section') {
        //     setIsFifthVisible(entry.isIntersecting);
        //   }
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
    //   const fifthSectionElement = fifthSectionRef.current;

    // Observe all sections
    if (secondSectionElement) observer.observe(secondSectionElement);
    if (thirdSectionElement) observer.observe(thirdSectionElement);
    if (fourthSectionElement) observer.observe(fourthSectionElement);
    //   if (fifthSectionElement) observer.observe(fifthSectionElement);

    return () => {
      // Cleanup observers
      if (secondSectionElement) observer.unobserve(secondSectionElement);
      if (thirdSectionElement) observer.unobserve(thirdSectionElement);
      if (fourthSectionElement) observer.unobserve(fourthSectionElement);
      // if (fifthSectionElement) observer.unobserve(fifthSectionElement);
    };
  }, []);

  return (
    <>
      <section className="flex justify-center items-center mx-4 xl:mx-60 mb-20">
        <div className="w-full sm:w-1/2 space-y-10 ml-0 sm:ml-[5%] relative py-24">
          <h1 className="text-3xl sm:text-4xl inline-block opacity-0 animate-[appearFromBelow_0.5s_ease-out_forwards] [animation-delay:0.5s] font-bold">
            Innovative Modularity
          </h1>
          <p className="text-lg sm:text-xl inline-block opacity-0 animate-[appearFromBelow_0.5s_ease-out_forwards] [animation-delay:0.6s]">
            Based on personalized needs, our Platform is designed to support the
            assembly of various robotic bodies, including delivery, reception,
            cleaning, and advertisements, catering to diverse customer
            requirements. ZINIKUS operates a professional production facility,
            an advanced R&D center, and a dedicated maintenance team, offering
            comprehensive modular services across three key domains: robotic
            customization, system integration, and long-term support & upgrades
          </p>
        </div>
        <div className="w-full sm:w-1/2 h-1/2 mr-12">
          <Image
            src={Zoro_Zini}
            alt=""
            width={750}
            height={750}
            className="inline-block opacity-0 animate-[appearFromBelow_0.5s_ease-out_forwards] [animation-delay:0.5s]"
          />
        </div>
      </section>

      {/* Second Section */}
      <section
        id="second-section"
        ref={secondSectionRef}
        className={` flex flex-col lg:flex-row h-auto sm:h-[500px] mx-4 sm:mx-8 md:mx-16 lg:mx-40 xl:mx-60 relative items-center lg:items-start ${
          isSecondVisible ? "animate-fadeIn" : "opacity-0"
        }`}
      >
        {/* Left Text Content */}
        <div className=" space-y-10 ml-0 sm:ml-[5%] flex flex-col relative pb-16 md:pb-24 text-center lg:text-left">
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold ${
              isSecondVisible
                ? "inline-block opacity-0 animate-[appearFromBelow_0.4s_ease-out_forwards] [animation-delay:0.2s]"
                : ""
            }`}
          >
            ZORO
          </h1>
          <h4
            className={`text-[#545454] text-lg md:text-xl lg:text-2xl xl:text-2xl leading-relaxed ${
              isSecondVisible
                ? "inline-block opacity-0 animate-[appearFromBelow_0.4s_ease-out_forwards] [animation-delay:0.3s]"
                : ""
            }`}
          >
            ZORO is an intelligent catering and food delivery robot{" "}
            <br className="hidden md:block" />
            designed to revolutionize the way meals are served.{" "}
            <br className="hidden md:block" />
            Whether in restaurants, hotels, or corporate spaces.
          </h4>
          <Link href="/products/zoro">
            <button
              className={`border border-black px-4 py-3 rounded-3xl text-lg font-bold w-fit mx-auto lg:mx-0 ${
                isSecondVisible
                  ? "inline-block opacity-0 animate-[appearFromBelow_0.4s_ease-out_forwards] [animation-delay:0.4s]"
                  : ""
              }`}
            >
              Learn About Zoro
            </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className=" p-3 w-full h-full flex items-center justify-center">
          <Image
            src={Zoro}
            alt="Zoro Robot"
            width={400}
            height={600}
            className={`relative lg:absolute lg:right-20 xl:right-32 xl:w-96 lg:w-72 z-10 max-w-[300px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[500px] ${
              isSecondVisible
                ? "inline-block opacity-0 animate-[appearFromBelow_0.4s_ease-out_forwards] [animation-delay:0.3s]"
                : ""
            }`}
          />
        </div>
      </section>

      {/* Third Section */}
      <section
        id="third-section"
        ref={thirdSectionRef}
        className={`h-auto sm:h-[1087px] gap-x-10 relative flex justify-start p-10 pb-0 items-center bg-gradient-to-br from-[#27272d] to-85% to-[#8428e0] ${
          isThirdVisible
            ? "inline-block opacity-0 animate-[appearFromBelow_0.5s_ease-out_forwards] [animation-delay:0.5s]"
            : "opacity-0"
        }`}
      >
        <div className="flex flex-col gap-y-40 w-full sm:w-1/2 ml-0 sm:ml-[15%]">
          <Image
            src={Zephyr}
            alt=""
            width={460}
            height={900}
            className={`${
              isThirdVisible
                ? "inline-block opacity-0 animate-[appearFromBelow_0.5s_ease-out_forwards] [animation-delay:0.6s]"
                : ""
            }`}
          />
        </div>
        <div className="w-full sm:w-1/2 pl-0 sm:pl-32 mx-auto mr-0 sm:mr-60 self-center text-white space-y-10 ">
          <h1
            className={`text-4xl sm:text-6xl font-bold ${
              isThirdVisible
                ? "inline-block opacity-0 animate-[appearFromBelow_0.5s_ease-out_forwards] [animation-delay:0.5s]"
                : ""
            }`}
          >
            ZEPHYR
          </h1>
          <p
            className={`text-xl sm:text-2xl ${
              isThirdVisible
                ? "inline-block opacity-0 animate-[appearFromBelow_0.5s_ease-out_forwards] [animation-delay:0.6s] w-full"
                : ""
            }`}
          >
            Your brand deserves a representative that&apos;s smart, efficient,
            and unforgettable. Meet ZEPHYR, the cutting-edge robot designed to
            elevate customer interactions with seamless service and precision.
          </p>
          <Link href="/products/zephyr">
            <button
              className={`text-lg font-bold border rounded-full px-4 py-2 my-10 ${
                isThirdVisible
                  ? "inline-block opacity-0 animate-[appearFromBelow_0.5s_ease-out_forwards] [animation-delay:0.7s]"
                  : ""
              }`}
            >
              Learn About ZEPHYR
            </button>
          </Link>
        </div>
      </section>

      {/* Fourth Section */}
      <section
        id="fourth-section"
        ref={fourthSectionRef}
        className={`flex flex-col lg:flex-row h-auto sm:h-[600px] mx-4 sm:mx-8 lg:mx-40 xl:mx-60 mb-[5%] relative items-center lg:items-start ${
          isFourthVisible
            ? "inline-block opacity-0 animate-[appearFromBelow_0.5s_ease-out_forwards] [animation-delay:0.5s]"
            : "opacity-0"
        }`}
      >
        {/* Left Text Content */}
        <div className="flex flex-col gap-y-10 p-8 sm:pl-10 lg:pl-0 lg:py-24 xl:py-32 w-full lg:w-1/2">
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold ${
              isFourthVisible
                ? "inline-block opacity-0 animate-[appearFromBelow_0.5s_ease-out_forwards] [animation-delay:0.5s]"
                : ""
            }`}
          >
            ZENO
          </h1>
          <h4
            className={`text-lg sm:text-xl lg:text-2xl leading-relaxed ${
              isFourthVisible
                ? "inline-block opacity-0 animate-[appearFromBelow_0.5s_ease-out_forwards] [animation-delay:0.6s]"
                : ""
            }`}
          >
            A smarter welcome begins with ZENO. Designed to{" "}
            <br className="hidden md:block" />
            redefine hospitality, ZENO is more than just a robot—{" "}
            <br className="hidden md:block" />
            it’s an intelligent, interactive guide that enhances{" "}
            <br className="hidden md:block" />
            guest experiences from the moment they arrive.
          </h4>
          <Link href="/products/zeno">
            <button
              className={`border border-black px-4 py-3 w-fit rounded-3xl font-bold ${
                isFourthVisible
                  ? "inline-block opacity-0 animate-[appearFromBelow_0.5s_ease-out_forwards] [animation-delay:0.7s]"
                  : ""
              }`}
            >
              Learn About Zeno
            </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
          <Image
            src={Zeno}
            alt="Zeno Robot"
            width={400}
            height={700}
            className={`relative lg:absolute lg:right-0 xl:right-10 max-w-[300px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[500px] -top-32 ${
              isFourthVisible
                ? "inline-block opacity-0 animate-[appearFromBelow_0.5s_ease-out_forwards] [animation-delay:0.6s]"
                : ""
            }`}
          />
        </div>
      </section>

      {/* Fifth Section
        <section id='fifth-section' ref={fifthSectionRef} className={`flex justify-center items-center ${isFifthVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 ease-out`}>
            <div className='space-y-10 max-w-5xl mx-4 sm:mx-8 lg:mx-60 my-40'>
                <h1 className='text-4xl sm:text-5xl font-bold'>
                    Revolutionizing industries with advanced robotic solutions.
                </h1>
                <p className='text-lg sm:text-xl'>
                    ZINIKUS offers customizable robotic solutions designed to address a wide range of industry needs.
                </p>
            </div>
        </section> */}
    </>
  );
};

const BusinessMobile = () => {
  const secondSectionRef = useRef(null);
  const thirdSectionRef = useRef(null);
  const fourthSectionRef = useRef(null);
  // const fifthSectionRef = useRef(null);

  // Visibility states for each section
  const [isSecondVisible, setIsSecondVisible] = useState(false);
  const [isThirdVisible, setIsThirdVisible] = useState(false);
  const [isFourthVisible, setIsFourthVisible] = useState(false);
  // const [isFifthVisible, setIsFifthVisible] = useState(false);

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
        }
        //   else if (entry.target.id === 'fifth-section') {
        //     setIsFifthVisible(entry.isIntersecting);
        //   }
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
    //   const fifthSectionElement = fifthSectionRef.current;

    // Observe all sections
    if (secondSectionElement) observer.observe(secondSectionElement);
    if (thirdSectionElement) observer.observe(thirdSectionElement);
    if (fourthSectionElement) observer.observe(fourthSectionElement);
    //   if (fifthSectionElement) observer.observe(fifthSectionElement);

    return () => {
      // Cleanup observers
      if (secondSectionElement) observer.unobserve(secondSectionElement);
      if (thirdSectionElement) observer.unobserve(thirdSectionElement);
      if (fourthSectionElement) observer.unobserve(fourthSectionElement);
      // if (fifthSectionElement) observer.unobserve(fifthSectionElement);
    };
  }, []);

  return (
    <>
      <section className="flex justify-center items-center mx-4 sm:mx-28 md:mx-44 lg:mx-60 mb-20">
        <div className="w-full space-y-10 ml-0 relative pt-24">
          <h1 className="text-3xl inline-block opacity-0 animate-[appearFromBelow_0.5s_ease-out_forwards] [animation-delay:0.5s] font-bold">
            Innovative Modularity
          </h1>
          <div className="w-full h-1/2 mr-12">
            <Image
              src={Zoro_Zini}
              alt=""
              // width={750}
              // height={750}
              className="inline-block opacity-0 animate-[appearFromBelow_0.5s_ease-out_forwards] [animation-delay:0.5s]"
            />
          </div>
          <p className="text-lg inline-block opacity-0 animate-[appearFromBelow_0.5s_ease-out_forwards] [animation-delay:0.6s]">
            Based on personalized needs, our Platform is designed to support the
            assembly of various robotic bodies, including delivery, reception,
            cleaning, and advertisements, catering to diverse customer
            requirements. ZINIKUS operates a professional production facility,
            an advanced R&D center, and a dedicated maintenance team, offering
            comprehensive modular services across three key domains: robotic
            customization, system integration, and long-term support & upgrades
          </p>
        </div>
      </section>

      {/* Second Section */}
      <section
        id="second-section"
        ref={secondSectionRef}
        className={`flex h-auto mx-4 lg:mx-60 relative ${
          isSecondVisible ? "animate-fadeIn" : "opacity-0"
        }`}
      >
        <div className="gap-y-10 ml-0 flex flex-col justify-center items-center relative pb-24">
          <h1
            className={`text-4xl font-bold ${
              isSecondVisible
                ? "inline-block opacity-0 animate-[appearFromBelow_0.4s_ease-out_forwards] [animation-delay:0.2s]"
                : ""
            }`}
          >
            ZORO
          </h1>
          <Image
            src={Zoro}
            alt=""
            className={`right-20 z-10 ${
              isSecondVisible
                ? "inline-block opacity-0 animate-[appearFromBelow_0.4s_ease-out_forwards] [animation-delay:0.3s]"
                : ""
            }`}
          />
          <h4
            className={`text-[#545454] text-lg sm:px-28 md:px-40 ${
              isSecondVisible
                ? "inline-block opacity-0 animate-[appearFromBelow_0.4s_ease-out_forwards] [animation-delay:0.3s]"
                : ""
            }`}
          >
            ZORO is an intelligent catering and food delivery robot designed to
            revolutionize the way meals are served. Whether in restaurants,
            hotels, or corporate spaces.
          </h4>
          <Link href="/products/zoro">
            <button
              className={`border border-black px-4 py-3 rounded-3xl text-lg font-bold w-fit ${
                isSecondVisible
                  ? "inline-block opacity-0 animate-[appearFromBelow_0.4s_ease-out_forwards] [animation-delay:0.4s]"
                  : ""
              }`}
            >
              Learn About Zoro
            </button>
          </Link>
        </div>
      </section>

      {/* Third Section */}
      <section
        id="third-section"
        ref={thirdSectionRef}
        className={`h-auto md:min-h-[1087px] md:py-10 gap-x-10 relative flex justify-start p-10 pb-0 items-center bg-gradient-to-br from-[#27272d] to-85% to-[#8428e0] ${
          isThirdVisible
            ? "inline-block opacity-0 animate-[appearFromBelow_0.5s_ease-out_forwards] [animation-delay:0.5s]"
            : "opacity-0"
        }`}
      >
        {/* <div className='flex flex-col gap-y-40 w-full sm:w-1/2 ml-0 sm:ml-[15%]'>
            </div> */}
        <div className="w-full flex sm:mx-28 flex-col justify-center items-center pl-0 mr-0 self-center text-white space-y-10">
          <h1
            className={`text-4xl font-bold ${
              isThirdVisible
                ? "inline-block opacity-0 animate-[appearFromBelow_0.5s_ease-out_forwards] [animation-delay:0.5s]"
                : ""
            }`}
          >
            ZEPHYR
          </h1>
          <Image
            src={Zephyr}
            alt=""
            // width={460}
            // height={900}
            className={`${
              isThirdVisible
                ? "inline-block opacity-0 animate-[appearFromBelow_0.5s_ease-out_forwards] [animation-delay:0.6s]"
                : ""
            }`}
          />
          <p
            className={`text-xl md:mx-4 ${
              isThirdVisible
                ? "inline-block opacity-0 animate-[appearFromBelow_0.5s_ease-out_forwards] [animation-delay:0.6s]"
                : ""
            }`}
          >
            Your brand deserves a representative that&apos;s smart, efficient,
            and unforgettable. Meet ZEPHYR, the cutting-edge robot designed to
            elevate customer interactions with seamless service and precision.
          </p>
          <Link href="/products/zephyr">
            <button
              className={`text-lg font-bold border rounded-full px-4 py-2 my-10 ${
                isThirdVisible
                  ? "inline-block opacity-0 animate-[appearFromBelow_0.5s_ease-out_forwards] [animation-delay:0.7s]"
                  : ""
              }`}
            >
              Learn About ZEPHYR
            </button>
          </Link>
        </div>
      </section>

      {/* Fourth Section */}
      <section
        id="fourth-section"
        ref={fourthSectionRef}
        className={`flex h-auto mx-4 relative ${
          isFourthVisible
            ? "inline-block opacity-0 animate-[appearFromBelow_0.5s_ease-out_forwards] [animation-delay:0.5s]"
            : "opacity-0"
        }`}
      >
        <div className="gap-y-10 pl-0 relative flex flex-col py-12 justify-center items-center">
          <h1
            className={`text-4xl font-bold ${
              isFourthVisible
                ? "inline-block opacity-0 animate-[appearFromBelow_0.5s_ease-out_forwards] [animation-delay:0.5s]"
                : ""
            }`}
          >
            ZENO
          </h1>
          <Image
            src={Zeno}
            alt=""
            // width={520}
            // height={900}
            className={`right-16 -top-1/4 ${
              isFourthVisible
                ? "inline-block opacity-0 animate-[appearFromBelow_0.5s_ease-out_forwards] [animation-delay:0.6s]"
                : ""
            }`}
          />
          <h4
            className={`text-lg sm:mx-28 md:mx-40 ${
              isFourthVisible
                ? "inline-block opacity-0 animate-[appearFromBelow_0.5s_ease-out_forwards] [animation-delay:0.6s]"
                : ""
            }`}
          >
            A smarter welcome begins with ZENO. Designed to redefine
            hospitality, ZENO is more than just a robot it&apos;s an
            intelligent, interactive guide that enhances guest experiences from
            the moment they arrive.
          </h4>
          <Link href="/products/zeno">
            <button
              className={`border border-black px-4 py-3 w-fit rounded-3xl font-bold ${
                isFourthVisible
                  ? "inline-block opacity-0 animate-[appearFromBelow_0.5s_ease-out_forwards] [animation-delay:0.7s]"
                  : ""
              }`}
            >
              Learn About Zeno
            </button>
          </Link>
        </div>
      </section>

      {/* Fifth Section
        <section id='fifth-section' ref={fifthSectionRef} className={`flex justify-center items-center ${isFifthVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 ease-out`}>
            <div className='space-y-10 max-w-5xl mx-4 sm:mx-8 lg:mx-60 my-40'>
                <h1 className='text-4xl sm:text-5xl font-bold'>
                    Revolutionizing industries with advanced robotic solutions.
                </h1>
                <p className='text-lg sm:text-xl'>
                    ZINIKUS offers customizable robotic solutions designed to address a wide range of industry needs.
                </p>
            </div>
        </section> */}
    </>
  );
};

export { Business, BusinessMobile };
