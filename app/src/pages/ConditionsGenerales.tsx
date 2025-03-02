import LiensPagesLegales from "../components/LiensPagesLegales";
import Pg from "../components/Pg";
import Subtitle from "../components/titles/Subtitle";


const ConditionsGenerales = () => {
    return (
        <div className=" bg-gray-background w-full px-34 pt-10 pb-20 pr-60">
            <LiensPagesLegales text="Conditions Générales" link="cgu" />

            <Subtitle text="Objet" style="mt-8 mb-6 font-Jakarta-bold" />
            <Pg style='font-Jakarta-regular mb-6' text="Les présentes Conditions Générales de Vente (CGV) ont pour objet de définir les modalités et conditions dans lesquelles les entreprises clientes peuvent souscrire aux services proposés par Hive 2 Work." />
            <Pg style='font-Jakarta-regular mb-6' text="Hive 2 Work met à disposition des entreprises des outils de recherche avancée, de filtrage des candidatures et d’analyse de profils pour optimiser leur processus de recrutement. La plateforme s’adapte aux besoins de chaque utilisateur en proposant une interface ergonomique et intuitive, avec une gestion simplifiée des offres et des candidatures." />


            <Subtitle text="Services proposés" style="mb-6 font-Jakarta-bold" />
            <Pg style='font-Jakarta-regular mb-6' text="Hive 2 Work met à disposition des entreprises et des candidats une gamme complète de services permettant d’améliorer l’expérience de recrutement et de maximiser les chances de succès :" />
            <ol>
                <li>- Accès à une base de profils qualifiés avec des informations détaillées sur les compétences, les expériences et les objectifs professionnels des candidats.</li>
                <li>- Publication d’offres d’alternance et de stages avec des filtres avancés pour un ciblage précis des profils.</li>
                <li>- Matching intelligent basé sur des algorithmes d’intelligence artificielle permettant d’associer les entreprises avec les candidats les plus pertinents.</li>
                <li>- Messagerie interne facilitant la communication entre recruteurs et candidats.</li>
                <li>- Accompagnement sur-mesure pour les étudiants, incluant coaching, préparation aux entretiens et optimisation des candidatures.</li>
                <li>- Options premium comme la mise en avant des entreprises, des outils analytiques avancés et des formations spécifiques pour les recruteurs.</li>
            </ol>

            <Subtitle text="Modalités d’abonnement et de paiement" style="mb-6 mt-8 font-Jakarta-bold" />
            <ol>
                <li>- Accès gratuit aux étudiants avec possibilité de souscrire à des services complémentaires.</li>
                <li>- Abonnement mensuel pour les entreprises, donnant accès aux fonctionnalités avancées de la plateforme.</li>
                <li>- Paiement en ligne sécurisé via divers moyens (carte bancaire, PayPal, virement bancaire pour les entreprises).</li>
                <li>- Essai gratuit sous certaines conditions pour permettre aux entreprises de tester la plateforme avant engagement.</li>
                <li>- Renouvellement automatique des abonnements, sauf résiliation expresse de l’utilisateur.</li>
            </ol>

            <Subtitle text="Réalisation et annulation" style="mb-6 mt-8 font-Jakarta-bold" />
            <ol>
                <li>- Possibilité pour les entreprises et les étudiants de résilier leur abonnement à tout moment via leur espace personnel.</li>
                <li>- Aucune pénalité en cas de résiliation, l’abonnement restant actif jusqu’à la fin de la période déjà payée.</li>
                <li>- Droit de rétractation applicable selon les conditions légales en vigueur.</li>
            </ol>
        </div>
    );
}
    
export default ConditionsGenerales;