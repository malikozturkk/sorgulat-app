import * as React from "react";
import Image from "next/image";
import Button from "components/DesignSystem/Button";
import * as S from "./BankCard.styled";
import Megaphone from "../../Icons/svg/megaphone.svg";
import Camera from "../../Icons/svg/camera.svg";
import ArrowRight from "../../Icons/svg/arrowRight.svg";
import QRCode from "react-qr-code";

const BankCardDesktop = (props) => {
  const { item, index } = props;
  return (
    <S.CardMain key={index}>
      <S.InfoMain>
        <div>
          <Image
            src={`/finance/bankImage/${item.imageUrl}`}
            alt={`${item.bankName}`}
            width={72}
            height={72}
            style={{ borderRadius: "8px" }}
          />
        </div>
        <S.Infos>
          <S.BankInfo>
            <S.BankName>{item.bankName}</S.BankName>
            <S.Description>{item.description}</S.Description>
          </S.BankInfo>
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
        </S.Infos>
      </S.InfoMain>
      <S.ApplyMain>
        <S.QrMain>
          <S.CameraMain>
            <div>
              <Camera width={14} height={14} />
              <ArrowRight width={14} height={14} color="#898989" />
            </div>
            <span>QR Okut, Fırsatı Yakala!</span>
          </S.CameraMain>
          <QRCode
            size={80}
            value={item.applicationUrl}
            viewBox={`0 0 256 256`}
          />
        </S.QrMain>
        <S.DetailMain>
          <Button
            text={item.buttonText}
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
    </S.CardMain>
  );
};

export default BankCardDesktop;
