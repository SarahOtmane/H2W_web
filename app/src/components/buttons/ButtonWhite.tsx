
interface ButtonProps {
    text: string;
    icon?: React.ReactElement;
    handleClick?: () => void;
    style?: string;
}

const ButtonWhite: React.FC<ButtonProps> = ({text, icon, handleClick, style}) => {
    return (
        <button onClick={handleClick} className={`flex items-center justify-center px-5 py-3 cursor-pointer bg-white border-gray-border border-1  text-black rounded-[2rem] hover:text-white hover:bg-black hover:border-black ${style? style : ''}`}>
            {icon && icon}
            {icon && <span>&nbsp;</span>}
            {text}
        </button>
    );
};

export default ButtonWhite;