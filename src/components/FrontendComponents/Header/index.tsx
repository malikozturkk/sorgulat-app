import * as React from "react";
import { IHeader } from "./Header.types";
import * as S from "./Header.styled";
import Link from "next/link";
import Image from "next/image";
import ArrowDown from "../../Icons/svg/arrow-right.svg";
import ArrowForward from "../../Icons/svg/arrowRight.svg";
import MobileMenu from "../../Icons/svg/mobile-menu.svg";
import Close from "../../Icons/svg/close.svg";
import ArrowRight from "../../Icons/svg/arrow-right.svg";
import { useIsMobile } from "hooks/useIsMobile";
import Collapse from "components/DesignSystem/Collapse";

const Header: React.FC<IHeader> = (props) => {
  const [subMenuOpen, setSubMenuOpen] = React.useState(null);
  const [subMenuItemHovered, setSubMenuItemHovered] = React.useState(null);
  const [showMobileMenu, setShowMobileMenu] = React.useState(null);
  React.useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showMobileMenu]);
  const isMobile = useIsMobile();
  const handleClick = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  const { logo, position, desktopNavigationItems, membership } = props;
  return (
    <S.HeaderMain>
      {logo && (
        <Link href={logo.url} onClick={() => setShowMobileMenu(false)}>
          {logo.svg}
        </Link>
      )}
      <S.Main>
        {!isMobile ? (
          <S.HeaderNav>
            {desktopNavigationItems?.items?.map((item, index) => (
              <S.HeaderNavItem
                open={item.subMenu && subMenuOpen === index}
                key={item.href || index}
                onMouseEnter={() => setSubMenuOpen(index)}
                onMouseLeave={() => setSubMenuOpen(false)}
                style={{
                  backgroundColor: subMenuOpen === index && "#F7F7F8",
                }}
              >
                {item.icon && item.icon}
                <Link
                  href={item.href}
                  style={{
                    fontSize: "15px",
                    lineHeight: "24px",
                    color: subMenuOpen === index ? "#646ECB" : "#2a2a2a",
                    textDecoration: "inherit",
                  }}
                >
                  {item.title}
                </Link>
                {item.subMenu && (
                  <ArrowDown
                    width={15}
                    height={15}
                    style={{
                      transition: "all 0.2s ease-in-out 0s",
                      fill: subMenuOpen === index ? "#646ECB" : "#848a97",
                      transform:
                        subMenuOpen === index
                          ? "rotate(270deg)"
                          : "rotate(90deg)",
                    }}
                  />
                )}
                {item.subMenu && subMenuOpen === index && (
                  <S.SubMenuContainer>
                    <S.HeaderNavSubMenu>
                      {item?.subMenu?.map((subMenuItem, index) => (
                        <S.SubLink
                          key={item.href || index}
                          onMouseEnter={() => setSubMenuItemHovered(index)}
                          onMouseLeave={() => setSubMenuItemHovered(false)}
                        >
                          <Link
                            href={subMenuItem.href}
                            style={{
                              textDecoration: "inherit",
                              height: "100%",
                            }}
                          >
                            <S.SubItem>
                              <S.TitleMain>
                                {subMenuItem.icon && (
                                  <Image
                                    src={
                                      subMenuItemHovered === index
                                        ? `/finance/header/hover-${subMenuItem.icon}`
                                        : `/finance/header/${subMenuItem.icon}`
                                    }
                                    alt={`${subMenuItem.title}`}
                                    width={20}
                                    height={20}
                                  />
                                )}
                                <S.Title hover={subMenuItemHovered === index}>
                                  {subMenuItem.title}
                                </S.Title>
                                {subMenuItemHovered === index && (
                                  <ArrowForward
                                    width={25}
                                    height={25}
                                    color="#646ECB"
                                  />
                                )}
                              </S.TitleMain>
                              <S.Description>
                                {subMenuItem.description}
                              </S.Description>
                            </S.SubItem>
                          </Link>
                        </S.SubLink>
                      ))}
                    </S.HeaderNavSubMenu>
                  </S.SubMenuContainer>
                )}
                {item.badge && (
                  <S.BadgeMain>
                    <S.Badge>{item.badge}</S.Badge>
                  </S.BadgeMain>
                )}
              </S.HeaderNavItem>
            ))}
          </S.HeaderNav>
        ) : (
          <S.MobileHeaderContainer>
            <S.MobileButton onClick={handleClick}>
              {showMobileMenu ? (
                <Close width={32} height={32} fill="#646ECB" />
              ) : (
                <MobileMenu width={32} height={32} />
              )}
            </S.MobileButton>
            <S.MobileMenuMain show={showMobileMenu}>
              <S.HeaderNav>
                <ul style={{ width: "100%" }}>
                  {desktopNavigationItems?.items?.map((item, index) => {
                    const active = item.href === props.page;
                    return (
                      <S.MobileHeaderNavItem active={active} key={index}>
                        {item.subMenu ? (
                          <Collapse
                            header={({ isOpen }) => (
                              <S.CollapseMain>
                                <Link
                                  onClick={() => setShowMobileMenu(false)}
                                  href={item.href}
                                  style={{
                                    height: "50px",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "20px",
                                  }}
                                >
                                  {item.mobileIcon && item.mobileIcon}
                                  <span>{item.title}</span>
                                </Link>
                                <ArrowRight
                                  fill="#646ECB"
                                  width="32px"
                                  height="22px"
                                  style={{
                                    transform: isOpen
                                      ? "rotate(270deg)"
                                      : "rotate(90deg)",
                                    transition: "all 0.3s ease-in-out",
                                    margin: "0 16px",
                                  }}
                                />
                              </S.CollapseMain>
                            )}
                            children={
                              <S.CollapseList>
                                {item.subMenu.map((sub, index) => (
                                  <S.List key={index}>
                                    <Link
                                      href={sub.href}
                                      onClick={() => setShowMobileMenu(false)}
                                    >
                                      {sub.title}
                                    </Link>
                                  </S.List>
                                ))}
                              </S.CollapseList>
                            }
                          />
                        ) : (
                          <Link
                            onClick={() => setShowMobileMenu(false)}
                            href={item.href}
                            style={{
                              height: "50px",
                              width: "100%",
                              display: "flex",
                              alignItems: "center",
                              gap: "20px",
                            }}
                          >
                            {item.mobileIcon && item.mobileIcon}
                            <span>{item.title}</span>
                          </Link>
                        )}
                      </S.MobileHeaderNavItem>
                    );
                  })}
                </ul>
              </S.HeaderNav>
            </S.MobileMenuMain>
          </S.MobileHeaderContainer>
        )}
      </S.Main>
    </S.HeaderMain>
  );
};

export default Header;
