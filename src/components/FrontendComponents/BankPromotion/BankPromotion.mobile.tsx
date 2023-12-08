import * as React from "react";
import Image from "next/image";
import Button from "components/DesignSystem/Button";
import * as S from "./BankPromotion.styled";
import Megaphone from "../../Icons/svg/megaphone.svg";

const BankPromotionMobile = (props) => {
  const { item, index } = props;
  return (
    <>
      <S.CardMain key={index}>
        <S.InfoMain>
          <div>
            <Image
              src={`/finance/bankImage/${item.imageUrl}`}
              alt={`${item.bankName}`}
              width={60}
              height={60}
            />
          </div>
          <S.Infos>
            <S.BankInfo>
              <S.BankName>{item.bankName}</S.BankName>
              <S.Description>{item.description}</S.Description>
            </S.BankInfo>
          </S.Infos>
        </S.InfoMain>
        <S.BenefitCard>
          <S.Info>
            {item.infos.map((info, index) => (
              <S.InfoItem color={item.color} key={index}>
                <S.InfoIcon color={item.color}>
                  <Megaphone color="#fff" fill="#fff" />
                </S.InfoIcon>
                <S.InfoText>{info}</S.InfoText>
              </S.InfoItem>
            ))}
          </S.Info>
          <S.Benefits>
            {item.benefits.map((b, index) => (
              <S.BenefitMain key={index}>
                <S.Benefit>{b.benefit}</S.Benefit>
                <S.BenefitValue>{b.value}</S.BenefitValue>
              </S.BenefitMain>
            ))}
          </S.Benefits>
        </S.BenefitCard>
      </S.CardMain>
      <S.ApplyMain>
        <S.DetailMain>
          <Button
            text="Maaşını Taşı!"
            size="default"
            shape="default"
            palette={item.color}
            onClick={() => window.open(item.applicationUrl, "_blank")}
            padding="10px 51px"
            fontSize="14px"
          />
          <S.DetailLink
            href="https://sorgulat.com/"
            target="_blank"
            color={item.color}
          >
            <div role="link">Detayı Gör</div>
          </S.DetailLink>
        </S.DetailMain>
      </S.ApplyMain>
    </>
  );
};

export default BankPromotionMobile;
