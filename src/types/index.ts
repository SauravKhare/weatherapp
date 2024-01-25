export type WeatherContextType = {
  city: string,
  setCity: () => void,
  WD?: object,
  FD?: object,
  unit: string | boolean,
  setUnit: () => void
}

export type Error = {
  cod: string,
  message: string
}