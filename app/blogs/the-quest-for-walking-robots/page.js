"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import React, { useEffect } from "react";
import roboticLegs from "@/app/assets/the-quest-for-walking-robots-image-2.png";
import roboticLegSchematic from "@/app/assets/the-quest-for-walking-robots-image-3.png";
import { motion } from "framer-motion";

const page = () => {
  // Animation variants for fade in up animation
  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Animation variants for paragraphs with staggered delay
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // Animation variants for scrolling sections
  const scrollVariants = {
    offscreen: {
      y: 60,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.8,
      },
    },
  };

  return (
    <>
      <Header />
      <div className="mx-4 md:mx-20 lg:mx-60 my-10 md:my-20">
        <motion.h1
          className="text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          The Quest for Walking Robots: A Step Toward Humanlike Movement!
        </motion.h1>

        {/* This is the selected section that will animate on page load */}
        <motion.div
          className="flex flex-col items-center justify-center mt-5 gap-5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="text-xl md:text-2xl" variants={fadeInUp}>
            In robotics, a common question arises: does a lifelike robot need to
            walk like a human? According to our Co-Founder, Tanay Yadav, "We
            always strive for more—more innovation, efficiency, adaptability,
            and humanity.
          </motion.p>
          <motion.p className="text-xl md:text-2xl" variants={fadeInUp}>
            Building a walking robot, however, is far from simple. The
            challenges of creating dynamic balance, efficient actuation, and
            natural locomotion make it one of the most complex areas of
            robotics.
          </motion.p>
          <motion.p className="text-xl md:text-2xl" variants={fadeInUp}>
            These difficulties also make the process extremely expensive, often
            lacking a viable business case. Even Boston Dynamics, with its
            groundbreaking walking robots, hasn&apos;t turned them into
            mass-market products.
          </motion.p>
          <motion.p className="text-xl md:text-2xl" variants={fadeInUp}>
            Still, the fascination persists. People often ask if ZENO,
            Zinikus&apos; Lobby Robot, can walk. Tanay says, "It&apos;s
            something people love to see, and they can—at events or
            demonstrations. But walking alone isn&apos;t enough. To truly amaze,
            the robot must run, jump, and move in ways that feel extraordinary.
          </motion.p>
          <motion.p className="text-xl md:text-2xl" variants={fadeInUp}>
            If it can capture just 15% of Francisco Lachowski&apos;s stride,
            Michael Jackson&apos;s dance, and Tyler Durden&apos;s charisma,
            we&apos;ll have something remarkable."
          </motion.p>
          <motion.p className="text-xl md:text-2xl" variants={fadeInUp}>
            To achieve this vision, Zinikus began working on a new humanoid
            prototype, Zenon, backed by research funding and government grants.
          </motion.p>
        </motion.div>

        {/* First scrolling section */}
        <div className="flex flex-col justify-center items-center mt-10 gap-5">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.2 }}
            variants={scrollVariants}
            className="flex justify-center items-center"
          >
            <Image
              src={roboticLegs}
              alt="Robotic Legs"
              width={733}
              height={497}
              className="h-auto"
            />
          </motion.div>

          <motion.h2
            className="text-2xl md:text-3xl w-full font-bold"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.2 }}
            variants={scrollVariants}
          >
            Challenges in Walking Robot Design
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.2 }}
            variants={scrollVariants}
          >
            At a toy store, you'll find small walking robots that seem
            impressive. However, scaling this concept to human size introduces
            new challenges. Smaller robots are easier to move, while larger ones
            need to balance weight and power efficiency. Most toy robots don't
            walk like humans—they waddle like penguins.
          </motion.p>

          <motion.p
            className="text-xl md:text-2xl"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.2 }}
            variants={scrollVariants}
          >
            Human walking is incredibly complex. Each step is essentially
            controlled falling, requiring constant adjustments for balance. A
            robot must replicate these instinctive reactions—handling uneven
            surfaces, inclines, or stumbles—all of which must be precisely
            programmed.
          </motion.p>

          <motion.p
            className="text-xl md:text-2xl"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.2 }}
            variants={scrollVariants}
          >
            Another critical factor is safety. A falling robot, weighing upwards
            of 50 kilograms, could cause serious harm. Since robots rely on
            onboard batteries for autonomy, their designs are top-heavy. The
            taller the robot, the more challenging it becomes to maintain
            stability.
          </motion.p>

          <motion.p
            className="text-xl md:text-2xl"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.2 }}
            variants={scrollVariants}
          >
            Tanay humorously notes, "Of course, there are use cases where safety
            isn't a concern—we could create a 'Terminator' biped. But I believe
            robotics should protect people, not endanger them."
          </motion.p>
        </div>

        {/* Second scrolling section */}
        <div className="flex flex-col justify-center items-center mt-10 gap-5">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.2 }}
            variants={scrollVariants}
            className="flex justify-center items-center"
          >
            <Image
              src={roboticLegSchematic}
              alt="Robotic Leg Schematic"
              width={603}
              height={730}
              className="max-w-full h-auto"
            />
          </motion.div>

          <motion.h2
            className="text-2xl md:text-3xl w-full font-bold"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.2 }}
            variants={scrollVariants}
          >
            Innovating Toward Solutions
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.2 }}
            variants={scrollVariants}
          >
            Overcoming these challenges requires cutting-edge research and
            innovative mechanics. For Zenon, Zinikus is developing a biarticular
            hip-knee linkage and advanced force sensors to keep its center of
            mass stable.
          </motion.p>

          <motion.p
            className="text-xl md:text-2xl"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.2 }}
            variants={scrollVariants}
          >
            The upper body's impact on balance is another consideration. By
            integrating Series Elastic Actuators (SEAs) with pneumatic or
            electric muscles, Zenon's joints will be fast, strong, and precise.
          </motion.p>

          <motion.p
            className="text-xl md:text-2xl"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.2 }}
            variants={scrollVariants}
          >
            Though we may be years away from robots strolling down city streets,
            the progress made in research will shape future advancements. Zenon
            is a bold step forward, demonstrating how innovative mechanics can
            bring us closer to lifelike robotic movement.
          </motion.p>

          <motion.h2
            className="text-2xl md:text-3xl w-full font-bold mt-10"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.2 }}
            variants={scrollVariants}
          >
            Join the Journey
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.2 }}
            variants={scrollVariants}
          >
            Want to be part of the innovation? Let's connect and explore how our
            humanoid robot Zenon can bring your vision to life!
          </motion.p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
