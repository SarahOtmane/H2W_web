import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ButtonBlack from "../components/buttons/ButtonBlack";
import SectionAlternance from "../components/home/SectionAlternance";
import CvInteractif from "../components/landing/CvInteractif";
import FAQ from "../components/landing/FAQ";
import Fonctionnement from "../components/landing/Fonctionnement";
import Icon from "../utils/Icon";
import back from "../assets/images/landing_newsletter.svg";
import WindowSize from '../utils/WindowSize';
import MenuBurger from '../components/landing/MenuBurger';


const LandingPage = () => {
    const size = WindowSize();
    const isMobile = size.width < 768;

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    useEffect(() => {
        const handleScroll = () => {
          setScrolled(window.scrollY > 10);
        };
      
        window.addEventListener("scroll", handleScroll);
      
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
    return (
        <>
            <header className={`fixed flex flex-row justify-between items-center px-4 py-4 md:px-16 md:py-3 lg:px-38 lg:py-8 w-full z-9999 transition-colors duration-300 ${
                scrolled ? 'bg-white shadow-md' : 'bg-transparent md:bg-gray-background'
            }`}>
                <Link to='/' className='z-99'><Icon name={isMobile ? 'logoHeaderMobile' : 'logoHeader'} /></Link>
                <ul className='md:flex md:flex-row font-Jakarta-semi-bold hidden'>
                    <li className='mr-8 md:text-[.8rem] lg:text-[1rem]'><a href='#services'>Services</a></li>
                    <li className='mr-8 md:text-[.8rem] lg:text-[1rem]'><a href='#fonctionnement'>Comment ça marche </a></li>
                    <li className='mr-8 md:text-[.8rem] lg:text-[1rem]'><a href='#faq'>FAQ</a></li>
                    <li className='mr-8 md:text-[.8rem] lg:text-[1rem]'><a href='#newsletter'>Newsletter</a></li>
                </ul>
                {isMobile && (
                    <>
                        <button className='ml-4' onClick={toggleMenu}>
                        <Icon name='burgerMenu' />
                        </button>
                        <MenuBurger isOpen={isMenuOpen} onClose={toggleMenu} />
                    </>
                )}
            </header>
            <main className=" bg-gray-background w-full px-4 md:px-38 md:pt-50 pt-10 md:pb-20 relative">
                <SectionAlternance isLanding={true} />
                <a href="#services" className='top-[75%] right-[6.5%] fixed z-9998 hidden md:block'>
                    <svg width="84" height="82" viewBox="0 0 84 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M41.5885 74.7789C60.729 74.7789 76.2454 59.5609 76.2454 40.7885C76.2454 22.0161 60.729 6.7981 41.5885 6.7981C22.448 6.7981 6.93164 22.0161 6.93164 40.7885C6.93164 59.5609 22.448 74.7789 41.5885 74.7789Z" fill="#1D1D1B" stroke="white" strokeWidth="2.71923" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M41.5884 52.685V32.2908" stroke="white" strokeWidth="4.49873" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M31.1914 39.089L41.5885 28.8918L51.9855 39.089" stroke="white" strokeWidth="4.49873" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </a>
                <a href="#services" className='top-[75%] right-[5%] fixed z-9998 md:hidden'>
                    <svg width="62" height="60" viewBox="0 0 62 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30.5879 55C44.6657 55 56.078 43.8071 56.078 30C56.078 16.1929 44.6657 5 30.5879 5C16.51 5 5.09766 16.1929 5.09766 30C5.09766 43.8071 16.51 55 30.5879 55Z" fill="#1D1D1B" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M30.5879 38.75V23.75" stroke="white" strokeWidth="3.30882" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22.9414 28.75L30.5885 21.25L38.2355 28.75" stroke="white" strokeWidth="3.30882" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </a>

                <Fonctionnement />
                <CvInteractif />
                <div className="flex flex-col md:flex-row items-center mt-20 bg-custom-black px-10 md:px-20 py-15 md:py-30 rounded-[2rem]">
                    <div className="w-full md:w-1/2 md:pr-16 text-center md:text-left">
                        <h2 className="text-[40px] font-Jakarta-extra-bold text-white">La plateforme pour les alternants que vous attendiez !</h2>
                        <p className="text-[#969696] text-[20px] font-Jakarta-medium">La plateforme qui permet de mettre en relation les entreprise et les étudiants facilement.</p>
                    </div>
                    <div className="w-full md:w-1/2 md:pl-16 mt-10 md:mt-0">
                        <div className="flex flex-row items-center">
                            <svg width="62" height="61" viewBox="0 0 62 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" width="61" height="61" rx="10.9663" fill="#2F2F2D"/>
                                <path d="M39.5433 10.2812H23.1415C21.1899 10.2812 19.3854 11.3186 18.4033 13.0051L9.67023 28.0011C8.66411 29.7288 8.67809 31.8672 9.70672 33.5815L18.3923 48.0574C19.3832 49.7089 21.168 50.7195 23.094 50.7195H39.5909C41.5169 50.7195 43.3017 49.7089 44.2926 48.0574L52.9781 33.5815C54.0068 31.8672 54.0208 29.7288 53.0146 28.0011L44.2816 13.0051C43.2995 11.3186 41.4949 10.2812 39.5433 10.2812Z" fill="#B6A7FC"/>
                            </svg>
                            <p className="text-[#969696] text-[20px] font-Jakarta-medium ml-8">100% financer par ton établissement</p>
                        </div>
                        <div className="flex flex-row items-center mt-8">
                            <svg width="62" height="61" viewBox="0 0 62 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" width="61" height="61" rx="10.9663" fill="#2F2F2D"/>
                                <path d="M39.5433 10.2812H23.1415C21.1899 10.2812 19.3854 11.3186 18.4033 13.0051L9.67023 28.0011C8.66411 29.7288 8.67809 31.8672 9.70672 33.5815L18.3923 48.0574C19.3832 49.7089 21.168 50.7195 23.094 50.7195H39.5909C41.5169 50.7195 43.3017 49.7089 44.2926 48.0574L52.9781 33.5815C54.0068 31.8672 54.0208 29.7288 53.0146 28.0011L44.2816 13.0051C43.2995 11.3186 41.4949 10.2812 39.5433 10.2812Z" fill="#FF9B3E"/>
                            </svg>
                            <p className="text-[#969696] text-[20px] font-Jakarta-medium ml-8">Créée par des étudiantes pour les étudiants</p>
                        </div>
                    </div>
                </div>
                <FAQ />
                <div className="bg-lilas rounded-[2rem] mt-20 flex justify-between px-10 md:px-20 mb-20 md:mb-0" id="newsletter">
                    <div className="w-full md:w-[60%] my-10 md:mt-20 text-center md:text-left">
                        <h3 className="font-Jakarta-extra-bold text-[32px]">Restez à jour avec Hive2Work !</h3>
                        <p className="font-Jakarta-medium text-[16px]">Soyez les premiers informés de l’avancement, des mises à jour, de la sortie officielle et des nouveautés excitantes directement dans votre boîte e-mail.</p>
                        <div className="flex flex-col md:flex-row items-center mt-8">
                            <input type="email" placeholder="Votre adresse e-mail" className="w-full md:w-[70%] px-4 font-Jakarta-regular italic text-sm sm:text-base md:text-lg lg:text-body  py-4 pl-4 rounded-[2rem] border-1 text-input-text bg-gray-background border-gray-background focus:outline-lilas"/>
                            <ButtonBlack style="ml-4 mt-4 md:mt-0" text="Je m'abonne" icon={<Icon name="flecheButton" />} />
                        </div>
                    </div>
                    <img src={back} alt='image' className='hidden md:block'/>
                </div>
            </main>
        </>
    );
}

export default LandingPage;