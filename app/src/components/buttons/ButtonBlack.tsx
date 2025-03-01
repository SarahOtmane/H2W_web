
interface ButtonProps {
    text: string;
    icon?: string;
    handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    style?: string;
}

const ButtonBlack: React.FC<ButtonProps> = ({text, icon, handleClick, style}) => {
    return (
        <button onClick={handleClick} className={`flex items-center justify-center px-5 py-3 cursor-pointer text-white bg-black rounded-[2rem] hover:text-black hover:bg-white border-black border-1 ${style? style : ''}`}>
            {icon && <img src={icon} alt='icon' className="w-5 h-5 mr-1" />}
            {icon && <span>&nbsp;</span>}
            {text}
        </button>
    );
};

export default ButtonBlack;