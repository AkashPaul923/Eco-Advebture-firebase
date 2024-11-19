import { FaCalendarAlt } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaMountainSun } from "react-icons/fa6";
import { GiBackpack } from "react-icons/gi";

const Features = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col justify-center items-center text-center">
            <div className="mb-4">
              <FaMountainSun className="text-orange-500 text-6xl" />
            </div>
            <h3 className="text-lg font-bold mb-2">New Destination</h3>
            <p className="text-gray-600">
              Discover unique travel destinations and hidden gems around the world.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col justify-center items-center text-center">
            <div className="mb-4">
              <GiBackpack className="text-orange-500 text-6xl" />
            </div>
            <h3 className="text-lg font-bold mb-2">Safe Adventure</h3>
            <p className="text-gray-600">
              Enjoy secure and thrilling adventures with our expert guides.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col justify-center items-center text-center">
            <div className="mb-4">
              <FaUserTie className="text-orange-500 text-6xl" />
            </div>
            <h3 className="text-lg font-bold mb-2">24h Guidance</h3>
            <p className="text-gray-600">
              Receive round-the-clock assistance for a seamless travel experience.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col justify-center items-center text-center">
            <div className="mb-4">
              <FaCalendarAlt className="text-orange-500 text-6xl" />
            </div>
            <h3 className="text-lg font-bold mb-2">Flexible Date</h3>
            <p className="text-gray-600">
              Plan your trips with flexible schedules tailored to your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;