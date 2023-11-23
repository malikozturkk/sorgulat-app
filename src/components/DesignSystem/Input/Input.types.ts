import React, { ReactNode } from 'react';

export type InputMessageType = 'error' | 'success' | 'warning' | 'default';
export type FormItemShape = 'default' | 'borderless';

export interface IInput {
  label?: React.ReactNode | string
  placeholder: string
  errorMessage?: string | any;
  status?: InputMessageType;
  disabled?: boolean;
  icon?: ReactNode | JSX.Element | string;
  shape?: FormItemShape;
}
