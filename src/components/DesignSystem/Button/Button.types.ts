import React, { ReactNode } from 'react';

export type ColorValueHex = `#${string}` | string;

export type ButtonSizes = 'default' | 'medium' | 'small' | 'heightless' | 'large';
export type ButtonShapes = 'default' | 'ghost' | 'outline';

export interface IButton {
  text: string
  block?: boolean;
  size?: ButtonSizes;
  icon?: ReactNode | JSX.Element | string;
  shape?: ButtonShapes;
  palette?: ColorValueHex;
  padding?: string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>, key?: string | number) => void;
  disabled?: boolean;
}
