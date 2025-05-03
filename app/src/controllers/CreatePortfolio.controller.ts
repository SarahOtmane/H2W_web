


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
    // 
    ]

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


    const maxChars = 350;

    return({
        etapes,
        metiers,
        maxChars,
    })
}

export default CreatePortfolioController;