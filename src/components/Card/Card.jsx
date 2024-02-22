import cities from "../../assets/cities";
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
      <StyledImage $bgUrl={cities[trip.city]}></StyledImage>
      <StyledTextWrapper>
        <StyledName>{trip.city}</StyledName>
        <StyledData>
          {trip.date1} – {trip.date2}
        </StyledData>
      </StyledTextWrapper>
    </StyledWrapper>
  );
};
