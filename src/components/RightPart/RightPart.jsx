import { useEffect, useState } from "react";
import { calcDiff, getDay, getForecastIcon } from "../../services/utils";
import {
  StyledRightPart,
  StyledRightBox,
  StyledRightTitle,
  StyledRightTemp,
  StyledRightCity,
  StyledRightTimeBox,
  StyledRightTimeItem,
  StyledRightTime,
  StyledRightText,
} from "./RightPart.styled";
import { fetchCurrentWeather } from "../../services/api";

import penguin from "../../assets/images/penguin.png";

export const RightPart = ({ city, startDate }) => {
  const [timer, setTimer] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimer(calcDiff(startDate));
    });
    return () => {
      clearInterval(timerId);
    };
  }, [startDate]);

  useEffect(() => {
    const getWeather = async () => {
      const weather = await fetchCurrentWeather(city);
      setCurrentWeather(weather.days[0]);
    };
    getWeather();
  }, [city]);

  return (
    <StyledRightPart>
      <div className="img">
        <img src={penguin} alt="penguin" />
      </div>
      <StyledRightBox>
        <StyledRightTitle>{getDay()}</StyledRightTitle>
        <StyledRightTemp>
          <img
            alt={currentWeather?.icon || "-"}
            src={getForecastIcon(currentWeather?.icon)}
          />
          {currentWeather?.temp || "-"}
          <sup>ºC</sup>
        </StyledRightTemp>
        <StyledRightCity>{city}</StyledRightCity>
      </StyledRightBox>
      <StyledRightTimeBox>
        <StyledRightTimeItem>
          <StyledRightTime>{timer?.days || 0}</StyledRightTime>
          <StyledRightText>days</StyledRightText>
        </StyledRightTimeItem>
        <StyledRightTimeItem>
          <StyledRightTime>{timer?.hours || 0}</StyledRightTime>
          <StyledRightText>hours</StyledRightText>
        </StyledRightTimeItem>
        <StyledRightTimeItem>
          <StyledRightTime>{timer?.minutes || 0}</StyledRightTime>
          <StyledRightText>minutes</StyledRightText>
        </StyledRightTimeItem>
        <StyledRightTimeItem>
          <StyledRightTime>{timer?.seconds || 0}</StyledRightTime>
          <StyledRightText>seconds</StyledRightText>
        </StyledRightTimeItem>
      </StyledRightTimeBox>
    </StyledRightPart>
  );
};
