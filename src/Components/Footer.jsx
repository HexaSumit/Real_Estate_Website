import React from 'react'
import logo from '../assets/logo.svg'
function Footer() {
    return (
        <div className=' bg-blue-950 md:px-16 md:py-10 py-6 px-8 '>
            <div className=' md:flex justify-between mb-5'>
                <div className=' mb-4'>
                    <img src={logo} className=' w-[100px]' />
                    <p className=' text-gray-400 text-sm mt-2'>Lorem ipsum dolor sit amet, ipsum consectetur elit<br />Eum facere, corporis est Lorem, ipsum cum aspernatur<br /> omnis illo lorem sunt dicta veritatis sit.</p>
                </div>
                <div className=' mb-4'>
                    <p className=' text-white font-bold py-1 text-lg'>Company</p>
                    <li className=' list-none text-gray-400 py-1'>Home</li>
                    <li className=' list-none text-gray-400 py-1'>About us</li>
                    <li className=' list-none text-gray-400 py-1'>Contact us</li>
                    <li className=' list-none text-gray-400 py-1'>Privacy policy</li>
                </div>
                <div className=' pt-2 '>
                    <p className=' text-white font-bold text-lg '>Subscribe to out newsletter</p>
                    <p className=' text-gray-400 pt-1'>The latest news ,articles and resources sent to your inbox weekly.</p>
                    <div className=' mt-2 md:flex'>
                        <input type="email" className='w-[50%] bg-gray-600 px-2 py-1 mr-2 rounded outline-none text-white' placeholder='Enter your Email' />
                        <button className=' py-1 px-6 bg-blue-600  text-white rounded'>Subscribe</button>
                    </div>
                </div>
            </div>
            <hr />
            <p className=' mt-4 text-gray-400 text-lg text-center'>&copy; Copyrights 2024 @SumitBhardwaj. All Rights Reserved.</p>
        </div>
    )
}

export default Footer