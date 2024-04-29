import React from 'react'
import Header from '../../Components/Header'
import Nav from '../../Components/Nav'

const ParaglidingInPokhara = () => {
    return (
        <>
        <Nav/>
            {/* <Header /> */}
            <div className="container w-4/5 m-auto mt-11 text-justify ">
                <p className='font-thin mb-5'>
                    Are you thinking about doing <span className=' font-bold'>Paragliding in Pokhara?</span> Paragliding is one of the most preferred adventure sports in Nepal. Pokhara is the place where you can start your first paragliding experience.

                    The scenery around Pokhara City is stunning, with mountains, lakes, etc all around. The weather is also perfect for flying, with wind currents rising from the valley below.

                    There are a number of companies operating commercial tandem flights in Pokhara. Tandem flying means the pilot will be with a passenger.

                    Paragliding is operated with safety and with internationally certified pilots. If you are an adventure lover and you are traveling to Nepal, then paragliding in Pokhara shouldn’t be missed.
                </p>

                <img src='/Images/Paragliding.jpg' alt='' />
                <h1 className='font-bold mt-7'>Best Time for Paragliding in Pokhara</h1>
                <p>Paragliders rank Sarangkot as the best place in the world for paragliding. You can paraglide in Pokhara all season except the rainy season.

                    The perfect flying time is <span className='font-bold'>March, April, May, September, October, and November.</span> In these seasons you can get a stunning view of Phewa Lake and Annapurna Ranges above 8,000 meters.</p>
                <h1 className='font-bold mt-7'> Pokhara Paragliding Price</h1>
                <p>Paragliding cost differs according to the seasons. During the peak season and off-season, the price varies, and the price ranges will be a bit different. But the thing is that almost every company out there has similar rates.</p>
                <img src='/Images/phewaTAl.jpg' alt='' />



                <h1 className='font-bold mt-7 mb-3'>Paragliding price for Nepali in Pokhara</h1>
                <table className='border border-slate-950 w-1/2'>

                    <thead className='text-center '>
                        <tr className='border  border-slate-950 font-semibold'>

                            <td className='border  border-slate-950'>Flight</td>

                            <td className='border border-slate-950'>Duration</td>
                            <td className=''>Price (NRP)</td>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        <tr className='text-center border border-slate-950'>
                            <td className='text-center border border-slate-950'>Normal Flight</td>
                            <td className='border border-slate-950'>15 to 30 Minutes</td>
                            <td>Rs. 8,000</td>
                        </tr>

                        <tr className='text-center border border-slate-950'>
                            <td className='text-center border border-slate-950'>Cross-Country Flight</td>
                            <td className='border border-slate-950'>35 to 60 Minutes</td>
                            <td>Rs. 12,000</td>
                        </tr>
                    </tbody>

                </table>

                <h1 className='font-bold mt-7 mb-3'>Paragliding price for Nepali in Pokhara</h1>
                <table className='border border-slate-950 w-1/2'>

                    <thead className='text-center '>
                        <tr className='border  border-slate-950 font-semibold'>

                            <td className='border  border-slate-950'>Flight</td>

                            <td className='border border-slate-950'>Duration</td>
                            <td className=''>Price (NRP)</td>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        <tr className='text-center border border-slate-950'>
                            <td className='text-center border border-slate-950'>Normal Flight</td>
                            <td className='border border-slate-950'>15 to 30 Minutes</td>
                            <td>Rs. 8,500</td>
                        </tr>

                        <tr className='text-center border border-slate-950'>
                            <td className='text-center border border-slate-950'>Cross-Country Flight</td>
                            <td className='border border-slate-950'>35 to 60 Minutes</td>
                            <td>Rs. 12,500</td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </>
    )
}

export default ParaglidingInPokhara