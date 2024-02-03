import styled from 'styled-components';
import { variant } from 'styled-system';
import { ColorValueHex, ButtonSizes } from './Button.types';
import { darken, lighten } from 'polished';

export const sizes = (props) => {
    return {
        default: {
            height: '50px',
            fontSize: '16px',
        },
        medium: {
            height: '40px',
            fontSize: '14px',
        },
        small: {
            height: '36px',
            fontSize: '14px',
        },
        heightless: {
            height: 'auto',
        },
        large: {
            height: '60px',
            fontSize: '18px',
        },
    }
}

export const shapes = (props: any) => {
    return {
        default: {
            backgroundColor: props?.palette ?? 'black',
            color: 'white',
            borderWidth: '0px'
        },
        ghost: {
            backgroundColor: 'transparent',
            color: props?.palette ?? 'black',
            borderWidth: '0px'
        },
        outline: {
            backgroundColor: 'transparent',
            color: props?.palette ?? 'black',
            borderWidth: '1px'
        },
    }
}

export const StyledButton = styled.button<{ shape: 'default' | 'ghost' | 'outline', block: boolean, size: ButtonSizes, palette: ColorValueHex, padding: string, disabled: boolean, fontSize: string | number }>`
  background-color: ${props => (props?.shape === 'default' ? props?.palette ?? 'black' : 'transparent')};
  border-radius: 8px;
  padding: ${props => (props?.padding ?? '10px 24px')};
  font-weight: 700;
  color: #fff;
  outline: 2px solid transparent;
  outline-offset: 2px;
  cursor: pointer;
  box-shadow: inset 0 0 0 black;
  transition: all 0.2s ease-in-out;
  width: ${props => (props?.block ? '100%' : 'auto')};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  position: relative;

  border-color: #D7DDDB;
  border-width: ${props => (props?.shape == 'outline' ? '1px' : '0px')};
  border-style: ${props => (props?.shape == 'outline' ? 'solid' : 'none')};
  ${props => variant({ prop: 'size', variants: sizes(props) })}
  ${props => variant({ prop: 'shape', variants: shapes(props) })}
  font-size: ${props => (props?.fontSize)};;

  &:disabled {
    cursor: not-allowed;
    background-color: ${props => lighten(0.465, props?.palette ?? 'black') };
    color: ${props => lighten(0.30, props?.palette ?? 'black') };
  }
  &:focus {
    background-color: ${props => props?.shape === 'default' ? darken(0.07, props?.palette ?? 'black') : lighten(0.465, props?.palette ?? 'black') };
  }
  &:not(:disabled):hover {
    background-color: ${props => props?.shape === 'default' ? darken(0.07, props?.palette ?? 'black') : lighten(0.465, props?.palette ?? 'black') };
    border-color: ${props => (props?.palette ?? 'black')};
  }
`;
