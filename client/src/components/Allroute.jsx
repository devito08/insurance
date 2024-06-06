import {Routes,Route} from 'react-router-dom'
import Home from './home'
import Signup from './Signup'
import Signin from './Signin'

function Allroute() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
    </Routes>
  )
}

export default Allroute