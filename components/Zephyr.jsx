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
        <motion.h1
          className="font-bold text-7xl mt-10 pl-[330px]"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Your Brand&apos;s Best Ambassador.
          <br />
          Meet ZEPHYR
        </motion.h1>

        <div className="flex gap-x-96">
          <motion.div
            className="mt-10 w-fit flex flex-col ml-[335px] gap-y-10"
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

        <motion.p
          className="font-medium pt-10 mb-20 text-3xl text-center"
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
      <section className="px-10 py-20 relative flex justify-center items-center flex-col">
        <motion.h1
          className="text-5xl px-60 font-bold w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Redefine door-to-door with ZEPHYR
        </motion.h1>

        <motion.p
          className="text-2xl text-[#545454] px-60 w-full font-medium mt-8"
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

        <div className="flex mt-20 ml-40 mx-60">
          {/* Left Sidebar Navigation */}
          <div id="scroll-container" className="w-[25em] ml-20 relative">
            <div
              id="link-container"
              className="flex flex-col gap-y-10 sticky top-32 h-fit"
            >
              {["next-level-ads", "human-attraction", "ad-analytics"].map(
                (section) => (
                  <Link key={section} href={`#${section}`}>
                    <motion.h1
                      className={`text-3xl font-bold ${
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
          <div className="flex flex-col gap-y-10">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image src={ZephyrGrey} alt="Zephyr" width={938} height={555} />
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
                className="flex flex-col gap-y-7"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <h1 className="text-4xl font-bold">{feature.title}</h1>
                <ul className="ml-5">
                  {feature.points.map((point, i) => (
                    <li
                      key={i}
                      className="text-2xl text-[#545454] mr-16 font-medium"
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
