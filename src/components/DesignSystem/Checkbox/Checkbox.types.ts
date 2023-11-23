import React, { ReactNode } from 'react';
import { ColorValueHex } from '../Button/Button.types';
import { InputMessageType } from '../Input/Input.types';
;

export interface ICheckbox {
  label?: React.ReactNode | string
  checkedColor?: ColorValueHex
  color?: ColorValueHex
  labelColor?: ColorValueHex
  size?: number
  status?: InputMessageType
  message?: React.ReactNode | string
  name?: string
}
