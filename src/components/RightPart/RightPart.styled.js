import styled from "styled-components";

export const StyledRightPart = styled.div`
  background-color: #110e3b;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  padding-top: 40px;

  & .img {
    display: flex;
    width: 100%;
    justify-content: end;
    padding-right: 40px;
    margin-bottom: 100px;

    & img {
      height: 60px;
      width: 60px;
    }
  }
`;

export const StyledRightBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const StyledRightTitle = styled.h3`
  font-size: 36px;
`;

export const StyledRightTemp = styled.div`
  font-size: 72px;
  font-weight: 250;
  display: flex;

  & img {
    width: 84px;
  }

  & sup {
    font-size: 24px;
  }
`;

export const StyledRightCity = styled.h4`
  font-size: 36px;
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
