
interface PageTitleProps {
    text: string;
    style?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({text, style}) => {
    return (
        <h1 className={`font-Jakarta-extra-bold text-2xl sm:text-3xl md:text-4xl lg:text-page-title  ${style? style : ''}`}>{text}</h1>
    );
};

export default PageTitle;