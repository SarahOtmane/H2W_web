

interface SectionTitleProps {
    text: string;
    style?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({text, style}) => {
    return (
        <h2 className={`font-Jakarta-bold text-lg sm:text-xl md:text-2xl lg:text-section-title ${style? style : ''}`}>{text}</h2>
    );
};

export default SectionTitle;