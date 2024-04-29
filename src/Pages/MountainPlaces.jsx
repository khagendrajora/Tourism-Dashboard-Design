import React from 'react'
import { Link } from 'react-router-dom'

const MountainPlaces = () => {
  return (
    <>
    <div className="container  w-full ">
                <h1 className=' m-4 md:text-[60px] sm:text-[30px] font-serif font-[700] '>Mountains for Trecking</h1>
                <p className='m-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit et placeat vitae dicta quam quae ipsam ab esse possimus, numquam odio aspernatur, repudiandae, labore necessitatibus nam blanditiis rerum iste sapiente?</p>
                <h1 className='font-semibold mt-5 m-4' >Top trecking areas in Nepal</h1>
                <div className="m-4 flex flex-col ">
                    <Link to="/https://www.magicalnepal.com/trip/everest-base-camp-trek/" className='my-2 underline'>Everest Base Camp Trek</Link>
                    <Link to="/https://www.guideinhimalaya.com/destination/nepal/nepal-trekking/5-days-trek-in-nepal/annapurna-base-camp-trekking.html/" className='my-2 underline'>Annapurna Base Camp Trek </Link>
                    <Link to="#" className='my-2 underline'>Ghorepani Poon Hill Trek</Link>
                    <Link to="#" className='my-2 underline'>Gokyo Ri & Gokyo Lakes Trek </Link>
                    <Link to="#" className='my-2 underline'>Annapurna Circuit Trek </Link>
                    <Link to="#" className='my-2 underline'>Langtang Valley Trekking</Link>
                    <Link to="#" className='my-2 underline'>Mardi Himal Trek</Link>
                    <Link to="#" className='my-2 underline'>Upper Mustang Trek</Link>
                    <Link to="#" className='my-2 underline'>Manaslu Circuit Trek</Link>
                    <Link to="#" className='my-2 underline'>Banke National Park</Link>
                    <Link to="#" className='my-2 underline'>Kanchenjunga Base Camp Trek</Link>
                    

                </div>
            </div>
    </>
  )
}

export default MountainPlaces