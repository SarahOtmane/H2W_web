import { useState } from "react";
import { CreateAnnoncesType } from "../../types/Annonces.type";
import InputLabel from "../fields/InputLabel";
import InputRadio from "../fields/InputRadio";
import AnnoncesController from "../../controllers/Annonces.controller";


const CreateAnnonce = () => {
    const {teleworkingOptions} = AnnoncesController();
    const [annonce, setAnnonce] = useState<CreateAnnoncesType>({
        title: "",
        location: "",
        teleworking: "",
        duration: "",
        missions: [],
        profile: [],
        softSkills: [],
        hardSkills: [],
        software: [],
        companyDescription: "",
        companyName: "",
        remuneration : "",
        avantages: [],
        derniereModif: "",
        nbProfilMatch : 0,
        candidats : 0,
        statut : ""
    })

    return(
        <div>
            <div className="flex mt-10 md:px-40 text-[16px] font-Jakarta-medium text-[#969696] ">
                <p>Mes annonces </p>
                <p className="mx-2"> &gt; </p>
                <p> Créer une offre</p>
            </div>
            <div className="bg-white rounded-[1rem] py-12 px-10 mt-10 md:mx-40">
                <h2 className="text-[24px] font-Jakarta-bold">Créez votre offre</h2>

                <InputLabel 
                    name="Intitulé du poste"
                    type='text'
                    label="Intitulé du poste"
                    placeholder="ex : Développeur web, Designer UI/UX, etc."
                    value={annonce.title}
                    onChange={(e) => setAnnonce({ ...annonce, title: e.target.value })}
                    style="mt-10"
                />

                <InputLabel 
                    name="Lieu de travail"
                    type='text'
                    label="Lieu de travail"
                    placeholder="Localisation"
                    value={annonce.location}
                    onChange={(e) => setAnnonce({ ...annonce, location: e.target.value })}
                    style="mt-10"
                />

                <div className="flex">
                    {teleworkingOptions.map((option) => (
                        <InputRadio
                            key={option}
                            option={option}
                            checked={annonce.teleworking}
                            setChecked={(value) => setAnnonce({ ...annonce, teleworking: value })}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CreateAnnonce;