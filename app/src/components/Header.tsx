import { Link } from 'react-router-dom';
import logo from '../assets/images/logo_header.png';
import Icon from '../Icon';

import ButtonBlack from './buttons/ButtonBlack';

const Header = () => {
    return (
        <header className='flex flex-row justify-between items-center bg-gray-background px-38 py-8'>
            <img src={logo} alt='logo' />
            <ul className='flex flex-row font-Jakarta-semi-bold'>
                <li className='mr-8'><Link to='#'>Nos services</Link></li>
                <li className='mr-8'><Link to='#'>Étudiant</Link></li>
                <li className='mr-8'><Link to='#'>Entreprise</Link></li>
                <li className='mr-8'><Link to='#'>École</Link></li>
                <li className='mr-8'><Link to='#'>À propos</Link></li>
            </ul>
            <ButtonBlack text='  Se connecter' icon={<Icon name='avatar' />} />
        </header>
    );
}

export default Header;