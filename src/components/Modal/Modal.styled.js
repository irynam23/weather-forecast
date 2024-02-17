import styled from "styled-components";

export const StyledContainer = styled.div`
  position: fixed;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export const StyledWrapper = styled.div`
  background-color: white;
  width: 620px;
  min-height: 500px;
`;

export const StyledTitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #bfbfbf;
  padding: 20px 0;
`;

export const StyledTitle = styled.h2`
  margin-left: 20px;
`;

export const StyledIcon = styled.button`
  background-color: transparent;
  margin-right: 20px;
  border: none;
  cursor: pointer;
`;

export const StyledForm = styled.form`
  padding: 0 20px;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const StyledLabelCity = styled.label`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const StyledInputCity = styled.input`
  background-color: transparent;
  border: 1px solid #bfbfbf;
  font-size: 18px;
  padding: 10px;

  &::placeholder {
    color: #bfbfbf;
  }
`;

export const StyledInputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  color: #bfbfbf;
  border: 1px solid #bfbfbf;
  font-size: 18px;
`;

export const StyledLabelStart = styled.label`
  display: flex;
  flex-direction: column;
  gap: 15px;

  & > input:focus + div {
    background-color: red;
  }
`;

export const StyledInputStart = styled.input`
  background-color: transparent;
  border: 1px solid #bfbfbf;
  font-size: 18px;
  padding: 10px;
  color: #bfbfbf;

  &::placeholder {
    color: #bfbfbf;
  }
`;

export const StyledLabelEnd = styled.label`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const StyledInputEnd = styled.input`
  background-color: transparent;
  border: 1px solid #bfbfbf;
  font-size: 18px;
  padding: 10px;
  color: #bfbfbf;

  &::placeholder {
    color: #bfbfbf;
  }
`;

export const StyledButtonBox = styled.div`
  margin-top: 80px;
  display: flex;
  padding: 20px 0px;
  border-top: 1px solid #bfbfbf;
  gap: 10px;
  justify-content: end;
`;

export const StyledButtonCancel = styled.button`
  width: 75px;
  display: block;
  padding: 10px;
  background-color: transparent;
  border: 1px solid #bfbfbf;
  cursor: pointer;
`;

export const StyledButtonSave = styled.button`
  width: 62px;
  display: block;
  padding: 10px;
  background-color: #1890ff;
  color: white;
  border: none;
  cursor: pointer;
  margin-right: 20px;
`;
