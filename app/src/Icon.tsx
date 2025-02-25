import React from 'react';

const icons = {
    registerStudent: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.9993 13.9999C17.221 13.9999 19.8327 11.3882 19.8327 8.16659C19.8327 4.94492 17.221 2.33325 13.9993 2.33325C10.7777 2.33325 8.16602 4.94492 8.16602 8.16659C8.16602 11.3882 10.7777 13.9999 13.9993 13.9999Z" stroke="#1D1D1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M24.0218 25.6667C24.0218 21.1517 19.5302 17.5 14.0002 17.5C8.47018 17.5 3.97852 21.1517 3.97852 25.6667" stroke="#1D1D1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    ),

    registerCompany: (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.25 27.5002H6.25C3.75 27.5002 2.5 26.2502 2.5 23.7502V13.7502C2.5 11.2502 3.75 10.0002 6.25 10.0002H12.5V23.7502C12.5 26.2502 13.75 27.5002 16.25 27.5002Z" stroke="#1D1D1B" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.6375 5C12.5375 5.375 12.5 5.7875 12.5 6.25V10H6.25V7.5C6.25 6.125 7.375 5 8.75 5H12.6375Z" stroke="#1D1D1B" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17.5 10.0002V16.2502" stroke="#1D1D1B" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22.5 10.0002V16.2502" stroke="#1D1D1B" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21.25 21.2502H18.75C18.0625 21.2502 17.5 21.8127 17.5 22.5002V27.5002H22.5V22.5002C22.5 21.8127 21.9375 21.2502 21.25 21.2502Z" stroke="#1D1D1B" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.5 16.25V21.25" stroke="#1D1D1B" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.502 23.7502V6.25024C12.502 3.75024 13.752 2.50024 16.252 2.50024H23.752C26.252 2.50024 27.502 3.75024 27.502 6.25024V23.7502C27.502 26.2502 26.252 27.5002 23.752 27.5002H16.252C13.752 27.5002 12.502 26.2502 12.502 23.7502Z" stroke="#1D1D1B" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    ),

    registerSchool: (
        <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.1955 18.0864C13.8638 18.9051 15.8174 18.9045 17.4852 18.0849L24.9547 14.4141C26.455 13.6768 26.4425 11.5336 24.9336 10.8139L17.4219 7.23113C15.7891 6.45234 13.8921 6.45182 12.2589 7.22971L4.73456 10.8135C3.22443 11.5327 3.21185 13.6777 4.71346 14.4146L12.1955 18.0864Z" stroke="#231F20" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
            <path d="M23.4843 15.1374V19.8391C14.4379 28.8172 6.06055 20.0062 6.06055 20.0062V15.0771" stroke="#231F20" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
            <path d="M26 12L26.5899 13.618V19.0017" stroke="#231F20" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
            <path d="M27.7918 20.4449C27.9112 19.7773 27.4647 19.1397 26.7944 19.0207C26.1241 18.9018 25.484 19.3466 25.3646 20.0143C25.2452 20.6819 25.6918 21.3196 26.362 21.4385C27.0323 21.5574 27.6724 21.1126 27.7918 20.4449Z" stroke="#231F20" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
            <path d="M27.13 21.405L27.8817 24.0539C27.9723 24.3732 27.7325 24.6904 27.4007 24.6904H25.7097C25.3683 24.6904 25.1273 24.3559 25.2354 24.0321L26.1021 21.4361" stroke="#231F20" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
        </svg>
    ),
    
    research: (
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5 19L15.1569 14.6569M15.1569 14.6569C16.6046 13.2091 17.5 11.2091 17.5 9C17.5 4.58172 13.9183 1 9.5 1C5.08172 1 1.5 4.58172 1.5 9C1.5 13.4183 5.08172 17 9.5 17C11.7091 17 13.7091 16.1046 15.1569 14.6569Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    ),

};

type IconProps = {
    name: keyof typeof icons;
};

const Icon: React.FC<IconProps> = ({ name }) => {
    return icons[name] || null;
};

export default Icon;