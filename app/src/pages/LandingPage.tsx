import SectionAlternance from "../components/home/SectionAlternance";
import CvInteractif from "../components/landing/CvInteractif";
import Fonctionnement from "../components/landing/Fonctionnement";


const LandingPage = () => {
    return (
        <div className=" bg-gray-background w-full px-4 md:px-38 md:pt-10 md:pb-20">
            <SectionAlternance />
            <Fonctionnement />
            <CvInteractif />
        </div>
    );
}

export default LandingPage;