import back from '../assets/images/login_back.png';

import Icon from "../Icon";

import SectionTitle from "../components/titles/SectionTitle";
import PageTitle from "../components/titles/PageTitle";

import Pg from "../components/Pg";

import ButtonWhite from "../components/buttons/ButtonWhite";
import ButtonBlack from "../components/buttons/ButtonBlack";

import InputLabel from "../components/fields/InputLabel";
import InputLabelPassword from "../components/fields/InputLabelPassword";

import LoginController from "../controllers/Login.controller";
import { Link } from 'react-router-dom';

const Login = () => {
    const { information, handleChange, error, validForm, login } = LoginController();

    return (
        <div className="flex flex-row justify-center bg-gray-background w-full px-34 pt-10 pb-20">
            <div 
                className={`w-2/5 rounded-l-[2rem] bg-cover bg-no-repeat relative flex flex-col justify-center items-center pb-50`}
                style={{ backgroundImage: `url(${back})` }}
            >
                <div className="w-9/12 m-auto mt-14">
                    <SectionTitle text='Étudiants, entreprises, écoles :' style="text-white text-center font-Jakarta-extra-bold" /> 
                    <SectionTitle text='connectons les talents de demain !' style="text-center font-Jakarta-extra-bold" />
                </div>
            </div>
            <div className="flex flex-col h-max items-center w-3/5 bg-white px-10 py-12 rounded-[2rem] ml-[-2rem] z-30">
                <PageTitle text='Connexion'/>
                <Pg text='Reprenez vos recherches !'/>

                <div className="w-full flex flex-col items-center mt-8">
                    <ButtonWhite text="Continuer avec Google" icon={<Icon name="google" />} style="w-full py-5 mt-4" />
                    <div className="flex flex-row items-center w-full px-2 mt-8">
                        <div className="w-1/2 border-t-1 border-gray-dark"></div>
                        <p className="px-6 text-gray-dark">OU</p>
                        <div className="w-1/2 border-t-1 border-gray-dark"></div>
                    </div>
                </div>

                <form className="flex flex-col w-full">
                    <InputLabel name="email" type='email' style='w-full ' label="E-mail" placeholder="Entrez votre adresse e-mail" value={information.email} onChange={handleChange} error={validForm ? '' : error.email}/>
                    <InputLabelPassword name="motDePasse" style='w-full mt-5' label="Mot de passe" placeholder="********" value={information.motDePasse} onChange={handleChange} error={validForm ? '' : error.motDePasse}/>
                    <ButtonBlack text="Je m'inscris" style="py-5 mt-10" handleClick={(e) => login(e)} />
                    <p className="text-center mt-7">Vous n’avez pas encore de compte ? <Link to='/login' className="text-lilas">S'inscrire</Link></p>
                </form>

            </div>
        </div>
    );
}

export default Login;