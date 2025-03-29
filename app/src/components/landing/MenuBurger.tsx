import Icon from '../../utils/Icon';

interface MenuBurgerProps {
    isOpen: boolean;
    onClose: () => void;
}

const MenuBurger:React.FC<MenuBurgerProps> = ({isOpen, onClose}) => {

    return(
        <div className={`fixed rounded-b-[2rem] top-0 right-0 w-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className='flex justify-end p-4'>
                <button onClick={onClose}>
                    <Icon name='closeMenu' />
                </button>
            </div>
            <nav className='flex flex-col px-6 py-10 space-y-6 font-Jakarta-semi-bold mt-5 text-center'>
                <a onClick={onClose} href='#services'>Services</a>
                <a onClick={onClose} href='#fonctionnement'>Comment ça marche </a>
                <a onClick={onClose} href='#faq'>FAQ</a>
                <a onClick={onClose} href='#newsletter'>Newsletter</a>
            </nav>
        </div>
    )
}

export default MenuBurger;