import CreatePortfolioController from "../../controllers/CreatePortfolio.controller"
import InputCheckbox from "../fields/InputCheckbox"
import InputLabel from "../fields/InputLabel"
import MissionsInput from "../student/MissionsInput"



const ExperienceForm = () => {
    const {
        experience, setExperience, handleChangeExperienceCheckbox, handleAddExperienceInPortfolio
    } = CreatePortfolioController()

    return(
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
            onClick={(e) => {
                e.preventDefault();
                handleAddExperienceInPortfolio()
            }}
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
    )
}

export default ExperienceForm