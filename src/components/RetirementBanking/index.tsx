import React from "react";
import * as S from "./RetirementBanking.styled";
import BankCard from "components/FrontendComponents/BankCard";
import Container from "components/DesignSystem/Container";
import { useIsMobile } from "hooks/useIsMobile";
import { IBankCard } from "../FrontendComponents/BankCard/BankCard.types";
import { API } from "services/finance";
import { useQuery } from "react-query";
import Sorted from "components/FrontendComponents/Sorted";
import BreadCrumb from "components/FrontendComponents/BreadCrumb";
import SkeletonLoader from "components/FrontendComponents/MarketIndices/SkeletonLoader";

const eytBankCard = async () => {
  const response = await API.get<IBankCard[]>("/api/v1/eyt-bank-promotion");
  return response;
};

const RetirementBanking = () => {
  let { data, isLoading } = useQuery("BankCard", eytBankCard);
  const [sortedData, setSortedData] = React.useState(null);
  const IsMobile = useIsMobile();
  React.useEffect(() => {
    setSortedData(data);
  }, [data]);
  return (
    <Container>
      <S.Container>
        <S.Info>
          <BreadCrumb
            isLoading={isLoading}
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
            {isLoading ? (
              <SkeletonLoader
                repeat={1}
                width={IsMobile ? "100%" : "560px"}
                height="56px"
              />
            ) : (
              "Bankaların Emeklilik Promosyon ve Avantajlarını Karşılaştır"
            )}
          </S.Title>
          {isLoading ? (
            <SkeletonLoader
              repeat={1}
              width={IsMobile ? "100%" : "560px"}
              height="48px"
            />
          ) : (
            <S.Description>
              Bankaların Emekli Bankacılığı ürünlerine Sorgulat ile ulaşın,
              karşılaştırın ve en avantajlısına hemen başvurun!
            </S.Description>
          )}
        </S.Info>
        <Sorted
          defaultValue="Önerilen Sıralama"
          data={sortedData}
          isLoading={isLoading}
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
              name: "Şube Sayısına Göre Azalan",
              key: "branchesDesc",
            },
            {
              name: "ATM Sayısına Göre Azalan",
              key: "atmDesc",
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
      {isLoading ? (
        <SkeletonLoader
          repeat={1}
          width={IsMobile ? "100%" : "560px"}
          margin="16px 0"
          height="20px"
        />
      ) : (
        <p style={{ margin: !IsMobile && 0 }}>
          {'"'}Emekli Bankacılığı{'"'} araması için{" "}
          <b>{sortedData && sortedData.length}</b> sonuç listeleniyor
        </p>
      )}
      <BankCard data={sortedData ? sortedData : data} isLoading={isLoading} />
    </Container>
  );
};

export default RetirementBanking;
