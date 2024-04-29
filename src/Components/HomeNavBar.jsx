import React, { useState } from 'react'
import { Link } from 'react-router-dom'



const HomeNavBar = () => {
    const [isopen, setIsOpen] = useState(false);
    const [isopen2, setISOpenTwo] = useState(false);
    const [isopen3, setISOpen3] = useState(false);

    const toggledropDown1 = () => {
        setIsOpen(!isopen);
    }
    const toggledropDown2 = () => {
        setISOpenTwo(!isopen2);
    }
    const toggledropDown3 = () => {
        setISOpen3(!isopen3);
    }

    return (
        <>

            <div className="nav w-full ">
                <div className='flex justify-between '>
                    <Link to='/'  ><img src='/Images/logo.png' alt='' className='l:block justify-self-center  w-36 mt-5 h-28 cursor-pointer will-change-auto' /></Link>
                    <div className="m-3 hidden mt-5 w-auto  lg:block  ">
                        <div className="justify-center flex">

                            <button id="dropdownDefaultButton" onClick={toggledropDown1} className="font-normal mx-7  rounded-lg text-2xl text-center inline-flex items-center  h-14" type="button">Trecking In Nepal<svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

                            {/* <!-- Dropdown menu --> */}
                            {isopen && (

                                <div id="dropdown" className=" block bg-white divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 justify-start relative -ml-[28px]  ">

                                    <ul className="py-2 text-sm  text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                        <li>
                                            <Link to="/everest-base-camp-treck" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Everest Base Camp</Link>
                                        </li>
                                        <hr />
                                        <li>
                                            <Link to="/annapurna-base-camp" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Annapurna Base Camp</Link>
                                        </li>
                                        <hr />
                                        <li>
                                            <Link to="/langtang-valley-trek" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Langtang Valley Trek</Link>
                                        </li>
                                        <hr />


                                    </ul>
                                </div>
                            )}




                            <button id="dropdownDefaultButton" onClick={toggledropDown2} className="font-normal mx-7  rounded-lg text-2xl text-center inline-flex items-center  h-14" type="button">Things To Do <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                            {/* <!-- Dropdown menu --> */}
                            {isopen2 && (


                                <div id="dropdown" className="block  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                        <li>
                                            <Link to="/paragliding" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Paragliding in Pokhara</Link>
                                        </li>
                                        <hr />
                                        <li>
                                            <Link to="/Bungee" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Bungee Jumping in Nepal</Link>
                                        </li>
                                        <hr />

                                    </ul>
                                </div>
                            )}

                            <button id="dropdownDefaultButton" onClick={toggledropDown3} className="font-normal mx-7 rounded-lg text-2xl px-4 py-2.5 text-center inline-flex items-center h-14 " type="button">Travel Guide <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                            {/* <!-- Dropdown menu --> */}
                            {isopen3 && (
                                <div id="dropdown" className="block bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                        <li>
                                            <Link to="/travelguide" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Trekking in Nepal -A Complete Beginners Guide</Link>
                                        </li>

                                        <hr />

                                    </ul>
                                </div>
                            )}



                        </div>
                    </div>

                    <div className=" hidden 2xl:block mt-2  w-auto">
                        <div className="justify-end flex mt-5 ">
                            <Link to="/" className="item mx-3 cursor-pointer  text-2xl will-change-auto font-normal">Home</Link>
                            <Link to='/login' className="item mx-3 cursor-pointer text-2xl will-change-auto  font-normal ">Login</Link>
                            <Link to='/login' className="item  mx-3 cursor-pointer font-normal text-2xl will-change-auto">Log Out</Link>
                        </div>
                    </div>

                </div>
                <div className=" hidden md:w-2/4 m-auto -mt-[95px] md:block md:mt-[200px]   flex justify-center">
                    <input type='text' className=' rounded-2xl border-4 p-2 w-full' placeholder='Search' ></input>
                    <label type='submit' className='bg-blue-600  p-2  rounded-2xl border-2 w-20 text-center h-10 -mx-[84px]  -my-[-10px] align-middle cursor-pointer hover:bg-blue-700  '>Search</label>
                </div>



            </div>

        </>
    )
}


export default HomeNavBar