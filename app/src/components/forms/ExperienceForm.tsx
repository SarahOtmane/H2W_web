import { useState } from "react";

import CreatePortfolioButton from "../buttons/CreatePortfolioButton";
import CreatePortfolioController from "../../controllers/CreatePortfolio.controller";
import ButtonBlack from "../buttons/ButtonBlack";
import InputCheckbox from "../fields/InputCheckbox"
import InputLabel from "../fields/InputLabel"
import MissionsInput from "../student/MissionsInput"

import Icon from "../../utils/Icon";
import { Experience } from "../../types/Portfolio.types";


const ExperienceForm = () => {

    const {
        etape, setEtape, portfolio, experience, setExperience, handleChangeExperienceCheckbox, handleAddExperienceInPortfolio, handleDeleteExperience
    } = CreatePortfolioController()

    let experiences = portfolio.experiences;

    const [expeAdded, setExpeAdded] = useState(false);
    const [missionHiden, setMissionHidden] = useState(true);
    const [showPopup, setShowPopup] = useState(false); 
    const [experienceToDelete, setExperienceToDelete] = useState<Experience>(); 

    
    const addExpe = async(e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        await handleAddExperienceInPortfolio()
        experiences = [...experiences, experience]
        setExpeAdded(true)
    }

    const deleteExperience = () => {
        if (experienceToDelete) {
            experiences = experiences.filter((exp) => exp !== experienceToDelete);
            handleDeleteExperience(experienceToDelete);
            setShowPopup(false);
        }
    };

    return(
        <div className="bg-white rounded-[1rem] py-12 px-10 mt-4 flex flex-col">
            <h2 className="text-[24px] font-Jakarta-bold">Parlez-nous de vos expériences passées et actuelles.</h2>
            {experiences.length>0  && (
                <div >
                    <ButtonBlack handleClick={() => setExpeAdded(false)} style="ml-auto" text="Ajouter une expérience" icon={<Icon name="addButton" />} />
                    {portfolio.experiences.map((experience, index) => (
                        <div key={index} className="border-lilas bg-[#F8F7FF] border-1 rounded-[1rem] mt-6 px-12 py-8">
                            <div className="flex flex-row items-center mb-10">
                                <p className="w-1/5 text-input-text text-[16px] font-Jakarta-semi-bold ">Intitulé du poste</p>
                                <p className="capitalize text-custom-black text-[24px] font-Jakarta-bold ">{experience.title}</p>
                                <div className="flex flex-row items-center justify-center self-end ml-auto">
                                    <button 
                                        className="mr-2 cursor-pointer"
                                        onClick={() => {
                                            setExperienceToDelete(experience);
                                            setShowPopup(true);
                                        }}
                                    >
                                        <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="50.6757" height="50.6757" rx="25.3378" fill="#8C73FF"/>
                                            <path d="M35.4734 18.5582C31.7234 18.1866 27.9509 17.9951 24.1896 17.9951C21.9599 17.9951 19.7302 18.1077 17.5004 18.333L15.2031 18.5582" stroke="white" stroke-width="2.53378" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M21.3945 17.4208L21.6423 15.9455C21.8225 14.8757 21.9576 14.0762 23.8607 14.0762H26.8112C28.7144 14.0762 28.8607 14.9208 29.0297 15.9568L29.2774 17.4208" stroke="white" stroke-width="2.53378" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M33.0529 22.1182L32.3209 33.4583C32.1971 35.2263 32.0957 36.6001 28.9538 36.6001H21.7241C18.5822 36.6001 18.4809 35.2263 18.357 33.4583L17.625 22.1182" stroke="white" stroke-width="2.53378" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M23.457 30.4053H27.207" stroke="white" stroke-width="2.53378" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M22.5234 25.9004H28.1541" stroke="white" stroke-width="2.53378" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </button>
                                    <button className=" cursor-pointer">
                                        <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.324219" width="50.6757" height="50.6757" rx="25.3378" fill="#FF9B3E"/>
                                            <path d="M24.5375 14.0762H22.2852C16.6546 14.0762 14.4023 16.3284 14.4023 21.9591V28.7158C14.4023 34.3464 16.6546 36.5987 22.2852 36.5987H29.042C34.6726 36.5987 36.9249 34.3464 36.9249 28.7158V26.4636" stroke="white" stroke-width="2.53378" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M30.211 15.2255L21.3371 24.0994C20.9993 24.4372 20.6614 25.1016 20.5939 25.5859L20.1096 28.9755C19.9295 30.203 20.7966 31.0588 22.0241 30.8899L25.4137 30.4057C25.8867 30.3381 26.5511 30.0003 26.9002 29.6624L35.7741 20.7886C37.3056 19.257 38.0263 17.4778 35.7741 15.2255C33.5218 12.9733 31.7425 13.694 30.211 15.2255Z" stroke="white" stroke-width="2.53378" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M28.9375 16.498C29.692 19.1895 31.7979 21.2953 34.5006 22.0611" stroke="white" stroke-width="2.53378" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-row items-center mb-12">
                                <p className="w-1/5 text-input-text text-[16px] font-Jakarta-semi-bold ">Entreprise ou client</p>
                                <p className="capitalize text-custom-black text-[16px] font-Jakarta-regular ">{experience.companyName}</p>
                            </div>
                            <div className="flex flex-row items-center mb-12">
                                <p className="w-1/5 text-input-text text-[16px] font-Jakarta-semi-bold ">Localisation</p>
                                <p className="capitalize text-custom-black ">{experience.location}</p>
                            </div>
                            <div className="flex flex-row items-center mb-12">
                                <p className="w-1/5 text-input-text text-[16px] font-Jakarta-semi-bold ">Date</p>
                                <p className="capitalize text-custom-black ">{experience.startDate} - {experience.endDate ? experience.endDate : 'maintenant'}</p>
                            </div>
                            <div className="flex flex-row">
                                <p className="w-1/5 text-input-text text-[16px] font-Jakarta-semi-bold ">Liste des missions</p>
                                <ul className="list-disc pl-4">
                                    {experience.missions.length === 1 && <li>{experience.missions[0]}</li>}
                                    {experience.missions.length > 1 &&
                                        <>
                                            <li>{experience.missions[0]}</li>
                                            {missionHiden && 
                                                <button 
                                                     className="flex flex-row items-center rounded-[2rem] px-4 py-2 border-1 border-custom-black mt-3 cursor-pointer"
                                                    onClick={() => setMissionHidden(false)}
                                                >
                                                    <span className="mr-2">Voir plus</span>
                                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M15.7705 7.08496L10.6088 12.2466C9.99922 12.8562 9.00172 12.8562 8.39214 12.2466L3.23047 7.08496" stroke="#1D1D1B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                </button>
                                            }
                                            {!missionHiden && experience.missions.slice(1).map((mission, index) => (
                                                <li key={index}>{mission}</li>
                                            ))}
                                            {!missionHiden && 
                                                <button 
                                                    className="flex flex-row items-center rounded-[2rem] px-4 py-2 border-1 border-custom-black mt-3 cursor-pointer"
                                                    onClick={() => setMissionHidden(true)}
                                                >
                                                    <span className="mr-2">Voir moins</span>
                                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3.23047 11.915L8.39214 6.75342C9.00172 6.14384 9.99922 6.14384 10.6088 6.75342L15.7705 11.915" stroke="#1D1D1B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                </button>
                                            }
                                        </>
                                    }
                                </ul>
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
                                onClick={deleteExperience}
                            >
                                Supprimer
                            </button>
                        </div>
                    </div>
                </div>
            )}


            {!expeAdded  && (
                <form className="">
                    <InputLabel 
                        name="Titre du post"
                        type='text'
                        label="Titre du post"
                        placeholder="ex : Développeur web, Designer UI/UX, etc."
                        value={experience.title}
                        onChange={(e) => setExperience({ ...experience, title: e.target.value })}
                        style="mt-10"
                    />
        
                    <InputLabel 
                        name="Entreprise ou client"
                        type='text'
                        label="Entreprise ou client"
                        placeholder="ex : Hive2Work"
                        value={experience.companyName}
                        onChange={(e) => setExperience({ ...experience, companyName: e.target.value })}
                        style="mt-10"
                    />
    
                    <InputLabel 
                        name="Localisation"
                        type='text'
                        label="Localisation"
                        placeholder="ex : Ville, région, pays"
                        value={experience.location}
                        onChange={(e) => setExperience({ ...experience, location: e.target.value })}
                        style="mt-10"
                    />
        
                    <div className="flex flex-row items-center mt-5 pl-2">
                        <InputCheckbox checked={experience.teleworking} onChange={e => handleChangeExperienceCheckbox(e, 'teleworking')} />
                        <p className="font-Jakarta-medium text-[15px] ml-2">Télétravail total</p>
                    </div>
    
                    <div className="flex flex-row">
                        <div className="w-1/2 pr-4">
                            <InputLabel 
                                name="DU"
                                type='text'
                                label="DU"
                                placeholder="MM / AAAA"
                                value={experience.startDate}
                                onChange={(e) => setExperience({ ...experience, startDate: e.target.value })}
                                style="mt-10"
                            />
                        </div>
                        <div className="w-1/2 pl-4">
                            <InputLabel 
                                name="AU"
                                type='text'
                                label="AU"
                                placeholder="MM / AAAA"
                                value={experience.endDate}
                                onChange={(e) => setExperience({ ...experience, endDate: e.target.value })}
                                style="mt-10"
                            />
                        </div>
                    </div>
                    <div className="flex flex-row items-center mt-5 pl-2">
                        <InputCheckbox checked={experience.stillWorking} onChange={e => handleChangeExperienceCheckbox(e, 'stillWorking')} />
                        <p className="font-Jakarta-medium text-[15px] ml-2">J'y travaille toujours</p>
                    </div>

                    <MissionsInput experience={experience} setExperience={setExperience} />

                    <button
                        className={`text-[16px] py-4 w-max px-10 rounded-[2rem] text-white mr-4 cursor-pointer mt-6 ml-[45%]
                            ${(experience.title.length > 0 && experience.companyName.length > 0 && experience.location.length > 0 && experience.startDate.length > 0 && 
                                (experience.endDate.length > 0 || experience.stillWorking === true) && experience.missions.length > 0) ? 'bg-custom-orange' : 'bg-[#9FA6B2]'}`}
                        onClick={e => addExpe(e)}
                        disabled={!(
                            experience.title.length > 0 &&
                            experience.companyName.length > 0 &&
                            experience.location.length > 0 &&
                            experience.startDate.length > 0 &&
                            (experience.endDate.length > 0 || experience.stillWorking === true) &&
                            experience.missions.length > 0
                        )}
                    >
                        Valider
                    </button>
                </form>
            )}
            <CreatePortfolioButton 
                suivantSelected={(portfolio.experiences.length > 0) ? true : false} 
                setEtape={setEtape} etape={etape} 
            />
        </div>
    )
}

export default ExperienceForm