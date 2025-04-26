import { useState } from "react";

import { Experience, Portfolio } from "../types/Portfolio.types";


const CreatePortfolioController = () =>{
    const etapes = [{
        num: 1,
        title: "Faites une biographie",
    },
    {
        num: 2,
        title: "Ajoutez vos compétences",
    },
    {
        num: 3,
        title: "Ajoutez vos expériences",
    },
    {
        num: 4,
        title: "Ajoutez vos projets",
    },
    {
        num: 5,
        title: "Choisissez une template",
    }]

    const [etape, setEtape] = useState<number>(1);

    const [portfolio, setPortfolio] = useState<Portfolio>({
        title: "",
        description: "",
        metier: "",
        hardSkills: [],
        softSkills: [],
        softwares: [],
        experiences: [],
    });

    const [experience, setExperience] = useState<Experience>({
        title: "",
        companyName: "",
        description: "",
        teleworking: false,
        startDate: "",
        endDate: "",
        location: "",
        stillWorking: false,
        missions: [],
    })

    const metiers = [
        'Développeur web',
        'Développeur front-end',
        'Développeur back-end',
        'Développeur full-stack',
        'Designer UI/UX',
        'Graphiste',
        'Intégrateur web',
        'Chef de projet web',
        'Community manager',
        'Analyste SOC',
        'Développeur mobile',
        'Développeur d\'applications',
        'Développeur de jeux vidéo',
        'Développeur de logiciels',
    ]
    const hardSkills = [
        'Design graphique',
        'HTML',
        'CSS',
        'UI/UX',
        'React',
        'Node.js',
        'JavaScript',
        'TypeScript',
        'PHP',
        'Python',
        'Java',
        'C++',
    ];
    const softwares = [
        'Photoshop',
        'Figma',
        'Illustrator',
        'WordPress',
        'Adobe XD',
        'Sketch',
        'InVision',
        'After Effects',
        'Premiere Pro',
        'Postman',
        'Visual Studio Code',
        'Sublime Text',
        'Docker'
    ];
    const softSkills = [
        'Communication claire',
        'Travail d\'équipe',
        'Résolution de problèmes',
        'Gestion du temps',
        'Créativité',
        'Adaptabilité',
        'Esprit critique',
        'Gestion du stress',
        'Leadership',
        'Empathie',
        'Prise de décision',
    ];

    const updateHardSkills = (skills: string[]) => {
        setPortfolio(prev => ({ ...prev, hardSkills: skills }));
    };
    
    const updateSoftSkills = (skills: string[]) => {
        setPortfolio(prev => ({ ...prev, softSkills: skills }));
    };
    
    const updateSoftwares = (softwares: string[]) => {
        setPortfolio(prev => ({ ...prev, softwares: softwares }));
    };

    const updateMetiers = (metier: string) => {
        setPortfolio(prev => ({ ...prev, metier: metier }));
    }


    const maxChars = 350;

    const handleChangePortfolio = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        if (value.length <= maxChars) {
            setPortfolio({ ...portfolio, description: value });
        }
    };

    const handleChangeExperienceCheckbox = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
        const { checked } = e.target;
        if(name === "stillWorking") {
            setExperience({ ...experience, stillWorking: checked });
        } else if(name === "teleworking") {
            setExperience({ ...experience, teleworking: checked });
        }
    }

    const handleAddExperienceInPortfolio = () => {
        setPortfolio({
            ...portfolio,
            experiences: [...portfolio.experiences, experience]
        });
        setExperience({
            title: "",
            companyName: "",
            description: "",
            teleworking: false,
            startDate: "",
            endDate: "",
            location: "",
            stillWorking: false,
            missions: [],
        })
    }

    return({
        etapes,
        portfolio,
        setPortfolio,
        hardSkills,
        softSkills,
        softwares,
        metiers,
        updateHardSkills,
        updateSoftSkills,
        updateSoftwares,
        updateMetiers,
        handleChangePortfolio,
        maxChars,
        etape,
        setEtape,
        experience,
        setExperience,
        handleChangeExperienceCheckbox,
        handleAddExperienceInPortfolio,
    })
}

export default CreatePortfolioController;