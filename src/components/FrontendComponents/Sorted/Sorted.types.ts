import { IBankCard } from "../BankCard/BankCard.types";

export interface SortedProps {
    defaultValue: string;
    lists: SortList[];
    data?: IBankCard[]
    setSortedData?: (data: IBankCard[]) => void
}

export interface SortList {
    name: string
    key: string
}