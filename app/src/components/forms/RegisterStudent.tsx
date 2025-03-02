import Icon from "../../Icon";
import ButtonBlack from "../buttons/ButtonBlack";
import InputLabel from "../fields/InputLabel";
import InputLabelPassword from "../fields/InputLabelPassword";
import InputCheckbox from "../fields/InputCheckbox";

import { Information } from "../../controllers/Register.controller";
import { Link } from "react-router-dom";

interface RegisterStudentProps {
    information: Information;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error: Information;
    validateForm: (e: React.MouseEvent<HTMLButtonElement>, typeForm: string) => void;
    validForm: boolean;
    termsAccepted: boolean;
}

const RegisterStudent: React.FC<RegisterStudentProps> = ({information, handleChange, error, validateForm, validForm, termsAccepted}) =>{

    return(
        <form className="flex flex-col w-full">
            <div className="flex flex-row justify-between w-full mt-10">
                <InputLabel name="prenom" type='text' style='w-1/2 mr-4' label="Prénom" placeholder="ex: Thomas" value={information.prenom} onChange={handleChange} error={validForm ? '' : error.prenom}/>
                <InputLabel name="nom" type='text' style='w-1/2 ml-4' label="Nom" placeholder="ex: Durant" value={information.nom} onChange={handleChange} error={validForm ? '' : error.nom}/>
            </div>
            <div className="flex flex-row justify-between w-full mt-5">
                <InputLabel name="email" type='email' style='w-1/2 mr-4' label="E-mail" placeholder="ex: thomas.durant@email.com" value={information.email} onChange={handleChange} error={validForm ? '' : error.email}/>
                <InputLabel name="numero" type='tel' style='w-1/2 ml-4' label="Numéro de téléphone" placeholder="ex: 0612345678" value={information.numero} onChange={handleChange} error={validForm ? '' : error.numero}/>
            </div>
            <InputLabelPassword name="motDePasse" style='w-full mt-5' label="Mot de passe" placeholder="********" value={information.motDePasse} onChange={handleChange} error={validForm ? '' : error.motDePasse}/>
            {!error.motDePasse &&
                <div className="flex flex-row items-center mt-1">
                    <Icon name="information"/>
                    <p className="text-input-text ml-1 italic">Doit contenir au moins 8 caractères, 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial</p>
                </div>
            }
            <InputLabelPassword name="confirmationMotDePasse" style='w-full mt-5' label="Confirmation du mot de passe" placeholder="Entrez le mot de passe à nouveau" value={information.confirmationMotDePasse} onChange={handleChange} error={validForm ? '' : error.confirmationMotDePasse}/>
            <div className="flex flex-row items-center mt-5 pl-2">
                <InputCheckbox checked={termsAccepted} onChange={handleChange} error={error} />
                <p className="font-Jakarta-medium text-[15px] ml-2">
                    En vous inscrivant vous acceptez les     
                    <Link to='#' className="text-lilas underline underline-offset-2"> conditions générales </Link> 
                    et la 
                    <Link to='#' className="text-lilas underline underline-offset-2"> politique de confidentialité </Link>
                </p>
            </div>
            {error.termsAccepted &&
                <div className="mt-2 pl-2 flex">
                    <Icon name="attention" />
                    <p className="ml-2 text-custom-red">{error.termsAccepted}</p>
                </div>
            }
            <ButtonBlack text="Je m'inscris" style="py-5 mt-10" handleClick={(e) => validateForm(e, 'etudiant')} />
            <p className="text-center mt-7">Vous avez déjà un compte ? <Link to='/login' className="text-lilas">Se connecter</Link></p>
        </form>
    )
}

export default RegisterStudent;