import { Dispatch, SetStateAction } from "react"

export type Error = {
  cod: string,
  message: string
}

export type UseWeatherType = {
  weatherData: WeatherContextType
  loading: string,
  error: string
}

export type WeatherContextType = {
  city: string,
  setCity: Dispatch<SetStateAction<string>>,
  WD: unknown,
  FD: unknown,
  unit: string,
  setUnit: Dispatch<SetStateAction<string>>,
} | null;