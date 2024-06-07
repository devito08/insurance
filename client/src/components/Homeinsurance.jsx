import { Link } from "react-router-dom"

function Homeinsurance() {
    const handleBuyClick = () => {
        alert("Thank you for your interest! Purchase functionality is not implemented yet.");
      };
  return (
    <div className=" mt-8 mx-28">
        <div className="flex">
            <div className=" mx-8">
                <img src="https://static.pbcdn.in/home-cdn/images/supplier-logo/BajajAllianz.svg" alt="home" className="max-w-44"/>
            </div>
            <div className="mx-10 mb-28">
                <h1 className="text-black-900 font-bold text-2xl ">Bajaj Allianz General Insurance Company Ltd</h1>
                
                <h2 className="text-xl  text-green-600 mt-8 mb-5">What's Covered</h2>

                <h3 className="font-bold text-xl">Fire</h3>
                    <p >Coverage against damage to your house and household goods caused by fire</p>
                <h3 className="font-bold text-xl">Explosion or Implosion</h3>
                    <p >Coverages against destruction or damage caused to boilers (other than domestic boilers), economizers or 
                    other Vessels, machinery or apparatus</p>
                <h3 className="font-bold text-xl">Earthquake, Volcanic Eruption, or other Convulsions of Nature</h3>
                    <p >Coverages are provided against in the cases property damage in the event of earthquake</p>
                <h3 className="font-bold text-xl">Storm, Cyclone, Typhoon, Tempest, Hurricane, Tornado, Tsunami, Flood and Inundation</h3>
                    <p >Loss, destruction or damage directly caused by storm, cyclone, typhoon, tempest, hurricane, tornado, flood 
                    or inundation, volcanic eruption or other convulsions of nature</p>
                
                <h2 className="text-xl  text-red-600 mt-8 mb-5">What's not Covered</h2>
                <h3 className="font-bold text-xl">Your deliberate, wilful or intentional act or ommission, or of anyone on Your 
                    behalf, or with Your connivance</h3>
                    <p>Coverage against war, invasion, act of foreign enemy hostilities or war-like operations (whether war 
                    is declared or not), civil war, mutiny, civil c
                    ommotion amounting to a popular rising, military rising, 
                    rebellion, revolution, insurrection or military or usurped power</p>

                <h3 className="font-bold text-xl">Ionising radiation or contamination by radioactivity from any nuclear fuel or from any nuclear 
                    waste and similar perils</h3>
                    <p>Coverage against pollution or contamination, unless i. the pollution or contamination itself has resulted from an 
                    Insured Event, or ii. an Insured Event itself results from pollution or contamination</p>

                <h3>Loss, damage or destruction to any electrical/electronic machine, apparatus, fixture, or fitting 
                    from short circuiting, arcing etc</h3>
                    <p>Coverages against damage or desctruction caused to the property due to lightning</p>
                <Link to="">
                <button
                    onClick={handleBuyClick}
                    className="mt-8 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                    >
                    Buy Now
                    </button>
                </Link>
            </div>
        </div>

        <div className="flex">
        <div className="mx-8">
            <img src="https://static.pbcdn.in/home-cdn/images/supplier-logo/SBI-General-Insurance.png" alt="sbi" className="w-full h-32"/>
        </div>

        <div className="mx-10 mb-28">
            <h1 className="text-black-900 font-bold text-2xl">SBI General Insurance Company Ltd</h1>
            <h2 className="text-xl  text-green-600 mt-8 mb-5">What's Covered</h2>

                <h3 className="font-bold text-xl">Fire</h3>
                    <p >Coverage against damage to your house and household goods caused by fire</p>
                <h3 className="font-bold text-xl">Explosion or Implosion</h3>
                    <p >Coverages against destruction or damage caused to boilers (other than domestic boilers), economizers or 
                    other Vessels, machinery or apparatus</p>
                <h3 className="font-bold text-xl">Earthquake, Volcanic Eruption, or other Convulsions of Nature</h3>
                    <p >Coverages are provided against in the cases property damage in the event of earthquake</p>
                <h3 className="font-bold text-xl">Storm, Cyclone, Typhoon, Tempest, Hurricane, Tornado, Tsunami, Flood and Inundation</h3>
                    <p >Loss, destruction or damage directly caused by storm, cyclone, typhoon, tempest, hurricane, tornado, flood 
                    or inundation, volcanic eruption or other convulsions of nature</p>
                
                <h2 className="text-xl  text-red-600 mt-8 mb-5">What's not Covered</h2>
                <h3 className="font-bold text-xl">Your deliberate, wilful or intentional act or ommission, or of anyone on Your 
                    behalf, or with Your connivance</h3>
                    <p>Coverage against war, invasion, act of foreign enemy hostilities or war-like operations (whether war 
                    is declared or not), civil war, mutiny, civil c
                    ommotion amounting to a popular rising, military rising, 
                    rebellion, revolution, insurrection or military or usurped power</p>

                <h3 className="font-bold text-xl">Ionising radiation or contamination by radioactivity from any nuclear fuel or from any nuclear 
                    waste and similar perils</h3>
                    <p>Coverage against pollution or contamination, unless i. the pollution or contamination itself has resulted from an 
                    Insured Event, or ii. an Insured Event itself results from pollution or contamination</p>

                <h3>Loss, damage or destruction to any electrical/electronic machine, apparatus, fixture, or fitting 
                    from short circuiting, arcing etc</h3>
                    <p>Coverages against damage or desctruction caused to the property due to lightning</p>
                <Link to="">
                <button
                    onClick={handleBuyClick}
                    className="mt-8 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                    >
                    Buy Now
                    </button>
                </Link>
        </div>

        </div>
    </div>
  )
}

export default Homeinsurance