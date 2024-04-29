import React from 'react'
import Home from './Pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import PagesLayouts from './PagesLayouts'
import WildLifeReserves from './Pages/WildLifeReserves'
import NationalParks from './Pages/NationalParks'
import MountainPlaces from './Pages/MountainPlaces'
import ReligiousPlaces from './Pages/ReligiousPlaces'
import EverestBaseCamptreck from './Pages/TrekingInNepal/EverestBaseCamptreck'
import AnnapurnaBaseCampTreck from './Pages/TrekingInNepal/AnnapurnaBaseCampTreck'
import LangtanfValleyTrek from './Pages/TrekingInNepal/LangtanfValleyTrek'
import ParaglidingInPokhara from './Pages/ThingsToDoInNepal/ParaglidingInPokhara'
import BungeeJumping from './Pages/ThingsToDoInNepal/BungeeJumping'
import TravelGuide from './Pages/TravelGuide/TravelGuide'
import Login from './Pages/Login'



const MyRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='everest-base-camp-treck' element={<EverestBaseCamptreck />} />
            <Route path='annapurna-base-camp' element={<AnnapurnaBaseCampTreck />} />
            <Route path='langtang-valley-trek' element={<LangtanfValleyTrek />} />
            <Route path='paragliding' element={<ParaglidingInPokhara />} />
            <Route path='Bungee' element={<BungeeJumping />} />


          </Route>

          <Route path='/' element={<PagesLayouts />}>
            <Route path='login' element={<Login/>}/>
            <Route path='travelguide' element={<TravelGuide />} />
            <Route path='wildlife' element={<WildLifeReserves />} />
            <Route path='nationalpark' element={<NationalParks />} />
            <Route path='mountains' element={<MountainPlaces />} />
            <Route path='religious' element={<ReligiousPlaces />} />

          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default MyRoutes