import { useState } from "react";

import PageTitle from "../components/titles/PageTitle";
import Pg from "../components/Pg";
import RegisterCard from "../components/cards/RegisterCard";
import Icon from "../Icon";
import RegisterStudent from "../components/forms/RegisterStudent";
import SectionTitle from "../components/titles/SectionTitle";
import Subtitle from "../components/titles/Subtitle";


const Register: React.FC = () => {
    const [selected, setSelected] = useState('etudiant');
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
    })

    return(
        <main className="flex flex-row justify-center bg-gray-background w-full px-34 pt-50 mb-20">
            <div className=" w-2/5 rounded-l-[2rem] bg-[url(./assets/images/register_back.png)] bg-cover bg-no-repeat relative flex flex-col justify-center items-center pb-40">
                <div className="w-9/12 m-auto mt-14">
                    <SectionTitle text='Étudiants, entreprises, écoles :' style="text-white text-center font-Jakarta-extra-bold" /> 
                    <SectionTitle text='connectons les talents de demain !' style="text-center font-Jakarta-extra-bold" />
                </div>
                <div className="relative flex flex-col items-end mt-10 mr-10">
                    <svg className="absolute -top-5 right-10" width="36" height="31" viewBox="0 0 36 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.7113 1.82936C18.9331 0.542796 17.0668 0.542798 16.2887 1.82936L0.783188 27.4649C-0.0230166 28.7978 0.936741 30.5 2.49451 30.5H33.5055C35.0633 30.5 36.023 28.7978 35.2168 27.4649L19.7113 1.82936Z" fill="white"/>
                        <path d="M19.7113 1.82936C18.9331 0.542796 17.0668 0.542798 16.2887 1.82936L0.783188 27.4649C-0.0230166 28.7978 0.936741 30.5 2.49451 30.5H33.5055C35.0633 30.5 36.023 28.7978 35.2168 27.4649L19.7113 1.82936Z" fill="white"/>
                        <path d="M19.7113 1.82936C18.9331 0.542796 17.0668 0.542798 16.2887 1.82936L0.783188 27.4649C-0.0230166 28.7978 0.936741 30.5 2.49451 30.5H33.5055C35.0633 30.5 36.023 28.7978 35.2168 27.4649L19.7113 1.82936Z" fill="white"/>
                        <path d="M19.7113 1.82936C18.9331 0.542796 17.0668 0.542798 16.2887 1.82936L0.783188 27.4649C-0.0230166 28.7978 0.936741 30.5 2.49451 30.5H33.5055C35.0633 30.5 36.023 28.7978 35.2168 27.4649L19.7113 1.82936Z" fill="white"/>
                        <path d="M19.7113 1.82936C18.9331 0.542796 17.0668 0.542798 16.2887 1.82936L0.783188 27.4649C-0.0230166 28.7978 0.936741 30.5 2.49451 30.5H33.5055C35.0633 30.5 36.023 28.7978 35.2168 27.4649L19.7113 1.82936Z" fill="white"/>
                    </svg>
                    <div className="bg-white w-max px-10 py-5 rounded-[2rem] m-auto">
                        <Subtitle text="Bienvenue sur Hive2Work !" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col h-max items-center w-3/5 bg-white px-10 py-12 rounded-[2rem] ml-[-2rem] z-30">
                <PageTitle text='Créer un compte'/>
                <Pg text='Trouvez le professionnel parfait pour répondre à vos besoins quotidiens.'/>
                <div className="flex flex-row justify-center items-stretch mt-8 w-full">
                    <RegisterCard 
                        icon={<Icon name="registerStudent" />}
                        titre='Étudiant' 
                        description="Crée ton compte étudiant et accède à un portfolio interactif pour mettre en valeur tes compétences." 
                        style="mr-4"
                        selected={selected}
                        setSelected= {setSelected}
                        select='etudiant'
                    />
                    <RegisterCard
                        icon={<Icon name="registerCompany" />}
                        titre='Entreprise'
                        description="Créez un compte entreprise et publiez vos offres pour attirer les talents adaptés à vos besoins."
                        style="mr-4"
                        selected={selected}
                        setSelected= {setSelected}
                        select='entreprise'
                    />
                    <RegisterCard
                        icon={<Icon name="registerSchool" />}
                        titre='École'
                        description="Créez un compte école et accompagnez vos étudiants dans la recherche d’alternance."
                        selected={selected}
                        setSelected= {setSelected}
                        select='ecole'
                    />
                </div>
                <RegisterStudent information={information} setInformation={setInformation} select="student" />
            </div>
        </main>
    )
}

export default Register;