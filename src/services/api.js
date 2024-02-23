import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

export const fetchWeather = async ({ location, date1, date2 }) => {
  const { data } = await axios.get(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${date1}/${date2}?unitGroup=metric&include=days&key=${apiKey}&contentType=json`
  );
  return data;
};

export const fetchCurrentWeather = async (location) => {
  const { data } = await axios.get(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?unitGroup=metric&include=days
&key=${apiKey}&contentType=json`
  );
  return data;
};
