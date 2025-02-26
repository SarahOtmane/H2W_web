import Pg from "./Pg";

interface RegisterEtapeProps {
    text: string;
    registerEtape: number;
}

const RegisterEtape: React.FC<RegisterEtapeProps> = ({ text, registerEtape }) => {
    return (
        <div className="flex flex-row w-full mt-12 justify-between text-center items-center relative">
            <div className="w-1/3 relative flex flex-col items-center">
                <p className={`font-Jakarta-extra-bold w-max px-4 py-2 rounded-[50%] mb-4 z-10 
                ${registerEtape === 1 ? 'bg-custom-orange text-white' : 'bg-gray-border text-input-text'}`}>1</p>
                <Pg text={`Détails de l'${text}`} />
            </div>
            {/* <div className="absolute top-[20%] w-1/6 h-[1.5px] bg-gray-border"></div> */}
            <div className="w-1/3 relative flex flex-col items-center">
                <p className={`font-Jakarta-extra-bold w-max px-4 py-2 rounded-[50%] mb-4 z-10 
                ${registerEtape === 2 ? 'bg-custom-orange text-white' : 'bg-gray-border text-input-text'}`}>2</p>
                <Pg text={`Détails de contact`} />
            </div>
            {/* <div className="absolute top-[20%] w-1/6 h-[1.5px] bg-gray-border"></div> */}
            <div className="w-1/3 relative flex flex-col items-center">
                <p className={`font-Jakarta-extra-bold w-max px-4 py-2 rounded-[50%] mb-4 z-10 
                ${registerEtape === 3 ? 'bg-custom-orange text-white' : 'bg-gray-border text-input-text'}`}>3</p>
                <Pg text={`Vérification`} />
            </div>
        </div>
    );
};

export default RegisterEtape;
