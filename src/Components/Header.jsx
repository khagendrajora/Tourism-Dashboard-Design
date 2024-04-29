import React from 'react'

import HomeNavBar from './HomeNavBar'

const Header = () => {
    return (
        <>

            <div className=" h-screen  bg-no-repeat"
                style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: 'url(/Images/home.jpg)',

                }}>
               <HomeNavBar/>
            </div>


        </>
    )
}

export default Header