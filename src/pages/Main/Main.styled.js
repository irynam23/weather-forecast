import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 1023px) {
    display: block;
  }
`;
export const StyledLeftPart = styled.div`
  padding: 40px;
  color: black;
  width: calc(100vw - 460px);

  @media screen and (max-width: 1023px) {
    width: auto;
  }

  @media screen and (max-width: 424px) {
    padding: 10px;
  }
`;

export const StyledHeader = styled.h1`
  font-weight: normal;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 8px;
`;

export const StyledTitle = styled.div``;

export const StyledLog = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
`;

export const StyledName = styled.span`
  font-size: 16px;
`;

export const StyledBtn = styled.button`
  display: block;
  cursor: pointer;
  background-color: transparent;
  font-size: 16px;
  border: 1px solid #f0f0f0;
  padding: 4px;
  &:hover {
    border: 1px solid #63c5da;
  }
`;

export const StyledInputWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 40px;

  @media screen and (max-width: 767px) {
    margin-top: 20px;
  }
`;

export const StyledInputLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  padding: 15px 20px;
  gap: 10px;
  background-color: #f0f0f0;
  border-radius: 10px;
  width: 300px;

  @media screen and (max-width: 424px) {
    width: auto;
  }
`;

export const StyledInput = styled.input`
  background-color: transparent;
  color: black;
  border-color: transparent;
  font-size: 18px;
  outline: none;
  width: 100%;

  &::placeholder {
    color: black;
  }
`;

export const StyledIcon = styled.div``;

export const StyledList = styled.div`
  margin-top: 40px;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  gap: 40px;
  padding-bottom: 30px;
  @media screen and (max-width: 767px) {
    margin-top: 20px;
    padding-bottom: 20px;
  }
`;

export const StyledButton = styled.button`
  min-width: 245px;
  height: 225px;
  font-size: 18px;
  border: none;
  cursor: pointer;
`;

export const StyledLine = styled.div`
  margin-top: 20px;
`;

export const StyledLineTitle = styled.h3`
  font-weight: 400;
  font-size: 20px;
`;

export const StyledLineList = styled.ul`
  margin-top: 40px;
  display: flex;
  max-width: 52vw;
  overflow-x: scroll;
  gap: 20px;
  padding-bottom: 20px;

  @media screen and (max-width: 1023px) {
    max-width: 90vw;
  }

  @media screen and (max-width: 767px) {
    margin-top: 20px;
  }
`;
