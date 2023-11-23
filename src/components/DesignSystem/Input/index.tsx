import * as React from "react";
import {
  StyledInput,
  InputMain,
  InputLabel,
  Label,
  InInput,
  Icon,
  ErrorMessageMain,
  ErrorMessage,
} from "./Input.styled";
import { IInput } from "./Input.types";

const Input = (props: IInput) => {
  const { label, placeholder, errorMessage, status, disabled, icon, shape } =
    props;
  const [focused, setFocused] = React.useState(false);
  return (
    <>
      <InputMain focused={focused} shape={shape} status={status}>
        <InputLabel>
          <Label focused={focused} icon={icon} status={status}>
            {label}
          </Label>
        </InputLabel>
        <InInput>
          {icon && <Icon>{icon}</Icon>}
          <StyledInput
            type="text"
            placeholder={focused && placeholder}
            onFocus={() => setFocused(true)}
            onBlur={(e) => setFocused(e.target.value.length > 0 ? true : false)}
          />
        </InInput>
      </InputMain>
      {errorMessage && (
        <ErrorMessageMain>
          <ErrorMessage status={status}>{errorMessage}</ErrorMessage>
        </ErrorMessageMain>
      )}
    </>
  );
};

export default Input;
