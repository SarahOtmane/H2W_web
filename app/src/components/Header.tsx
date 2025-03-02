import logo from '../assets/images/logo_header.png';
import Icon from '../Icon';

import ButtonBlack from './buttons/ButtonBlack';

const Header = () => {
    return (
        <header className='flex flex-row justify-between items-center bg-gray-background px-38 py-8'>
            <img src={logo} alt='logo' />
            <ul className='flex flex-row font-Jakarta-semi-bold'>
                <li className='mr-8'><a href='#'>Nos services</a></li>
                <li className='mr-8'><a href='#'>Étudiant</a></li>
                <li className='mr-8'><a href='#'>Entreprise</a></li>
                <li className='mr-8'><a href='#'>École</a></li>
                <li className='mr-8'><a href='#'>À propos</a></li>
            </ul>
            <ButtonBlack text='  Se connecter' icon={<Icon name='avatar' />} />
        </header>
    );
}

export default Header;