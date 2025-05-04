import { useState } from "react";
import { Experience } from "../../types/Portfolio.types";
import Icon from "../../utils/Icon";



interface AccordionExperienceProps {
    experiences : Experience[];
}


const AccordionExperience : React.FC<AccordionExperienceProps> = ({experiences}) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    
    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    

    return(
        <div className="bg-white rounded-b-[2rem] rounded-t-[2rem] py-8 px-6 items-start w-full">
            {experiences.map((experience, index) => {
                const isOpen = openIndex === index;

                return (
                    <div key={index} className="border-b border-gray-border">
                        <div className={`p-4 rounded-[1rem]`}>
                            <button
                                onClick={() => toggle(index)}
                                className="w-full flex justify-between text-left text-[20px] font-Jakarta-bold focus:outline-none my-4 px-6 cursor-pointer"
                            >
                                <span className={`capitalize ${isOpen ? "text-custom-orange" : "text-custom-black "}`}>{experience.startDate} {experience.endDate ? ` - ${experience.endDate}` : " - Ajoud'hui"} : {experience.title} - {experience.companyName}</span>
                                <span className="ml-2">
                                    <Icon name={isOpen ? "flecheButtonHautOrange" : "flecheButtonBasNoir"} />
                                </span>
                            </button>
                            {isOpen && (
                                <div className="mt-3 leading-relaxed px-6 ">
                                    {experience.missions.map((mission, index) => (
                                        <p key={index} className="text-[15px] flex font-Jakarta-medium text-custom-black leading-relaxed mb-2">
                                            <Icon name="checkOrangeExpe" />
                                            <span className="ml-3">{mission}</span>
                                        </p>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default AccordionExperience;