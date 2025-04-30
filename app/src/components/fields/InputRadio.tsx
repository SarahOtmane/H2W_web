import React from "react";


interface InputRadioProps {
    checked: string;
    setChecked: (value: string) => void;
    option: string;
}

const InputRadio : React.FC<InputRadioProps> = ({option, checked, setChecked}) => {
    return(
        <label key={option} className="flex items-center gap-2 cursor-pointer mr-6">
            <input
                type="radio"
                name={checked}
                value={option}
                checked={checked === option}
                onChange={() => setChecked(option)}
                className="accent-purple-600 w-4 h-4"
            />
            <span>{option}</span>
        </label>
    )
}

export default InputRadio;