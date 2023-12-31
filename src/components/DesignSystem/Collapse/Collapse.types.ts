export interface ICollapse {
    children: React.ReactNode;
    header: React.ReactNode | ((props: CollapsePanelInjectStates) => React.ReactNode | any);
}

export interface CollapsePanelInjectStates {
    isOpen?: boolean;
    close?: (focusableElement?: HTMLElement | React.MutableRefObject<HTMLElement>) => void;
  }