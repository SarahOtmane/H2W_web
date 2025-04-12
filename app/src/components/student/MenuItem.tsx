import React from "react";

interface MenuItemProps {
    linkSelected: string;
    style: string;
    textColor : string
}

type MenuItemType = {
    id: number;
    title: string;
    link: string;
    select: string;
    icon: React.ReactElement;
}


// valeurs du linkSelected :
    // TBord : tableau de bord
    // portfolio : mon portfolio
    // projet : mes projets
    // information : informations compte
    // parametre : paramètres
    // abonnement : abonnement


const MenuItem : React.FC<MenuItemProps> = ({linkSelected, style, textColor}) => {

    const data : MenuItemType[] = [{
        id: 1,
        select: "TBord",
        title: "Tableau de bord",
        link: "/etudiant/tableau-de-bord",
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={linkSelected==="TBord" ? "#FF9B3E" : textColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 2V22" stroke={linkSelected==="TBord" ? "#FF9B3E" : textColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 12H22" stroke={linkSelected==="TBord" ? "#FF9B3E" : textColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>,
    },
    {
        id: 2,
        title: "Mon portfolio",
        link: "/etudiant/potfolio",
        select: "portfolio",
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={linkSelected==="portfolio" ? "#FF9B3E" : textColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18.3811 15.27V7.57999C18.3811 6.80999 17.7611 6.25 17.0011 6.31H16.9611C15.6211 6.42 13.5911 7.11001 12.4511 7.82001L12.3411 7.89002C12.1611 8.00002 11.8511 8.00002 11.6611 7.89002L11.5011 7.79001C10.3711 7.08001 8.3411 6.40999 7.0011 6.29999C6.2411 6.23999 5.62109 6.81001 5.62109 7.57001V15.27C5.62109 15.88 6.12108 16.46 6.73108 16.53L6.91107 16.56C8.29107 16.74 10.4311 17.45 11.6511 18.12L11.6811 18.13C11.8511 18.23 12.1311 18.23 12.2911 18.13C13.5111 17.45 15.6611 16.75 17.0511 16.56L17.2611 16.53C17.8811 16.46 18.3811 15.89 18.3811 15.27Z" stroke={linkSelected==="portfolio" ? "#FF9B3E" : textColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 8.1001V17.6601" stroke={linkSelected==="portfolio" ? "#FF9B3E" : textColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    },
    {
        id: 3,
        title: "Mes projets",
        link: "/etudiant/projets",
        select: "projet",
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1521_23095)">
        <path d="M8 16H5.43C3.14 16 2 14.86 2 12.57V5.43C2 3.14 3.14 2 5.43 2H10C12.29 2 13.43 3.14 13.43 5.43" stroke={linkSelected==="projet" ? "#FF9B3E" : textColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18.5703 22H14.0003C11.7103 22 10.5703 20.86 10.5703 18.57V11.43C10.5703 9.14 11.7103 8 14.0003 8H18.5703C20.8603 8 22.0003 9.14 22.0003 11.43V18.57C22.0003 20.86 20.8603 22 18.5703 22Z" stroke={linkSelected==="projet" ? "#FF9B3E" : textColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.8711 15H18.1311" stroke={linkSelected==="projet" ? "#FF9B3E" : textColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.5 16.63V13.37" stroke={linkSelected==="projet" ? "#FF9B3E" : textColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_1521_23095">
        <rect width="24" height="24" fill={linkSelected==="projet" ? "#FF9B3E" : textColor}/>
        </clipPath>
        </defs>
        </svg>
        
    },
    {
        id: 4,
        title: "Informations compte",
        link: "/etudiant/informations-compte",
        select: "information",
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.1187 12.78C12.0487 12.77 11.9587 12.77 11.8787 12.78C10.1187 12.72 8.71875 11.28 8.71875 9.50998C8.71875 7.69998 10.1787 6.22998 11.9987 6.22998C13.8087 6.22998 15.2787 7.69998 15.2787 9.50998C15.2687 11.28 13.8787 12.72 12.1187 12.78Z" stroke={linkSelected==="information" ? "#FF9B3E" : textColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18.7417 19.3801C16.9617 21.0101 14.6017 22.0001 12.0017 22.0001C9.40172 22.0001 7.04172 21.0101 5.26172 19.3801C5.36172 18.4401 5.96172 17.5201 7.03172 16.8001C9.77172 14.9801 14.2517 14.9801 16.9717 16.8001C18.0417 17.5201 18.6417 18.4401 18.7417 19.3801Z" stroke={linkSelected==="information" ? "#FF9B3E" : textColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke={linkSelected==="information" ? "#FF9B3E" : textColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        
    },
    {
        id: 5,
        title: "Paramètres",
        link: "/etudiant/parametres",
        select: "parametre",
        icon : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke={linkSelected==="parametre" ? "#FF9B3E" : textColor} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12.8801V11.1201C2 10.0801 2.85 9.22006 3.9 9.22006C5.71 9.22006 6.45 7.94006 5.54 6.37006C5.02 5.47006 5.33 4.30006 6.24 3.78006L7.97 2.79006C8.76 2.32006 9.78 2.60006 10.25 3.39006L10.36 3.58006C11.26 5.15006 12.74 5.15006 13.65 3.58006L13.76 3.39006C14.23 2.60006 15.25 2.32006 16.04 2.79006L17.77 3.78006C18.68 4.30006 18.99 5.47006 18.47 6.37006C17.56 7.94006 18.3 9.22006 20.11 9.22006C21.15 9.22006 22.01 10.0701 22.01 11.1201V12.8801C22.01 13.9201 21.16 14.7801 20.11 14.7801C18.3 14.7801 17.56 16.0601 18.47 17.6301C18.99 18.5401 18.68 19.7001 17.77 20.2201L16.04 21.2101C15.25 21.6801 14.23 21.4001 13.76 20.6101L13.65 20.4201C12.75 18.8501 11.27 18.8501 10.36 20.4201L10.25 20.6101C9.78 21.4001 8.76 21.6801 7.97 21.2101L6.24 20.2201C5.33 19.7001 5.02 18.5301 5.54 17.6301C6.45 16.0601 5.71 14.7801 3.9 14.7801C2.85 14.7801 2 13.9201 2 12.8801Z" stroke={linkSelected==="parametre" ? "#FF9B3E" : textColor} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    },
    {
        id: 6,
        title: "Abonnement",
        link: "/etudiant/abonnements",
        select: "abonnement",
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.6992 18.9801H7.29922C6.87922 18.9801 6.40922 18.6501 6.26922 18.2501L2.12922 6.67011C1.53922 5.01011 2.22922 4.50011 3.64922 5.52011L7.54922 8.31011C8.19922 8.76011 8.93922 8.53011 9.21922 7.80011L10.9792 3.11011C11.5392 1.61011 12.4692 1.61011 13.0292 3.11011L14.7892 7.80011C15.0692 8.53011 15.8092 8.76011 16.4492 8.31011L20.1092 5.70011C21.6692 4.58011 22.4192 5.15011 21.7792 6.96011L17.7392 18.2701C17.5892 18.6501 17.1192 18.9801 16.6992 18.9801Z" stroke={linkSelected==="abonnement" ? "#FF9B3E" : textColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.5 22H17.5" stroke={linkSelected==="abonnement" ? "#FF9B3E" : textColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.5 14H14.5" stroke={linkSelected==="abonnement" ? "#FF9B3E" : textColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>        
    }
    ];

    return(
        <div className="mx-4 md:px-36 mt-[-2.5rem] ">
            <div className={`flex flex-row justify-between items-center w-full py-12 px-10 rounded-[1rem] ${style}`}>
                {data.map((item) => (
                    <div key={item.id} className="flex flex-row items-center mr-4">
                        {item.icon}
                        <a href={item.link} className={`ml-2 ${linkSelected===item.select ? 'text-custom-orange' : ''}`}>{item.title}</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MenuItem;