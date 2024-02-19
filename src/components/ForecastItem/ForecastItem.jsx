import { getDay } from "../../services/utils";
import {
  StyledLineItem,
  StyledLineItemPic,
  StyledLineItemText,
  StyledLineItemTitle,
} from "./ForecastItem.styled";

export const ForecastItem = ({ conditions, datetime, tempmax, tempmin }) => {
  return (
    <StyledLineItem>
      <StyledLineItemTitle>{getDay(datetime)}</StyledLineItemTitle>
      <StyledLineItemPic>{conditions}</StyledLineItemPic>
      <StyledLineItemText>
        {tempmax} / {tempmin}
      </StyledLineItemText>
    </StyledLineItem>
  );
};
