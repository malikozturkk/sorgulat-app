import styled from 'styled-components';
import { variant } from 'styled-system';
import { ColorValueHex } from '../Button/Button.types';
import { InputMessageType } from '../Input/Input.types';
import { lighten } from 'polished';

export const status = () => {
  return {
      error: {
          outlineColor: '#E12424',
          border: '2px solid #E12424'
      },
      success: {
          outlineColor: '#6AC42D',
          border: '2px solid #6AC42D'
      },
      warning: {
          outlineColor: '#EAA61A',
          border: '2px solid #EAA61A'
      },
      default: {
          border: '2px solid #A2ACAB'
      },
  }
}

export const statusMessage = (props) => {
  return {
      error: {
          color: props.checked ? 'initial' : '#E12424',
      },
      success: {
          color: props.checked ? 'initial' : '#6AC42D'
      },
      warning: {
          color: props.checked ? 'initial' : '#EAA61A',
      },
      default: {
          color: props.checked ? 'initial' : '#A2ACAB'
      },
  }
}

export const RadioLabel = styled.label`
  display: flex;
  align-items: flex-start;
  position: relative;
  cursor: pointer;
  flex-direction: row;
  width: 100%;
`

export const RadioInput = styled.input`
  position: absolute;
  visibility: hidden;
  width: 0px;
  height: 0px;
`

export const StyledRadio = styled.span<{ checked: boolean, checkedColor: ColorValueHex, color: ColorValueHex, size: number, hover: boolean, status: InputMessageType}>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  width: ${props => (props?.size ?? '14')}px;
  height: ${props => (props?.size ?? '14')}px;
  margin-right: 8px;
  margin-top: 4px;
  position: relative;
  border: 2px solid rgb(147, 157, 154);
  border-radius: 50%;
  ${props => variant({ prop: 'status', variants: status() })}

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0px;
    height: 0px;
    background-color: transparent;
    transform: translate(-50%, -50%);
    transform-origin: 50% 50%;
    border-radius: 50%;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    transition: color 0.2s ease 0s, border-color ease 0s, width ease 0s, height ease 0s, background-color ease 0s;
  }
  border-color: ${props => (props?.checked ? (props?.checkedColor ?? '#646ECB') : props?.hover && 'rgb(114, 126, 124)' )};
  color: ${props => (props?.checked && (props?.color ?? '#fff'))};
  &::before {
    background-color: ${props => (props?.checked && (props?.checkedColor ?? '#646ECB'))};
  }
  ${props => props?.checked &&`
    &::before {
      width: 10px;
      height: 10px;
      content: '';
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
  ${props => variant({ prop: 'status', variants: statusMessage(props) } ?? 'rgb(19, 23, 23)')};
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
  ${props => variant({ prop: 'status', variants: statusMessage(props) } ?? 'rgb(19, 23, 23)')}
  font-size: 12px;
  line-height: 1.5;
`

