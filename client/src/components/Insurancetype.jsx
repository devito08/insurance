import { Link } from "react-router-dom"

function Insurancetype() {
  return (
    <div>
        <div className="text-5xl items-center justify-center mx-8 mt-9">
            <h1 className="text-blue-600 mb-8">Insurance</h1>
        </div>
        <div className="flex">
            {/* card-1 */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mx-5">
                <img src="family.jpg" alt="logo" className="w-full"/>
                <div className="px-6 py-4">
                    <h3 className="font-bold text-xl mb-2">Family Insurance</h3>
                    <p className="text-gray-700 text-base">
                        Take family insurance and secure the family members.
                    </p>
                    <Link to="/family">
                    
                    <button className="bg-indigo-300 text-white hover:bg-green-400 px-4 py-2 rounded-full mt-2">START&#10132;</button>

                    </Link>

                </div>
            </div>

            {/* card-2 */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mx-5">
                <img src="car.png" alt="logo" className="w-full "/>
                <div className="px-6 py-4">
                    <h3 className="font-bold text-xl mb-2">Vehicle Insurance</h3>
                    <p className="text-gray-700 text-base">
                        Take car insurance and secure you dreamed one with us.
                    </p>
                    <Link to="/vehicle">
                    <button className="bg-indigo-300 text-white hover:bg-green-400 px-4 py-2 rounded-full mt-2">START&#10132;</button>
                    </Link>

                </div>
            </div>
            {/* card-3 */}
            <div className="max-w-sm overflow-hidden shadow-lg bg-white mx-5"> 
                <img src="home.jpg" alt="family"/>
                <div className="px-6 py-4">
                    <h3 className="font-bold text-xl mb-2">Home Insurance</h3>
                    <p className="text-gray-700 text-base">Take home insurance and we protect your house.</p>
                    <button className="bg-indigo-300 hover:bg-green-400 text-white rounded-full px-4 py-2 mt-2">START&#10132;</button>
                </div>
            </div>

            {/* card-4 */}
            <div className="max-w-sm overflow-hidden shadow-lg bg-white mx-5"> 
                <img src="travel.jpg" alt="family" />
                <div className="px-6 py-4">
                    <h3 className="font-bold text-xl mb-2">Travel Insurance</h3>
                    <p className="text-gray-700 text-base">Take a travel insurance and enjoy the secured tour.</p>
                    <button className="bg-indigo-300 hover:bg-green-400 text-white rounded-full px-4 py-2 mt-2">START&#10132;</button>
                </div>
            </div>

        </div>
        

        
        
    </div>
  )
}

export default Insurancetype