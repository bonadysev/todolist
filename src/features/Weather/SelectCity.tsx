import React, {useEffect} from 'react';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {weatherTC} from "./weatherReducer";
import {useDispatch} from "react-redux";


type SelectPropsType = {
    cb: (city: string) => void
}

export const SelectCity = ({cb}: SelectPropsType) => {

    const [city, setCity] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setCity(event.target.value as string);
        cb(event.target.value)
    };

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select a city to view the weather forecast</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={city}
                label="Select a city to view the weather forecast"
                onChange={handleChange}
            >
                <MenuItem value={'Minsk'}>Minsk</MenuItem>
                <MenuItem value={'Hrodna'}>Hrodna</MenuItem>
                <MenuItem value={'Gomel'}>Gomel</MenuItem>
                <MenuItem value={'Mogilev'}>Mogilev</MenuItem>
                <MenuItem value={'Vitebsk'}>Vitebsk</MenuItem>
                <MenuItem value={'Brest'}>Brest</MenuItem>
            </Select>
        </FormControl>
    );
};
