import React from 'react';
import {Link} from "react-router-dom";


export const HeaderWeather = () => {
    return (
        <header>
            <nav>
                <hr/>
                <li>
                    <Link to = {'/'}> Todolist </Link>
                </li>
                {/*<li>*/}
                {/*    <Link to = {'/weather'}> weather </Link>*/}
                {/*</li>*/}
                <li>
                    <Link to = {'/weathermui'}> weathermui </Link>
                </li>
                <hr/>
            </nav>

        </header>
    );
};

