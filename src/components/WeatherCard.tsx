export default function WeatherCard({ data, unit }) {
	const date = new Date(data[4].dt_txt);
	return (
		<div className="flex flex-col items-center border-2 border-sky-900 p-3 rounded-xl bg-sky-900 drop-shadow-xl md:w-2/6	">
			<p className="text-white font-ws mb-1 text-sm">
				{date.toLocaleDateString("en-US", {
					weekday: "long",
				})}{" "}
				{date.getDate()} , {date.getHours()}:{date.getMinutes()}
			</p>
			<div className="flex">
				<img
					src={`https://openweathermap.org/img/wn/${data[4].weather.map(
						(item) => item?.icon
					)}.png`}
					alt=""
				/>
				<p className="text-3xl text-white font-lora text-center">
					{String(data[4].main.temp).slice(0, -1)}
					<sup className="text-sm">
						&deg;{data?.unit === "metric" ? "C" : "F"}
					</sup>
				</p>
			</div>
			<p className="text-white font-lora mb-3">
				{data[4].weather.map((item) => item?.main)}
			</p>
			<p className="text-white font-ws mb-1 text-sm">
				Min temp : {data[4].main.temp_min}{" "}
				<sup>&deg;{unit === "metric" ? "C" : "F"}</sup>
			</p>
			<p className="text-white font-ws mb-1 text-sm">
				Max temp : {data[4].main.temp_max}{" "}
				<sup>&deg;{unit === "metric" ? "C" : "F"}</sup>
			</p>
			<p className="text-white font-ws mb-1 text-sm">
				Humidity : {data[4].main.humidity} %
			</p>
			<p className="text-white font-ws mb-1 text-sm">
				Wind speed : {data[4].wind.speed} {unit === "metric" ? "Km/H" : "mph"}
			</p>
		</div>
	);
}
