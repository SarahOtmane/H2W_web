import '../App.css';

interface ButtonProps {
    text: string;
    icon?: string;
}

const ButtonWhite: React.FC<ButtonProps> = ({text, icon}) => {
    return (
        <button className={`flex items-center justify-center px-5 py-3  text-black bg-white rounded-[2rem] hover:text-white hover:bg-black border-orange hover:border-black border-1`}>
            {icon && <img src={icon} alt='icon' className="w-5 h-5 mr-1" />}
            {icon && <span>&nbsp;</span>}
            {text}
        </button>
    );
};

export default ButtonWhite;