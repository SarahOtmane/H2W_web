import Icon from "../../utils/Icon"
import ButtonBlack from "../buttons/ButtonBlack"
import CardCandidature from "./CardCandidature";

import ca from '../../assets/images/student/candidatures/ca.png'

const HistoriqueCandidature = () => {
    const candidatures = [
        {
            id: 1,
            statut: "envoyé",
            poste: "Développeur Frontend",
            time: "2 jours",
            image: ca,
            entreprise : "Crédit Agricole",
        },
        {
            id: 2,
            statut: "en attente",
            poste: "Développeur Backend",
            time: "1 semaine",
            image: ca,
            entreprise : "Crédit Agricole",
        },
        {
            id: 3,
            statut: "refusé",
            poste: "Designer UI/UX",
            time: "3 jours",
            image: ca,
            entreprise : "Crédit Agricole",
        },
        {
            id: 4,
            statut: "accepté",
            poste: "Chef de projet",
            time: "1 mois",
            image: ca,
            entreprise : "Crédit Agricole",
        },
        {
            id: 5,
            statut: "envoyé",
            poste: "Développeur Frontend",
            time: "2 jours",
            image: ca,
            entreprise : "Crédit Agricole",
        },
        {
            id: 6,
            statut: "accepté",
            poste: "Développeur Backend",
            time: "1 semaine",
            image: ca,
            entreprise : "Crédit Agricole",
        },
        {
            id: 7,
            statut: "en attente",
            poste: "Designer UI/UX",
            time: "3 jours",
            image: ca,
            entreprise : "Crédit Agricole",
        },
        {
            id: 8,
            statut: "refusé",
            poste: "Chef de projet",
            time: "1 mois",
            image: ca,
            entreprise : "Crédit Agricole",
        },
    ];
    return(
        <div className="bg-custom-black pl-8 pt-6 pb-12 rounded-[1rem] mt-10  mx-4 md:mx-38">
            <h2 className="font-Jakarta-bold text-[36px] text-white mb-10">Historique de mes candidatures</h2>
            <div className="flex w-full overflow-x-auto flex-nowrap space-x-[1rem] pb-4 pr-8 scroll-smooth mt-12">
            {candidatures.map((candidature) => (
                <CardCandidature
                    key={candidature.id}
                    statut={candidature.statut}
                    poste={candidature.poste}
                    time={candidature.time}
                    image={candidature.image}
                    entreprise={candidature.entreprise}
                />
            ))}
            </div>
            <ButtonBlack text="Voir toutes mes candidatures" icon={<Icon name="flecheButton" />} style='border-white' />

        </div>
    )
}

export default HistoriqueCandidature