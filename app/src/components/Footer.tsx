import { Link } from "react-router-dom";
import Icon from "../utils/Icon";
import WindowSize from '../utils/WindowSize';


const Footer: React.FC = () => {
    const size = WindowSize();
    const isMobile = size.width < 768;

    return (
        <footer className="bg-custom-black text-white md:px-40 md:py-8 py-4 pb-6">
            <nav className='flex flex-col md:flex-row mb-10 items-center text-center md:items-start md:text-left'>
                <Icon name={isMobile ? 'logoFooterMobile' : 'logoFooter'} />
                <ul className="md:mt-12 font-Jakarta-bold text-body md:ml-20">
                    <li><Link to='#'>Notre mission</Link></li>
                    <li><Link to='#'>FAQ</Link></li>
                    <li><Link to='#'>Offres d’alternance</Link></li>
                </ul>
                <ul className="md:mt-12 mt-6 font-Jakarta-bold text-body md:ml-30">
                    <li><Link to='#'>Nous contacter</Link></li>
                    <li><Link to='/engagement-accessibilite'>Mentions légales</Link></li>
                    <li><Link to='/politique-confidentialite'>Politique de confidentialité</Link></li>
                </ul>
            </nav>

            <div className="border-1 border-gray-dark opacity-[0.4] mb-[1rem] md:mb-[4rem] w-2/3 md:w-full m-auto"></div>

            <ul className='flex flex-row relative justify-center md:justify-start md:ml-9 items-center'>
                <li className="mr-2"><Link className="ml-10" to='#'><Icon name="instaIcon" /></Link></li>
                <li className="mr-2"><Link className="ml-8" to='#'><Icon name="fbIcon" /></Link></li>
                <li className="mr-2"><Link className="ml-10" to='#'><Icon name="linkedinIcon" /></Link></li>

                <li className="absolute left-[45%] hidden md:block"><Link to='/conditions-generales' className='underline'>Conditions générales d’utilisation</Link></li>
            </ul>

            <Link to='/conditions-generales' className='underline block md:hidden text-center mt-6'>Conditions générales d’utilisation</Link>
        </footer>
    );
}

export default Footer;