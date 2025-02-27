import RegisterEtape1 from "./RegisterEtape1";
import RegisterEtape2 from "./RegisterEtape2";

interface Information {
    prenom: string;
    nom: string;
    email: string;
    numero: string;
    motDePasse: string;
    confirmationMotDePasse: string;
    nomEntreprise: string;
    secteurActivite: string;
    adresse: string;
    complementAdresse: string;
    ville: string;
    codePostal: string;
    siret: string;
    nomEcole: string;
}

interface RegisterSchoolCompanyProps {
    select: string;
    information: Information;
    setInformation: React.Dispatch<React.SetStateAction<Information>>;
    setRegisterEtape: React.Dispatch<React.SetStateAction<number>>;
    registerEtape: number;
}

const RegisterSchoolCompany: React.FC<RegisterSchoolCompanyProps> = ({select, information, setInformation, setRegisterEtape, registerEtape}) => {
    console.log(registerEtape)
    return(
        <>
            {  registerEtape === 1 &&
                <RegisterEtape1 select={select} information={information} setInformation={setInformation} setRegisterEtape={setRegisterEtape} />
            }

            {  registerEtape === 2 &&
                <RegisterEtape2  information={information} setInformation={setInformation} setRegisterEtape={setRegisterEtape} />
            }
        </>
    )
}

export default RegisterSchoolCompany;