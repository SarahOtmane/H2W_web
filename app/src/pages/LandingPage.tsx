import SectionAlternance from "../components/home/SectionAlternance";
import Fonctionnement from "../components/landing/Fonctionnement";


const LandingPage = () => {
    return (
        <div className=" bg-gray-background w-full px-4 md:px-38 md:pt-10 md:pb-20">
            <SectionAlternance />
            <Fonctionnement />
        </div>
    );
}

export default LandingPage;