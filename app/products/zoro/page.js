"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { HeroProducts } from "@/components/Hero";
import Image from "next/image";
import React from "react";
import ZoroTransparent from "@/app/assets/zoro_transparent.svg";
import ZoroGrey from "@/app/assets/zoro-grey.svg";
import Link from "next/link";
import { useState } from "react";
import zoro_cafe from "@/app/assets/zoro-cafe.jpeg";
import ZenoTransparent from "@/app/assets/zeno.png";
import ZenoGrey from "@/app/assets/zeno-grey.svg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import zeno_office from '@/app/assets/zeno-office.jpeg';
// import SectionComponent from '@/components/TS'

const page = () => {
  return (
    <div>
      <Header />
      <HeroProducts padding={'lg:ml-[3%]'} />
      <ProductZeno />
      <ProductMobile />
      <Footer />
    </div>
  );
};

// const Product = () => {
//   const [activeSection, setActiveSection] = useState("#smart-catering");

//   const handleScroll = (section) => {
//     setActiveSection(section);
//   };

//   return (
//     <div className="w-full hidden lg:block">
//       {/* 1st section */}
//       <div className="mt-20 flex flex-col items-center px-5 md:px-10">
//         {/* Main Content */}
//         <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-5 mx-5 sm:mx-[5%] xl:mx-[15%]">
//           {/* Text Section */}
//           <motion.div
//             className="flex flex-col w-full lg:w-3/10 items-center lg:items-start"
//             whileInView={{ opacity: 1, x: 0 }}
//             initial={{ opacity: 0, x: -50 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: false, amount: 0.1 }}
//           >
//             <h1 className="font-bold text-5xl md:text-7xl mt-10 text-center lg:text-left">
//               Your partner in service.
//               <br />
//               Meet ZORO.
//             </h1>

//             <motion.div
//               className="mt-8 md:mt-10 w-fit flex flex-col gap-y-6 md:gap-y-10"
//               whileInView={{ opacity: 1, y: 0 }}
//               initial={{ opacity: 0, y: 50 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               viewport={{ once: false, amount: 0.2 }}
//             >
//               <p className="font-medium text-lg md:text-2xl text-[#545454] leading-relaxed text-center lg:text-left">
//                 ZORO is an intelligent catering and food delivery robot<br/>designed
//                 for seamless, efficient, and contactless<br/>service. Whether in
//                 restaurants, hotels, or corporate<br/>spaces, it delivers meals with
//                 speed, precision,<br/>and reliability, transforming the food service
//                 experience.
//               </p>

//               {/* Animated Button */}
//               <Link href="#redefine">
//               <motion.button
//                 className="rounded-3xl w-44 bg-black font-bold px-6 py-3 text-white transition-transform duration-300 hover:scale-105"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                   Learn More
//               </motion.button>
//                 </Link>
//             </motion.div>
//           </motion.div>

//           {/* Image Section */}
//           <motion.div
//             whileInView={{ opacity: 1, x: 0 }}
//             initial={{ opacity: 0, x: 50 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: false, amount: 0.2 }}
//           >
//             <Image
//               src={ZoroTransparent}
//               alt="Zoro Robot"
//               width={504}
//               height={864}
//               className="max-w-full w-auto"
//             />
//           </motion.div>
//         </div>

//         {/* Footer Text */}
//         <motion.p
//           className="font-medium text-lg md:text-3xl text-center mt-12 md:mt-16 px-5 mb-10"
//           whileInView={{ opacity: 1, y: 0 }}
//           initial={{ opacity: 0, y: 30 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           viewport={{ once: false, amount: 0.2 }}
//         >
//           With 360° perception and athletic intelligence, we solved the tough
//           robotics challenges out of the box so you can make your operations
//           more resilient.
//         </motion.p>
//       </div>

//       {/* 2nd section */}
//       <div className="w-full h-[600px] relative overflow-hidden">
//         <Image 
//           src={zeno_office} 
//           alt="Zoro Cafe" 
//           fill
//           className="object-cover object-center" 
//         />
//       </div>
//       {/* 3rd section */}
//       <section id="redefine" className="px-6 md:px-10 py-20 flex justify-center items-center flex-col relative">
//         {/* Heading */}
//         <motion.h1
//           className="text-3xl md:text-5xl md:px-60 font-bold text-center w-full"
//           whileInView={{ opacity: 1, y: 0 }}
//           initial={{ opacity: 0, y: -20 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: false, amount: 0.2 }}
//         >
//           Redefine your day-to-day with{" "}
//           <span className="text-[#240247]">ZORO.</span>
//         </motion.h1>

//         {/* Subtext */}
//         <motion.p
//           className="text-lg md:text-2xl text-[#545454] md:px-60 w-full font-medium text-center mt-6 md:mt-8"
//           whileInView={{ opacity: 1, y: 0 }}
//           initial={{ opacity: 0, y: 20 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           viewport={{ once: false, amount: 0.2 }}
//         >
//           ZORO helps your team focus on exceptional service by streamlining food
//           delivery and catering. It ensures seamless meal distribution,
//           optimized workflow, and enhanced customer experience while reducing
//           wait times and effort in high-demand environments.
//         </motion.p>

//         {/* Main Content */}
//         <div className="flex flex-col md:flex-row mt-16 md:mt-20 justify-center items-start gap-10 md:gap-20">
//           {/* Sidebar Links */}
//           <div
//             id="scroll-container"
//             className="w-full md:w-[25em] relative text-center md:text-left"
//           >
//             <div
//               id="link-container"
//               className="flex md:flex-col gap-6 md:gap-y-10 sticky md:top-32 h-fit justify-center md:justify-start"
//             >
//               {[
//                 { id: "#smart-catering", label: "Smart Catering" },
//                 { id: "#human-interaction", label: "Human Interaction" },
//                 { id: "#smart-routing", label: "Smart Routing" },
//               ].map((item) => (
//                 <Link key={item.id} href={item.id} scroll={false}>
//                   <motion.h1
//                     className={`text-xl md:text-3xl font-bold transition-colors ${
//                       activeSection === item.id
//                         ? "text-[#240247]"
//                         : "text-[#B4AEBA]"
//                     }`}
//                     whileHover={{ scale: 1.05 }}
//                     onClick={() => handleScroll(item.id)}
//                   >
//                     {item.label}
//                   </motion.h1>
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Feature Sections */}
//           <div className="flex flex-col gap-y-10 items-center md:items-start">
//             {/* Image */}
//             <motion.div
//               whileInView={{ opacity: 1, scale: 1 }}
//               initial={{ opacity: 0, scale: 0.95 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: false, amount: 0.3 }}
//             >
//               <Image
//                 src={ZoroGrey}
//                 alt="ZORO Robot"
//                 width={320}
//                 height={200}
//                 className="w-full md:w-[938px] h-auto"
//               />
//             </motion.div>

//             {/* Feature Sections */}
//             {[
//               {
//                 id: "smart-catering",
//                 title: "Smart Catering",
//                 features: [
//                   "ZORO's smart catering system streamlines food service.",
//                   "Ensures timely deliveries and seamless coordination.",
//                   "Features autonomous navigation and intelligent scheduling.",
//                   "Optimizes workflow in restaurants, hotels, and events.",
//                 ],
//               },
//               {
//                 id: "human-interaction",
//                 title: "Human Interaction",
//                 features: [
//                   "ZORO elevates the guest experience with smart, interactive concierge service.",
//                   "Offers personalized greetings, seamless navigation, and real-time assistance.",
//                   "Combines advanced technology with a welcoming presence in hospitality.",
//                 ],
//               },
//               {
//                 id: "smart-routing",
//                 title: "Smart Routing",
//                 features: [
//                   "ZORO is an intelligent catering and food delivery robot.",
//                   "Provides seamless, efficient, and contactless service.",
//                   "Delivers meals with speed, precision, and reliability.",
//                 ],
//               },
//             ].map((section) => (
//               <motion.div
//                 key={section.id}
//                 id={section.id}
//                 className="flex flex-col gap-y-4 md:gap-y-7 text-center md:text-left"
//                 whileInView={{ opacity: 1, y: 0 }}
//                 initial={{ opacity: 0, y: 30 }}
//                 transition={{ duration: 0.6 }}
//                 viewport={{ once: false, amount: 0.3 }}
//               >
//                 <h1 className="text-2xl md:text-4xl font-bold">
//                   {section.title}
//                 </h1>
//                 <ul className="ml-0 md:ml-5">
//                   {section.features.map((feature, index) => (
//                     <li
//                       key={index}
//                       className="text-lg md:text-2xl text-[#545454] font-medium"
//                     >
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

const ProductMobile = () => {
  return (
    <div className="w-full lg:hidden">
      {/* 1st section */}
      <div className="mt-20 flex flex-col items-center px-5">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-5 mx-5 sm:mx-[5%]">
          {/* Text Section */}
          <motion.div
            className="flex flex-col w-full lg:w-3/10 items-center lg:items-start"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.1 }}
          >
            <h1 className="font-bold text-4xl md:text-5xl text-center lg:text-left">
              Your partner in service.
              <br />
              Meet ZORO.
            </h1>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <Image
                src={ZoroTransparent}
                alt="Zoro Robot"
                // width={504}
                // height={864}
                className="max-w-full w-auto"
              />
            </motion.div>
            <motion.div
              className="w-fit flex flex-col gap-y-6"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <p className="font-medium text-lg md:text-xl text-[#545454] leading-relaxed text-center lg:text-left">
                ZORO is an intelligent catering and food delivery robot<br/>designed
                for seamless, efficient, and contactless<br/>service. Whether in
                restaurants, hotels, or corporate<br/>spaces, it delivers meals with
                speed, precision,<br/>and reliability, transforming the food service
                experience.
              </p>

              {/* Animated Button */}
              {/* <Link href="#redefine"> */}
              <motion.button
                className="rounded-3xl w-44 bg-black font-bold self-center px-6 py-3 text-white transition-transform duration-300 hover:scale-105"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  // Find the relevant section based on which component is active
                  const targetSection = document.getElementById('redefine2');
                  if (targetSection) {
                    targetSection.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }}
              >
                  Learn More
              </motion.button>
                {/* </Link> */}
            </motion.div>
          </motion.div>

          {/* Image Section */}
        </div>

        {/* Footer Text */}
        <motion.p
          className="font-medium text-lg md:text-2xl text-center mt-12 md:mt-16 px-5 mb-10"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          With 360° perception and athletic intelligence, we solved the tough
          robotics challenges out of the box so you can make your operations
          more resilient.
        </motion.p>
      </div>

      {/* 2nd section */}
      <div className="w-full h-[600px] relative overflow-hidden">
        <Image 
          src={zoro_cafe} 
          alt="Zoro Cafe" 
          fill
          className="object-cover object-center" 
        />
      </div>
      {/* 3rd section */}
      <section id="redefine2" className="px-6 md:px-10 py-20 flex justify-center items-center flex-col relative">
        {/* Heading */}
        <motion.h1
          className="text-3xl md:text-5xl md:px-20 font-bold text-center w-full"
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
          className="text-lg md:text-2xl text-[#545454] md:px-20 w-full font-medium text-center mt-6 md:mt-8"
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
        <div className="flex flex-col md:flex-row mt-16 md:mt-20 justify-center items-start gap-10 md:gap-20">
          {/* Sidebar Links */}
          {/* <div
            id="scroll-container"
            className="w-full md:w-[25em] relative text-center md:text-left"
          >
            <div
              id="link-container"
              className="flex md:flex-col gap-6 md:gap-y-10 sticky md:top-32 h-fit justify-center md:justify-start"
            >
              {[
                { id: "#smart-catering", label: "Smart Catering" },
                { id: "#human-interaction", label: "Human Interaction" },
                { id: "#smart-routing", label: "Smart Routing" },
              ].map((item) => (
                <Link key={item.id} href={item.id} scroll={false}>
                  <motion.h1
                    className={`text-xl md:text-3xl font-bold transition-colors ${
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
          </div> */}

          {/* Feature Sections */}
          <div className="flex flex-col gap-y-10 items-center md:items-start">
            {/* Image */}
            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <Image
                src={ZoroGrey}
                alt="ZORO Robot"
                width={320}
                height={200}
                className="w-full md:w-[938px] h-auto"
              />
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
                className="flex flex-col gap-y-4 md:gap-y-7 text-center md:text-left"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <h1 className="text-2xl md:text-4xl font-bold">
                  {section.title}
                </h1>
                <ul className="ml-0 md:ml-5">
                  {section.features.map((feature, index) => (
                    <h3
                      key={index}
                      className="text-md md:text-2xl text-[#545454] font-medium"
                    >
                      {feature}
                    </h3>
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

const ProductZeno = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-100px", // Trigger slightly earlier for smoothness
    triggerOnce: false, // Ensures animation repeats if user scrolls away and back
  });

  const [activeLink, setActiveLink] = useState("smart-catering");

  return (
    <div className="w-full hidden lg:block">
      {/* 1st section */}
      <div className="mt-20 flex flex-col items-center">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-5 mx-5 sm:mx-[5%] xl:mx-[15%]">
          {/* Text Section */}
          <motion.div
            className="flex flex-col w-full lg:w-3/10 items-center lg:items-start"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.1 }}
          >
            <h1 className="font-bold text-5xl md:text-7xl mt-10 text-center lg:text-left">
              Your partner in service.
              <br />
              Meet <span className="text-[#240247]"> ZORO.</span>
            </h1>

            <motion.div
              className="mt-8 md:mt-10 w-fit flex flex-col gap-y-6 md:gap-y-10"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <p className="font-medium text-lg md:text-2xl text-[#545454] leading-relaxed text-center lg:text-left">
                ZORO is an intelligent catering and food delivery robot<br/>designed
                for seamless, efficient, and contactless<br/>service. Whether in
                restaurants, hotels, or corporate<br/>spaces, it delivers meals with
                speed, precision,<br/>and reliability, transforming the food service
                experience.
              </p>

              {/* Animated Button */}
              <Link href="#redefine">
              <motion.button
                className="rounded-3xl w-44 bg-black font-bold px-6 py-3 text-white transition-transform duration-300 hover:scale-105"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                  Learn More
              </motion.button>
                </Link>
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
              className="max-w-full w-auto"
            />
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
          <br className="hidden sm:block" />
          challenges out of the box so you can make your operations more
          resilient.
        </motion.p>
      </div>

      {/* 2nd section */}
      <div className="w-full h-[600px] relative overflow-hidden">
        <Image 
          src={zoro_cafe} 
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
        className="px-5 sm:px-10 py-20 relative flex justify-center items-center flex-col"
        id="redefine"
      >
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-5xl px-5 sm:px-60 font-bold w-full text-center"
        >
          Redefine your day-to-day with{" "}
          <span className="text-[#240247]">ZORO.</span>
        </motion.h1>

        {/* Main Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-2xl text-[#545454] px-5 sm:px-60 w-full font-medium mt-6 sm:mt-8 text-center"
        >
          ZORO helps your team focus on exceptional service by streamlining food
          delivery and catering. It ensures seamless meal distribution,
          optimized workflow, and enhanced customer experience while reducing
          wait times and effort in high-demand environments.
        </motion.p>

        {/* Container for Links & Image/Features */}
        <div className="flex flex-col sm:flex-row mt-12 w-11/12 sm:mt-20 sm:ml-40 sm:mx-60">
          {/* Left Links */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full lg:w-[25em] sm:ml-20 relative mb-10 sm:mb-0"
          >
            <motion.div
              id="link-container"
              className="flex flex-col gap-y-6 sm:gap-y-10 sticky top-32 h-fit text-center sm:text-left"
            >
              {[
                { id: "smart-catering", label: "Smart Catering" },
                { id: "human-interaction", label: "Human Interaction" },
                { id: "smart-routing", label: "Smart Routing" },
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
                src={ZoroGrey}
                alt="ZORO Robot"
                width={320}
                height={200}
                className="w-full md:w-[938px] h-auto"
              />
            </motion.div>

            {/* Feature Sections */}
            {[
              {
                id: "smart-catering",
                title: "Smart Catering",
                points: [
                  "ZORO's smart catering system streamlines food service.",
                  "Ensures timely deliveries and seamless coordination.",
                  "Features autonomous navigation and intelligent scheduling.",
                  "Optimizes workflow in restaurants, hotels, and events.",
                ],
              },
              {
                id: "human-interaction",
                title: "Human Interaction",
                points: [
                  "ZORO elevates the guest experience with smart, interactive concierge service.",
                  "Offers personalized greetings, seamless navigation, and real-time assistance.",
                  "Combines advanced technology with a welcoming presence in hospitality.",
                ],
              },
              {
                id: "smart-routing",
                title: "Smart Routing",
                points: [
                  "ZORO is an intelligent catering and food delivery robot.",
                  "Provides seamless, efficient, and contactless service.",
                  "Delivers meals with speed, precision, and reliability.",
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

export default page;

