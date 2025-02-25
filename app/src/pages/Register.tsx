import { useState } from "react";

import PageTitle from "../components/titles/PageTitle";
import Pg from "../components/Pg";
import RegisterCard from "../components/cards/RegisterCard";
import Icon from "../Icon";
import RegisterStudent from "../components/forms/RegisterStudent";


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
        <main className="flex flex-row justify-center bg-gray-background w-full px-40 pt-50 mb-20">
            <div className="bg-lilas w-2/5 rounded-l-[2rem]">
            </div>
            <div className="flex flex-col h-max items-center w-3/5 bg-white px-10 py-12 rounded-[2rem] ml-[-2rem]">
                <PageTitle text='Créer un compte'/>
                <Pg text='Trouvez le professionnel parfait pour répondre à vos besoins quotidiens.'/>
                <div className="flex flex-row justify-center items-center mt-8">
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