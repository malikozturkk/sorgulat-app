import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  @media (max-width: 768px) { 
    flex-direction: column;
    margin-bottom: 16px;
  }
`

export const Info = styled.div`
  max-width: 50%;
  @media (max-width: 768px) {
    margin: 16px 0;
    max-width: 100%;
  }
`

export const Title = styled.h1`
  line-height: 28px;
  font-size: 24px;
  margin-bottom: 24px;
  margin-top: 0;
  color: #0E0F11;
`

export const Description = styled.p`
  line-height: 24px;
  font-size: 16px;
  color: #626873;
  margin: 0;
`