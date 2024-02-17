import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;
export const StyledLeftPart = styled.div`
  padding: 40px;
  color: black;
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
  gap: 70px;
`;

export const StyledButton = styled.button`
  width: 245px;
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
`;

export const StyledLineItem = styled.li``;

export const StyledLineItemTitle = styled.p`
  color: #9a9a9a;
  font-size: 12px;
`;

export const StyledLineItemPic = styled.div`
  margin-top: 30px;
  background-color: cyan;
  width: 55px;
  height: 55px;
`;

export const StyledLineItemText = styled.p`
  margin-top: 25px;
`;

export const StyledRightPart = styled.div`
  background-color: #110e3b;
  color: white;
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  padding: 300px 90px;
`;

export const StyledRightBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const StyledRightTitle = styled.h3`
  font-size: 48px;
`;

export const StyledRightTemp = styled.p`
  font-size: 84px;
  font-weight: 250;
`;

export const StyledRightCity = styled.h4`
  font-size: 42px;
  font-weight: 250;
`;

export const StyledRightTimeBox = styled.ul`
  margin-top: 200px;
  display: flex;
  gap: 30px;
`;

export const StyledRightTimeItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledRightTime = styled.p`
  font-size: 36px;
  font-weight: 800;
`;

export const StyledRightText = styled.p`
  font-size: 12px;
  font-weight: 300;
  text-transform: uppercase;
  margin-top: 10px;
`;
