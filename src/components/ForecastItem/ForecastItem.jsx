import { getDay, getForecastIcon } from "../../services/utils";
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
      <StyledLineItemPic>
        <img alt={conditions} src={getForecastIcon(conditions)} />
      </StyledLineItemPic>
      <StyledLineItemText>
        {tempmax}º/{tempmin}º
      </StyledLineItemText>
    </StyledLineItem>
  );
};
