import MenuItem from "../../components/student/MenuItem";
import TitrePage from "../../components/student/TitrePage";
import ButtonWhite from "../../components/buttons/ButtonWhite";
import Icon from "../../utils/Icon";
import ButtonBlack from "../../components/buttons/ButtonBlack";

import backN from '../../assets/images/student/tbord_newsletter_back.png';
import backC from '../../assets/images/student/tbord_contact_back.svg';
import Offres from "../../components/student/Offres";
import HistoriqueCandidature from "../../components/student/HistoriqueCandidature";
import ButtonGray from "../../components/buttons/ButtonGray";



const TableauBord = () => {
    return(
        <main className=" bg-gray-background md:pt-10 md:pb-20">
            <TitrePage title="Tableau de bord" />
            <MenuItem linkSelected="TBord" style="bg-white text-custom-black" textColor="black" />
            <div className="flex flex-row mt-8 px-4 md:px-38">
                <div className="w-1/3 bg-white rounded-[1rem] mr-4 text-center p-4">
                    <h2 className="font-Jakarta-extra-bold text-[36px] mb-6">Bonjour Mélina !</h2>
                    <p className="font-Jakarta-medium text-[18px] text-[#9FA6B2] mb-4 ">Pour pouvoir publier votre portfolio, il est nécessaire de vous abonner.</p>
                    <p className="font-Jakarta-medium text-[18px] text-[#9FA6B2]"><span className="text-custom-orange font-Jakarta-extra-bold text-[36px] ">3.99€</span> par mois</p>
                    <p className="font-Jakarta-medium text-[18px] text-[#9FA6B2] mb-2">(soit 47,88€ pour 1 an)</p>
                    <p className="font-Jakarta-medium text-[18px] mb-4 ">Essai gratuit pendant 30 jours.</p>
                    <ButtonBlack text='Démarrer votre essai gratuit' icon={<Icon name='flecheButton' />} style="m-auto mb-4" />
                </div>
                <div className="w-2/3 bg-white rounded-[1rem] px-8 py-4 items-start flex flex-col">
                    <h2 className="font-Jakarta-extra-bold text-[36px] ">Votre coaching</h2>
                    <p className="font-Jakarta-medium text-[18px] text-[#9FA6B2] mt-4 w-1/2">Pour accéder aux coaching, il est nécessaire de prendre l’abonnement.</p>
                    <ButtonGray text='Accéder aux coaching' icon={<Icon name="flecheButtonGray" />} style="mt-auto mb-4" />
                </div>
            </div>
            <HistoriqueCandidature />
            <Offres />

            <section className="flex flex-col md:flex-row justify-between mt-18 px-4 md:px-38">
                <div className="w-1/2 mr-0 md:mr-[.7rem] bg-custom-black text-white rounded-[1rem] pl-12 py-10"
                    style={{ backgroundImage: `url(${backN})`, backgroundRepeat: 'no-repeat',backgroundPosition: 'right top',}}>
                    <h2 className="font-Jakarta-extra-bold text-[36px] w-[80%] ">Newsletter Hive2Work</h2>
                    <p className="w-[75%] text-input-text text-[18px] my-6 font-Jakarta-medium">Suivez les dernières actualités de votre plateforme de portfolios interactifs.</p>
                    <span className="text-[18px] font-Jakarta-bold">E-mail*</span>
                    <div className="flex flex-col md:flex-row items-center w-[100%]">
                        <div className="w-[50%] mr-4 mt-1">
                            <input 
                                type="email"
                                placeholder="Mélina.dupont@gmail.com"
                                className="bg-[#4E4E4E] w-full text-body rounded-[1.3rem] px-5 py-4 flex-grow"
                            />
                        </div>
                        <ButtonWhite text="S'abonner" icon={<Icon name="flecheButton" />} style="mt-1"/> 
                    </div>
                </div>
                <div className="w-1/2 bg-white rounded-[1rem] pl-12 py-10 flex flex-col ml-0 md:ml-[.7rem]"
                    style={{ backgroundImage: `url(${backC})`, backgroundRepeat: 'no-repeat',backgroundPosition: 'right bottom',}}>
                    <h2 className="font-Jakarta-extra-bold text-[36px] w-[80%] ">Contacter Hive2Work</h2>
                    <p className="w-[75%] text-input-text text-[18px] my-6 font-Jakarta-medium">Vous avez un problème ou une question ? <br></br>Contactez nous !</p>
                    <ButtonBlack text="Contacter" icon={<Icon name="flecheButton" />} style="w-max mt-5" /> 
                </div>
            </section>
        </main>
    )
}

export default TableauBord;