import Subtitle from "../titles/Subtitle";
import RegisterEtape1 from "./RegisterEtape1";
import RegisterEtape2 from "./RegisterEtape2";

import { Information } from "../../controllers/Register.controller";

interface RegisterSchoolCompanyProps {
    select: string;
    information: Information;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    registerEtape: number;
    validForm: boolean;
    validateForm: (e: React.MouseEvent<HTMLButtonElement>, typeForm: string) => void;
    validateFormEtape1: (e: React.MouseEvent<HTMLButtonElement>, typeForm: string) => void;
    validFormEtapeSuivante: boolean;
    error: Information;
    termsAccepted: boolean;
}

const RegisterSchoolCompany: React.FC<RegisterSchoolCompanyProps> = ({select, information, handleChange, registerEtape, error, validForm, validateFormEtape1, validFormEtapeSuivante, termsAccepted, validateForm}) => {
    return(
        <>
            {  registerEtape === 1 &&
                <RegisterEtape1 
                    select={select} information={information} handleChange={handleChange} 
                    error={error} validFormEtapeSuivante={validFormEtapeSuivante} validateFormEtape1={validateFormEtape1} 
                />
            }

            {  registerEtape === 2 &&
                <RegisterEtape2  
                    information={information} handleChange={handleChange} 
                    validateForm={validateForm} error={error} 
                    validForm={validForm} termsAccepted={termsAccepted}
                />
            }
            {  registerEtape === 3 &&
                <div className="flex flex-col mt-14 text-center w-full px-28">
                    <Subtitle text="Confirmez votre adresse email" />
                    <p className="mt-4">Nous avons envoyé un email de confirmation à <span className="font-Jakarta-bold">[{information.email}]</span>. <br></br>Cliquez sur le lien dans l’email pour activer votre compte et commencer votre recherche d’alternance.</p>
                </div>
            }
        </>
    )
}

export default RegisterSchoolCompany;