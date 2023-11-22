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
  } = props;

  return (
    <div>
      <StyledButton
        onClick={onClick}
        block={block}
        size={size}
        shape={shape}
        palette={palette}
        padding={padding}
        disabled={disabled}
      >
        {text} {icon}
      </StyledButton>
    </div>
  );
};

export default Button;
