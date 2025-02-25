import PageTitle from "../components/titles/PageTitle";
import Pg from "../components/Pg";
import RegisterCard from "../components/cards/RegisterCard";
import Icon from "../Icon";


const Register: React.FC = () => {
    return(
        <main className="flex flex-row justify-center h-screen bg-gray-background w-full px-28 pt-50">
            <div className="bg-lilas h-full w-1/3 rounded-">
            </div>
            <section className="flex flex-col justify-center items-center w-2/3 bg-white">
                <PageTitle text='Créer un compte'/>
                <Pg text='Trouvez le professionnel parfait pour répondre à vos besoins quotidiens.'/>
                <div className="flex flex-row justify-center items-center">
                    <RegisterCard 
                        icon={<Icon name="registerStudent" />}
                        titre='Étudiant' 
                        description="Crée ton compte étudiant et accède à un portfolio interactif pour mettre en valeur tes compétences." 
                        selected={true}
                    />
                    <RegisterCard
                        icon={<Icon name="registerCompany" />}
                        titre='Entreprise'
                        description="Créez un compte entreprise et publiez vos offres pour attirer les talents adaptés à vos besoins."
                        selected={false}
                    />
                    <RegisterCard
                        icon={<Icon name="registerSchool" />}
                        titre='Freelance'
                        description="Créez un compte freelance et"
                        selected={false}
                    />
                </div>
            </section>
        </main>
    )
}

export default Register;