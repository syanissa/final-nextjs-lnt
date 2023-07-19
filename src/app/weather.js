import React, { useState } from "react";
import { useClient } from "next/client"; // Import the useClient hook

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [inputKeyword, setInputKeyword] = useState("");
  const client = useClient(); // Use the useClient hook

  const handleSearch = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputKeyword}&appid=1fe5f03e8b679377cbc41601289edfdd&units=metric`
    )
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) => console.error("Error fetching data: ", error));
  };

  // Rest of your component code
};

export default Weather;
