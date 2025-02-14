import React from 'react'
import headerImg from '../assets/header_img.png'

function Home() {
  return (
    <div className=" min-h-screen bg-cover bg-center w-full" style={{ backgroundImage: `url(${headerImg})` }}>
      
      <div className=' flex flex-col items-center justify-center h-screen text-center px-4'>
        <h2 className=' text-white md:text-5xl max-w-3xl font-bold pt-20 text-2xl'>Explore homes that </h2>
        <h2 className=' text-white md:text-5xl max-w-3xl font-bold py-2 text-2xl'>fit your dreams</h2>

        <div className=" flex space-x-5 mt-10 ">
          <button className=' cursor-pointer px-6 py-1 border border-gray-300  text-white bg-transparent'>Projects</button>
          <button className=' cursor-pointer px-6 py-1.5 border border-none  text-white bg-blue-500'>Contact us</button>
        </div>
      </div>
    </div>
  )
}

export default Home