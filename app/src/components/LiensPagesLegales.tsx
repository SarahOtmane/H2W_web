import { Link } from "react-router-dom";
import PageTitle from "./titles/PageTitle";


interface LiensPagesLegalesProps {
    text: string;
    link: string;
}

const LiensPagesLegales: React.FC<LiensPagesLegalesProps> = ({text, link}) => {
    return (
        <div className="">
            <PageTitle text={text} />
            <ul className="flex mt-6">
                <li className={`mr-12 pb-2 ${link==='cgu' ? 'border-b-3 border-black font-Jakarta-bold' : ""}`}><Link to="/conditions-generales">Conditions Générales</Link></li>
                <li className={`mr-12 pb-2 ${link==='acc' ? 'border-b-3 border-black font-Jakarta-bold' : ""}`}><Link to="/engagement-accessibilite">Engagements en matière d’Accessibilité</Link></li>
                <li className={`mr-12 pb-2 ${link==='plc' ? 'border-b-3 border-black font-Jakarta-bold' : ""}`}><Link to="/politique-confidentialite">Politique de Confidentialité</Link></li>
            </ul>
        </div>
    );
}

export default LiensPagesLegales;