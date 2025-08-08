import { useState } from 'react'
import Tesla from './images/tesla-logo.png'
import Tesla1 from './images/Tesla1.jpeg'
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
      <br />
      <div className="contain-all-model  h-120 w-full flex g-10 relative mt-120 overflow-x-scroll ">
             <div className="container-modelY  h-[94%] w-[70%] m-4 mt-2  relative bg-barinda rounded">
             
             <div className="footer-detaitl-modeY  mt-60  h-auto w-130 m-6">
              <h1 className='text-6xl text-white'>Model Y</h1>
              <h2 className='text-xl text-bold mt-3 mb-2 text-white'>Lease From $349/mo for a Limited Time <hr className='h-2 w-90 bg-gray-100' /></h2>
              <div className="box-order  flex justify-start g-10 justify-around items-center mr-10 mt-5 mb-2">
                <button className='bg-blue-400 text-white h-10 w-[30%] rounded'>order now</button>
                <button className='bg-gray-100 text- black h-10 w-[30%] ml-10 rounded'>learn more</button>
                <br />
              </div>
             </div>
             </div>

             <div className="container-modelY  h-[94%] w-[70%] m-4 mt-2  relative bg-BFT rounded">
             
             <div className="footer-detaitl-modeY  mt-60  h-auto w-130 m-6">
              <h1 className='text-6xl text-white'>Model Y</h1>
              <h2 className='text-xl text-bold mt-3 mb-2 text-white'>Lease From $349/mo for a Limited Time <hr className='h-2 w-90 bg-gray-100' /></h2>
              <div className="box-order  flex justify-start g-10 justify-around items-center mr-10 mt-5 mb-2">
                <button className='bg-blue-400 text-white h-10 w-[30%] rounded'>order now</button>
                <button className='bg-gray-100 text- black h-10 w-[30%] ml-10 rounded'>learn more</button>
                <br />
              </div>
             </div>
             </div>


             <div className="container-modelY  h-[94%] w-[70%] m-4 mt-2  relative bg-FSD rounded">
             
             <div className="footer-detaitl-modeY  mt-60  h-auto w-130 m-6">
              <h1 className='text-6xl text-white'>Model Y</h1>
              <h2 className='text-xl text-bold mt-3 mb-2 text-white'>Lease From $349/mo for a Limited Time <hr className='h-2 w-90 bg-gray-100' /></h2>
              <div className="box-order  flex justify-start g-10 justify-around items-center mr-10 mt-5 mb-2">
                <button className='bg-blue-400 text-white h-10 w-[30%] rounded'>order now</button>
                <button className='bg-gray-100 text- black h-10 w-[30%] ml-10 rounded'>learn more</button>
                <br />
              </div>
             </div>
             </div>

             <div className="container-modelY  h-[94%] w-[70%] m-4 mt-2  relative bg-APR rounded">
             
             <div className="footer-detaitl-modeY  mt-60  h-auto w-130 m-6">
              <h1 className='text-6xl text-white'>Model Y</h1>
              <h2 className='text-xl text-bold mt-3 mb-2 text-white'>Lease From $349/mo for a Limited Time <hr className='h-2 w-90 bg-gray-100' /></h2>
              <div className="box-order  flex justify-start g-10 justify-around items-center mr-10 mt-5 mb-2">
                <button className='bg-blue-400 text-white h-10 w-[30%] rounded'>order now</button>
                <button className='bg-gray-100 text- black h-10 w-[30%] ml-10 rounded'>learn more</button>
                <br />
              </div>
             </div>
             </div>

             <div className="container-modelY  h-[94%] w-[70%] m-4 mt-2  relative bg-model3 rounded">
             
             <div className="footer-detaitl-modeY  mt-60  h-auto w-130 m-6">
              <h1 className='text-6xl text-white'>Model Y</h1>
              <h2 className='text-xl text-bold mt-3 mb-2 text-white'>Lease From $349/mo for a Limited Time <hr className='h-2 w-90 bg-gray-100' /></h2>
              <div className="box-order  flex justify-start g-10 justify-around items-center mr-10 mt-5 mb-2">
                <button className='bg-blue-400 text-white h-10 w-[30%] rounded'>order now</button>
                <button className='bg-gray-100 text- black h-10 w-[30%] ml-10 rounded'>learn more</button>
                <br />
              </div>
             </div>
             </div>
      </div>
    <br />
    <div className="current-Offers  flex h-90 w-full">
             <div className="box-1 flex shadow-2xs m-2 w-140 bg-gray-200 rounded ">
              <div className="bo-1 m-2  justify-center items-center w-300">
                <h1 className='mt-10 text-5xl font-bold'>Current Offers</h1>
                <h2 className='mt-3 text-xl text-gray-600'>Limited inventory. Take delivery <br /> today</h2>
                <button className='h-10 w-1/2 bg-gray-100 ml-18 mt-6 rounded font-bold'> learn more</button>
              </div>

              <div className="bo-1">
                <img src='./src/images/Tesla1.jpeg' className='h-fit h-full w-[110%] rounded-mm  ' />
              </div>
              
             </div>
             
             <div className="box-1 flex shadow-md m-2 w-150 bg-gray-200 rounded ">
              <div className="bo-1 m-2  justify-center items-center w-300">
                <h1 className='mt-10 text-5xl font-bold'>New Feature: In-Car AI</h1>
                <h2 className='mt-3 text-xl text-gray-600'>Grok is now available.</h2>
                <button className='h-10 w-1/2 bg-gray-100 ml-18 mt-6 rounded font-bold'> learn more</button>
              </div>

              <div className="bo-1">
                <img src='./src/images/logo2.png' className='h-fit h-full w-[110%] rounded-mm  ' />
              </div>
              
             </div>
    </div>
      <br />
      <div className="full-self w-full h-120 border flex justify-between space-x-1">

          <div className="self-driving bg-amber-100 h-[90%]  shadow-2xl rounded w-[50%] m-6 flex justify-between items-end justify-center bg-self">
            <h1 className='text-3xl font-bold mb-16 text-amber-50'>Full Self-Driving (Supervised)</h1> <br />
              <div className="box-order  flex justify-center g-3 justify-between items-end mb-2  w-100 m-2">
                <button className='bg-blue-400 text-white h-10 w-[80%] rounded'>Demo drive</button>
                <button className='bg-gray-100 text- black h-10 w-[80%] ml-10 rounded'>learn more</button>
                <br />
              </div>
          </div>


          <div className="self-driving bg-amber-100 h-[90%]  shadow-2xl rounded w-[40%] m-6 flex justify-between items-end justify-center bg-self1 ">
            <h1 className='text-3xl font-bold mb-16 text-white'>World's First Autonomous <br /> Car Delivery</h1> <br />
            <button className='bg-blue-400 text-white h-10 w-[30%] rounded mr-5 mb-2'>learn more</button>
          </div>
      </div>
      <br />

      
    </>
  )
}

export default App
