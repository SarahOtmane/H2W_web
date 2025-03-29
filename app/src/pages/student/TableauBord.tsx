import MenuItem from "../../components/student/MenuItem";
import TitrePage from "../../components/student/TitrePage";
import ButtonWhite from "../../components/buttons/ButtonWhite";
import Icon from "../../utils/Icon";
import ButtonBlack from "../../components/buttons/ButtonBlack";

import backN from '../../assets/images/student/tbord_newsletter_back.png';
import backC from '../../assets/images/student/tbord_contact_back.svg';



const TableauBord = () => {
    return(
        <main className="px-4 md:px-38 md:pt-10 md:pb-20 bg-gray-background">
            <MenuItem linkSelected="TBord" style="bg-custom-black text-white" iconStyle="ml-[5%]" fillIcon="#1D1D1B" textColor="white" />
            <TitrePage title="Tableau de bord" />

            <section className="flex flex-col md:flex-row justify-between mt-18">
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
                                className="bg-[#4E4E4E] w-full text-body rounded-[1.3rem] px-5 py-4 text-gray-dark flex-grow"
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