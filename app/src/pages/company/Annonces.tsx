import { useState } from "react";
import MenuItem from "../../components/company/MenuItem";
import InputCheckbox from "../../components/fields/InputCheckbox";
import TitrePage from "../../components/student/TitrePage";
import AnnoncesController from "../../controllers/Annonces.controller";
import { AnnoncesType } from "../../types/Annonces.type";
import Icon from "../../utils/Icon";
import ButtonBlack from "../../components/buttons/ButtonBlack";
import CreateAnnonce from "../../components/forms/CreateAnnonce";




const Annonces = () => {
    const { annonces } = AnnoncesController();

    const Annonces: AnnoncesType[] = annonces;
    const [selectedAnnonceId, setSelectedAnnonceId] = useState<number>(0);
    const [createAnnonce, setCreateAnnonce] = useState<boolean>(false);

    const renderStatut = (statut : string) => {
        if(statut === 'publie') return <p className="bg-[#D6F9E3] text-[#03682B] px-6 py-3 rounded-[2rem] ">Publié</p>
        else if (statut === 'brouillon') return <p className="bg-[#FFE1C5] text-[#934D0B] px-6 py-3 rounded-[2rem] ">Brouillon</p>
        else if (statut === 'archive') return <p className="bg-[#FFD0D0] text-[#871010] px-6 py-3 rounded-[2rem] ">Archivé</p>
    }

    const renderButtonContent = (statut : string) => {
        let text = '';

        if (statut === 'publie') text = 'Afficher les profils candidats';
        else if (statut === 'brouillon') text = 'Publier l’offre';
        else if (statut === 'archive') text = 'Voir l’offre';

        return text
    }

    return(
        <main className=" bg-gray-background md:pt-10 md:pb-20">
            <TitrePage title="Tableau de bord" />
            <MenuItem linkSelected="offer" style="bg-white text-custom-black" textColor="black" />
            {!createAnnonce && (
                <>
                <div className="flex flex-row items-center justify-between w-full mt-10 md:px-40">
                    <p className="font-Jakarta-extra-bold text-[24px] text-custom-black ">{Annonces.length} annonce(s)</p>
                    <div className="flex flex-row items-center justify-between">
                        <button className="bg-custom-orange rounded-[2rem] py-4 px-6 text-white cursor-pointer " onClick={() => setCreateAnnonce(true)}>+ Ajouter une annonce</button>
                        <button className="bg-custom-black rounded-[1rem] py-4 px-6 text-white flex items-center ml-3 cursor-pointer ">
                            <Icon name="filtre" />
                            <span className="ml-2">Filtres</span>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col justify-center w-full mt-10 md:px-40">
                    {Annonces.length === 0 ? (
                        <div className="flex flex-col items-center justify-center w-full h-[10vh]">
                            <p className="font-Jakarta-regular text-[16px] text-custom-black">Vous n'avez pas encore d'annonces.</p>
                        </div>
                    ) : (
                        Annonces.map((annonce) => (
                            <div key={annonce.id} className="bg-white rounded-[1rem] p-6 mb-8 w-full">
                                <div className="flex items-center justify-between mb-12">
                                    <div className="flex">
                                        <InputCheckbox 
                                            checked={selectedAnnonceId===annonce.id ? true : false} 
                                            style="mt-2" 
                                            onChange={(e) => {
                                                if (e.target.checked) {
                                                    setSelectedAnnonceId(annonce.id);
                                                } else {
                                                    setSelectedAnnonceId(0);
                                                }
                                            }}
                                        />
                                        <div className="ml-4">
                                            <p className="font-Jakarta-semi-bold text-[24px] ">{annonce.title}</p>
                                            <p className="font-Jakarta-medium text-[20px] text-[#969696] ">{annonce.companyName} - {annonce.location}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center font-Jakarta-medium text-[16px] text-custom-black">
                                        <Icon name="calendrier" />
                                        <p className="text-[#969696] ml-2 mr-4">Dernière modification : {annonce.derniereModif}</p>
                                        <button className="cursor-pointer">Modifier</button>
                                        <p className="mx-2">|</p>
                                        <button className="cursor-pointer">Supprimer</button>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <div className="flex items-center">
                                        <Icon name="match" />
                                        <p className="ml-2 mr-6">Profils matchings : {annonce.nbProfilMatch}</p>
                                        <Icon name="candidat" />
                                        <p className="ml-2 mr-6">Candidat(s) : {annonce.candidats}</p>
                                        {renderStatut(annonce.statut)}
                                    </div>
                                    <ButtonBlack text={renderButtonContent(annonce.statut)} />
                                </div>
                            </div>
                        ))
                    )}
                </div>
                </>
            )}
            {createAnnonce && (
                <CreateAnnonce />
            )}
        </main>
    )
}

export default Annonces;