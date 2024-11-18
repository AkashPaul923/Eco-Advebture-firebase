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
        <div>
            AdventureExperience
            <div>
                {
                    adventures.map( adventure => <AdventureCard key={adventure.id} adventure={adventure}></AdventureCard>)
                }
            </div>
            
        </div>
    );
};

export default AdventureExperience;