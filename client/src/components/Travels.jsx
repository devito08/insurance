import React from 'react';

function Travels() {
  const plans = [
    {
      provider: 'Care Health',
      plan: 'Explore Gold - Excluding US & Canada',
      features: {
        MedicalExpenses: '$200,000',
        LossOfPassport: '$300',
        BaggageLoss: '$750',
      },
      premium: '₹1,872',
    },
    {
      provider: 'Niva Bupa (formerly known as Max Bupa)',
      plan: 'Travel Assure',
      features: {
        MedicalExpenses: '$250,000',
        LossOfPassport: '$300',
        BaggageLoss: '$750',
      },
      premium: '₹1,282',
    },
    {
      provider: 'ICICI Lombard',
      plan: 'Gold',
      features: {
        MedicalExpenses: '$250,000',
        LossOfPassport: '$300',
        BaggageLoss: '$500',
      },
      premium: '₹2,042',
    },
  ];

  return (
    <div>
        <img src="travenav.jpg" alt="nav" className="h-100 w-screen mr-4" />
      
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div key={index} className="border rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-2">{plan.provider}</h2>
            <h3 className="text-lg font-medium mb-4">{plan.plan}</h3>
            <ul className="mb-4">
              <li className="mb-1">
                <span className="font-semibold">Medical Expenses:</span> {plan.features.MedicalExpenses}
              </li>
              <li className="mb-1">
                <span className="font-semibold">Loss of Passport:</span> {plan.features.LossOfPassport}
              </li>
              <li className="mb-1">
                <span className="font-semibold">Baggage Loss:</span> {plan.features.BaggageLoss}
              </li>
            </ul>
            <div className="text-lg font-bold mb-4">Premium (GST included): {plan.premium}</div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Buy now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Travels;
