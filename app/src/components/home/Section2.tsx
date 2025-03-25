import Icon from "../../utils/Icon";
import Pg from "../Pg";
import PageTitle from "../titles/PageTitle";
import HomeCard from "./HomeCard";




const Section2: React.FC = () =>{
    return(
        <div className="w-full bg-custom-black rounded-[2rem] px-14 py-18 mb-30">
            <PageTitle text="Rejoins Hive2Work et créé ton portfolio" style="text-center text-white" />
            <Pg text="Fini les lettres de motivation monotones ! Intègre un portfolio interactif et illustre tes arguments en un clic." style="text-center text-white mt-2" />
            <div className="flex flex-col md:flex-row md:justify-center mt-16">
                <HomeCard 
                    icon={<Icon name="HomeEtoile" />}
                    title="Valorise tes réalisations"
                    text="Une page unique pour mettre en avant ton parcours et tes projets (missions, réalisations...)"
                    style="md:mr-10 mb-12 md:mb-0"
                />
                <HomeCard 
                    icon={<Icon name="HomeOeil" />}
                    title="Sois visible"
                    text="Une visibilité optimisée pour attirer les recruteurs et décrocher ton alternance."
                    style="md:mr-10 mb-12 md:mb-0"
                />
                <HomeCard 
                    icon={<Icon name="HomeChat" />}
                    title="Contacte directement"
                    text="Prise de contact directe avec les recruteurs via la plateforme, sans exposer ton email"
                    style="md:mr-10 mb-12 md:mb-0"
                />
                <HomeCard 
                    icon={<Icon name="HomePinceau" />}
                    title="Personnalise ton portfolio"
                    text="Un portfolio interactif et personnalisable grâce à une interface intuitive"
                />
            </div>
            <button className={`flex items-center justify-center font-Jakarta-semi-bold px-5 py-3 m-auto mt-15 cursor-pointer bg-white border-gray-border border-1  text-black rounded-[2rem] hover:text-white hover:bg-black hover:border-black`}>
                <Icon name="flecheButton" />
                <p className='ml-2 mr-3'>Je m'inscris</p>
                <Icon name="flecheVersLeBas" />
            </button>
        </div>
    )
}

export default Section2;