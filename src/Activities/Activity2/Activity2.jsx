import { useState } from "react";
import "./Activity2.css";

function Activity2() {
  const [weather, setWeather] = useState("");
  const [result, setResult] = useState("");
  const [icon, setIcon] = useState("");

  const checkWeather = () => {
    const input = weather.toLowerCase();

    if (input === "sunny") {
      setResult("It's a bright and sunny day!");
      setIcon("☀️");
    } else if (input === "rainy") {
      setResult("Don't forget your umbrella!");
      setIcon("🌧️");
    } else if (input === "cloudy") {
      setResult("It's a bit gloomy today.");
      setIcon("☁️");
    } else {
      setResult("Weather not recognized");
      setIcon("❓");
    }
  };

  return (
    <div className="Activity2-weather-wrapper">
      <div className="Activity2-weather-card">
        <h1>🌦 Weather Checker</h1>

        <input
          type="text"
          placeholder="Enter weather (sunny, rainy, cloudy)"
          value={weather}
          onChange={(e) => setWeather(e.target.value)}
        />

        <button onClick={checkWeather}>Check Weather</button>

        {result && (
          <div className="result">
            <div className="icon">{icon}</div>
            <p>{result}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Activity2;
