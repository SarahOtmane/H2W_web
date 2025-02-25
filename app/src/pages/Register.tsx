import PageTitle from "../components/titles/PageTitle";
import TextUnderTitle from "../components/titles/TextUnderTitle";


const Register: React.FC = () => {
    return(
        <main className="flex flex-row justify-center h-screen bg-gray-background w-full px-28 pt-50">
            <div className="bg-lilas h-full w-1/3 rounded-">
            </div>
            <form className="flex flex-col justify-center items-center w-2/3 bg-white">
                <PageTitle text='Créer un compte'/>
                <TextUnderTitle text='Trouvez le professionnel parfait pour répondre à vos besoins quotidiens.'/>
            </form>
        </main>
    )
}

export default Register;