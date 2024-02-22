import styled from "styled-components";

export const StyledWrapper = styled.div`
  /* display: grid;
  grid-template-columns: 2fr 1fr; */
  display: flex;
`;
export const StyledLeftPart = styled.div`
  padding: 40px;
  color: black;
  width: calc(100% - 500px);
`;

export const StyledHeader = styled.h1`
  font-weight: normal;
`;

export const StyledInputWrapper = styled.label`
  margin-top: 70px;
  position: relative;
  display: flex;
  align-items: center;
  padding: 15px 20px;
  gap: 10px;
  background-color: #f0f0f0;
  border-radius: 10px;
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
  margin-top: 60px;
  display: flex;
  /* max-width: 60vw; */
  overflow-x: scroll;
  gap: 70px;
`;

export const StyledButton = styled.button`
  min-width: 245px;
  height: 225px;
  font-size: 18px;
  border: none;
  cursor: pointer;
`;

export const StyledLine = styled.div`
  margin-top: 46px;
`;

export const StyledLineTitle = styled.h3`
  font-weight: 400;
  font-size: 20px;
`;

export const StyledLineList = styled.ul`
  margin-top: 70px;
  display: flex;
  max-width: 50vw;
  overflow-x: scroll;
  gap: 20px;
  padding-bottom: 20px;
`;
