import axios from "axios";

export const fetchWeather = async ({ location, date1, date2 }) => {
  const { data } = await axios.get(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${date1}/${date2}?unitGroup=metric&include=days&key=5V5ZJB5ZVJXFFP4BD6VSKZBJ4&contentType=json`
  );
  return data;
};
