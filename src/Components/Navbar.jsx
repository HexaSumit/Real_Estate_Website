import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.svg'
import menu_icon from '../assets/menu_icon.svg'
import close_icon from '../assets/cross_icon.svg'

function Navbar() {


  const [opentab, setOpentab] = useState(false)

  const handleMenu = () => {
    setOpentab((prev) => !prev)
    // console.log(opentab)
  }
  const handleCross=()=>{
    setOpentab((prev)=>!prev)
  }

    //USE_EFFECT This code makes sure that if we open the screen after clicking on the hamburger button
  // then it should not scroll and if we had not clicked it then it should scroll
  useEffect(()=>{
    if(opentab){
      document.body.style.overflow='hidden'
    }
    else{
      document.body.overflow='auto'
    }
    return()=>{
      document.body.style.overflow='auto'
    }
  },[opentab])
  return (
    <div className=' w-full absolute top-0 left-0 right-0'>

      <div className=" flex items-center justify-between p-4 ">
        <img src={logo} className=' w-[90px]' />

        <ul className=' md:flex space-x-8 text-white hidden cursor-pointer'>
          <li><a href='#'>Home</a></li>
          <li><a href='#About'>About</a></li>
          <li><a href='#Projects'>Projects</a></li>
          <li><a href='#Testimonials'>Testimonials</a></li>
        </ul>

        <button className=' bg-white px-8 py-1 border-none rounded-3xl hidden md:block cursor-pointer'>Sign in</button>

        <img src={menu_icon}
            className=' md:hidden block cursor-pointer'
            onClick={handleMenu}
          />
      </div>
      
      {/* ------>MOBILE RESPONSIVE <------------  */}
      <div className={opentab?'  bg-white fixed w-full top-0 right-0 bottom-0 overflow-hidden':'hidden'}>
        <div className=' flex items-center justify-end mx-20 my-10'>
          <img src={close_icon} className=' w-[20px] cursor-pointer' onClick={handleCross}/>
        </div>
        <ul className=' flex flex-col gap-10 mt-2 items-center'>
          <li className=' font-bold'><a onClick={()=>setOpentab(false)} href='#' className=' inline-block'>Home</a></li>
          <li className=' font-bold'><a onClick={()=>setOpentab(false)} href='#About' className=' inline-block'>About</a></li>
          <li className=' font-bold'><a onClick={()=>setOpentab(false)} href='#Projects' className=' inline-block'>Projects</a></li>
          <li className=' font-bold'><a onClick={()=>setOpentab(false)} href='#Testimonials' className=' inline-block'>Testimonials</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar