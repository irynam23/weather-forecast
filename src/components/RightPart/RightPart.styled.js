import styled from "styled-components";

export const StyledRightPart = styled.div`
  background-color: rgba(8, 3, 70, 0.8);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 460px;
  padding-top: 40px;

  @media screen and (max-width: 1023px) {
    width: auto;
    padding-bottom: 40px;
  }

  & .img {
    align-self: flex-end;

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
    margin-right: 10px;
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

  @media screen and (max-width: 1023px) {
    margin-top: 50px;
  }
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

  @media screen and (max-width: 424px) {
    font-size: 24px;
  }
`;

export const StyledRightText = styled.p`
  font-size: 12px;
  font-weight: 300;
  text-transform: uppercase;
  margin-top: 10px;
`;
