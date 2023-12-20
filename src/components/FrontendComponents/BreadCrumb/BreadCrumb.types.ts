
export interface BreadCrumbProps {
    data: BreadCrumbDataProps[];
    isLoading?: boolean;
}

export interface BreadCrumbDataProps {
    href?: string;
    text: string;
}