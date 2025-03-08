import Icon from "../../Icon";
import ButtonBlack from "../buttons/ButtonBlack";
import PageTitle from "../titles/PageTitle";



const Etapes: React.FC = () => {
    return (
       <>
        <div className="bg-white text-black w-full flex rounded-[2rem] relative py-12 items-center mb-4">
            <p className="ml-12 px-10 py-3 border-1 border-gray-dark rounded-[2rem] absolute">Étapes</p>
            <PageTitle text="Comment ca fonctionne ?" style="text-center w-full" />
        </div>
        <div className="bg-white px-16 py-12 rounded-[2rem] mb-18">
            <div className="flex justify-center items-center text-black">
                <div className="w-1/3 mr-30">
                    <PageTitle text="1 ." />
                    <h2 className="font-Jakarta-bold text-lg sm:text-xl md:text-2xl lg:[26px] mb-4">Créez votre portfolio interactif</h2>
                    <p>Mettez en avant vos projets, compétences et expériences avec un portfolio personnalisable et une interface de création intuitive.</p>
                </div>
                <div className="w-1/3 mr-30">
                    <PageTitle text="2 ." />
                    <h2 className="font-Jakarta-bold text-lg sm:text-xl md:text-2xl lg:[26px] mb-4">Cherchez l’alternance de vos rêves</h2>
                    <p>Mettez en avant vos projets, compétences et expériences avec un portfolio personnalisable et une interface de création intuitive.</p>
                </div>
                <div className="w-1/3">
                    <PageTitle text="3 ." />
                    <h2 className="font-Jakarta-bold text-lg sm:text-xl md:text-2xl lg:[26px] mb-4">Postulez rapidement aux offres</h2>
                    <p>Mettez en avant vos projets, compétences et expériences avec un portfolio personnalisable et une interface de création intuitive.</p>
                </div>
            </div>
            <ButtonBlack icon={<Icon name='flecheButton' />} text="Créer mon portfolio" style="mt-12" />
        </div>
       </>
    );
}

export default Etapes