import searchIcon from '../assets/images/search.svg';

interface SearchBarProps {
    metier: string;
    localisation: string;
    setLocalisation: React.Dispatch<React.SetStateAction<string>>;
    setMetier: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ metier, localisation, setLocalisation, setMetier }) => {
    return (
        <div className="w-full sm:w-4/5 lg:w-3/5 bg-white px-8 py-6 rounded-[4rem] border border-gray-border font-Jakarta-medium flex flex-col sm:flex-row items-center sm:justify-between space-y-3 sm:space-y-0 sm:space-x-6 mb-10 shadow-md">

            <div className="flex flex-col w-full sm:w-2/5 sm:border-r sm:border-gray-300 sm:pr-6">
                <label className="text-subtitle font-Jakarta-bold" htmlFor="search">
                    QUOI ?
                </label>
                <input 
                    type="text"
                    placeholder="Métier, entreprise, compétences..."
                    defaultValue={metier}
                    onChange={(e) => setMetier(e.target.value)}
                    className="border-none text-body focus:outline-none text-search-text"
                />
            </div>

            <div className="flex flex-col w-full sm:w-2/5">
                <label className="text-subtitle font-Jakarta-bold" htmlFor="location">
                    OÙ ?
                </label>
                <input 
                    type="text"
                    defaultValue={localisation}
                    onChange={(e) => setLocalisation(e.target.value)}
                    placeholder="Ville, département, code postal..."
                    className="border-none text-body focus:outline-none text-search-text"
                />
            </div>

            <button className="flex items-center justify-center bg-black text-white font-Jakarta-semi-bold px-5 py-3 rounded-full transition duration-300 w-full sm:w-auto self-end sm:self-center">
                <p className="mr-2">Rechercher</p>
                <img src={searchIcon} alt="search icon" className="w-5 h-5" />
            </button>

        </div>
    );
}

export default SearchBar;
