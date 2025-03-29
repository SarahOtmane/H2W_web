import React from 'react';
import Pg from "../Pg";

interface RegisterCardProps {
    icon: React.ReactElement;
    titre: string;
    description: string;
    selected: string;
    setSelected: React.Dispatch<React.SetStateAction<string>>;
    setRegisterEtape: React.Dispatch<React.SetStateAction<number>>;
    style?: string;
    select: string;
}

const RegisterCard: React.FC<RegisterCardProps> = ({icon, titre, description, style, selected, setSelected, select, setRegisterEtape}) => {
    const registerSelect : boolean = (selected === select ? true : false);
    const handleChange = () => {
        setSelected(select);
        setRegisterEtape(1);
    }
    return (
        <button 
            className={`
                flex flex-col w-full h-full py-4 px-5 rounded-[1rem] border border-solid
                ${registerSelect ? 'border-lilas border-2 bg-lilas-light' : 'bg-white border-black'}
                ${style ? style : ''}
            `}
            onClick={() => handleChange()}
        >
            <article className="flex flex-row items-center">
                {icon}
                <p className="font-Jakarta-bold text-sm sm:text-base md:text-lg lg:text-body ml-3">{titre}</p>
            </article>
            <Pg text={description} style="mt-3 text-left"/>
        </button>
    );
}

export default RegisterCard;