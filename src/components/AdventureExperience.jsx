import { useEffect, useState } from "react";
import AdventureCard from "./AdventureCard";


const AdventureExperience = () => {
    const [adventures , setAdventures] = useState([])

    useEffect(() =>{
        fetch("adventureData.json")
        .then(res => res.json())
        .then(data => setAdventures(data))
    },[])

    return (
        <div className="my-16 px-3 lg:px-0">
            <h3 className="font-bold text-xl md:text-2xl lg:text-5xl text-center">Our Tour Packages for You</h3>
            <p className="text-center mt-4 mb-8">Plan your dream gateway and choose from uncountable tour packages at Eco Adventure. Book our holiday packages for the best deals on any international trip.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    adventures.map( adventure => <AdventureCard key={adventure.id} adventure={adventure}></AdventureCard>)
                }
            </div>
            
        </div>
    );
};

export default AdventureExperience;