

interface InputLabelProps {
    label: string;
    value?: string;
    placeholder: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

const InputLabel: React.FC<InputLabelProps> = ({label, setValue, value, placeholder}) => {
    return (
        <div className="flex flex-col">
            <label className="font-Jakarta-medium text-sm sm:text-base md:text-lg lg:text-body">{label}</label>
            <input type="text" defaultValue={value} placeholder={placeholder} onChange={(e) => setValue(e.target.defaultValue)} className={`font-Jakarta-regular text-sm sm:text-base md:text-lg lg:text-body text-input-text bg-gray-background py-4 pl-4 mt-2 rounded-2xl border-1 border-gray-background focus:outline-lilas`}/>
        </div>
    );
}

export default InputLabel;