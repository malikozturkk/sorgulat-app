import styled from 'styled-components';

export const HeaderMain = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08);
    padding: 0 16px;
    height: 80px;
`

export const Main = styled.div`
    display: flex;
    align-items: center;
`

export const HeaderNav = styled.nav`
    display: flex;
    align-items: center;
`

export const MobileHeaderContainer = styled.div`
    display: flex;
    align-items: center;
`

export const MobileButton = styled.button`
    border: none;
    background: none;
    padding: 0;
`

export const MobileMenuMain = styled.div<{show: boolean}>`
    position: fixed;
    width: 100%;
    z-index: 13;
    inset: 80px 0px 0px;
    height: calc(100% - 80px);
    background-color: white;
    color: #646ECB;
    transform: ${(props) => props?.show ? 'translateX(0%)' : 'translateX(100%)'};
    transition: transform 0.5s;
`

export const MobileHeaderNavItem = styled.li<{ active: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding-left: 16px;
    position: relative;
    &:not(:last-child) {
        border-bottom: 1px solid #646ECB;
    }
    
    ${props => props.active && `
        &::before {
            content: "";
            position: absolute;
            left: 0px;
            top: 0px;
            width: 4px;
            height: 50px;
            border-radius: 0px 6px 6px 0px;
            background-color: #646ECB;
            transition-property: width;
            transition-duration: 0.2s;
            transition-timing-function: ease-in-out;
        }
    `}
`

export const HeaderNavItem = styled.div<{ open: boolean }>`
    padding: 28px 12px;
    display: flex;
    gap: 6px;
    align-items: center;
    cursor: pointer;
    position: ${(props) => !props?.open && 'relative'};
`

export const SubMenuContainer = styled.div`
    display: block;
    padding: 32px 0;
    box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08);
    cursor: default;
    width: 100%;
    position: absolute;
    background-color: #F7F7F8;
    left: 0;
    top: 80px;
    z-index: 10;
`

export const BadgeMain = styled.div`
    position: absolute;
    padding: 4px 6px;
    border-radius: 100px;
    background-color: #646ECB;
    top: 12px;
    right: -15px;
    z-index: 10;
`

export const Badge = styled.div`
    color: rgb(255, 255, 255);
    font-size: 11px;
    font-weight: 600;
    line-height: normal;
`

export const HeaderNavSubMenu = styled.ul`
    width: 100%;
    padding: 0 16px;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    row-gap: 32px;
    column-gap: 40px;
    margin: 0 auto;
    @media (min-width: 768px) { 
        max-width: 768px;
    }

    @media (min-width: 820px) { 
        max-width: 820px;
    }

    @media (min-width: 1024px) { 
        max-width: 1024px;
    }

    @media (min-width: 1120px) { 
        max-width: 1120px;
    }
`

export const SubLink = styled.li`
    width: 330px;
    min-height: 130px;
`

export const SubItem = styled.div`
    color: #1D1E21;
    padding: 24px 20px;
    background-color: #ffffff;
    border-radius: 8px;
`

export const TitleMain = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    height: 25px;
`

export const Title = styled.div<{ hover }>`
    display: flex;
    justify-content: space-between;
    width: 100%;
    line-height: 22px;
    font-weight: 600;
    font-size: 14px;
    color: ${({ hover }) => hover ? '#646ECB' : '#1D1E21'};
`

export const Description = styled.div`
    color: #848A97;
    line-height: 18px;
    font-size: 12px;
    margin-top: 8px;
`

export const CollapseList = styled.ul`
    display: flex;
    gap: 10px;
    flex-direction: column;
    margin-top: 10px;
    margin-bottom: 14px;
`

export const List = styled.li`

`

export const CollapseMain = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`