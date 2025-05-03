import { useState } from "react";


interface SelectEspaceProps {
    espaceSelected: string;
    setEspaceSelected: React.Dispatch<React.SetStateAction<string>>;
}

const SelectEspace: React.FC<SelectEspaceProps> = ({ espaceSelected, setEspaceSelected }) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleChangeState = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        setEspaceSelected(e.currentTarget.id);
        setIsOpen(false);
    }

    return(
        <div className='relative w-max'>
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-[12rem] bg-black text-white px-5 py-3 rounded-[2rem] flex items-center justify-between cursor-pointer" 
            >
                {espaceSelected === 'Espace recruteur' && <span>Espace <span className='text-custom-orange'>recruteur</span></span>}
                {espaceSelected === 'Espace étudiant' && <span>Espace <span className='bg-gradient-to-r from-custom-orange to-lilas text-transparent bg-clip-text'>étudiant</span></span>}
                {espaceSelected === 'Espace école' && <span>Espace <span className='text-lilas'>école</span></span>}
                { !isOpen &&
                    <svg width="20" height="25" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.77 7.08545L10.6083 12.2471C9.99873 12.8567 9.00123 12.8567 8.39165 12.2471L3.22998 7.08545" stroke='white' strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                }
                { isOpen &&
                    <svg width="20" height="25" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.39309 11.9864L8.6735 6.94631C9.29711 6.35108 10.2943 6.3743 10.8896 6.9979L15.9297 12.2783" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                }

            </button>

            {isOpen && (
                <div className='flex flex-col absolute bg-black w-[12rem] top-[3rem] left-0 z-10 text-white rounded-2xl mt-2 text-center'>
                    <a href='#' onClick={handleChangeState} className='border-b-1 border-white py-3 mx-5' id='Espace recruteur'>Espace <span className='text-custom-orange'>recruteur</span></a>
                    <a href='#' onClick={handleChangeState} className='border-b-1 border-white py-3 mx-5' id='Espace étudiant'>Espace <span className="bg-gradient-to-r from-custom-orange to-lilas text-transparent bg-clip-text">étudiant</span></a>
                    <a href='#' onClick={handleChangeState} className='py-3 mx-5' id='Espace école'>Espace <span className='text-lilas'>école</span></a>
                </div>
            )}
        </div>
    )
}

export default SelectEspace;