

const ReviewCard = ({review}) => {

    const {client_name, review_date, comment, profile_image} = review

    return (
        <div className="min-h-[250px] p-5 bg-base-200 rounded-xl">
            
            <div className="flex items-center gap-3">
                <div><img className="h-12 w-12 object-cover rounded-full" src={profile_image} alt="" /></div>
                <div>
                    <p className="text-lg font-bold">{client_name}</p>
                    <p>{review_date}</p>
                </div>
            </div>
            <p className="mt-3 text-justify">{comment}</p>
            
        </div>
    );
};

export default ReviewCard;