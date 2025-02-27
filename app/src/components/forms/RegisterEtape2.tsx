import Icon from "../../Icon";
import ButtonBlack from "../buttons/ButtonBlack";
import InputLabel from "../fields/InputLabel";
import InputLabelPassword from "../fields/InputLabelPassword";

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

interface RegisterEtape2Props {
    information: Information;
    setInformation: React.Dispatch<React.SetStateAction<Information>>;
    setRegisterEtape: React.Dispatch<React.SetStateAction<number>>;
}

const RegisterEtape2: React.FC<RegisterEtape2Props> = ({information, setInformation, setRegisterEtape}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInformation(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return(
        <form className="flex flex-col w-full">
            <div className="flex flex-row justify-between w-full mt-10">
                <InputLabel type='text' style='w-1/2 mr-4' label="Prénom" placeholder="ex: Thomas" value={information.prenom} onChange={handleChange}/>
                <InputLabel type='text' style='w-1/2 ml-4' label="Nom" placeholder="ex: Durant" value={information.nom} onChange={handleChange}/>
            </div>
            <div className="flex flex-row justify-between w-full mt-5">
                <InputLabel type='email' style='w-1/2 mr-4' label="E-mail" placeholder="ex: thomas.durant@email.com" value={information.email} onChange={handleChange}/>
                <InputLabel type='tel' style='w-1/2 ml-4' label="Numéro de téléphone" placeholder="ex: 0612345678" value={information.numero} onChange={handleChange}/>
            </div>
            <InputLabelPassword style='w-full mt-5' label="Mot de passe" placeholder="********" value={information.motDePasse} onChange={handleChange}/>
            <div className="flex flex-row items-center mt-1">
                <Icon name="information"/>
                <p className="text-input-text ml-1 italic">Doit contenir au moins 8 caractères, 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial</p>
            </div>
            <InputLabelPassword style='w-full mt-5' label="Confirmation du mot de passe" placeholder="Entrez le mot de passe à nouveau" value={information.confirmationMotDePasse} onChange={handleChange}/>
            <div className="flex flex-row items-center mt-5 pl-2 mb-10">
                <input type="checkbox" className="w-5 h-5 accent-lilas" />
                <p className="font-Jakarta-medium text-[15px] ml-2">
                    En vous inscrivant vous acceptez les 
                    <a href='#' className="text-lilas underline underline-offset-2"> conditions générales </a> 
                    et la 
                    <a href='#' className="text-lilas underline underline-offset-2"> politique de confidentialité </a>
                </p>
            </div>
            <ButtonBlack text="Je m'inscris" style="py-5" handleClick={()=>setRegisterEtape(3)} />
            <p className="text-center mt-7">Vous avez déjà un compte ? <a href='#' className="text-lilas">Se connecter</a></p>
        </form>
    )
}

export default RegisterEtape2;