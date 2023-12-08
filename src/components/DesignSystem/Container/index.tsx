import * as React from "react";
import { StyledMain, StyledContainer, StyledContain } from "./Container.styled";

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <StyledMain>
      <StyledContainer>
        <StyledContain>{children}</StyledContain>
      </StyledContainer>
    </StyledMain>
  );
};

export default Container;
