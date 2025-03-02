import ButtonBlack from "../buttons/ButtonBlack";
import InputLabel from "../fields/InputLabel";

import { Information } from "../../controllers/Register.controller";
import { Link } from "react-router-dom";

interface RegisterEtape1Props {
    select: string;
    information: Information;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    validFormEtapeSuivante: boolean;
    validateFormEtape1: (e: React.MouseEvent<HTMLButtonElement>, typeForm: string) => void;
    error: Information;
}

const RegisterEtape1: React.FC<RegisterEtape1Props> = ({select, information, handleChange, validFormEtapeSuivante, validateFormEtape1, error}) => {

    return(
        <form className="flex flex-col w-full mt-14">
            <div className="flex flex-row justify-between w-full">
                <InputLabel 
                    name={`${select==='entreprise' ? "nomEntreprise" : "nomEcole"}`} 
                    type='text' style={`w-1/2 ${select==='entreprise' ? "mr-4" : "w-full"}`} 
                    label={`${select==='entreprise' ? "Nom de l'entreprise" : "Nom de l'école"}`} 
                    placeholder="ex : WebTech Solutions" onChange={handleChange}
                    value={select==='entreprise' ? information.nomEntreprise : information.nomEcole}
                    error={validFormEtapeSuivante ? '' : error.nomEntreprise}
                />
                {select==='entreprise' &&
                    <InputLabel 
                        name="secteurActivite" type='text' style='w-1/2 ml-4' 
                        label="Secteur d'acitivité" placeholder="ex : Informatique, Marketing, ..." 
                        value={information.secteurActivite} onChange={handleChange}
                        error={validFormEtapeSuivante ? '' : error.secteurActivite}
                    />
                }
            </div>
            <div className="flex flex-row justify-between w-full mt-5">
                <InputLabel 
                    name="adresse" type='text'
                    style={`w-1/2 ${select==='entreprise' ? "mr-4" : "w-full"}`} 
                    label={`${select==='entreprise' ? "Adresse de l'entreprise" : "Adresse de l'école"}`} 
                    placeholder="ex : 15 rue des Entrepreneurs" value={information.adresse} onChange={handleChange}
                    error={validFormEtapeSuivante ? '' : error.adresse}
                />
                {select==='entreprise' &&
                    <InputLabel name="complementAdresse" type='text' style='w-1/2 ml-4' label="Complément de l’adresse" placeholder="ex : Bâtiment B, 3e étage (optionnel)" value={information.complementAdresse} onChange={handleChange}/>
                }
            </div>
            <div className="flex flex-row justify-between w-full mt-5">
                <InputLabel 
                    name="ville" type='text' style='w-1/2 mr-4' label="Ville" 
                    placeholder="ex : Paris" value={information.ville} onChange={handleChange}
                    error={validFormEtapeSuivante ? '' : error.ville}
                />
                <InputLabel 
                    name="codePostal" type='text' style='w-1/2 ml-4' label="Code postal" 
                    placeholder="ex : 75002" value={information.codePostal} onChange={handleChange}
                    error={validFormEtapeSuivante ? '' : error.codePostal}
                />
            </div>
            <InputLabel 
                name="siret" type='text' style='w-1/2 w-full mt-5 mb-14' label="Numéro de SIRET" 
                placeholder="ex : 123 456 789 00012" value={information.siret} onChange={handleChange}
                error={validFormEtapeSuivante ? '' : error.siret}
            />
            <ButtonBlack text="Suivant" style="py-5" handleClick={e => validateFormEtape1(e, 'entreprise')} />
            <p className="text-center mt-7">Vous avez déjà un compte ? <Link to='/login' className="text-lilas">Se connecter</Link></p>
        </form>
    )
}

export default RegisterEtape1;