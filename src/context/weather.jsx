import { useState, createContext } from "react";
import useWeatherData from "../hooks/useWether";

export const WeatherContext = createContext(null);

export function WeatherProvider({ children }) {
	const [city, setCity] = useState("Pune");
	const [unit, setUnit] = useState("metric");
	const WD = useWeatherData(city, unit);
	// const [data, setData] = useState({});

	// useEffect(() => {
	// 	setData(WD);
	// }, []);

	return (
		<WeatherContext.Provider value={{ city, setCity, WD, setUnit }}>
			{children}
		</WeatherContext.Provider>
	);
}
