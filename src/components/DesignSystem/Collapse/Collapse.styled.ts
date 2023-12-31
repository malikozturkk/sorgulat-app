import styled from 'styled-components';

export const CollapseMain = styled.div`
    width: 100%;
`

export const CollapseButton = styled.button`
    width: 100%;
    cursor: pointer;
    background: none;
    border: none;
    font-size: 16px;
    padding: 0;
`

export const CollapseChildren = styled.div<{ contentHeight: string }>`
    height: ${(props) => props.contentHeight}px;
    transition: height 0.3s ease;
    overflow: hidden;
`