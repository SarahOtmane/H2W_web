

interface PgProps {
    text: string;
    style?: string;
}

const Pg: React.FC<PgProps> = ({text, style}) => {
    return (
        <p className={`font-Jakarta-medium text-sm sm:text-base md:text-lg lg:text-body ${style? style : ''}`}>{text}</p>
    );
};

export default Pg;