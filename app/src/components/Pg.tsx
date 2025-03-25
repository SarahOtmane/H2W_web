

interface PgProps {
    text: string;
    style?: string;
}

const Pg: React.FC<PgProps> = ({text, style}) => {
    return (
        <p className={`font-Jakarta-medium text-[16px] ${style? style : ''}`}>{text}</p>
    );
};

export default Pg;