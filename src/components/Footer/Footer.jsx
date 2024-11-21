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
                {/* <li>About Us</li>
                <li>Terms & Conditions</li>
                <li>FAQ</li>
                <li>Hotel Sitemap</li>
                <li>Medical Tourism</li> */}
                <li><Link to="/">Home</Link></li>
                <li><Link to="/myprofile">My Profile</Link></li>
                <li><Link to="/updateprofile">Update Profile</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Other Links</h3>
              <ul className="text-sm space-y-2">
                <li><Link to="/auth/login">Login</Link></li>
                  <li><Link to="/auth/register">Register</Link></li>
                  {/* <li><Link to="/updateprofile">Update Profile</Link></li> */}
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="text-sm space-y-2">
              <li>Email: <a href="mailto:ask@ecoadventure.net" className="text-blue-600">ask@ecoadventure.net</a></li>
              <li>Phone: +880 9617 617617</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <div onClick={()=>window.open("https://www.facebook.com/", "_blank")}><FaFacebookF className="text-blue-700" /></div>
              <div onClick={()=>window.open("https://www.twitter.com/", "_blank")}><FaTwitter className="text-blue-400" /></div>
              <div onClick={()=>window.open("https://www.instagram.com/", "_blank")}><FaInstagram className="text-pink-500" /></div>
              <div onClick={()=>window.open("https://www.linkedin.com/", "_blank")}><FaLinkedinIn className="text-blue-600" /></div>
              <div onClick={()=>window.open("https://www.whatsapp.com/", "_blank")}><FaWhatsapp className="text-green-500" /></div>
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
