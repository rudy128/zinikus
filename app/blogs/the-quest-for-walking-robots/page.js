import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import React from "react";
import roboticLegs from "@/app/assets/the-quest-for-walking-robots-image-2.png";
import roboticLegSchematic from "@/app/assets/the-quest-for-walking-robots-image-3.png";

const page = () => {
  return (
    <>
      <Header />
      <div className="mx-60 my-20">
        <h1 className="text-4xl font-bold">
          The Quest for Walking Robots: A Step Toward Humanlike Movement!
        </h1>
        <div className="flex flex-col items-center justify-center mt-5 gap-5">
          <p className="text-2xl">
            In robotics, a common question arises: does a lifelike robot need to
            walk like a human? According to our Co-Founder, Tanay Yadav, “We
            always strive for more—more innovation, efficiency, adaptability,
            and humanity.
          </p>
          <p className="text-2xl">
            Building a walking robot, however, is far from simple. The
            challenges of creating dynamic balance, efficient actuation, and
            natural locomotion make it one of the most complex areas of
            robotics.
          </p>
          <p className="text-2xl">
            These difficulties also make the process extremely expensive, often
            lacking a viable business case. Even Boston Dynamics, with its
            groundbreaking walking robots, hasn&apos;t turned them into
            mass-market products.
          </p>
          <p className="text-2xl">
            Still, the fascination persists. People often ask if ZENO,
            Zinikus&apos; Lobby Robot, can walk. Tanay says, “It&apos;s
            something people love to see, and they can—at events or
            demonstrations. But walking alone isn&apos;t enough. To truly amaze,
            the robot must run, jump, and move in ways that feel extraordinary.
          </p>
          <p className="text-2xl">
            If it can capture just 15% of Francisco Lachowski&apos;s stride,
            Michael Jackson&apos;s dance, and Tyler Durden&apos;s charisma,
            we&apos;ll have something remarkable.”
          </p>
          <p className="text-2xl">
            To achieve this vision, Zinikus began working on a new humanoid
            prototype, Zenon, backed by research funding and government grants.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center mt-10 gap-5">
          <Image src={roboticLegs} alt="" width={733} height={497} />
          <h2 className="text-3xl w-full font-bold">
            Challenges in Walking Robot Design
          </h2>
          <p className="text-2xl">
            At a toy store, you’ll find small walking robots that seem
            impressive. However, scaling this concept to human size introduces
            new challenges. Smaller robots are easier to move, while larger ones
            need to balance weight and power efficiency. Most toy robots don’t
            walk like humans—they waddle like penguins.
          </p>
          <p className="text-2xl">
            Human walking is incredibly complex. Each step is essentially
            controlled falling, requiring constant adjustments for balance. A
            robot must replicate these instinctive reactions—handling uneven
            surfaces, inclines, or stumbles—all of which must be precisely
            programmed.
          </p>
          <p className="text-2xl">
            Another critical factor is safety. A falling robot, weighing upwards
            of 50 kilograms, could cause serious harm. Since robots rely on
            onboard batteries for autonomy, their designs are top-heavy. The
            taller the robot, the more challenging it becomes to maintain
            stability.
          </p>
          <p className="text-2xl">
            Tanay humorously notes, “Of course, there are use cases where safety
            isn’t a concern—we could create a ‘Terminator’ biped. But I believe
            robotics should protect people, not endanger them.”
          </p>
        </div>
        <div className="flex flex-col justify-center items-center mt-10 gap-5">
          <Image src={roboticLegSchematic} alt="" width={603} height={730} />
          <h2 className="text-3xl w-full font-bold">
            Innovating Toward Solutions
          </h2>
          <p className="text-2xl">
            Overcoming these challenges requires cutting-edge research and
            innovative mechanics. For Zenon, Zinikus is developing a biarticular
            hip-knee linkage and advanced force sensors to keep its center of
            mass stable.
          </p>
          <p className="text-2xl">
            The upper body’s impact on balance is another consideration. By
            integrating Series Elastic Actuators (SEAs) with pneumatic or
            electric muscles, Zenon’s joints will be fast, strong, and precise.
          </p>
          <p className="text-2xl">
            Though we may be years away from robots strolling down city streets,
            the progress made in research will shape future advancements. Zenon
            is a bold step forward, demonstrating how innovative mechanics can
            bring us closer to lifelike robotic movement.
          </p>
          <h2 className="text-3xl w-full font-bold mt-10">Join the Journey</h2>
          <p className="text-2xl">
            Want to be part of the innovation? Let’s connect and explore how our
            humanoid robot Zenon can bring your vision to life!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
