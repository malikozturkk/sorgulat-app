import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const BankCardMain = styled.div<{isLoading?: string}>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: ${(props) => props?.isLoading ? '0' : '0 16px'};
  margin-top: 8px;
`

export const CardContainer = styled.div`
  box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08);
  padding: 16px;
  border: 1px solid transparent;
  border-radius: 8px;
  width: 100%;
  background-color: #fff;
  @media (max-width: 768px) { 
    padding: 16px;
  }
  &:not(:last-child) {
    margin-bottom: 12px;
    @media (max-width: 768px) { 
      margin-bottom: 8px;
    }
  }
`

export const CardMain = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 768px) { 
    align-items: flex-start;
  }
`

export const InfoMain = styled.div`
  display: flex;
  gap: 16px;
  flex: 1 1 0%;
  @media (max-width: 768px) { 
    margin-top: 16px;
  }
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
`

export const BankInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  gap: 2px;
  @media (max-width: 768px) { 
    gap: 8px;
  }
`

export const BankName = styled.div`
  line-height: 22px;
  color: #0E0F11;
  font-weight: 700;
  font-size: 16px;
`

export const Description = styled.div`
  line-height: 18px;
  color: #363940;
  font-weight: 600;
  font-size: 14px;
  @media (max-width: 768px) { 
    margin-bottom: 16px;
  }
`

export const BenefitCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 16px;
  @media (max-width: 768px) { 
    gap: 20px;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`

export const Benefits = styled.div`
  display: flex;
  width: 100%;
`

export const BankInfosMain = styled.div`
  display: flex;
  width: 100%;
  gap: 4px;
`

export const BankInfos = styled.div`
  padding: 6px;
  display: flex;
  font-weight: 700;
  align-items: center;
  color: #282b30;
  border-radius: 15px;
  border: 1px solid #dee2e6;
  font-size: 12px;
  gap: 8px;
`

export const InfoItem = styled.div<{ color: string }>`
  background-color: ${props => lighten(0.45, props?.color)};
  border-radius: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`

export const InfoIcon = styled.div<{ color: string }>`
  background-color: ${props => props?.color};
  padding: 0 8px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  display: flex;
  align-items: center;
  height: 100%;
`

export const InfoText = styled.span`
  max-height: 52px;
  color: #0E0F11;
  line-height: 20px;
  font-weight: 600;
  font-size: 14px;
  margin: 0 12px;
  padding: 8px 0;
`

export const BenefitMain = styled.div`
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  &:first-child {
    padding-left: initial;
  }
  &:not(:last-child) {
    border-right: 1px solid #D8D8D8;
  }
  @media (max-width: 768px) { 
    flex: 1 1 0%;
    padding: 0 12px;
  }
`

export const Benefit = styled.span`
  line-height: 20px;
  margin-bottom: 4px;
  color: #626873;
  font-size: 14px;
`

export const BenefitValue = styled.span`
  line-height: 20px;
  font-weight: 600;
  color: #0E0F11;
  font-size: 14px;
`

export const ApplyMain = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  @media (max-width: 768px) { 
    margin-top: 20px;
    align-items: center;
  }
`

export const DetailMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 14px;
  @media (max-width: 768px) { 
    flex-direction: row-reverse;
  }
`

export const DetailLink = styled.a<{color: string}>`
  text-decoration: inherit;
  font-size: 14px;
  > div {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 700;
    color: ${props => props?.color};
    &:hover {
      color: ${props => darken(0.07, props?.color)};
    }
  }
`

export const QrMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
`

export const CameraMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 68px;
  margin-right: 14px;
  > div {
    display: flex;
    margin-bottom: 12px;
  }
  > span {
    color: #898989;
    line-height: 14px;
    font-weight: 600;
    font-size: 9px;
    text-align: center;
  }
`