import {
  StyledWrapper,
  StyledLeftPart,
  StyledInput,
  StyledList,
  StyledLine,
  StyledHeader,
  StyledInputWrapper,
  StyledIcon,
  StyledButton,
  StyledLineTitle,
  StyledLineList,
} from "./Main.styled";

import { useAuth0 } from "@auth0/auth0-react";

import { Card } from "../../components/Card/Card";
import { Modal } from "../../components/Modal/Modal";
import { ForecastItem } from "../../components/ForecastItem/ForecastItem";

import { ReactComponent as Search } from "../../assets/icons/search.svg";

import { useEffect, useState } from "react";
import { fetchWeather } from "../../services/api";
import { RightPart } from "../../components/RightPart/RightPart";

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
  const [tripForecast, setTripForecast] = useState([]);
  const [search, setSearch] = useState("");

  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  useEffect(() => {
    localStorage.setItem("trips", JSON.stringify(trips));
  }, [trips]);

  useEffect(() => {
    const getWeather = async () => {
      const { city, date1, date2 } = trips[chosenIndex];
      const weather = await fetchWeather({ location: city, date1, date2 });
      console.log(weather);
      setTripForecast(weather.days);
    };
    getWeather();
  }, [chosenIndex, trips]);

  const handleSubmit = async ({ location, date1, date2 }) => {
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
          <p>
            Weather<b> Forecast</b>
          </p>
          <div>
            {isAuthenticated ? (
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            ) : (
              <button onClick={() => loginWithRedirect()}>Log in</button>
            )}
          </div>
        </StyledHeader>
        <StyledInputWrapper>
          <StyledIcon>
            <Search width="24px" />
          </StyledIcon>
          <StyledInput
            type="text"
            name="city"
            placeholder="Search your trip"
            value={search}
            onChange={(evt) => {
              setSearch(evt.target.value.trim());
            }}
          />
        </StyledInputWrapper>
        <StyledList>
          {trips
            .filter(({ city }) => {
              return city.toLowerCase().includes(search.toLowerCase());
            })
            .map((trip, index) => (
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
            {tripForecast.map(({ icon, datetime, tempmax, tempmin }) => (
              <ForecastItem
                conditions={icon}
                datetime={datetime}
                tempmax={tempmax}
                tempmin={tempmin}
                key={datetime}
              />
            ))}
          </StyledLineList>
        </StyledLine>
      </StyledLeftPart>
      <RightPart
        city={trips[chosenIndex].city}
        startDate={trips[chosenIndex].date1}
      />
    </StyledWrapper>
  );
};
