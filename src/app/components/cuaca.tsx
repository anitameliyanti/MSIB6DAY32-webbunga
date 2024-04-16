import React, { useState } from 'react';
import axios from 'axios';

const Cuaca: React.FC = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [city, setCity] = useState<string>('');

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f8b311a822541bb1baca45d8059f73d7`);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div>
      <h2>Cek Cuaca</h2>
      <input
        type="text"
        placeholder="Masukkan nama kota..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeatherData}>Cek Cuaca</button>
      {weatherData && (
        <div>
          <h3>{weatherData.name}, {weatherData.sys.country}</h3>
          {weatherData.weather && (
            <p>Cuaca: {weatherData.weather[0].description}</p>
          )}
          {weatherData.main && (
            <p>Temperatur: {weatherData.main.temp}°C</p>
          )}
          {weatherData.main && (
            <p>Kelembaban: {weatherData.main.humidity}%</p>
          )}
          {weatherData.wind && (
            <p>Kecepatan Angin: {weatherData.wind.speed} m/s</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Cuaca;
