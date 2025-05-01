import React, { useState } from "react";
import InputLabel from "../fields/InputLabel";
import { Portfolio, Project } from "../../types/Portfolio.types";

interface ProjectsFormProps {
    portfolio: Portfolio;
}

const ProjectsForm : React.FC<ProjectsFormProps> = () => {

    const [projet, setProjet] = useState<Project>({
        name: "",
        description: "",
        media: [],
        cover: [],
        hardSkills: [],
        softSkills: [],
        softwares: [],
    });

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Projet soumis :", projet);
    };

    return (
        <div className="bg-white rounded-[1rem] py-12 px-10 mt-4 flex flex-col">
            <h2 className="text-[24px] font-bold mb-6">Partagez vos projets les plus significatifs.</h2>
        
            <form onSubmit={handleSubmit} className="space-y-6">
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
                                    <path d="M16.6309 33.001H49.3447" stroke="#E4E4E7" stroke-width="4.08923" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M32.9863 49.3574V16.6436" stroke="#E4E4E7" stroke-width="4.08923" stroke-linecap="round" stroke-linejoin="round"/>
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
            </form>
        </div>
    );  
};

export default ProjectsForm;