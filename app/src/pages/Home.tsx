import Abonnements from "../components/home/Abonnements";
import Etapes from "../components/home/Etapes";
import Section1 from "../components/home/section1";
import Section2 from "../components/home/Section2";
import Newsletter from "../components/Newsletter";


const Home: React.FC = () => {

    return (
        <div className=" bg-gray-background w-full px-38 pt-10 pb-20">
            <Section1 />
            <Etapes />
            <Section2 />
            <Abonnements />
            <Newsletter />
        </div>
    );
}

export default Home;