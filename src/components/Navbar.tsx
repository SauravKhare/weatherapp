import { useContext, useState } from "react";
import { WeatherContext } from "../context/weather";

export default function Navbar() {
	const weatherContext = useContext(WeatherContext);
	const [city, setCityLocal] = useState(weatherContext?.city ?? "");
	const date = new Date();

	function handleCity() {
		weatherContext?.setCity(city);
	}
	return (
		<div className="w-4/5 mx-auto py-7">
			<div className="flex max-md:flex-col justify-between items-center">
				<div className="flex items-end max-md:mb-2">
					<p className="text-4xl font-lora text-slate-200	 font-semibold mr-3">
						Weather
					</p>
					<p className="text-slate-200	">({weatherContext?.city})</p>
				</div>
				<div className="max-md:mb-5">
					<p className="text-white font-ws text-1xl font-normal">
						{date.toLocaleDateString("en-US", {
							weekday: "long",
						})}{" "}
						{date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}{" "}
						{date.getHours()}:{date.getMinutes()}
					</p>
				</div>
				<div>
					<input
						type="text"
						name="city"
						id="city"
						placeholder="Enter your city here."
						className="px-6 py-3 rounded-full w-80 mr-5 max-md:mb-2"
						value={city}
						onChange={(e) => setCityLocal(e.target.value)}
					/>
					<button
						onClick={handleCity}
						className="px-2 py-3 rounded-full bg-blue-900 text-white w-36 mr-5"
					>
						Submit
					</button>
					<button
						onClick={() =>
							weatherContext?.setUnit(
								weatherContext?.unit === "metric" ? "imperial" : "metric"
							)
						}
						className="px-2 py-2.5 rounded-full border-4 border-blue-900 text-white w-36 font-semibold"
					>
						{weatherContext?.unit === "metric" ? "Celsius" : "Fahrenheit"}
					</button>
				</div>
			</div>
		</div>
	);
}
