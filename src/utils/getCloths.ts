import { IMessageClothes } from '../interface/interface'

export const getCloths = (temp: number): IMessageClothes => {
    let messageClothes
    switch (true) {
        case temp > 30:
            messageClothes = 'Сap!'
            break
        case 21 < temp && temp < 29:
            messageClothes = 'T-shirt and shorts!'
            break
        case 11 < temp && temp < 21:
            messageClothes = 'Light shirt and jeans!'
            break
        case 0 < temp && temp < 10:
            messageClothes = 'Windbreaker and jeans!'
            break
        case temp < 0:
            messageClothes = 'Warm jacket with hat!'
            break
        default:
            messageClothes = 'Incorrect temperature'
    }
    return { messageClothes }
}
