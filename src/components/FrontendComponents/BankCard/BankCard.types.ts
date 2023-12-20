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
}

export interface IBefenits {
    benefit: string
    value: string
}