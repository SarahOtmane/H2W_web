import '../App.css';

interface ButtonProps {
    text: string;
    icon?: string;
}

const ButtonBlack: React.FC<ButtonProps> = ({text, icon}) => {
    return (
        <button className={`flex items-center justify-center px-5 py-3  text-white bg-black rounded-[2rem] hover:text-black hover:bg-white border-black border-1`}>
            {icon && <img src={icon} alt='icon' className="w-5 h-5 mr-1" />}
            {icon && <span>&nbsp;</span>}
            {text}
        </button>
    );
};

export default ButtonBlack;