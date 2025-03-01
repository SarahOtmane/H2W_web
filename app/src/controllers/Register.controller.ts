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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInformation(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return {
        selected, 
        setSelected,
        registerEtape,
        setRegisterEtape,
        information,
        setInformation,
        handleChange
    };
}

export default RegisterController;