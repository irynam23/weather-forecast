import {
  StyledData,
  StyledImage,
  StyledName,
  StyledTextWrapper,
  StyledWrapper,
} from "./Card.styled";

export const Card = ({ trip, onCardClick, isActive }) => {
  return (
    <StyledWrapper onClick={onCardClick} $isActive={isActive}>
      <StyledImage></StyledImage>
      <StyledTextWrapper>
        <StyledName>{trip.city}</StyledName>
        <StyledData>
          {trip.date1} – {trip.date2}
        </StyledData>
      </StyledTextWrapper>
    </StyledWrapper>
  );
};
