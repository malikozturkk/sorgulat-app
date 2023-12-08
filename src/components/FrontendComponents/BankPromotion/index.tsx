import * as React from "react";
import { useQuery } from "react-query";
import { API } from "services/finance";
import { IBankPromotion } from "./BankPromotion.types";
import * as S from "./BankPromotion.styled";
import { useIsMobile } from "hooks/useIsMobile";
import BankPromotionMobile from "./BankPromotion.mobile";
import BankPromotionDesktop from "./BankPromotion.desktop";

const eytBankPromotion = async () => {
  const response = await API.get<IBankPromotion[]>(
    "/api/v1/eyt-bank-promotion"
  );
  return response;
};

const BankPromotion = () => {
  const { data, isLoading } = useQuery("bankPromotion", eytBankPromotion);
  const isMobile = useIsMobile();
  return (
    <S.BankPromotionMain>
      {isLoading
        ? "loading"
        : data.map((item, index) => (
            <S.CardContainer key={index}>
              {isMobile ? (
                <BankPromotionMobile item={item} index={index} />
              ) : (
                <BankPromotionDesktop item={item} index={index} />
              )}
            </S.CardContainer>
          ))}
    </S.BankPromotionMain>
  );
};

export default BankPromotion;
