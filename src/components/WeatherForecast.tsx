import { useContext } from "react";
import { WeatherContext } from "../context/weather";
import WeatherCard from "./WeatherCard";

export function WeatherForecast() {
	const data = useContext(WeatherContext);

	if (data.FD.loading) {
		<p>Loading</p>;
	} else {
		return (
			<section className="w-4/5 mx-auto">
				<h3 className="text-white text-2xl font-ws">Next 3 days forecast</h3>
				<div className="flex mt-5 pb-20 gap-10">
					{data?.FD?.weatherData.map((item) => (
						<WeatherCard data={item} unit={data?.unit} />
					))}
				</div>
			</section>
		);
	}
}
