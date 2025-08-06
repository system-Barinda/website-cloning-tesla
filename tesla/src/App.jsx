import { useState } from 'react'
import Tesla from './images/tesla-logo.png'
import { TbWorld } from "react-icons/tb"; 
import { MdHelpOutline } from "react-icons/md";            
import { FaUser } from "react-icons/fa";              


import './App.css'

function App() {


  return (
    <>
      <header className='bg-white text-black h-15 w-full  flex  items-center g-10  '>
        <div className="menu-log m-10">
         <img src={Tesla} className='h-10 w-14 ml-14 ' />
        </div>

        <div className="menu-list  w-100 flex g-15 ml-50 justify-around text-xl">
          <div className="submenu cursor-pointer ">vehicles</div>
          <div className="submenu cursor-pointer">Energy</div>
          <div className="submenu cursor-pointer">Charging</div>
          <div className="submenu cursor-pointer">Discover</div>
          <div className="submenu cursor-pointer">Shop</div>
        </div>

        <div className="menu-icon  h-10 w-50 m-10 ml-50 gap-1 justify-around flex items-center">
          <MdHelpOutline className='h-8 w-10' />
          <TbWorld className='h-8 w-10' />
          <FaUser className='h-8 w-8 border rounded-full' />
        </div>
      </header>
      <div className="fedral-container bg-hero w-full h-120  absolute">
              <div className="header-fedral h-60 w-190  ml-60 mt-10">
                <h1 className='text-5xl text-system'>$7,500 Federal Tax Credit Ending1</h1>
                <h1 className='ml-38 mt-6 text-2xl text-limited'>Limited Inventory – Take Delivery Now</h1> <br />
                   <div className="box-button flex justify-center items-center h-20 w-100  ml-37">
                      <button className='h-[50%] w-[40%] bg-blue-400 m-1 rounded-2xl'>order model 3</button> 
                      <button className='h-[50%] w-[40%] bg-blue-400 m-1 rounded-2xl'>order model Y</button> 
                    </div>  
              </div>
      </div>
    </>
  )
}

export default App
