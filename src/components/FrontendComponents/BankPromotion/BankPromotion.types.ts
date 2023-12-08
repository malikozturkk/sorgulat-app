export interface IBankPromotion {
    bankName: string;
    description: string
    applicationUrl: string;
    imageUrl: string;
    color: string;
    infos: string[];
    benefits: IBefenits[];
}

export interface IBefenits {
    benefit: string
    value: string
}