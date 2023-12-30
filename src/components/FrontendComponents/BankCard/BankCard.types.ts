export interface IBankCard {
    bankName: string;
    description: string
    buttonText: string;
    priority?: number;
    applicationUrl: string;
    imageUrl: string;
    color: string;
    infos: string[];
    benefits: IBefenits[];
    amount?: number;
    numberOfBranches?: string | number
    numberOfAtm?: string | number 
    phoneNumber?: string
}

export interface IBefenits {
    benefit: string
    value: string
}