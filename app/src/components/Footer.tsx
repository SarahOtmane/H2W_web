import Icon from "../Icon";


const Footer: React.FC = () => {
    return (
        <footer className="bg-custom-black text-white px-40 py-8">
            <nav className='flex flex-row mb-10'>
                <Icon name="logoFooter" />
                <ul className="mt-12 font-Jakarta-bold text-body ml-20">
                    <li><a href="#">Notre mission</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Offres d’alternance</a></li>
                </ul>
                <ul className="mt-12 font-Jakarta-bold text-body ml-30">
                    <li><a href="#">Nous contacter</a></li>
                    <li><a href="#">Mentions légales</a></li>
                    <li><a href="#">Politique de confidentialité</a></li>
                </ul>
            </nav>

            <div className="border-1 border-gray-dark opacity-[0.4] mb-[4rem]"></div>

            <ul className='flex flex-row relative items-center ml-9'>
                <li className="mr-2"><a className="ml-10" href='#'><Icon name="instaIcon" /></a></li>
                <li className="mr-2"><a className="ml-8" href='#'><Icon name="fbIcon" /></a></li>
                <li className="mr-2"><a className="ml-10" href='#'><Icon name="linkedinIcon" /></a></li>

            <li className="absolute left-[45%]"><a href='#' className='underline'>Conditions générales d’utilisation</a></li>
            </ul>
        </footer>
    );
}

export default Footer;