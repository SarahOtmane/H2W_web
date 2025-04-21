import CreatePortfolioButton from "../buttons/CreatePortfolioButton";
import SelectCompetences from "../student/SelectCompetences";

import CreatePortfolioController from "../../controllers/CreatePortfolio.controller";

const CreatePortfolio = () => {
    const {
        etapes, etape, setEtape, portfolio, maxChars, hardSkills, handleChangePortfolio, updateSoftwares,
        metiers, softSkills, softwares, updateHardSkills, updateSoftSkills, updateMetiers
    } = CreatePortfolioController()

    return(
        <div className="mx-4 md:px-36 mt-4 ">
            <div className="flex flex-row justify-between items-center py-12 px-10 rounded-[1rem] bg-white">
                {etapes.map((item) => (
                    <div className={`flex flex-col items-center text-[32px] font-Jakarta-extra-bold ${etape===item.num ? 'text-custom-orange' : ''}`} key={item.num}>
                        <p>{item.num}</p>
                        <p className="w-2/3 text-center text-[18px] font-Jakarta-regular ">{item.title}</p>
                    </div>
                ))}
            </div>
            {etape === 1 && (
                <div className="bg-white rounded-[1rem] py-12 px-10 mt-4 flex flex-col">
                    <h2 className="text-[24px] font-Jakarta-bold">Présentez-vous aux recruteurs.</h2>

                    <SelectCompetences
                        label="Quel est votre métier ?"
                        maxSkills={1}
                        skillsList={metiers}
                        selectedSkill={portfolio.metier}
                        setSelectedSkill={updateMetiers}
                        isSingleSelect={true}
                        placeholder="Développeur web, Designer UI/UX, etc."
                    />

                    <label className="text-[16px] font-Jakarta-bold mt-8">Biographie</label>
                    <div className="flex flex-col mt-4 relative">
                        <textarea
                            className="bg-gray-100 text-sm text-gray-700 w-full rounded-[1rem] p-4 outline-none resize-none"
                            placeholder="Parlez nous de vous..."
                            rows={5}
                            value={portfolio.description}
                            onChange={handleChangePortfolio}
                        />
                        <span className="absolute bottom-0 right-2 text-sm text-gray-600">
                            {portfolio.description.length}/{maxChars}
                        </span>
                    </div>

                    <CreatePortfolioButton suivantSelected={(portfolio.description && portfolio.metier) ? true : false} setEtape={setEtape} etape={etape} />
                </div>
            )}

            {etape === 2 && (
                <div className="bg-white rounded-[1rem] py-12 px-10 mt-4 flex flex-col">
                    <h2 className="text-[24px] font-Jakarta-bold">Listez vos compétences</h2>
                    <SelectCompetences
                        label="Chercher une compétence technique (20 maximum)"
                        maxSkills={20}
                        skillsList={hardSkills}
                        selectedSkills={portfolio.hardSkills}
                        setSelectedSkills={updateHardSkills}
                        isSingleSelect={false}
                        placeholder="HTML, CSS, JavaScript, etc."
                    />

                    <SelectCompetences
                        label="Chercher un softskill (20 maximum)"
                        maxSkills={20}
                        skillsList={softSkills}
                        selectedSkills={portfolio.softSkills}
                        setSelectedSkills={updateSoftSkills}
                        isSingleSelect={false}
                        placeholder="Travail en équipe, Autonomie, etc."
                    />

                    <SelectCompetences
                        label="Chercher un logiciel (20 maximum)"
                        maxSkills={20}
                        skillsList={softwares}
                        selectedSkills={portfolio.softwares}
                        setSelectedSkills={updateSoftwares}
                        isSingleSelect={false}
                        placeholder="Figma, Photoshop, Visual studio code etc."
                    />

                    <CreatePortfolioButton suivantSelected={(portfolio.softSkills.length > 0 && portfolio.hardSkills.length > 0 && portfolio.softwares.length > 0) ? true : false} setEtape={setEtape} etape={etape} />
                </div>
            )}

            
        </div>
    )
}

export default CreatePortfolio;