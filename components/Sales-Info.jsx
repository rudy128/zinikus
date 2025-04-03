import Image from "next/image";
import React from "react";
import HandGearIcon from "@/app/assets/hand-gear.svg";
import FollowUSIcon from "@/app/assets/follow-us.png";
import Facebook from "@/app/assets/facebook.svg";
import Instagram from "@/app/assets/instagram.svg";
import Youtube from "@/app/assets/youtube.svg";
import Twitter from "@/app/assets/twitter.svg";
import Linkedin from "@/app/assets/linkedin.svg";
import Link from "next/link";

// const Info = () => {
//   return (
//     <div className='h-[1060px] px-10 xl:px-32 py-32 space-y-6'>
//         <h1 className='text-4xl font-bold'>Start your journey with Zeno</h1>
//         <p className=''>Zeno is an agile mobile robot that enables safer, more efficient and more<br />
// predictable operations. Contact our expert sales team today to find the right<br />
// implementation to meet your application needs and start your journey to<br />
// a simple, scalable robotics solution.</p>
// <p className='text-[#828181]'><span className='font-semibold'>For Stretch inquiries</span>, please reach out to our <a href="" className='underline'>Stretch Sales</a> team.</p>
// <p className='text-[#828181]'><span className='font-semibold'>To contact our media team</span>, please see <a href="" className='underline'>Press Inquiries</a>.</p>
// <div className='space-y-2 border-b border-black pb-5 w-fit'>
//     <div className='flex gap-x-4 items-end'>
//     <Image src={HandGearIcon} alt='Hand-Gear-Icon' />
//     <h3 className='text-sm font-bold'>Customer Support</h3>
//     </div>
//     <div className=' grid grid-cols-2 grid-rows-2'>
//             <p className='text-[#5F5F5F] text-sm pl-[58px]'>adi@zinikus.com</p>
//             <p className='text-[#5F5F5F] text-sm pl-[29px]'>+91 9810031799</p>
//             <p className='text-[#5F5F5F] text-sm pl-[58px]'>tanay@zinikus.com</p>
//             <p className='text-[#5F5F5F] text-sm pl-[29px]'>+91 7011995400</p>
//     </div>
// </div>
// <div className='space-y-5 border-b border-black pb-5 w-fit pr-[75px]'>
//     <div className='flex gap-x-4 items-end'>
//     <Image src={FollowUSIcon} alt='Hand-Gear-Icon' />
//     <h3 className='text-sm font-bold'>Follow Us</h3>
//     </div>
//     <div className='flex px-[56px] gap-x-5'>
//         {/* <Link href="https://facebook.com">
//             <Image src={Facebook} alt='Facebook' />
//         </Link> */}
//         <Link href='https://www.instagram.com/zinikus/'>
//             <Image src={Instagram} alt='Instagram' />
//         </Link>
//         <Link href='https://www.youtube.com/@ZinikusAI'>
//             <Image src={Youtube} alt='Youtube' />
//         </Link>
//         <Link href='https://x.com/ZinikusAI'>
//             <Image src={Twitter} alt='Twitter' />
//         </Link>
//         <Link href='https://www.linkedin.com/company/zinikus-ai/'>
//             <Image src={Linkedin} alt='Linkedin' />
//         </Link>
//     </div>
// </div>
//     </div>
//   )
// }

const Info = () => {
  return (
    <>
      <section className="flex flex-col mb-10 sm:flex-row  justify-around">
        <div className="h-auto px-6 sm:px-10 xl:px-32 py-16 sm:py-32 space-y-6 text-center sm:text-left w-full sm:w-1/2">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Start your journey with Zeno
          </h1>
          <p className="text-sm sm:text-base leading-relaxed">
            Zeno is an agile mobile robot that enables safer, more efficient,
            and more predictable operations. Contact our expert sales team today
            to find the right implementation to meet your application needs and
            start your journey to a simple, scalable robotics solution.
          </p>
          <p className="text-[#828181] text-sm sm:text-base">
            <span className="font-semibold">For Stretch inquiries</span>, please
            reach out to our{" "}
            <a href="" className="underline">
              Stretch Sales
            </a>{" "}
            team.
          </p>
          <p className="text-[#828181] text-sm sm:text-base">
            <span className="font-semibold">To contact our media team</span>,
            please see{" "}
            <a href="" className="underline">
              Press Inquiries
            </a>
            .
          </p>

          {/* Customer Support Section */}
          <div className="space-y-2 border-b border-black pb-5 w-full sm:w-fit">
            <div className="flex flex-col sm:flex-row gap-x-4 items-center sm:items-end">
              <Image
                src={HandGearIcon}
                alt="Hand-Gear-Icon"
                className="w-6 h-6"
              />
              <h3 className="text-sm font-bold">Customer Support</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm text-[#5F5F5F]">
              <p className="pl-0 sm:pl-[58px]">adi@zinikus.com</p>
              <p className="pl-0 sm:pl-[29px]">+91 9810031799</p>
              <p className="pl-0 sm:pl-[58px]">tanay@zinikus.com</p>
              <p className="pl-0 sm:pl-[29px]">+91 7011995400</p>
            </div>
          </div>

          {/* Follow Us Section */}
          <div className="space-y-5 border-b border-black pb-5 w-full sm:w-fit">
            <div className="flex flex-col sm:flex-row gap-x-4 items-center sm:items-end">
              <Image
                src={FollowUSIcon}
                alt="Follow-Us-Icon"
                className="w-6 h-6"
              />
              <h3 className="text-sm font-bold">Follow Us</h3>
            </div>
            <div className="flex justify-center sm:justify-start gap-x-4">
            <Link href='https://www.instagram.com/zinikus/'>
            <Image src={Instagram} alt='Instagram' />
        </Link>
        <Link href='https://www.youtube.com/@ZinikusAI'>
            <Image src={Youtube} alt='Youtube' />
        </Link>
        <Link href='https://x.com/ZinikusAI'>
            <Image src={Twitter} alt='Twitter' />
        </Link>
        <Link href='https://www.linkedin.com/company/zinikus-ai/'>
            <Image src={Linkedin} alt='Linkedin' />
        </Link>
            </div>
          </div>
        </div>

        <form
          action=""
          className="w-full max-w-[512px] relative lg:drop-shadow-xl p-6 sm:p-8 text-black flex justify-evenly items-center flex-col bg-white top-0 sm:-top-[200px]"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-center">
            Get in touch with our Spot sales team.
          </h1>
          <div className="w-full mt-12 sm:mt-16 space-y-6 sm:space-y-8">
            <input
              type="text"
              placeholder="First Name*"
              className="border-b border-black w-full focus:outline-none focus:border-green-500"
            />
            <input
              type="text"
              placeholder="Last Name*"
              className="border-b border-black w-full focus:outline-none focus:border-green-500"
            />
            <div>
              <input
                type="email"
                placeholder="Business Email / Personal Email*"
                className="border-b border-black w-full focus:outline-none focus:border-green-500"
              />
              <p className="text-[11px]">
                To speak to a sales representative, please provide your business
                email address.
              </p>
            </div>
            <input
              type="number"
              placeholder="Phone Number*"
              className="border-b border-black w-full focus:outline-none focus:border-green-500"
            />
            <input
              type="text"
              placeholder="Company Name*"
              className="border-b border-black w-full focus:outline-none focus:border-green-500"
            />
            <input
              type="text"
              placeholder="Job Title*"
              className="border-b border-black w-full focus:outline-none focus:border-green-500"
            />
            <input
              type="text"
              placeholder="Country*"
              className="border-b border-black w-full focus:outline-none focus:border-green-500"
            />
            <input
              type="text"
              placeholder="State/Region*"
              className="border-b border-black w-full focus:outline-none focus:border-green-500"
            />
            <input
              type="text"
              placeholder="Industry*"
              className="border-b border-black w-full focus:outline-none focus:border-green-500"
            />
            <input
              type="text"
              placeholder="Use Case*"
              className="border-b border-black w-full focus:outline-none focus:border-green-500"
            />
            <textarea
              placeholder="What Are your Intended Applications?"
              className="border-b border-black w-full focus:outline-none focus:border-green-500"
              rows={6}
            />
          </div>
          <p className="text-xs sm:text-[13px] text-center mt-4">
            Zinkus is committed to your privacy. We will not share your data
            with any third parties. We use the information you provide us to
            send you product news & updates, information about events, and other
            announcements. You may unsubscribe at any time. For more details,
            check out our Privacy Policy.
          </p>
          <div className="flex items-center w-full gap-x-4 my-4">
            <input type="checkbox" className="h-5 w-5 rounded-md checkbox" />
            <p className="text-sm text-[#828181]">
              I agree to receive communications from Zinikus
            </p>
          </div>
          <button
            type="submit"
            className="border border-[#6A17BF] text-[#6A17BF] p-2 text-lg sm:text-xl rounded-full w-full"
          >
            Submit
          </button>
        </form>
      </section>
    </>
  );
};


export default Info