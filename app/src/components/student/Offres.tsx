
import caisse from '../../assets/images/student/caisse.png';
import oreal from '../../assets/images/student/oreal.png';
import hive2work from '../../assets/images/student/hive2work.png';

import ButtonWhite from '../buttons/ButtonWhite';
import Icon from '../../utils/Icon';

const Offres = () => {
    const tabsAlternances = [{
        pic : caisse,
        title : 'Chef de projet',
        content : 'Bac +3 minimum dans le domaine de la gestion de projet...',
        link : '/'
    },{
        pic : oreal,
        title : 'Alternance - Communication',
        content : 'Diplômé d’un bac +3 en communication. Disponible à partir de septembre 2025....',
        link : '/'
    },{
        pic : hive2work,
        title : 'Alternance - Comptable',
        content : 'Diplômé d’un bac +3 en finance. Disponible à partir d’octobre 2025....',
        link : '/'
    },{
        pic : caisse,
        title : 'Chef de projet',
        content : 'Bac +3 minimum dans le domaine de la gestion de projet...',
        link : '/'
    },{
        pic : oreal,
        title : 'Alternance - Communication',
        content : 'Diplômé d’un bac +3 en communication. Disponible à partir de septembre 2025....',
        link : '/'
    },{
        pic : hive2work,
        title : 'Alternance - Comptable',
        content : 'Diplômé d’un bac +3 en finance. Disponible à partir d’octobre 2025....',
        link : '/'
    }]

    return(
        <div className="bg-white rounded-[1rem] w-full py-8 pl-8 mb-10 mt-10">
            <div className="flex justify-between items-center mb-4">
                <h1 className="font-Jakarta-extra-bold text-[36px] ">Offres recommandées</h1>
                <figure className="flex items-center mr-8">
                    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-4">
                        <rect width="52" height="52" rx="26" transform="matrix(-1 0 0 1 52 0)" fill="#C9C9C9"/>
                        <path d="M32.9994 26.5L18.0006 26.5" stroke="white" stroke-width="1.52853" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M24.0938 20.4075L18.0005 26.5012L24.0938 32.595" stroke="white" stroke-width="1.52853" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="52" height="52" rx="26" fill="#FF9B3E"/>
                        <path d="M19.0006 26.5L33.9994 26.5" stroke="white" stroke-width="1.52853" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M27.9062 20.4075L33.9995 26.5012L27.9062 32.595" stroke="white" stroke-width="1.52853" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </figure>
            </div>
            <div className="flex w-full overflow-x-auto flex-nowrap space-x-[2rem] pb-4">
                {tabsAlternances.map((tab, index) => (
                    <div
                        key={index}
                        className="min-w-1/3 w-1/3 flex-shrink-0 bg-white rounded-[1.5rem] border-1 border-[#DBDEEF] "
                    >
                        <img src={tab.pic} className="w-full rounded-t-[1.5rem] h-[20rem]" />
                        <article className="p-4">
                            <h3 className="font-Jakarta-bold text-[17px] mb-2">{tab.title}</h3>
                            <p className="font-Jakarta-regular text-[17px] mb-4">{tab.content}</p>
                            <ButtonWhite text="Voir l'offre" icon={<Icon name="flecheButton" />} style="mb-4 mt-8" />
                        </article>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Offres;