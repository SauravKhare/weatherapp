export default function WeatherCard() {
	return (
		<div className="flex flex-col items-center border-2 border-sky-900 p-3 rounded-xl bg-sky-900 drop-shadow-xl">
			<p className="text-2xl text-white font-lora">23</p>
			<p>Some</p>
			<p>Min temp 23.9 °C</p>
			<p>Max temp 23.9 °C</p>
			<p>Humidity 50%</p>
			<p>Wind speed 2.06 Km/H</p>
		</div>
	);
}
