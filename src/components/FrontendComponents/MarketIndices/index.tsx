import * as React from "react";
import { IMarketIndices } from "./MarketIndices.types";
import { useTranslation } from "next-i18next";
import * as S from "./MarketIndices.styled";
import axios from "axios";
import Image from "next/image";
import GraphicDown from "../../Icons/svg/graphic-down.svg";
import GraphicUp from "../../Icons/svg/graphic-up.svg";
import Minus from "../../Icons/svg/minus.svg";
import { useQuery } from "react-query";
import SkeletonLoader from "./SkeletonLoader";
import { API } from "services/finance";
import { formatPrice } from "utils/formatPrice";

const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const apiUrl = "https://api.genelpara.com/embed/altin.json";
const fetchData = async () => {
  try {
    const response = await axios.get(proxyUrl + apiUrl);
    return response.data;
  } catch (error) {
    return error;
  }
};

const directionIcon = (direction: string) => {
  return direction === "caret-up" ? (
    <GraphicUp width={15} height={15} />
  ) : direction === "caret-down" ? (
    <GraphicDown width={16} height={16} />
  ) : (
    <Minus width={14} height={7} />
  );
};

const MarketIndices = () => {
  const { t } = useTranslation("common");

  const { data, isLoading, isError } = useQuery([], () => fetchData());
  return (
    <S.MainMarket>
      <S.Container>
        {isLoading ? (
          <SkeletonLoader repeat={8} width="136.5px" />
        ) : isError ? (
          "Apide Error Var"
        ) : (
          Object.keys(data).map(
            (symbol, index) =>
              symbol !== "GAG" && (
                <S.Markets key={index}>
                  <Image
                    src={`/finance/marketIndices/${symbol}.svg`}
                    alt={`${symbol} Tutarı`}
                    width={30}
                    height={30}
                  />
                  <S.InfoMain>
                    <S.SymbolMain>
                      {t(`marketIndices.${symbol}`)}
                      {directionIcon(data[symbol].d_yon)}
                    </S.SymbolMain>
                    <S.SymbolMain>
                      <S.Price>
                        {formatPrice(data[symbol].satis, "₺", "right")}
                      </S.Price>
                      <S.Change situation={data[symbol].d_yon}>
                        {data[symbol].degisim}%
                      </S.Change>
                    </S.SymbolMain>
                  </S.InfoMain>
                </S.Markets>
              )
          )
        )}
      </S.Container>
    </S.MainMarket>
  );
};

export default MarketIndices;
