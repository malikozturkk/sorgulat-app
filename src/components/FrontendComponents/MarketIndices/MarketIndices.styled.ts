import styled from 'styled-components';
import { breakpoint, map } from 'styled-components-breakpoint';

export const MainMarket = styled.div`
  width: 100%;
  min-height: 62.5px;
  background-color: #fff;
  box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08);
    border: 1px solid transparent;
    border-radius: 8px;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 62.5px;
  gap: 24px;
  padding: 20px;
  flex-wrap: wrap;
  @media (max-width: 360px) { 
    flex-direction: column;
  }
`

export const Markets = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
`

export const InfoMain = styled.div`
  display: flex;
  flex-direction: column;
`

export const SymbolMain = styled.span`
  display: flex;
  gap: 5px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: #373f42;
  align-items: center;
  justify-content: center;
`

export const Price = styled.span`
  font-size: 15px;
  color: #363940;
  font-weight: 700;
`

export const Change = styled.span<{situation: string}>`
  font-size: 12px;
  color: ${props => props?.situation === 'caret-up' ? '#2EB961' : props?.situation === 'caret-down' ? '#EB4949' : '#373f42'};
  background-color: ${props => props?.situation === 'caret-up' ? '#EFFBF3' : props?.situation === 'caret-down' ? '#FEECEC' : '#B1B1B1'};
  padding: 1px 2px;
  font-weight: 700;
  border-radius: 4px;
`

