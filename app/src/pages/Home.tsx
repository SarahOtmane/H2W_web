import Abonnements from "../components/home/Abonnements";
import Etapes from "../components/home/Etapes";
import SectionAlternance from "../components/home/SectionAlternance";
import Section2 from "../components/home/Section2";
import Newsletter from "../components/Newsletter";


const Home: React.FC = () => {

    return (
        <div className=" bg-gray-background w-full px-4 md:px-38 md:pt-10 md:pb-20">
            <SectionAlternance />
            <Etapes />
            <Section2 />
            <Abonnements />
            <Newsletter />
        </div>
    );
}

export default Home;