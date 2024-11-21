import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const F = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-8 max-w-7xl mx-auto" data-aos="fade-up" data-aos-duration="1000">
      <div className=" mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Eco-Adventure</h2>
            <p className="text-sm max-w-xl">
              Eco-Adventure is the country’s first and leading online travel aggregator (OTA). 
              Since our inception, we have dreamt of making travel easier for people of all ages 
              and we move forward to make that dream into reality.
            </p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Explore</h3>
              <ul className="text-sm space-y-2">
                <li>About Us</li>
                <li>Terms & Conditions</li>
                <li>FAQ</li>
                <li>Hotel Sitemap</li>
                <li>Medical Tourism</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Services</h3>
              <ul className="text-sm space-y-2">
                <li>Flight</li>
                <li>Hotel</li>
                <li>Holiday</li>
                <li>Visa</li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="text-sm space-y-2">
              <li>Email: <a href="mailto:ask@ecoadventure.net" className="text-blue-600">ask@ecoadventure.net</a></li>
              <li>Phone: +880 9617 617617</li>
              <li>WhatsApp: <a href="#" className="text-blue-600">Message us</a></li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <Link to="/www.facebook.com"><FaFacebookF className="text-blue-700" /></Link>
              <Link to="/www.twitter.com"><FaTwitter className="text-blue-400" /></Link>
              <Link to="/www.instagram.com"><FaInstagram className="text-pink-500" /></Link>
              <Link to="/www.linkedin.com"><FaLinkedinIn className="text-blue-600" /></Link>
              <Link to="/www.whatsapp.com"><FaWhatsapp className="text-green-500" /></Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t pt-4 text-sm text-gray-600 flex flex-col lg:flex-row justify-between items-center">
          <p>© 2024 Eco-Adventure. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#">Support Center</a>
            <a href="#">Payment Security</a>
            <a href="#">Privacy Policy</a>
            <a href="#">EMI</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default F;
