import * as React from "react";
import { useQuery } from "react-query";
import { API } from "services/finance";
import Image from "next/image";
import Button from "components/DesignSystem/Button";
import { IBankPromotion } from "./BankPromotion.types";
import * as S from "./BankPromotion.styled";
import Megaphone from "../../Icons/svg/megaphone.svg";
import Camera from "../../Icons/svg/camera.svg";
import ArrowRight from "../../Icons/svg/arrowRight.svg";

const eytBankPromotion = async () => {
  const response = await API.get<IBankPromotion[]>(
    "/api/v1/eyt-bank-promotion"
  );
  return response;
};

const BankPromotion = () => {
  const { data, isLoading } = useQuery("bankPromotion", eytBankPromotion);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {isLoading
        ? "loading"
        : data.map((item, index) => (
            <S.CardMain key={index}>
              <S.InfoMain>
                <div>
                  <Image
                    src={`/finance/bankImage/${item.imageUrl}`}
                    alt={`${item.bankName}`}
                    width={72}
                    height={72}
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
                      <ArrowRight width={14} height={14} />
                    </div>
                    <span>QR Okut, Fırsatı Yakala!</span>
                  </S.CameraMain>
                  <Image
                    alt="İş Bankası"
                    loading="lazy"
                    width="80"
                    height="80"
                    decoding="async"
                    data-nimg="1"
                    src="https://cdn.hangikredi.com/images/retirementbanking/d8099bef-155d-4c92-b849-399f721ae883.svg"
                  />
                </S.QrMain>
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
            </S.CardMain>
          ))}
    </div>
  );
};

export default BankPromotion;
