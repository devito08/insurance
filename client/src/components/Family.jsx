

    
function Family() {
    const handleBuyClick = () => {
        alert("Thank you for your interest! Purchase functionality is not implemented yet.");
      };
  return (
    <div>
        <div className="flex">
      <div className="max-w-xl p-4">
        <img src="star.jpg" alt="car" className="w-full h-auto" />
      </div>
      <div className="w-1/2 p-4">
      <h2 className="text-3xl font-semibold">Comprehensive Bike Insurance</h2>
      <p className="mt-4 text-gray-700">
        Our Bike insurance policy offers extensive coverage with robust protection and the latest in insurance technology. Enjoy peace of mind with our reliable and responsive services.
      </p>
      <p className="mt-4 text-gray-700">
        Our insurance package includes a range of advanced features such as roadside assistance, collision coverage, and a user-friendly claims process.
      </p>
      <p className="mt-4 text-gray-700">
        We provide customized policies with premium options tailored to your needs. Our coverage ensures both safety and convenience, making your driving experience worry-free.
      </p>
      <p className="mt-4 text-gray-700">
        Premium: Starting at $100 per month
      </p>

        <button
          onClick={handleBuyClick}
          className="mt-8 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Buy Now
        </button>
      </div>
      </div>
    </div>
  )
}

export default Family