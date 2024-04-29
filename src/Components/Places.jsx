import React from 'react'
import { Link } from 'react-router-dom'


const Places = () => {
    return (
        <>
            <div className="container p-4   md:flex flex justify-center ms-16  space-x-16 -mt-20 ">

                <Link to='mountains' className="title shadow-2xl hover:scale-105 bg-white w-1/5  ">
                    <img src='Images/mountains.jpg' alt='' width='100%' />
                    <h1 className='font-bold md:text-[25px] p-1'>Mountains</h1>
                    <hr />
                    <p className='p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In commodi aliquid laborum</p>
                    <hr />
                    <p className='p-1 font-semibold'>Location</p>
                    <hr />
                </Link>

                <Link to='nationalpark' className="title shadow-2xl hover:scale-100 bg-white w-1/5  ">
                    <img src='Images/national-parks.jpg' alt='' width='100%' />
                    <h1 className='font-bold md:text-[25px] p-1'>National Parks</h1>
                    <hr />
                    <p className='p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In commodi aliquid laborum</p>
                    <hr />
                    <p className='p-1 font-semibold'>Location</p>
                    <hr />
                </Link>

                <Link to='religious' className="title shadow-2xl hover:scale-100 bg-white w-1/5  ">
                    <img src='Images/religious.jpg' alt='' width='100%' />
                    <h1 className='font-bold md:text-[25px] p-1'>Religious Places</h1>
                    <hr />
                    <p className='p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In commodi aliquid laborum</p>
                    <hr />
                    <p className='p-1 font-semibold'>Location</p>
                    <hr />
                </Link>

                <Link to='wildlife' className="title shadow-2xl hover:scale-100 bg-white w-1/5  ">
                    <img src='Images/wildlife.jpg' alt='' width='100%' />
                    <h1 className='font-bold md:text-[25px] p-1'>Wildlife Reserves</h1>
                    <hr />
                    <p className='p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In commodi aliquid laborum</p>
                    <hr />
                    <p className='p-1 font-semibold'>Location</p>
                    <hr />
                </Link>

            </div>


        </>
    )
}

export default Places