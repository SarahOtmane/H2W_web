import { Information } from "../../controllers/Register.controller";

interface InputCheckboxProps {
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error: Information;
}

const InputCheckbox: React.FC<InputCheckboxProps> = ({ checked, onChange, error }) => {
    return (
        <input 
            type="checkbox" 
            className={`w-5 h-5 rounded-[1rem] border cursor-pointer accent-lilas focus:outline-none ${error.termsAccepted ? 'border-custom-red bg-red-background' : 'border-gray-dark'}`}
            checked={checked}
            onChange={onChange}
        />
    )
}

export default InputCheckbox;