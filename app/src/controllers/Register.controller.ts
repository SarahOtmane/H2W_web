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
}

const RegisterController = () => {
    const [selected, setSelected] = useState<string>('etudiant');
    const [registerEtape, setRegisterEtape] = useState<number>(1);

    const [validFormStudent, setValidFormStudent] = useState<boolean>(false);

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
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInformation(prevState => ({
            ...prevState,
            [name]: value
        }));
        setError(prevState => ({
            ...prevState,
            [name]: ''
        }));
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
            valid = false;
        }
        setError(newError);
        setValidFormStudent(valid);
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
    };
}

export default RegisterController;