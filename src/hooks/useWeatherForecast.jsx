import { useState, useEffect } from "react";

const useWeatherForecast = (city, unit = "metric", days = 3) => {
	const [weatherData, setWeatherData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchWeatherData = async () => {
			try {
				setLoading(true);
				setError(null);

				if (!city) {
					throw new Error("Please provide a valid city");
				}

				const apiKey = import.meta.env.VITE_SOME_OPM;
				const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${apiKey}`;

				const response = await fetch(apiUrl);

				if (!response.ok) {
					if (response.status === 404) {
						throw new Error("City not found. Please provide a valid city name");
					} else {
						throw new Error("Failed to fetch weather data");
					}
				}

				const data = await response.json();
				const groupedData = groupWeatherDataByDay(data.list, days);

				setWeatherData(groupedData);
			} catch (error) {
				setError(error.message || "Something went wrong");
			} finally {
				setLoading(false);
			}
		};

		fetchWeatherData();

		return () => setWeatherData(null); // Clear weather data on unmount or city change
	}, [city, days, unit]);

	const groupWeatherDataByDay = (list, days) => {
		const groupedData = [];

		for (let i = 0; i < days; i++) {
			const startIndex = i * 8; // Assuming 3-hour intervals, so 8 entries per day
			const endIndex = startIndex + 8;

			groupedData.push(list.slice(startIndex, endIndex));
		}

		return groupedData;
	};

	return { weatherData, loading, error };
};

export default useWeatherForecast;
