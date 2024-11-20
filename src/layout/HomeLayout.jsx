
import AdventureExperience from "../components/AdventureExperience";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Review from "../components/Review";


const HomeLayout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Banner></Banner>
            <AdventureExperience></AdventureExperience>
            <Features></Features>
            <Review></Review>
        </div>
    );
};

export default HomeLayout;