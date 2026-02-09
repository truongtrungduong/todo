import { Facebook, Instagram, Twitter, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-pink-400" />
              <span className="text-xl">Luxe Nails</span>
            </div>
            <p className="text-gray-400">
              Your premier destination for luxury nail care and beauty treatments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#services" className="hover:text-pink-400 transition-colors">Services</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-pink-400 transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-pink-400 transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#booking" className="hover:text-pink-400 transition-colors">Book Now</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Manicure</li>
              <li>Pedicure</li>
              <li>Gel Nails</li>
              <li>Nail Art</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Beauty Lane</li>
              <li>New York, NY 10001</li>
              <li>(555) 123-4567</li>
              <li>hello@luxenails.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 Luxe Nails. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <a 
              href="#" 
              className="bg-gray-800 hover:bg-pink-500 p-2 rounded-full transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="bg-gray-800 hover:bg-pink-500 p-2 rounded-full transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="bg-gray-800 hover:bg-pink-500 p-2 rounded-full transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
