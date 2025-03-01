import Icon from "../../Icon";


interface InputLabelProps {
    label: string;
    value?: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type: string;
    style?: string;
    name: string;
    required?: boolean;
    error?: string;
}

const InputLabel: React.FC<InputLabelProps> = ({label, onChange, value, placeholder, type, style, name, required, error}) => {
    return (
        <div className={`flex flex-col ${style? style : ''}`}>
            <label className="font-Jakarta-medium text-sm sm:text-base md:text-lg lg:text-body ml-1">{label}</label>
            <input 
                type={type} 
                defaultValue={value} 
                placeholder={placeholder} 
                onChange={onChange} 
                name={name}
                required={required}
                className={`font-Jakarta-regular italic text-sm sm:text-base md:text-lg lg:text-body  py-4 pl-4 mt-2 rounded-2xl border-1 ${error ? 'text-custom-red border-custom-red bg-red-background' : 'text-input-text bg-gray-background border-gray-background focus:outline-lilas'} `}
            />
            {error &&
                <div className="mt-2 pl-2 flex">
                    <Icon name="attention" />
                    <p className="ml-2 text-custom-red">{error}</p>
                </div>
            }
        </div>
    );
}

export default InputLabel;