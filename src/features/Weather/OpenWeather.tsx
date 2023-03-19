import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../app/store";
import OpenWeatherMUI from "./OpenWeatherMUI";
import {weatherTC} from "./weatherReducer";
import {HeaderWeather} from "./HeaderWeather";
import LinearProgress from '@mui/material/LinearProgress';
import {Typography} from "@mui/material";


export const OpenWeather = () => {
    // const dispatch = useDispatch()
    const weather = useAppSelector(state => state.weather.weatherCity)

    // useEffect(() => {
    //     dispatch(weatherTC("Kiev"))
    // }, [])

    return (
        <div>
            <Typography variant="h6" component="h6" color={'yellowgreen'}>Real time weather</Typography>
            {!weather
                ? <LinearProgress/>
                : <Typography variant="h6" component="h6" color={'blue'}>
                    <ul>
                        <li> Country: {weather.sys.country}</li>
                        <li> City: {weather.name}</li>
                        <li> Temperature: {weather.main.temp}</li>
                        <li> Maximum temperature: {weather.main.temp_max}</li>
                        <li> Minimum temperature: {weather.main.temp_min}</li>
                        <li> DD COORDINATES: {weather.coord.lat}</li>
                        <li> DMS COORDINATES: {weather.coord.lon}</li>
                        <li> Speed: {weather.wind.speed}</li>
                        <li> Gust: {weather.wind.gust}</li>
                        <li> Humidity: {weather.main.humidity}</li>
                    </ul>
                </Typography>
            }
        </div>
)
    ;
};

