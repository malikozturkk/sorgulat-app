import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const CardMain = styled.div`
  padding: 16px;
  box-shadow: 0px 7px 24px rgba(20,20,43,.05);
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 8px;
  width: 808px;
  @media (max-width: 768px) { 
    padding: 16px;
    flex-direction: column;
  }
  &:not(:last-child) {
    margin-bottom: 12px;
    @media (max-width: 768px) { 
      margin-bottom: 8px;
    }
  }
`

export const InfoMain = styled.div`
  display: flex;
  gap: 16px;
  flex: 1 1 0%;
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
`

export const BankInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`

export const BankName = styled.div`
  line-height: 22px;
  margin-bottom: 2px;
  color: #0E0F11;
  font-weight: 700;
  font-size: 16px;
`

export const Description = styled.div`
  line-height: 18px;
  color: #363940;
  font-weight: 600;
  font-size: 14px;
`

export const BenefitCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`

export const Benefits = styled.div`
  margin-top: 16px;
  display: flex;
  width: 100%;
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