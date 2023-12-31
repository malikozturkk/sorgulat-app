import * as React from "react";
import { ICollapse } from "./Collapse.types";
import * as S from "./Collapse.styled";

const Collapse = (props: ICollapse) => {
  const { header, children } = props;
  const [isOpen, setIsOpen] = React.useState(false);
  const contentRef = React.useRef(null);

  const renderHeader = () => {
    if (typeof header === "function") {
      return header({ isOpen });
    }
    return header;
  };

  const contentHeight =
    isOpen && contentRef.current ? contentRef.current.scrollHeight : 0;

  return (
    <S.CollapseMain>
      <S.CollapseButton onClick={() => setIsOpen(!isOpen)}>
        {renderHeader()}
      </S.CollapseButton>
      <S.CollapseChildren ref={contentRef} contentHeight={contentHeight}>
        {children}
      </S.CollapseChildren>
    </S.CollapseMain>
  );
};

export default Collapse;
