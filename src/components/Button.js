import React, { useContext } from "react";
import './button.css';
import { ThemeContext } from "../context/ThemeContext";

export default function Button({ onClick:player, value }) {
    const {theme} = useContext(ThemeContext)
    return ( 
        <button 
            onClick={player}
            className={theme ? 'button-30 light' : 'button-30 dark'}
        >
            {value}
        </button>
    );
}