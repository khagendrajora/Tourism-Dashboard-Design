import React from 'react'
import { Link } from 'react-router-dom'

const NationalParks = () => {
    return (
        <>
            <div className="container  w-full ">
                <h1 className=' m-4 md:text-[60px] sm:text-[30px] font-serif font-[700] '>National Parks of Nepal</h1>
                <p className='m-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit et placeat vitae dicta quam quae ipsam ab esse possimus, numquam odio aspernatur, repudiandae, labore necessitatibus nam blanditiis rerum iste sapiente?</p>
                <h1 className='font-semibold mt-5 m-4' >Top WildLife Reserves located in Nepal</h1>
                <div className="m-4 flex  md:flex-row  flex-col space-y-4 justify-around">
                    <div className="Left-container w-2/5 bg-slate-400 flex flex-col">
                    <Link to="https://chitwannationalpark.gov.np/" className='my-2 underline'>Chitwan National Park</Link>
                    <Link to="https://snp.gov.np/" className='my-2 underline'>Sagarmatha National Park </Link>
                    <Link to="https://dnpwc.gov.np/en/conservation-area-detail/76/" className='my-2 underline'>Langtang National Park</Link>
                    <Link to="https://dnpwc.gov.np/en/conservation-area-detail/73/" className='my-2 underline'>Rara National Park </Link>
                    <Link to="https://dnpwc.gov.np/en/conservation-area-detail/73/" className='my-2 underline'>Khaptad National Park </Link>
                    <Link to="#" className='my-2 underline'>Shey Phoksundo National Park</Link>
                    <Link to="#" className='my-2 underline'>Bardiya National Park</Link>
                    <Link to="#" className='my-2 underline'>Makalu Barun National Park</Link>
                    <Link to="#" className='my-2 underline'>Shivapuri Nagarjun National Park</Link>
                    <Link to="#" className='my-2 underline'>Banke National Park</Link>
                    <Link to="#" className='my-2 underline'>Shuklaphanta National Park</Link>
                    <Link to="#" className='my-2 underline'>Parsa National Park </Link>
                    </div>
                    <div className="Right-container m-auto">
                            <Link to='https://dnpwc.gov.np/en/'><h1 className='text-xl p-2 text-blue-600 '>Visit the offical Website of National Parks of Nepal<button className='text-red-600'>Click Me</button> </h1></Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default NationalParks