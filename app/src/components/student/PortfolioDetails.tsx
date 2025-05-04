import React, { useState } from "react";
import { Avis, PortfolioWithBase64 } from "../../types/Portfolio.types";
import Icon from "../../utils/Icon";
import ButtonWhite from "../buttons/ButtonWhite";

import cover1 from '../../assets/images/student/portfolio_cover1.svg';
import cover2 from '../../assets/images/student/portfolio_cover2.svg';
import cover3 from '../../assets/images/student/portfolio_cover3.svg'
import AccordionExperience from "./AccordionExperience";
import ButtonBlack from "../buttons/ButtonBlack";
import ProjectDetail from "./ProjectDetail";

interface PortfolioDetailsProps {
    portfolio: PortfolioWithBase64;
    partage: boolean;
}


const PortfolioDetails : React.FC<PortfolioDetailsProps> = ({portfolio, partage}) => {

    const avis : Avis[] = [{
        id: 1,
        person: "Laura Martin",
        lienEtudiant: "Tutrice chez Lumina",
        profession: "Directrice artistique chez Lumina",
        description: "Emma a été un atout précieux pour notre agence. Créative, proactive et toujours à l’écoute, elle a su s’intégrer parfaitement à l’équipe et apporter des idées innovantes pour nos projets clients. Ses designs ont souvent dépassé nos attentes, et sa maîtrise des outils créatifs est remarquable. ",
        rate:5
    },
    {
        id: 2,
        person: "Michel Dupont",
        lienEtudiant: "Professeur de Emma en Master Direction Artistique",
        profession: "Professeur de Design Graphique",
        description: "Emma est une étudiante talentueuse, avec une créativité remarquable et une excellente maîtrise technique. Toutefois, elle pourrait encore gagner en confiance pour défendre ses idées lors de présentations.  Avec un peu plus d’audace, elle deviendra une professionnelle accomplie.",
        rate: 4
    },{
        id: 2,
        person: "Sophie Lebrun",
        lienEtudiant: "Collaboration en freelance",
        profession: "Designer freelance",
        description: "Travailler avec Emma sur un projet freelance a été une expérience fluide et enrichissante. Son sens du détail et sa vision esthétique sont impressionnants. Elle comprend rapidement les attentes et y répond avec des solutions adaptées et inspirantes. ",
        rate: 5
    }]

    const [btnSelected, setBtnSelected] = useState('Compétences');

    const selectBtn = (e: React.MouseEvent<HTMLButtonElement>) => { 
        setBtnSelected(e.currentTarget.id);  
    };

    const renderStars = (nb: number) => {
        const stars = [];
      
        for (let i = 0; i < nb; i++) {
          stars.push(<Icon key={`color-${i}`} name="starColor" />);
        }
      
        for (let i = 0; i < 5 - nb; i++) {
          stars.push(<Icon key={`gray-${i}`} name="starGris" />);
        }
        return stars;
    };

    const [open, setOpen] = useState(false);

    const boutonToSelect =[{
        id: 'Compétences',
        title: 'Compétences'
    },
    {
        id: 'Expériences',
        title: 'Expériences'
    },
    {
        id: 'Formations',
        title: 'Formations'
    }]

    const formations = [{
        startedDate: 'Septembre 2020',
        endDate: 'Juin 2023',
        title: 'Master Direction Artistique',
        school: 'Ecole de Design Nantes Atlantique',
        description: 'Formation axée sur le design graphique, la direction artistique et la création de contenu visuel. Projets pratiques en collaboration avec des entreprises locales.',
    }, {
        startedDate: 'Septembre 2018',
        endDate: 'Juin 2020',
        title: 'Bachelor Design Graphique',
        school: 'Ecole de Design Nantes Atlantique',
        description: 'Formation en design graphique, incluant des cours sur la typographie, la mise en page et l’identité visuelle. Projets en équipe pour des clients réels.',
    }]
    
    const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

    const handleSkillClick = (skill: string) => {
        setSelectedSkill(prev => (prev === skill ? null : skill));
    };

    const filteredProjects = selectedSkill
        ? portfolio.projects.filter(project =>
            project.hardSkills.includes(selectedSkill) ||
            project.softSkills.includes(selectedSkill) ||
            project.softwares.includes(selectedSkill)
        )
        : portfolio.projects;


    return(
        <div className="mx-4 md:px-36 mt-8 ">
            <div className="flex bg-white rounded-[2rem] py-12 px-20 mt-4 items-start w-full">
                <article className="mr-10 w-[21%] items-center flex flex-col">
                    <Icon name="avatarProfil" />
                    <p className="uppercase font-Jakarta-bold text-[26px] mt-3">mélina dupont</p>
                    <p className="font-Jakarta-regular text-[16px]">23 ans</p>
                    <div className="flex flex-row mt-2">
                        {renderStars(4)}
                    </div>
                    {partage ? <ButtonWhite text="Partager ce profil" icon={<Icon name="flecheButtonViolet" />} style="mt-10" /> : null}
                </article>
                <article className="mx-10 w-[77%]">
                    <h1 className="font-Jakarta-bold text-[32px] mt-6" >Je postule pour être</h1>
                    <p className="bg-custom-orange text-white w-max font-Jakarta-bold text-[24px] px-8 py-4 rounded-[3rem] mt-4 ">{portfolio.metier}</p>
                    <p className="mt-9">{portfolio.description}</p>
                </article>
                <button className="ml-10 w-[2%] cursor-pointer ">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.2094 3.07642H10.9571C5.32647 3.07642 3.07422 5.32867 3.07422 10.9593V17.7161C3.07422 23.3467 5.32647 25.5989 10.9571 25.5989H17.7139C23.3445 25.5989 25.5967 23.3467 25.5967 17.7161V15.4638" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M18.8868 4.22502L10.0129 13.0989C9.67506 13.4367 9.33723 14.1011 9.26966 14.5854L8.78542 17.975C8.60524 19.2025 9.47236 20.0584 10.6998 19.8894L14.0895 19.4052C14.5625 19.3376 15.2269 18.9998 15.576 18.662L24.4498 9.78808C25.9814 8.25655 26.7021 6.47727 24.4498 4.22502C22.1976 1.97277 20.4183 2.69349 18.8868 4.22502Z" stroke="#111111" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17.6172 5.49756C18.3717 8.189 20.4775 10.2949 23.1803 11.0606" stroke="#111111" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>

            <div className="flex mt-10">
                <div className="w-[50%] mr-3">
                    <div className='flex justify-between'>
                        {boutonToSelect.map((btn) => (
                            <article key={btn.id} 
                                className={`px-6 py-4 rounded-t-[2rem] ${btnSelected===btn.id ? 'bg-white' : ''} `}
                            >
                                <button 
                                    className={`uppercase px-8 py-4 ${btnSelected===btn.id ? 'bg-custom-orange' : 'bg-custom-black'} text-white rounded-[3rem] font-Jakarta-bold text-[14px] cursor-pointer`} 
                                    onClick={selectBtn} id={btn.id}
                                >
                                    {btn.title}
                                </button>
                            </article>
                        ))}
                    </div>
                    {btnSelected === 'Compétences' && (
                        <div className='bg-white rounded-b-[2rem] rounded-tr-[2rem] py-8 px-6 items-start w-full'>
                            <h3 className='uppercase font-Jakarta-bold text-[20px] border-b-1 border-[#DBDEEF] pb-2 mb-4'>Compétences techniques</h3>
                            <article className='flex flex-wrap text-[16px]'>
                                {portfolio.hardSkills.map((skill, index) => (
                                    <button 
                                        key={index} 
                                        onClick={() => handleSkillClick(skill)}
                                        className={`cursor-pointer min-w-max border-1 px-6 py-4 mr-4 mb-2 rounded-[2rem] border-[#DBDEEF] ${
                                            selectedSkill === skill ? 'bg-[#FFE1C6]' : ''
                                        }`}
                                    >
                                        {skill}
                                    </button>
                                ))}
                            </article>
                            <h3 className='uppercase font-Jakarta-bold text-[20px] border-b-1 border-[#DBDEEF] pb-2 mb-4 mt-8'>Logiciels</h3>
                            <article className='flex flex-wrap text-[16px]'>
                                {portfolio.softwares.map((skill, index) => (
                                    <button 
                                        key={index} onClick={() => handleSkillClick(skill)} 
                                        className={`cursor-pointer min-w-max border-1 px-6 py-4 mr-4 mb-2 rounded-[2rem] border-[#DBDEEF] ${
                                            selectedSkill === skill ? 'bg-[#FFE1C6]' : ''
                                        }`}                                    >
                                        #{skill}
                                    </button>
                                ))}
                            </article>
                            <h3 className='uppercase font-Jakarta-bold text-[20px] border-b-1 border-[#DBDEEF] pb-2 mb-4 mt-8'>Compétences générales</h3>
                            <article className='flex flex-wrap text-[16px]'>
                                {portfolio.softSkills.map((skill, index) => (
                                    <button 
                                        key={index} onClick={() => handleSkillClick(skill)} 
                                        className={`cursor-pointer min-w-max border-1 px-6 py-4 mr-4 mb-2 rounded-[2rem] border-[#DBDEEF] ${
                                            selectedSkill === skill ? 'bg-[#FFE1C6]' : ''
                                        }`}                                    >
                                        #{skill}
                                    </button>
                                ))}
                            </article>
                            <h3 className='uppercase font-Jakarta-bold text-[20px] border-b-1 border-[#DBDEEF] pb-2 mb-4 mt-8'>Langues</h3>
                            <article className='flex flex-wrap text-[16px]'>
                                <button className='flex cursor-pointer min-w-max border-1 px-6 py-4 mr-4 mb-2 rounded-[2rem] border-[#DBDEEF]'>
                                    <Icon name="drapeauFrancais" />
                                    <p className="ml-2">Français</p>
                                </button>
                                <button className='flex cursor-pointer min-w-max border-1 px-6 py-4 mr-4 mb-2 rounded-[2rem] border-[#DBDEEF]'>
                                    <Icon name="drapeauAnglais" />
                                    <p className="ml-2">Anglais</p>
                                </button>
                            </article>
                        </div>
                    )}

                    {btnSelected === 'Expériences' && (
                        <AccordionExperience experiences={portfolio.experiences} />
                    )}

                    {btnSelected === 'Formations' && (
                        <div className="bg-white rounded-b-[2rem] rounded-tl-[2rem] py-8 px-6 items-start w-full">
                            {formations.map((formation, index) => (
                                <div key={index} className="mb-6 flex">  
                                    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" fill="#B6A7FC" fillOpacity="0.2" stroke="#FF9B3E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 18C15.3 18 18 15.3 18 12C18 8.7 15.3 6 12 6C8.7 6 6 8.7 6 12C6 15.3 8.7 18 12 18Z" fill="#FF9B3E"/>
                                    </svg>
                                    <article className="ml-4">
                                        <h3 className="text-[20px] font-Jakarta-bold text-custom-orange mb-2 ">{formation.startedDate} {formation.endDate ? ` - ${formation.endDate}` : " - Ajoud'hui"} : {formation.title} à {formation.school} </h3>
                                        <p className="text-[16px] font-Jakarta-medium ">{formation.description}</p>
                                    </article>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="w-[50%] ml-3 mt-9">
                    <h3 className="text-center font-Jakarta-extra-bold text-[20px] uppercase">
                        {selectedSkill ? `Projet(s) lié(s) à : ${selectedSkill}` : "Mes 3 projets incontournables"}
                    </h3>

                    <div className="bg-white flex flex-col items-center justify-center rounded-[2rem] py-6 mt-4 w-full">
                        {!selectedSkill ? (
                            <>
                                <img src={cover1} alt="cover1" className="" />
                                <img src={cover2} alt="cover2" className="mt-3" />
                                <img src={cover3} alt="cover3" className="mt-3" />
                            </>
                        ) : filteredProjects.length > 0 ? (
                            filteredProjects.map((project, index) => (
                                <div key={index} className="mb-4 px-4 w-full">
                                    {project.media.length > 0 && (
                                        <>
                                            {console.log(project.media)}
                                            <img
                                            src={project.media[0]}
                                            alt={`cover-${index}`}
                                            className="w-full object-cover rounded-lg"
                                            />
                                        </>
                                    )}
                                    <h4 className="font-Jakarta-bold text-[24px] text-custom-orange text-center my-8">{project.name}</h4>
                                    <div className="flex justify-center">
                                        <ButtonBlack text="fermer" handleClick={() => setSelectedSkill(null)} style="w-[9rem] mr-3" />
                                        <ButtonWhite text="Voir le projet" icon={<Icon name="flecheButton" />} handleClick={() => setOpen(true) } />
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-400 text-center">Aucun projet lié à cette compétence.</p>
                        )}
                        {open && <ProjectDetail setOpen={setOpen} />}
                    </div>
                </div>
            </div>

            <div className="bg-custom-black text-white rounded-[2rem] py-12 px-10 mt-10 items-start w-full">
                <p className="uppercase text-center font-Jakarta-extra-bold text-[20px] "> Ils parlent d'emma</p>
                <div className="flex justify-between">
                    { avis.map((avis) => (
                        <div key={avis.id} className="flex flex-col w-[32%] mx-4 mt-10 bg-white text-black rounded-[2rem] p-8 h-max">
                            <div className="flex items-center">
                                {renderStars(avis.rate)}
                            </div>
                            <p className="font-Jakarta-bold text-[20px] my-4">{avis.lienEtudiant}</p>
                            <p className="font-Jakarta-regular text-[16px]">&laquo; {avis.description} &raquo;</p>
                            <p className="font-Jakarta-regular text-[16px] mt-4"><span className="font-Jakarta-semi-bold">&mdash; {avis.person}</span>, <span className="italic">{avis.profession}</span> </p>
                        </div>
                    ))}
                </div>
                <button className={`flex items-center justify-center m-auto mt-10 px-5 py-3 cursor-pointer border-gray-border border-1  text-white rounded-[2rem] hover:text-white hover:bg-black hover:border-black`}>
                    <Icon name="flecheButton" />
                    <span>&nbsp;</span>
                    <p className={`ml-1.5`}>Voir plus d'avis</p>
                </button>
            </div>
        </div>
    )
}

export default PortfolioDetails;