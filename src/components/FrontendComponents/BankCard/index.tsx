import * as React from "react";
import * as S from "./BankCard.styled";
import { useIsMobile } from "hooks/useIsMobile";
import BankCardMobile from "./BankCard.mobile";
import BankCardDesktop from "./BankCard.desktop";

const BankCard = (props) => {
  const { data, isLoading } = props;
  const isMobile = useIsMobile();
  return (
    <S.BankCardMain>
      {isLoading
        ? "loading"
        : data.map((item, index) => (
            <S.CardContainer key={index}>
              {isMobile ? (
                <BankCardMobile item={item} index={index} />
              ) : (
                <BankCardDesktop item={item} index={index} />
              )}
            </S.CardContainer>
          ))}
    </S.BankCardMain>
  );
};

export default BankCard;
