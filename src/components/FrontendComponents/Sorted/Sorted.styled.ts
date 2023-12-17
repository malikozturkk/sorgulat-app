import styled from 'styled-components';

export const Main = styled.div`
  position: relative;
  margin-bottom: 16px;
  @media (max-width: 768px) { 
    width: 100%;
    margin-bottom: 0;
  }
`

export const SortedMain = styled.div<{hover: boolean, open: boolean}>`
  padding: 12px 20px;
  border: 1px solid ${(props) => props?.hover || props?.open  ? '#646ECB' : '#d8dade'};
  transition: all 0.2s ease-in-out 0s;
  background-color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  min-width: 170px;
  border-radius: ${(props) => props?.open ? '8px 8px 0 0' : '8px'};
`

export const SortedLists = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  background-color: #fff;
  cursor: pointer;
  border: 1px solid #646ECB;
  border-radius: 0 0 8px 8px;
  border-top: none;
  z-index: 100;
  box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08);
  width: 100%;
  box-sizing: border-box;
`

export const List = styled.li`
  color: #363940;
  line-height: 22px;
  font-weight: 600;
  font-size: 14px;
  padding: 8px 20px;
  &:last-child {
    border-radius: 0 0 7px 7px;
  }
  &:hover {
    background-color: #F7F7F8;
  }
`