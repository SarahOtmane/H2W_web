export interface Portfolio {
    title: string;
    description: string;
    hardSkills: string[];
    softSkills: string[];
    metier: string;
    softwares: string[];
    experiences: Experience[];
}

export interface Experience {
    title: string;
    companyName: string;
    description: string;
    teleworking: boolean;
    startDate: string;
    endDate: string;
    stillWorking: boolean;
    location: string;
    missions: string[];
}