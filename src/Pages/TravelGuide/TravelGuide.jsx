import React from 'react'
import { Link } from 'react-router-dom'

const TravelGuide = () => {
    return (
        <>
            <div className="container w-full">
                <h1 className=' m-4 md:text-[40px] sm:text-[30px] font-serif font-[700] '>A Complete Travel Guide In Nepal</h1>
                <p className='font-thin m-4'>
                    In this section, we will post the travel guide where you will get exclusive traveling tips that are practical while visiting Nepal or any other destinations. </p>
                <h1 className=' m-4 md:text-[40px] sm:text-[30px] font-serif font-[700] '>Popular Airlines of Nepal</h1>
                <div className="m-4 flex flex-col sm:flex-row  justify-between">
                    <Link to="https://www.nepalairlines.com.np/" className='my-2 hover:text-blue-600  underline text-[20px] font-bold'>Nepal Airlines</Link>
                    <Link to="https://www.buddhaair.com/" className='my-2  hover:text-blue-600 underline text-[20px] font-bold'>Buddha Airlines </Link>
                    <Link to="https://www.shreeairlines.com/" className='my-2  hover:text-blue-600 underline text-[20px] font-bold'>Shree Airlines </Link>
                    <Link to="https://www.yetiairlines.com/" className='my-2  hover:text-blue-600 underline text-[20px] font-bold'>Yati Airlines </Link>
                </div>
                <hr />

                <div className=" bg-slate-200 w-full  ">
                    <div className="flex-col">
                        <h1 className=' m-4 md:text-[50px] sm:text-[30px] font-serif font-[500] mt-7 '>Can Foregin Citizen Drive In Nepal </h1>
                        <p className='font-normal m-4 mt-5'>If you’re a tourist planning a trip to Nepal, you might be wondering: “Can i drive in Nepal?” The answer is yes,  Tourist can easily drive in Nepal by following the government rules.</p>
                        <ol class="list-decimal mt-3 space-y-3 m-7">
                            <li>Foreign citizens can drive in Nepal with a valid driver’s license issued by their country of residence and an International Driving Permit (IDP).</li>
                            <li>The IDP serves as a translation of the driver’s license and is accepted in over 150 countries, including Nepal.</li>
                            <li>Driving conditions in Nepal can be challenging due to poor road conditions and heavy traffic.</li>
                            <li>Many travelers opt to hire a car with a local driver instead of driving themselves.</li>
                            <li>You can find cab service as well as bike service where you can use the local app to book it.</li>
                        </ol>


                    </div>
                </div>
            </div>
        </>
    )
}

export default TravelGuide