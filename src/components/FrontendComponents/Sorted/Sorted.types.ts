import { IBankCard } from "../BankCard/BankCard.types";

export interface SortedProps {
    defaultValue: string;
    defaultKey: string;
    lists: SortList[];
    data?: IBankCard[]
    isLoading?: boolean
    setSortedData?: (data: IBankCard[]) => void
}

export interface SortList {
    name: string
    key: string
}