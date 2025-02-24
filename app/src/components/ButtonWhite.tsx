
interface ButtonProps {
    text: string;
    icon?: string;
    handleClick?: () => void;
}

const ButtonWhite: React.FC<ButtonProps> = ({text, icon, handleClick}) => {
    return (
        <button onClick={handleClick} className={`flex items-center justify-center px-5 py-3 bg-white border-gray-border border-1  text-black rounded-[2rem] hover:text-white hover:bg-black hover:border-black `}>
            {icon && <img src={icon} alt='icon' className="w-5 h-5 mr-1" />}
            {icon && <span>&nbsp;</span>}
            {text}
        </button>
    );
};

export default ButtonWhite;