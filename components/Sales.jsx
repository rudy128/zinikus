import React from 'react'
import { Videos } from './Hero'

const Sales = () => {
  return (
    <div className='h-[512px] relative text-white'>
        <div className='absolute w-full h-full overflow-hidden'>
        <Videos src={'/video2.mp4'} />
        </div>
        {/* <div className='flex justify-evenly items-center w-full h-full'> */}

        {/* <h1 className='text-6xl font-bold'>Contact Sales</h1>
        <SalesForm /> */}
        {/* </div> */}
    </div>
  )
}

// const SalesForm = () => {
//     return (
//         <form action="" className='w-[512px] relative drop-shadow-xl -bottom-[500px] p-8 bg-white text-black flex justify-evenly items-center flex-col'>
//             <h1 className='text-4xl font-bold'>Get in touch with our Spot sales team.</h1>
//             <div className='w-full mt-16 space-y-8'>
//                 <input type="text" placeholder='First Name*' className='border-b border-black w-full focus:outline-none focus:border-green-500 focus:border-b' />
//                 <input type="text" placeholder='Last Name*' className='border-b border-black w-full focus:outline-none focus:border-green-500 focus:border-b' />
//                 <div>
//                     <input type="email" placeholder='Business Email / Personal Email*' className='border-b border-black w-full focus:outline-none focus:border-green-500 focus:border-b' />
//                     <p className='text-[11px]'>To speak to a sales representative, please provide your business email address.</p>
//                 </div>
//                 <input type="number" placeholder='Phone Number*' className='border-b border-black w-full focus:outline-none focus:border-green-500 focus:border-b' />
//                 <input type="text" placeholder='Company Name*' className='border-b border-black w-full focus:outline-none focus:border-green-500 focus:border-b' />
//                 <input type="text" placeholder='Job Title*' className='border-b border-black w-full focus:outline-none focus:border-green-500 focus:border-b' />
//                 <input type="text" placeholder='Country*' className='border-b border-black w-full focus:outline-none focus:border-green-500 focus:border-b' />
//                 <input type="text" placeholder='State/Religion*' className='border-b border-black w-full focus:outline-none focus:border-green-500 focus:border-b' />
//                 {/* <input type="number" placeholder='Number of Employees*' className='border-b border-black focus:outline-none focus:border-green-500 w-full focus:border-b' /> */}
//                 <input type="text" placeholder='Industry*' className='border-b border-black w-full focus:outline-none focus:border-green-500 focus:border-b' />
//                 <input type="text" placeholder='Use Case*' className='border-b border-black w-full focus:outline-none focus:border-green-500 focus:border-b' />
//                 <textarea name="" id="" placeholder='What Are your Intended Applications?' className='border-b border-black w-full focus:outline-none focus:border-green-500 focus:border-b' rows={10}/>
//             </div>
//             <p className='text-[13px]'>Zinkus is committed to your privacy. We will not share your data with any 
// third parties. We use the information you provide us to send you product news & 
// updates, information about events, and other announcements. You may unsubscribe 
// from these communications at any time. For more information, check out our Privacy
// Policy.</p>
// <div className='flex items-center w-full gap-x-4 my-5'>
//     <input type="checkbox" name="" id="" className='h-5 w-5 rounded-md checkbox'/>
//     <p className='text-sm text-[#828181]'>I agree to receive communications from Zinikus</p>
// </div>
//             <button type='submit' className='border border-[#6A17BF] text-[#6A17BF] p-2 text-xl rounded-full w-full'>Submit</button>
//         </form>
//     )
// }

export default Sales