import Pg from "../Pg";
import PageTitle from "../titles/PageTitle";

import image from '../../assets/images/home_sec1.png';
import back from '../../assets/images/home_back.png';
import Subtitle from "../titles/Subtitle";
import ButtonBlack from "../buttons/ButtonBlack";
import ButtonWhite from "../buttons/ButtonWhite";
import Icon from "../../utils/Icon";




const Section1: React.FC = () => {
    return(
        <section 
            className="w-full bg-lilas rounded-[2rem] flex flex-row justify-between p-12 mb-30 pl-25" 
            style={{backgroundImage: `url(${back})`, backgroundPosition: "70%", backgroundRepeat: "no-repeat"}}
        >
            <div className="w-2/5">
                <h1 className={`font-Jakarta-extra-bold text-2xl sm:text-3xl md:text-4xl lg:text-page-title/14`}><span className="text-white">Le portfolio</span> pensé pour la recherche d’alternance !</h1>
                <Subtitle 
                    text="Trouvez l’alternance de vos rêves en mettant vos compétences en avant." 
                    style="font-Jakarta-medium text-sm sm:text-base md:text-lg lg:text-body pr-4 mt-9" 
                />
                <div className="flex flex-row mt-10 mb-20">
                    <ButtonBlack text="Créer mon portfolio" icon={<Icon name="flecheButton" />} style="mr-4" />
                    <ButtonWhite text="Publier une offre" icon={<Icon name="flecheButton" />} style="bg-white text-black" />
                </div>
            </div>
            <div className="w-1/5 bg-white rounded-[2rem] p-8 h-max">
                <PageTitle text='585 +' style="text-custom-orange mb-3" />
                <Pg text="Plus de 585 personnes ont trouver une alternance grâce à notre plateforme !" style="mb-8" />
                <img src={image} alt="illustration" className="w-[90%]" />
            </div>
        </section>
    )
}

export default Section1;