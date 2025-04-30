import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import Icon from '../utils/Icon';
import ButtonBlack from './buttons/ButtonBlack';
import WindowSize from '../utils/WindowSize';
import MenuBurger from './MenuBurger';

interface HeaderProps {
    style?: string;
}

const Header : React.FC<HeaderProps> = ({style}) => {
    const navigate = useNavigate();
    const [isConnected, setIsConnected] = useState<boolean>(false);

    const size = WindowSize();
    const isMobile = size.width < 768;

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    useEffect(() => {
        const isConnected = localStorage.getItem('isConnected');
        if (isConnected) {
            setIsConnected(true);
        } else {
            setIsConnected(false);
        }
    }, []);

    return (
        <header className={`flex flex-row justify-between items-center bg-white ${style==='white' ? 'md:bg-white' : 'md:bg-gray-background'} px-4 py-4 md:px-16 md:py-3 lg:px-38 lg:py-8`}>
            <Link to='/' className='z-99'><Icon name={isMobile ? 'logoHeaderMobile' : 'logoHeader'} /></Link>
            <ul className='md:flex md:flex-row font-Jakarta-semi-bold hidden'>
                <li className='mr-8 md:text-[.7rem] lg:text-[1rem]'><Link to='#'>Nos services</Link></li>
                <li className='mr-8 md:text-[.7rem] lg:text-[1rem]'><Link to='#'>Étudiant</Link></li>
                <li className='mr-8 md:text-[.7rem] lg:text-[1rem]'><Link to='#'>Entreprise</Link></li>
                <li className='mr-8 md:text-[.7rem] lg:text-[1rem]'><Link to='#'>École</Link></li>
                <li className='mr-8 md:text-[.7rem] lg:text-[1rem]'><Link to='#'>À propos</Link></li>
            </ul>
            {isMobile && (
                <>
                    <button className='ml-4' onClick={toggleMenu}>
                    <Icon name='burgerMenu' />
                    </button>
                    <MenuBurger isOpen={isMenuOpen} onClose={toggleMenu} />
                </>
            )}
            {!isMobile && !isConnected && <ButtonBlack text='Se connecter' icon={<Icon name='avatar' />} handleClick={()=>navigate('/login')}/>}
            {!isMobile && isConnected && <ButtonBlack text='Mon compte' icon={<Icon name='avatar' />} handleClick={()=>navigate('/student/dashboard')}/>}
        </header>
    );
}

export default Header;