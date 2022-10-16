import {
    ETemperature,
    ICoords,
    IWeather,
    IWeatherOptions,
} from '../interface/interface'
import axios from 'axios'
import { config } from '../config/config'

export const getWeather = async (
    coords: ICoords,
    options?: IWeatherOptions
): Promise<IWeather | IWeather[]> => {
    try {
        const { latitude, longitude } = coords
        let response
        if (!options?.days) {
            response = await axios.get(
                `${
                    config.main_url
                }/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${
                    options?.unitsTemp || ETemperature.Celsius
                }&appid=${config.API_KEY}`
            )
            return response.data.main
        } else {
            response = await axios.get(
                `${config.main_url}/data/2.5/forecast?lat=${latitude}&lon=${longitude}&cnt=${options.days}&units=metric&appid=${config.API_KEY}`
            )
            return response.data.list.map(
                (item: { main: IWeather }) => item.main
            )
        }
    } catch (err) {
        throw err
    }
}
