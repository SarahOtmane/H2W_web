import PageTitle from "../components/titles/PageTitle";
import Pg from "../components/Pg";
import RegisterStudent from "../components/forms/RegisterStudent";
import RegisterLeftSection from "../components/forms/RegisterLeftSection";
import RegisterCardSection from "../components/cards/RegisterCardSection";
import ButtonWhite from "../components/buttons/ButtonWhite";
import Icon from "../utils/Icon";
import RegisterEtape from "../components/RegisterEtape";
import RegisterSchoolCompany from "../components/forms/RegisterSchoolCompany";
import RegisterController from "../controllers/Register.controller";


const Register: React.FC = () => {

    const {
        selected, 
        setSelected,
        registerEtape,
        setRegisterEtape,
        information,
        handleChange,
        validateForm,
        error,
        validForm,
        termsAccepted,
        validateFormEtape1,
        validFormEtapeSuivante,
    } = RegisterController();


    return(
        <main className="flex flex-row justify-center bg-white md:bg-gray-background w-full md:px-16 lg:px-38 pt-4 md:pt-10 pb-20">
            <RegisterLeftSection etape={registerEtape} />

            <div className="flex flex-col h-max items-center md:w-3/5 w-full m-auto bg-white md:px-10 md:py-12 rounded-[2rem] md:ml-[-2rem] z-30">
                <PageTitle text='Créer un compte'/>
                <Pg text='Trouvez le professionnel parfait pour répondre à vos besoins quotidiens.' style="text-center w-[70%] md:w-full"/>
                <RegisterCardSection selected={selected} setSelected={setSelected} setRegisterEtape={setRegisterEtape} />
                {selected === 'etudiant' &&
                    <>
                    <div className="w-full flex flex-col items-center mt-8 px-4 md:px-0">
                        <ButtonWhite text="Continuer avec Google" icon={<Icon name="google" />} style="w-full py-5 mt-4" />
                        <div className="flex flex-row items-center w-full px-2 mt-8">
                            <div className="w-1/2 border-t-1 border-gray-dark"></div>
                            <p className="px-6 text-gray-dark">OU</p>
                            <div className="w-1/2 border-t-1 border-gray-dark"></div>
                        </div>
                    </div>
                    <RegisterStudent 
                        information={information} handleChange={handleChange} 
                        validateForm={validateForm} error={error} 
                        validForm={validForm} termsAccepted={termsAccepted}  />
                    </>
                }
                {!(selected === 'etudiant') &&
                    <>
                    <RegisterEtape text={selected} registerEtape={registerEtape} />
                    <RegisterSchoolCompany 
                        select={selected} information={information} 
                        handleChange={handleChange} registerEtape={registerEtape} 
                        validForm={validForm} error={error} 
                        validateForm={validateForm} termsAccepted={termsAccepted}
                        validateFormEtape1={validateFormEtape1} validFormEtapeSuivante={validFormEtapeSuivante}
                    />
                    </>
                }
            </div>
        </main>
    )
}

export default Register;