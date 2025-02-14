import React from 'react'

function Contact() {
    return (
        <div className=' w-full p-12 md:p-20 mx-auto'>
            <h2 className='font-bold text-xl sm:text-4xl text-center pb-1'>Contact
                <span className='  pl-2 font-normal underline underline-offset-4 decoration-1'>With us</span>
            </h2>
            <p className=' text-center mb-8 text-gray-500 text-sm md:text-md'>Ready to make a move? Let's Build Your<br />Future Together</p>


            <form className=' max-w-2xl mx-auto text-gray-600 pt-8'>
                <div className=' md:flex '>
                    <div className=' w-full md:w-1/2 text-left'>
                        Your Name
                        <input className=' w-full border border-gray-300 rounded py-3 px-4 mt-2'
                        type="text" placeholder='Your Name' name='Name' required />
                    </div>

                    <div className=' w-full md:w-1/2 text-left md:pl-4'>
                        Your Email
                        <input className=' w-full border border-gray-300 rounded py-3 px-4 mt-2'
                        type="email" placeholder='Your Email' name='Email' required />
                    </div>
                </div>

                <div className=' my-6 text-left'>
                    Message
                    <textarea className=' h-30 text-md w-full border border-gray-300 rounded py-3 px-4 mt-2 md:h-48 resize-none'
                     name="Message" placeholder='Message'></textarea>
                </div>

                <div className=' flex justify-center'>
                    <button className=' bg-blue-600 text-white py-2 px-12 mb-10 rounded'>Send Message</button>
                </div>
            </form>
        </div>
    )
}

export default Contact