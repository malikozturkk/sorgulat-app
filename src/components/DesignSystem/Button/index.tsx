import * as React from "react";
import { StyledButton } from "./Button.styled";
import { IButton } from "./Button.types";

const Button = (props: IButton) => {
  const {
    text,
    block,
    size,
    icon,
    shape,
    palette,
    padding,
    onClick,
    disabled,
    fontSize,
  } = props;

  return (
    <StyledButton
      onClick={onClick}
      block={block}
      size={size}
      shape={shape}
      palette={palette}
      padding={padding}
      disabled={disabled}
      fontSize={fontSize}
    >
      {text} {icon}
    </StyledButton>
  );
};

export default Button;
