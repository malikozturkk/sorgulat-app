import { ReactNode } from "react";

export interface IHeader {
    page: string
    logo?: ILogoProps;
    position?: 'flex-start' | 'flex-end';
    desktopNavigationItems?: IHeaderItemProps;
    membership?: boolean;
}

interface ILogoProps {
    svg?: JSX.Element | ReactNode;
    url?: string;
}

  export interface IHeaderItemProps {
    items: HeaderItemProps[];
    moreItems?: HeaderItemProps[][];
}

export interface HeaderItemProps {
    title: string;
    href?: string;
    icon?: JSX.Element | ReactNode;
    mobileIcon?: JSX.Element | ReactNode;
    active?: boolean;
    badge?: JSX.Element | ReactNode;
    subMenu?: HeaderSubMenuItemProps[];
  }

  export interface HeaderSubMenuItemProps {
    title?: string;
    icon?: JSX.Element | ReactNode;
    description?: string;
    href?: string;
  }
