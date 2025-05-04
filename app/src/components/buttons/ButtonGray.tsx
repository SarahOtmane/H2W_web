
interface ButtonProps {
    text: string;
    icon?: React.ReactElement;
    handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    style?: string;
    mobile?: boolean;
}

const ButtonGray: React.FC<ButtonProps> = ({text, icon, handleClick, style, mobile}) => {
    return (
        <button onClick={handleClick} className={`flex items-center justify-center px-5 py-3 cursor-pointer text-gray-text bg-gray-dark rounded-[2rem] ${style? style : ''} `}>
            {icon && icon}
            {icon && mobile && <span> &nbsp; </span>}
            <p className={`${icon ? 'ml-1.5' : ''} ${mobile ? 'hidden' : ''}`}>{text}</p>
        </button>
    );
};

export default ButtonGray;