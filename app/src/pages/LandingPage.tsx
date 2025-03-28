import SectionAlternance from "../components/home/SectionAlternance";
import CvInteractif from "../components/landing/CvInteractif";
import FAQ from "../components/landing/FAQ";
import Fonctionnement from "../components/landing/Fonctionnement";


const LandingPage = () => {
    return (
        <div className=" bg-gray-background w-full px-4 md:px-38 md:pt-10 md:pb-20">
            <SectionAlternance />
            <Fonctionnement />
            <CvInteractif />
            <div className="flex flex-row items-center mt-20 bg-custom-black px-20 py-30 rounded-[2rem]">
                <div className="w-1/2 pr-16">
                    <h2 className="text-[40px] font-Jakarta-extra-bold text-white">La plateforme pour les alternants que vous attendiez !</h2>
                    <p className="text-[#969696] text-[20px] font-Jakarta-medium">La plateforme qui permet de mettre en relation les entreprise et les étudiants facilement.</p>
                </div>
                <div className="w-1/2 pl-16">
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
        </div>
    );
}

export default LandingPage;