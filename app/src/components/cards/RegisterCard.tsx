import React from 'react';
import Pg from "../Pg";

interface RegisterCardProps {
    icon: React.ReactElement;
    titre: string;
    description: string;
    selected: boolean;
    style?: string;
}

const RegisterCard: React.FC<RegisterCardProps> = ({icon, titre, description, selected, style}) => {
    return (
        <div className={`
            flex flex-col w-1/ py-4 px-6 rounded-[1rem] border-1 border-solid h-full
            ${selected ? 'border-lilas border-2 bg-lilas-light' : 'bg-white border-black'}
            ${style? style : ''}
        `}>
            <article className="flex flex-row items-center">
                {icon}
                <p className="font-Jakarta-bold text-sm sm:text-base md:text-lg lg:text-body ml-3">{titre}</p>
            </article>
            <Pg text={description} style="mt-3"/>
        </div>
    );
}

export default RegisterCard;