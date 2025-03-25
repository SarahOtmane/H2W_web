import Icon from "../../utils/Icon";
import ButtonBlack from "../buttons/ButtonBlack";
import PageTitle from "../titles/PageTitle";



const Etapes: React.FC = () => {
    return (
       <>
        <div className="bg-white text-black w-full flex rounded-[2rem] relative pt-12 pb-8 md:py-12 items-center mb-4">
            <p className=" mt-[-8rem] md:mt-0 ml-[30%] md:ml-12 px-10 py-3 border-1 border-gray-dark rounded-[2rem] absolute">Étapes</p>
            <PageTitle text="Comment ca fonctionne ?" style="text-center w-full mt-[3rem] md:mt-0" />
        </div>
        <div className="bg-white px-16 py-12 rounded-[2rem] mb-18">
            <div className="flex flex-col md:flex-row md:justify-center md:items-center text-black">
                <div className=" w-full md:w-1/3 md:mr-30 mb-10 md:mb-0">
                    <h2 className="font-Jakarta-extra-bold text-[64px]">1.</h2>
                    <p className="font-Jakarta-extra-bold text-[20px] mb-4">Créez votre portfolio interactif</p>
                    <p>Mettez en avant vos projets, compétences et expériences avec un portfolio personnalisable et une interface de création intuitive.</p>
                </div>
                <div className="w-full md:w-1/3 md:mr-30 mb-10 md:mb-0">
                    <h2 className="font-Jakarta-extra-bold text-[64px]">2.</h2>
                    <p className="font-Jakarta-extra-bold text-[2Opx] mb-4">Cherchez l’alternance de vos rêves</p>
                    <p>Mettez en avant vos projets, compétences et expériences avec un portfolio personnalisable et une interface de création intuitive.</p>
                </div>
                <div className="w-full md:w-1/3">
                    <h2 className="font-Jakarta-extra-bold text-[64px]">3.</h2>
                    <p className="font-Jakarta-extra-bold text-[2Opx] mb-4">Postulez rapidement aux offres</p>
                    <p>Mettez en avant vos projets, compétences et expériences avec un portfolio personnalisable et une interface de création intuitive.</p>
                </div>
            </div>
            <ButtonBlack icon={<Icon name='flecheButton' />} text="Créer mon portfolio" style="mt-12" />
        </div>
       </>
    );
}

export default Etapes