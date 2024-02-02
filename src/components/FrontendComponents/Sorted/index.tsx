import * as React from "react";
import * as S from "./Sorted.styled";
import * as T from "./Sorted.types";
import ArrowRight from "../../Icons/svg/arrow-right.svg";
import SkeletonLoader from "../MarketIndices/SkeletonLoader";
import { useIsMobile } from "hooks/useIsMobile";

const Sorted: React.FC<T.SortedProps> = (props) => {
  const [open, setOpen] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const IsMobile = useIsMobile();
  const ref: React.RefObject<HTMLDivElement> | any = React.useRef();
  const { defaultValue, defaultKey, lists, data, setSortedData, isLoading } =
    props;
  const [selected, setSelected] = React.useState(defaultValue);
  const toggleOpen = () => setOpen(!open);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const handleSelected = (e: T.SortList) => {
    setSelected(e.name);
    const key = e.key;

    const compareFunction = (a, b) => {
      if (key === "highest") {
        return b.amount - a.amount;
      } else if (key === "lowest") {
        return a.amount - b.amount;
      } else if (key === "branchesAsc") {
        return a.numberOfBranches - b.numberOfBranches;
      } else if (key === "branchesDesc") {
        return b.numberOfBranches - a.numberOfBranches;
      } else if (key === "atmAsc") {
        return a.numberOfAtm - b.numberOfAtm;
      } else if (key === "atmDesc") {
        return b.numberOfAtm - a.numberOfAtm;
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

  return (
    <S.Main>
      {isLoading ? (
        <SkeletonLoader
          repeat={1}
          width={IsMobile ? "100%" : "212px"}
          height="45px"
        />
      ) : (
        <div ref={ref}>
          <S.SortedMain
            onClick={toggleOpen}
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
            <S.SortedLists>
              {lists.map((list, index) => (
                <S.List onClick={() => handleSelected(list)} key={index}>
                  {list.name}
                </S.List>
              ))}
            </S.SortedLists>
          )}
        </div>
      )}
    </S.Main>
  );
};

export default Sorted;
