import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'

const AdventureDetail = () => {
    const adventure = useLoaderData()
    // console.log(adventure);
    const { adventureTitle, image, categoryName, shortDescription, adventureCost, bookingAvailability, location, duration, adventureLevel, includedItems, ecoFriendlyFeatures, maxGroupSize, specialInstructions } = adventure
    const currTime = new Date().getHours()
    // console.log( currTime );
    const handleTalkBtn = () =>{
        if(currTime >= 10 && currTime <= 20){
            const meetLink = "https://meet.google.com";
            window.open(meetLink, "_blank");
        }
        else{
            Swal.fire({
                title: "Apologies, there's no expert available at the moment.",
                text: "Please try contacting us between 10:00 AM and 8:00 PM.",
                icon: 'error',
                confirmButtonText: 'Cancel'
              })
        }
        
    }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-7xl mx-auto my-14 px-6 lg:px-0'>
            <div data-aos="fade-right" data-aos-duration="1000">
                <img className='h-full object-cover rounded-2xl' src={image} alt="" />
            </div>
            <div className='space-y-3' data-aos="fade-left" data-aos-duration="1000">
                <p className='text-3xl font-bold'>{adventureTitle}</p>
                <p>{shortDescription}</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2 text-lg font-semibold'>
                    <p>Location: {location}</p>
                    <p>Level: {adventureLevel}</p>
                    <p>Duration: {duration}</p>
                    <p>Maximum people in a group: {maxGroupSize}</p>
                </div>
                <p className='text-xl font-bold text-red-800'>Cost: ${adventureCost}</p>
                <div className=''>
                    <p className='text-lg font-semibold'>Include Items:</p>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-1'>
                        {
                            includedItems.map( (item, i) => <li key={i}>{item}</li>)
                        }
                    </div>
                </div>
                <div>
                <p className='text-lg font-semibold'>Eco-Friendly features:</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-1'>
                        {
                            ecoFriendlyFeatures.map( (feature, i) => <li key={i}>{feature}</li>)
                        }
                    </div>
                </div>
                <div>
                <p className='text-lg font-semibold'>Special Instructions:</p>
                    {
                        specialInstructions.map( (ins, i) => <li key={i}>{ins}</li>)
                    }
                </div>
                <button onClick={handleTalkBtn} className='btn btn-outline'>Talk with Expert</button>

            </div>
        </div>
    );
};

export default AdventureDetail;