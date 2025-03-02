import LiensPagesLegales from "../components/LiensPagesLegales";
import Pg from "../components/Pg";
import Subtitle from "../components/titles/Subtitle";


const EngagementAccessibilite = () => {
    return (
        <div className=" bg-gray-background w-full px-34 pt-10 pb-20 pr-60">
            <LiensPagesLegales text="Engagements en matière d’Accessibilité" link="acc" />

            <Subtitle text="Conformité et engagement" style="mt-8 mb-6 font-Jakarta-bold" />
            <Pg style='font-Jakarta-regular mb-6' text='Hive 2 Work s’engage à rendre la plateforme accessible à tous, y compris aux personnes en situation de handicap, en appliquant les standards internationaux d’accessibilité numérique. La plateforme veille à l’adaptation de son interface pour offrir une navigation simplifiée et intuitive aux utilisateurs, quelle que soit leur situation.' />

            <Subtitle text="Normes suivies" style="mb-6 font-Jakarta-bold" />
            <Pg style='font-Jakarta-regular mb-6' text='La plateforme respecte les normes RGAA (Référentiel Général d’Amélioration de l’Accessibilité) et les recommandations du W3C (WCAG 2.1) pour garantir une expérience utilisateur inclusive. Hive 2 Work s’engage à une mise en conformité continue pour répondre aux besoins des personnes ayant des handicaps visuels, auditifs ou moteurs.' />
        
            <Subtitle text="Fonctionnalités d’accessibilité" style="mb-6 font-Jakarta-bold" />
            <ol>
                <li>- Compatibilité avec les lecteurs d’écran (NVDA, JAWS, VoiceOver, TalkBack).</li>
                <li>- Navigation au clavier sans souris pour les personnes à mobilité réduite.</li>
                <li>- Contraste ajustable et mode haute visibilité pour les déficients visuels.</li>
                <li>- Sous-titrage et transcription des vidéos pour les personnes sourdes ou malentendantes.</li>
                <li>- Personnalisation de l’affichage pour améliorer le confort visuel.</li>
            </ol>

            <Subtitle text="Assistance et contact" style="mb-6 mt-8 font-Jakarta-bold" />
            <Pg style='font-Jakarta-regular mb-6' text='Un support technique dédié est disponible pour accompagner les utilisateurs ayant des besoins spécifiques via (Adresse e-mail support). Hive 2 Work s’engage à traiter les demandes d’accessibilité dans un délai raisonnable et à améliorer continuellement ses services.' />
        </div>
    );
}
    
export default EngagementAccessibilite;