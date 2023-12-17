import * as React from "react";
import { IHeader } from "./Header.types";
import * as S from "./Header.styled";
import Link from "next/link";
import Image from "next/image";
import ArrowDown from "../../Icons/svg/arrow-right.svg";
import ArrowRight from "../../Icons/svg/arrowRight.svg";

const Header: React.FC<IHeader> = (props) => {
  const [subMenuOpen, setSubMenuOpen] = React.useState(null);
  const [subMenuItemHovered, setSubMenuItemHovered] = React.useState(null);
  const {
    logo,
    position,
    desktopNavigationItems,
    mobileNavigationItems,
    membership,
  } = props;
  return (
    <S.HeaderMain>
      {logo && <Link href={logo.url}>{logo.svg}</Link>}
      <S.Main>
        <S.HeaderNav>
          {desktopNavigationItems?.items?.map((item, index) => (
            <S.HeaderNavItem
              key={item.href || index}
              onMouseEnter={() => setSubMenuOpen(index)}
              onMouseLeave={() => setSubMenuOpen(false)}
              style={{ backgroundColor: subMenuOpen === index && "#F7F7F8" }}
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
                          style={{ textDecoration: "inherit", height: "100%" }}
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
                                <ArrowRight
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
            </S.HeaderNavItem>
          ))}
        </S.HeaderNav>
      </S.Main>
    </S.HeaderMain>
  );
};

export default Header;
