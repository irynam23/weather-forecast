import styled from "styled-components";

export const StyledWrapper = styled.div`
  min-width: 245px;
  height: 325px;
  border: 1px solid ${({ $isActive }) => ($isActive ? "#63C5DA" : "#F0F0F0")};
  cursor: pointer;
`;

export const StyledImage = styled.div`
  background-color: cyan;
  width: 100%;
  height: 225px;
  background-image: url(${({ $bgUrl }) => $bgUrl});
  background-size: cover;
  background-position: center;
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
