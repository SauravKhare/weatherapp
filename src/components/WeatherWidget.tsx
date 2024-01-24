import { useContext } from "react";
import { WeatherContext } from "../context/weather";
// import useWeatherForecast from "../hooks/useWeatherForecast";

function WeatherWidget() {
	const data = useContext(WeatherContext);

	if (data.WD.loading) {
		return <h1>Loading....</h1>;
	} else {
		return (
			<section className="w-4/5 mx-auto mt-24 mb-10">
				<div className="flex">
					<div className="flex flex-col">
						<div className="flex">
							<h2 className="text-9xl text-white font-lora font-semibold">
								{String(data?.WD?.weatherData?.main?.temp).slice(0, -1)}
							</h2>
							<sup className="text-white font-ws font-semibold ml-1 text-2xl">
								&deg;{data?.unit === "metric" ? "C" : "F"}
							</sup>
						</div>
						<p className="text-white font-ws">
							Feels like{" "}
							{String(data?.WD?.weatherData?.main?.feels_like).slice(0, -1)}{" "}
							<sup>&deg;{data?.unit === "metric" ? "C" : "F"}</sup>
						</p>
					</div>
					<div>
						<img
							src={`https://openweathermap.org/img/wn/${data?.WD?.weatherData?.weather.map(
								(item) => item?.icon
							)}@4x.png`}
							alt=""
						/>
					</div>
					<div className="pt-3">
						<p className="text-white font-lora text-4xl mb-2">
							{data?.WD?.weatherData?.weather.map((item) => item?.main)}{" "}
							<span className="text-xl">
								(
								{data?.WD?.weatherData?.weather.map(
									(item) => item?.description
								)}
								)
							</span>
						</p>
						<p className="text-white font-ws mb-1 text-sm">
							Min temp :{" "}
							{String(data?.WD?.weatherData?.main?.temp_min).slice(0, -1)}{" "}
							<sup>&deg;{data?.unit === "metric" ? "C" : "F"}</sup>
						</p>
						<p className="text-white font-ws mb-1 text-sm">
							Max temp :{" "}
							{String(data?.WD?.weatherData?.main?.temp_max).slice(0, -1)}{" "}
							<sup>&deg;{data?.unit === "metric" ? "C" : "F"}</sup>
						</p>
						<p className="text-white font-ws mb-1 text-sm">
							Humidity : {String(data?.WD?.weatherData?.main?.humidity)}%
						</p>
						<p className="text-white font-ws mb-1 text-sm">
							Wind speed : {String(data?.WD?.weatherData?.wind?.speed)}{" "}
							{data?.unit === "metric" ? "Km/H" : "mph"}
						</p>
					</div>
				</div>
			</section>
		);
	}
}

export default WeatherWidget;
