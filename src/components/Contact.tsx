import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    id: 1,
    icon: MapPin,
    title: "Visit Us",
    content: "123 Beauty Lane, Suite 100\nNew York, NY 10001"
  },
  {
    id: 2,
    icon: Phone,
    title: "Call Us",
    content: "(555) 123-4567"
  },
  {
    id: 3,
    icon: Mail,
    title: "Email Us",
    content: "hello@luxenails.com"
  },
  {
    id: 4,
    icon: Clock,
    title: "Hours",
    content: "Mon-Sat: 9AM - 8PM\nSun: 10AM - 6PM"
  }
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    alert('Thank you for your booking request! We will contact you shortly to confirm your appointment.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="booking" className="py-20 px-4 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-pink-500 tracking-widest uppercase mb-2 block">Contact Us</span>
          <h2 className="mb-4 text-4xl md:text-5xl">Book Your Appointment</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to experience luxury nail care? Get in touch with us to schedule your appointment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-4">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <Card key={info.id} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-pink-100 rounded-lg p-3">
                      <Icon className="w-6 h-6 text-pink-500" />
                    </div>
                    <div>
                      <h3 className="mb-2">{info.title}</h3>
                      <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Booking Form */}
          <Card className="lg:col-span-2 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-gray-700">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-gray-700">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block mb-2 text-gray-700">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block mb-2 text-gray-700">
                    Preferred Service *
                  </label>
                  <Input
                    id="service"
                    name="service"
                    type="text"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    placeholder="e.g., Gel Manicure"
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-gray-700">
                  Additional Notes
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any special requests or preferred date/time?"
                  className="w-full min-h-32"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-pink-500 hover:bg-pink-600"
                size="lg"
              >
                Submit Booking Request
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
