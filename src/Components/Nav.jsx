import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
    return (
        <>
            <div className="nav">
                <div className='flex justify-between '>
                    <Link to='/'><img src='/Images/logo.png' alt='' className='w-36 h-28 cursor-pointer' /></Link>

                    <div className=" w-2/4 m-auto  ll:block hidden justify-center">
                        <input type='text' className=' rounded-2xl border-4 p-1 w-3/4' placeholder='Search' ></input>
                        <label type='submit' className='bg-blue-600  p-1 rounded-2xl border-2 w-20  '>Search</label>
                    </div>


                </div>

            </div>
        </>
    )
}

export default Nav