import * as React from "react";
import * as S from "./Dropdown.styled";
import { IDropdown } from "./Dropdown.types";

const Dropdown = (props: IDropdown) => {
  const [show, setShow] = React.useState(false);
  const {
    title,
    forceRender,
    defaultActiveKey,
    accordion,
    activeKey,
    children,
  } = props;
  return <div onClick={() => setShow(!show)}>{title}</div>;
};

export default Dropdown;
