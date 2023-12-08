import * as React from "react";
import { IRadio } from "./Radio.types";
import { useId } from "react";

import {
  RadioLabel,
  RadioInput,
  StyledRadio,
  Label,
  MessageMain,
  Message,
} from "./Radio.styled";

const Radio = (props: IRadio) => {
  const {
    label,
    checkedColor,
    color,
    labelColor,
    size,
    status,
    message,
    onChange,
    checked,
  } = props;
  const randomId = useId();
  const [hover, setHover] = React.useState(false);
  return (
    <>
      <RadioLabel
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <RadioInput
          type="radio"
          name="radio"
          value={randomId}
          onChange={() => onChange()}
        />
        <StyledRadio
          checked={checked}
          color={color}
          checkedColor={checkedColor}
          size={size}
          hover={hover}
          status={status}
        />
        <Label
          labelColor={labelColor}
          status={status}
          hover={hover}
          checked={checked}
        >
          {label}
        </Label>
      </RadioLabel>
      {message && (
        <MessageMain>
          <Message status={status}>{message}</Message>
        </MessageMain>
      )}
    </>
  );
};

export default Radio;
