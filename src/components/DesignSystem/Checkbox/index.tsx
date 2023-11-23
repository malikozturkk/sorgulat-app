import * as React from "react";
import { ICheckbox } from "./Checkbox.types";
import { useId } from "react";

import {
  CheckboxLabel,
  CheckboxInput,
  StyledCheckbox,
  Label,
  MessageMain,
  Message,
} from "./Checkbox.styled";

const Checkbox = (props: ICheckbox) => {
  const {
    label,
    checkedColor,
    color,
    labelColor,
    size,
    status,
    message,
    name,
  } = props;
  const randomId = useId();
  const [checked, setChecked] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  return (
    <>
      <CheckboxLabel
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <CheckboxInput
          type="checkbox"
          name={name}
          id={randomId}
          onChange={(event) =>
            event.target.checked ? setChecked(true) : setChecked(false)
          }
        />
        <StyledCheckbox
          checked={checked}
          color={color}
          checkedColor={checkedColor}
          size={size}
          hover={hover}
        ></StyledCheckbox>
        <Label
          labelColor={labelColor}
          status={status}
          hover={hover}
          checked={checked}
        >
          {label}
        </Label>
      </CheckboxLabel>
      {message && (
        <MessageMain>
          <Message status={status}>{message}</Message>
        </MessageMain>
      )}
    </>
  );
};

export default Checkbox;
