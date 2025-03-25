import { useState } from "react";
import PageTitle from "./titles/PageTitle";
import Pg from "./Pg";

const Newsletter: React.FC = () => {
    const [metier, setMetier] = useState<string>('');
    
    return ( 
        <form className="w-full px-6 md:px-20">
            <PageTitle text="Restez informé(e) avec notre newsletter" style="text-center mb-4"/>
            <Pg 
                text="Ne manque aucune opportunité pour booster ta recherche d’alternance et ta carrière." 
                style="text-center"
            />
            <Pg 
                text="Inscris-toi à notre newsletter et reçois directement dans ta boîte mail." 
                style="text-center mb-12"
            />
            <div className="hidden w-full bg-white px-8 py-6 rounded-[4rem] border border-gray-border font-Jakarta-medium md:flex flex-col items-center sm:justify-between space-y-3 sm:space-y-0 sm:space-x-6 mb-10 shadow-md">
                <input 
                    type="text"
                    placeholder="Métier, entreprise, compétences..."
                    defaultValue={metier}
                    onChange={(e) => setMetier(e.target.value)}
                    className="border-none text-body focus:outline-none text-search-text flex-grow"
                />
                <button className="flex items-center justify-center bg-black text-white font-Jakarta-semi-bold px-5 py-3 rounded-full transition duration-300 w-full sm:w-auto self-end sm:self-center">
                    Je m'abonne !
                </button>
            </div>
            <div className="flex flex-col md:hidden">
                <input 
                    type="text"
                    placeholder="Métier, entreprise, compétences..."
                    defaultValue={metier}
                    onChange={(e) => setMetier(e.target.value)}
                    className="border bg-white text-body border-gray-border rounded-[4rem] focus:outline-none text-search-text flex-grow px-8 py-6 mb-6"
                />
                <button className="flex items-center justify-center bg-black text-white font-Jakarta-semi-bold px-5 py-3 rounded-full transition duration-300 w-max m-auto mb-16">
                    Je m'abonne !
                </button>
            </div>
        </form>
    );
}

export default Newsletter;