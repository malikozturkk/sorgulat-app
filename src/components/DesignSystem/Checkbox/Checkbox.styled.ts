import styled from 'styled-components';
import { variant } from 'styled-system';
import { ColorValueHex } from '../Button/Button.types';
import { statusMessage } from '../Input/Input.styled';
import { InputMessageType } from '../Input/Input.types';
import { lighten } from 'polished';

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: flex-start;
  position: relative;
  cursor: pointer;
  flex-direction: row;
  width: 100%;
`

export const CheckboxInput = styled.input`
  position: absolute;
  visibility: hidden;
  width: 0px;
  height: 0px;
`

export const StyledCheckbox = styled.span<{ checked: boolean, checkedColor: ColorValueHex, color: ColorValueHex, size: number, hover: boolean}>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: 1px solid;
  border-radius: 4px;
  width: ${props => (props?.size ?? '14')}px;
  height: ${props => (props?.size ?? '14')}px;
  margin-right: 8px;
  margin-top: 4px;
  position: relative;
  border-color: rgb(147, 157, 154);
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0px;
    height: 0px;
    border: none;
    background-color: transparent;
    transform: translate(-50%, -50%);
    transform-origin: 50% 50%;
  }
  border-color: ${props => (props?.checked ? (props?.checkedColor ?? '#646ECB') : props?.hover && 'rgb(114, 126, 124)' )};
  background-color: ${props => (props?.checked && (props?.checkedColor ?? '#646ECB'))};
  color: ${props => (props?.checked && (props?.color ?? '#fff'))};
  ${props => props?.checked &&`
    &::before {
      width: 100%;
      height: 100%;
      content: '✓';
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  `}
`

export const Label = styled.div<{ labelColor: ColorValueHex, status: InputMessageType, hover: boolean, checked: boolean }>`
  font-size: 14px;
  display: flex;
  flex: 1 1 0%;
  cursor: pointer;
  color: ${props => props?.labelColor ?? 'rgb(19, 23, 23)'};
  ${props => variant({ prop: 'status', variants: statusMessage() } ?? 'rgb(19, 23, 23)')};
  color: ${props => (props?.hover && !props?.checked) && lighten(0.30, props?.labelColor ?? 'rgb(19, 23, 23)')};
  line-height: 24px;
`

export const MessageMain = styled.div`
  opacity: 1;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  transform-origin: 50% 50%;
`

export const Message = styled.div<{status: InputMessageType}>`
  color: rgb(19, 23, 23);
  ${props => variant({ prop: 'status', variants: statusMessage() } ?? 'rgb(19, 23, 23)')}
  font-size: 12px;
  line-height: 1.5;
`

