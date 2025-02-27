import SectionTitle from "../titles/SectionTitle";
import Subtitle from "../titles/Subtitle";

import back from '../../assets/images/register_back.png';
import back2 from '../../assets/images/register_back_2.png';

interface RegisterLeftSectionProps {
    etape?: number;
}

const RegisterLeftSection: React.FC<RegisterLeftSectionProps> = ({etape}) => {
    return(
        <div 
            className={`w-2/5 rounded-l-[2rem] bg-cover bg-no-repeat relative flex flex-col justify-center items-center pb-40`}
            style={{backgroundImage: etape===3 ? `url(${back2})` : `url(${back})`}}
        >
            <div className="w-9/12 m-auto mt-14">
                <SectionTitle text='Étudiants, entreprises, écoles :' style="text-white text-center font-Jakarta-extra-bold" /> 
                <SectionTitle text='connectons les talents de demain !' style="text-center font-Jakarta-extra-bold" />
            </div>
            <div className="relative flex flex-col items-end mt-10 mr-10">
                {etape===3 ? 
                    <svg className="absolute -top-2 right-30" width="27" height="31" viewBox="0 0 27 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.2392 3.14269C26.5481 1.41062 24.6312 0.152301 23.1649 1.12466L1.03112 15.8024C-0.165131 16.5957 -0.161019 18.3535 1.03892 19.1412L18.5088 30.609C19.7087 31.3966 21.3232 30.7013 21.5753 29.2882L26.2392 3.14269Z" fill="white"/>
                        <path d="M26.2392 3.14269C26.5481 1.41062 24.6312 0.152301 23.1649 1.12466L1.03112 15.8024C-0.165131 16.5957 -0.161019 18.3535 1.03892 19.1412L18.5088 30.609C19.7087 31.3966 21.3232 30.7013 21.5753 29.2882L26.2392 3.14269Z" fill="white"/>
                        <path d="M26.2392 3.14269C26.5481 1.41062 24.6312 0.152301 23.1649 1.12466L1.03112 15.8024C-0.165131 16.5957 -0.161019 18.3535 1.03892 19.1412L18.5088 30.609C19.7087 31.3966 21.3232 30.7013 21.5753 29.2882L26.2392 3.14269Z" fill="white"/>
                        <path d="M26.2392 3.14269C26.5481 1.41062 24.6312 0.152301 23.1649 1.12466L1.03112 15.8024C-0.165131 16.5957 -0.161019 18.3535 1.03892 19.1412L18.5088 30.609C19.7087 31.3966 21.3232 30.7013 21.5753 29.2882L26.2392 3.14269Z" fill="white"/>
                        <path d="M26.2392 3.14269C26.5481 1.41062 24.6312 0.152301 23.1649 1.12466L1.03112 15.8024C-0.165131 16.5957 -0.161019 18.3535 1.03892 19.1412L18.5088 30.609C19.7087 31.3966 21.3232 30.7013 21.5753 29.2882L26.2392 3.14269Z" fill="white"/>
                    </svg>
                    :
                    <svg className="absolute -top-5 right-10" width="36" height="31" viewBox="0 0 36 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.7113 1.82936C18.9331 0.542796 17.0668 0.542798 16.2887 1.82936L0.783188 27.4649C-0.0230166 28.7978 0.936741 30.5 2.49451 30.5H33.5055C35.0633 30.5 36.023 28.7978 35.2168 27.4649L19.7113 1.82936Z" fill="white"/>
                        <path d="M19.7113 1.82936C18.9331 0.542796 17.0668 0.542798 16.2887 1.82936L0.783188 27.4649C-0.0230166 28.7978 0.936741 30.5 2.49451 30.5H33.5055C35.0633 30.5 36.023 28.7978 35.2168 27.4649L19.7113 1.82936Z" fill="white"/>
                        <path d="M19.7113 1.82936C18.9331 0.542796 17.0668 0.542798 16.2887 1.82936L0.783188 27.4649C-0.0230166 28.7978 0.936741 30.5 2.49451 30.5H33.5055C35.0633 30.5 36.023 28.7978 35.2168 27.4649L19.7113 1.82936Z" fill="white"/>
                        <path d="M19.7113 1.82936C18.9331 0.542796 17.0668 0.542798 16.2887 1.82936L0.783188 27.4649C-0.0230166 28.7978 0.936741 30.5 2.49451 30.5H33.5055C35.0633 30.5 36.023 28.7978 35.2168 27.4649L19.7113 1.82936Z" fill="white"/>
                        <path d="M19.7113 1.82936C18.9331 0.542796 17.0668 0.542798 16.2887 1.82936L0.783188 27.4649C-0.0230166 28.7978 0.936741 30.5 2.49451 30.5H33.5055C35.0633 30.5 36.023 28.7978 35.2168 27.4649L19.7113 1.82936Z" fill="white"/>
                    </svg>
                }
                <div className="bg-white w-max px-10 py-5 rounded-[2rem] m-auto">
                    <Subtitle text={etape===3 ? "À très vite !" : "Bienvenue sur Hive2Work !"} />
                </div>
            </div>
        </div>
    )
}

export default RegisterLeftSection;
