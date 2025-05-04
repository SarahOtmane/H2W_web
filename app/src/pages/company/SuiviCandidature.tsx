import { useEffect, useState } from "react";
import ButtonWhite from "../../components/buttons/ButtonWhite";
import MenuItem from "../../components/company/MenuItem";
import PortfolioDetails from "../../components/student/PortfolioDetails";
import TitrePage from "../../components/student/TitrePage";
import Icon from "../../utils/Icon";
import { PortfolioWithBase64 } from "../../types/Portfolio.types";


const SuiviCandidature = () => {

    const [portfolio, setPortfolio] = useState<PortfolioWithBase64 | null>(null);

    useEffect(() => {
        const storedPortfolio = sessionStorage.getItem("portfolio");
        if (storedPortfolio) {
            setPortfolio(JSON.parse(storedPortfolio));
        }
    }, []);

    return(
        <main className=" bg-gray-background md:pt-10 md:pb-20">
            <TitrePage title="Tableau de bord" />
            <MenuItem linkSelected="application" style="bg-white text-custom-black" textColor="black" />
            <div className="flex mt-10 md:px-40 text-[16px] font-Jakarta-medium text-[#969696] ">
                <p>Tableau de bord </p>
                <p className="mx-2"> &gt; </p>
                <p> Suivis candidatures</p>
                <p className="mx-2"> &gt; </p>
                <p className="font-Jakarta-bold"> Mélina Dupont</p>
            </div>

            <div className="bg-[#EEEEEE] rounded-[1rem] mt-10 md:mx-40 px-10 py-6">
                <h1 className="text-[24px] font-Jakarta-extra-bold">Cet(te) étudiant(e) souhaite rejoindre votre entreprise :</h1>
                <p className="text-[16px] font-Jakarta-medium my-6">L’étudiant(e) a postulé à l’offre <strong>Graphiste</strong>.</p>
                <div className="flex mt-10">
                    <ButtonWhite text='Prendre contacte' icon={<Icon name='message' />} />
                    <ButtonWhite text='Partager ce profil' style="ml-3" icon={<Icon name="flecheButtonVioletNoir" />} />
                </div>
            </div>

            {portfolio && (
                <PortfolioDetails portfolio={portfolio} partage={false} />
            )}

        </main>
    )
}

export default SuiviCandidature;