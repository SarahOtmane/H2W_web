

interface TextUnderTitleProps {
    text: string;
    style?: string;
}

const TextUnderTitle: React.FC<TextUnderTitleProps> = ({text, style}) => {
    return (
        <span className={` ${style? style : ''}`}>{text}</span>
    );
};

export default TextUnderTitle;