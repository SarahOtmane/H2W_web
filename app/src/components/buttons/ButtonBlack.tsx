
interface ButtonProps {
    text: string;
    icon?: React.ReactElement;
    handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    style?: string;
}

const ButtonBlack: React.FC<ButtonProps> = ({text, icon, handleClick, style}) => {
    return (
        <button onClick={handleClick} className={`flex items-center justify-center px-5 py-3 cursor-pointer text-white bg-black rounded-[2rem] hover:text-black hover:bg-white border-black border-1 ${style? style : ''}`}>
            {icon && icon}
            {icon && <span> &nbsp; </span>}
            <p className={icon ? 'ml-1.5' : ''}>{text}</p>
        </button>
    );
};

export default ButtonBlack;