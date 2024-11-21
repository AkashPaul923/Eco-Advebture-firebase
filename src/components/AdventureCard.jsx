import { Link } from "react-router-dom";


const AdventureCard = ({ adventure }) => {
    // console.log(adventure);
    const { id, adventureTitle, image, ecoFriendlyFeatures } = adventure
    return (
        <div className="p-5 rounded-2xl bg-gradient-to-b from-[#FBF8EF] via-[#FEF3E2] to-[#FBF8EF]"  data-aos="zoom-in"  data-aos-duration="2000">
            <div>
                <img className="rounded-2xl object-cover" src={image} alt="" />
            </div>
            <div className="space-y-4 mt-5">
                <h3 className="text-2xl font-bold">{adventureTitle}</h3>
                <div>
                    <p className="text-lg font-bold">Eco friendly features:</p>
                    <ul>
                        {
                            ecoFriendlyFeatures.map( (feature, idx) => <li key={idx}> {idx+1}. {feature}</li>)
                        }
                    </ul>
                </div>
                <Link to={`/adventure/detail/${id}`} className="btn bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-bold  ">Explore Now</Link>
            </div>
        </div>
    );
};

export default AdventureCard;