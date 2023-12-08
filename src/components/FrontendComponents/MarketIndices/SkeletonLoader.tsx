// SkeletonLoader.jsx

import React from "react";
import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const SkeletonLoaderContainer = styled.div<{ width: string; height: string }>`
  display: block;
  width: ${(props) => props?.width};
  height: ${(props) => props?.height};
  overflow: hidden;
  position: relative;
  background: #f0f0f0;
  border-radius: 8px;

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(-90deg, #f0f0f0 25%, #f7f7f7 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: ${shimmer} 1.5s infinite linear;
  }
`;

interface SkeletonProps {
  repeat?: number;
  height?: string;
  width?: string;
}

const SkeletonLoader: React.FC<SkeletonProps> = ({
  repeat = 1,
  width = "100%",
  height = "62.5px",
}) => (
  <>
    {Array.from({ length: repeat }, (_, index) => (
      <SkeletonLoaderContainer key={index} width={width} height={height} />
    ))}
  </>
);

export default SkeletonLoader;
