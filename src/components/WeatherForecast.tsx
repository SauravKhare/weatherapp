// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useContext } from "react";
import { WeatherContext } from "../context/weather";
import WeatherCard from "./WeatherCard";

export function WeatherForecast() {
	const data = useContext(WeatherContext);

	if (data?.FD?.loading) {
		return (
			<div className="w-4/5 mx-auto mt-24 text-center">
				<p className="animate-pulse text-5xl text-white font-lora font-semibold">
					Loading
				</p>
			</div>
		);
	} else if (data?.FD?.error) {
		return (
			<div className="w-4/5 mx-auto mt-24 text-center">
				<p className="text-5xl text-white font-lora font-semibold"></p>
			</div>
		);
	} else {
		return (
			<section className="w-4/5 mx-auto">
				<h3 className="text-white text-2xl font-ws">Next 3 days forecast</h3>
				<div className="flex mt-5 pb-20 gap-10 max-md:flex-col">
					{data?.FD?.weatherData?.map((item) => (
						<WeatherCard key={item?.id} data={item} unit={data?.unit} />
					))}
				</div>
			</section>
		);
	}
}
