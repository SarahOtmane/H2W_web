
import Back from '../../assets/images/landing_fonctionnement_back.png'


const Fonctionnement = () => {
    return(
        <div>
            <div className="bg-white text-black w-full flex rounded-[2rem] relative pt-12 pb-8 md:py-12 items-center mb-4">
                <p className=" mt-[-8rem] ml-[40%] px-10 py-3 border-1 border-gray-dark rounded-[2rem] absolute">Comment ça fonctionne ?</p>
                <h2 className='font-Jakarta-extra-bold text-[48px] w-[90%] m-auto mt-[5rem] text-center'>Créez un <span className='bg-gradient-to-r from-custom-orange to-lilas text-transparent bg-clip-text'>CV interactif</span> au format portfolio pour valoriser vos compétences</h2>
            </div>
            <div className="bg-white w-full rounded-[2rem] flex flex-row justify-between pr-16 py-10">
                <img src={Back} alt='ordinateur' className='w-[50%] ml-4' />
                <div className='w-[42%]'>
                    <div className='bg-custom-black rounded-[2rem] px-8 py-12 mb-8'>
                        <h3 className='font-Jakarta-extra-bold text-[32px] text-white mb-2'>1. Ajoutez votre contenu </h3>
                        <p className='font-Jakarta-medium text-[20px] text-white'>Renseignez vos compétences, expériences et projets pour mettre en avant votre parcours.</p>
                    </div>
                    <div className='bg-lilas rounded-[2rem] px-8 py-12 mb-8'>
                        <h3 className='font-Jakarta-extra-bold text-[32px] text-black mb-2'>2. Personnalisez votre portfolio </h3>
                        <p className='font-Jakarta-medium text-[20px] text-black'>Choisissez un template, ajustez les couleurs et la typographie pour un rendu unique.</p>
                    </div>
                    <div className='bg-custom-orange rounded-[2rem] px-8 py-12'>
                        <h3 className='font-Jakarta-extra-bold text-[32px] text-white mb-2'>3. Publiez et partagez </h3>
                        <p className='font-Jakarta-medium text-[20px] text-white'>Soyez repéré par les recruteurs : votre portfolio attire automatiquement les bonnes opportunités, et les recruteurs vous contactent directement s’ils sont intéressés !</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fonctionnement;