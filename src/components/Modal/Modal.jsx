import {
  StyledButtonBox,
  StyledButtonCancel,
  StyledButtonSave,
  StyledContainer,
  StyledForm,
  StyledIcon,
  StyledInputEnd,
  StyledInputStart,
  StyledLabelEnd,
  StyledLabelStart,
  StyledTitle,
  StyledTitleBox,
  StyledWrapper,
} from "./Modal.styled";

import { ReactComponent as Cross } from "../../assets/icons/cross.svg";
import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import cities from "../../assets/cities";

export const Modal = ({ setIsOpen, handleSubmit }) => {
  const [location, setLocation] = useState("");
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");
  const isValid = !!location && !!date1 && !!date2;

  return (
    <StyledContainer
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setIsOpen(false);
        }
      }}
    >
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
            if (!isValid) {
              return;
            }
            handleSubmit({ location, date1, date2 });
            setIsOpen(false);
          }}
        >
          <p>* City</p>
          <Dropdown
            placeholder="Please select a city"
            selectedOption={location}
            onOptionChange={(option) => {
              setLocation(option);
            }}
            options={Object.keys(cities)}
          />
          <StyledLabelStart>
            * Start date
            <StyledInputStart
              type="date"
              name="data"
              placeholder="Select date"
              min={new Date().toISOString().split("T")[0]}
              max={
                new Date(Date.now() + 1209600000).toISOString().split("T")[0]
              }
              onChange={(e) => {
                setDate1(e.target.value);
              }}
            />
          </StyledLabelStart>
          <StyledLabelEnd>
            * End date
            <StyledInputEnd
              type="date"
              name="data"
              placeholder="Select date"
              min={new Date().toISOString().split("T")[0]}
              max={
                new Date(Date.now() + 1209600000).toISOString().split("T")[0]
              }
              onChange={(e) => {
                setDate2(e.target.value);
              }}
            />
          </StyledLabelEnd>

          <StyledButtonBox>
            <StyledButtonCancel type="button" onClick={() => setIsOpen(false)}>
              Cancel
            </StyledButtonCancel>
            <StyledButtonSave type="submit" disabled={!isValid}>
              Save
            </StyledButtonSave>
          </StyledButtonBox>
        </StyledForm>
      </StyledWrapper>
    </StyledContainer>
  );
};
