import React, { useState } from "react";
import InputLabel from "../fields/InputLabel";
import { Portfolio, Project } from "../../types/Portfolio.types";
import Icon from "../../utils/Icon";
import ButtonBlack from "../buttons/ButtonBlack";

interface ProjectsFormProps {
    portfolio: Portfolio,
    setPortfolio : (value: Portfolio) => void,
    setEtape : (value: number) => void,
}

const ProjectsForm : React.FC<ProjectsFormProps> = ({setEtape, portfolio, setPortfolio}) => {

    const [projetAdded, setProjetAdded] = useState(false);
    const [showPopup, setShowPopup] = useState(false); 
    const [projetToDelete, setProjetToDelete] = useState<Project>(); 

    const [projet, setProjet] = useState<Project>({
        name: "",
        description: "",
        media: [],
        cover: [],
        hardSkills: [],
        softSkills: [],
        softwares: [],
    });

    const projects : Project[] = portfolio.projects;

    const handleMediaUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const newFiles = Array.from(e.target.files);
            let updatedMedia = [...projet.media, ...newFiles];
    
            // Remplacer la dernière image si on dépasse 6
            if (updatedMedia.length > 6) {
                updatedMedia = [...updatedMedia.slice(0, 5), newFiles[newFiles.length - 1]];
            }
    
            setProjet({
                ...projet,
                media: updatedMedia,
            });
        }
    };

    const toggleSkill = (skillType: "hardSkills" | "softSkills" | "softwares", skill: string) => {
        setProjet((prevProjet) => {
            const skills = prevProjet[skillType];
            if (skills.includes(skill)) {
                return {
                    ...prevProjet,
                    [skillType]: skills.filter((s) => s !== skill),
                };
            } else {
                return {
                    ...prevProjet,
                    [skillType]: [...skills, skill],
                };
            }
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setPortfolio({ ...portfolio, projects: projects }); 
        localStorage.setItem("portfolio", JSON.stringify({ ...portfolio})); 
    };

    const addProject = async(e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        projects.push(projet)
        setProjetAdded(true);
        setProjet({
            name: "",
            description: "",
            media: [],
            cover: [],
            hardSkills: [],
            softSkills: [],
            softwares: [],
        })
    }


    const deleteProjet = () => {
        if (projetToDelete) {
            const updatedProjects = portfolio.projects.filter(project => project !== projetToDelete);
            setPortfolio({ ...portfolio, projects: updatedProjects });
            setShowPopup(false);
        }
    };

    return (
        <div className="bg-white rounded-[1rem] py-12 px-10 mt-4 flex flex-col">
            <h2 className="text-[24px] font-bold mb-6">Partagez vos projets les plus significatifs.</h2>

            {projects.length > 0 && (
                <div>
                    <ButtonBlack handleClick={() => setProjetAdded(false)} style="ml-auto" text="Ajouter un projet" icon={<Icon name="addButton" />} />
                    {projects.map((projet, index) => (
                        <div key={index} className="border-lilas flex bg-[#F8F7FF] border-1 rounded-[1rem] mt-6 px-12 py-8 items-center">
                            <img 
                                src={URL.createObjectURL(projet.media[0])}
                                alt={`Aperçu du fichier ${projet.media[0].name}`}
                                className="w-[20%] object-cover rounded"
                            />
                            <div className="w-[75%] flex flex-col mx-6">
                                <article className="flex items-center w-full">
                                    <p className="w-[25%] text-[#9FA6B2]">Intitulé du projet</p>
                                    <p className="w-[75%]">{projet.name}</p>
                                </article>
                                <article className="flex items-center w-full mt-6">
                                    <p className="w-[25%] text-[#9FA6B2]">Description du projet</p>
                                    <p className="w-[75%]">{projet.description}</p>
                                </article>
                            </div>
                            <div className="flex flex-row items-center justify-center self-start ml-auto">
                                <button 
                                    className="mr-2 cursor-pointer"
                                    onClick={() => {
                                        setProjetToDelete(projet);
                                        setShowPopup(true);
                                    }}
                                >
                                    <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="50.6757" height="50.6757" rx="25.3378" fill="#8C73FF"/>
                                        <path d="M35.4734 18.5582C31.7234 18.1866 27.9509 17.9951 24.1896 17.9951C21.9599 17.9951 19.7302 18.1077 17.5004 18.333L15.2031 18.5582" stroke="white" strokeWidth="2.53378" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M21.3945 17.4208L21.6423 15.9455C21.8225 14.8757 21.9576 14.0762 23.8607 14.0762H26.8112C28.7144 14.0762 28.8607 14.9208 29.0297 15.9568L29.2774 17.4208" stroke="white" strokeWidth="2.53378" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M33.0529 22.1182L32.3209 33.4583C32.1971 35.2263 32.0957 36.6001 28.9538 36.6001H21.7241C18.5822 36.6001 18.4809 35.2263 18.357 33.4583L17.625 22.1182" stroke="white" strokeWidth="2.53378" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M23.457 30.4053H27.207" stroke="white" strokeWidth="2.53378" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M22.5234 25.9004H28.1541" stroke="white" strokeWidth="2.53378" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </button>
                                <button className=" cursor-pointer">
                                    <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.324219" width="50.6757" height="50.6757" rx="25.3378" fill="#FF9B3E"/>
                                        <path d="M24.5375 14.0762H22.2852C16.6546 14.0762 14.4023 16.3284 14.4023 21.9591V28.7158C14.4023 34.3464 16.6546 36.5987 22.2852 36.5987H29.042C34.6726 36.5987 36.9249 34.3464 36.9249 28.7158V26.4636" stroke="white" strokeWidth="2.53378" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M30.211 15.2255L21.3371 24.0994C20.9993 24.4372 20.6614 25.1016 20.5939 25.5859L20.1096 28.9755C19.9295 30.203 20.7966 31.0588 22.0241 30.8899L25.4137 30.4057C25.8867 30.3381 26.5511 30.0003 26.9002 29.6624L35.7741 20.7886C37.3056 19.257 38.0263 17.4778 35.7741 15.2255C33.5218 12.9733 31.7425 13.694 30.211 15.2255Z" stroke="white" strokeWidth="2.53378" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M28.9375 16.498C29.692 19.1895 31.7979 21.2953 34.5006 22.0611" stroke="white" strokeWidth="2.53378" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                    <div className="bg-white rounded-[1rem] p-6 w-[600px] px-14 py-10 text-center">
                        <h3 className="text-[24px] font-Jakarta-bold text-custom-black">Êtes-vous sûr(e) de vouloir supprimer cette expérience ?</h3>
                        <p className="text-[16px] font-Jakarta-semi-bold-bold text-[#9FA6B2] mt-8 mb-14">Cette action est irréversible.</p>
                        <div className="flex justify-center">
                            <button
                                className="bg-custom-black py-3 rounded-[2rem] mr-3 text-white w-[150px] cursor-pointer"
                                onClick={() => setShowPopup(false)}
                            >
                                Annuler
                            </button>
                            <button
                                className="bg-lilas py-3 rounded-[2rem] ml-3 text-white w-[150px] cursor-pointer"
                                onClick={deleteProjet}
                            >
                                Supprimer
                            </button>
                        </div>
                    </div>
                </div>
            )}
        
            {!projetAdded && <form onSubmit={handleSubmit} className="space-y-6">
                <InputLabel 
                    name="Titre du post"
                    type='text'
                    label="Titre du post"
                    placeholder="ex : Développeur web, Designer UI/UX, etc."
                    value={projet.name}
                    onChange={(e) => setProjet({ ...projet, name: e.target.value })}
                    style="mt-10"
                />

                <div>
                    <label className="block mb-2 font-semibold">Ajoutez du contenu multimédia</label>
                    <p className="text-[#9FA6B2] italic mb-4">La première image apparaîtra en grand dans votre projet, vous pouvez modifier l’ordre en les glissant.</p>
                    {projet.media.length > 0 && 
                        <img
                            src={URL.createObjectURL(projet.media[0])}
                            alt={`Aperçu du fichier ${projet.media[0].name}`}
                            className="w-full object-cover rounded"
                        />
                    }
                    <div className="flex gap-2 mt-4 w-full">
                        <div className="w-1/6">
                            <label
                                htmlFor="mediaUpload"
                                className="w-full h-full flex items-center justify-center border-2 border-dashed border-[#E4E4E7] bg-[#F6F6F6] rounded cursor-pointer"
                            >
                                <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.6309 33.001H49.3447" stroke="#E4E4E7" strokeWidth="4.08923" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M32.9863 49.3574V16.6436" stroke="#E4E4E7" strokeWidth="4.08923" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </label>
                            <input
                                id="mediaUpload"
                                type="file"
                                multiple
                                accept="image/*"
                                onChange={handleMediaUpload}
                                className="hidden"
                            />
                        </div>
                        <div className="flex gap-2 mt-8 w-5/6">
                            {projet.media.slice(1).map((file, index) => (
                                <img
                                    key={index}
                                    src={URL.createObjectURL(file)}
                                    alt={`Aperçu du fichier ${file.name}`}
                                    className="w-1/5 object-cover rounded"
                                />
                            ))}
                        </div>
                    </div>
                </div>
                  
                <label className="font-Jakarta-bold text-sm sm:text-base md:text-lg lg:text-body ml-1">Décrivez le projet</label>
                <div className="relative">
                    <textarea
                        maxLength={300}
                        value={projet.description}
                        onChange={(e) => setProjet({ ...projet, description: e.target.value })}
                        placeholder="Expliquez  votre projet, son objectif et votre rôle."
                        className="text-input-text h-[10rem] mt-2 bg-gray-background border-gray-background focus:outline-lilas w-full rounded-[1rem] p-4 outline-none resize-none"
                    />
                    <span className="absolute bottom-2 right-4 text-sm text-custom-black">
                        {projet.description.length}/300
                    </span>
                </div>

                <p className="text-custom-black text-[16px] font-Jakarta-bold mt-4">Sélectionner le(s) hardskill(s) utilisé(s)</p>
                <div className="flex flex-wrap gap-4">
                    {portfolio.hardSkills.map((skill, index) => (
                        <button
                            key={index}
                            onClick={() => toggleSkill("hardSkills", skill)}
                            className={`px-6 py-2 border-2 rounded-[2rem] cursor-pointer ${
                                projet.hardSkills.includes(skill)
                                    ? "border-custom-orange text-custom-orange"
                                    : "border-custom-black text-custom-black"
                            }`}
                        >
                            {skill}
                        </button>
                    ))}
                </div>

                <p className="text-custom-black text-[16px] font-Jakarta-bold mt-4">Sélectionner le(s) softSkill(s) utilisé(s)</p>
                <div className="flex flex-wrap gap-4">
                    {portfolio.softSkills.map((skill, index) => (
                        <button
                            key={index}
                            onClick={() => toggleSkill("softSkills", skill)}
                            className={`px-6 py-2 border-2 rounded-[2rem] ${
                                projet.softSkills.includes(skill)
                                    ? "border-custom-orange text-custom-orange"
                                    : "border-custom-black text-custom-black"
                            }`}
                        >
                            #{skill}
                        </button>
                    ))}
                </div>

                <p className="text-custom-black text-[16px] font-Jakarta-bold mt-4">Sélectionner le(s) software(s) utilisé(s)</p>
                <div className="flex flex-wrap gap-4">
                    {portfolio.softwares.map((skill, index) => (
                        <button
                            key={index}
                            onClick={() => toggleSkill("softwares", skill)}
                            className={`px-6 py-2 border-2 rounded-[2rem] ${
                                projet.softwares.includes(skill)
                                    ? "border-custom-orange text-custom-orange"
                                    : "border-custom-black text-custom-black"
                            }`}
                        >
                            {skill}
                        </button>
                    ))}
                </div>

                <button
                        className={`text-[16px] py-4 w-max px-10 rounded-[2rem] text-white mr-4 cursor-pointer mt-6 ml-[45%]
                            ${(projet.name.length > 0 && projet.description.length > 0 && projet.media.length > 0 && projet.hardSkills.length > 0 && 
                                projet.softSkills.length > 0 && projet.softwares.length > 0) ? 'bg-custom-orange' : 'bg-[#9FA6B2]'}`}
                        onClick={e => addProject(e)}
                        disabled={!(
                            projet.name.length > 0 &&
                            projet.description.length > 0 &&
                            projet.media.length > 0 &&
                            projet.hardSkills.length > 0 &&
                            projet.softSkills.length > 0 &&
                            projet.softwares.length > 0
                        )}
                    >
                        Ajouter
                </button>
            </form>}

            <div className="flex flex-row justify-center items-center mt-15">
                <button className="text-[16px] py-4 w-[9rem] rounded-[2rem] text-white bg-custom-black mr-4 cursor-pointer " onClick={(e) => { e.preventDefault(); setEtape(3); }}>Précédent</button>
                <button className={`text-[16px] py-4 w-[9rem] rounded-[2rem] text-white cursor-pointer ${projects.length>0 ? 'bg-custom-orange' : 'bg-[#9FA6B2]'}`} onClick={(e) => { handleSubmit(e) }} disabled={!(projects.length>0)} >Publier le portfolio</button>
            </div>
        </div>
    );  
};

export default ProjectsForm;