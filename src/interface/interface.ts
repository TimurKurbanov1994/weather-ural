export interface ICoords {
    latitude: number
    longitude: number
}

export interface IWeather {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
    sea_level: number
    grnd_level: number
}

export interface ErrorMessage {
    error: string
}

export interface IWeatherOptions {
    days?: number
    unitsTemp?: ETemperature
}

export enum ETemperature {
    Kelvin = 'standard',
    Fahrenheit = 'imperial',
    Celsius = 'metric',
}

export interface IMessageClothes {
    messageClothes: string
}
