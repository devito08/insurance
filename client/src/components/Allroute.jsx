import {Routes,Route} from 'react-router-dom'
import Home from './home'
import Signup from './Signup'
import Signin from './Signin'
import Insurancetype from './Insurancetype'
import Car from './Car'
import Family from './Family'
import Homeinsurance from './Homeinsurance'
import Travels from './Travels'


function Allroute() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/insurancetype' element={<Insurancetype/>}/>
        <Route path='/vehicle' element={<Car/>}/>
        <Route path='/family' element={<Family/>}/>
        <Route path='/home-insurance' element={<Homeinsurance/>}/>
        <Route path='/travel' element={<Travels/>}/>
    </Routes>
  )
}

export default Allroute