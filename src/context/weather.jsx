import { useState, createContext } from "react";
import useWeatherData from "../hooks/useWether";
import useWeatherForecast from "../hooks/useWeatherForecast";

export const WeatherContext = createContext(null);

export function WeatherProvider({ children }) {
	const [city, setCity] = useState("Pune");
	const [unit, setUnit] = useState("metric");
	const WD = useWeatherData(city, unit);
	const FD = useWeatherForecast(city, unit);

	return (
		<WeatherContext.Provider value={{ city, setCity, WD, FD, unit, setUnit }}>
			{children}
		</WeatherContext.Provider>
	);
}
