import RegisterCard from "./RegisterCard";
import Icon from "../../utils/Icon";

interface RegisterCardSectionProps {
    selected: string;
    setSelected: React.Dispatch<React.SetStateAction<string>>;
    setRegisterEtape: React.Dispatch<React.SetStateAction<number>>;
}


const RegisterCardSection: React.FC<RegisterCardSectionProps> = ({selected, setSelected, setRegisterEtape}) => {
    return(
        <div className="mt-8 w-full">
            {/* Mobile scrollable container */}
            <div className="flex gap-4 overflow-x-auto md:hidden px-2 ml-2">
                <div className="flex-shrink-0 w-[70%]">
                    <RegisterCard 
                        icon={<Icon name="registerStudent" />}
                        titre='Étudiant' 
                        description="Crée ton compte étudiant et accède à un portfolio interactif pour mettre en valeur tes compétences." 
                        selected={selected}
                        setSelected={setSelected}
                        setRegisterEtape={setRegisterEtape}
                        select='etudiant'
                    />
                </div>
                <div className="flex-shrink-0 w-[70%]">
                    <RegisterCard
                        icon={<Icon name="registerCompany" />}
                        titre='Entreprise'
                        description="Créez un compte entreprise et publiez vos offres pour attirer les talents adaptés à vos besoins."
                        selected={selected}
                        setSelected={setSelected}
                        setRegisterEtape={setRegisterEtape}
                        select='entreprise'
                    />
                </div>
                {/* <div className="flex-shrink-0 w-[70%]">
                    <RegisterCard
                        icon={<Icon name="registerSchool" />}
                        titre='École'
                        description="Créez un compte école et accompagnez vos étudiants dans la recherche d’alternance."
                        selected={selected}
                        setSelected={setSelected}
                        setRegisterEtape={setRegisterEtape}
                        select='ecole'
                    />
                </div> */}
            </div>

            {/* Desktop grid */}
            <div className="hidden md:grid md:grid-cols-2 md:gap-4">
                <RegisterCard 
                    icon={<Icon name="registerStudent" />}
                    titre='Étudiant' 
                    description="Crée ton compte étudiant et accède à un portfolio interactif pour mettre en valeur tes compétences." 
                    selected={selected}
                    setSelected={setSelected}
                    setRegisterEtape={setRegisterEtape}
                    select='etudiant'
                />
                <RegisterCard
                    icon={<Icon name="registerCompany" />}
                    titre='Entreprise'
                    description="Créez un compte entreprise et publiez vos offres pour attirer les talents adaptés à vos besoins."
                    selected={selected}
                    setSelected={setSelected}
                    setRegisterEtape={setRegisterEtape}
                    select='entreprise'
                />
                {/* <RegisterCard
                    icon={<Icon name="registerSchool" />}
                    titre='École'
                    description="Créez un compte école et accompagnez vos étudiants dans la recherche d’alternance."
                    selected={selected}
                    setSelected={setSelected}
                    setRegisterEtape={setRegisterEtape}
                    select='ecole'
                /> */}
            </div>
        </div>
    )
}

export default RegisterCardSection;