function WeatherCard({ city, weather }) {
  return (
    <div className="card">
      <h2>📍 {city}</h2>

      <p>
        🌡️ Temperature: <b>{weather.temperature}°C</b>
      </p>
      <p>
        💨 Wind Speed: <b>{weather.windspeed} km/h</b>
      </p>

      <h3>
        {weather.temperature > 30
          ? "🔥 Hot Weather"
          : weather.temperature > 20
            ? "🌤️ Warm Weather"
            : "❄️ Cool Weather"}
      </h3>
    </div>
  );
}

export default WeatherCard;
