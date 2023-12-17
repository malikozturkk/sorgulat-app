import React from "react";
import * as S from "./BecomeCustomer.styled";
import { IBankCard } from "../FrontendComponents/BankCard/BankCard.types";
import { API } from "services/finance";
import { useQuery } from "react-query";
import BankCard from "components/FrontendComponents/BankCard";
import Container from "components/DesignSystem/Container";
import Sorted from "components/FrontendComponents/Sorted";
import BreadCrumb from "components/FrontendComponents/BreadCrumb";

const eytBankCard = async () => {
  const response = await API.get<IBankCard[]>("/api/v1/become-customer");
  return response;
};

const BecomeCustomer = () => {
  const { data, isLoading } = useQuery("BankCard", eytBankCard);
  const [sortedData, setSortedData] = React.useState(null);
  React.useEffect(() => {
    setSortedData(data);
  }, [data]);
  return (
    <Container>
      <S.Container>
        <S.Info>
          <BreadCrumb
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
          <S.Title>Şubeye Gitmeden Banka Hesabı Açın!</S.Title>
          <S.Description>
            Sorgulat ile şubeye gitmeden bankaları karşılaştır ve seçtiğin
            bankanın hemen müşterisi ol!
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
      <p style={{ margin: 0 }}>
        {'"'}Bankaların Müşterisi Ol{'"'} araması için{" "}
        <b>{sortedData && sortedData.length}</b> sonuç listeleniyor
      </p>
      <BankCard data={sortedData ? sortedData : data} isLoading={isLoading} />
    </Container>
  );
};

export default BecomeCustomer;
