import {Dispatch} from "redux";
import {weatherAPI} from "../../api/weather-api";
import axios from "axios";


const initialState = {
    // weatherCity: {
    //     "coord": {
    //         "lon": 30.5167,
    //         "lat": 50.4333
    //     },
    //     "weather": [
    //         {
    //             "id": 803,
    //             "main": "Clouds",
    //             "description": "broken clouds",
    //             "icon": "04n"
    //         }
    //     ],
    //     "base": "stations",
    //     "main": {
    //         "temp": 11.29,
    //         "feels_like": 10.8,
    //         "temp_min": 10.37,
    //         "temp_max": 11.51,
    //         "pressure": 1008,
    //         "humidity": 89
    //     },
    //     "visibility": 10000,
    //     "wind": {
    //         "speed": 0.45,
    //         "deg": 200,
    //         "gust": 1.34
    //     },
    //     "clouds": {
    //         "all": 65
    //     },
    //     "dt": 1665341881,
    //     "sys": {
    //         "type": 2,
    //         "id": 2003742,
    //         "country": "UA",
    //         "sunrise": 1665288606,
    //         "sunset": 1665328809
    //     },
    //     "timezone": 10800,
    //     "id": 703448,
    //     "name": "Kyiv",
    //     "cod": 200
    // }
    weatherCity: null as any | null
}
type InitialStateType = typeof initialState

export const weatherReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "GET-WEATHER": {
            return {
                ...state,
                weatherCity: action.newWeather
            }
        }
        default:
            return state
    }

}

// thunks
export const weatherTC = (city:string) => (dispatch: Dispatch) => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},BY&appid=1357cef0833846f1ea708b7d7718827d&units=metric`)
        .then((res) => {
            console.log(res)
            dispatch(getWeatherAC(res.data))
        })
        .catch((e) => {
            console.log(e)
        })
}

// actions
export const getWeatherAC = (newWeather:any) => ({type: 'GET-WEATHER', newWeather} as const)

// types
export type weatherACActionType = ReturnType<typeof getWeatherAC>;

export type ActionsType =
    | weatherACActionType