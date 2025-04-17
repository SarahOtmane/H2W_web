
import back from '../assets/images/error_back.svg'
import ButtonBlack from '../components/buttons/ButtonBlack';
import ButtonWhite from '../components/buttons/ButtonWhite';
import Icon from '../utils/Icon';
import WindowSize from '../utils/WindowSize';

const Error500 = () => {
    const size = WindowSize();
    const isMobile = size.width < 768;

    const style = !isMobile
        ? { backgroundImage: `url(${back})`, backgroundPosition: '95% 0%' }
        : undefined;

    return (
        <main 
            style={style}
            className="md:bg-no-repeat md:px-24 md:pt-20 mb-12 md:pb-36 md:mt-6 "     
        >
            <div className='md:w-1/2 flex flex-col items-center md:items-start'>
                <h1 className='font-Jakarta-extra-bold text-[157px] text-custom-orange '>500</h1>
                <h2 className='font-Jakarta-bold text-[40px] text-custom-black text-center md:text-left'>
                    OOOps! <br></br>
                    Un bug s’est glissé ici
                </h2>
                <p className='font-Jakarta-medium text-[20px] text-[#B0B0B0] px-6 mt-6 md:mt-0 md:px-0 md:pr-18 md:my-6 text-center md:text-left'>Notre ruche a un petit souci technique… Nos abeilles travaillent déjà à tout réparer ! En attendant, tu peux toujours butiner ailleurs.</p>
                <div className='flex flex-col md:flex-row mt-12'>
                    <ButtonBlack text="Retour à l’accueil" icon={<Icon name='flecheButton' />} style='mb-4 md:mb-0 mr-0 md:mr-6' />
                    <ButtonWhite text="Créer mon portfolio" icon={<Icon name='flecheButton' />} />
                </div>
            </div>
        </main>
    );
}
export default Error500;