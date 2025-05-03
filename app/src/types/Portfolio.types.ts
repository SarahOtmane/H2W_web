export interface Portfolio {
    title: string;
    description: string;
    hardSkills: string[];
    softSkills: string[];
    metier: string;
    softwares: string[];
    experiences: Experience[];
    projects: Project[];
}

export interface PortfolioWithBase64 {
    title: string;
    description: string;
    hardSkills: string[];
    softSkills: string[];
    metier: string;
    softwares: string[];
    experiences: Experience[];
    projects: ProjectWithBase64[];
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

export interface ProjectWithBase64 {
    name: string;
    description: string;
    media: string[];
    cover: File[];
    hardSkills: string[];
    softSkills: string[];
    softwares: string[];
}

export interface Avis {
    id: number;
    person: string;
    lienEtudiant: string;
    profession: string;
    description: string;
    rate: number;
}