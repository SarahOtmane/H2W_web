import React from "react";
import { CreateAnnoncesType } from "../../types/Annonces.type";


interface AnnonceDetailProps {
    annonce : CreateAnnoncesType,
    setPopupVisualAnnonce : React.Dispatch<React.SetStateAction<boolean>>,
}

const AnnonceDetail : React.FC<AnnonceDetailProps> = () => {
    return(
        <div className="bg-[#F6F6F6] w-[80%] max-h-[90vh] overflow-y-auto px-14 py-10">
            <section className="bg-white rounded-[1rem]">
                il s agit d un test
            </section>
        </div>
    )
}

export default AnnonceDetail;