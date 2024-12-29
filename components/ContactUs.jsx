import React from 'react'

const ContactUs = () => {
  return (
    <div className='w-full py-20 flex justify-center items-center'>
        <form action="" className='w-[900px] h-[768px]'>
            <h1 className='text-3xl font-semibold mb-5'>Get in Touch</h1>
            <p className='text-[15px] text-[#717581] mb-20'>Ready to help your company scale faster? Have a nice chat with us</p>
            <div className='flex w-full mb-10'>
                <div className='w-1/2 space-y-5'>
                    <h4 className='font-semibold text-[16px]'>First Name</h4>
                    <input type="text" placeholder='Type here' className='border rounded-xl w-11/12 px-6 py-4' />
                </div>
                <div className='w-1/2 space-y-5'>
                    <h4 className='font-semibold text-[16px]'>Last Name</h4>
                    <input type="text" placeholder='Type here' className='border rounded-xl w-11/12 px-6 py-4' />
                </div>
            </div>
            <div className='flex w-full mb-10'>
                <div className='w-1/2 space-y-5'>
                    <h4 className='font-semibold text-[16px]'>Email</h4>
                    <input type="email" placeholder='Type here' className='border rounded-xl w-11/12 px-6 py-4'/>
                </div>
                <div className='w-1/2 space-y-5'>
                    <h4 className='font-semibold text-[16px]'>Phone Number</h4>
                    <input type="number" placeholder='Type here' className='border rounded-xl w-11/12 px-6 py-4'/>
                </div>
            </div>
            <h4 className='font-semibold text-[16px] mb-5'>Write your message</h4>
            <textarea name="" id="" placeholder='Leave us a message' className='border rounded-xl w-full px-6 py-4' rows={6} />
        </form>
    </div>
  )
}

export default ContactUs