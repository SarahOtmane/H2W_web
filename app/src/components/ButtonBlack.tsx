
interface ButtonProps {
    text: string;
    icon?: string;
}

const ButtonBlack: React.FC<ButtonProps> = ({text, icon}) => {
    return (
        <button className={`flex items-center justify-center w-max bg-black text-white py-2 px-4 rounded`}>
            {icon && <img src={icon} alt='icon' className="w-5 h-5 mr-2" />}
            {icon && <span>&nbsp;</span>}
            {text}
        </button>
    );
};

export default ButtonBlack;