import React from 'react';

import back from "../../assets/images/student/titrepage_img.svg";

interface TitrePageProps {
    title: string;
}

const TitrePage : React.FC<TitrePageProps> = ({title}) => {
    return(
        <div className='bg-lilas text-white pt-12 pb-20 rounded-[1rem] mt-[-.5rem]' style={{ backgroundImage: `url(${back})`, backgroundRepeat: 'no-repeat', backgroundPosition: '85% 70%' }}>
            <h1 className='font-Jakarta-bold text-[36px] text-center'>{title}</h1>
        </div>
    )
}

export default TitrePage;