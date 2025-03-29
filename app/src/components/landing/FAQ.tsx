import Accordion from "./Accordion";

type FAQItem = {
    question: string;
    answer: string;
};

const faqData: FAQItem[] = [
    {
        question: "Comment créer mon portfolio interactif ?",
        answer:
          "Pour créer votre portfolio interactif, il vous suffit de vous inscrire sur notre plateforme, de choisir un template, puis d’ajouter vos projets, compétences et expériences en quelques clics. L’interface est simple et intuitive, idéale pour personnaliser votre profil rapidement.",
    },
    {
        question: "Puis-je personnaliser l'apparence de mon portfolio ?",
        answer:
          "Oui, vous pouvez entièrement personnaliser l’apparence de votre portfolio en choisissant des couleurs, des polices et en ajoutant des éléments visuels pour qu’il reflète parfaitement votre style et vos compétences.",
    },
    {
        question: "L'abonnement inclut-il un essai gratuit ?",
        answer:
          "Oui, chaque nouvel utilisateur bénéficie d’un essai gratuit de 30 jours pour explorer toutes les fonctionnalités de la plateforme avant de souscrire à un abonnement.",
    },
    {
        question: "Comment puis-je mettre en avant mes projets dans mon portfolio ?",
        answer:
          "Vous pouvez ajouter vos projets sous forme de galeries, vidéos, ou liens. Pour chaque projet, vous pourrez décrire votre rôle, les outils utilisés, et les résultats obtenus, afin de donner un aperçu détaillé de votre travail.",
    },
    {
        question: "Est-ce que mon portfolio est visible par les recruteurs dès la création ?",
        answer:
          "Oui, dès que vous avez créé et publié votre portfolio, il devient visible par les recruteurs sur la plateforme.Vous pouvez également partager un lien direct pour qu'ils puissent le consulter facilement.",
    },
];

const FAQ = () => {

    return (
        <div id="faq">
            <div className="bg-white text-black w-full flex rounded-[2rem] relative pt-12 pb-4 md:py-12 items-center mb-4 mt-24">
                <p className="top-[10%] left-[24%] md:ml-[40%] px-10 py-3 border border-gray-dark rounded-[2rem] absolute">
                    Questions fréquentes
                </p>
                <h2 className="font-Jakarta-extra-bold text-[48px] w-[80%] md:w-[55%] m-auto mt-[2rem] text-center">
                    Vous vous posez sûrement une de ces{" "}
                    <span className="bg-gradient-to-r from-custom-orange to-lilas text-transparent bg-clip-text">
                        questions
                    </span>
                </h2>
            </div>

            <Accordion faqData={faqData} />

        </div>
    );
};

export default FAQ;
