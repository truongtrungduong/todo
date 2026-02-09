import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Sparkles, Heart, Palette, Star } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Classic Manicure",
    description: "Traditional nail care with shaping, cuticle treatment, and polish application.",
    image: "https://images.unsplash.com/photo-1660241657459-554031137e4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5pY3VyZSUyMGhhbmRzfGVufDF8fHx8MTc2MjY3OTg2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Heart,
    duration: "45 min"
  },
  {
    id: 2,
    title: "Luxury Pedicure",
    description: "Indulge in a relaxing spa pedicure with exfoliation, massage, and polish.",
    image: "https://images.unsplash.com/photo-1758225490983-0fae7961e425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWRpY3VyZSUyMHNwYXxlbnwxfHx8fDE3NjI3NjQ1OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Sparkles,
    duration: "60 min"
  },
  {
    id: 3,
    title: "Gel Nails",
    description: "Long-lasting gel polish that stays chip-free for weeks with a stunning shine.",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZWwlMjBuYWlsc3xlbnwxfHx8fDE3NjI3MTg1Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Star,
    duration: "75 min"
  },
  {
    id: 4,
    title: "Nail Art Design",
    description: "Custom nail art and creative designs to express your unique style.",
    image: "https://images.unsplash.com/photo-1737214475365-e4f06281dcf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWlsJTIwYXJ0JTIwZGVzaWdufGVufDF8fHx8MTc2MjY3ODE4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Palette,
    duration: "90 min"
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-pink-500 tracking-widest uppercase mb-2 block">Our Services</span>
          <h2 className="mb-4 text-4xl md:text-5xl">Treatments We Offer</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From classic manicures to intricate nail art, our expert technicians provide
            premium services tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-none">
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3">
                    <Icon className="w-5 h-5 text-pink-500" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl">{service.title}</h3>
                    <span className="text-sm text-gray-500">{service.duration}</span>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
