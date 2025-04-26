import { useState } from "react";

import instance, { addToken } from "../utils/axiosConfig";

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

    const login = async(e: React.MouseEvent<HTMLButtonElement>) => {
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
            try {
                const response = await instance.post('/auth/login', {
                    email: information.email,
                    password: information.motDePasse
                });
                const token = response.data.token;
                addToken(token);
            } catch (error) {
                console.error(error); 
            }
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