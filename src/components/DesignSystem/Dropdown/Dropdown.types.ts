import React, { ReactElement } from 'react';

export interface IDropdown {
  title?: string | React.ReactNode;
  forceRender?: boolean;
  defaultActiveKey?: string | number;
  accordion?: boolean;
  activeKey?: number | string;
  children?: Array<ReactElement<CollapsePanelProps>> | ReactElement<CollapsePanelProps>;
}

export interface CollapsePanelInjectStates {
  isOpen?: boolean;
  close?: (focusableElement?: HTMLElement | React.MutableRefObject<HTMLElement>) => void;
}

export interface CollapsePanelProps {
  forceRender?: boolean;
  key?: number | string;
  panelKey?: any;
  title?: React.ReactNode | ((props: CollapsePanelInjectStates) => React.ReactNode | any);
  open?: boolean;
  defaultOpen?: boolean;
  accordion?: boolean;
  variant?: 'ghost' | 'border';
  shape?: 'default' | 'unstyled';
  children?: (React.ReactNode | React.ReactChildren | JSX.Element | Element) | ((props: CollapsePanelInjectStates) => React.ReactNode);
  onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>, key?: string | number) => void;
}
