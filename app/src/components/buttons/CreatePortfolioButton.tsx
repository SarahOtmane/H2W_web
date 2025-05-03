import React from "react";

interface CreatePortfolioButtonProps {
    suivantSelected: boolean;
    setEtape: (etape: number) => void;
    etape: number;
}


const CreatePortfolioButton  : React.FC<CreatePortfolioButtonProps> = ({suivantSelected, setEtape, etape}) => {
    return(
        <div className="flex flex-row justify-center items-center mt-15">
            <button className="text-[16px] py-4 w-[9rem] rounded-[2rem] text-white bg-custom-black mr-4 cursor-pointer " onClick={(e) => { e.preventDefault(); setEtape(etape - 1); }}>Précédent</button>
            <button className={`text-[16px] py-4 w-[9rem] rounded-[2rem] text-white cursor-pointer ${suivantSelected ? 'bg-custom-orange' : 'bg-[#9FA6B2]'}`} onClick={(e) => { e.preventDefault(); setEtape(etape + 1); }} disabled={!suivantSelected} >Suivant</button>
        </div>
    )
}

export default CreatePortfolioButton;