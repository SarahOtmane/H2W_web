import ButtonBlack from "../../components/buttons/ButtonBlack";
import MenuItem from "../../components/student/MenuItem";
import TitrePage from "../../components/student/TitrePage";




const Portfolio = () => {
    return(
        <main className="px-4 md:px-38 md:pt-10 md:pb-20 bg-gray-background">
            <MenuItem linkSelected="portfolio" style="bg-white text-black" iconStyle="ml-[22%]" fillIcon="white" textColor="black" />
            <TitrePage title="Portfolio" />

            <div className="flex flex-col items-center justify-center mt-15">
                <p className="text-[#9FA6B2] mb-5 ">Vous n’avez pas encore crée votre portfolio.</p>
                <ButtonBlack text="Créer mon portfolio" 
                    icon={
                        <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.5" width="30" height="30" rx="15" fill="#FF9B3E"/>
                            <path d="M14.334 8.83325H13.0007C9.66732 8.83325 8.33398 10.1666 8.33398 13.4999V17.4999C8.33398 20.8333 9.66732 22.1666 13.0007 22.1666H17.0007C20.334 22.1666 21.6673 20.8333 21.6673 17.4999V16.1666" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M17.6933 9.51326L12.4399 14.7666C12.2399 14.9666 12.0399 15.3599 11.9999 15.6466L11.7133 17.6533C11.6066 18.3799 12.1199 18.8866 12.8466 18.7866L14.8533 18.4999C15.1333 18.4599 15.5266 18.2599 15.7333 18.0599L20.9866 12.8066C21.8933 11.8999 22.3199 10.8466 20.9866 9.51326C19.6533 8.17992 18.5999 8.60659 17.6933 9.51326Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16.9395 10.2666C17.3861 11.8599 18.6328 13.1066 20.2328 13.5599" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    } />
            </div>
        </main>
    )
}

export default Portfolio;