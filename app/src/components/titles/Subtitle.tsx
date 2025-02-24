

interface SubtitleProps {
    text: string;
    style?: string;
}

const Subtitle: React.FC<SubtitleProps> = ({text, style}) => {
    return (
        <h4 className={`font-Jakarta-semi-bold text-base sm:text-lg md:text-xl lg:text-subtitle ${style? style : ''}`}>{text}</h4>
    );
};

export default Subtitle;