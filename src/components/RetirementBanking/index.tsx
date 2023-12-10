import React from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import MarketIndices from "components/FrontendComponents/MarketIndices";
import BankCard from "components/FrontendComponents/BankCard";
import Container from "components/DesignSystem/Container";
import { useIsMobile } from "hooks/useIsMobile";
import { IBankCard } from "../FrontendComponents/BankCard/BankCard.types";
import { API } from "services/finance";
import { useQuery } from "react-query";

const eytBankCard = async () => {
  const response = await API.get<IBankCard[]>("/api/v1/eyt-bank-promotion");
  return response;
};

const RetirementBanking = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const isMobile = useIsMobile();
  const { data, isLoading } = useQuery("BankCard", eytBankCard);
  return (
    <>
      {!isMobile && <MarketIndices />}
      <Container>
        {isMobile && <MarketIndices />}
        <BankCard data={data} isLoading={isLoading} />
        <div>
          {t("homepage.title")}
          <div>Retirement Banking {router.locale}</div>
        </div>
      </Container>
    </>
  );
};

export default RetirementBanking;
