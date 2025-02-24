
interface PageTitleProps {
    text: string;
    style?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({text, style}) => {
    return (
        <h1 className={` ${style? style : ''}`}>{text}</h1>
    );
};

export default PageTitle;