import React, { ReactNode } from 'react';
import { ColorValueHex } from '../Button/Button.types';
import { InputMessageType } from '../Input/Input.types';
;

export interface IRadio {
  label: React.ReactNode | string
  checkedColor?: ColorValueHex
  checked?: boolean
  color?: ColorValueHex
  labelColor?: ColorValueHex
  size?: number
  status?: InputMessageType
  message?: React.ReactNode | string
  onChange?(value?: any, name?: string, event?: React.ChangeEvent<HTMLInputElement>): void;
}
