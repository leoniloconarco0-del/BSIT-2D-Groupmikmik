import { useState } from "react";
import "./Activity4.css";
import WeatherCard from "../../components/WeatherCard";

function Activity4() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeather = async () => {
    if (!city) return;

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const geo = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&country=PH`,
      );

      const geoData = await geo.json();

      if (!geoData.results) {
        setError("City not found in Philippines ❌");
        setLoading(false);
        return;
      }

      const { latitude, longitude, name } = geoData.results[0];

      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`,
      );

      const data = await res.json();

      setWeather({
        city: name,
        weather: data.current_weather,
      });

      setLoading(false);
    } catch (err) {
      setError("Failed to load weather ❌");
      setLoading(false);
    }
  };

  return (
    <div className="Activity4-container">
      <h1>PH Weather App</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Enter any PH city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={getWeather}>Search</button>
      </div>

      {loading && <p className="loader">Loading...</p>}
      {error && <p className="error">{error}</p>}

      {weather && <WeatherCard city={weather.city} weather={weather.weather} />}
    </div>
  );
}

export default Activity4;
