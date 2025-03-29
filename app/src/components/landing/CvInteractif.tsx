import etape4 from '../../assets/images/cvinteractif_img1.png';
import etape2 from '../../assets/images/cvinteractif_img2.png';
import etape3 from '../../assets/images/cvinteractif_img3.png';
import etape1 from '../../assets/images/cvinteractif_img4.png';


const CvInteractif = () => {
    return (
        <section className=" mt-20 md:mt-34">
            <h2 className="font-Jakarta-extra-bold text-[48px] w-[95%] md:w-[55%] m-auto text-center"><span className="bg-gradient-to-r from-custom-orange to-lilas text-transparent bg-clip-text">Démarquez-vous</span> avec votre CV interactif unique</h2>
            <p className="font-Jakarta-semi-bold text-[20px] text-gray-text w-[95%] md:w-[50%] m-auto text-center mt-6">Oubliez les CV classiques ! Valorisez vos compétences avec un portfolio dynamique et captivant. 
                Faites la différence en un instant.
            </p>
            <div className="w-[90%] m-auto mt-10 md:mt-20 relative">
                <div className='hidden md:block w-[.4rem] h-[78rem] bg-gradient-to-b from-lilas to-custom-orange absolute left-[49.7%] rounded-[.5rem]'></div>
                <div className="flex flex-col md:flex-row items-center text-center md:text-left mb-10 md:mb-0">
                    <div className='w-full md:w-1/2 mb-4 md:mb-0'><img src={etape1} /></div>
                    <div className='h-[1rem] w-[1rem] bg-white rounded-[50%] hidden md:block z-99'></div>
                    <article className='w-full md:w-1/2 md:px-[3.5rem]'>
                        <h4 className='text-[24px] font-Jakarta-extra-bold'>Créez un CV interactif unique</h4>
                        <p className='text-[16px] font-Jakarta-medium text-gray-text'>Valorisez vos compétences et projets avec un portfolio dynamique et personnalisable.</p>
                    </article>
                </div>
                <div className="flex flex-col md:flex-row items-center text-center md:text-left mb-10 md:mb-0">
                    <article className='hidden md:block w-1/2 pr-[9rem]'>
                        <h4 className='text-[24px] font-Jakarta-extra-bold'>Trouvez une offre et postulez en un clic</h4>
                        <p className='text-[16px] font-Jakarta-medium text-gray-text'>Explorez des offres adaptées et postulez facilement.</p>
                    </article>
                    <div className='h-[1rem] w-[1rem] bg-white rounded-[50%] hidden md:block z-99'></div>
                    <div className=' w-full md:w-1/2 flex justify-end mb-4 md:mb-0'><img src={etape2} /></div>
                    <article className='w-full md:hidden'>
                        <h4 className='text-[24px] font-Jakarta-extra-bold'>Trouvez une offre et postulez en un clic</h4>
                        <p className='text-[16px] font-Jakarta-medium text-gray-text'>Explorez des offres adaptées et postulez facilement.</p>
                    </article>
                </div>
                <div className="flex flex-col md:flex-row items-center text-center md:text-left mb-10 md:mb-0">
                    <div className='w-full md:w-1/2 mb-4 md:mb-0'><img src={etape3} /></div>
                    <div className='h-[1rem] w-[1rem] bg-white rounded-[50%] hidden md:block z-99'></div>
                    <article className='w-full md:w-1/2 md:px-[3.5rem]'>
                        <h4 className='text-[24px] font-Jakarta-extra-bold'> Échangez directement avec les recruteurs</h4>
                        <p className='text-[16px] font-Jakarta-medium text-gray-text'>Discutez en temps réel et montrez votre motivation via notre messagerie intégrée.</p>
                    </article>
                </div>
                <div className="flex flex-col md:flex-row items-center text-center md:text-left">
                    <article className='hidden md:block w-1/2 pr-[9rem]'>
                        <h4 className='text-[24px] font-Jakarta-extra-bold'>Suivez vos candidatures facilement</h4>
                        <p className='text-[16px] font-Jakarta-medium text-gray-text'>Gardez un œil sur vos candidatures, recevez des notifications et relancez facilement.</p>
                    </article>
                    <div className='h-[1rem] w-[1rem] bg-white rounded-[50%] hidden md:block z-99'></div>
                    <div className='w-full md:w-1/2 flex justify-end mb-4 md:mb-0'><img src={etape4} /></div>
                    <article className='w-full md:hidden'>
                        <h4 className='text-[24px] font-Jakarta-extra-bold'>Suivez vos candidatures facilement</h4>
                        <p className='text-[16px] font-Jakarta-medium text-gray-text'>Gardez un œil sur vos candidatures, recevez des notifications et relancez facilement.</p>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default CvInteractif;