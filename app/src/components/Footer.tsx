import { Link } from "react-router-dom";
import Icon from "../Icon";


const Footer: React.FC = () => {
    return (
        <footer className="bg-custom-black text-white px-40 py-8">
            <nav className='flex flex-row mb-10'>
                <Icon name="logoFooter" />
                <ul className="mt-12 font-Jakarta-bold text-body ml-20">
                    <li><Link to='#'>Notre mission</Link></li>
                    <li><Link to='#'>FAQ</Link></li>
                    <li><Link to='#'>Offres d’alternance</Link></li>
                </ul>
                <ul className="mt-12 font-Jakarta-bold text-body ml-30">
                    <li><Link to='#'>Nous contacter</Link></li>
                    <li><Link to='#'>Mentions légales</Link></li>
                    <li><Link to='#'>Politique de confidentialité</Link></li>
                </ul>
            </nav>

            <div className="border-1 border-gray-dark opacity-[0.4] mb-[4rem]"></div>

            <ul className='flex flex-row relative items-center ml-9'>
                <li className="mr-2"><Link className="ml-10" to='#'><Icon name="instaIcon" /></Link></li>
                <li className="mr-2"><Link className="ml-8" to='#'><Icon name="fbIcon" /></Link></li>
                <li className="mr-2"><Link className="ml-10" to='#'><Icon name="linkedinIcon" /></Link></li>

            <li className="absolute left-[45%]"><Link to='/conditions-generales' className='underline'>Conditions générales d’utilisation</Link></li>
            </ul>
        </footer>
    );
}

export default Footer;