import React from 'react'
import img1 from '../assets/project_img_1.jpg'
import img2 from '../assets/project_img_2.jpg'
import img3 from '../assets/project_img_3.jpg'
import img4 from '../assets/project_img_4.jpg'
import img5 from '../assets/project_img_5.jpg'
import img6 from '../assets/project_img_6.jpg'

import leftbtn from '../assets/left_arrow.svg'
import rightbtn from '../assets/right_arrow.svg'


function Projects() {

  const imagesbox=[
    {
      id:1,
      image:img1,
      name:'Skyline Heaven',
      price:'$2,50,000',
      place:'California'
    },
    {
      id:2,
      image:img2,
      name:'Vista Verde',
      price:'$2,50,000',
      place:'San Fransisco'
    },
    {
      id:3,
      image:img3,
      name:'Serenity Suites',
      price:'$2,50,000',
      place:'Chicago'
    },
    {
      id:4,
      image:img4,
      name:'Central Square',
      price:'$2,50,000',
      place:'Los Angeles'
    },
  ]
  
  return (
    <div className="p-12 md:p-20 container mx-auto " id='Projects'>
        <h2 className=' font-bold text-xl sm:text-4xl text-center pb-1'>Projects<span className=' pl-2 font-normal underline underline-offset-4 decoration-1 '>Completed</span></h2>
        <p className=' text-center mb-8 text-gray-500 text-sm md:text-md'>Crafting Spaces, Building Legacies-Explore <br /> Our portfolio</p>


      {/* IMAGES SECTION  */}
      <div className=' md:flex gap-4 overflow-hidden mt-10 '>
        {imagesbox.map((item)=>{
          return <div key={item.id} className='relative overflow-hidden flex-shrink-0  w-full sm:w-1/4'>
            <img src={item.image} alt="Image1" className="md:w-[95%] w-[80%] h-auto object-cover mb-8 transition-transform duration-300 hover:scale-y-95"/>
            <div className=' absolute bottom-5 left-2 right-0 md:flex md:justify-center'>
              <div className=' inline-block bg-white px-2 md:px-4 md:py-2 shadow-md'>
                <h4 className=' font-bold text-center'>{item.name}</h4>
                <p className=' text-gray-500 text-sm md:text-md'>{item.price}| {item.place}</p>  
              </div>
            </div>
          </div>
        })}
      </div>

    </div>
  )
}

export default Projects