import { AnnoncesType } from "../types/Annonces.type";



const AnnoncesController = () =>{
    const annonces : AnnoncesType[] = [{
        id: 1,
        title: "Graphiste",
        location: " Paris (75011)",
        teleworking: "Occasionnel",
        duration: "1 à 2 ans",
        missions: ["Sous la responsabilité du responsable de la direction artistique, tu seras chargé(e) de :",
            "Créer des visuels impactants pour nos supports web et print (réseaux sociaux, présentations, campagnes emailings, etc.).",
            "Participer à la création de templates de portfolio créatifs pour nos étudiants.",
            "Décliner l'identité de la marque Hive2Work sur différents formats.",
            "Collaborer avec les équipes produit, marketing et contenu pour enrichir l’expérience visuelle de la plateforme.",
            "Réaliser des illustrations et éléments graphiques originaux."],
        profile: ["Étudiant(e) en formation design graphique, direction artistique ou communication visuelle.",
            "Maîtrise des outils Adobe Creative Suite (Photoshop, Illustrator, InDesign) et/ou Figma.",
            "Créatif(ve), curieux(se), force de proposition, avec un bon sens de l’autonomie."],
        softSkills: ["Créatif", "Curiosité"],
        hardSkills: ["UI Designer", "UX Designer", "Web Designer"],
        software: ["Figma", "Photoshop"],
        companyDescription: "Hive2Work est une plateforme innovante dédiée aux étudiants du digital souhaitant créer leur portfolio interactif et se connecter avec des recruteurs engagés. Plus qu’un outil, nous sommes une ruche créative qui accompagne les talents de demain dans leur envol professionnel. Rejoins une équipe jeune, bienveillante, et passionnée par l’impact du design dans l’univers du travail de demain.",
        companyName: "Hive2Work",
        remuneration : "1 330 € - 1 420 €",
        avantages: ["Carte restaurant", "Remboursement de transport à 70%"],
        derniereModif: " 28/04/25 à 10h14",
        nbProfilMatch : 2,
        candidats : 13,
        statut : "publie"
    }, {
        id: 2,
        title: "Développeur Frontend",
        location: "Lyon (69001)",
        teleworking: "Complet",
        duration: "6 - 12 mois",
        missions: ["Développer des applications web performantes et réactives.",
            "Collaborer avec les équipes UX/UI pour optimiser l’expérience utilisateur.",
            "Participer à la maintenance et à l’évolution de nos applications existantes."],
        profile: ["Étudiant(e) en informatique, développement web ou équivalent.",
            "Maîtrise des langages HTML, CSS, JavaScript et des frameworks modernes (React, Vue.js).",
            "Connaissance des outils de versioning (Git)."],
        softSkills: ["Autonomie", "Esprit d'équipe"],
        hardSkills: ["Développeur Frontend", "Intégrateur Web"],
        software: ["Visual Studio Code", "Git"],
        companyDescription: "Hive2Work est une plateforme innovante dédiée aux étudiants du digital souhaitant créer leur portfolio interactif et se connecter avec des recruteurs engagés. Plus qu’un outil, nous sommes une ruche créative qui accompagne les talents de demain dans leur envol professionnel. Rejoins une équipe jeune, bienveillante, et passionnée par l’impact du design dans l’univers du travail de demain.",
        companyName: "Hive2Work",
        remuneration : "1 330 € - 1 420 €",
        avantages: ["Télétravail", "Remboursement de box wifi à 70%"],
        derniereModif: " 28/04/25 à 10h14",
        nbProfilMatch : 0,
        candidats : 0,
        statut : "brouillon"
    }, {
        id: 3,
        title: "Data Analyst",
        location: "Bordeaux (33000)",
        teleworking: "Partiel",
        duration: "3 - 6 mois",
        missions: ["Analyser les données pour en extraire des insights pertinents.",
            "Créer des tableaux de bord et des rapports pour suivre les performances.",
            "Collaborer avec les équipes produit et marketing pour optimiser les stratégies."],
        profile: ["Étudiant(e) en data science, statistiques ou équivalent.",
            "Maîtrise des outils de data visualisation (Tableau, Power BI).",
            "Connaissance des langages de programmation (Python, R)."], 
        softSkills: ["Analyse", "Rigueur"],
        hardSkills: ["Data Analyst", "Data Scientist"],
        software: ["Tableau", "Python"],
        companyDescription: "Hive2Work est une plateforme innovante dédiée aux étudiants du digital souhaitant créer leur portfolio interactif et se connecter avec des recruteurs engagés. Plus qu’un outil, nous sommes une ruche créative qui accompagne les talents de demain dans leur envol professionnel. Rejoins une équipe jeune, bienveillante, et passionnée par l’impact du design dans l’univers du travail de demain.",
        companyName: "Hive2Work",
        remuneration : "1 330 € - 1 420 €",
        avantages: ["Télétravail", "Remboursement de box wifi à 70%"],
        derniereModif: " 28/04/25 à 10h14",
        nbProfilMatch : 0,
        candidats : 2,
        statut : "archive"
    }];

    const addAnnonce = (annonce: AnnoncesType) => {
        annonces.push(annonce);
    }

    const teleworkingOptions : string[] = [
        "Complet",
        "Partiel",
        "Occasionnel",
        "Pas de télétravail"
    ];

    return({
        annonces,
        addAnnonce,
        teleworkingOptions,
    })
}

export default AnnoncesController;