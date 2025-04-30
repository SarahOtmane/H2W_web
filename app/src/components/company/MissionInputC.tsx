import React, { useState } from 'react';

import { CreateAnnoncesType } from '../../types/Annonces.type';

type MissionsInputCProps = {
    annonce: CreateAnnoncesType;
    setAnnonce: React.Dispatch<React.SetStateAction<CreateAnnoncesType>>;
};

const MissionsInputC: React.FC<MissionsInputCProps> = ({ annonce, setAnnonce }) => {
    const [inputValue, setInputValue] = useState('');

    const handleAddMission = () => {
        const trimmed = inputValue.trim();
        if (trimmed) {
            setAnnonce((prev) => ({
                ...prev,
                missions: [...prev.missions, trimmed],
            }));
            setInputValue('');
        }
    };

    const handleDelete = (index: number) => {
        setAnnonce((prev) => ({
            ...prev,
            missions: prev.missions.filter((_, i) => i !== index),
        }));
    };

    return (
        <div className="space-y-4 my-10">
            <label className="font-Jakarta-bold text-sm sm:text-base md:text-lg lg:text-body ml-1">Description des missions</label>

            <ul className="space-y-2 pl-4">
                {annonce.missions.map((mission, index) => (
                    <li
                        key={index}
                        className="flex justify-between items-center gap-2 relative before:content-['•'] before:absolute before:left-0 before:text-custom-black before:text-lg pl-4 pr-4"
                    >
                        <span className="text-sm">{mission}</span>
                        <button
                            onClick={() => handleDelete(index)}
                            className="custom-black hover:text-red-500 text-xl font-Jakarta-medium cursor-pointer"
                        >
                            &times;
                        </button>
                    </li>
                ))}
            </ul>
            
            <div className="relative">
                <textarea
                    maxLength={160}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Listez les missions de votre annonce"
                    className="w-full min-h-[100px] p-4 rounded-[1rem] bg-gray-100 focus:outline-none focus:ring-2 focus:ring-lilas resize-none"
                />
                <span className="absolute bottom-2 right-4 text-sm text-custom-black">
                    {inputValue.length}/160
                </span>
            </div>
            
            <button
                onClick={handleAddMission}
                className="rounded-xl px-4 py-2 bg-lilas text-white text-2xl font-bold hover:bg-lilas transition disabled:opacity-40"
                disabled={!inputValue.trim()}
            >
                +
            </button>
        </div>
    );
};

export default MissionsInputC;
