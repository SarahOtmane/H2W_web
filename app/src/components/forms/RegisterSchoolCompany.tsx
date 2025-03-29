import Subtitle from "../titles/Subtitle";
import RegisterEtape1 from "./RegisterEtape1";
import RegisterEtape2 from "./RegisterEtape2";
import WindowSize from "../../utils/WindowSize";

import { Information } from "../../controllers/Register.controller";
import back from '../../assets/images/register_part3.svg';

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
    const size = WindowSize();
    const isMobile = size.width < 768;

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
                <>
                <div className="flex flex-col mt-14 text-center w-full px-4 md:px-28">
                    <Subtitle text="Confirmez votre adresse email" />
                    <p className="mt-4">Nous avons envoyé un email de confirmation à <span className="font-Jakarta-bold">[{information.email}]</span>. <br></br>Cliquez sur le lien dans l’email pour activer votre compte et commencer votre recherche d’alternance.</p>
                </div>
                {isMobile && 
                    <div className="relative bg-custom-orange text-white px-6 py-3 rounded-[2rem] w-max mr-4">
                        <Subtitle text="À très vite !" />
                        <div className="absolute"
                                style={{
                                    width: '22.57px',
                                    height: '30.46px',
                                    backgroundColor: '#FF9B3E',
                                    borderRadius: '2px',
                                    transform: 'matrix(-0.84, -0.55, -0.55, 0.84, 0, 0)',
                                    left: '100%',
                                    top: '50%',
                                    marginLeft: '2px',
                                    translate: '0 -50%',
                                }}> 
                        </div>
                        <img src={back} alt="bee" className="w-[100px] h-auto" />
                    </div>
                }
                </>
            }
        </>
    )
}

export default RegisterSchoolCompany;