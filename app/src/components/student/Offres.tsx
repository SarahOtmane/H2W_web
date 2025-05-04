import { useRef, useState, useEffect } from 'react';
import caisse from '../../assets/images/student/caisse.png';
import oreal from '../../assets/images/student/oreal.png';
import hive2work from '../../assets/images/student/hive2work.png';
import ButtonWhite from '../buttons/ButtonWhite';
import Icon from '../../utils/Icon';

const Offres = () => {
    const tabsAlternances = [
    {
        pic: caisse,
        title: 'Chef de projet',
        content: 'Bac +3 minimum dans le domaine de la gestion de projet...',
        link: '/',
    },
    {
        pic: oreal,
        title: 'Alternance - Communication',
        content: 'Diplômé d’un bac +3 en communication. Disponible à partir de septembre 2025....',
        link: '/',
    },
    {
        pic: hive2work,
        title: 'Alternance - Comptable',
        content: 'Diplômé d’un bac +3 en finance. Disponible à partir d’octobre 2025....',
        link: '/',
    },
    {
        pic: caisse,
        title: 'Chef de projet',
        content: 'Bac +3 minimum dans le domaine de la gestion de projet...',
        link: '/',
    },
    {
        pic: oreal,
        title: 'Alternance - Communication',
        content: 'Diplômé d’un bac +3 en communication. Disponible à partir de septembre 2025....',
        link: '/',
    },
    {
        pic: hive2work,
        title: 'Alternance - Comptable',
        content: 'Diplômé d’un bac +3 en finance. Disponible à partir d’octobre 2025....',
        link: '/',
    },
    ];

    const containerRef = useRef<HTMLDivElement | null>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        const el = containerRef.current;
        if (!el) return;
        setCanScrollLeft(el.scrollLeft > 0);
        setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
    };

    const scrollBy = (offset: number) => {
        containerRef.current?.scrollBy({
            left: offset,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        checkScroll(); 

        el.addEventListener('scroll', checkScroll);
        window.addEventListener('resize', checkScroll); 

        return () => {
            el.removeEventListener('scroll', checkScroll);
            window.removeEventListener('resize', checkScroll); 
        };
    }, []);

    return (
        <div className="bg-white rounded-[1rem] py-8 pl-8 mb-10 mt-10   mx-4 md:mx-38">
            <div className="flex justify-between items-center mb-4 pr-8">
                <h1 className="font-Jakarta-extra-bold text-[36px]">Offres recommandées</h1>
                <div className="flex items-center space-x-4">
                    <button onClick={() => scrollBy(-300)} disabled={!canScrollLeft} className='cursor-pointer' >
                        <svg
                            width="52"
                            height="52"
                            viewBox="0 0 52 52"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                width="52"
                                height="52"
                                rx="26"
                                transform="matrix(-1 0 0 1 52 0)"
                                fill={canScrollLeft ? '#FF9B3E' : '#C9C9C9'}
                            />
                            <path
                                d="M32.9994 26.5H18.0006"
                                stroke="white"
                                strokeWidth="1.53"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M24.0938 20.4075L18.0005 26.5012L24.0938 32.595"
                                stroke="white"
                                strokeWidth="1.53"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>

                    <button onClick={() => scrollBy(300)} disabled={!canScrollRight} className='cursor-pointer'>
                        <svg
                            width="52"
                            height="52"
                            viewBox="0 0 52 52"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                width="52"
                                height="52"
                                rx="26"
                                fill={canScrollRight ? '#FF9B3E' : '#C9C9C9'}
                            />
                            <path
                                d="M19.0006 26.5H33.9994"
                                stroke="white"
                                strokeWidth="1.53"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M27.9062 20.4075L33.9995 26.5012L27.9062 32.595"
                                stroke="white"
                                strokeWidth="1.53"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            <div
                ref={containerRef}
                className="flex w-full overflow-x-auto flex-nowrap space-x-[2rem] pb-4 pr-8 scroll-smooth mt-12"
            >
                {tabsAlternances.map((tab, index) => (
                    <div
                        key={index}
                        className="min-w-1/3 max-w-1/3 flex-shrink-0 bg-white rounded-[1.5rem] border border-gray-border"
                    >
                        <img src={tab.pic} className="w-full rounded-t-[1.5rem] h-[350px] object-cover" />
                        <article className="p-4">
                            <h3 className="font-Jakarta-bold text-[17px] mb-2">{tab.title}</h3>
                            <p className="font-Jakarta-regular text-[17px] mb-4">{tab.content}</p>
                            <ButtonWhite text="Voir l'offre" icon={<Icon name="flecheButton" />} style="mb-4 mt-8" />
                        </article>
                    </div>
                ))}
            </div>
        </div>
    );  
};

export default Offres;
