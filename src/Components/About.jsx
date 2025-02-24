import React, { useEffect,useState } from 'react'
import aboutimg from '../assets/brand_img.png'

function About() {

    return (
        <div id='About' className={`move-to-center container flex mx-auto p-12 md:p-16 w-full items-center justify-center flex-col overflow-hidden`} >
            <h2 className=' font-bold text-2xl sm:text-3xl'>About
                <span className=' underline underline-offset-4 decoration-1 pl-2 font-light'>Our Brand</span>
            </h2>
            <p className=' text-center text-gray-500 max-w-80 mb-4'>Passionate about properties, Dedicated to <br/>Your vision</p>

            {/* IMAGE PART  AND MIDDLE PART OF ABOUT SECTION*/}
            <div className=' flex flex-col md:flex-row md:items-start md:gap-20 w-full'>
                <img src={aboutimg} alt="home_img" className=' w-full max-w-md' />

                <div className=' flex flex-col items-center md:items-start mt-7 text-gray-600 '>
                    <div class="grid grid-cols-2 gap-8 md:gap-12 text-center text-gray-900">
                        <div>
                            <p className="text-3xl font-bold">10+</p>
                            <p className="text-md text-gray-600">Years of Excellence</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold">12+</p>
                            <p className="text-md text-gray-600">Projects Completed</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold">20+</p>
                            <p className="text-md text-gray-600">Mn. Sq. Ft. Delivered</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold">25+</p>
                            <p className="text-md text-gray-600">Ongoing Projects</p>
                        </div>
                    </div>
                    <p className=' mt-10 mb-5 max-w-lg text-sm md:text-base'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Et distinctio, accusantium suscipit deleniti error eius id natus? Aut reprehenderit earum labore eveniet ut, facere dolorem, exercitationem, nam recusandae debitis omnis! </p>
                    <button className=' bg-blue-600 px-8 py-2 rounded text-white'>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default About