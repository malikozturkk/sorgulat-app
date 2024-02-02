import * as React from "react";
import * as S from "./BankCard.styled";
import { useIsMobile } from "hooks/useIsMobile";
import BankCardMobile from "./BankCard.mobile";
import BankCardDesktop from "./BankCard.desktop";
import SkeletonLoader from "../MarketIndices/SkeletonLoader";

const BankCard = (props) => {
  const { data, isLoading } = props;
  const isMobile = useIsMobile();
  return (
    <S.BankCardMain isLoading={isLoading}>
      {isLoading ? (
        <SkeletonLoader
          repeat={5}
          width={isMobile ? "100%" : "1122px"}
          height="250px"
          margin="0 0 12px 0"
        />
      ) : (
        data.map((item, index) => (
          <S.CardContainer key={index}>
            {isMobile ? (
              <BankCardMobile item={item} index={index} />
            ) : (
              <BankCardDesktop item={item} index={index} />
            )}
          </S.CardContainer>
        ))
      )}
    </S.BankCardMain>
  );
};

export default BankCard;
