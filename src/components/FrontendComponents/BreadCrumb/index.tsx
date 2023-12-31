import * as React from "react";
import * as S from "./BreadCrumb.styled";
import * as T from "./BreadCrumb.types";
import ArrowRight from "../../Icons/svg/arrow-right.svg";
import Link from "next/link";
import SkeletonLoader from "../MarketIndices/SkeletonLoader";

const BreadCrumb: React.FC<T.BreadCrumbProps> = (props) => {
  const { data, isLoading } = props;
  return (
    <S.Nav>
      <S.Ul>
        {isLoading ? (
          <SkeletonLoader repeat={data.length} width="100px" height="22px" />
        ) : (
          data.map((item, index) => (
            <S.List key={index}>
              {item.href ? (
                <>
                  <Link href={item.href}>
                    <span>{item.text}</span>
                  </Link>
                  <ArrowRight fill="#848a97" width={10} height={10} />
                </>
              ) : (
                <S.Text>{item.text}</S.Text>
              )}
            </S.List>
          ))
        )}
      </S.Ul>
    </S.Nav>
  );
};

export default BreadCrumb;
