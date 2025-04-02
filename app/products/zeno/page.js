"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { HeroProducts } from "@/components/Hero";
import Image from "next/image";
import React, { useState } from "react";
import ZenoTransparent from "@/app/assets/zeno.png";
import Link from "next/link";
import ZenoGrey from "@/app/assets/zeno-grey.svg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import zeno_office from '@/app/assets/zeno-office.jpeg';

const page = () => {
  return (
    <div>
      <Header />
      <HeroProducts padding={"ml-[24%] lg:ml-[3%]"} />
      <Product />
      <ProductMobile />
      <Footer />
    </div>
  );
};

const Product = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-100px", // Trigger slightly earlier for smoothness
    triggerOnce: false, // Ensures animation repeats if user scrolls away and back
  });

  const [activeLink, setActiveLink] = useState("versatile-operation-management");

  return (
    <div className="w-full hidden lg:block">
      {/* 1st section */}
      <div className="mt-20 flex flex-col items-center">
        <div className="flex flex-col sm:flex-row items-center">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col w-full sm:w-3/10 items-center sm:items-start text-center sm:text-left px-4 sm:px-0"
          >
            <motion.h1
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="font-bold text-4xl sm:text-7xl mt-10 sm:pl-[160px]"
            >
              A Smarter Welcome,
              <br />
              Introducing <span className="text-[#240247]"> ZENO</span>
            </motion.h1>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-6 sm:mt-10 w-full sm:w-fit flex flex-col sm:ml-40 gap-y-6 sm:gap-y-10"
            >
              <p className="font-medium text-lg sm:text-2xl text-[#545454] leading-relaxed">
                ZENO is a smart, interactive concierge that
                <br className="hidden sm:block" />
                elevates the guest experience. With
                <br className="hidden sm:block" />
                personalized greetings, seamless navigation,
                <br className="hidden sm:block" />
                and real-time service assistance, ZENO blends
                <br className="hidden sm:block" />
                cutting-edge technology with a warm, welcoming
                <br className="hidden sm:block" />
                presence, redefining the future of hospitality.
              </p>

              <Link href='#redefine' className="">
              <motion.button
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="rounded-3xl bg-black font-bold w-[155px] h-[44px] text-white mx-auto sm:mx-0"
              >
                Learn More
              </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-10 sm:mt-0 flex justify-center"
          >
            <Image
              src={ZenoTransparent}
              alt="ZENO"
              className="w-64 sm:w-[366px] scale-150"
            />
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="font-medium pt-10 sm:pt-20 mb-10 sm:mb-20 text-xl sm:text-3xl text-center px-40"
        >
          With 360° perception and athletic intelligence, we solved the tough
          robotics
          {/* <br className="hidden sm:block" /> */}
          challenges out of the box so you can make your operations more
          resilient.
        </motion.p>
      </div>

      {/* 2nd section */}
            <div className="w-full h-[600px] relative overflow-hidden">
              <Image 
                src={zeno_office} 
                alt="Zoro Cafe" 
                fill
                className="object-cover object-center" 
              />
            </div>
      {/* 3rd section */}
      <motion.section
        id="redefine"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="px-5 sm:px-10 py-20 relative flex justify-center items-center flex-col"
      >
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-5xl px-5 sm:px-60 font-bold w-full text-center"
        >
          Redefine Customer Service with <span className="text-[#240247]"> ZENO</span>
        </motion.h1>

        {/* Main Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-2xl text-[#545454] px-5 sm:px-60 w-full font-medium mt-6 sm:mt-8 text-center"
        >
          ZENO is a smart, interactive ambassador designed to enhance customer
          experiences in stores, showrooms, and corporate spaces. It guides,
          informs, and assists seamlessly, reducing wait times and human effort.
          With ZENO, your team can focus on customer engagement while ensuring
          smooth, efficient operations. Take your brand&apos;s interaction to
          the next level with ZENO.
        </motion.p>

        {/* Container for Links & Image/Features */}
        <div className="flex flex-col sm:flex-row mt-12 sm:mt-20 sm:ml-40 sm:mx-60">
          {/* Left Links */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full lg:w-full xl:w-[25em] sm:ml-20 relative mb-10 sm:mb-0"
          >
            <motion.div
              id="link-container"
              className="flex flex-col gap-y-6 sm:gap-y-10 sticky top-32 h-fit text-center sm:text-left"
            >
              {[
                {
                  id: "versatile-operation-management",
                  label: "Versatile Operation Management",
                },
                { id: "human-interaction", label: "Human Interaction" },
                { id: "multi-lingual-system", label: "Multi-Lingual System" },
              ].map((link) => (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <Link
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveLink(link.id);
                      document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`text-2xl sm:text-3xl font-bold transition-colors duration-300 ${
                      activeLink === link.id ? "text-[#240247]" : "text-[#B4AEBA] hover:text-[#240247]/70"
                    }`}
                  >
                    <h1>{link.label}</h1>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side (Image + Feature Sections) */}
          <div className="flex flex-col gap-y-10">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-center"
            >
              <Image
                src={ZenoGrey}
                alt="Zeno Grey"
                width={938}
                height={555}
                className="w-full sm:w-[938px]"
              />
            </motion.div>

            {/* Feature Sections */}
            {[
              {
                id: "versatile-operation-management",
                title: "Versatile Operation Management",
                points: [
                  "Advanced AI for precise operation management.",
                  "Adapts to various environments.",
                  "Optimizes workflows and tasks.",
                  "Real-time decisions and adjustments.",
                ],
              },
              {
                id: "human-interaction",
                title: "Human Interaction",
                points: [
                  "ZENO elevates the guest experience with smart, interactive concierge service.",
                  "Offers personalized greetings, seamless navigation, and real-time assistance.",
                  "Combines advanced technology with a welcoming presence in hospitality.",
                ],
              },
              {
                id: "multi-lingual-system",
                title: "Multi-Lingual System",
                points: [
                  "Multi-lingual AI for seamless communication.",
                  "Adapts to diverse audiences.",
                  "Personalized, optimized interactions.",
                ],
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.id}
                id={feature.id}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.8, delay: 1.0 + index * 0.3 }}
                className="flex flex-col gap-y-6 sm:gap-y-7"
              >
                <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-left">
                  {feature.title}
                </h1>
                <ul className="ml-0 sm:ml-5 text-center sm:text-left">
                  {feature.points.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                      }
                      transition={{
                        duration: 0.5,
                        delay: 1.1 + index * 0.3 + i * 0.1,
                      }}
                      className="text-lg sm:text-2xl text-[#545454] font-medium"
                    >
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

const ProductMobile = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-100px", // Trigger slightly earlier for smoothness
    triggerOnce: false, // Ensures animation repeats if user scrolls away and back
  });

  const [activeLink, setActiveLink] = useState("versatile-operation-management");

  return (
    <div className="w-full lg:hidden">
      {/* 1st section */}
      <div className="mt-20 flex flex-col items-center">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col w-full items-center text-center  px-4"
          >
            <motion.h1
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="font-bold text-4xl mt-10"
            >
              A Smarter Welcome,
              <br />
              Introducing
              <span className="text-[#240247]"> ZENO</span>
            </motion.h1>

          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-32 mb-20 flex justify-center"
          >
            <Image
              src={ZenoTransparent}
              alt="ZENO"
              className="w-64 scale-150"
            />
          </motion.div>
          <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-6 px-5 w-full flex flex-col gap-y-6"
            >
              <p className="font-medium text-lg sm:text-2xl text-[#545454] leading-relaxed">
                ZENO is a smart, interactive concierge that
                <br className="hidden sm:block" />
                <span> </span> elevates the guest experience. With
                <br className="hidden sm:block" />
                <span> </span> personalized greetings, seamless navigation,
                <br className="hidden sm:block" />
                <span> </span> and real-time service assistance, ZENO blends
                <br className="hidden sm:block" />
                <span> </span> cutting-edge technology with a warm, welcoming
                <br className="hidden sm:block" />
                <span> </span> presence, redefining the future of hospitality.
              </p>
              <Link href={"#redefine"} className="mx-auto">
              <motion.button
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="rounded-3xl bg-black font-bold w-[155px] h-[44px] text-white mx-auto sm:mx-0"
              >
                Learn More
              </motion.button>
              </Link>
            </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="font-medium pt-10 sm:pt-20 mb-10 sm:mb-20 text-xl sm:text-3xl text-center px-4 sm:px-0"
        >
          With 360° perception and athletic intelligence, we solved the tough
          robotics
          <br className="hidden lg:block" />
          challenges out of the box so you can make your operations more
          resilient.
        </motion.p>
      </div>

      {/* 2nd section */}
             <div className="w-full h-[600px] relative overflow-hidden">
               <Image 
                 src={zeno_office} 
                 alt="Zoro Cafe" 
                 fill
                 className="object-cover object-center" 
               />
             </div>
      {/* 3rd section */}
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="px-5 py-20 relative flex justify-center items-center flex-col"
        id="redefine"
      >
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl px-5 font-bold w-full text-center"
        >
          Redefine Customer Service with
          <span className="text-[#240247]"> ZENO</span>
        </motion.h1>

        {/* Main Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-[#545454] px-5 w-full font-medium mt-6 text-center"
        >
          ZENO is a smart, interactive ambassador designed to enhance customer
          experiences in stores, showrooms, and corporate spaces. It guides,
          informs, and assists seamlessly, reducing wait times and human effort.
          With ZENO, your team can focus on customer engagement while ensuring
          smooth, efficient operations. Take your brand&apos;s interaction to
          the next level with ZENO.
        </motion.p>

        {/* Container for Links & Image/Features */}
        <div className="flex flex-col mt-12 sm:mt-20 sm:mx-20">
          {/* Left Links */}

          {/* Right Side (Image + Feature Sections) */}
          <div className="flex flex-col gap-y-10">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-center"
            >
              <Image
                src={ZenoGrey}
                alt="Zeno Grey"
                className="w-full"
              />
            </motion.div>

            {/* Feature Sections */}
            {[
              {
                id: "versatile-operation-management",
                title: "Versatile Operation Management",
                points: [
                  "Advanced AI for precise operation management.",
                  "Adapts to various environments.",
                  "Optimizes workflows and tasks.",
                  "Real-time decisions and adjustments.",
                ],
              },
              {
                id: "human-interaction",
                title: "Human Interaction",
                points: [
                  "ZENO elevates the guest experience with smart, interactive concierge service.",
                  "Offers personalized greetings, seamless navigation, and real-time assistance.",
                  "Combines advanced technology with a welcoming presence in hospitality.",
                ],
              },
              {
                id: "multi-lingual-system",
                title: "Multi-Lingual System",
                points: [
                  "Multi-lingual AI for seamless communication.",
                  "Adapts to diverse audiences.",
                  "Personalized, optimized interactions.",
                ],
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.id}
                id={feature.id}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.8, delay: 1.0 + index * 0.3 }}
                className="flex flex-col gap-y-6 sm:gap-y-7"
              >
                <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-left">
                  {feature.title}
                </h1>
                <ul className="ml-0 text-center sm:text-left">
                  {feature.points.map((point, i) => (
                    <motion.h1
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                      }
                      transition={{
                        duration: 0.5,
                        delay: 1.1 + index * 0.3 + i * 0.1,
                      }}
                      className="text-lg sm:text-2xl text-[#545454] font-medium"
                    >
                      {point}
                    </motion.h1>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default page;
