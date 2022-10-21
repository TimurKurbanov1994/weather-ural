import { ICoords } from '../interface/interface'
import axios from 'axios'
import { config } from '../config/config'

export async function getCurrentCoords(): Promise<ICoords> {
    try {
        const response = await axios.get(config.geo_url)
        return {
            latitude: response.data.latitude,
            longitude: response.data.longitude,
        }
    } catch (err) {
        throw err
    }
}
