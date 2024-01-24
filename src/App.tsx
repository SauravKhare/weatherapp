import { WeatherProvider } from "./context/weather";
import Navbar from "./components/Navbar";
import WeatherWidget from "./components/WeatherWidget";
import { WeatherForecast } from "./components/WeatherForecast";

function App() {
	return (
		<WeatherProvider>
			<div className="bg-sky-950 min-h-screen">
				<Navbar />
				<WeatherWidget />
				<WeatherForecast />
			</div>
		</WeatherProvider>
	);
}

export default App;
