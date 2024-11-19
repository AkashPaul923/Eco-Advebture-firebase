
import AdventureExperience from "../components/AdventureExperience";
import Banner from "../components/Banner";
import Features from "../components/Features";


const HomeLayout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            home
            <Banner></Banner>
            <AdventureExperience></AdventureExperience>
            <Features></Features>
        </div>
    );
};

export default HomeLayout;