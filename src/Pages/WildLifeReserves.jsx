import React from 'react'
import { Link } from 'react-router-dom'

const WildLifeReserves = () => {
    return (
        <>
            <Link to='Wildlife' className="container  w-full ">
                <h1 className=' m-4 md:text-[60px] sm:text-[30px] font-serif font-[700] '>WildLife Reserve Of Nepal</h1>
                <p className='m-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit et placeat vitae dicta quam quae ipsam ab esse possimus, numquam odio aspernatur, repudiandae, labore necessitatibus nam blanditiis rerum iste sapiente?</p>
                <h1 className='font-semibold mt-5 m-4' >Top WildLife Reserves located in Nepal</h1>
                <div className="m-4">
                <Link to="/https://dnpwc.gov.np/en/conservation-area-detail/62/" className='my-2 underline'>Koshi Tappu Wildlife Reserve</Link>
                </div>
            </Link>
        </>
    )
}

export default WildLifeReserves