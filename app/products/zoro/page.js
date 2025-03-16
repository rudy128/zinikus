"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { HeroProducts } from "@/components/Hero";
import Image from "next/image";
import React from "react";
import ZoroTransparent from "@/app/assets/zoro_transparent.svg";
import ZoroGrey from "@/app/assets/zoro-grey.svg";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
// import SectionComponent from '@/components/TS'

const page = () => {
  return (
    <div>
      <Header />
      <HeroProducts padding={"ml-[23.5%]"} />
      <Product />
      <Footer />
    </div>
  );
};

const Product = () => {
  const [activeSection, setActiveSection] = useState("#smart-catering");

  const handleScroll = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="w-full">
      {/* 1st section */}
      <div className="mt-20 flex flex-col items-center">
        {/* Main Content */}
        <div className="flex flex-wrap items-center justify-center ml-28">
          {/* Text Section */}
          <motion.div
            className="flex flex-col w-3/10 items-start"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <h1 className="font-bold text-7xl mt-10 pl-10">
              Your partner in service.
              <br />
              Meet <span className="text-[#240247]">ZORO.</span>
            </h1>

            <motion.div
              className="mt-10 w-fit flex flex-col ml-2 gap-y-10"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <p className="font-medium text-2xl text-[#545454] leading-relaxed">
                ZORO is an intelligent catering and food <br />
                delivery robot designed for seamless, <br />
                efficient, and contactless service. Whether in <br />
                restaurants, hotels, or corporate spaces, it <br />
                delivers meals with speed, precision, and <br />
                reliability, transforming the food service <br />
                experience.
              </p>

              {/* Animated Button */}
              <motion.button
                className="rounded-3xl bg-black font-bold w-[155px] h-[44px] text-white transition-transform duration-300 hover:scale-105"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <Image
              src={ZoroTransparent}
              alt="Zoro Robot"
              width={504}
              height={864}
            />
          </motion.div>
        </div>

        {/* Footer Text */}
        <motion.p
          className="font-medium mb-20 text-3xl text-center mt-16 px-10"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          With 360° perception and athletic intelligence, we solved the tough
          robotics <br />
          challenges out of the box so you can make your operations more
          resilient.
        </motion.p>
      </div>

      {/* 2nd section */}
      <div className="w-full bg-black h-[806px]" />
      {/* 3rd section */}
      <section className="px-10 py-20 flex justify-center items-center flex-col relative">
        {/* Heading */}
        <motion.h1
          className="text-5xl px-60 font-bold text-center w-full"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          Redefine your day-to-day with{" "}
          <span className="text-[#240247]">ZORO.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-2xl text-[#545454] px-60 w-full font-medium text-center mt-8"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          ZORO helps your team focus on exceptional service by streamlining food
          delivery and catering. It ensures seamless meal distribution,
          optimized workflow, and enhanced customer experience while reducing
          wait times and effort in high-demand environments.
        </motion.p>

        {/* Main Content */}
        <div className="flex flex-wrap mt-20 justify-center items-start gap-20">
          {/* Sidebar Links */}
          <div id="scroll-container" className="w-[25em] relative">
            <div
              id="link-container"
              className="flex flex-col gap-y-10 sticky top-32 h-fit"
            >
              {[
                { id: "#smart-catering", label: "Smart Catering" },
                { id: "#human-interaction", label: "Human Interaction" },
                { id: "#smart-routing", label: "Smart Routing" },
              ].map((item) => (
                <Link key={item.id} href={item.id} scroll={false}>
                  <motion.h1
                    className={`text-3xl font-bold transition-colors ${
                      activeSection === item.id
                        ? "text-[#240247]"
                        : "text-[#B4AEBA]"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => handleScroll(item.id)}
                  >
                    {item.label}
                  </motion.h1>
                </Link>
              ))}
            </div>
          </div>

          {/* Feature Sections */}
          <div className="flex flex-col gap-y-10">
            {/* Image */}
            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <Image src={ZoroGrey} alt="ZORO Robot" width={938} height={555} />
            </motion.div>

            {/* Feature Sections */}
            {[
              {
                id: "smart-catering",
                title: "Smart Catering",
                features: [
                  "ZORO's smart catering system streamlines food service.",
                  "Ensures timely deliveries and seamless coordination.",
                  "Features autonomous navigation and intelligent scheduling.",
                  "Optimizes workflow in restaurants, hotels, and events.",
                ],
              },
              {
                id: "human-interaction",
                title: "Human Interaction",
                features: [
                  "ZORO elevates the guest experience with smart, interactive concierge service.",
                  "Offers personalized greetings, seamless navigation, and real-time assistance.",
                  "Combines advanced technology with a welcoming presence in hospitality.",
                ],
              },
              {
                id: "smart-routing",
                title: "Smart Routing",
                features: [
                  "ZORO is an intelligent catering and food delivery robot.",
                  "Provides seamless, efficient, and contactless service.",
                  "Delivers meals with speed, precision, and reliability.",
                ],
              },
            ].map((section) => (
              <motion.div
                key={section.id}
                id={section.id}
                className="flex flex-col gap-y-7"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <h1 className="text-4xl font-bold">{section.title}</h1>
                <ul className="ml-5">
                  {section.features.map((feature, index) => (
                    <li
                      key={index}
                      className="text-2xl text-[#545454] font-medium"
                    >
                      {feature}
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
