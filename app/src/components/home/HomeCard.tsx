import Pg from "../Pg";
import Subtitle from "../titles/Subtitle";

interface HomeCardProps {
    title: string;
    text: string;
    icon: React.ReactElement;
    style?: string;
}

const HomeCard: React.FC<HomeCardProps> = ({title, text, icon, style}) => {
    return(
        <div className={`text-white ${style ? style : ''}`}>
            {icon}
            <Subtitle text={title} style="mt-2" />
            <Pg text={text} style="mt-3" />
        </div>
    )
}

export default HomeCard;