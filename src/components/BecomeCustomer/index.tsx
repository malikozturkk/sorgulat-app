import React from "react";
import * as S from "./BecomeCustomer.styled";
import { IBankCard } from "../FrontendComponents/BankCard/BankCard.types";
import { API } from "services/finance";
import { useQuery } from "react-query";
import BankCard from "components/FrontendComponents/BankCard";
import Container from "components/DesignSystem/Container";
import Sorted from "components/FrontendComponents/Sorted";
import BreadCrumb from "components/FrontendComponents/BreadCrumb";
import { useIsMobile } from "hooks/useIsMobile";
import SkeletonLoader from "components/FrontendComponents/MarketIndices/SkeletonLoader";

const eytBankCard = async () => {
  const response = await API.get<IBankCard[]>("/api/v1/become-customer");
  return response;
};

const BecomeCustomer = () => {
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
                text: "Bankaların Müşterisi Ol",
              },
            ]}
          />
          <S.Title>
            {isLoading ? (
              <SkeletonLoader
                repeat={1}
                width={IsMobile ? "100%" : "560px"}
                height="28px"
              />
            ) : (
              "Şubeye Gitmeden Banka Hesabı Açın!"
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
              Sorgulat ile şubeye gitmeden bankaları karşılaştır ve seçtiğin
              bankanın hemen müşterisi ol!
            </S.Description>
          )}
        </S.Info>
        <Sorted
          defaultValue="Önerilen Sıralama"
          defaultKey="recommended"
          data={sortedData}
          setSortedData={setSortedData}
          isLoading={isLoading}
          lists={[
            {
              name: "Önerilen Sıralama",
              key: "recommended",
            },
            {
              name: "Şube Sayısına Göre Artan",
              key: "branchesAsc",
            },
            {
              name: "Şube Sayısına Göre Azalan",
              key: "branchesDesc",
            },
            {
              name: "ATM Sayısına Göre Artan",
              key: "atmAsc",
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
          height="20px"
          margin="16px 0"
        />
      ) : (
        <p style={{ margin: !IsMobile && 0 }}>
          {'"'}Bankaların Müşterisi Ol{'"'} araması için{" "}
          <b>{sortedData && sortedData.length}</b> sonuç listeleniyor
        </p>
      )}
      <BankCard data={sortedData ? sortedData : data} isLoading={isLoading} />
    </Container>
  );
};

export default BecomeCustomer;
