import React from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import * as S from "./RetirementBanking.styled";
import MarketIndices from "components/FrontendComponents/MarketIndices";
import BankCard from "components/FrontendComponents/BankCard";
import Container from "components/DesignSystem/Container";
import { useIsMobile } from "hooks/useIsMobile";
import { IBankCard } from "../FrontendComponents/BankCard/BankCard.types";
import { API } from "services/finance";
import { useQuery } from "react-query";
import Sorted from "components/FrontendComponents/Sorted";
import BreadCrumb from "components/FrontendComponents/BreadCrumb";

const eytBankCard = async () => {
  const response = await API.get<IBankCard[]>("/api/v1/eyt-bank-promotion");
  return response;
};

const RetirementBanking = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const isMobile = useIsMobile();
  const { data, isLoading } = useQuery("BankCard", eytBankCard);
  const [sortedData, setSortedData] = React.useState(null);
  React.useEffect(() => {
    setSortedData(data);
  }, [data]);
  return (
    <>
      {!isMobile && <MarketIndices />}
      <Container>
        {isMobile && <MarketIndices />}
        <S.Container>
          <S.Info>
            <BreadCrumb
              data={[
                {
                  href: "/",
                  text: "Anasayfa",
                },
                {
                  text: "Emekli Bankacılığı",
                },
              ]}
            />
            <S.Title>
              Bankaların Emeklilik Promosyon ve Avantajlarını Karşılaştır
            </S.Title>
            <S.Description>
              Bankaların Emekli Bankacılığı ürünlerine HangiKredi ile ulaşın,
              karşılaştırın ve en avantajlısına hemen başvurun!
            </S.Description>
          </S.Info>
          <Sorted
            defaultValue="Önerilen Sıralama"
            data={sortedData}
            setSortedData={setSortedData}
            lists={[
              {
                name: "Önerilen Sıralama",
                key: "recommended",
              },
              {
                name: "En Düşük Promosyon",
                key: "lowest",
              },
              {
                name: "En Yüksek Promosyon",
                key: "highest",
              },
              {
                name: "Banka İsmine Göre (A-Z)",
                key: "bankNameAsc",
              },
              {
                name: "Banka İsmine Göre (Z-A)",
                key: "bankNameDesc",
              },
            ]}
          />
        </S.Container>
        <BankCard data={sortedData ? sortedData : data} isLoading={isLoading} />
        <div>
          {t("homepage.title")}
          <div>Retirement Banking {router.locale}</div>
        </div>
      </Container>
    </>
  );
};

export default RetirementBanking;
