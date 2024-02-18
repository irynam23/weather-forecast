import {
  StyledButtonBox,
  StyledButtonCancel,
  StyledButtonSave,
  StyledContainer,
  StyledForm,
  StyledIcon,
  StyledInputCity,
  StyledInputEnd,
  StyledInputStart,
  StyledLabelCity,
  StyledLabelEnd,
  StyledLabelStart,
  StyledTitle,
  StyledTitleBox,
  StyledWrapper,
} from "./Modal.styled";

import { ReactComponent as Cross } from "../../icons/cross.svg";
import { useState } from "react";

export const Modal = ({ setIsOpen, handleSubmit }) => {
  const [location, setLocation] = useState("");
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");

  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledTitleBox>
          <StyledTitle>Create trip</StyledTitle>
          <StyledIcon onClick={() => setIsOpen(false)}>
            <Cross width="20px" fill="#BFBFBF" />
          </StyledIcon>
        </StyledTitleBox>
        <StyledForm
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit({ location, date1, date2 });
            setIsOpen(false);
          }}
        >
          <StyledLabelCity>
            * City
            <StyledInputCity
              type="text"
              name="text"
              placeholder="Please select a city"
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
          </StyledLabelCity>
          <StyledLabelStart>
            * Start date
            <StyledInputStart
              type="date"
              name="data"
              placeholder="Select date"
              onChange={(e) => {
                setDate1(e.target.value);
              }}
            />
            {/* <StyledInputBox>Select date</StyledInputBox> */}
          </StyledLabelStart>
          <StyledLabelEnd>
            * End date
            <StyledInputEnd
              type="date"
              name="data"
              placeholder="Select date"
              onChange={(e) => {
                setDate2(e.target.value);
              }}
            />
          </StyledLabelEnd>

          <StyledButtonBox>
            <StyledButtonCancel type="button" onClick={() => setIsOpen(false)}>
              Cancel
            </StyledButtonCancel>
            <StyledButtonSave type="submit">Save</StyledButtonSave>
          </StyledButtonBox>
        </StyledForm>
      </StyledWrapper>
    </StyledContainer>
  );
};
