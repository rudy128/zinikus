"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { HeroProducts } from "@/components/Hero";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import ZephyrTransparent from "@/app/assets/zephyr-transparent.svg";
import ZephyrGrey from "@/app/assets/zephyr-grey.svg";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const page = () => {
  return (
    <div>
      <Header />
      <HeroProducts padding={"ml-[18%]"} />
      <Product />
      <Footer />
    </div>
  );
};

const Product = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  const [activeSection, setActiveSection] = useState("next-level-ads");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["next-level-ads", "human-attraction", "ad-analytics"];
      let current = "next-level-ads";

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="w-full">
      {/* 1st sectino */}
      <div ref={ref} className="mt-20 flex flex-col">
        <div className="flex-col gap-x-96">
          <div className="flex justify-center">
            <motion.h1
              className="font-bold text-4xl lg:text-7xl mt-10 lg:ml-10"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Your Brand&apos;s Best Ambassador.
              <br />
              Meet ZEPHYR
            </motion.h1>
          </div>
          <div className=" flex flex-col lg:flex-row items-center justify-center gap-32">
            <div>
              <motion.div
                className="mt-10 w-fit flex flex-col gap-y-10"
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <p className="font-medium text-2xl text-[#545454]">
                  ZEPHYR is an advanced robot designed to
                  <br />
                  enhance customer interactions. With AI-
                  <br />
                  powered precision, it welcomes guests,
                  <br />
                  and provides information, ensuring a
                  <br />
                  seamless and unforgettable experience
                  <br />
                  every time.
                </p>
                <motion.button
                  className="rounded-3xl bg-black font-bold w-[155px] h-[44px] text-white"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              >
                <Image
                  src={ZephyrTransparent}
                  alt=""
                  width={400}
                  height={716}
                  className="-mt-20"
                />
              </motion.div>
            </div>
          </div>
        </div>

        <motion.p
          className="font-medium pt-10 mb-20 text-3xl flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
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
      <section className="px-6 md:px-10 py-20 relative flex justify-center items-center flex-col">
        <motion.h1
          className="text-3xl md:text-5xl px-4 md:px-60 font-bold w-full text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Redefine door-to-door with ZEPHYR
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-[#545454] px-4 md:px-60 w-full font-medium mt-6 text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          ZEPHYR enhances customer experiences in stores, showrooms, and
          corporate spaces. As a smart, interactive ambassador, it guides,
          informs, and assists seamlessly, reducing wait times and human effort.
          ZEPHYR helps your team focus on customer engagement while ensuring
          smooth operations.
        </motion.p>

        <div className="flex flex-col md:flex-row mt-16 md:mt-20 md:ml-40 md:mx-60 items-center md:items-start">
          {/* Left Sidebar Navigation */}
          <div
            id="scroll-container"
            className="w-full md:w-[25em] md:ml-20 relative mb-10 md:mb-0 text-center md:text-left"
          >
            <div
              id="link-container"
              className="flex md:flex-col gap-y-6 md:gap-y-10 md:sticky top-32 h-fit"
            >
              {["next-level-ads", "human-attraction", "ad-analytics"].map(
                (section) => (
                  <Link key={section} href={`#${section}`}>
                    <motion.h1
                      className={`text-xl md:text-3xl font-bold ${
                        activeSection === section
                          ? "text-[#240247]"
                          : "text-[#B4AEBA]"
                      }`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {section
                        .replace("-", " ")
                        .replace(/\b\w/g, (c) => c.toUpperCase())}
                    </motion.h1>
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Right Content Section */}
          <div className="flex flex-col gap-y-8 md:gap-y-10 items-center md:items-start">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full flex justify-center md:justify-start"
            >
              <Image
                src={ZephyrGrey}
                alt="Zephyr"
                width={300}
                height={180}
                className="md:w-[938px] md:h-[555px]"
              />
            </motion.div>

            {/* Feature Sections */}
            {[
              {
                id: "next-level-ads",
                title: "Next-Level Ads",
                points: [
                  "Personalized, interactive ads powered by ZEPHYR's AI.",
                  "Seamless integration into any space.",
                  "Optimized ad placement and timing.",
                  "Boosts brand visibility and customer engagement.",
                ],
              },
              {
                id: "human-attraction",
                title: "Human Attraction",
                points: [
                  "ZEPHYR is an advanced robot that enhances customer interactions.",
                  "Powered by AI, it greets guests and provides information.",
                  "Ensures a seamless and unforgettable experience every time.",
                ],
              },
              {
                id: "ad-analytics",
                title: "Ad Analytics",
                points: [
                  "Tracks and analyzes customer interactions.",
                  "Provides real-time insights to optimize strategies.",
                  "Smart data collection and analysis for better engagement.",
                  "Measures campaign success with precision.",
                ],
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.id}
                id={feature.id}
                className="flex flex-col gap-y-4 md:gap-y-7 text-center md:text-left"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <h1 className="text-2xl md:text-4xl font-bold">
                  {feature.title}
                </h1>
                <ul className="ml-5 space-y-2">
                  {feature.points.map((point, i) => (
                    <li
                      key={i}
                      className="text-lg md:text-2xl text-[#545454] font-medium"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
