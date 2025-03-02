import { useState } from "react";

export interface Information {
    email: string;
    motDePasse: string;
}

const LoginController = () => {
    const [validForm, setValidForm] = useState<boolean>(false);

    const [information, setInformation] = useState<Information>({
        email: '',
        motDePasse: '',
    });
    const [error, setError] = useState<Information>({
        email: '',
        motDePasse: '',
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

    const login = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let valid = true;
        if(information.email === ''){
            setError(prevState => ({
                ...prevState,
                email: 'Veuillez renseigner votre adresse e-mail'
            }));
            valid = false;
        }
        if(information.motDePasse === ''){
            setError(prevState => ({
                ...prevState,
                motDePasse: 'Veuillez renseigner votre mot de passe'
            }));
            valid = false;
        }
        if(valid){
            setValidForm(true);
        }
    }

    return(
        {
            information,
            handleChange,
            error,
            login,
            validForm
        }
    )
}

export default LoginController;