import WeatherCard from "./WeatherCard";

export function WeatherForecast() {
	return (
		<section className="w-4/5 mx-auto">
			<h3 className="text-white text-2xl font-ws">Next 3 days forecast</h3>
			<div className="flex mt-10 pb-20 gap-10">
				<WeatherCard />
				<WeatherCard />
				<WeatherCard />
			</div>
		</section>
	);
}
