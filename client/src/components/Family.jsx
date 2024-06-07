

    
function Family() {
    const handleBuyClick = () => {
        alert("Thank you for your interest! Purchase functionality is not implemented yet.");
      };
  return (
    <div className="mt-8 ">
      
        <div className="flex mx-28">
         
          <div className="max-w-xl p-4 ">
            <img src="star.jpg" alt="star" className="w-full h-auto" />
            <div className="mt-6">
            <p className="flex"><img className=" py-1 max-w-5 mr-1" src="discount.png"></img>Inclusive of 10% online discount*</p>
            <p className="flex"><img className=" py-1 max-w-5 mr-1" src="check.png"></img>Single pvt AC Room</p>
            <p className="flex"><img className=" py-1 max-w-5 mr-1" src="check.png"></img>₹2.5 lakh No Claim Bonus</p>
            <p className="flex"><img className=" py-1 max-w-5 mr-1" src="check.png"></img>Restoration of cover once a year</p>
            </div>
          </div>
          <div className="w-1/2 p-4 ">
          <h2 className="text-3xl font-semibold text-wrap">Smart Health Pro</h2>
          <p className="mt-4 text-gray-700 text-justify">
          Commencing operations in 2006 as Indias first Standalone Health Insurance provider, 
          Star Health and Allied Insurance Co Ltd is providing sterling services in Health, 
          Personal Accident and Overseas Travel Insurance etc. 
          Awarded for “Best Health Insurance provider of the year 2018” – Business Today, 
          Money Today financial awards 2018 – 2019 and Awarded as “India’s leading Insurance 
          Company of the year – Dun & Bradstreet BFSI Summit & Awards 2019. Star health offers a 
          wide range of products from floater schemes, senior citizen coverage plans and products 
          for Diabetes/Heart/HIV patients also. It has a Pan India presence with 550+branch offices, 
          Cashless treatment at 9900+ hospitals across India, Star health also provides 24 X 7 FREE 
          medical advice and expert Doctor consultation. You also get Hassle-free in-house claim 
          settlement without intervention of TPA. Star Health efforts have always been on service 
          excellence and product innovation with a focus on delivering the best to the customers </p>
          <p className="mt-4 text-gray-700">
          Co-pay is the share of claim to be paid by the policyholder, while the rest is paid by the insurer. Always look out for plan with 0% co-pay or minimum co-payment.</p>
          <p className="mt-4 text-gray-700">
          30 days; except claims arising due to an accident, provided the same are covered. This is standard in the industry across all insurance policies</p>
          <p className="mt-4 text-gray-700">
            Premium: Starting at $10 per month
          </p>

            <button
              onClick={handleBuyClick}
              className="mt-8 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Buy Now
            </button>
            
          </div>
          {/* 3rd column */}
          <div className="mx-8 mt-8">
            <a href="#" className="block">
              <img
                alt=""
                src="srks.jpg"
                className="h-64 w-full object-cover sm:h-80 lg:h-96"
              />

              <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Shah Rukh Khan</h3>

              <p className="mt-2 max-w-sm text-gray-700">
              Deeply grateful to Saviours team for their invaluable initiative of Claim Samadhaan Diwas. Thank you immensely!
              </p>
              </a>
                  </div>
           

      {/* 3rd column */}
      </div>
      {/* company-2 */}
      <div className="flex mx-28">
      <div className="max-w-xl p-4">
        <img src="niva.jpg" alt="car" className="w-full h-auto" />
        <div className="mt-6">
        <p className="flex"><img className=" py-1 max-w-5 mr-1" src="discount.png"></img>Inclusive of 10% online discount*</p>
        <p className="flex"><img className=" py-1 max-w-5 mr-1" src="check.png"></img>No Room Rent Limit</p>
        <p className="flex"><img className=" py-1 max-w-5 mr-1" src="check.png"></img>₹10 lakh No Claim Bonus</p>
        <p className="flex"><img className=" py-1 max-w-5 mr-1" src="check.png"></img>Unlimited Restoration of Cover</p>
        </div>

      </div>
      <div className="w-1/2 p-4">
      <h2 className="text-3xl font-semibold text-wrap">Aspire Gold+ Combo</h2>
      <p className="mt-4 text-gray-700 text-justify">
        Niva Bupa Health Insurance Company Ltd. (formerly known as Max Bupa Health Insurance Company Limited) 
        is a joint venture between Fettle Tone LLP (an affiliate of True North Fund VI LLP), a leading Indian 
        private equity firm, and the UK based healthcare services expert, Bupa Singapore Holdings Pte. Limited. 
        “Niva” is a popular Hindi/Sanskrit word and also means SUN – which is a symbol of hope, positivity, 
        energy, and above all life itself. Being one of the most trusted standalone health insurance companies 
        in the country, Niva Bupa Health Insurance has curated a wide range of health insurance policies, such 
        as individual health insurance, family floater insurance policy and top-up insurance cover, as per the 
        understanding of the Indian market and catering to the consumers diverse requirements, just the way they 
        like. 
      </p>
      <p className="mt-4 text-gray-700">
      Room rent limit is the maximum amount per day cost allowed by the insurer. Related expenses, such as doctor 
      consultation etc. are paid in proportion to the room rent limit. Look out for plans with No Room Rent limit</p>
      <p className="mt-4 text-gray-700">
      Certain diseases or medical conditions and procedures may come with a specific waiting period.These may include 
      cataracts, ENT disorders, osteoporosis, hernia, joint replacement surgery, etc. The waiting period for such 
      illnesses can vary from 2 to 4 years, depending on the policy’s terms and conditions.</p>
      <p className="mt-4 text-gray-700">
        Premium: Starting at $50 per month
      </p>

        <button
          onClick={handleBuyClick}
          className="mt-8 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Buy Now
        </button>
      </div>
      {/* column-3 start */}
      <div className="max-w-sm mx-8">
      <a href="#" className="group relative block bg-black">
  <img
    alt=""
    src="msd.jpg"
    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div className="relative p-4 sm:p-6 lg:p-8">
    <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Indian Cricketer</p>

    <p className="text-xl font-bold text-white sm:text-2xl">MS Dhoni</p>

    <div className="mt-32 sm:mt-48 lg:mt-64">
      <div
        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p className="text-sm text-white">
        I express my heartfelt gratitude to the Saviours team for swiftly settling my claim. Wishing all Saviours 
        customers the same prompt and excellent service experience.
        </p>
      </div>
    </div>
  </div>
</a>
      </div>
      {/* column-3 end */}
      </div>
      {/* company-2 */}
      {/* company-3 */}

      <div className="flex mx-28">
      <div className="max-w-xl p-4">
        <img src="icici.jpg" alt="icici" className="w-full h-auto" />
        <div className="mt-6">
        <p className="flex"><img className=" py-1 max-w-5 mr-1" src="discount.png"></img>Inclusive of 10% online discount*</p>
        <p className="flex"><img className=" py-1 max-w-5 mr-1" src="check.png"></img>Single pvt AC Room</p>
        <p className="flex"><img className=" py-1 max-w-5 mr-1" src="check.png"></img>₹1 lakh No Claim Bonus</p>
        <p className="flex"><img className=" py-1 max-w-5 mr-1" src="check.png"></img>Unlimited Restoration of Cover</p>
        </div>

      </div>
      <div className="w-1/2 p-4">
      <h2 className="text-3xl font-semibold text-wrap">Elevate</h2>
      <p className="mt-4 text-gray-700 text-justify">
      Why Choose ICICI LombardICICI Lombard GIC Ltd. is a joint venture between ICICI Bank Limited, India's second 
      largest bank with total assets of over USD 99 billion at March 31, 2014 and Fairfax Financial Holdings Limited,
       a Canada based USD 37 billion diversified financial services company engaged in general insurance, reinsurance, 
       insurance claims management and investment management. ICICI Lombard GIC Ltd. is one of the leading private sector 
       general insurance companies in India with a Gross Written Premium (GWP) of Rs 71.34 billion for the year 
       ended March 31, 2014.
      </p>
      <p className="mt-4 text-gray-700">
      Rs 1 lakh every claim free year up to maximum of Rs 5 lakh. In case of claim, renewal bonus will not be reduced</p>
      <p className="mt-4 text-gray-700">
      24 months; for slow growing diseases like knee replacement, hernia, cataract etc. See full list of diseases mentioned in policy wordings</p>
      <p className="mt-4 text-gray-700">
        Premium: Starting at $25 per month
      </p>

        <button
          onClick={handleBuyClick}
          className="mt-8 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Buy Now
        </button>
      </div>
      {/* column-3 start */}
      <div className="mx-7 max-w-sm">
      <a href="#" className="group relative block h-64 sm:h-80 lg:h-96">
  <span className="absolute inset-0 border-2 border-dashed border-black"></span>

  <div
    className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
  >
    <div
      className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-10 sm:size-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>

      <h2 className="mt-4 text-xl font-medium sm:text-2xl">Go around the world</h2>
    </div>

    <div
      className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
    >
      <h3 className="mt-4 text-xl font-medium sm:text-2xl">Go to the Saviours</h3>

      <p className="mt-4 text-sm sm:text-base">
      Thanks Policybazaar for going above and beyond with your amazing customer service. You've made us so happy!
      </p>

      <p className="mt-8 font-bold">Read more</p>
    </div>
  </div>
</a>
      </div>
      {/* column-3 end*/}
      </div>

      {/* company-3 */}
      
      <div>
        
      
      </div>
    </div>
  )
}

export default Family