import * as React from "react";
import * as S from "./Sorted.styled";
import * as T from "./Sorted.types";
import ArrowRight from "../../Icons/svg/arrow-right.svg";
import SkeletonLoader from "../MarketIndices/SkeletonLoader";

const Sorted: React.FC<T.SortedProps> = (props) => {
  const [open, setOpen] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const ref: React.RefObject<HTMLDivElement> | any = React.useRef();
  const { defaultValue, defaultKey, lists, data, setSortedData, isLoading } =
    props;
  const [selected, setSelected] = React.useState(defaultValue);

  React.useEffect(() => {
    const checkIfClickedOutside = (e) => {
      open && ref.current && !ref.current.contains(e.target)
        ? setOpen((oldState) => !oldState)
        : null;
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [open]);

  const handleSelected = (e: T.SortList) => {
    setSelected(e.name);
    const key = e.key;

    const compareFunction = (a, b) => {
      if (key === "highest") {
        return b.amount - a.amount;
      } else if (key === "lowest") {
        return a.amount - b.amount;
      } else if (key === "bankNameAsc") {
        return a.bankName.localeCompare(b.bankName);
      } else if (key === "bankNameDesc") {
        return b.bankName.localeCompare(a.bankName);
      } else if (key === "recommended") {
        return b.priority - a.priority;
      }
    };

    const sorted = [...data].sort(compareFunction);
    setSortedData(sorted);
    setOpen(false);
  };

  return isLoading ? (
    <SkeletonLoader repeat={1} width="210px" height="45px" />
  ) : (
    <S.Main>
      <S.SortedMain
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        hover={hover}
        open={open}
      >
        <span>{selected}</span>
        <ArrowRight
          fill={hover || open ? "#646ECB" : "#848a97"}
          width={14}
          height={14}
          style={{
            transition: "all 0.2s ease-in-out 0s",
            transform: open ? "rotate(270deg)" : "rotate(90deg)",
          }}
        />
      </S.SortedMain>
      {open && (
        <S.SortedLists ref={ref}>
          {lists.map((list, index) => (
            <S.List onClick={() => handleSelected(list)} key={index}>
              {list.name}
            </S.List>
          ))}
        </S.SortedLists>
      )}
    </S.Main>
  );
};

export default Sorted;
