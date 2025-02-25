import Pg from "../Pg";

interface RegisterCardProps {
    icon: string;
    titre: string;
    description: string;
    selected: boolean;
}


const RegisterCard: React.FC<RegisterCardProps> = ({icon, titre, description, selected}) =>{
    return(
        <div className={`flex flex-col w-1/3 items-center p-2 rounded-2  border-1 ${selected? 'bg-lilas bg-opacity-20 border-lilas' : 'bg-white border-black'}`}>
            <article className="flex flex-row items-center">
                <img src={icon} alt={titre}/>
                <p className="font-Jakarta-bold text-sm sm:text-base md:text-lg lg:text-body">{titre}</p>
            </article>
            <Pg text={description}/>
        </div>
    )
}

export default RegisterCard;