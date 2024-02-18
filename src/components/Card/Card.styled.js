import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 245px;
  height: 325px;
  border: 1px solid ${({ $isActive }) => ($isActive ? "#63C5DA" : "#F0F0F0")};
`;

export const StyledImage = styled.div`
  background-color: cyan;
  width: 100%;
  height: 225px;
`;

export const StyledTextWrapper = styled.div`
  padding: 30px 25px;
`;

export const StyledName = styled.h3`
  font-weight: normal;
  font-size: 16px;
`;

export const StyledData = styled.p`
  color: #9a9a9a;
  margin-top: 15px;
  font-size: 14px;
`;
