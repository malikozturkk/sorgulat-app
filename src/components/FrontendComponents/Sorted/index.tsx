import * as React from "react";
import * as S from "./Sorted.styled";
import * as T from "./Sorted.types";
import ArrowRight from "../../Icons/svg/arrow-right.svg";
import SkeletonLoader from "../MarketIndices/SkeletonLoader";
import { useIsMobile } from "hooks/useIsMobile";
import Dialog from "components/DesignSystem/Dialog";
import Radio from "components/DesignSystem/Radio";
import Button from "components/DesignSystem/Button";

const Sorted: React.FC<T.SortedProps> = (props) => {
  const [open, setOpen] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const IsMobile = useIsMobile();
  const ref: React.RefObject<HTMLDivElement> | any = React.useRef();
  const { defaultValue, lists, data, setSortedData, isLoading } = props;
  const [selected, setSelected] = React.useState(defaultValue);
  const toggleOpen = () => {
    if (IsMobile) {
      setShow(true);
    } else {
      setOpen(!open);
    }
  };

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
    console.log(sorted, "sorted bu");
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
          {show && IsMobile ? (
            <Dialog
              title="Sırala"
              open={show}
              onClose={() => setShow(false)}
              footer={
                <Button
                  text="Kapat"
                  size="default"
                  shape="default"
                  onClick={() => setShow(false)}
                  block={true}
                  palette="rgb(100, 110, 203)"
                />
              }
            >
              {lists.map((list, index) => (
                <S.RadioMain>
                  <Radio
                    label={list.name}
                    onChange={() => {
                      handleSelected(list);
                      setShow(false);
                    }}
                    key={index}
                    checked={list.name === selected}
                    checkedColor="#646ECB"
                  ></Radio>
                </S.RadioMain>
              ))}
            </Dialog>
          ) : open && !IsMobile ? (
            <S.SortedLists>
              {lists.map((list, index) => (
                <S.List onClick={() => handleSelected(list)} key={index}>
                  {list.name}
                </S.List>
              ))}
            </S.SortedLists>
          ) : null}
        </div>
      )}
    </S.Main>
  );
};

export default Sorted;
