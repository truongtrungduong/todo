import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    id: 1,
    name: "Classic",
    price: 35,
    description: "Perfect for a quick refresh",
    features: [
      "Classic Manicure or Pedicure",
      "Nail Shaping & Filing",
      "Cuticle Care",
      "Regular Polish",
      "Hand or Foot Massage"
    ],
    popular: false
  },
  {
    id: 2,
    name: "Premium",
    price: 65,
    description: "Our most popular choice",
    features: [
      "Gel Manicure & Pedicure",
      "Advanced Nail Shaping",
      "Cuticle Treatment",
      "Gel Polish Application",
      "Extended Massage",
      "Exfoliation Treatment"
    ],
    popular: true
  },
  {
    id: 3,
    name: "Luxury",
    price: 95,
    description: "The ultimate pampering experience",
    features: [
      "Full Spa Manicure & Pedicure",
      "Custom Nail Art Design",
      "Premium Gel Polish",
      "Hot Stone Massage",
      "Paraffin Treatment",
      "Aromatherapy",
      "Complimentary Beverage"
    ],
    popular: false
  }
];

export function Pricing() {
  const handleBooking = () => {
    const bookingSection = document.getElementById('booking');
    bookingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-pink-500 tracking-widest uppercase mb-2 block">Pricing</span>
          <h2 className="mb-4 text-4xl md:text-5xl">Choose Your Package</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select the perfect package for your needs. All packages include premium products and expert care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <Card 
              key={plan.id} 
              className={`p-8 relative ${
                plan.popular 
                  ? 'border-pink-500 border-2 shadow-xl scale-105' 
                  : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl">${plan.price}</span>
                  <span className="text-gray-500">/session</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${
                  plan.popular 
                    ? 'bg-pink-500 hover:bg-pink-600' 
                    : 'bg-gray-900 hover:bg-gray-800'
                }`}
                onClick={handleBooking}
              >
                Book Now
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
