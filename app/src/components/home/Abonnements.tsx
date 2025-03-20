import Icon from "../../utils/Icon";
import ButtonBlack from "../buttons/ButtonBlack";
import Pg from "../Pg";
import PageTitle from "../titles/PageTitle";
import SectionTitle from "../titles/SectionTitle";



const Abonnements: React.FC = () => {
    return (
       <>
        <div className="bg-white text-black w-full flex rounded-[2rem] relative py-12 items-center mb-4">
            <p className="ml-12 px-10 py-3 border-1 border-gray-dark rounded-[2rem] w-max absolute">Nos Abonnements</p>
            <PageTitle text="Tous les abonnements" style="text-center w-full" />
        </div>
        <div className="mb-26 flex">
            <div className="bg-white text-black w-1/3 rounded-[2rem] mr-8 px-8 py-11">
                <div className="flex items-center">
                    <Icon name="abonnementGratuit" />
                    <div className="ml-4">
                        <h3 className="font-Jakarta-extra-bold text-base sm:text-lg md:text-xl lg:text-subtitle">Gratuit</h3>
                        <Pg text='Uniquement pour étudiants' />
                    </div>
                </div>
                <div className="flex my-4">
                    <SectionTitle text="0€" />
                    <span className="text-gray-dark self-end">/mois</span>
                </div>
                <div className="h-[1px] w-full bg-gray-dark m-auto"></div>
                <ul className="my-6">
                    <li className="flex items-center"><Icon name="done" /><p className="ml-4">Créer un portfolio</p></li>
                    <li className="flex items-center"><Icon name="done" /><p className="ml-4">Accès aux offres</p></li>
                    <li className="flex items-center"><Icon name="done" /><p className="ml-4">Accès aux portfolios</p></li>
                    <li className="flex items-center"><Icon name="error" /><p className="ml-4">Publier le portfolio</p></li>
                    <li className="flex items-center"><Icon name="error" /><p className="ml-4">Postuler aux offres</p></li>
                </ul>
                <ButtonBlack text="Choisir la formule" icon={<Icon name="flecheButton" />}/>
            </div>
            <div className="bg-white text-black w-1/3 rounded-[2rem] mr-8 px-8 py-11">
                <div className="flex items-center">
                    <Icon name="abonnementEtudiant" />
                    <div className="ml-4">
                        <h3 className="font-Jakarta-extra-bold text-base sm:text-lg md:text-xl lg:text-subtitle">Abonnement étudiant</h3>
                        <Pg text='Essai gratuit de 30 jours' />
                    </div>
                </div>
                <div className="flex my-4">
                    <SectionTitle text="3.99€" />
                    <span className="text-gray-dark self-end">/mois</span>
                </div>
                <div className="h-[1px] w-full bg-gray-dark m-auto"></div>
                <ul className="my-6">
                    <li className="flex items-center"><Icon name="done" /><p className="ml-4">Publier un portfolio</p></li>
                    <li className="flex items-center"><Icon name="done" /><p className="ml-4">Accès direct aux recruteurs</p></li>
                    <li className="flex items-center"><Icon name="done" /><p className="ml-4">Postuler directement aux offres</p></li>
                    <li className="flex items-center"><Icon name="done" /><p className="ml-4">Accompagnement personnalisé</p></li>
                    <li className="flex items-center"><Icon name="done" /><p className="ml-4">Mise en avant du profil</p></li>
                </ul>
                <ButtonBlack text="Choisir la formule" icon={<Icon name="flecheButton" />}/>
            </div>
            <div className="bg-white text-black w-1/3 rounded-[2rem] px-8 py-11">
                <div className="flex items-center">
                    <Icon name="abonnementPack" />
                    <div className="ml-4">
                        <h3 className="font-Jakarta-extra-bold text-base sm:text-lg md:text-xl lg:text-subtitle">Abonnement pack</h3>
                        <Pg text='Entreprise et école' />
                    </div>
                </div>
                <SectionTitle text="Pack spécial" style="my-4" />
                <div className="h-[1px] w-full bg-gray-dark m-auto"></div>
                <p className="mr-4 mt-6">
                    Un abonnement spécial est proposé aux entreprises et aux écoles souhaitant abonner leurs étudiants et membres. 
                    <br></br> Un pack complet vous sera proposé.
                </p>
                <p className="mr-4 my-6">Pour plus d’information, contactez nous sur <strong>abonnement@hive2work.fr</strong></p>
                <ButtonBlack text="Choisir la formule" icon={<Icon name="flecheButton" />}/>
            </div>
        </div>
       </>
    );
}

export default Abonnements