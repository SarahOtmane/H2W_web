import RegisterCard from "./RegisterCard";
import Icon from "../../Icon";

interface RegisterCardSectionProps {
    selected: string;
    setSelected: React.Dispatch<React.SetStateAction<string>>;
    setRegisterEtape: React.Dispatch<React.SetStateAction<number>>;
}


const RegisterCardSection: React.FC<RegisterCardSectionProps> = ({selected, setSelected, setRegisterEtape}) => {
    return(
        <div className="flex flex-row justify-center items-stretch mt-8 w-full">
            <RegisterCard 
                icon={<Icon name="registerStudent" />}
                titre='Étudiant' 
                description="Crée ton compte étudiant et accède à un portfolio interactif pour mettre en valeur tes compétences." 
                style="mr-4"
                selected={selected}
                setSelected= {setSelected}
                setRegisterEtape={setRegisterEtape}
                select='etudiant'
            />
            <RegisterCard
                icon={<Icon name="registerCompany" />}
                titre='Entreprise'
                description="Créez un compte entreprise et publiez vos offres pour attirer les talents adaptés à vos besoins."
                style="mr-4"
                selected={selected}
                setSelected= {setSelected}
                setRegisterEtape={setRegisterEtape}
                select='entreprise'
            />
            <RegisterCard
                icon={<Icon name="registerSchool" />}
                titre='École'
                description="Créez un compte école et accompagnez vos étudiants dans la recherche d’alternance."
                selected={selected}
                setSelected= {setSelected}
                setRegisterEtape={setRegisterEtape}
                select='ecole'
            />
        </div>
    )
}

export default RegisterCardSection;