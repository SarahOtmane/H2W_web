import Pg from "./Pg";

interface RegisterEtapeProps {
    text: string;
    registerEtape: number;
}

const RegisterEtape: React.FC<RegisterEtapeProps> = ({ text, registerEtape }) => {
    return (
        <div className="flex flex-col w-full mt-12 text-center items-center">
            <div className="flex items-center justify-between mb-4 w-full md:w-2/3 px-10">
                <div className="relative">
                    <p className={`font-Jakarta-extra-bold w-max px-4 py-2 rounded-[50%] z-10 
                    ${registerEtape === 1 ? 'bg-custom-orange text-white' : 'bg-gray-border text-input-text'}`}>1</p>
                    <Pg text={`Détails de l'${text}`} style="absolute w-1/2 md:w-max" />
                </div>
                <div className="w-1/3 h-[1.5px] bg-gray-border mx-4"></div>
               <div className="relative">
                <p className={`font-Jakarta-extra-bold w-max px-4 py-2 rounded-[50%] z-10 
                 ${registerEtape === 2 ? 'bg-custom-orange text-white' : 'bg-gray-border text-input-text'}`}>2</p>
                <Pg text={`Détails de contact`} style="absolute w-1/2 md:w-max" />
               </div>
                <div className="w-1/3 h-[1.5px] bg-gray-border mx-4"></div>
                <div className="relative">
                    <p className={`font-Jakarta-extra-bold w-max px-4 py-2 rounded-[50%] z-10 
                    ${registerEtape === 3 ? 'bg-custom-orange text-white' : 'bg-gray-border text-input-text'}`}>3</p>
                    <Pg text={`Vérification`} style="absolute w-1/2 md:w-max" />
                </div>
            </div>
        </div>
    );
};

export default RegisterEtape;
