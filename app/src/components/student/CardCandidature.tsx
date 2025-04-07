import React from "react"
import ButtonWhite from "../buttons/ButtonWhite"
import Icon from "../../utils/Icon"

interface CardCandidatureProps{
    statut: string,
    poste: string,
    time: string
}


const CardCandidature : React.FC<CardCandidatureProps> = ({statut, poste, time}) =>{
    return(
        <div className="bg-white rounded-[1rem]">
            <div>
                <p className="rounded-[1rem]">{statut}</p>
                {switch (statut) {
                    case value:
                        
                        break;
                
                    default:
                        break;
                }}
            </div>
            <p className="text-black text-[20px] font-Jakarta-extra-bold ">{poste}</p>
            <div className="flex flex-row justify-between align-bottom">
                <ButtonWhite text="Voir l'annonce" icon={<Icon name="flecheButton" />} />
                <p className="text-[#9FA6B2] text-[14px] font-Jakarta-medium ">Envoyé il y'a {time} </p>
            </div>
        </div>
    )
}

export default CardCandidature