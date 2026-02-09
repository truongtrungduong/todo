import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Award, Clock, Users, Heart } from "lucide-react";

const stats = [
  {
    id: 1,
    icon: Users,
    value: "5000+",
    label: "Happy Clients"
  },
  {
    id: 2,
    icon: Clock,
    value: "10+",
    label: "Years Experience"
  },
  {
    id: 3,
    icon: Award,
    value: "15+",
    label: "Expert Technicians"
  },
  {
    id: 4,
    icon: Heart,
    value: "100%",
    label: "Satisfaction Rate"
  }
];

export function About() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1720086196723-a1e0656a90a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBuYWlsJTIwc2Fsb258ZW58MXx8fHwxNzYyNjc5ODY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="About our salon"
                className="w-full h-[600px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-pink-500 text-white p-8 rounded-2xl shadow-xl max-w-xs">
              <p className="text-lg">
                "The best nail salon experience I've ever had. Absolutely stunning results every time!"
              </p>
              <p className="mt-4">— Sarah Johnson</p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="text-pink-500 tracking-widest uppercase mb-2 block">About Us</span>
            <h2 className="mb-6 text-4xl md:text-5xl">
              Your Trusted Nail Care Experts
            </h2>
            <p className="text-gray-600 mb-6">
              With over a decade of experience, we've become the premier destination for luxury nail care. 
              Our team of certified technicians is passionate about delivering exceptional results using 
              only the highest quality products.
            </p>
            <p className="text-gray-600 mb-8">
              We believe that nail care is more than just a beauty treatment—it's a form of self-care 
              and personal expression. That's why we create a relaxing, welcoming environment where you 
              can unwind while we perfect your look.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.id} className="flex items-start gap-4">
                    <div className="bg-pink-100 rounded-lg p-3">
                      <Icon className="w-6 h-6 text-pink-500" />
                    </div>
                    <div>
                      <div className="text-3xl mb-1">{stat.value}</div>
                      <div className="text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
