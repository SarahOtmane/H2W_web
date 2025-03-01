import Subtitle from "../titles/Subtitle";
import RegisterEtape1 from "./RegisterEtape1";
import RegisterEtape2 from "./RegisterEtape2";

import { Information } from "../../controllers/Register.controller";

interface RegisterSchoolCompanyProps {
    select: string;
    information: Information;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    setRegisterEtape: React.Dispatch<React.SetStateAction<number>>;
    registerEtape: number;
}

const RegisterSchoolCompany: React.FC<RegisterSchoolCompanyProps> = ({select, information, handleChange, setRegisterEtape, registerEtape}) => {
    return(
        <>
            {  registerEtape === 1 &&
                <RegisterEtape1 select={select} information={information} handleChange={handleChange} setRegisterEtape={setRegisterEtape} />
            }

            {  registerEtape === 2 &&
                <RegisterEtape2  information={information} handleChange={handleChange} setRegisterEtape={setRegisterEtape} />
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