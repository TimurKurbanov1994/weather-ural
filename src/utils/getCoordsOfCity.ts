import { ErrorMessage, ICoords } from '../interface/interface'
import axios from 'axios'
import { config } from '../config/config'

export async function getCoordsOfCity(
    city: string
): Promise<ICoords | ErrorMessage> {
    try {
        const response = await axios.get(
            `${config.main_url}/geo/1.0/direct?q=${city}&appid=${config.API_KEY}`
        )
        if (!response.data.length) {
            return {
                error: `The ${city} is not founded, please choose another city`,
            }
        } else {
            const { lat, lon } = response.data[0]
            return {
                latitude: lat,
                longitude: lon,
            }
        }
    } catch (err) {
        throw err
    }
}
