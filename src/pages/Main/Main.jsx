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
  StyledTitle,
  StyledLog,
  StyledBtn,
  StyledName,
  StyledInputLabel,
} from "./Main.styled";

import { useAuth0 } from "@auth0/auth0-react";

import { Card } from "../../components/Card/Card";
import { Modal } from "../../components/Modal/Modal";
import { ForecastItem } from "../../components/ForecastItem/ForecastItem";

import { ReactComponent as Search } from "../../assets/icons/search.svg";

import React, { useEffect, useState } from "react";
import { fetchWeather } from "../../services/api";
import { RightPart } from "../../components/RightPart/RightPart";

const initialTrips = JSON.parse(
  localStorage.getItem("trips") ||
    JSON.stringify([
      {
        city: "London",
        date1: new Date(Date.now() + 86400000).toISOString().split("T")[0],
        date2: new Date(Date.now() + 432000000).toISOString().split("T")[0],
      },
    ])
);

export const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chosenIndex, setChosenIndex] = useState(0);
  const [trips, setTrips] = useState(initialTrips);
  const [tripForecast, setTripForecast] = useState([]);
  const [search, setSearch] = useState("");
  const ref = React.useRef(null);

  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  useEffect(() => {
    localStorage.setItem("trips", JSON.stringify(trips));
  }, [trips]);

  useEffect(() => {
    const getWeather = async () => {
      const { city, date1, date2 } = trips[chosenIndex];
      const weather = await fetchWeather({ location: city, date1, date2 });
      setTripForecast(weather.days);
    };
    getWeather();
  }, [chosenIndex, trips]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

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

  const handleScroll = (offset) => {
    if (ref.current) {
      ref.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <StyledWrapper>
      <StyledLeftPart>
        <StyledHeader>
          <StyledTitle>
            Weather<b> Forecast</b>
          </StyledTitle>
          <StyledLog>
            {isAuthenticated && user ? (
              <StyledName>Hi, dear {user.name || user.email}!</StyledName>
            ) : null}
            {isAuthenticated ? (
              <StyledBtn
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </StyledBtn>
            ) : (
              <StyledBtn onClick={() => loginWithRedirect()}>Log in</StyledBtn>
            )}
          </StyledLog>
        </StyledHeader>
        <StyledInputWrapper>
          <StyledInputLabel>
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
          </StyledInputLabel>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "50px",
              marginBottom: "30px",
            }}
          >
            <StyledBtn onClick={() => handleScroll(-200)}>Prev</StyledBtn>
            <StyledBtn onClick={() => handleScroll(200)}>Next</StyledBtn>
          </div>
        </StyledInputWrapper>
        <StyledList ref={ref}>
          {trips
            .filter(({ city }) => {
              return city.toLowerCase().includes(search.toLowerCase());
            })
            .sort((a, b) => {
              return a.date1.localeCompare(b.date1);
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
