import { useState, useEffect } from "react";
import axios from "axios";

export default function WeatherWidget() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get("http://localhost:5000/weather");
        const data = response.data;
        setWeather({
          temperature: data.temperature,
          humidity: data.humidity,
          description: data.description,
          icon: data.icon,
          feelsLike: data.feelsLike,
          windSpeed: data.windSpeed,
          cityName: data.city,
          pressure: data.pressure,
          visibility: data.visibility,
        });
      } catch (err) {
        if (err.response?.status === 401) {
          setError("Invalid API key. Please check your OpenWeather API key.");
        } else if (err.response?.status === 429) {
          setError("API rate limit exceeded. Please try again later.");
        } else {
          setError("Unable to fetch weather data from server. Please make sure the backend is running.");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchWeather();
  }, []);

  if (loading) {
    return (
      <div className="card p-4 shadow-sm text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading weather...</span>
        </div>
        <p className="mt-2 mb-0">Loading weather data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="card p-4 shadow-sm">
        <div className="alert alert-danger mb-0" role="alert">
          <h6 className="alert-heading">Weather Error</h6>
          <p className="mb-0">{error}</p>
        </div>
      </div>
    );
  }

  if (!weather) return null;

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-primary text-white">
        <h5 className="mb-0">Current Weather in {weather.cityName}</h5>
      </div>
      <div className="card-body">
        <div className="text-center mb-3">
          <img
            src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
            alt={weather.description}
            style={{ width: "100px", height: "100px" }}
          />
          <h2 className="text-primary mb-1">{weather.temperature}°C</h2>
          <h5 className="text-capitalize mb-3">{weather.description}</h5>
        </div>
        <div className="row text-center">
          <div className="col-6 col-md-3 mb-2">
            <small className="text-muted d-block">Feels Like</small>
            <strong>{weather.feelsLike}°C</strong>
          </div>
          <div className="col-6 col-md-3 mb-2">
            <small className="text-muted d-block">Humidity</small>
            <strong>{weather.humidity}%</strong>
          </div>
          {weather.pressure && (
            <div className="col-6 col-md-3 mb-2">
              <small className="text-muted d-block">Pressure</small>
              <strong>{weather.pressure} hPa</strong>
            </div>
          )}
          {weather.windSpeed > 0 && (
            <div className="col-6 col-md-3 mb-2">
              <small className="text-muted d-block">Wind</small>
              <strong>{weather.windSpeed} m/s</strong>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
