import { Card } from "../../components/Card/Card";
import {
  StyledWrapper,
  StyledLeftPart,
  StyledInput,
  StyledList,
  StyledLine,
  StyledRightPart,
  StyledHeader,
  StyledInputWrapper,
  StyledIcon,
  StyledButton,
  StyledRightBox,
  StyledRightTitle,
  StyledRightTemp,
  StyledRightCity,
  StyledRightTimeBox,
  StyledRightTimeItem,
  StyledRightTime,
  StyledRightText,
  StyledLineTitle,
  StyledLineList,
  StyledLineItem,
  StyledLineItemPic,
  StyledLineItemText,
  StyledLineItemTitle,
} from "./Main.styled";

import { Modal } from "../../components/Modal/Modal";

import { ReactComponent as Search } from "../../icons/search.svg";
import { useEffect, useState } from "react";
import { fetchWeather } from "../../servises/api";

const initialTrips = JSON.parse(
  localStorage.getItem("trips") ||
    JSON.stringify([
      { city: "London", date1: "2024-02-23", date2: "2024-03-20" },
    ])
);

export const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chosenIndex, setChosenIndex] = useState(0);
  const [trips, setTrips] = useState(initialTrips);

  useEffect(() => {
    localStorage.setItem("trips", JSON.stringify(trips));
  }, [trips]);

  useEffect(() => {
    const getWeather = async () => {
      const { city, date1, date2 } = trips[chosenIndex];
      const weather = await fetchWeather({ location: city, date1, date2 });
      console.log(weather);
    };
    getWeather();
  }, [chosenIndex, trips]);

  const handleSubmit = async ({ location, date1, date2 }) => {
    // const weather = await fetchWeather({ location, date1, date2 });
    // console.log(weather);
    setTrips((prevTrips) => {
      return [
        ...prevTrips,
        {
          city: location,
          date1: date1,
          date2: date2,
        },
      ];
    });
  };

  return (
    <StyledWrapper>
      <StyledLeftPart>
        <StyledHeader>
          Weather<b> Forecast</b>
        </StyledHeader>
        <StyledInputWrapper>
          <StyledIcon>
            <Search width="24px" />
          </StyledIcon>
          <StyledInput type="text" name="city" placeholder="Search your trip" />
        </StyledInputWrapper>
        <StyledList>
          {trips.map((trip, index) => (
            <Card
              trip={trip}
              key={index}
              isActive={chosenIndex === index}
              onCardClick={() => {
                setChosenIndex(index);
              }}
            />
          ))}

          <StyledButton onClick={() => setIsOpen(true)}>
            + <br /> Add trip
          </StyledButton>
          {isOpen && (
            <Modal setIsOpen={setIsOpen} handleSubmit={handleSubmit} />
          )}
        </StyledList>
        <StyledLine>
          <StyledLineTitle>Week</StyledLineTitle>
          <StyledLineList>
            <StyledLineItem>
              <StyledLineItemTitle>Day</StyledLineItemTitle>
              <StyledLineItemPic />
              <StyledLineItemText>00/00</StyledLineItemText>
            </StyledLineItem>
          </StyledLineList>
        </StyledLine>
      </StyledLeftPart>
      <StyledRightPart>
        <StyledRightBox>
          <StyledRightTitle>Day</StyledRightTitle>
          <StyledRightTemp>00ºC</StyledRightTemp>
          <StyledRightCity>City</StyledRightCity>
        </StyledRightBox>
        <StyledRightTimeBox>
          <StyledRightTimeItem>
            <StyledRightTime>00</StyledRightTime>
            <StyledRightText>days</StyledRightText>
          </StyledRightTimeItem>
          <StyledRightTimeItem>
            <StyledRightTime>00</StyledRightTime>
            <StyledRightText>hours</StyledRightText>
          </StyledRightTimeItem>
          <StyledRightTimeItem>
            <StyledRightTime>00</StyledRightTime>
            <StyledRightText>minutes</StyledRightText>
          </StyledRightTimeItem>
          <StyledRightTimeItem>
            <StyledRightTime>00</StyledRightTime>
            <StyledRightText>seconds</StyledRightText>
          </StyledRightTimeItem>
        </StyledRightTimeBox>
      </StyledRightPart>
    </StyledWrapper>
  );
};
