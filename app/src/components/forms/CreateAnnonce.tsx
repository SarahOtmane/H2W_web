import { useState } from "react";
import { CreateAnnoncesType } from "../../types/Annonces.type";
import InputLabel from "../fields/InputLabel";
import InputRadio from "../fields/InputRadio";
import AnnoncesController from "../../controllers/Annonces.controller";
import MissionsInputC from "../company/MissionInputC";
import SelectCompetences from "../student/SelectCompetences";
import SkillsController from "../../controllers/Skills.controller";
import Avantages from "../company/Avantages";
import AnnonceDetail from "../company/AnnonceDetail";


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
        setAnnonce(prev => ({ ...prev, software: softwares }));
    };

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();
        
        sessionStorage.setItem("portfolio", JSON.stringify(annonce));
    };

    const isButtonDisabled = () => {
        return !(
            annonce.title.length > 0 &&
            annonce.location.length > 0 &&
            annonce.teleworking.length > 0 &&
            annonce.duration.length > 0 &&
            annonce.missions.length > 0 &&
            annonce.profile.length > 0 &&
            annonce.hardSkills.length > 0 &&
            annonce.softSkills.length > 0 &&
            annonce.software.length > 0 &&
            annonce.companyDescription.length > 0 &&
            annonce.remunerationMin.length > 0 &&
            annonce.remunerationMax.length > 0 &&
            annonce.avantages.length > 0
        );
    };

    const [popupPublierAnnonce, setPopupPublierAnnonce] = useState(false); 
    const [popupVisualAnnonce, setPopupVisualAnnonce] = useState(false); 


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
                        className="w-full mt-3 mb-6 min-h-[200px] p-4 rounded-[1rem] bg-gray-background focus:outline-none focus:ring-2 focus:ring-lilas resize-none"
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
                            className="w-full mt-3 min-h-[200px] p-4 rounded-[1rem] bg-gray-background focus:outline-none focus:ring-2 focus:ring-lilas resize-none"
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
                            className={`font-Jakarta-regular text-sm sm:text-base md:text-lg lg:text-body  py-4 pl-4 mt-2 rounded-2xl border-1 bg-gray-background border-gray-background focus:outline-lilas `}
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
                            className={`font-Jakarta-regular text-sm sm:text-base md:text-lg lg:text-body  py-4 pl-4 mt-2 rounded-2xl border-1 bg-gray-background border-gray-background focus:outline-lilas `}
                        />
                    </div>
                    <p className="mb-4">/mois</p>
                </div>

                <Avantages annonce={annonce} setAnnonce={setAnnonce} />

                <div className="flex justify-center mt-10">
                    <button
                        className={`text-[16px] py-4 w-max px-10 rounded-[2rem] text-white mr-4 cursor-pointer mt-6
                            ${(isButtonDisabled()) ? 'bg-[#9FA6B2]' : 'bg-custom-black'}`}
                            disabled={isButtonDisabled()}
                    >
                        Enregistrer en brouillon
                    </button>
                    <button
                        className={`text-[16px] py-4 w-max px-10 rounded-[2rem] text-white mr-4 cursor-pointer mt-6
                            ${(isButtonDisabled()) ? 'bg-[#9FA6B2]' : 'bg-lilas'}`}
                            disabled={isButtonDisabled()}
                            onClick={() => setPopupVisualAnnonce(true)}
                    >
                        Prévisualiser l’offre
                    </button>
                    <button
                        className={`text-[16px] py-4 w-max px-10 rounded-[2rem] text-white mr-4 cursor-pointer mt-6
                            ${(isButtonDisabled()) ? 'bg-[#9FA6B2]' : 'bg-custom-orange'}`}
                            disabled={isButtonDisabled()}
                    >
                        Poster l’offre
                    </button>
                </div>
            </div>

            {popupPublierAnnonce && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                    <div className="bg-white rounded-[1rem] p-6 w-[600px] px-14 py-10 text-center">
                        <h3 className="text-[24px] font-Jakarta-bold text-custom-black">Êtes vous sûr de vouloir poste votre offre ?</h3>
                        <p className="text-[16px] font-Jakarta-semi-bold-bold text-[#9FA6B2] mt-8 mb-14">Vous pourrez ensuite la modifier sur votre tableau de bord.</p>
                        <div className="flex justify-center">
                            <button
                                className="bg-custom-black py-3 rounded-[2rem] mr-3 text-white w-[150px] cursor-pointer"
                                onClick={() => setPopupPublierAnnonce(false)}
                            >
                                Annuler
                            </button>
                            <button
                                className="bg-custom-orange py-3 rounded-[2rem] ml-3 text-white w-[150px] cursor-pointer"
                                onClick={(event) => handleSubmit(event)}
                            >
                                Publier l'offre
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {popupVisualAnnonce && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                    <AnnonceDetail annonce={annonce} setPopupVisualAnnonce={setPopupVisualAnnonce} />
                </div>
            )}
        </div>
    )
}

export default CreateAnnonce;