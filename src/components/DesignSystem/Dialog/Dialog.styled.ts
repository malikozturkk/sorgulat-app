import styled from 'styled-components';

export const Main = styled.div`
    position: relative;
    z-index: 1100;
`

export const BackdropMain = styled.div`
    opacity: 1;
    transition-duration: 0.1s;
    transition-timing-function: ease-in-out;
    transform-origin: 50% 50%;
`

export const Backdrop = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 0;
`

export const ContentMain = styled.div`
    position: fixed;
    width: 100%;
    z-index: 10;
    height: 100%;
`

export const ChildrenMain = styled.div`
    opacity: 1;
    position: fixed;
    z-index: 10;
    max-width: 100%;
    width: 100%;
    margin: 0 auto;
    min-height: 160px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition-duration: 0.1s;
    transition-timing-function: ease-in-out;
    transform-origin: 50% 50%;
    top: 50%;
    transform: translateY(-50%);
`

export const Children = styled.div`
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    width: 520px;
    max-width: 100%;
    margin: 0px auto;
    border-radius: 8px;
    min-height: 160px;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;
`

export const TitleMain = styled.section`
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
    transform-origin: 50% 50%;
`

export const Title = styled.h1`
    padding: 16px 16px 0px;
    margin: 0px;
    line-height: 1;
    font-weight: 600;
    font-size: 18px;
    color: rgb(19, 23, 23);
`

export const Content = styled.div`
    padding: 8px 16px 36px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
`

export const Footer = styled.div`
    padding: 16px 24px;
    background-color: rgb(248, 250, 249);
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    display: flex;
    justify-content: flex-end;
`

export const Close = styled.button`
    background-color: transparent;
    color: rgb(19, 23, 23);
    border-radius: 4px;
    height: 32px;
    border: none;
    position: absolute;
    right: 8px;
    top: 8px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
`