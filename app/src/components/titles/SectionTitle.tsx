

interface SectionTitleProps {
    text: string;
    style?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({text, style}) => {
    return (
        <h2 className={` ${style? style : ''}`}>{text}</h2>
    );
};

export default SectionTitle;