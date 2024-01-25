import { useState, createContext, ReactNode } from "react";
import useWeatherData from "../hooks/useWether";
import useWeatherForecast from "../hooks/useWeatherForecast";
import { WeatherContextType } from "../types";

export const WeatherContext = createContext<WeatherContextType>(null);

export function WeatherProvider({ children }: { children: ReactNode }) {
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
