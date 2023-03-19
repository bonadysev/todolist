import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {HeaderWeather} from "./HeaderWeather";
import {OpenWeather} from "./OpenWeather";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../app/store";
import {useEffect} from "react";
import {weatherTC} from "./weatherReducer";
import {SelectCity} from "./SelectCity";

export default function OpenWeatherMUI() {
    const dispatch = useDispatch()
    // const [city, setCity] = React.useState('');
    //
    // const handleChange = (event: SelectChangeEvent) => {
    //     setCity(event.target.value as string);
    // };

    // useEffect(() => {
    //     dispatch(weatherTC(city))
    // }, [city])

    const wet = (chosenCity: string) => {
      dispatch(weatherTC(chosenCity))
    }

    return (
        <Box sx={{ minWidth: 50, padding:2}}>
            {/*<FormControl fullWidth>*/}
            {/*    <InputLabel id="demo-simple-select-label">City</InputLabel>*/}
            {/*    <Select*/}
            {/*        labelId="demo-simple-select-label"*/}
            {/*        id="demo-simple-select"*/}
            {/*        value={city}*/}
            {/*        label="Age"*/}
            {/*        onChange={handleChange}*/}
            {/*    >*/}
            {/*        <MenuItem value={'Kiev'}>Kiev</MenuItem>*/}
            {/*        <MenuItem value={'Lviv'}>Lviv</MenuItem>*/}
            {/*    </Select>*/}
            {/*</FormControl>*/}
            <SelectCity cb={wet} />
            <OpenWeather/>
        </Box>
    )

}
