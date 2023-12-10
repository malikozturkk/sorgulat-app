import React from "react";
import { IBankCard } from "../FrontendComponents/BankCard/BankCard.types";
import { API } from "services/finance";
import { useQuery } from "react-query";
import BankCard from "components/FrontendComponents/BankCard";
import Container from "components/DesignSystem/Container";

const eytBankCard = async () => {
  const response = await API.get<IBankCard[]>("/api/v1/become-customer");
  return response;
};

const BecomeCustomer = () => {
  const { data, isLoading } = useQuery("BankCard", eytBankCard);
  return (
    <Container>
      <BankCard data={data} isLoading={isLoading} />
    </Container>
  );
};

export default BecomeCustomer;
