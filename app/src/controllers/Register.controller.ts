import { useState } from "react";

export interface Information {
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
    termsAccepted?: string;
}

const RegisterController = () => {
    const [selected, setSelected] = useState<string>('etudiant');
    const [registerEtape, setRegisterEtape] = useState<number>(1);
    const [termsAccepted, setTermsAccepted] = useState<boolean>(false);

    const [validFormStudent, setValidFormStudent] = useState<boolean>(false);
    const [validForm, setValidForm] = useState<boolean>(false);

    const [information, setInformation] = useState({
        prenom: '',
        nom: '',
        email: '',
        numero: '',
        motDePasse: '',
        confirmationMotDePasse: '',
        nomEntreprise: '',
        secteurActivite: '',
        adresse: '',
        complementAdresse: '',
        ville: '',
        codePostal: '',
        siret: '',
        nomEcole: '',
        termsAccepted: '',
    });

    const [error, setError] = useState({
        prenom: '',
        nom: '',
        email: '',
        numero: '',
        motDePasse: '',
        confirmationMotDePasse: '',
        nomEntreprise: '',
        secteurActivite: '',
        adresse: '',
        complementAdresse: '',
        ville: '',
        codePostal: '',
        siret: '',
        nomEcole: '',
        termsAccepted: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setTermsAccepted(checked);
        } else {
            setInformation(prevState => ({
                ...prevState,
                [name]: value
            }));
            setError(prevState => ({
                ...prevState,
                [name]: ''
            }));
        }
    };

    const validateFormStudent = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let valid = true;
        const newError = {
            prenom: '',
            nom: '',
            email: '',
            numero: '',
            motDePasse: '',
            confirmationMotDePasse: '',
            nomEntreprise: '',
            secteurActivite: '',
            adresse: '',
            complementAdresse: '',
            ville: '',
            codePostal: '',
            siret: '',
            nomEcole: '',
            termsAccepted: '',
        };
        if (information.prenom.trim() === '') {
            newError.prenom = 'Champs requis';
            valid = false;
        }
        if (information.nom.trim() === '') {
            newError.nom = 'Champs requis';
            valid = false;
        }
        if (information.email.trim() === '') {
            newError.email = 'Champs requis';
            valid = false;
        }
        if (information.numero.trim() === '') {
            newError.numero = 'Champs requis';
            valid = false;
        }
        if (information.motDePasse.trim() === '') {
            newError.motDePasse = 'Champs requis';
            valid = false;
        }
        if (information.confirmationMotDePasse.trim() === '') {
            newError.confirmationMotDePasse = 'Champs requis';
            valid = false;
        }
        if(information.motDePasse !== information.confirmationMotDePasse){
            newError.confirmationMotDePasse = 'Les mots de passe ne correspondent pas';
            newError.motDePasse = 'Les mots de passe ne correspondent pas';
            valid = false;
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(information.motDePasse)) {
            valid = false;
        }
        if (!termsAccepted) {
            newError.termsAccepted = 'Vous devez accepter les conditions générales';
            valid = false;
        }
        setError(newError);
        setValidFormStudent(valid);
    }

    const etapeSuivante = (e: React.MouseEvent<HTMLButtonElement>, typeForm: string) => {
        e.preventDefault();
        let valid = true;
        const newError = {
            prenom: '',
            nom: '',
            email: '',
            numero: '',
            motDePasse: '',
            confirmationMotDePasse: '',
            nomEntreprise: '',
            secteurActivite: '',
            adresse: '',
            complementAdresse: '',
            ville: '',
            codePostal: '',
            siret: '',
            nomEcole: '',
            termsAccepted: '',
        };

        if(typeForm === 'entreprise'){
            if (information.nomEntreprise.trim() === '') {
                newError.nomEntreprise = 'Champs requis';
                valid = false;
            }
            if (information.secteurActivite.trim() === '') {
                newError.secteurActivite = 'Champs requis';
                valid = false;
            }
        }
        if(typeForm === 'ecole'){
            if (information.nomEcole.trim() === '') {
                newError.nomEcole = 'Champs requis';
                valid = false;
            }
        }
        if(information.adresse.trim() === ''){
            newError.adresse = 'Champs requis';
            valid = false;
        }
        if(information.ville.trim() === ''){
            newError.ville = 'Champs requis';
            valid = false;
        }
        if(information.codePostal.trim() === ''){
            newError.codePostal = 'Champs requis';
            valid = false;
        }
        if(information.siret.trim() === ''){
            newError.siret = 'Champs requis';
            valid = false;
        }
        setError(newError);
        setValidForm(valid);
        console.log(newError);
        if(valid){
            setRegisterEtape(prevState => prevState + 1);
        }
    }

    return {
        selected, 
        setSelected,
        registerEtape,
        setRegisterEtape,
        information,
        setInformation,
        handleChange,
        validateFormStudent,
        error,
        validFormStudent,
        termsAccepted,
        etapeSuivante,
        validForm
    };
}

export default RegisterController;