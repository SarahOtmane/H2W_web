

interface SubtitleProps {
    text: string;
    style?: string;
}

const Subtitle: React.FC<SubtitleProps> = ({text, style}) => {
    return (
        <h4 className={` ${style? style : ''}`}>{text}</h4>
    );
};

export default Subtitle;