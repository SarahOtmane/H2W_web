import { useNavigate } from 'react-router-dom';
import back from '../../assets/images/home_section1_back.png'
import Icon from '../../utils/Icon';
import ButtonBlack from '../buttons/ButtonBlack';
import ButtonWhite from '../buttons/ButtonWhite';

interface SectionAlternanceProps {
    isLanding?: boolean;
}


const SectionAlternance: React.FC<SectionAlternanceProps> = ({isLanding}) => {
    const navigate = useNavigate();

    return(
        <section className='flex flex-col md:flex-row mb-20' id='services'>
            <div className='w-full md:w-1/2 md:mr-4 md:pr-20'>
                <h1 className='font-Jakarta-extra-bold text-[44px] md:text-[56px] mt-15 leading-tight text-center md:text-left'>
                    <span className="relative inline-block">
                        Démarquez-
                        <svg width="269" height="19" viewBox="0 0 269 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 3.14547C64.5411 1.04873 200.55 3.91661 263.166 3.91661C288.093 3.91661 184.359 8.8509 157.067 8.8509C146.063 8.8509 93.5917 12.2619 83.1717 13.6709C80.6736 14.0087 72.0476 14.8705 79.8475 14.8705C103.88 14.8705 135.638 15.6397 159.578 17.3787" stroke="#FF9B3E" strokeWidth="3" strokeLinecap="round"/>
                        </svg>
                    </span>
                    <br />
                    vous et décrochez l’alternance <p className='bg-lilas rounded-[4rem] px-8 py-2 w-max m-auto md:ml-0'>idéale</p>
                </h1>
                <p className='md:font-Jakarta-semi-bold font-Jakarta-medium text-[20px] text-center md:text-left md:text-[24px] mt-8 text-gray-text'>
                    Créez un portfolio interactif rapidement,  postulez en un clic et attirez les recruteurs qui vous correspondent.
                </p>
                {isLanding && (
                    <ButtonBlack text='Découvrir le service' icon={<Icon name="flecheButton" />} style='mt-6 m-auto mb-10 md:mb-0 md:ml-0' />
                )}
                {!isLanding && (
                    <div className="flex flex-col md:flex-row mt-6 md:mt-10 mb-4 md:mb-20">
                        <ButtonBlack handleClick={() => navigate('/etudiant/portfolio')} text="Créer mon portfolio" icon={<Icon name="flecheButton" />} style=" w-max m-auto md:m-0 md:mr-4 " />
                        <ButtonWhite handleClick={() => navigate('/company/offers')} text="Publier une offre" icon={<Icon name="flecheButton" />} style="w-max m-auto mt-4 md:m-0 " />
                    </div>
                )}
            </div>
            <div className='w-full md:w-1/2 md:mr-4'>
                <img src={back} alt=""  />
            </div>
        </section>
    )
}

export default SectionAlternance;