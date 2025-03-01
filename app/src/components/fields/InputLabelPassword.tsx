import { useState } from 'react';
import Icon from '../../Icon'

interface InputLabelPasswordProps {
    label: string;
    value?: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    style?: string;
    name: string;
    required?: boolean;
    error?: string;
}

const InputLabelPassword: React.FC<InputLabelPasswordProps> = ({ label, onChange, value, placeholder, style, name, error }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className={`flex flex-col ${style ? style : ''}`}>
            <label className="font-Jakarta-medium text-sm sm:text-base md:text-lg lg:text-body ml-1">{label}</label>
            <div className="relative w-full">
                <input
                    id={`hs-toggle-password`}
                    type={showPassword ? "text" : "password"}
                    defaultValue={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    name={name}
                    className={`font-Jakarta-regular w-full italic text-sm sm:text-base md:text-lg lg:text-body py-4 pl-4 mt-2 rounded-2xl border-1 ${error ? 'text-custom-red border-custom-red' : 'text-input-text bg-gray-background border-gray-background focus:outline-lilas'} `}
                />
                {error &&
                    <div className="mt-2 pl-2 flex">
                        <Icon name="attention" />
                        <p className="ml-2 text-custom-red">{error}</p>
                    </div>
                }
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus:text-blue-600 dark:text-neutral-600 dark:focus:text-blue-500"
                >
                    {showPassword ? (
                        <Icon name="passWordShow" />
                    ) : (
                        <Icon name="passwordHide" />
                    )}
                </button>
            </div>
        </div>
    );
};

export default InputLabelPassword;
