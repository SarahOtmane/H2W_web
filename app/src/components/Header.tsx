import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import avatar from '../assets/images/avatar.svg';

import Icon from '../utils/Icon';
import ButtonBlack from './buttons/ButtonBlack';
import WindowSize from '../utils/WindowSize';
import MenuBurger from './MenuBurger';

interface HeaderProps {
    style?: string;
    connected?: boolean;
}

const Header : React.FC<HeaderProps> = ({style, connected}) => {
    const navigate = useNavigate();

    const size = WindowSize();
    const isMobile = size.width < 768;

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    return (
        <header className={`flex flex-row justify-between items-center bg-white ${style==='white' ? 'md:bg-white' : 'md:bg-gray-background'} px-4 py-4 md:px-16 md:py-3 lg:px-38 lg:py-8`}>
            <Link to='/' className='z-98 cursor-pointer'><Icon name={isMobile ? 'logoHeaderMobile' : 'logoHeader'} /></Link>
            <ul className='md:flex md:flex-row font-Jakarta-semi-bold hidden'>
                <li className='mr-8 md:text-[.7rem] lg:text-[1rem]'><Link to='#'>Nos services</Link></li>
                <li className='mr-8 md:text-[.7rem] lg:text-[1rem]'><Link to='#'>Étudiant</Link></li>
                <li className='mr-8 md:text-[.7rem] lg:text-[1rem]'><Link to='#'>Entreprise</Link></li>
                <li className='mr-8 md:text-[.7rem] lg:text-[1rem]'><Link to='#'>École</Link></li>
                <li className='mr-8 md:text-[.7rem] lg:text-[1rem]'><Link to='#'>À propos</Link></li>
            </ul>
            {isMobile && (
                <>
                    <button className='ml-4 cursor-pointer' onClick={toggleMenu}>
                    <Icon name='burgerMenu' />
                    </button>
                    <MenuBurger isOpen={isMenuOpen} onClose={toggleMenu} />
                </>
            )}
            {!isMobile && !connected && <ButtonBlack text='Se connecter' icon={<Icon name='avatar' />} handleClick={()=>navigate('/login')}/>}
            {!isMobile && connected && <ButtonBlack text=' Mélina Dupont' icon={<img src={avatar} />} handleClick={()=>navigate('/etudiant/tableau-de-bord')}/>}
        </header>
    );
}

export default Header;