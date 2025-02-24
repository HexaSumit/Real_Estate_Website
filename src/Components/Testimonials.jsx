import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import profile1 from '../assets/profile_img_1.png'
import profile2 from '../assets/profile_img_2.png'
import profile3 from '../assets/profile_img_3.png'
import star from '../assets/star_icon.svg'

function Testimonials() {

    const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true); // Trigger animation when component is rendered
  }, []);

    const Cards = [
        {
            name: 'Donald Jackman',
            profile: 'Marketing Manager',
            img: profile1,
            rating:5,
        },
        {
            name: 'Richard Nelson',
            profile: 'UI/UX Designer',
            img: profile2,
            rating:4,
        },
        {
            name: 'James Washington',
            profile: 'Co-Founder',
            img: profile3,
            rating:3,
        },
    ]
    return (
        <div id='Testimonials' className='mx-auto p-12 md:p-20 container w-full'>
            <h2 className=' font-bold text-xl sm:text-4xl text-center pb-1'>Customer<span className=' pl-2 font-normal underline underline-offset-4 decoration-1 '>Testimonials</span></h2>
            <p className=' text-center mb-8 text-gray-500 text-sm md:text-md max-w-80 mx-auto'> Real stories of those who found Home<br />with us.</p>

            <div className=" md:flex flex-wrap gap-20 justify-center items-center ">
                {Cards.map((card,index) => (
                    <div className=' bg-white h-[300px] py-2 px-4 flex items-center flex-col gap-2 border-0 rounded shadow-2xl my-[20px]' key={index}>
                        <img src={card.img} alt="card" />
                        <p className=' font-bold text-lg'>{card.name}</p>
                        <img src={star} alt="star" />
                        <p className=' text-gray-500 text-xs md:text-sm'>from the very first meeting they<br /> understood my vision and helped me <br /> find the perfect property </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials