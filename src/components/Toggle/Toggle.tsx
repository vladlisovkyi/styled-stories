import React from "react";
import styled from "styled-components";

interface IToggle {
  toggled: string;
  onToggle?: () => void;
}
const ToggleWrapper = styled.div`
  width: 50px;
  min-width: 50px;
  height: 25px;
  border-radius: 25px;
  border: 1px solid #666;
  display: flex;
  margin-left: auto;
  background-image: linear-gradient(
    to bottom,
    ${(p) => p.theme.primaryColor},
    ${(p) => p.theme.secondaryColor}
  );
`;

const Notch = styled.div<IToggle>`
  height: 21px;
  width: 21px;
  border: 1px solid #666;
  margin-top: 1px;
  background: white;
  border-radius: 50%;
  transition: transform 0.1s linear;
  transform: translate(${(p) => (p.toggled === 'true' ? "26px" : "1px")});
`;

export function Toggle({ toggled, onToggle }: IToggle) {
  return (
    <ToggleWrapper onClick={onToggle}>
      <Notch toggled={toggled} />
    </ToggleWrapper>
  );
}
