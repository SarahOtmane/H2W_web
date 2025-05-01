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

export interface Project {
    name: string;
    description: string;
    media: File[];
    cover: File[];
    hardSkills: string[];
    softSkills: string[];
    softwares: string[];
}