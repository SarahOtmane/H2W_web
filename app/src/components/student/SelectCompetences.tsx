import React, { useState } from "react";

interface SelectCompetencesProps {
    skillsList: string[];
    selectedSkills?: string[]; 
    setSelectedSkills?: (skills: string[]) => void; 
    selectedSkill?: string; 
    setSelectedSkill?: (skill: string) => void; 
    label: string;
    maxSkills?: number; 
    isSingleSelect: boolean; 
    placeholder: string;
}

const SelectCompetences: React.FC<SelectCompetencesProps> = ({
    skillsList,
    selectedSkills = [],
    setSelectedSkills,
    selectedSkill = "",
    setSelectedSkill,
    label,
    maxSkills = 1,
    isSingleSelect,
    placeholder
}) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSelect = (skill: string) => {
        if (isSingleSelect) {
            setSelectedSkill?.(skill);
            setSearchTerm("");
        } else {
            if (!selectedSkills.includes(skill) && selectedSkills.length < maxSkills) {
                setSelectedSkills?.([...selectedSkills, skill]); 
                setSearchTerm("");
            }
        }
    };

    const handleRemove = (skill: string) => {
        if (!isSingleSelect) {
            setSelectedSkills?.(selectedSkills.filter((s) => s !== skill)); 
        } else {
            setSelectedSkill?.("");
        }
    };

    const filteredSkills = skillsList.filter(
        (skill) =>
            skill.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (isSingleSelect ? skill !== selectedSkill : !selectedSkills.includes(skill))
    );

    return (
        <div className="flex flex-col">
            <label className="text-[16px] font-Jakarta-bold mt-6 mb-2">{label}</label>

            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-4 rounded-xl bg-gray-100 focus:outline-lilas"
                placeholder={placeholder}
            />

            {searchTerm && filteredSkills.length > 0 && (
                <div className="mt-1 border border-violet-200 rounded-xl overflow-hidden bg-white shadow-sm">
                    {filteredSkills.map((skill, idx) => (
                        <div
                            key={idx}
                            className="px-4 py-2 cursor-pointer hover:bg-violet-100"
                            onClick={() => handleSelect(skill)}
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            )}

            {isSingleSelect ? (
                selectedSkill && (
                    <div className="flex w-max items-center border border-black rounded-[2rem] px-8 py-4 font-Jakarta-bold relative text-[16px] mt-6">
                        {selectedSkill}
                        <button
                            className="ml-2 right-[-.8rem] top-[-.4rem] absolute"
                            onClick={() => handleRemove(selectedSkill)}
                        >
                            <svg
                                width="35"
                                height="35"
                                viewBox="0 0 35 35"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.5013 32.0832C25.5221 32.0832 32.0846 25.5207 32.0846 17.4998C32.0846 9.479 25.5221 2.9165 17.5013 2.9165C9.48047 2.9165 2.91797 9.479 2.91797 17.4998C2.91797 25.5207 9.48047 32.0832 17.5013 32.0832Z"
                                    fill="#1D1D1B"
                                />
                                <path
                                    d="M13.375 21.6272L21.6292 13.373"
                                    stroke="white"
                                    strokeWidth="2.1875"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M21.6292 21.6272L13.375 13.373"
                                    stroke="white"
                                    strokeWidth="2.1875"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                )
            ) : (
                <div className="flex flex-wrap gap-2 mt-6">
                    {selectedSkills.map((skill, idx) => (
                        <div
                            key={idx}
                            className="flex items-center border border-black rounded-[2rem] px-8 py-4 font-Jakarta-bold relative text-[16px] mb-6"
                        >
                            {skill}
                            <button
                                className="ml-2 right-[-.8rem] top-[-.4rem] absolute"
                                onClick={() => handleRemove(skill)}
                            >
                                <svg
                                    width="35"
                                    height="35"
                                    viewBox="0 0 35 35"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M17.5013 32.0832C25.5221 32.0832 32.0846 25.5207 32.0846 17.4998C32.0846 9.479 25.5221 2.9165 17.5013 2.9165C9.48047 2.9165 2.91797 9.479 2.91797 17.4998C2.91797 25.5207 9.48047 32.0832 17.5013 32.0832Z"
                                        fill="#1D1D1B"
                                    />
                                    <path
                                        d="M13.375 21.6272L21.6292 13.373"
                                        stroke="white"
                                        strokeWidth="2.1875"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M21.6292 21.6272L13.375 13.373"
                                        stroke="white"
                                        strokeWidth="2.1875"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SelectCompetences;