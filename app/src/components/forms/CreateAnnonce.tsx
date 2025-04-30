import { useState } from "react";
import { CreateAnnoncesType } from "../../types/Annonces.type";
import InputLabel from "../fields/InputLabel";
import InputRadio from "../fields/InputRadio";
import AnnoncesController from "../../controllers/Annonces.controller";
import MissionsInputC from "../company/MissionInputC";
import SelectCompetences from "../student/SelectCompetences";
import SkillsController from "../../controllers/Skills.controller";
import Avantages from "../company/Avantages";


const CreateAnnonce = () => {
    const {teleworkingOptions, dureeContratOptions} = AnnoncesController();
    const {hardSkills, softSkills, softwares} = SkillsController();
    const [annonce, setAnnonce] = useState<CreateAnnoncesType>({
        title: "",
        location: "",
        teleworking: "",
        duration: "",
        missions: [],
        profile: "",
        softSkills: [],
        hardSkills: [],
        software: [],
        companyDescription: "",
        companyName: "",
        remunerationMin : "",
        remunerationMax : "",
        avantages: [],
        derniereModif: "",
        nbProfilMatch : 0,
        candidats : 0,
        statut : ""
    })

    const updateHardSkills = (skills: string[]) => {
        setAnnonce(prev => ({ ...prev, hardSkills: skills }));
    };
    
    const updateSoftSkills = (skills: string[]) => {
        setAnnonce(prev => ({ ...prev, softSkills: skills }));
    };
    
    const updateSoftwares = (softwares: string[]) => {
        setAnnonce(prev => ({ ...prev, softwares: softwares }));
    };


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

                <p className="font-Jakarta-bold text-sm sm:text-base md:text-lg lg:text-body ml-1 mt-10">Télétravail</p>
                <div className="flex ml-2 mt-2 mb-12">
                    {teleworkingOptions.map((option) => (
                        <InputRadio
                            key={option}
                            option={option}
                            checked={annonce.teleworking}
                            setChecked={(value) => setAnnonce({ ...annonce, teleworking: value })}
                        />
                    ))}
                </div>

                <label className="font-Jakarta-bold text-sm sm:text-base md:text-lg lg:text-body ml-1">Durée de contrat</label>
                <div className="flex ml-2 mt-2">
                    {dureeContratOptions.map((option) => (
                        <InputRadio
                            key={option}
                            option={option}
                            checked={annonce.duration}
                            setChecked={(value) => setAnnonce({ ...annonce, duration: value })}
                        />
                    ))}
                </div>
                
                <MissionsInputC annonce={annonce} setAnnonce={setAnnonce} />

                <label className="font-Jakarta-bold text-sm sm:text-base md:text-lg lg:text-body ml-1">Description du profil recherché</label>
                <div className="relative">
                    <textarea
                        maxLength={300}
                        value={annonce.profile}
                        onChange={(e) => setAnnonce({ ...annonce, profile: e.target.value })}
                        placeholder="Expliquez  votre projet, son objectif et votre rôle."
                        className="w-full mt-3 mb-6 min-h-[200px] p-4 rounded-[1rem] bg-gray-100 focus:outline-none focus:ring-2 focus:ring-lilas resize-none"
                    />
                    <span className="absolute bottom-2 right-4 text-sm text-custom-black">
                        {annonce.profile.length}/300
                    </span>
                </div>

                <SelectCompetences
                    label="Ajoutez une compétence technique (20 maximum)"
                    maxSkills={20}
                    skillsList={hardSkills}
                    selectedSkills={annonce.hardSkills}
                    setSelectedSkills={updateHardSkills}
                    isSingleSelect={false}
                    placeholder="HTML, CSS, JavaScript, etc."
                />

                <SelectCompetences
                    label="Ajoutez une compétence générale (20 maximum)"
                    maxSkills={20}
                    skillsList={softSkills}
                    selectedSkills={annonce.softSkills}
                    setSelectedSkills={updateSoftSkills}
                    isSingleSelect={false}
                    placeholder="Travail en équipe, Autonomie, etc."
                />

                <SelectCompetences
                    label="Ajoutez un logiciel (20 maximum)"
                    maxSkills={20}
                    skillsList={softwares}
                    selectedSkills={annonce.software}
                    setSelectedSkills={updateSoftwares}
                    isSingleSelect={false}
                    placeholder="Figma, Photoshop, Visual studio code etc."
                />

                <div className="mt-6 mb-10">
                    <label className="font-Jakarta-bold text-sm sm:text-base md:text-lg lg:text-body ml-1">Description de l’entreprise</label>
                    <div className="relative">
                        <textarea
                            maxLength={300}
                            value={annonce.companyDescription}
                            onChange={(e) => setAnnonce({ ...annonce, companyDescription: e.target.value })}
                            placeholder="Expliquez  votre projet, son objectif et votre rôle."
                            className="w-full mt-3 min-h-[200px] p-4 rounded-[1rem] bg-gray-100 focus:outline-none focus:ring-2 focus:ring-lilas resize-none"
                        />
                        <span className="absolute bottom-2 right-4 text-sm text-custom-black">
                            {annonce.companyDescription.length}/300
                        </span>
                    </div>
                </div>

                <label className="font-Jakarta-bold text-sm sm:text-base md:text-lg lg:text-body ml-1">Rémunération</label>
                <div className="flex mt-2 items-end">
                    <div className="flex flex-col w-1/2 mr-2">
                        <label className="font-Jakarta-regular text-sm sm:text-base md:text-lg lg:text-body ml-1">De</label>
                        <input 
                            type="text" 
                            defaultValue={annonce.remunerationMin} 
                            placeholder="EURO"
                            onChange={(e) => setAnnonce({ ...annonce, remunerationMin: e.target.value })} 
                            name="remunerationMin"
                            className={`font-Jakarta-regular italic text-sm sm:text-base md:text-lg lg:text-body  py-4 pl-4 mt-2 rounded-2xl border-1 text-input-text bg-gray-background border-gray-background focus:outline-lilas `}
                        />
                    </div>
                    <p className="mb-4 mr-6">/mois</p>
                    <div className="flex flex-col w-1/2 mr-2">
                        <label className="font-Jakarta-regular text-sm sm:text-base md:text-lg lg:text-body ml-1">À</label>
                        <input 
                            type="text" 
                            defaultValue={annonce.remunerationMax} 
                            placeholder="EURO"
                            onChange={(e) => setAnnonce({ ...annonce, remunerationMax: e.target.value })} 
                            name="remunerationMin"
                            className={`font-Jakarta-regular italic text-sm sm:text-base md:text-lg lg:text-body  py-4 pl-4 mt-2 rounded-2xl border-1 text-input-text bg-gray-background border-gray-background focus:outline-lilas `}
                        />
                    </div>
                    <p className="mb-4">/mois</p>
                </div>

                <Avantages annonce={annonce} setAnnonce={setAnnonce} />
            </div>
        </div>
    )
}

export default CreateAnnonce;