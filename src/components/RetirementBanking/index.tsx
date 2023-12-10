import React from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import MarketIndices from "components/FrontendComponents/MarketIndices";
import BankPromotion from "components/FrontendComponents/BankPromotion";
import Container from "components/DesignSystem/Container";
import { useIsMobile } from "hooks/useIsMobile";
import Header from "components/FrontendComponents/Header";
import SorgulatLogo from "../Icons/svg/sorgulat-logo.svg";
import { DefaultDesktopNavigationItems } from "components/FrontendComponents/Header/Header.data";

const RetirementBanking = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const isMobile = useIsMobile();
  return (
    <>
      <Header
        desktopNavigationItems={DefaultDesktopNavigationItems}
        logo={{
          url: "/",
          svg: <SorgulatLogo />,
        }}
      />
      {!isMobile && <MarketIndices />}
      <Container>
        {isMobile && <MarketIndices />}
        <BankPromotion />
        <div>
          {t("homepage.title")}
          <div>Retirement Banking {router.locale}</div>
        </div>
      </Container>
    </>
  );
};

export default RetirementBanking;
