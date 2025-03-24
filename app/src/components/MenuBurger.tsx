import { Link, useNavigate } from 'react-router-dom';
import Icon from '../utils/Icon';
import ButtonBlack from './buttons/ButtonBlack';

interface MenuBurgerProps {
    isOpen: boolean;
    onClose: () => void;
}

const MenuBurger:React.FC<MenuBurgerProps> = ({isOpen, onClose}) => {
    const navigate = useNavigate();

    return(
        <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className='flex justify-end p-4'>
                <button onClick={onClose}>
                    <Icon name='closeMenu' />
                </button>
            </div>
            <nav className='flex flex-col p-6 space-y-6 font-Jakarta-semi-bold'>
                <Link to='#' onClick={onClose}>Nos services</Link>
                <Link to='#' onClick={onClose}>Étudiant</Link>
                <Link to='#' onClick={onClose}>Entreprise</Link>
                <Link to='#' onClick={onClose}>École</Link>
                <Link to='#' onClick={onClose}>À propos</Link>
                <ButtonBlack text='Se connecter' icon={<Icon name='avatar' />} handleClick={()=>navigate('/login')}/>
            </nav>
        </div>
    )
}

export default MenuBurger;