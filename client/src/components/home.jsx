import { Link } from "react-router-dom"
import Insurancetype from "./Insurancetype"


function home() {
  return (
    <>
    <div className=" min-h-screen flex flex-col items-center justify-center">
      <div className=" items-center justify-center ">
        <h1 className="mx-28 text-7xl mt-8">Lets find you the Best Insurance</h1>
        <h3 className="my-4 mx-28 text-3xl">Insure Allianz Life is committed to offer value-packed and innovative products.</h3>
        <Link to="/insurancetype">
        <button  className="ml-80 my-6  font-bold bg-blue-500 hover:bg-blue-400 text-white px-10 py-5 rounded-full">Get Started</button>
        </Link>
      </div>
      
    </div>
    <div className="min-h-screen flex flex-co">
        <Insurancetype/>
      </div>
    </>
   
  )
}

export default home