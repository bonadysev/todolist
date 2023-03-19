import axios, {AxiosResponse} from 'axios'

const instance = axios.create({
    baseURL: 'api.openweathermap.org',
    withCredentials: true,
    headers: {
        'API-KEY': '1357cef0833846f1ea708b7d7718827d'
    }
})

// api


export const weatherAPI = {
    getWeather() {
    return instance.get<any>('data/2.5/weather?q=Kiev,ua&appid=1357cef0833846f1ea708b7d7718827d&units=metric')
    }
}
// https://api.openweathermap.org/data/2.5/weather?q=Kiev,ua&appid=1357cef0833846f1ea708b7d7718827d&units=metric

// types
