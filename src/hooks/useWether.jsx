import { useState, useEffect } from "react";

const useWeatherData = (city, unit) => {
	const [weatherData, setWeatherData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchWeatherData = async () => {
			try {
				const apiKey = import.meta.env.VITE_SOME_OPM;
				const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;

				const response = await fetch(apiUrl);

				if (!response.ok) {
					const errorText = await response.text();
					throw new Error(errorText);
				}

				const data = await response.json();

				if (data.cod && data.cod === "404") {
					throw new Error("City not found");
				}

				setWeatherData(data);
				setError(null);
			} catch (apiError) {
				setError(apiError.message);
			} finally {
				setLoading(false);
			}
		};

		fetchWeatherData();
	}, [city, unit]);

	return { weatherData, loading, error };
};

export default useWeatherData;
