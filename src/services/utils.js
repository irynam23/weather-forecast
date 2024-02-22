export const getDay = (dateTime) => {
  const date = dateTime ? new Date(dateTime) : new Date();
  const dayIndex = date.getDay();
  switch (dayIndex) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "Sunday";
  }
};

export const calcDiff = (startDate) => {
  const date = new Date(startDate);
  const ms = date.getTime() - Date.now();
  const days = Math.floor(ms / (24 * 60 * 60 * 1000));
  const daysms = ms % (24 * 60 * 60 * 1000);
  const hours = Math.floor(daysms / (60 * 60 * 1000));
  const hoursms = ms % (60 * 60 * 1000);
  const minutes = Math.floor(hoursms / (60 * 1000));
  const minutesms = ms % (60 * 1000);
  const seconds = Math.floor(minutesms / 1000);
  return { days, hours, minutes, seconds };
};

export const getForecastIcon = (conditions) => {
  return `/icons/${conditions}.svg`;
};
