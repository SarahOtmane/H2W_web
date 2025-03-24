import { Link, useNavigate } from 'react-router-dom';
import Icon from '../utils/Icon';

import ButtonBlack from './buttons/ButtonBlack';
import WindowSize from '../utils/WindowSize';

const Header = () => {
    const navigate = useNavigate();

    const size = WindowSize();
    const isMobile = size.width < 768;

    return (
        <header className='flex flex-row justify-between items-center bg-gray-background px-4 py-1 md:px-16 md:py-3 lg:px-38 lg:py-8'>
            <Icon name={isMobile ? 'logoHeaderMobile' : 'logoHeaderMobile'} />
            <ul className='md:flex md:flex-row font-Jakarta-semi-bold hidden'>
                <li className='mr-8'><Link to='#'>Nos services</Link></li>
                <li className='mr-8'><Link to='#'>Étudiant</Link></li>
                <li className='mr-8'><Link to='#'>Entreprise</Link></li>
                <li className='mr-8'><Link to='#'>École</Link></li>
                <li className='mr-8'><Link to='#'>À propos</Link></li>
            </ul>
            <ButtonBlack text='Se connecter' icon={<Icon name='avatar' />} handleClick={()=>navigate('/login')} mobile={true} />
        </header>
    );
}

export default Header;