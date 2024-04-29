import React from 'react'
import { Link } from 'react-router-dom'

const ReligiousPlaces = () => {
  return (
    <>
    <div className="container  w-full ">
                <h1 className=' m-4 md:text-[60px] sm:text-[30px] font-serif font-[700] '>Religious Places  of NEpal</h1>
                <p className='m-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit et placeat vitae dicta quam quae ipsam ab esse possimus, numquam odio aspernatur, repudiandae, labore necessitatibus nam blanditiis rerum iste sapiente?</p>
                <h1 className='font-semibold mt-5 m-4' >Top Religious in Nepal</h1>
                <div className="m-4 flex flex-col ">
                    <Link to="https://pashupatinathtemple.org/" className='my-2 underline'>Pashupatinath Temple</Link>
                    <Link to="https://visitworldheritage.com/en/buddha/lumbini-the-birthplace-of-the-lord-buddha/199f9dfb-8831-42e9-9259-6f4c286feaf1" className='my-2 underline'>Lumbini </Link>
                    <Link to="https://pariskathmandu.com/boudhanath-guide/" className='my-2 underline'>Boudhanath Stupa</Link>
                    <Link to="https://www.holidaynepal.com/pilgrim-site/manakamana.html" className='my-2 underline'>Manakamana </Link>
                    <Link to="https://ntb.gov.np/swayambhunath" className='my-2 underline'>Swoyambhu Mahachaitya </Link>
                    <Link to="https://www.holidaynepal.com/pilgrim-site/janakpurdham.html" className='my-2 underline'>Janaki Temple</Link>
                    <Link to="https://sacredsites.com/asia/nepal/muktinath_temple.html" className='my-2 underline'>Muktinath Temple</Link>
                    <Link to="https://www.namastebhaktapur.com/destination/pathivara-devi/" className='my-2 underline'>Pathivara Devi</Link>
                    <Link to="https://www.nepalglaciertreks.com/blog/gosaikunda-lake.html" className='my-2 underline'>Gosaikunda</Link>
                    
                    

                </div>
            </div>
    </>
  )
}

export default ReligiousPlaces