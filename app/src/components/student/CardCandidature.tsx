import React from "react"
import ButtonWhite from "../buttons/ButtonWhite"
import Icon from "../../utils/Icon"

interface CardCandidatureProps{
    statut: string,
    poste: string,
    time: string,
    image?: string,
    entreprise?: string,
}

const renderStatut = (statut: string) => {
    switch (statut) {
        case "envoyé":
            return <div className="flex flex-row items-center bg-[#FBD6B4] py-2 px-4 rounded-[2rem]">
                <Icon name="send" />
                <p className="ml-1">Envoyé</p>
            </div>;
        case "en attente":
            return <div className="flex flex-row items-center bg-[#EAE5FF] py-2 px-4 rounded-[2rem]">
                <Icon name="wait" />
                <p className="ml-1">En cours de traitement</p>
            </div>;
        case "accepté":
            return <div className="flex flex-row items-center bg-[#CBEFD0] py-2 px-4 rounded-[2rem]">
                <Icon name="check" />
                <p className="ml-1">Accepté</p>
            </div>;
        case "refusé":
            return <div className="flex flex-row items-center bg-[#FFC3C3] py-2 px-4 rounded-[2rem]">
                <Icon name="refused" />
                <p className="ml-1">Refusé</p>
            </div>;
    }
}


const CardCandidature : React.FC<CardCandidatureProps> = ({statut, poste, time, image, entreprise}) =>{
    return(
        <div className="min-w-[40%] max-w-[40%] flex-shrink-0 bg-white rounded-[1rem] p-6 ">
            <div className="flex flex-row justify-between items-center mb-8">
                <div className="flex flex-row items-center">
                    <img src={image} alt="entreprise" className="mr-2" />
                    <p>{entreprise}</p>
                </div>
                {renderStatut(statut)}
            </div>
            <p className="text-black text-[20px] font-Jakarta-extra-bold ">{poste}</p>
            <div className="flex flex-row justify-between align-bottom mt-6">
                <ButtonWhite text="Voir l'annonce" icon={<Icon name="flecheButton" />} textStyle="text-[16px]" />
                <p className="text-[#9FA6B2] text-[14px] font-Jakarta-medium self-end ">Envoyé il y'a {time} </p>
            </div>
        </div>
    )
}

export default CardCandidature