"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { HeroProducts } from "@/components/Hero";
import Image from "next/image";
import React from "react";
import ZenoTransparent from "@/app/assets/zeno_transparent.svg";
import Link from "next/link";
import ZenoGrey from "@/app/assets/zeno-grey.svg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const page = () => {
  return (
    <div>
      <Header />
      <HeroProducts padding={"ml-[24%]"} />
      <Product />
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

  return (
    <div className="w-full">
      {/* 1st section */}
      <div className="mt-20 flex flex-col">
        <div className="flex ml-28">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col w-3/10 items-center"
          >
            <motion.h1
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="font-bold text-7xl mt-10 pl-[330px]"
            >
              A Smarter Welcome,
              <br />
              Introducing ZENO
            </motion.h1>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-10 w-fit flex flex-col ml-40 gap-y-10"
            >
              <p className="font-medium text-2xl text-[#545454]">
                ZENO is a smart, interactive concierge that
                <br />
                elevates the guest experience. With
                <br />
                personalized greetings, seamless navigation,
                <br />
                and real-time service assistance, ZENO blends
                <br />
                cutting-edge technology with a warm, welcoming
                <br />
                presence, redefining the future of hospitality.
              </p>

              <motion.button
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="rounded-3xl bg-black font-bold w-[155px] h-[44px] text-white"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Image src={ZenoTransparent} alt="ZENO" width={366} height={716} />
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="font-medium pt-20 mb-20 text-3xl text-center"
        >
          With 360° perception and athletic intelligence, we solved the tough
          robotics
          <br />
          challenges out of the box so you can make your operations more
          resilient.
        </motion.p>
      </div>
      {/* 2nd section */}
      <div className="w-full bg-black h-[806px]" />
      {/* 3rd section */}
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="px-10 py-20 relative flex justify-center items-center flex-col"
      >
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl px-60 font-bold w-full text-center"
        >
          Redefine Customer Service with ZENO
        </motion.h1>

        {/* Main Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl text-[#545454] px-60 w-full font-medium mt-8 text-center"
        >
          ZENO is a smart, interactive ambassador designed to enhance customer
          experiences in stores, showrooms, and corporate spaces. It guides,
          informs, and assists seamlessly, reducing wait times and human effort.
          With ZENO, your team can focus on customer engagement while ensuring
          smooth, efficient operations. Take your brand&apos;s interaction to
          the next level with ZENO.
        </motion.p>

        {/* Container for Links & Image/Features */}
        <div className="flex mt-20 ml-40 mx-60">
          {/* Left Links */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-[25em] ml-20 relative"
          >
            <motion.div
              id="link-container"
              className="flex flex-col gap-y-10 sticky top-32 h-fit"
            >
              {[
                {
                  id: "versatile-operation-management",
                  label: "Versatile Operation Management",
                },
                { id: "human-interaction", label: "Human Interaction" },
                { id: "multi-lingual-system", label: "Multi-Lingual System" },
              ].map((link, index) => (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.2 }}
                >
                  <Link
                    href={`#${link.id}`}
                    className={`text-3xl font-bold ${
                      index === 0 ? "text-[#240247]" : "text-[#B4AEBA]"
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
            >
              <Image src={ZenoGrey} alt="Zeno Grey" width={938} height={555} />
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
                className="flex flex-col gap-y-7"
              >
                <h1 className="text-4xl font-bold">{feature.title}</h1>
                <ul className="ml-5">
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
                      className="text-2xl text-[#545454] mr-16 font-medium"
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

export default page;
