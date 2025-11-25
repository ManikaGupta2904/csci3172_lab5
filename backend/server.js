import express from "express";
import cors from "cors";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config({ path: join(dirname(fileURLToPath(import.meta.url)), '../.env') });

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

app.use(cors());
app.use(express.json());

const projectsPath = join(__dirname, 'projects.json');
const projects = JSON.parse(readFileSync(projectsPath, 'utf8'));

app.get("/projects", (req, res) => {
  try {
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

app.get("/weather", async (req, res) => {
  try {
    const apiKey = process.env.VITE_WEATHER_API_KEY;
    if (!apiKey) {
      return res.json({
        city: "Halifax",
        temperature: 15,
        humidity: 65,
        description: "partly cloudy",
        icon: "02d",
        feelsLike: 17,
        windSpeed: 12,
      });
    }
    const lat = 44.65;
    const lon = -63.57;
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
    );

    const data = response.data;
    const weatherData = {
      city: data.name,
      temperature: Math.round(data.main.temp),
      humidity: data.main.humidity,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      feelsLike: Math.round(data.main.feels_like),
      windSpeed: Math.round(data.wind?.speed || 0),
      pressure: data.main.pressure,
      visibility: data.visibility ? Math.round(data.visibility / 1000) : null,
    };
    res.json(weatherData);
  } catch (error) {
    if (error.response?.status === 401) {
      res.status(401).json({ error: 'Invalid OpenWeather API key' });
    } else if (error.response?.status === 429) {
      res.status(429).json({ error: 'API rate limit exceeded' });
    } else {
      res.status(500).json({ error: 'Failed to fetch weather data' });
    }
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));

app.use((error, req, res, next) => {
  res.status(500).json({
    error: 'Internal server error',
    message: error.message || 'Something went wrong'
  });
});

app.use((req, res) => {
  res.status(404).json({
    error: 'Route not found',
    message: `Cannot ${req.method} ${req.originalUrl}`,
    availableRoutes: ['/projects', '/weather']
  });
});
