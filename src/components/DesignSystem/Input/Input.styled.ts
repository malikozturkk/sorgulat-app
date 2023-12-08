import styled from 'styled-components';
import { ReactNode } from 'react';
import { FormItemShape, InputMessageType } from './Input.types';
import { variant } from 'styled-system';

export const status = (props) => {
    return {
        error: {
            outlineColor: '#E12424',
            border: props.focused ? '2px solid #6AC42D' : '1px solid #E12424'
        },
        success: {
            outlineColor: '#6AC42D',
            border: props.focused ? '2px solid #6AC42D' : '1px solid #6AC42D'
        },
        warning: {
            outlineColor: '#EAA61A',
            border: props.focused ? '2px solid #6AC42D' : '1px solid #EAA61A'
        },
        default: {
            border: props.focused ? '2px solid #6AC42D' : '1px solid #A2ACAB'
        },
    }
}


export const statusMessage = (props) => {
    return {
        error: {
            color: '#E12424',
        },
        success: {
            color: '#6AC42D'
        },
        warning: {
            color: '#EAA61A',
        },
        default: {
            color: '#A2ACAB'
        },
    }
}

export const InputLabel = styled.div`
  display: inline-flex;
  line-height: 1;
`

export const Label = styled.div<{ focused: boolean, icon: ReactNode | JSX.Element | string, status: InputMessageType }>`
  ${props => variant({ prop: 'status', variants: statusMessage(props) })}
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  display: inline-flex;
  letter-spacing: 0px;
  z-index: 3;
  transition-duration: 0.1s, 0.2s, 0.1s, 0.1s;
  position: absolute;
  font-size: 15px;
  top: 30%;
  left: ${props => (props?.icon ? '36px' : '12px')};
  padding: 0px;
  ${props => props?.focused &&`
    font-size: 13px;
    top: -8px;
    left: 12px;
    padding: 0 4px;
    transition-duration: 0.1s, 0.1s, 0.2s, 0.1s;
  `}
`

export const InputMain = styled.label<{ focused: boolean, shape: FormItemShape, status: InputMessageType }>`
  border-radius: 4px;
  background-color: rgb(255, 255, 255);
  outline-offset: -2px;
  transition-duration: 0.15s;
  text-align: left;
  display: inline-flex;
  align-items: center;
  position: relative;
  line-height: 1.2;
  cursor: inherit;
  padding: 4px 12px;
  height: 38px;
  &:hover {
    border-color: ${props => (props?.status ? variant({ prop: 'status', variants: status(props) }) : props?.focused ? '#2DC44D' : 'rgb(114, 126, 124)')};
  }
  border: ${props => (props?.focused ? '2px solid #2DC44D' : props?.shape === 'default' ? '1px solid rgb(162, 172, 171)' : '')};
  ${props => variant({ prop: 'status', variants: status(props) })}

`

export const InInput = styled.div`
  width: 100%;
  min-height: 20px;
  display: inline-flex;
  align-items: center;
`

export const Icon = styled.div`
  width: 24px;
  min-width: 24px;
  line-height: 1;
  font-size: 19px;
  height: 20px;
  margin-top: 1px;
  transition-duration: 0.1s, 0.1s;
  cursor: default;
`

export const StyledInput = styled.input<{ placeholder: string }>`
  font-size: 15px;
  outline: none;
  max-width: 100%;
  border: none;
  height: 38px;
  width: 100%;
  padding: 0px;
`;


export const ErrorMessageMain = styled.div`
  opacity: 1;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  transform-origin: 50% 50%;
  position: absolute;
`

export const ErrorMessage = styled.div<{ status: InputMessageType }>`
  ${props => variant({ prop: 'status', variants: statusMessage(props) })}
  font-size: 12px;
  line-height: 1.5;
`