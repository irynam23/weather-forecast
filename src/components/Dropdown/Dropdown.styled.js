import styled from "styled-components";

export const StyledWrapper = styled.div`
  position: relative;

  & .field {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid #bfbfbf;
    font-size: 18px;
    padding: 10px;
    color: ${({ $hasSelectedValue }) =>
      $hasSelectedValue ? "black" : "#bfbfbf"};
  }
`;

export const StyledDropdown = styled.div`
  position: absolute;
  max-height: ${({ $isOpen }) => ($isOpen ? "300px" : 0)};
  width: 100%;
  background-color: #f0f0f0;

  overflow: ${({ $isOpen }) => ($isOpen ? "auto" : "hidden")};

  & div {
    cursor: pointer;
    padding: ${({ $isOpen }) => ($isOpen ? "15px 20px" : 0)};
    &:hover {
      background-color: white;
    }
  }
`;
