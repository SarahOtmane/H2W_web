import LiensPagesLegales from "../components/LiensPagesLegales";
import Pg from "../components/Pg";
import Subtitle from "../components/titles/Subtitle";


const PolitiqueConfidentialite = () => {
    return (
        <div className=" bg-gray-background w-full px-34 pt-10 pb-20">
            <LiensPagesLegales text="Politique de Confidentialité et RGPD" link="plc" />

            <Subtitle text="Introduction" style="mt-8 mb-6 font-Jakarta-bold" />
            <Pg style='font-Jakarta-regular mb-6' text="La Politique de Confidentialité détaille les pratiques de Hive 2 Work concernant la collecte, l’utilisation et la protection des données personnelles des utilisateurs, en conformité avec le Règlement Général sur la Protection des Données (RGPD)." />

            <Subtitle text="Données collectées" style="mb-6 font-Jakarta-bold" />
            <Pg style='font-Jakarta-regular mb-6' text="Hive 2 Work collecte plusieurs types de données personnelles nécessaires au bon fonctionnement de la plateforme :" />
            <ol>
                <li>- Informations d’identification (nom, prénom, adresse email, numéro de téléphone).</li>
                <li>- Informations professionnelles (expériences, compétences, objectifs).</li>
                <li>- Informations de connexion (adresse IP, cookies, données de navigation).</li>
                <li>- Informations de paiement (moyen de paiement, historique des transactions).</li>
            </ol>

            <Subtitle text="Finalités de la collecte" style="mt-8 mb-6 font-Jakarta-bold" />
            <ol>
                <li>- Faciliter la mise en relation entre recruteurs et candidats.</li>
                <li>- Personnaliser l’expérience utilisateur avec des recommandations adaptées.</li>
                <li>- Garantir la sécurité des données et prévenir tout usage frauduleux.</li>
                <li>- Respecter les obligations légales en matière de protection des données.</li>
            </ol>

            <Subtitle text="Conservation des données" style="mt-8 mb-6 font-Jakarta-bold" />
            <ol>
                <li>- Les comptes inactifs sont supprimés après (X années.)</li>
                <li>- Les données des utilisateurs sont conservées tant que le compte est actif, puis jusqu’à (X mois) après sa désactivation</li>
            </ol>

            <Subtitle text="Droits des utilisateurs" style="mt-8 mb-6 font-Jakarta-bold" />
            <Pg style='font-Jakarta-regular mb-6' text="Conformément au RGPD, chaque utilisateur dispose des droits suivants :" />
            <ol>
                <li>- Droit d’accès : consulter ses données personnelles..</li>
                <li>- Droit de rectification : demander la correction d’informations inexactes.</li>
                <li>- Droit à l’effacement : demander la suppression définitive de ses données.</li>
                <li>- Droit à la portabilité : récupérer ses données sous un format structuré.</li>
                <li>- Droit d’opposition : s’opposer à certains traitements de données.</li>
            </ol>
            <Pg style='font-Jakarta-regular mb-8 mt-4' text="Les demandes d’exercice des droits doivent être adressées à (Adresse @ de contact)." />

            <Subtitle text="Sécurité des données" style="mb-6 font-Jakarta-bold" />
            <Pg style='font-Jakarta-regular mb-8' text="Hive 2 Work applique des mesures de sécurité avancées, telles que le chiffrement des données et la protection contre les accès non autorisés." />

            <Subtitle text="Modifications de la politique de confidentialité" style="mb-6 font-Jakarta-bold" />
            <Pg style='font-Jakarta-regular mb-6' text="Hive 2 Work se réserve le droit de modifier cette politique. Les utilisateurs seront notifiés (X jours) avant l’entrée en vigueur." />
        </div>
    );
}
    
export default PolitiqueConfidentialite;