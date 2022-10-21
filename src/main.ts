import {
    ErrorMessage,
    ICoords,
    IMessageClothes,
    IWeather,
    IWeatherOptions,
} from './interface/interface'
import { getCurrentCoords } from './utils/getCurrentCoords'
import { getWeather } from './utils/getWeather'
import { getCoordsOfCity } from './utils/getCoordsOfCity'
import { getCloths } from './utils/getCloths'

class Weather {
    current_coords: Promise<ICoords>

    constructor() {
        this.current_coords = getCurrentCoords()
    }

    async now(options?: IWeatherOptions): Promise<IWeather | IWeather[]> {
        const coords = await this.current_coords
        return await getWeather(coords, options)
    }

    async now_city(city: string): Promise<any> {
        const coords = await getCoordsOfCity(city)
        if (<ErrorMessage>coords) return coords
        return await getWeather(<ICoords>coords)
    }

    async getClothes(): Promise<IMessageClothes> {
        const coords = await this.current_coords
        const dataWeather = await getWeather(coords)
        if ('temp' in dataWeather && dataWeather?.temp) {
            return getCloths(dataWeather.temp)
        } else {
            return { messageClothes: 'API operation error' }
        }
    }
}

module.exports = Weather;
