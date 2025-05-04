export interface AnnoncesType {
    id: number;
    title: string;
    location: string;
    teleworking: string;
    duration: string;
    missions: string[];
    profile: string;
    softSkills: string[];
    hardSkills: string[];
    software: string[];
    companyDescription: string;
    companyName: string;
    remunerationMin : string;
    remunerationMax : string;
    avantages: string[];
    derniereModif: string;
    nbProfilMatch : number;
    candidats : number;
    statut : string
}

export interface CreateAnnoncesType {
    title: string;
    location: string;
    teleworking: string;
    duration: string;
    missions: string[];
    profile: string;
    softSkills: string[];
    hardSkills: string[];
    software: string[];
    companyDescription: string;
    companyName: string;
    remunerationMin : string;
    remunerationMax : string;
    avantages: string[];
    derniereModif: string;
    nbProfilMatch : number;
    candidats : number;
    statut : string;
    secteurActivity : string;
    startDate : string
}

