import PageTitle from "../components/titles/PageTitle";
import Pg from "../components/Pg";
import RegisterStudent from "../components/forms/RegisterStudent";
import RegisterLeftSection from "../components/forms/RegisterLeftSection";
import RegisterCardSection from "../components/cards/RegisterCardSection";
import ButtonWhite from "../components/buttons/ButtonWhite";
import Icon from "../Icon";
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
        validateFormStudent,
        error,
        validFormStudent,
    } = RegisterController();


    return(
        <main className="flex flex-row justify-center bg-gray-background w-full px-34 pt-50 mb-20">
            <RegisterLeftSection etape={registerEtape} />

            <div className="flex flex-col h-max items-center w-3/5 bg-white px-10 py-12 rounded-[2rem] ml-[-2rem] z-30">
                <PageTitle text='Créer un compte'/>
                <Pg text='Trouvez le professionnel parfait pour répondre à vos besoins quotidiens.'/>
                <RegisterCardSection selected={selected} setSelected={setSelected} setRegisterEtape={setRegisterEtape} />
                {selected === 'etudiant' &&
                    <>
                    <div className="w-full flex flex-col items-center mt-8">
                        <ButtonWhite text="Continuer avec Google" icon={<Icon name="google" />} style="w-full py-5 mt-4" />
                        <div className="flex flex-row items-center w-full px-2 mt-8">
                            <div className="w-1/2 border-t-1 border-gray-dark"></div>
                            <p className="px-6 text-gray-dark">OU</p>
                            <div className="w-1/2 border-t-1 border-gray-dark"></div>
                        </div>
                    </div>
                    <RegisterStudent information={information} handleChange={handleChange} validateFormStudent={validateFormStudent} error={error} validFormStudent={validFormStudent} />
                    </>
                }
                {!(selected === 'etudiant') &&
                    <>
                    <RegisterEtape text={selected} registerEtape={registerEtape} />
                    <RegisterSchoolCompany select={selected} information={information} handleChange={handleChange} setRegisterEtape={setRegisterEtape} registerEtape={registerEtape} />
                    </>
                }
            </div>
        </main>
    )
}

export default Register;